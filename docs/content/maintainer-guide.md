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

## How maintenance works

Maintainers are responsible for the quality of public information. That includes submissions, app metadata, user reports, taxonomy, documentation, and page status.

Most maintainer work follows the same pattern:

1. Review the proposed change.
2. Compare it with upstream sources.
3. Decide whether it improves user trust and discovery.
4. Approve, request changes, reject, deprecate, or remove.
5. Leave enough context for future maintainers.

## Responsibilities

- Review new app submissions.
- Merge high-quality edit requests.
- Moderate spam, unsafe content, and abuse reports.
- Keep docs accurate.
- Preserve a consistent taxonomy.
- Watch for stale or deprecated projects.

## Daily review workflow

Use this sequence when reviewing queue items:

1. Check whether the item is urgent or safety-related.
2. Review submissions before minor metadata edits when possible.
3. Check reports involving malware, impersonation, or broken downloads early.
4. Merge simple factual corrections quickly.
5. Leave unclear changes open with a request for more context.

## Review decisions

| Decision | Use when |
| --- | --- |
| Approve | The app meets OpenLib guidelines |
| Request changes | The submission is promising but incomplete |
| Reject | The app is out of scope, unsafe, duplicate, or not open source |
| Deprecate | The app is listed but no longer recommended |

## How to review submissions

For each submission:

- Open the source repository.
- Confirm the project name and owner.
- Confirm license and release information.
- Check whether the project is already listed.
- Review categories, tags, and platform support.
- Read the description for unsupported claims.
- Check links for official domains and safe destinations.

If the submission fails a fixable requirement, request changes. If it fails a core requirement, reject it with a clear reason.

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

## How generated docs are published

The docs build reads Markdown and writes generated files to `public/docs/`.

```bash
npm run docs:build
```

The sitemap build reads the generated docs manifest and adds published docs URLs to `public/sitemap.xml`.

```bash
npm run seo:sitemap
```

Only generated docs files under `public/docs/` are deployed to Firebase Hosting. The Markdown source stays in the repository for review and long-term maintenance.

## Incident response

For unsafe listings, prioritize user safety: unpublish or mark deprecated first, then document the reason and follow up with project maintainers if needed.

## Incident notes

Incident notes should include:

- What was reported.
- Which app or page was affected.
- What evidence was checked.
- What action was taken.
- Whether a follow-up is needed.
