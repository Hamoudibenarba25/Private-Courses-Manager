# Private Teaching Manager

An installable, offline-first Progressive Web App (PWA) for managing private-course and CEFR students, group sessions, payment obligations, instalments, book charges, revenue shares and receipts.

## Included features

- Private courses: automatically creates a payment obligation for each active student after every 4 completed group sessions. Absences do not reduce the amount due. Teacher share is 75% of private-course payments.
- CEFR courses: 16-session blocks; course fees become due after each completed block regardless of absences. Students can pay in instalments. Teacher share is 30% of CEFR course-fee payments.
- CEFR exemptions: course fees only; book charges remain payable.
- Books: separate book-charge obligations; 100% of book payments belong to the teacher and are excluded from the CEFR revenue split.
- CEFR receipts: each course-fee instalment generates a numbered receipt with school, teacher, student, course/group, date, amount received, previous payments, remaining balance, payment method and signature/stamp lines. Use the Print button and choose “Save as PDF” if desired.
- Student profiles, attendance, session history, financial reports, CSV and JSON export/import.
- English, French and Arabic interface.
- Automatic local snapshots (up to 20) after data changes, plus manual snapshot, restore and JSON export/import.
- Offline use after the first successful load.

## Publish with GitHub Pages

1. Extract this ZIP file.
2. Create a new GitHub repository, for example `private-teaching-manager`.
3. Upload the **contents** of this folder to the repository root. `index.html` must be at the root, not inside another nested folder.
4. In the repository, open **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
6. Wait for GitHub Pages to publish. Your address will look like `https://YOUR-USERNAME.github.io/private-teaching-manager/`.
7. Open the published HTTPS address once while online so the app and offline files can be cached.

## Install on Android

1. Open the GitHub Pages address in Chrome.
2. Open Chrome’s menu (⋮) and choose **Install app** or **Add to Home screen**.
3. Confirm. The app will appear on your home screen and open in its own window.

## Install/use on a computer

1. Open the same HTTPS address in Chrome or Edge.
2. Use the install icon in the address bar, or the browser menu → **Install app**.
3. You can also keep the site bookmarked; after the first online load, supported browsers can open it offline.

## Local computer testing

Opening `index.html` directly works for basic testing, but browser installation and service-worker offline caching require HTTPS or localhost. For local testing with Python installed, open a terminal in the extracted folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Data privacy and automatic backups — important

- Student, attendance, payment, receipt and settings data are stored in the browser's local storage on the device. The app does not send student records to GitHub or a remote database.
- Automatic snapshots are stored locally in the same browser profile (up to 20). They do not require you to download a backup.
- **The computer and Android phone each have their own separate data. There is no automatic cross-device synchronisation.** A JSON export/import is provided when you intentionally need to move data to another device or browser.
- Clearing browser/app site data, uninstalling in some environments, or resetting the device can remove local records and snapshots. Keep an occasional JSON export in a safe place for disaster recovery.
- GitHub Pages hosts the app files, not your student records.

## Financial logic

| Payment category | Teacher share | Other party |
|---|---:|---:|
| Private course fees | 75% | 25% |
| CEFR course fees | 30% | 70% |
| Book charges | 100% | 0% |

Private payment amount is set per student (or inherited from the group default) for each four-session cycle. CEFR course fees are set per student (or inherited from the group default) for each 16-session cycle. A student's CEFR course-fee exemption does not exempt them from book charges.

## Notes

- Create groups first, then add students to those groups.
- Record each completed group session once. Payment obligations are generated automatically at the 4-session or 16-session milestones.
- Sessions are retained in the register to preserve payment-cycle accuracy; this initial version does not provide session deletion/editing.
- Configure the school and teacher details under **Settings & backups** before issuing receipts.
- Use the browser's print dialog to print a receipt or save it as a PDF.
