---
title: App Guidelines
description: Understand the quality, licensing, safety, and metadata expectations for OpenLib app listings.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-13
version: "1.0"
tags:
  - guidelines
  - review
status: Published
category: Docs
order: 30
---

# App Guidelines

OpenLib lists apps that are useful, understandable, and meaningfully open source.

## How guidelines are used

Guidelines help maintainers make consistent decisions. They are not meant to punish imperfect submissions. They define what information must be clear before an app becomes public.

When a submission is incomplete but promising, maintainers should request changes instead of rejecting it immediately. When a submission is unsafe, deceptive, duplicate, or outside OpenLib's scope, maintainers should reject it or remove it from public listings.

## Acceptance checklist

- The source code is publicly accessible.
- The project uses an open-source license.
- The app has a real use case.
- Metadata is accurate and not promotional.
- Links point to official project resources.
- The app is not malware, deceptive software, or a clone intended to impersonate another project.

## How to evaluate an app

Use this review order:

1. Confirm the project identity.
2. Confirm the source code is public.
3. Confirm the license is open source.
4. Confirm the website, release, and download links are official.
5. Confirm the description matches the actual project.
6. Confirm category, tags, and platforms are accurate.
7. Check whether the app duplicates an existing listing.

If any step fails, document the reason in the review notes.

## License expectations

OpenLib prefers licenses recognized by open-source communities, such as MIT, Apache-2.0, GPL, LGPL, AGPL, MPL-2.0, BSD, and similar licenses.

> [!WARNING]
> "Source available" is not the same as open source. If redistribution, modification, or commercial use is heavily restricted, maintainers should review carefully before approval.

## Metadata quality

Good listings are specific. Avoid vague descriptions like "best app ever" or "all-in-one tool." Explain what the app does, who it helps, and what it replaces.

```txt
Good: Open-source password manager with local vaults and browser extensions.
Weak: Amazing security app for everyone.
```

## Description patterns

Descriptions should be short, concrete, and testable.

| Pattern | Example |
| --- | --- |
| Purpose | "Markdown note-taking app with local files and sync support." |
| Replacement | "Open-source alternative to proprietary team chat tools." |
| Platform | "Self-hosted dashboard for monitoring servers and services." |
| Avoid | "The best productivity app for everyone." |

## Safety signals

Maintainers may reject or unpublish apps when:

- Download links are suspicious or unrelated.
- The project distributes binaries without source parity.
- The app imitates another project in a confusing way.
- The repository contains malware reports that are not resolved.

## Deprecation

Apps can remain listed but marked deprecated when they are historically useful, replaced by a maintained fork, or no longer recommended for new users.

## How to mark status

Use statuses to communicate maintenance state clearly:

- **Published** means the app is available and meets guidelines.
- **Draft** means a page or listing is not ready for public use.
- **Deprecated** means it remains visible for context but is not recommended for new users.

Status changes should include a reason in review notes or changelog text when possible.
