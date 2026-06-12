# OpenLib

<p align="center">
  <img src="https://raw.githubusercontent.com/AHS-Mobile-Labs/OpenLib/refs/heads/main/public/og-image.png" alt="OpenLib banner" width="100%" />
</p>

OpenLib is a community-driven library for discovering free and open-source software. It helps people compare alternatives, review apps, browse categories, and find tools that respect open-source and privacy-friendly values.

[![Live](https://img.shields.io/badge/Live-Firebase-orange)](https://www.openlib.online/)
[![License](https://img.shields.io/badge/license-MPL--2.0-green)](LICENSE)

Live site: [https://www.openlib.online/](https://www.openlib.online/)

## Features

- Browse curated open-source apps by category, tag, ranking, and trend.
- Search the catalog with keyboard-friendly navigation.
- View app detail pages with screenshots, install methods, metadata, alternatives, ratings, and reviews.
- Submit new apps, request edits, claim ownership, and resubmit after review feedback.
- Use community profiles, bookmarks, follows, organizations, reports, and reputation roles.
- Moderate submissions, reports, edit requests, app versions, users, and team permissions.
- Serve SEO-friendly prerendered pages for app, category, tag, alternative, policy, and landing routes.

## Stack

| Area | Technology |
| --- | --- |
| Frontend | Vanilla HTML, CSS, and JavaScript |
| Auth | Firebase Authentication |
| Data | Cloud Firestore |
| Storage | Firebase Storage |
| Hosting | Firebase Hosting |
| Functions | Firebase Cloud Functions |
| Analytics | Google Analytics 4 |

## Project Structure

```text
public/       Firebase Hosting public root: SPA files, assets, manifest, sitemap, robots, legal text
functions/    Cloud Functions, prerender logic, and copied HTML/legal snapshots for bot routes
firebase/     Firestore rules, Firestore indexes, and Storage rules
scripts/      SEO, sitemap, deploy-version, and Search Console maintenance scripts
config/       Local configuration templates
```

Important public entry files:

- `public/index.html` - SPA shell
- `public/script.js` - routing, rendering, UI behavior, and client workflows
- `public/firebase-db.js` - Firestore reads/writes and app data helpers
- `public/styles.css` - global styling
- `public/service-worker.js` - PWA cache/update behavior
- `public/firebase-config.js` - local Firebase app config generated from the template

## Getting Started

### Prerequisites

- Node.js
- Firebase CLI
- A Firebase project with Authentication, Firestore, Storage, Hosting, and Functions enabled

### Local Setup

```bash
git clone https://github.com/AHS-Mobile-Labs/OpenLib.git
cd OpenLib
cp config/firebase-config.template.js public/firebase-config.js
firebase emulators:start
```

For a quick static preview, serve the `public/` directory with any local web server. The Firebase emulator flow is recommended when testing authentication, Firestore, Storage, Functions, rules, or prerendering.

## Scripts

```bash
npm run seo:audit        # Validate local SEO-critical files and Firebase rewrites
npm run seo:sitemap      # Generate public/sitemap.xml and public/robots.txt
npm run seo:audit:live   # Check live production URLs
npm run seo:gsc          # Read Search Console data when Google credentials are configured
```

`firebase deploy` also runs the hosting predeploy hooks in `firebase.json`, including version stamping, sitemap generation, and the local SEO audit.

## Deploy

```bash
firebase deploy
```

Hosting deploys only `public/`. Function predeploy copies `public/index.html`, `public/privacy.txt`, and `public/terms.txt` into `functions/` so the prerender function can serve bot-friendly pages.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

You can also submit apps directly through the live OpenLib site with the submit app flow.

## Security

Please do not open public issues for vulnerabilities. Read [SECURITY.md](SECURITY.md) for the responsible disclosure policy and supported testing scope.

## License

OpenLib is distributed under the [Mozilla Public License 2.0](LICENSE).

The OpenLib name, branding, and logos remain the property of AHS Mobile Labs.
