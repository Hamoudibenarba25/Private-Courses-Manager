# v1.7.2 — Payment workflow

## Current cycle payment

Open the student payment action from the group or student profile. Choose **Pay current / selected cycle**, confirm the cycle number, and record the amount. The student may pay the full cycle fee or an instalment at any session in the cycle. The payment is attached to that cycle only.

## Future prepayment

Choose **Prepay a future cycle**, select the future cycle number, and record the amount. It is held against that future cycle and does not appear in the cycle's received-income figures until at least one group session has been recorded for that cycle.

## Previous-cycle debt

Use **Pay Previous Debts** from the Student Debts page. Select the original cycle and enter a full or partial payment. The transaction is recorded as debt recovery in the receiving cycle and retains the original cycle reference. It does not change the original cycle's closed financial report.

## Important

The app's local database is retained under the existing storage key. Keep a JSON backup before replacing the deployed files. Test with sample records first, especially where existing records were created by earlier versions, because legacy payments may not have an explicit cycle purpose or original-cycle reference.
