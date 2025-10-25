
# Tha Doll House — AI Bot Suite (Static Site)

This is a static, GitHub Pages–ready site with:
- `/index.html` — main shop page (grid of all bots)
- `/bots/*.html` — individual interactive demo pages
- `/assets/cards/*` — pricing card images (copied if you provided them)

## How to deploy on GitHub Pages
1. Create a new public repo on GitHub, e.g. `tha-doll-house-bots`.
2. Upload **all files** from this folder to the repo (or use the ZIP below).
3. In the repo, go to **Settings → Pages** and set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`) / folder: `/root`
4. Your site will appear at: `https://<your-username>.github.io/<repo-name>/`

To update Stripe buy links, open each file in `/bots/*.html` and replace the
`alert('Replace with your Stripe link...')` with your Stripe URL, for example:

```html
<button class="btn btn-gold" onclick="location.href='https://buy.stripe.com/your_link'">Buy Now</button>
```

## Notes
- WriterSX and GlamBot use a black & gold **dark theme**.
- You can replace the pricing card PNGs in `/assets/cards/` at any time.
