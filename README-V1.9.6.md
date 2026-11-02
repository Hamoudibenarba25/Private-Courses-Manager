# Private Teaching Manager v1.9.6

## Fixes
- CEFR partial tuition payments now display as **Partial** in the group register and cycle page.
- CEFR cycle pages show actual amount paid and remaining balance instead of treating a partial payment as zero.
- Student profiles show actual tuition payments and outstanding CEFR course balances. Book and insurance receipts are excluded from tuition paid totals.
- Private-course payment-cycle calculations and rules are intentionally unchanged.
- Revision courses retain flexible pricing but use the private-course revenue split: 75% teacher / 25% school.

## Update safely
1. Export a JSON backup before updating.
2. Replace the GitHub Pages files with the contents of this ZIP.
3. Commit/push, then refresh the PWA.

Local storage key remains `ptm_v1_data`.
