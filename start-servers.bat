@echo off
echo Starting Pharmacy Application Servers...
echo.

echo Starting Backend Server (Port 5000)...
cd backend
start "Backend Server" cmd /k "npm start"

echo.
echo Waiting 5 seconds for backend to start...
timeout /t 5 /nobreak > nul

echo.
echo Starting Frontend Server (Port 5173)...
cd ../frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo API Test: http://localhost:5173/api-test
echo.
echo Press any key to exit this script...
pause > nul 