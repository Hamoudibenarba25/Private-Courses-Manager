# Private Teaching Manager v1.8.1

## Cycle accounting and student-profile fixes
- Private-course fees are calculated per attended session: the configured four-session cycle fee is divided by four and multiplied by the student's attended sessions.
- Cycle amounts, student debt calculations, payment entry and student-profile session coverage now use the attendance-based amount.
- Previous-cycle debt repayments retain their original debt-cycle reference. If the original cycle has not been settled with the teacher, the receipt is allocated to that original cycle. If the teacher settlement is already recorded, the receipt is allocated to the current cycle as previous-cycle debt recovery. Reports show both the original debt cycle and the financial allocation cycle.
- Debt repayments are included in the original student's debt balance calculation regardless of the financial cycle to which the receipt is allocated.
- Student-profile session deletion is now handled by the modal's delegated click handler.
- Teacher loan/advance controls from v1.8.0 remain available: automatic deduction, manual cash settlement without reducing earnings, and deletion.

## Important
Export a JSON backup before replacing the files on GitHub. This release has been checked with JavaScript syntax and archive-integrity tests, but it has not undergone full browser end-to-end testing. Test the payment and settlement scenarios with sample records before relying on printed reports.
