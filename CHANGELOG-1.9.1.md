# v1.9.1 — CEFR payment status, books and annual insurance

- Direct CEFR course payments are linked to the matching student/course-block obligation.
- CEFR obligations are created on the first payment, even before session 16, so the classroom register and obligation list can show Paid / Partial / Unpaid correctly.
- Legacy CEFR payments without an obligation ID are included in the matching student's block balance.
- Book payments remain 100% teacher income.
- Added annual insurance charges per student/year. Insurance payments are recorded as `insurance` and allocated 100% to the school/partner.
- Duplicate insurance charges for the same student, group and year are blocked.
