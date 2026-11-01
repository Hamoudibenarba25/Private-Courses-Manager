# Private Teaching Manager v1.8.0

This is an incremental reliability release based on v1.7.2.

## Main changes
- 30 automatic local backup snapshots (previously 20).
- A local audit trail visible in Settings & Backups.
- Service-worker cache version refreshed for deployment.
- Existing database key retained: `ptm_v1_data`.

## Upgrade notes
1. Export a JSON backup from the currently deployed application before replacing repository files.
2. Replace the repository contents with the contents of this project folder; keep the same GitHub Pages repository and URL.
3. Commit to the `main` branch and wait for the Pages workflow to complete.
4. Open the same PWA URL online and refresh. The service worker should fetch the new cache version.
5. Verify students, groups, sessions and payments before continuing work.

## Important limitations
The audit trail is a local change history, not a tamper-proof server ledger. This release does not yet enforce cycle lock/reopen controls or merge two JSON backups. Full end-to-end testing in the user's deployed Chrome environment has not been performed. Test using sample records before relying on financial statements.

PWA storage remains device/browser-specific; records do not synchronise automatically between devices. Continue exporting JSON backups to a safe location.
