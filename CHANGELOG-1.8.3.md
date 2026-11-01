# Version 1.8.3 — Safe late attendance and cycle stability

- Marking a student present on an existing group-session date updates that session instead of creating a duplicate.
- The general session form merges attendance into an existing group session on the same date.
- When using the general session form on an existing date, only explicitly selected attendance states are merged; other students' attendance is left unchanged.
- Student-only catch-up records (`individualFor`) are excluded from group-cycle session numbering and cycle boundaries, so they cannot push other students into different cycles.
- Existing group-session dates and cycle positions remain stable when recording late attendance.
- App version metadata and the PWA cache version are aligned to 1.8.3.
