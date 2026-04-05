@echo off
setlocal
cd /d "%~dp0"

echo Creating venv and installing dependencies...
python -m venv .venv-build
if errorlevel 1 (
  echo Failed: python not found. Install Python 3.10+ from https://www.python.org/downloads/windows/
  pause
  exit /b 1
)

call .venv-build\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r requirements-build.txt
if errorlevel 1 (
  echo pip install failed.
  pause
  exit /b 1
)

echo.
echo Building HEIC-to-JPG.exe (one file, no console window)...
pyinstaller --noconfirm --clean ^
  --onefile --windowed ^
  --name "HEIC to JPG" ^
  --collect-all pillow_heif ^
  heic_converter_gui.py

if errorlevel 1 (
  echo PyInstaller failed.
  pause
  exit /b 1
)

echo.
echo Done. Give your friend this file:
echo   %~dp0dist\HEIC to JPG.exe
echo.
pause
