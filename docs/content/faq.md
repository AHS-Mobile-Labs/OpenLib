---
title: FAQ
description: Answers to common questions about OpenLib, submissions, reviews, and documentation.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-13
version: "1.0"
tags:
  - faq
  - help
status: Published
category: Docs
order: 90
---

# FAQ

## Is OpenLib only for desktop apps?

No. OpenLib can list desktop, mobile, web, command-line, and self-hosted apps when they meet the app guidelines.

## Does every app need a download link?

No. Web-only or self-hosted projects may use website, source, documentation, or release links instead.

## Can commercial open-source apps be listed?

Yes, if the app is meaningfully open source and the listing is transparent about licensing and paid services.

## What if an app is no longer maintained?

Maintainers may mark it deprecated, update the description, or remove unsafe links.

## How do docs pages get URLs?

Docs URLs are generated from page titles or explicit slugs in Markdown front matter. For example, `Submit an App` becomes `/docs/submit-app`.

## Where are docs stored?

Docs are stored as Markdown files in `docs/content/` and generated into static pages under `/docs/`.

## How do maintainers edit docs?

Maintainers edit Markdown files locally under `docs/content/`, then run `npm run docs:build` to regenerate the static documentation pages.
