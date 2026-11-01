# Private Teaching Manager v1.8.4

This release corrects the classification of late student payments.

- If the student pays a cycle while the teacher's settlement for that cycle is still open, the payment remains an ordinary receipt for that original cycle and is included in its revenue-share calculations.
- If the teacher has already been paid for that cycle, a later student payment is treated as previous-cycle debt recovery and allocated to the current financial cycle.
- The Student Debts page labels unsettled cycle balances separately from true previous-cycle debts.

Before updating, export a JSON backup. Extract this ZIP and replace the files in your existing GitHub repository. Wait for deployment, then refresh the PWA. Existing local database key `ptm_v1_data` is preserved.

Validation performed: JavaScript syntax, package and manifest JSON parsing, targeted code assertions, and ZIP integrity. Full browser end-to-end testing has not been performed.
