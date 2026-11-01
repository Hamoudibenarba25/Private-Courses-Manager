# v1.9.2 — CEFR classroom payment reconciliation

- The CEFR group workspace now reconciles/creates the current course-block obligation before calculating classroom status.
- Existing CEFR payment history is matched to the student's current 16-session block, including older payments without obligation IDs.
- Classroom Paid status is independently verified against the full CEFR course fee received for that student and block; book and insurance payments are excluded.
- The current course block is calculated as floor(completed group sessions / 16) + 1, so sessions 0–15 belong to block 1 and sessions 16–31 belong to block 2.
