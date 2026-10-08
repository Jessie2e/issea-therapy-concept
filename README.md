# ISSEA website review

## Run locally

Use Node.js 20.19+ or 22.12+ and run:

```sh
npm install
npm run dev
```

For a production preview:

```sh
npm run build
npm run preview
```

The build renders the homepage into HTML so its content is available before JavaScript loads. React then enables menus, carousels, the floating appointment button, and form feedback.

## Connect Formspree later

1. Copy `.env.example` to `.env.local` in the project root.
2. Set `VITE_FORMSPREE_ENDPOINT` to the full endpoint supplied by Formspree, such as `https://formspree.io/f/YOUR_FORM_ID` (replace the example with the real value).
3. Restart the development server or rebuild the production site.
4. Verify the recipient in Formspree and test delivery before publishing.

No endpoint is configured in this review. The form is disabled and shows a phone contact option until a valid endpoint is supplied. Never put a private API key in a `VITE_` variable. The form uses public endpoint submission, required name/email/acknowledgment, a pending state, success feedback, and recoverable error feedback. Keep inquiries general; the form must not invite private clinical details.

## Public site address and SEO

Set `SITE_URL` in `.env.local` to the final public HTTPS homepage URL and rebuild. The build then adds the canonical address, absolute social URLs, and a one-page sitemap linked from robots.txt. With no public URL supplied, those domain-dependent items are intentionally omitted. Search titles, descriptions, sharing metadata, organization data, image descriptions, favicon, and pre-rendered page content are already included.

Only existing therapy services are described in search metadata. PSB and psychosexual assessments remain in the limited-availability disclosure, not featured search descriptions.

## Editing

- `src/siteContent.js`: practice details, navigation, featured services, resources.
- `src/App.jsx`: layout, scroll behavior, form fields.
- `src/styles.css`: styling and responsive layouts.
- `src/assets/logo.png`: current symbol-only logo.
- `src/assets/logo-withwords.png`: archived full logo.
- `src/inquiry.js`: Formspree request helper.
- `index.html`: title and social/search descriptions.
- `scripts/build.mjs`: HTML rendering, organization data, domain-dependent SEO files.

The mobile appointment button appears after the hero actions leave view and hides once the contact section enters view or the navigation menu is open. It stays hidden through the contact section and footer, and returns when scrolling back up. The header stays at the top while scrolling on all sizes. Clicking the brand returns home.

## Checks

```sh
node scripts/check-inquiry.mjs
npm run build
```

The form request checks simulate responses locally and do not send any messages.

## Before publishing

The portal URL is still a placeholder (`#portal`). Article cards are previews; their links currently return to the resources section. Add final destinations when they are available. Confirm the existing practice/contact/insurance details and required privacy notices. No deployment has been performed.

Implementation references: [Google’s JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) and [Formspree’s JavaScript submission documentation](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax).
