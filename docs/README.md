# OpenLib Docs Source

This folder contains the private/source documentation for OpenLib. These files are meant for GitHub contributors and maintainers.

The public website does **not** serve Markdown directly from this folder. Markdown files in `docs/content/` are generated into static HTML under `public/docs/`.

## Folder Structure

```text
docs/
|-- README.md
|-- assets/
|   `-- screenshots and docs media
`-- content/
    `-- Markdown documentation pages
```

Use this folder for source edits. Do not manually edit generated files in `public/docs/` unless you are debugging the generator.

## How Docs Work

1. Write or edit Markdown in `docs/content/`.
2. Put docs images or attachments in `docs/assets/`.
3. Run the docs generator.
4. Generated HTML, manifest, and search data are written to `public/docs/`.
5. Firebase Hosting serves the generated files under `/docs/`.

```bash
npm run docs:build
```

## Creating a New Docs Page

Create a new Markdown file in `docs/content/`.

Example:

```text
docs/content/example-feature.md
```

Start the file with front matter:

```md
---
title: Example Feature
description: Explain what this OpenLib feature does and how to use it.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-14
version: "1.0"
tags:
  - example
  - guide
status: Published
category: Docs
order: 85
---

# Example Feature

Write the page content here.
```

The clean URL is generated from the title unless a `slug` field is provided.

Examples:

| Title | URL |
| --- | --- |
| `Roles and Permissions` | `/docs/roles-and-permissions` |
| `Search and Discovery` | `/docs/search-and-discovery` |
| `Submit an App` | `/docs/submit-app` |

## Required Metadata

Every page should include:

| Field | Purpose |
| --- | --- |
| `title` | Page title and SEO title source |
| `description` | Search, social sharing, and docs search summary |
| `maintainedBy` | Team or group responsible for the page |
| `contributors` | People or teams who contributed |
| `lastUpdated` | Last meaningful content update |
| `version` | Documentation page version |
| `tags` | Docs search and page metadata |
| `status` | Usually `Published`, or `Draft` / `Deprecated` |
| `category` | Use `Docs` unless a new category system is added |
| `order` | Sidebar and previous/next navigation order |

Use `Maintained By` and `Contributors` language, not `Author`.

## Editing an Existing Page

1. Open the matching Markdown file in `docs/content/`.
2. Update the text, links, metadata, or images.
3. Update `lastUpdated` when the content meaning changes.
4. Run:

```bash
npm run docs:build
```

5. Check the generated page in `public/docs/`.
6. Run the SEO checks before committing:

```bash
npm run seo:sitemap
npm run seo:audit
```

## Adding Images and Screenshots

Put source images in `docs/assets/`.

Reference them from Markdown with the public docs path:

```md
![Category and tag pills on an app page](/docs/assets/categories-tags-app-example.png)
```

Good screenshots should show the actual feature being documented.

Examples:

- A tags guide should show tags on a real app page.
- A submit guide should show the Submit App form.
- A roles guide should show role UI only if the screenshot helps explain the role flow.

Avoid generic screenshots that do not explain the page topic.

After running `npm run docs:build`, assets are copied into `public/docs/assets/`.

## Adding a Clean URL Route

Firebase Hosting uses explicit rewrites for docs pages. When adding a new docs page, add a matching route in `firebase.json`.

Example:

```json
{
  "source": "/docs/example-feature",
  "destination": "/docs/example-feature.html"
}
```

Then run:

```bash
npm run docs:build
npm run seo:sitemap
npm run seo:audit
```

## Markdown Features

Supported docs Markdown includes:

- Headings.
- Paragraphs.
- Ordered and unordered lists.
- Tables.
- Links.
- Images.
- Code blocks with copy buttons.
- Basic syntax highlighting.
- Callouts using blockquote syntax.

Callout example:

```md
> [!NOTE]
> This is a helpful note.
```

Code block example:

````md
```bash
npm run docs:build
```
````

## Internal Links

Use clean docs links:

```md
[Roles and Permissions](/docs/roles-and-permissions)
```

Do not link directly to generated `.html` files.

Good:

```md
/docs/submit-app
```

Avoid:

```md
/docs/submit-app.html
```

## Rebuilding Docs

Run this after any docs source change:

```bash
npm run docs:build
```

Run this before deployment or pull requests that affect routes, metadata, or public docs:

```bash
npm run seo:sitemap
npm run seo:audit
```

The sitemap command updates `public/sitemap.xml` and `public/robots.txt`.

## Fixing Stale Docs Updates

Docs pages load the OpenLib version checker. If users see stale docs after deployment:

1. Confirm `node scripts/bump-version.js` ran during predeploy.
2. Confirm generated docs pages include `version-check.js`.
3. Confirm docs HTML and JSON are not cached too aggressively in `firebase.json`.
4. Rebuild docs:

```bash
npm run docs:build
```

5. Refresh sitemap and audit:

```bash
npm run seo:sitemap
npm run seo:audit
```

The update button should refresh the current docs page and load the newest generated files.

## Removing a Docs Page

1. Delete the Markdown file from `docs/content/`.
2. Remove its Firebase rewrite from `firebase.json`.
3. Remove links to it from other docs pages.
4. Run:

```bash
npm run docs:build
npm run seo:sitemap
npm run seo:audit
```

5. Confirm it no longer appears in `public/docs/manifest.json`.

## Status Values

Use these status labels:

| Status | Meaning |
| --- | --- |
| `Published` | Public and current |
| `Draft` | Not ready for indexing |
| `Deprecated` | Kept for reference but no longer recommended |

Draft pages are generated with `noindex`.

## Writing Style

Write docs for practical use.

Good docs:

- Explain what the feature does.
- Explain when to use it.
- Show the workflow.
- Link to related docs.
- Use tables for reference data.
- Include examples where they reduce confusion.

Avoid:

- Marketing language.
- Unsupported claims.
- Duplicating the same explanation across many pages.
- Screenshots that do not show the feature being explained.

## Pull Request Checklist

Before opening a PR for docs changes:

- Markdown source is updated in `docs/content/`.
- Images are stored in `docs/assets/`.
- New docs routes are added to `firebase.json`.
- `npm run docs:build` passes.
- `npm run seo:sitemap` passes.
- `npm run seo:audit` passes.
- The generated docs output in `public/docs/` is included when required.
