# Private Teaching Manager v1.9.0

Fixes mixed-language values in payment history. Payment methods are stored as language-independent keys and translated when displayed, including legacy Arabic/French values. Payment categories are also translated instead of showing raw internal values.

Export a JSON backup before updating. Replace the files in your GitHub repository and refresh the PWA after deployment. The existing local database key is preserved.

Validation: JavaScript syntax, package/manifest JSON parsing, targeted localization assertions and ZIP integrity. Full browser end-to-end testing has not been performed.
