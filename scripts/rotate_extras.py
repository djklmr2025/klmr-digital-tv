"""KLMR extras rotation: swap a few extras per run with videos from the DJKLMR Drive library.

- The 72 `yt-*` tracks of KLMR OFFICIAL CHANNEL HD are fixed and never rotate.
- Each run, the SWAP extras that have been on air longest leave, and SWAP new ones from
  catalog/library.json come in (only scanned videos with real motion). Nothing is deleted:
  leavers go to the back of the queue and return later; media stays on Drive and R2.
- New media is copied Drive -> R2 (H.264/AAC MP4 with faststart, transcoded only if needed).
- catalog/schedule.json gets anchor = now, so Web and Roku start the new list at track 1.

    uv run --no-project --with google-api-python-client --with google-auth-oauthlib --with boto3 \
        python scripts/rotate_extras.py [--dry-run] [--no-push]

R2 keys come from env R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY (never from files in the repo).
Without them the run is a dry run.
"""
import argparse
import json
import os
import random
import re
import subprocess
import sys
import tempfile
import time
from pathlib import Path

sys.path.insert(0, r"C:\Ruta")

ROOT = Path(__file__).resolve().parent.parent
CATALOG = ROOT / "catalog"
ACTIVE, LIBRARY, STATE, SCHEDULE = (CATALOG / n for n in ("active.json", "library.json", "rotation.json", "schedule.json"))
FFMPEG_DIR = Path(r"C:\Users\Arkaios\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin")
R2_ACCOUNT = os.environ.get("R2_ACCOUNT_ID", "6537ec0e12dbf4fca196ff3e1128326e")
R2_BUCKET = os.environ.get("R2_BUCKET", "klmr-vault-hd")
R2_PUBLIC = os.environ.get("R2_PUBLIC_URL", "https://pub-00ab8b5a231a4f97a7c0cfc929a33773.r2.dev").rstrip("/")
R2_PREFIX = "videos-rotacion"
SWAP = int(os.environ.get("KLMR_ROTATION_SWAP", "12"))
STATIC_MOTION = 8.5


def load(path, default=None):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else default


def save(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def track_id(drive_id):
    return f"drive-{drive_id[:12]}"


def describe(entry):
    stem = re.sub(r"\.(mp4|m4v|mov|mkv|webm|avi|mpg|mpeg|wmv)$", "", entry["name"], flags=re.I).replace("_", " ").strip()
    artist = stem.split(" - ", 1)[0].strip() if " - " in stem else "KLMR Vault"
    genre = entry["folder"].split("/")[0].upper()
    return {"id": track_id(entry["driveId"]), "title": stem, "artist": artist, "genre": f"{genre} / KLMR HD",
            "badge": "CLOUDFLARE R2 VAULT HD", "youtubeId": None, "source": "drive",
            "duration": entry["duration"], "format": "mp4"}


def init_state(active, library):
    """First run: today's extras are the on-air set (oldest first); the eligible library is the queue."""
    on_air = [t["id"] for t in active if not t["id"].startswith("yt-")]
    eligible = [e for e in library if (e.get("motion") or 0) > STATIC_MOTION and track_id(e["driveId"]) not in on_air]
    random.Random(2026).shuffle(eligible)
    return {"onAir": on_air, "queue": [e["driveId"] for e in eligible], "parked": {}, "hosted": [], "history": []}


def pick_incoming(state, library_by_id, retired_ids):
    """Next SWAP items from the queue: ("parked", track) already hosted, or ("library", entry) to copy."""
    incoming, skipped = [], []
    while state["queue"] and len(incoming) < SWAP:
        item = state["queue"].pop(0)
        if item in state["parked"]:
            if item not in retired_ids and item not in state["onAir"]:
                incoming.append(("parked", state["parked"][item]))
            continue
        entry = library_by_id.get(item)
        if not entry or track_id(item) in retired_ids or track_id(item) in state["onAir"]:
            continue
        if entry.get("motion") is None:
            skipped.append(item)  # not scanned yet: keep it for a later run
            continue
        if entry["motion"] > STATIC_MOTION:
            incoming.append(("library", entry))
    state["queue"].extend(skipped)
    return incoming


def ensure_on_r2(entry, s3, dry_run, hosted):
    key = f"{R2_PREFIX}/{track_id(entry['driveId'])}.mp4"
    url = f"{R2_PUBLIC}/{key}"
    if dry_run or entry["driveId"] in hosted:
        return url
    import boveda_drive
    from googleapiclient.http import MediaIoBaseDownload
    svc = boveda_drive.servicio()
    with tempfile.TemporaryDirectory() as tmp:
        src, out = Path(tmp) / "src", Path(tmp) / "out.mp4"
        with open(src, "wb") as fh:
            dl = MediaIoBaseDownload(fh, svc.files().get_media(fileId=entry["driveId"]), chunksize=32 * 1024 * 1024)
            done = False
            while not done:
                _, done = dl.next_chunk()
        codecs = subprocess.run([str(FFMPEG_DIR / "ffprobe.exe"), "-v", "error", "-show_entries", "stream=codec_name",
                                 "-of", "csv=p=0", str(src)], capture_output=True, text=True).stdout.split()
        copy_ok = "h264" in codecs and ("aac" in codecs or len(codecs) == 1)
        video = ["-c", "copy"] if copy_ok else ["-c:v", "libx264", "-preset", "veryfast", "-crf", "21",
                                                "-vf", "scale='min(1920,iw)':-2", "-c:a", "aac", "-b:a", "192k"]
        subprocess.run([str(FFMPEG_DIR / "ffmpeg.exe"), "-v", "error", "-y", "-i", str(src), *video,
                        "-movflags", "+faststart", str(out)], check=True)
        s3.upload_file(str(out), R2_BUCKET, key, ExtraArgs={"ContentType": "video/mp4"})
    return url


def r2_client():
    key, secret = os.environ.get("R2_ACCESS_KEY_ID"), os.environ.get("R2_SECRET_ACCESS_KEY")
    if not key or not secret:
        return None
    import boto3
    return boto3.client("s3", endpoint_url=f"https://{R2_ACCOUNT}.r2.cloudflarestorage.com",
                        aws_access_key_id=key, aws_secret_access_key=secret, region_name="auto")


def git_publish(message):
    subprocess.run(["npm", "test"], cwd=ROOT, check=True, shell=True)
    subprocess.run(["git", "add", "catalog/active.json", "catalog/schedule.json", "app.js"], cwd=ROOT, check=True)
    subprocess.run(["git", "commit", "-q", "-m", message], cwd=ROOT, check=True)
    subprocess.run(["git", "push", "-q", "origin", "main"], cwd=ROOT, check=True)


def main():
    args = argparse.ArgumentParser()
    args.add_argument("--dry-run", action="store_true")
    args.add_argument("--no-push", action="store_true")
    opts = args.parse_args()

    s3 = None if opts.dry_run else r2_client()
    dry_run = opts.dry_run or s3 is None
    active, library = load(ACTIVE), load(LIBRARY, [])
    library_by_id = {e["driveId"]: e for e in library}
    retired_ids = {r["track"]["id"] for r in load(CATALOG / "retired.json", [])}
    state = load(STATE) or init_state(active, library)
    by_id = {t["id"]: t for t in active}

    incoming = pick_incoming(state, library_by_id, retired_ids)
    if not incoming:
        print("Nada nuevo que rotar (biblioteca sin escanear o agotada).")
        return
    leaving = state["onAir"][:len(incoming)]

    new_tracks = []
    for kind, item in incoming:
        if kind == "parked":
            new_tracks.append(item)
            print(f"  regresa: {item['title']}")
            continue
        url = ensure_on_r2(item, s3, dry_run, state["hosted"])
        if not dry_run and item["driveId"] not in state["hosted"]:
            state["hosted"].append(item["driveId"])
        new_tracks.append({**describe(item), "url": url, "mp4Url": url})
        print(f"  entra:   {item['name']} ({item['folder']})")
    for tid in leaving:
        print(f"  sale:    {by_id[tid]['title'] if tid in by_id else tid}")

    for tid in leaving:  # leavers keep their metadata (already hosted on R2) and return from the queue later
        if tid in by_id:
            state["parked"][tid] = by_id[tid]
            state["queue"].append(tid)
    state["onAir"] = state["onAir"][len(incoming):] + [t["id"] for t in new_tracks]
    state["history"] = (state["history"] + [{"at": int(time.time()), "in": [t["id"] for t in new_tracks], "out": leaving}])[-60:]

    fixed = [t for t in active if t["id"].startswith("yt-")]
    extras = {t["id"]: t for t in active if not t["id"].startswith("yt-")}
    extras.update({t["id"]: t for t in new_tracks})
    extras.update({tid: t for tid, t in state["parked"].items() if tid in state["onAir"]})
    new_active = fixed + [extras[tid] for tid in state["onAir"] if tid in extras]
    for tid in state["onAir"]:
        state["parked"].pop(tid, None)

    if dry_run:
        print(f"[simulación] {len(new_active)} al aire ({len(fixed)} fijos + {len(new_active) - len(fixed)} extras). "
              "Nada se escribió: faltan R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY o se pidió --dry-run.")
        return
    save(ACTIVE, new_active)
    save(STATE, state)
    save(SCHEDULE, {"anchor": int(time.time())})
    subprocess.run(["node", "scripts/catalog.js", "check"], cwd=ROOT, check=True, shell=True)
    if not opts.no_push:
        git_publish(f"chore(rotacion): entran {len(new_tracks)} extras, salen {len(leaving)}")
    print("Rotación publicada.")


if __name__ == "__main__":
    main()
