# Private Teaching Manager v1.7.2 — Cycle Payment Separation

## Payment model changes

- Private-course payments are assigned to an explicit cycle number and no longer allocate automatically to older attended sessions.
- The current cycle accepts full or partial payments at any of its four sessions.
- Future prepayments are assigned to a selected future cycle and excluded from that cycle's financial receipts until the cycle has started (at least one group session is recorded).
- Previous-cycle debts are handled through a separate debt-recovery workflow. A debt recovery identifies the original cycle and is recorded as a receipt in the receiving/current accounting cycle.
- Current-cycle payments cannot be used to clear previous-cycle debt; older-cycle payment attempts are routed to the debt workflow.
- The cycle register and group register show current-cycle receipts separately from previous debts.
- Cycle financial reports include cycle-assigned private/revision receipts and debt recoveries, with debt recoveries identifying the student and original cycle.

## Accounting rules

- A payment is counted only once, in the cycle to which it is assigned.
- Prepayments for a future cycle are not counted as income in an earlier cycle.
- Debt recovery does not rewrite the original cycle's financial statement; it is recognised in the receiving cycle and reduces the outstanding balance of the original cycle.
- Partial payments are supported for both cycle fees and debt recovery.

## Validation performed

- JavaScript syntax checked with Node.js.
- Focused accounting tests checked: future prepayment isolation, persistence of old debt, partial debt recovery against the original cycle, and separate cycle payment totals.
- Full live-browser end-to-end testing has not been performed; test with sample students before relying on financial reports.
