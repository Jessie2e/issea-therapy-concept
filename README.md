# ISSEA Therapy Mockup

Blue-forward clinical website concept for a specialized mental-health practice.

## Start it

```bash
npm install
npm run dev
```

## Customize it quickly

Most practice-specific text lives in:

`src/siteContent.js`

Change:
- practice name
- full practice name/tagline
- provider name + credentials
- phone
- portal link
- specialty cards
- article previews

The main page layout is in `src/App.jsx`.
All styling is in `src/styles.css`.

## Important before launch

- Replace `#portal` with the actual secure EHR/client portal URL.
- Wire the general inquiry form to an appropriate form service or backend.
- Do not collect clinical details in an unsecured contact form.
- Confirm insurance/Medicare language before publishing.
- Replace the portrait placeholder with a real approved photo.
- Add privacy policy, accessibility statement, and any practice-required notices.
