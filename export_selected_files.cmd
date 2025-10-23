@echo off
setlocal enabledelayedexpansion

set "output=selected-files.txt"
echo Selected Files Code Dump > "%output%"
echo =============================================== >> "%output%"
echo. >> "%output%"

REM === Loop only inside app and Components folders ===
for /r "app" %%F in (*) do (
    call :processFile "%%F"
)
for /r "Components" %%F in (*) do (
    call :processFile "%%F"
)
goto :end

:processFile
set "file=%~1"
for %%E in (.js .jsx .ts .tsx .json .css .md .mjs .html) do (
    echo !file! | find /I "%%E" >nul && (
        echo ================================================== >> "%output%"
        echo FILE: !file! >> "%output%"
        echo -------------------------------------------------- >> "%output%"
        type "!file!" >> "%output%"
        echo. >> "%output%"
    )
)
exit /b

:end
echo.
echo ✅ Done! All selected files saved to "%output%"
pause
