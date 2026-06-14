---
title: Edit Requests
description: Learn how edit requests improve app listings, what evidence to include, and how maintainers review changes.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-14
version: "1.0"
tags:
  - edit-requests
  - metadata
  - contributions
status: Published
category: Docs
order: 48
---

# Edit Requests

Edit requests are how users suggest changes to existing app listings. They keep OpenLib collaborative while still preserving review before public metadata changes.

## When to submit an edit request

Use an edit request when:

- A source link changed.
- A license is wrong or missing.
- A category or tag is inaccurate.
- A platform is no longer supported.
- The description is unclear.
- A download link is broken.
- A project has been renamed or deprecated.

## What to include

A strong edit request includes the change and proof.

| Change | Evidence to include |
| --- | --- |
| License correction | Link to upstream license file |
| Source URL update | Link to official repository |
| Platform support | Link to install docs or release notes |
| Description update | Link to README or project homepage |
| Deprecation | Link to maintainer announcement |

## How review works

Maintainers compare the request with upstream sources. If the change is accurate and improves the listing, they can approve it. If it is incomplete, unclear, or unsupported, they can reject it or ask for more information.

## Direct edits and reviewed edits

Some trusted users may have permission to edit more directly. Most public users submit reviewed edit requests.

The goal is the same in both cases: make the public listing more accurate without allowing spam or unsupported claims.

## Good edit request examples

```md
Change the license from GPL-2.0 to GPL-3.0.
Evidence: https://github.com/example/project/blob/main/LICENSE
```

```md
Add Web as a supported platform.
Evidence: The official hosted app is linked from the project homepage.
```

## Related docs

- [Contributor Guide](/docs/contributor-guide)
- [Maintainer Guide](/docs/maintainer-guide)
- [Moderation Workflow](/docs/moderation-workflow)

