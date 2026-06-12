# Contributing to OpenLib

Thanks for helping improve OpenLib. This project is a Firebase-backed vanilla JavaScript app, so small, focused changes are usually easiest to review.

## Quick Start

1. Fork the repository.
2. Create a branch: `git checkout -b my-change`.
3. Copy local config: `cp config/firebase-config.template.js public/firebase-config.js`.
4. Make your change.
5. Test locally with the Firebase emulator or a static server pointed at `public/`.
6. Run `npm run seo:audit` when touching routes, metadata, sitemap, robots, hosting config, or public assets.
7. Open a pull request with a clear summary and test notes.

## Repository Map

```text
public/index.html          SPA shell and static metadata
public/script.js           Routes, rendering, modals, auth UI, and client workflows
public/firebase-db.js      Firestore data access and app/user/team helpers
public/styles.css          Global styles and responsive layout
public/service-worker.js   PWA cache and update behavior
public/assets/             Icons, PWA images, fonts, and other hosted assets
functions/index.js         Cloud Functions, prerendering, reputation, and automation
firebase/                  Firestore indexes, Firestore rules, and Storage rules
scripts/                   Sitemap, SEO audit, version stamping, and Search Console tools
config/                    Local Firebase config template
```

## Development Conventions

- Keep the frontend framework-free. There is no build step for the hosted SPA.
- Preserve public URLs unless the change intentionally migrates them and updates SEO, sitemap, service worker, and Firebase rewrite behavior.
- Add routes in `handleRoute()` and navigate with `navigateTo(path)`.
- Keep view rendering consistent with the existing `show*()` functions.
- Put Firestore operations in `public/firebase-db.js`.
- Escape user-controlled content with `esc()` before inserting it into HTML.
- Check privileged UI actions in the client and enforce them again in Firestore or Storage rules.
- Use existing CSS variables and component patterns before adding new visual primitives.
- Keep changes scoped; avoid unrelated formatting or large rewrites in the same pull request.

## Testing Checklist

Before opening a pull request, include the checks that match your change:

- Static UI change: preview `public/` and test desktop/mobile layout.
- Data or auth change: run Firebase emulators and test signed-out, signed-in, and role-specific flows.
- Rules change: test the relevant Firestore or Storage allow/deny cases.
- Route or SEO change: run `npm run seo:audit`.
- Function change: test with the Functions emulator where practical.
- Service worker change: verify reload/update behavior in a clean browser profile.

## App Submissions Without Code

You do not need a pull request to suggest a new app. Use the submit app flow on the live site and the OpenLib team will review it.

## Pull Request Guidelines

- Explain what changed and why.
- Include screenshots or screen recordings for visible UI changes.
- Mention any Firebase rules, indexes, functions, or deploy behavior touched by the change.
- Call out migrations, permission changes, or security-sensitive behavior.
- Keep generated files updated when the source workflow requires it.

## Security Expectations

- Do not commit secrets, service account keys, private tokens, or production credentials.
- Use `config/firebase-config.template.js` for local setup and keep local config out of commits.
- Treat client input as untrusted.
- Enforce permissions in Firebase rules or trusted Functions, not only in UI code.
- Report vulnerabilities privately according to [SECURITY.md](SECURITY.md).
