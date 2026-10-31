# Private Teaching Manager v1.5.0 — Native build project

This package contains the app plus build configuration for an Android APK (Capacitor) and Windows desktop installer (Electron). It is source/build-ready; it does **not** contain compiled APK/EXE installers. Those must be compiled on a machine with Android Studio/Android SDK (APK) or Windows (recommended for the Windows installer).

## Before building
- Install Node.js 20+ and npm.
- Extract this ZIP.
- Open a terminal in this folder and run `npm install`.

## Android APK
1. Run `npx cap add android` (first build only).
2. Run `npm run cap:sync`.
3. Run `npm run android` to open Android Studio.
4. In Android Studio choose Build → Build Bundle(s) / APK(s) → Build APK(s).
5. The debug APK is normally at `android/app/build/outputs/apk/debug/app-debug.apk`. For a shareable release APK, configure signing in Android Studio and build a signed APK.

Requires Android Studio, Android SDK, and a JDK supported by the installed Android Gradle Plugin.

## Windows desktop installer
Run `npm run desktop:dev` to test. On Windows, run `npm run desktop:build` to create an NSIS installer in `dist/`. Electron packages the local app files; it does not need GitHub Pages to run.

## Data and automatic backups
- Browser/PWA mode: records and up to 20 snapshots are stored locally in that browser profile.
- Electron desktop mode: each save also writes a JSON snapshot into the app's user-data `backups` folder (keeps the newest 20).
- Android: app data remains in the app's private WebView storage. The included Capacitor Filesystem integration attempts to write snapshots under Documents/PTM-Backups. Review Android storage permissions/behaviour on the target Android version during testing.
- Devices do not synchronise data automatically. Export/import a JSON backup to move records between devices.

## Important data-safety note
Before replacing an existing deployment, export a JSON backup from Settings & Backups. Do not clear app/browser storage during an update. Test with dummy students and payments before using real financial records.

## Payment allocation behaviour
For private and revision courses, the payment form automatically assigns a payment to the student's oldest unpaid attended sessions first. If no older unpaid sessions exist, it can allocate session credits to upcoming sessions. The session list is displayed as an automatic allocation summary, not a manual selection list.

## GitHub Pages / PWA
The `www/` folder is the web app. Publish its contents at the repository root (or adjust the manifest base path if hosting under a different subpath). The PWA remains installable where browser criteria are met. Native Android/Windows wrappers are separate builds.
