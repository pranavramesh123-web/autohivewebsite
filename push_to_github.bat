@echo off
REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git is not installed or not in your PATH. Please install Git and try again.
    pause
    exit /b 1
)

echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Committing changes...
git commit -m "Initial commit of AutoHive Website"

echo Renaming branch to main...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/pranavramesh123-web/autohivewebsite.git

echo Pushing to GitHub...
git push -u origin main

pause
