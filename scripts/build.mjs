import { build, loadEnv } from 'vite';
import { readFile, writeFile, rm, copyFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = process.cwd();
const env = { ...loadEnv('production', root, ''), ...process.env };
const rawUrl = env.SITE_URL?.trim();
let siteUrl;
if (rawUrl) {
  const parsed = new URL(rawUrl);
  if (parsed.protocol !== 'https:' || parsed.username || parsed.password || parsed.search || parsed.hash) throw new Error('SITE_URL must be a public HTTPS homepage URL without query or fragment.');
  siteUrl = parsed.href.endsWith('/') ? parsed.href : `${parsed.href}/`;
}
await build({ build: { manifest: true } });
await build({ build: { ssr: 'src/entry-server.jsx', outDir: '.prerender', emptyOutDir: true } });
try {
  const { render } = await import(pathToFileURL(path.join(root, '.prerender/entry-server.js')));
  let markup = render();
  const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
  // SSR emits source asset URLs; map them to the client build's hashed assets.
  for (const [source, entry] of Object.entries(manifest)) {
    markup = markup.replaceAll(`/${source}`, `/${entry.file}`);
  }
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const organization = {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'Intervention Services of Southeast Alabama', alternateName: 'ISSEA',
    telephone: '+1-334-509-2598',
    address: { '@type': 'PostalAddress', addressLocality: 'Enterprise', addressRegion: 'AL', addressCountry: 'US' },
  };
  if (siteUrl) {
    organization.url = siteUrl;
    organization.logo = new URL('logo.png', siteUrl).href;
    const escapedUrl = siteUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
    html = html.replace('</head>', `<link rel="canonical" href="${escapedUrl}" />\n<meta property="og:url" content="${escapedUrl}" />\n<meta property="og:image" content="${escapedUrl}logo.png" />\n<meta property="og:image:alt" content="ISSEA star and circle logo" />\n</head>`);
    await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapedUrl}</loc></url></urlset>`);
    await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`);
  } else {
    await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
    console.log('SITE_URL is not configured; canonical and sitemap will be generated when it is set.');
  }
  html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(organization).replaceAll('<', '\\u003c')}</script>\n</head>`);
  await copyFile('src/assets/logo.png', 'dist/logo.png');
  await writeFile('dist/index.html', html);
  console.log('Static homepage rendered successfully.');
} finally { await rm('.prerender', { recursive: true, force: true }); }
