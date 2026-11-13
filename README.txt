CLICKA.AI: INSTALL AND PUBLISH GUIDE (Higher Health)

WHAT IS IN THIS FOLDER
index.html            the app (all text content is inside this one file)
fig/                  the figures (neonatal charts and algorithms), saved for offline use
sw.js                 makes it work offline
manifest.webmanifest  lets phones install it like an app
icon-192.png, icon-512.png, maskable-512.png, apple-touch-icon.png, favicon-32.png, favicon-48.png   the clicka.ai app icons

1. PUT IT ONLINE (needed once, requires https)
Upload the whole folder to any free static host, for example:
 - Netlify Drop (app.netlify.com/drop): drag the folder onto the page
 - Cloudflare Pages, or GitHub Pages
You get a web address. Open it once on a phone WITH internet so the app saves itself.

2. INSTALL ON A PHONE
Android (Chrome): menu (three dots) > Install app / Add to Home screen.
iPhone (Safari only): Share button > Add to Home Screen.
After the first visit it opens and works with no signal.

3. UPDATING THE CONTENT
After any change to index.html, open sw.js and change 'paeds-v24' to 'paeds-v25' (then v26, and so on), then upload the folder again. Phones update the next time they open the app with internet.

4. STORES (later)
Google Play: go to pwabuilder.com, enter your web address, download the Android package. Needs a Play developer account ($25 once).
Apple App Store: needs a $99/year developer account, a Mac with Xcode, and a native wrapper. Apple may reject apps that are only a website, so it needs more app-like features.

5. BEFORE PUBLISHING WIDELY
 - Get written permission from the EDLIZ owners.
 - Check Zimbabwe regulations for software that calculates doses.
 - Have a clinician verify every dose against the print.
 - The source and disclaimer wording on each page should be reviewed.
