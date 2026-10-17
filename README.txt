KINDRED — FIX FOR THE BROKEN HOMEPAGE
=====================================

WHAT WENT WRONG
---------------
The last upload flattened the folders. greenpoint/index.html landed
at the repo root and overwrote index.html, so kindredbk.nyc showed
the Greenpoint page. The greenpoint.html redirect stub then pointed
at /greenpoint/ which resolved back to itself — an endless loop.

THE FIX — NO FOLDERS AT ALL
---------------------------
GitHub Pages already serves greenpoint.html at the clean URL
/greenpoint/ on its own. The folders were never needed.

So: four plain .html files at the repo root. Nothing nested.

DO THIS, IN THIS ORDER
----------------------
1. In the repo, DELETE these three folders if they exist:
       greenpoint/
       park-slope/
       privacy/

2. Upload the four .html files in this zip to the repo root,
   overwriting what is there:
       index.html        <- the brand home (Rooted in curiosity)
       greenpoint.html
       park-slope.html
       privacy.html

3. Upload sitemap.xml, overwriting.

4. Leave every image where it is. Nothing moves.

THEN CHECK
----------
   kindredbk.nyc/              -> "Rooted in curiosity. Growing together."
   kindredbk.nyc/greenpoint/   -> "Kindred Greenpoint."
   kindredbk.nyc/park-slope/   -> "Kindred Park Slope."
   kindredbk.nyc/privacy/      -> privacy page

Hard-refresh with Ctrl+Shift+R. Pages takes a minute to rebuild.

If the homepage still shows Greenpoint, the root index.html did not
overwrite — open index.html in the repo and confirm the first
heading reads "Rooted in curiosity."
