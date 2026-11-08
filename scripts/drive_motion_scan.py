"""Motion scan of catalog/library.json straight from Drive (ffmpeg seeks, no full downloads).

Adds "motion" (mean frame difference over 6 samples) to each library entry; entries with
motion <= STATIC_THRESHOLD are still image + audio and never go on air. Resumable: entries that
already have "motion" are skipped. Same measure as the web/Roku catalog scan of 2026-11-07.

    uv run --no-project --with google-api-python-client --with google-auth-oauthlib python scripts/drive_motion_scan.py
"""
import json
import subprocess
import sys
import threading
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from google.auth.transport.requests import Request

sys.path.insert(0, r"C:\Ruta")
import boveda_drive  # noqa: E402

FFMPEG = r"C:\Users\Arkaios\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"
LIBRARY = Path(__file__).resolve().parent.parent / "catalog" / "library.json"
POINTS = (0.12, 0.28, 0.44, 0.6, 0.76, 0.9)
W, H = 64, 36
WORKERS = 6
SAVE_EVERY = 20

creds = boveda_drive.credenciales()
lock = threading.Lock()


def token() -> str:
    with lock:
        if not creds.valid:
            creds.refresh(Request())
        return creds.token


def grab(file_id: str, second: int):
    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?alt=media"
    out = subprocess.run(
        [FFMPEG, "-v", "error", "-headers", f"Authorization: Bearer {token()}\r\n", "-ss", str(second),
         "-i", url, "-frames:v", "1", "-vf", f"scale={W}:{H},format=gray", "-f", "rawvideo", "-"],
        capture_output=True, timeout=120)
    return out.stdout if len(out.stdout) == W * H else None


def motion(entry: dict):
    frames = [f for f in (grab(entry["driveId"], int(entry["duration"] * p)) for p in POINTS) if f]
    if len(frames) < 3:
        return None
    diffs = [sum(abs(a - b) for a, b in zip(frames[i], frames[j])) / (W * H)
             for i in range(len(frames)) for j in range(i + 1, len(frames))]
    return round(sum(diffs) / len(diffs), 2)


def main():
    library = json.loads(LIBRARY.read_text(encoding="utf-8"))
    todo = [e for e in library if "motion" not in e]
    print(f"{len(todo)} por escanear de {len(library)}", flush=True)
    done = 0

    def work(entry):
        nonlocal done
        try:
            entry["motion"] = motion(entry)
        except Exception as exc:  # one bad file must not stop the scan
            entry["motion"] = None
            entry["scanError"] = str(exc)[:120]
        with lock:
            done += 1
            if done % SAVE_EVERY == 0:
                LIBRARY.write_text(json.dumps(library, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
                print(f"{done}/{len(todo)}", flush=True)

    with ThreadPoolExecutor(WORKERS) as pool:
        list(pool.map(work, todo))
    LIBRARY.write_text(json.dumps(library, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    ok = [e for e in library if e.get("motion") is not None]
    print(f"Listo: {len(ok)} medidos, {sum(1 for e in ok if e['motion'] <= 8.5)} de imagen fija, "
          f"{len(library) - len(ok)} sin lectura.")


if __name__ == "__main__":
    main()
