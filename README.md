# Private Teaching Manager v1.3.0

An installable, offline-first Progressive Web App (PWA) for managing private-course and CEFR students, groups, sessions, attendance, payments, receipts and financial reports.

## Main workflow: manage everything from Groups

Open **Groups → Open group** to manage that class in one workspace:
- Add and search students.
- Record completed sessions and mark each student's attendance.
- Review session counts and student payment history.
- Record individual payments and book charges.
- Generate, print or reprint receipts.
- Review balances and group-level financial activity.

The Students, Sessions, Payments and Reports pages are consolidated views of the same group records.

## Payment rules

- **Private courses:** the app does NOT automatically create individual payment obligations. After each 4 completed group sessions, it displays a clear reminder and a toast notification. You then use **Record payment** beside each student to enter that student's payment manually. At that point the app creates the relevant four-session cycle record, accepts a full or partial payment, updates the balance and generates a numbered receipt. Absences do not reduce the fee. Teacher share: 75%.
- **CEFR courses:** each group follows 16-session blocks. Course-fee obligations are generated after each completed block regardless of individual absences. Instalments are accepted and each payment generates a receipt. Students may be exempt from course fees only. Teacher share: 30%.
- **Books:** record book charges separately. Book payments belong 100% to the teacher and are excluded from revenue sharing.

## Reports

Generate daily, weekly, monthly or custom-date reports for an individual group or all groups. Reports include amounts collected, teacher share, partner share, book income, outstanding balances already recorded in the app and transaction details. Reports can be printed or saved as PDF from the browser print dialog.

## Receipts

Each payment generates a numbered receipt with school name, teacher name, student name and ID, group/course, date, amount received, payment method, course fee details where relevant, balance after payment, teacher signature label and school stamp area. Use **View / print** from the group payment history or Payments page to reprint a receipt. In the print dialog choose **Save as PDF** to save a PDF copy.

## Publish or update through GitHub Pages

1. Download and extract the ZIP.
2. Open your existing repository and choose **Add file → Upload files**.
3. Upload the *contents* of the `private-teaching-manager` folder (not the enclosing folder and not the ZIP). `index.html` must be at the repository root.
4. Allow GitHub to replace files with matching names. Keep the existing repository and branch.
5. Add a commit message such as `Upgrade to Private Teaching Manager v1.3.0` and commit.
6. Open **Actions → Pages build and deployment** and wait for the green check.
7. Reopen the existing Pages address. On desktop use Ctrl+F5 once after deployment; on mobile close and reopen the app after it updates.

**Data protection:** the application keeps the existing browser database key (`ptm_v1_data`) so records should remain available when you update the same GitHub Pages origin in the same browser profile. Do not clear browser storage or uninstall the existing app while updating. Make a JSON export before replacing files as a precaution.

## Install on Windows

1. Open the published HTTPS GitHub Pages address in current Chrome or Edge.
2. If the app displays an **Install app** button, click it and confirm.
3. Otherwise open the browser menu (⋮) and look for **Install page as app** or **Install Private Teaching Manager**.
4. If installation is still unavailable, check that the site is HTTPS, the manifest loads, both icon files load, and the service worker is registered under DevTools → Application. Reload after GitHub Pages deployment completes.

## Install on Android

1. Open the published HTTPS address in Chrome.
2. Open the Chrome menu (⋮) and choose **Install app** or **Add to Home screen**.
3. Confirm. The app will appear as an icon and open in its own window.

## Offline use and automatic local backups

- The app caches its application files for offline use after the first successful online visit.
- Student, attendance, payment, receipt and settings data are stored locally in the browser on that device.
- Up to 20 automatic local snapshots are retained in browser storage after changes. They do not need to be downloaded for routine use.
- JSON export/import and restore are available for deliberate recovery or moving data.
- **The computer and Android phone have separate local databases and backups. They do not synchronise with each other.**
- Clearing site data, resetting a device or uninstalling may remove local records. Keep occasional JSON exports somewhere safe for disaster recovery.
- GitHub Pages hosts the app files, not student records.

## Financial shares

| Category | Teacher | Other party |
|---|---:|---:|
| Private course payments | 75% | 25% |
| CEFR course-fee payments | 30% | 70% |
| Book payments | 100% | 0% |

## First-time setup

1. Configure school name, teacher name and signature label in **Settings & backups**.
2. Create your private-course groups and set each group's default fee per four sessions.
3. Create or use the predefined CEFR groups and set the course fee per student.
4. Add students to their groups. Individual fees can override group defaults.
5. Record each session once and mark attendance.

## Version notes

- v1.3.0: private-course four-session milestones now produce a reminder only; each student's payment is entered manually from the group page. Added an in-app PWA installation prompt when supported, refreshed manifest metadata and icons declarations, and bumped the service-worker cache. Existing local database key retained.


## v1.3.0 updates
- Groups can be edited or permanently deleted with a confirmation that explains linked data deletion.
- Classroom register now shows student, attended sessions, paid/unpaid status, amount received and receipt access.
- Private-course payments are manual and can be recorded at any time; select the exact attended session dates covered.
- Group payment report prints total collected, teacher share and school share with transaction details.
- Install button is always visible and provides browser-specific fallback instructions; PWA manifest, maskable icon declaration and service-worker cache were refreshed.
- Private-course payment receipt includes subject and covered session dates.
