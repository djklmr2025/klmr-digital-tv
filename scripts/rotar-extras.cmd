@echo off
rem Daily KLMR extras rotation (Windows Task "KLMR Rotacion Extras"). R2 keys come from user env vars.
cd /d C:\ARKAIOS\klmr-digital-tv
set PYTHONIOENCODING=utf-8
set LOG=%LOCALAPPDATA%\klmr-rotacion.log
echo ===== %DATE% %TIME% ===== >> "%LOG%"
git pull --rebase -q origin main >> "%LOG%" 2>&1
"C:\Users\Arkaios\.local\bin\uv.exe" run -q --no-project --with google-api-python-client --with google-auth-oauthlib --with boto3 python scripts\rotate_extras.py >> "%LOG%" 2>&1
