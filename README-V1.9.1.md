# Private Teaching Manager v1.9.1

CEFR instalments now update the matching obligation and classroom status. An obligation is created when the first payment is recorded, even if the group has not completed 16 sessions. Existing direct CEFR payments without obligation IDs are also included in the correct student's block balance.

Book payments remain 100% teacher income. Annual insurance can be added from a CEFR group using **Insurance**; create one charge per student/year. Insurance payments belong 100% to the school/partner and are kept separate from CEFR course fees and book income.

Export a JSON backup before updating. Replace repository files with this release and refresh the PWA after deployment. Existing local database key is preserved.

Validation: JavaScript syntax, metadata parsing, targeted obligation/payment assertions and ZIP integrity. Full browser end-to-end testing remains outstanding.
