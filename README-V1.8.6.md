# Private Teaching Manager v1.8.6

This release changes when private/revision balances become previous-cycle debts. Completing the fourth session alone does not move a student's unpaid balance into the Student Debts list. The balance stays associated with the current cycle and can still be paid as an ordinary cycle payment. It becomes a previous-cycle debt only after that individual student attends at least one session in the next cycle.

The Student Debts page, direct debt-payment flow, and cycle statements use the same rule. Existing payment allocation based on whether the teacher settlement was already completed is preserved.

Before updating, export a JSON backup. Replace the files in your existing GitHub repository with the extracted ZIP, wait for deployment, then refresh the PWA. Existing local database key `ptm_v1_data` is preserved.

Validation: JavaScript syntax, package/manifest JSON parsing, targeted rule checks and ZIP integrity. Full browser end-to-end testing has not been performed.
