@echo off
call npm install
if not exist android call npx cap add android
call npm run cap:sync
call npm run android
