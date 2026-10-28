@echo off
title KLMR OFFICIAL CHANNEL HD - Emisor de TV Digital
cd /d "%~dp0"
echo ========================================================
echo    KLMR OFFICIAL CHANNEL HD - REPRODUCTOR DIGITAL TV
echo ========================================================
echo Iniciando servidor de emision local y red Smart TV...
start "" "http://localhost:8088"
node server.js
pause
