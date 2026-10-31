# Private Teaching Manager — PWA project (fresh setup)

This is a static Progressive Web App. It runs in Chrome after deployment over HTTPS; Node.js and an Electron installer are not required for normal use.

## Publish with GitHub Pages
1. Create a new GitHub repository named `private-teaching-manager`.
2. Extract this ZIP and upload the contents of the project folder to the repository root. Keep both `www/` and `.github/` in place.
3. Commit the files to the `main` branch.
4. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source.
5. Open the **Actions** tab and wait for **Deploy Private Teaching Manager PWA** to finish successfully.
6. Open the published Pages URL in Chrome. Use the install icon in the address bar, or Chrome menu **⋮ → Install page as app**. On Android, use **⋮ → Install app**.

## Fresh start
The application starts with an empty data store on the first launch. You do not need to import any data from the old Electron trial. Create your groups first, then add students, record group sessions and attendance, and record payments.

## Key workflow
- Student profiles show attended, paid and unpaid session counts and a dated attendance ledger.
- From a student profile, mark attendance for a session already recorded for that student's group, or add an individual catch-up session linked to the same group.
- Private-course payments allocate to the oldest unpaid attended sessions first, up to four sessions per payment. If only two unpaid attended sessions exist, the amount is calculated for two sessions at half the configured four-session fee. Any further unpaid sessions remain unpaid for the next payment.
- If no older unpaid attended sessions remain, a payment may be allocated to up to four upcoming sessions.
- Sessions can be filtered by course type, group and date period. Reports include daily, weekly and four-session views.
- Subject defaults to **English Language**.
- The interface supports English, French and Arabic; the selected language is remembered on that browser. Arabic uses right-to-left page direction.

## Data and backups
Data is stored locally in the browser on the device where the PWA is installed. It does not automatically synchronise between your laptop and phone. Use **Settings & backups → Download JSON** periodically if you want an external backup. Browser storage can be lost if site data is cleared, so keep a backup if records become important.

## Update the PWA
Upload the updated project files to the same GitHub repository and push to `main`. GitHub Actions republishes the site. The service worker cache is versioned so the browser can fetch the updated application. If an old screen remains visible, close the installed app, reopen it while connected to the internet, and refresh once.

## Validation
The JavaScript source has been syntax-checked. This ZIP is a deployable source project, not a hosted app URL; the live installation icon appears only after GitHub Pages has successfully published it over HTTPS. Test the main workflows before entering your permanent records.
