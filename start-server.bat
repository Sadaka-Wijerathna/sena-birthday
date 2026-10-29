@echo off
title Birthday Website Server
color 0A
echo.
echo  ==========================================
echo   Birthday Website - Local Server
echo  ==========================================
echo.

:: Try Python 3 first
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo  [OK] Python found! Starting server...
    echo.
    echo  Open your browser and go to:
    echo  http://localhost:8080
    echo.
    echo  Press Ctrl+C to stop the server.
    echo.
    start "" http://localhost:8080
    python -m http.server 8080
    goto end
)

:: Try Python via py launcher
py --version >nul 2>&1
if %errorlevel% == 0 (
    echo  [OK] Python found! Starting server...
    echo.
    echo  Open your browser and go to:
    echo  http://localhost:8080
    echo.
    echo  Press Ctrl+C to stop the server.
    echo.
    start "" http://localhost:8080
    py -m http.server 8080
    goto end
)

:: Try Node.js http-server or npx
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo  [OK] Node.js found! Starting server...
    echo.
    echo  Open your browser and go to:
    echo  http://localhost:8080
    echo.
    echo  Press Ctrl+C to stop the server.
    echo.
    start "" http://localhost:8080
    npx serve -l 8080
    goto end
)

:: Nothing found
echo  [ERROR] Python or Node.js not found on your computer.
echo.
echo  Please install one of the following:
echo   - Python: https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
echo  Then run this file again.
echo.

:end
pause

