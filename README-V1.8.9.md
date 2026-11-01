# Private Teaching Manager v1.8.9

Financial allocation rules:
- CEFR course fees: 70% teacher, 30% partner/school.
- Books: 100% teacher.
- Insurance: 100% school/partner.
- Private courses: existing 75% teacher / 25% partner.
- Revision courses: configured group-specific split.

Insurance receipts must use category `insurance`, `school`, or `insurance-school` to be allocated entirely to the school. Existing book receipts remain 100% teacher income.

Export a JSON backup before updating. Extract this ZIP and replace the files in your existing GitHub repository. Wait for deployment, then refresh the PWA. The local database key `ptm_v1_data` is preserved.

Validation: JavaScript syntax, package/manifest JSON parsing, targeted allocation assertions and ZIP integrity. Full browser end-to-end testing has not been performed.
