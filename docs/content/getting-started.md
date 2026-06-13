---
title: Getting Started
description: Learn what OpenLib is, how to browse the library, and how to start contributing.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-13
version: "1.0"
tags:
  - onboarding
  - open-source
status: Published
category: Docs
order: 10
---

# Getting Started

OpenLib is a curated open-source app library for finding free, transparent, and community-friendly alternatives to popular software.

> [!NOTE]
> OpenLib focuses on discoverability. Each app entry should help visitors understand what the project does, where the source code lives, and which proprietary or closed services it can replace.

## How OpenLib works

OpenLib has three simple parts:

1. A public library where visitors discover open-source apps.
2. A contribution workflow where people submit apps and suggest improvements.
3. A moderation workflow where maintainers review submissions, reports, metadata, and documentation.

The website is optimized for browsing first. Users can search by app name, proprietary alternative, category, tag, platform, license, or project description. Each public page is designed to be shareable, indexable, and understandable without requiring a user account.

## How the docs work

The documentation you are reading is stored as Markdown in `docs/content/`. During the build step, OpenLib turns each Markdown file into a static page under `/docs/`.

```bash
npm run docs:build
```

That command generates:

- Static HTML pages in `public/docs/`.
- A documentation manifest.
- A documentation search index.
- Clean page URLs such as `/docs/submit-app`.
- Previous and next links based on each page's `order` value.

The source Markdown remains the canonical place to edit docs. The generated `public/docs/` files are what Firebase Hosting serves.

## What you can do

- Browse open-source apps by category, tag, platform, and alternatives.
- Read metadata such as license, source link, platforms, and project status.
- Submit new apps for review.
- Suggest corrections through edit requests.
- Rate and review apps you use.

## Good first workflows

1. Search for an app or category from the OpenLib home page.
2. Open an app detail page and review the source, license, and install links.
3. Use **Submit App** when a useful open-source project is missing.
4. Use edit requests when an existing app needs better metadata.

## How to use the library

Use OpenLib like a map. Start with what you want to replace or what task you need to complete.

| Goal | Start here |
| --- | --- |
| Replace a proprietary app | Search for the product name or open an alternatives page |
| Find software for a workflow | Use categories and tags |
| Check trust signals | Read source, license, maintainer, and review details |
| Help improve a listing | Submit an edit request or report an issue |
| Add a missing project | Use the app submission workflow |

## What makes a useful listing

A good OpenLib listing answers practical questions quickly:

- What does this app do?
- What closed or proprietary tools can it replace?
- Where is the source code?
- What license does it use?
- Which platforms does it support?
- Is the project maintained?
- How can a user install or try it?

## Documentation map

| Page | Use it for |
| --- | --- |
| [Submit an App](/docs/submit-app) | Preparing and sending app submissions |
| [App Guidelines](/docs/app-guidelines) | Understanding what OpenLib accepts |
| [Categories & Tags](/docs/categories-and-tags) | Organizing apps so users can find them |
| [Contributor Guide](/docs/contributor-guide) | Helping with content and review quality |
| [Maintainer Guide](/docs/maintainer-guide) | Maintaining the library and documentation |
| [FAQ](/docs/faq) | Quick answers about OpenLib and docs |

## Example app metadata

```json
{
  "name": "Example Notes",
  "category": "Productivity",
  "license": "MPL-2.0",
  "source": "https://github.com/example/example-notes",
  "platforms": ["Linux", "Windows", "macOS"]
}
```

## Next step

Start with [Submit an App](/docs/submit-app) if you want to add a project, or read [App Guidelines](/docs/app-guidelines) if you want to understand OpenLib's quality bar.
