# Private Teaching Manager v1.8.5

This release unifies the two ways to pay private/revision previous-cycle balances: the Student Debts page and the standard Record Payment form. Select “Pay a previous-cycle balance” and choose the original cycle. If the teacher settlement for that cycle is open, the receipt is an ordinary payment in that original cycle. If already settled, it is allocated as previous-cycle debt recovered in the current cycle. Both routes reduce the student's outstanding balance.

Before updating, export a JSON backup. Replace the files in your existing GitHub repository with the extracted ZIP, wait for deployment, then refresh the PWA. The local database key `ptm_v1_data` is preserved.

Validation: JavaScript syntax, package/manifest JSON parsing, targeted code assertions, ZIP integrity. Full browser end-to-end testing has not been performed.
