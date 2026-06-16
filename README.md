# OpenLib

<p align="center">
  <img src="https://raw.githubusercontent.com/AHS-Mobile-Labs/OpenLib/refs/heads/main/public/og-image.png" alt="OpenLib banner" width="100%" />
</p>

OpenLib is a community-driven library for discovering free and open-source software. It helps people compare alternatives, inspect app metadata, read community reviews, and find tools that match open-source and privacy-friendly values.

[![Live](https://img.shields.io/badge/Live-Firebase-orange)](https://www.openlib.online/)
[![License](https://img.shields.io/badge/license-MPL--2.0-green)](LICENSE)

Live site: [https://www.openlib.online/](https://www.openlib.online/)

User docs: [https://www.openlib.online/docs/](https://www.openlib.online/docs/)

## What OpenLib Does

- Helps users browse open-source apps by category, tag, ranking, trend, and alternatives.
- Shows app detail pages with screenshots, install methods, source links, metadata, ratings, reviews, and related tools.
- Supports app submissions, edit requests, ownership claims, reports, and review feedback.
- Provides community profiles, bookmarks, follows, organizations, reputation, and contributor roles.
- Gives maintainers moderation workflows for submissions, reports, app versions, users, and team permissions.
- Serves SEO-friendly prerendered pages for app, category, tag, alternative, policy, docs, and landing routes.

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

## Repository Map

```text
public/       Firebase Hosting public root, SPA files, assets, generated docs, sitemap, robots, legal text
docs/         Markdown documentation source and docs media
functions/    Cloud Functions, prerendering, reputation, automation, and bot-friendly snapshots
firebase/     Firestore rules, Firestore indexes, and Storage rules
scripts/      Docs, SEO, sitemap, deploy-version, and Search Console maintenance scripts
config/       Local Firebase configuration templates
```

Important public entry files:

- `public/index.html` - SPA shell
- `public/script.js` - routing, rendering, UI behavior, and client workflows
- `public/firebase-db.js` - Firestore reads/writes and app data helpers
- `public/styles.css` - global styling
- `public/service-worker.js` - PWA cache/update behavior
- `public/firebase-config.js` - local Firebase app config generated from the template

Documentation source lives in `docs/content/` and is generated into `public/docs/`.
Read [docs/README.md](docs/README.md) before adding, editing, or fixing docs pages.

## Getting Started

### Prerequisites

- Node.js for local scripts and Cloud Functions tooling
- npm
- Firebase CLI
- A Firebase project with Authentication, Firestore, Storage, Hosting, and Functions enabled

### Local Setup

```bash
git clone https://github.com/AHS-Mobile-Labs/OpenLib.git
cd OpenLib
cp config/firebase-config.template.js public/firebase-config.js
```

Edit `public/firebase-config.js` with your local Firebase web app values. This file is ignored by git and should not be committed.

For a quick static preview of the hosted files:

```bash
python3 -m http.server 5174 --directory public
```

For Firebase-backed development:

```bash
firebase emulators:start
```

If you are working on Cloud Functions, install the Functions dependencies first:

```bash
cd functions
npm ci
cd ..
firebase emulators:start
```

Use the emulator flow when testing authentication, Firestore, Storage, Functions, rules, uploads, roles, moderation, or prerendering.

## Common Commands

```bash
npm run docs:build       # Generate public/docs from docs/content Markdown
npm run seo:sitemap      # Generate public/sitemap.xml and public/robots.txt
npm run seo:audit        # Validate local SEO-critical files and Firebase rewrites
npm run seo:audit:live   # Check live production URLs
npm run seo:gsc          # Read Search Console data when Google credentials are configured
```

`firebase deploy` runs the hosting predeploy hooks in `firebase.json`, including version stamping, sitemap generation, and the local SEO audit.

## Development Notes

- The hosted SPA is framework-free and does not require a frontend build step.
- Public routes, metadata, sitemap entries, service worker behavior, and Firebase rewrites should stay in sync.
- Docs are edited in `docs/content/`; generated files in `public/docs/` should come from `npm run docs:build`.
- Firestore and Storage permissions must be enforced in rules or trusted Functions, not only in client UI.
- App listing changes should use verifiable upstream sources for licenses, install links, platforms, and ownership claims.

## Deployment

```bash
firebase deploy
```

Hosting deploys only `public/`. Function predeploy copies `public/index.html`, `public/privacy.txt`, and `public/terms.txt` into `functions/` so the prerender function can serve bot-friendly pages.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request, especially if your change touches routes, Firebase rules, roles, user content, docs generation, or moderation workflows.

You can also submit apps directly through the live OpenLib site with the submit app flow. A pull request is not required for ordinary app suggestions.

## Security

Please do not open public issues for vulnerabilities. Read [SECURITY.md](SECURITY.md) for the responsible disclosure policy and supported testing scope.

## License

OpenLib is distributed under the [Mozilla Public License 2.0](LICENSE).

The OpenLib name, branding, and logos remain the property of AHS Mobile Labs.

© 2026 AHS Mobile Labs
