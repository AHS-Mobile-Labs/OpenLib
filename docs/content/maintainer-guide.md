---
title: Maintainer Guide
description: Operational guidance for OpenLib maintainers reviewing apps, moderating content, and maintaining documentation.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-13
version: "1.0"
tags:
  - maintainers
  - operations
status: Published
category: Docs
order: 60
---

# Maintainer Guide

Maintainers keep OpenLib useful, accurate, and safe.

## Responsibilities

- Review new app submissions.
- Merge high-quality edit requests.
- Moderate spam, unsafe content, and abuse reports.
- Keep docs accurate.
- Preserve a consistent taxonomy.
- Watch for stale or deprecated projects.

## Review decisions

| Decision | Use when |
| --- | --- |
| Approve | The app meets OpenLib guidelines |
| Request changes | The submission is promising but incomplete |
| Reject | The app is out of scope, unsafe, duplicate, or not open source |
| Deprecate | The app is listed but no longer recommended |

## Documentation maintenance

Documentation is maintained locally as Markdown under `docs/content/`. Create, edit, rename, move, and delete docs pages by changing those Markdown files, then run the docs generator before deployment.

> [!NOTE]
> The canonical documentation source remains Markdown in version control. This keeps docs portable, reviewable, and easy to restore.

## Publishing checklist

1. Update or add Markdown files in `docs/content/`.
2. Run `npm run docs:build`.
3. Confirm `/docs/` pages render locally.
4. Run `npm run seo:sitemap` and confirm docs URLs are included.
5. Submit the change for review.

## Incident response

For unsafe listings, prioritize user safety: unpublish or mark deprecated first, then document the reason and follow up with project maintainers if needed.
