# Contributing to OpenLib

Thanks for helping improve OpenLib. This project is a Firebase-backed, framework-free JavaScript app, so small and well-tested changes are usually easiest to review.

## Ways to Help

- Submit missing open-source apps through the live site.
- Improve app metadata, descriptions, categories, tags, links, screenshots, and alternatives.
- Fix bugs in the public app, docs, moderation tools, SEO routes, or Firebase workflows.
- Improve documentation in `docs/content/`.
- Review existing entries for accuracy, safety, and source quality.
- Report vulnerabilities privately through [SECURITY.md](SECURITY.md).

## Before You Start

- Check whether a similar issue, pull request, or app submission already exists.
- Keep each pull request focused on one theme.
- Preserve public URLs unless the change intentionally migrates them and updates rewrites, sitemap, SEO metadata, and service worker behavior.
- Read [docs/README.md](docs/README.md) before editing docs pages.
- Use verifiable upstream sources for app metadata, license changes, platform support, and ownership claims.

## Quick Start

1. Fork the repository.
2. Create a branch: `git checkout -b my-change`.
3. Copy local config: `cp config/firebase-config.template.js public/firebase-config.js`.
4. Edit `public/firebase-config.js` with values from your local Firebase project.
5. Make your change.
6. Test locally with a static server or Firebase emulators.
7. Run the checks that match your change.
8. Open a pull request with a clear summary and test notes.

For a quick static preview:

```bash
python3 -m http.server 5174 --directory public
```

For Firebase-backed flows:

```bash
firebase emulators:start
```

If you are changing Cloud Functions, install their dependencies first:

```bash
cd functions
npm ci
cd ..
firebase emulators:start
```

## Repository Map

```text
public/index.html          SPA shell and static metadata
public/script.js           Routes, rendering, modals, auth UI, and client workflows
public/firebase-db.js      Firestore data access and app/user/team helpers
public/styles.css          Global styles and responsive layout
public/service-worker.js   PWA cache and update behavior
public/assets/             Icons, PWA images, fonts, and other hosted assets
docs/content/              Markdown source for user documentation
docs/assets/               Source images and attachments for documentation
docs/README.md             Docs authoring and maintenance guide
functions/index.js         Cloud Functions, prerendering, reputation, and automation
firebase/                  Firestore indexes, Firestore rules, and Storage rules
scripts/                   Sitemap, SEO audit, version stamping, and Search Console tools
config/                    Local Firebase config template
```

## Development Conventions

- Keep the frontend framework-free. There is no build step for the hosted SPA.
- Add routes in `handleRoute()` and navigate with `navigateTo(path)`.
- Keep view rendering consistent with the existing `show*()` functions.
- Put Firestore operations in `public/firebase-db.js`.
- Escape user-controlled content with `esc()` before inserting it into HTML.
- Check privileged UI actions in the client and enforce them again in Firestore rules, Storage rules, or trusted Functions.
- Use existing CSS variables and component patterns before adding new visual primitives.
- Keep generated files in sync with their source workflow.
- Keep changes scoped; avoid unrelated formatting or broad rewrites in the same pull request.

## Documentation Contributions

User documentation is available at [https://www.openlib.online/docs/](https://www.openlib.online/docs/).

Docs source lives in `docs/content/`, not `public/docs/`. Before adding, editing, renaming, fixing, or removing documentation pages, read [docs/README.md](docs/README.md).

For docs changes:

1. Edit Markdown in `docs/content/`.
2. Put screenshots or docs media in `docs/assets/`.
3. Add a clean docs route in `firebase.json` when creating a new page.
4. Rebuild generated docs:

```bash
npm run docs:build
```

5. Refresh sitemap and run the audit:

```bash
npm run seo:sitemap
npm run seo:audit
```

Do not hand-edit generated files in `public/docs/` unless you are debugging the generator.

## App and Content Standards

- Keep descriptions factual, concise, and useful for comparison.
- Prefer official project sources for source code, license, install instructions, platforms, screenshots, and deprecation status.
- Avoid unsupported claims about security, privacy, performance, or popularity.
- Identify conflicts of interest when submitting or reviewing your own project.
- Do not add spam, affiliate links, misleading names, copied private content, or closed-source projects presented as open source.
- Use reports instead of public arguments when an entry appears unsafe, malicious, or misleading.

## Security-Sensitive Changes

Changes that affect auth, roles, user content, uploads, moderation, ownership claims, reports, Cloud Functions, Firestore rules, Storage rules, or generated docs rendering need extra care.

For these changes:

- Explain the permission model in the pull request.
- Test signed-out, ordinary user, contributor, maintainer, team, and admin paths where relevant.
- Include allow and deny cases for rules changes.
- Make sure client checks are backed by rules or trusted Functions.
- Do not commit secrets, service account keys, private tokens, production credentials, emulator exports with real user data, or local `public/firebase-config.js`.

Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).

## Testing Checklist

Before opening a pull request, include the checks that match your change:

- Static UI change: preview `public/` and test desktop/mobile layout.
- Data or auth change: run Firebase emulators and test signed-out, signed-in, and role-specific flows.
- Rules change: test the relevant Firestore or Storage allow/deny cases.
- Route or SEO change: run `npm run seo:audit`.
- Documentation change: run `npm run docs:build`, `npm run seo:sitemap`, and `npm run seo:audit`.
- Function change: test with the Functions emulator where practical.
- Service worker change: verify reload/update behavior in a clean browser profile.
- Dependency change: explain why the dependency is needed and confirm the affected workflow still works.

## App Submissions Without Code

You do not need a pull request to suggest a new app. Use the submit app flow on the live site and the OpenLib team will review it.

## Pull Request Guidelines

- Explain what changed and why.
- Include screenshots or screen recordings for visible UI changes.
- Mention any Firebase rules, indexes, functions, or deploy behavior touched by the change.
- Call out migrations, permission changes, or security-sensitive behavior.
- Keep generated files updated when the source workflow requires it.
- Keep the pull request focused enough that reviewers can understand the risk.
- Include test notes, even when the note is "not run" with a reason.
