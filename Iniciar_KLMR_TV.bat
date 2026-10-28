@echo off
title KLMR OFFICIAL CHANNEL HD - Emisor de TV Digital
color 0B
cls
echo ===============================================================================
echo            KLMR OFFICIAL CHANNEL HD - ELECTRONIC MUSIC TV 24/7
echo ===============================================================================
echo.
echo   [1] CANAL EN VIVO (Cloud Global 24/7):
echo       https://klmr-digital-tv.vercel.app
echo.
echo   [2] MASTER CONTROL ROOM (MCR Operador):
echo       https://klmr-digital-tv.vercel.app/admin
echo.
echo   [3] REPOSITORIO GITHUB:
echo       https://github.com/djklmr2025/klmr-digital-tv
echo.
echo ===============================================================================
echo Iniciando servidor local en http://localhost:8088 y abriendo transmisión...
echo ===============================================================================
cd /d "C:\ARKAIOS\klmr-digital-tv"
start "" "https://klmr-digital-tv.vercel.app"
start "" "http://localhost:8088"
node server.js
