# Security Policy

OpenLib handles community content, authentication state, Firestore data, Storage uploads, moderation actions, and role-based permissions. Please report security issues privately so they can be fixed before public disclosure.

## Supported Versions

Security fixes target the current `main` branch and the production deployment at [https://www.openlib.online/](https://www.openlib.online/).

## Report a Vulnerability

Do not open a public GitHub issue for a vulnerability.

Preferred reporting path:

- Open a private GitHub security advisory: [AHS-Mobile-Labs/OpenLib security advisories](https://github.com/AHS-Mobile-Labs/OpenLib/security/advisories/new)

If you cannot use GitHub advisories, contact the project maintainers privately through GitHub and include enough detail for triage.

## What to Include

Please include:

- A clear description of the issue.
- The affected area, such as `public/`, `functions/`, `firebase/`, authentication, Firestore rules, Storage rules, or moderation workflows.
- Reproduction steps or a proof of concept.
- Expected impact and affected user roles.
- Any logs, screenshots, request payloads, or test data that help confirm the issue.
- Suggested fixes, if you have them.

## Response Timeline

| Step | Target |
| --- | --- |
| Acknowledgement | Within 48 hours |
| Initial triage | Within 5 days |
| Fix, mitigation, or status update | Within 14 days |
| Public disclosure | After a fix or mitigation is available |

If a report is accepted, credit will be given unless you ask to remain anonymous.

## In Scope

- Firestore or Storage rule bypasses.
- Authentication or authorization bypasses.
- Privilege escalation between `user`, `contributor`, `maintainer`, `openlib-team`, or `admin`.
- Cross-site scripting through app submissions, reviews, profiles, organizations, reports, or other user content.
- Unauthorized access to private user, moderation, team, or submission data.
- Unsafe Cloud Function behavior, including prerender data exposure.
- File upload behavior that could expose data or allow malicious content to execute.

## Out of Scope

- Issues in Firebase, Google, GitHub OAuth, browsers, or other third-party services unless OpenLib configuration makes them exploitable.
- Social engineering, phishing, or physical attacks.
- Self-XSS that cannot affect another user.
- Denial of service against public read-only pages without a practical data or permission impact.
- Reports based only on public Firebase web config values.
- Automated scanning that creates spam, changes production data, or disrupts users.

## Testing Rules

- Test against your own Firebase project whenever possible.
- Do not access, modify, delete, or exfiltrate data that does not belong to you.
- Do not create persistent backdoors, public proof-of-concept exploits, spam submissions, or abusive accounts.
- Do not run destructive tests against production without prior written permission.
- Stop testing and report promptly if you encounter private data.

## Security Guidance for Contributors

- Keep secrets, private keys, service account files, and tokens out of the repository.
- Use `config/firebase-config.template.js` to create `public/firebase-config.js` for local development.
- Sanitize and escape user-controlled content before rendering it.
- Enforce authorization in Firestore rules, Storage rules, or trusted Functions.
- Review changes to `public/script.js`, `public/firebase-db.js`, `functions/index.js`, and `firebase/` with extra care.
- Run relevant emulator tests before changing rules, roles, submissions, reports, or moderation flows.

## License

OpenLib is distributed under the [Mozilla Public License 2.0](LICENSE).
