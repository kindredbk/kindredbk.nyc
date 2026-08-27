# Kindred — Daycare & Preschool

Static one-page site for Kindred, 79 Quay Street, Greenpoint, Brooklyn.
No build step, no dependencies. Plain HTML, CSS and a few lines of JavaScript.

```
index.html          the whole site
images/             WebP photos + PNG logos
CNAME               your custom domain (edit this)
.nojekyll           tells GitHub Pages to serve the files as-is
```

---

## Publishing it

1. Create a new repository on GitHub. Name it anything; `kindred-site` is fine.
   Public is required for Pages on a free account.
2. Upload every file in this folder, keeping the `images/` folder intact.
   The web upload works: **Add file → Upload files**, drag the whole contents in.
3. Go to **Settings → Pages**.
4. Under *Build and deployment*, set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
5. Wait about a minute. The site appears at
   `https://<your-username>.github.io/<repo-name>/`.

Confirm it works on that address before touching the domain.

---

## Pointing your domain at it

`CNAME` is already set to `kindredbk.nyc`. Leave it alone unless the domain
changes.

Then in **GoDaddy → My Products → DNS** for that domain:

**Four A records**, all with host `@`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**One CNAME record**, host `www`, pointing to:

```
<your-username>.github.io
```

Delete GoDaddy's default parking records first, or they will conflict.

Back in **Settings → Pages**, enter the domain under *Custom domain* and save.
DNS usually propagates in under an hour but can take a day. Once GitHub reports
the domain as verified, tick **Enforce HTTPS**. Do not send the link to anyone
until the padlock shows.

---

## The tour form

GitHub Pages serves static files only — it cannot receive a form submission.
Right now the form validates the fields and then opens the visitor's email app
with the details filled in. That works everywhere but is clumsy on desktop.

To make it a real form, use a free form relay:

1. Sign up at formspree.io (or Basin, or Getform) and create a form.
   You get an endpoint like `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, find the `submitBtn` click handler near the bottom.
3. Replace the `window.location.href='mailto:...'` line with a `fetch()` POST to
   that endpoint, sending the four field values as JSON.

Any of those services will email you each submission. Point it at an inbox
somebody checks daily.

---

## Before it goes live

- [ ] Set up the `hello@kindredbk.nyc` mailbox — the address appears in the
      tour section, the footer, and the form handler script
- [ ] Replace the phone number `(718) 555-0137` — tour section and footer
- [ ] Confirm hours and age ranges match the OCFS permit
- [ ] Get written permission from Eli Cisner Studio to publish the renders
- [ ] Set up the Google Business Profile for 79 Quay Street and link it here

---

## Editing later

`index.html` contains everything, including the styles. The brand colours are
defined once at the top of the `<style>` block:

```css
--sage:#5E6B45;  --olive:#7C8A5F;  --sand:#EADCC6;
--clay:#B4553A;  --harbor:#93AFBF; --linen:#F6F0E4;
```

Change a value there and it updates site-wide.

To swap a photo, drop a replacement into `images/` with the same filename, or
change the `src` in the markup. Keep the `width` and `height` attributes
accurate — they stop the page jumping around while images load.

Interior renders by Eli Cisner Studio.
