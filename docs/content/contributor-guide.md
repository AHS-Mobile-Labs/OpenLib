---
title: Contributor Guide
description: Learn how contributors can improve OpenLib content, reviews, docs, and app metadata.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-13
version: "1.0"
tags:
  - contributors
  - community
status: Published
category: Docs
order: 50
---

# Contributor Guide

Contributors help OpenLib stay accurate, useful, and welcoming.

## How contribution works

OpenLib contributions are small, reviewable improvements. A contribution might be a new app submission, a correction to an existing listing, a helpful review, a report, or a documentation update.

The strongest contributions include evidence. If you change a license, category, source link, or platform field, include the upstream link that confirms the change.

## Ways to contribute

- Submit missing open-source apps.
- Improve descriptions, tags, categories, and source links.
- Review app metadata for accuracy.
- Report broken links or unsafe entries.
- Improve documentation.
- Help answer community questions.

## How to make a useful contribution

1. Find the page or listing that needs work.
2. Check the upstream project source.
3. Write a concise change.
4. Include links that prove the change.
5. Submit the update for review.

Good contributors reduce uncertainty for maintainers. They make it easy to say yes.

## Content standards

Write descriptions that are factual, concise, and verifiable. Prefer "what it does" over hype.

> [!IMPORTANT]
> OpenLib entries should help users make informed choices. Avoid unsupported claims about security, privacy, or performance.

## Edit requests

Use edit requests for changes to public app listings. Include a short reason and, when possible, a source link that confirms the correction.

## Examples of strong edit requests

| Change | Good evidence |
| --- | --- |
| License update | Link to upstream LICENSE file |
| Platform support | Link to official install docs |
| Description correction | Link to project README |
| Broken link fix | Link to replacement official URL |
| Deprecated status | Link to maintainer announcement |

## Review etiquette

- Be specific about what needs to change.
- Do not attack maintainers, submitters, or project authors.
- Separate personal preference from factual accuracy.
- Flag conflicts of interest when reviewing your own project.

## Documentation contributions

Docs are stored in Markdown under `docs/content/`. Each page has front matter metadata and is generated into `/docs/` pages.

```md
---
title: Example Page
description: A short summary for search and social sharing.
status: Published
---

# Example Page
```

## Local docs workflow

Use this workflow for documentation changes:

```bash
npm run docs:build
npm run seo:sitemap
npm run seo:audit
```

The first command regenerates static docs pages. The second refreshes the sitemap. The third checks that supported routes, metadata, internal links, and sitemap entries are consistent.
