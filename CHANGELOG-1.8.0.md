# Private Teaching Manager v1.8.0 — reliability refinements

## Implemented in this build
- Version metadata updated to 1.8.0; the existing local database key (`ptm_v1_data`) is preserved for continuity.
- Automatic local backup retention increased from 20 to 30 snapshots.
- Added a local audit trail for changes saved to students, groups, sessions, payments, obligations, receipts, settlements, teacher loans and refunds. The Settings page displays the latest 50 entries; up to 500 are retained in the local data store.
- Audit entries record timestamp, local operator label, affected record category, record ID and created/updated/deleted action.
- Service-worker cache name changed to v1.8.0 to force the new PWA assets to be fetched.
- Application package and manifest metadata updated.

## Existing financial model retained
- Current-cycle receipts, previous-cycle debt recovery and future prepayments remain distinct purposes in the v1.7.2 data model.
- Cycle statements continue to calculate distributions from recorded receipts rather than attendance alone.
- Teacher and partner settlements remain independently recorded; teacher-loan deductions remain applied to the teacher share.

## Not represented as completed
This build does not yet provide a complete immutable accounting ledger, fully enforced cycle locking/reopening, a merge-backup workflow, or a complete end-to-end multilingual audit interface. The audit trail is local to this browser/device and can be changed if the local data store is manually edited or replaced. These controls require further development and live browser testing before this should be treated as formal accounting software.
