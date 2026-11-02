# Private Teaching Manager v1.9.7

## Book payment status synchronization
- CEFR student book payment is now recognised across the Group and Cycle pages.
- Once a book payment is recorded through Payments or the group quick action, the Group page quick-action button is disabled and labelled **Book Paid**.
- The Cycle page shows a separate **Book Paid / Book Unpaid** badge alongside tuition status.
- Book payments remain separate from tuition payments and balances.
- Private-course payment logic is unchanged. Revision courses retain flexible pricing and the 75% teacher / 25% school allocation.

## Update safely
1. Export a JSON backup first.
2. Replace the GitHub repository files with the contents of this ZIP.
3. Commit and push the changes, then refresh the PWA.

The local storage key remains `ptm_v1_data`.
