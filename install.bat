@echo off

cd client
call npm install

cd ../server
call npm install

echo:
echo Install complete

pause > nul

cmd