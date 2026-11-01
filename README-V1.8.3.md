# Private Teaching Manager v1.8.3

This release improves late attendance entry and protects existing group records.

- If a group session already exists on the selected date, attendance is added to that session; a duplicate group session is not created.
- When editing attendance for an existing date through the general session form, only students explicitly marked are changed. Other students' attendance is preserved.
- Student-specific catch-up records do not advance the group's four-session cycle or shift other students' cycle positions.

Before updating, export a JSON backup. Extract this ZIP and replace the files in your existing GitHub repository. Wait for GitHub Pages to deploy, then refresh the PWA. The app retains the existing local database key (`ptm_v1_data`); nevertheless, keep a JSON backup before updating.

Validation performed: JavaScript syntax, package and manifest JSON parsing, and ZIP integrity. Full browser end-to-end testing has not been performed.
