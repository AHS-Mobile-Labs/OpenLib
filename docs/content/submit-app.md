---
title: Submit an App
slug: submit-app
description: Learn how to submit applications to OpenLib.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-13
version: "1.0"
tags:
  - submissions
  - apps
status: Published
category: Docs
order: 20
---

# Submit an App

Anyone can suggest an open-source app for OpenLib. Submissions are reviewed before they appear in the public library.

## Before you submit

Make sure the app has:

- A public source repository.
- A clear open-source license.
- A stable project name and homepage or release page.
- Enough description for a new user to understand what it does.
- Accurate platform and category information.

> [!TIP]
> If you are unsure which category fits, choose the closest one and add helpful tags. Maintainers can adjust the final category during review.

## Submission fields

| Field | What to enter |
| --- | --- |
| Name | The official app or project name |
| Description | A short, plain-language summary |
| Source | Repository URL, preferably GitHub, GitLab, Codeberg, or a project forge |
| Website | Official project website when available |
| License | SPDX-style license name when possible |
| Alternative to | Proprietary or closed apps this project can replace |

## Review flow

1. Submit the app from the OpenLib website.
2. A maintainer checks source, license, category, and safety signals.
3. The submission is approved, rejected, or sent back for changes.
4. Approved apps become public and can receive reviews and edit requests.

## Markdown example for maintainers

```md
## Review notes

- Source repository is public.
- License is listed in the repository.
- Category and platforms match project documentation.
```

## Common rejection reasons

- No source code is available.
- License is missing or not open source.
- Download link points to unsafe or unrelated files.
- The app is abandoned and has known severe security issues.
- The submission duplicates an existing OpenLib entry.
