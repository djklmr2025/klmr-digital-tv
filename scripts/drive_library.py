"""Index the electronic-music video library in the DJKLMR Drive (read-only).

Writes catalog/library.json: every candidate extra with its Drive id, folder, duration and resolution.
Uses the OAuth helper in C:\\Ruta\\boveda_drive.py (token never leaves C:\\Ruta\\_PRIVADO).

    uv run --no-project --with google-api-python-client --with google-auth-oauthlib python scripts/drive_library.py
"""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, r"C:\Ruta")
import boveda_drive  # noqa: E402

VIDEOS_FOLDER = "1yJNNnYunY956qiRH_qFP2nySL1sXXssH"
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


def main():
    svc = boveda_drive.servicio()
    folders = list(children(svc, VIDEOS_FOLDER, "mimeType = 'application/vnd.google-apps.folder'"))
    chosen = sorted((f for f in folders if ELECTRONIC.search(f["name"]) and not NOT_ELECTRONIC.search(f["name"])),
                    key=lambda f: f["name"].lower())
    print(f"{len(folders)} carpetas de género, {len(chosen)} electrónicas:")
    library, skipped = [], {"sin_duracion": 0, "muy_corto_o_largo": 0}
    for folder in chosen:
        count = 0
        for f, path in videos_under(svc, folder["id"], folder["name"]):
            meta = f.get("videoMediaMetadata") or {}
            seconds = int(meta.get("durationMillis", 0)) // 1000
            if not seconds:
                skipped["sin_duracion"] += 1
                continue
            if not MIN_SECONDS <= seconds <= MAX_SECONDS:
                skipped["muy_corto_o_largo"] += 1
                continue
            library.append({
                "driveId": f["id"], "name": f["name"], "folder": path,
                "duration": seconds, "width": meta.get("width"), "height": meta.get("height"),
                "sizeMB": round(int(f.get("size", 0)) / 1e6, 1),
            })
            count += 1
        print(f"  {folder['name']}: {count}")
    OUT.write_text(json.dumps(library, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    hours = sum(v["duration"] for v in library) / 3600
    gb = sum(v["sizeMB"] for v in library) / 1000
    print(f"Biblioteca: {len(library)} videos, {hours:.1f} h, {gb:.1f} GB. Omitidos: {skipped}")


if __name__ == "__main__":
    main()
