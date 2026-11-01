# Private Teaching Manager v1.8.8

This release completes more Arabic localization and fixes CEFR instalment entry. Arabic reports and printouts use RTL layout and Arabic labels, while school, group/class and student names are retained as entered and figures remain numeric. The CEFR payment form no longer asks users to select an obligation; instead, choose the student and course block, enter an instalment, and the app checks the remaining course fee. Book charges continue to use their separate payment flow.

Before updating, export a JSON backup. Extract this ZIP and replace the files in your existing GitHub repository. Wait for deployment, then refresh the PWA. The existing local database key `ptm_v1_data` is preserved.

Validation: JavaScript syntax, package/manifest JSON parsing, targeted form/translation assertions and ZIP integrity. Full browser end-to-end testing and native Arabic proofreading remain outstanding.
