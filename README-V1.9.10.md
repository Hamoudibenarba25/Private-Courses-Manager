# Private Teaching Manager v1.9.10 — Combined Credit & Attendance Fixes

This consolidated release includes:
- v1.9.8 Private Course Credit Carry-Forward: unused prepaid tuition carries into the next cycle and offsets attended sessions without being counted as new cash.
- v1.9.9 Attendance Save & Refresh fixes: attendance save handling, Present/Absent only, default Present, same-date session updates, and Refresh button.
- Preserves the existing local database key `ptm_v1_data`.

## Update safely
1. Export a JSON backup from Settings & backups.
2. Replace the GitHub Pages app files with the contents of the `www` folder.
3. Refresh the installed PWA; if it still shows the old version, close it completely and reopen it.

Note: this release is based on the v1.9.9 source, which includes the v1.9.8 credit carry-forward logic.
