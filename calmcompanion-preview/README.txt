CalmCompanion preview site
==========================

What this is
  The six pages as they stand today (Home, Meet Norman, The Science, For
  Professionals, Our Story, FAQ & Contact) as plain HTML, CSS and a little
  JavaScript. No build step, no server software. index.html is the Home page.

How to put it on your site, hidden
  1. Pick a folder name nobody would guess, for example  preview-k7q2x
  2. Upload this whole folder's contents into that folder on your web host
     (so index.html sits at  yourcalmcompanion.com/preview-k7q2x/index.html).
     Keep the img and art folders next to the HTML files.
  3. Open  yourcalmcompanion.com/preview-k7q2x/  and click through.

  All links are relative, so any folder name works and nothing else on your
  site is touched. Your existing index page stays where it is.

Keeping it unlisted
  - Every page carries a "noindex, nofollow" tag, so Google and other search
    engines are asked not to list it. Don't link to it from the live site.
  - That is "unlisted", not "private": anyone who has the exact link can open
    it. For a real password, use your host's "Password Protect Directories"
    (cPanel) or equivalent on that folder.

Placeholders to replace before launch
  - Waitlist forms (Home and Meet Norman): they show the thank-you message but
    do not send or save anything. Swap in the MailerLite embed.
  - Contact form and the For Professionals inquiry form: same, they need a form
    service (for example Formspree) pointed at your email.
  - Fonts load from Google Fonts. Images are concept renders.
