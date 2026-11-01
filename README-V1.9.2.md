# Private Teaching Manager v1.9.2

This release addresses CEFR payments appearing in Payment History while the group classroom register still showed Unpaid.

When a CEFR group workspace opens, the app reconciles the course obligations before rendering the register. Legacy course payments are matched to the appropriate student's 16-session block. The classroom status checks CEFR course payments only; book and insurance payments do not count toward the course fee. The active block is based on completed sessions (0–15 = block 1; 16–31 = block 2).

The previous v1.9.1 book and annual insurance handling is retained. Export a JSON backup before updating. Replace repository files and refresh the PWA after deployment.

Validation: JavaScript syntax, package/manifest parsing and ZIP integrity. Full browser end-to-end testing remains outstanding.
