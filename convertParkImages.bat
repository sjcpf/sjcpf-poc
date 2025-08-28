@echo off
setlocal

:: Source folder
set "SRC=public\images\parks"
:: Destination folder
set "DEST=webp_images"

:: Create destination folder
if not exist "%DEST%" mkdir "%DEST%"

:: Loop through all PNGs recursively
for /r "%SRC%" %%F in (*.png) do (
    echo Converting %%F
    :: Output file: same name, .webp in DEST
    set "FNAME=%%~nF"
    cwebp "%%F" -o "%DEST%\%%~nF.webp" -q 80
)

echo Done!
pause