KINDRED — CLEAN URL UPDATE
==========================

The site now uses folder URLs:

    kindredbk.nyc/              (index.html at the repo root)
    kindredbk.nyc/greenpoint/   (greenpoint/index.html)
    kindredbk.nyc/park-slope/   (park-slope/index.html)
    kindredbk.nyc/privacy/      (privacy/index.html)

No ".html" shows in the address bar.

UPLOAD
------
Drop everything in this folder into the repo root, keeping the
greenpoint/, park-slope/ and privacy/ folders intact.

The three loose files greenpoint.html, park-slope.html and
privacy.html are REDIRECT STUBS. They replace your current pages
and bounce anyone on an old link to the new address. Keep them.

Your existing images (hero, story, g1-g4, room-*, loc-greenpoint)
stay exactly where they are at the repo root. Do not move them.

IMAGE PATHS
-----------
All image and link paths are now root-relative (/hero.webp rather
than hero.webp) so they resolve the same from every folder depth.
This means opening a page by double-clicking the file will NOT show
images — that is expected. It only works over a web server, which
is what GitHub Pages is.

AFTER UPLOADING, CHECK
----------------------
  kindredbk.nyc/greenpoint/     loads with images
  kindredbk.nyc/greenpoint.html redirects to the above
  kindredbk.nyc/sitemap.xml     lists the four clean URLs
