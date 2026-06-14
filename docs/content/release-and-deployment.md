---
title: Release and Deployment
description: Learn the local release workflow for docs changes, generated pages, sitemap updates, and Firebase deployment checks.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-14
version: "1.0"
tags:
  - deployment
  - docs
  - sitemap
status: Published
category: Docs
order: 80
---

# Release and Deployment

OpenLib docs are written in Markdown and generated into static files before deployment.

## Local release workflow

Use this workflow after docs changes:

```bash
npm run docs:build
npm run seo:sitemap
npm run seo:audit
```

The build should produce static pages under `public/docs/`, update the docs manifest, and keep search data in sync.

## What gets deployed

Firebase Hosting serves the generated files in `public/`. Markdown files in `docs/content/` are source files for maintainers and contributors.

| Source | Purpose |
| --- | --- |
| `docs/content/` | Markdown source |
| `docs/assets/` | Source docs images and attachments |
| `public/docs/` | Generated deployable docs |
| `public/sitemap.xml` | Search engine sitemap |
| `firebase.json` | Hosting routes, headers, and rewrites |

## Clean docs URLs

Each page gets a clean route such as `/docs/roles-and-permissions`. Firebase rewrites should point that route to the generated HTML file.

When adding a docs page:

1. Add the Markdown file.
2. Run the docs build.
3. Add a Firebase rewrite for the clean docs path.
4. Run sitemap and audit checks.

## Version and cache behavior

The deploy process updates versioned asset links so browsers receive the latest docs CSS and runtime script.

Generated docs should not depend on client-only routing. They should render as static pages when opened directly.

## Predeploy checks

Before deployment, confirm:

- Docs build without errors.
- New routes are in Firebase rewrites.
- Sitemap includes published docs.
- SEO audit passes.
- Internal docs links work.
- Removed pages are not still linked.

## Related docs

- [Maintainer Guide](/docs/maintainer-guide)
- [Changelog](/docs/changelog)

