"""Copy the official-channel videos (GitHub release v2.0-catalog) to Cloudflare R2.

GitHub release downloads crawl at ~1 Mbps per connection, so 1080p tracks stall on Web and Roku.
This mirrors every on-air yt-* track to R2 (faststart, no re-encode) and writes catalog/official_r2.json
({id: r2_url}). Nothing on air changes until --apply rewrites url/mp4Url in catalog/active.json.

    uv run --no-project --with boto3 python scripts/mirror_official_to_r2.py           # copy (resumable)
    uv run --no-project --with boto3 python scripts/mirror_official_to_r2.py --apply   # point the catalog at R2
"""
import json
import os
import subprocess
import sys
import tempfile
import threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import boto3

ROOT = Path(__file__).resolve().parent.parent
ACTIVE = ROOT / "catalog" / "active.json"
MAP = ROOT / "catalog" / "official_r2.json"
FFMPEG = r"C:\Users\Arkaios\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"
PREFIX = "oficial"
WORKERS = 12
lock = threading.Lock()


def load_map():
    return json.loads(MAP.read_text(encoding="utf-8")) if MAP.exists() else {}


def save_map(data):
    MAP.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def mirror(track, s3, bucket, public, done):
    key = f"{PREFIX}/{track['id']}.mp4"
    with tempfile.TemporaryDirectory() as tmp:
        src, out = Path(tmp) / "src.mp4", Path(tmp) / "out.mp4"
        subprocess.run(["curl.exe", "-s", "-L", "--fail", "--retry", "5", "-o", str(src), track["url"]], check=True)
        subprocess.run([FFMPEG, "-v", "error", "-y", "-i", str(src), "-c", "copy", "-movflags", "+faststart", str(out)],
                       check=True)
        s3.upload_file(str(out), bucket, key, ExtraArgs={"ContentType": "video/mp4"})
    with lock:
        done[track["id"]] = f"{public}/{key}"
        save_map(done)
        print(f"  [{len(done)}] {track['title'][:70]}", flush=True)


def apply(done):
    active = json.loads(ACTIVE.read_text(encoding="utf-8"))
    changed = 0
    for t in active:
        if t["id"] in done:
            t["url"] = t["mp4Url"] = done[t["id"]]
            changed += 1
    ACTIVE.write_text(json.dumps(active, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{changed} videos oficiales apuntan ahora a R2.")


def main():
    done = load_map()
    if "--apply" in sys.argv:
        return apply(done)
    public, bucket = os.environ["R2_PUBLIC_URL"].rstrip("/"), os.environ["R2_BUCKET"]
    s3 = boto3.client("s3", endpoint_url=f"https://{os.environ['R2_ACCOUNT_ID']}.r2.cloudflarestorage.com",
                      aws_access_key_id=os.environ["R2_ACCESS_KEY_ID"],
                      aws_secret_access_key=os.environ["R2_SECRET_ACCESS_KEY"], region_name="auto")
    todo = [t for t in json.loads(ACTIVE.read_text(encoding="utf-8"))
            if t["id"].startswith("yt-") and t["id"] not in done and "github.com" in t["url"]]
    print(f"{len(todo)} videos oficiales por copiar a R2.", flush=True)

    def work(track):
        try:
            mirror(track, s3, bucket, public, done)
        except Exception as exc:  # one failed download must not stop the rest; re-run to retry
            print(f"  fallo: {track['title'][:60]}: {str(exc)[:120]}", flush=True)

    with ThreadPoolExecutor(WORKERS) as pool:
        list(pool.map(work, todo))
    print(f"Listo: {len(done)} en R2.")


if __name__ == "__main__":
    main()
