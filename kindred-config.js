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

   While these are blank the form falls back to opening the visitor's
   email app, exactly as it behaves today. Nothing breaks either way.
--------------------------------------------------------------------- */
window.KINDRED_FORM = {
  PORTAL_ID: '',
  FORM_GUID: '',
  EMAIL: 'hello@kindredbk.nyc'
};
