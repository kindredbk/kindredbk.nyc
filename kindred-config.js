/* ---------------------------------------------------------------------
   Kindred — waitlist destination
   ---------------------------------------------------------------------
   This is the ONLY file you edit to connect the website to HubSpot.
   Paste the two ids from your HubSpot account between the quotes below,
   commit, and every page picks them up. Nothing else needs touching.

   Where to find them — see HUBSPOT-SETUP.md:
     PORTAL_ID  HubSpot → Settings → Account Information → Account ID
                (a number, e.g. 243118901)
     FORM_GUID  HubSpot → Marketing → Forms → your form → Share → the
                last part of the embed code (e.g. 7f3c1a2e-...-9b2d)

   Both are filled in, so the waitlist form posts straight to HubSpot.
   Account is in HubSpot's na2 region; submissions go to the shared
   api.hsforms.com endpoint, which routes by Account ID.

   Blank either value and the form stops delivering: it then tells the
   visitor to email hello@kindredbk.nyc instead.
--------------------------------------------------------------------- */
window.KINDRED_FORM = {
  PORTAL_ID: '247794912',
  FORM_GUID: 'a835cc01-26c2-4f14-8df9-6ae840f21f1d',
  EMAIL: 'hello@kindredbk.nyc'
};
