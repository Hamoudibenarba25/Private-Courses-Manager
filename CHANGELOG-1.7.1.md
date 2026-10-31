# Private Teaching Manager 1.7.1 — accounting and PWA corrections

## Included in this incremental revision
- Cycle-based reports replace date-range reports in the Reports page.
- Cycle financial totals are calculated from actual positive payment transactions allocated to that cycle. Attendance and unpaid obligations do not create income.
- Previous-cycle debt recovery is recorded as income in the cycle in which it is received and shown with the student and covered sessions. Earlier cycle totals are not rewritten.
- Teacher and partner settlements are recorded independently. A fixed-length private/CEFR cycle cannot be settled until its session target is complete, and no settlement is available when no money has been received.
- Teacher loan deductions are applied to the teacher share only; any excess remains outstanding for later cycles.
- Cycle statements include receipts, debt recoveries, shares, school-only charges, loan deductions, actual settlements, and outstanding student debts.
- Student attendance deletion now detaches a deleted attendance from payment allocation references and flags the affected payment for review instead of silently losing the received payment.
- Undo and Redo controls use a bounded local history (up to 40 saved changes).
- PWA manifest identity and cache version updated; install control remains visible even when Chrome does not emit `beforeinstallprompt`.

## Important accounting behaviour
Only payment records count as collected income. For private courses, the teacher share is 75% and partner share is 25%. For CEFR, the teacher share is 30% and partner share is 70%. Book charges are 100% teacher income. Insurance/school-only categories are 100% partner income. Revision courses use the configured teacher percentage.

## Validation performed
- JavaScript syntax check with Node.js.
- Focused accounting checks: zero-receipt cycle = zero income and zero shares; private-course receipt split; previous-debt recovery split.
- PNG icon dimensions checked (192×192 and 512×512).
- ZIP integrity checked after packaging.

A full end-to-end browser test on the user's published GitHub Pages URL has not been performed. Please test with sample records before relying on financial statements.
