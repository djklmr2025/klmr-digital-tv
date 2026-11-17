"""Index the electronic-music video library in the DJKLMR Drive (read-only).

Writes catalog/library.json: every candidate extra with its Drive id, folder, duration and resolution.
Uses the OAuth helper in C:\\Ruta\\boveda_drive.py (token never leaves C:\\Ruta\\_PRIVADO).

    uv run --no-project --with google-api-python-client --with google-auth-oauthlib python scripts/drive_library.py
"""
import json
import re
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, r"C:\Ruta")
import boveda_drive  # noqa: E402

VIDEOS_FOLDER = "1Dxm1UTAxH-dyFWREh6hNnblnh3uK0S7u"  # DJKLMR/Videos, re-uploaded 2026-11-11 (the old ids are gone)
# Owner's order (2026-11-16): the rotation drains these first, in this order, then the other electronic folders.
PRIORITY = ("videos alls", "jazz beat", "electro house")
OTHER_PRIORITY = 9
BLOCKED_NAME = re.compile(r"roberth|quiroga", re.I)  # same DJ as the blocked folder, credited in file names
# Owner (2026-11-17): no regional Mexican on air unless it is an electronic remix/edit of it.
REGIONAL = re.compile(r"calibre 50|corrido|grupo firme|peso pluma|fuerza regida|natanael|junior h|carin le[oó]n|"
                      r"eslab[oó]n armado|alfredo olivas|conriquez|de la sierra|mi banda el mexicano|sonidos de terror", re.I)
REMIX = re.compile(r"remix|edit|bootleg|mix\b", re.I)
CATALOG = Path(__file__).resolve().parent.parent / "catalog"
CREDITS = re.compile(r"\b(by|ft|feat|vj|v?djklmr|vdj|klmr|official|oficial|video|videoclip|vremix|vedit|vmost|theme|"
                     r"version|hd|mp3|director de escena codex)\b", re.I)
MIN_KEY = 10
ELECTRONIC = re.compile(r"electro|edm|house|deep|tech|trance|dance|hard ?style|drum|plastika|rufus|transition|edc|disco|techno|jpop", re.I)
# "Tech House Comercial" is another DJ's material (Roberth Steve Quiroga): owner asked never to air it.
NOT_ELECTRONIC = re.compile(r"banda|tech house comercial", re.I)
MIN_SECONDS = 90
MAX_SECONDS = 600
OUT = Path(__file__).resolve().parent.parent / "catalog" / "library.json"


def children(svc, folder_id, query_extra):
    token = None
    while True:
        resp = svc.files().list(
            q=f"'{folder_id}' in parents and trashed = false and {query_extra}",
            fields="nextPageToken, files(id, name, mimeType, size, videoMediaMetadata)",
            pageSize=1000, pageToken=token,
            supportsAllDrives=True, includeItemsFromAllDrives=True).execute()
        yield from resp.get("files", [])
        token = resp.get("nextPageToken")
        if not token:
            return


def videos_under(svc, folder_id, path):
    for f in children(svc, folder_id, "(mimeType = 'application/vnd.google-apps.folder' or mimeType contains 'video/')"):
        if f["mimeType"].endswith(".folder"):
            yield from videos_under(svc, f["id"], f"{path}/{f['name']}")
        else:
            yield f, path


def priority_of(folder_name):
    name = folder_name.strip().lower()
    return PRIORITY.index(name) + 1 if name in PRIORITY else OTHER_PRIORITY


def title_keys(text):
    """Comparable keys of a title: the whole name and each " - " part, without credits or punctuation."""
    stem = re.sub(r"\.(mp4|m4v|mov|mkv|webm|avi|mpg|mpeg|wmv)$", "", text, flags=re.I)
    stem = unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode().replace("_", " ")
    stem = re.sub(r"[\(\[][^\)\]]*[\)\]]", " ", stem)
    parts = [stem] + stem.split(" - ")
    keys = {re.sub(r"[^a-z0-9]", "", CREDITS.sub(" ", p.lower())) for p in parts}
    return {k for k in keys if len(k) >= MIN_KEY}


def fixed_tracks():
    """Official-channel tracks, on air and retired, as (track, retired?) for duplicate detection."""
    active = json.loads((CATALOG / "active.json").read_text(encoding="utf-8"))
    retired = json.loads((CATALOG / "retired.json").read_text(encoding="utf-8"))
    tracks = [(t, False) for t in active] + [(r["track"], True) for r in retired]
    return [(t, gone) for t, gone in tracks if t["id"].startswith("yt-")]


def mark_duplicates(library):
    """A folder copy of an official-channel track never airs twice; it is flagged when its picture is larger."""
    by_key = {}
    for track, gone in fixed_tracks():
        for key in title_keys(track["title"]):
            by_key.setdefault(key, (track, gone))
    for entry in library:
        match = next((by_key[k] for k in title_keys(entry["name"]) if k in by_key), None)
        if not match:
            continue
        track, gone = match
        entry["duplicateOf"] = track["id"]
        ours = min(entry.get("width") or 0, entry.get("height") or 0)
        theirs = min(track.get("width") or 0, track.get("height") or 0)
        entry["betterThanFixed"] = ours > theirs and ours >= 720
        entry["fixedRetired"] = gone


def main():
    svc = boveda_drive.servicio()
    previous = {(e["folder"], e["name"]): e for e in (json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else [])}
    folders = list(children(svc, VIDEOS_FOLDER, "mimeType = 'application/vnd.google-apps.folder'"))
    chosen = sorted((f for f in folders if priority_of(f["name"]) != OTHER_PRIORITY
                     or (ELECTRONIC.search(f["name"]) and not NOT_ELECTRONIC.search(f["name"]))),
                    key=lambda f: (priority_of(f["name"]), f["name"].lower()))
    print(f"{len(folders)} carpetas de género, {len(chosen)} elegidas:")
    library, skipped = [], {"sin_duracion": 0, "muy_corto_o_largo": 0, "otro_dj": 0}
    for folder in chosen:
        count = 0
        for f, path in videos_under(svc, folder["id"], folder["name"]):
            meta = f.get("videoMediaMetadata") or {}
            seconds = int(meta.get("durationMillis", 0)) // 1000
            if BLOCKED_NAME.search(f["name"]) or (REGIONAL.search(f["name"]) and not REMIX.search(f["name"])):
                skipped["otro_dj"] += 1
                continue
            if not seconds:
                skipped["sin_duracion"] += 1
                continue
            if not MIN_SECONDS <= seconds <= MAX_SECONDS:
                skipped["muy_corto_o_largo"] += 1
                continue
            old = previous.get((path, f["name"]), {})
            entry = {
                # driveId is the track identity (kept from before the re-upload); fileId is where the file lives now
                "driveId": old.get("driveId", f["id"]), "fileId": f["id"], "name": f["name"], "folder": path,
                "duration": seconds, "width": meta.get("width"), "height": meta.get("height"),
                "sizeMB": round(int(f.get("size", 0)) / 1e6, 1), "priority": priority_of(folder["name"]),
            }
            if "motion" in old:
                entry["motion"] = old["motion"]
            library.append(entry)
            count += 1
        print(f"  {folder['name']}: {count}")
    mark_duplicates(library)
    OUT.write_text(json.dumps(library, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    hours = sum(v["duration"] for v in library) / 3600
    gb = sum(v["sizeMB"] for v in library) / 1000
    print(f"Biblioteca: {len(library)} videos, {hours:.1f} h, {gb:.1f} GB. Omitidos: {skipped}")
    for entry in (e for e in library if e.get("duplicateOf")):
        note = "MEJOR que el del canal" if entry["betterThanFixed"] else "igual o menor"
        print(f"  duplicado de {entry['duplicateOf']}: {entry['folder']}/{entry['name']} "
              f"({entry.get('width')}x{entry.get('height')}, {note})")


if __name__ == "__main__":
    main()
