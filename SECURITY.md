# OpenLib Security Policy

OpenLib handles community content, authentication state, Firestore data, Storage uploads, moderation actions, Cloud Functions, and role-based permissions. Please report security issues privately so maintainers can investigate and fix them before public disclosure.

## Supported Targets

Security fixes target:

- The current `main` branch.
- The production deployment at [https://www.openlib.online/](https://www.openlib.online/).
- Firebase rules, Cloud Functions, public client code, generated docs, and hosting configuration used by the production site.

Older forks, private deployments, and local modifications are not directly supported unless the issue also affects `main` or the production configuration.

## Report a Vulnerability

Do not open a public GitHub issue, discussion, pull request, or proof of concept for a vulnerability.

Preferred reporting path:

- Open a private GitHub security advisory: [AHS-Mobile-Labs/OpenLib security advisories](https://github.com/AHS-Mobile-Labs/OpenLib/security/advisories/new)

If you cannot use GitHub advisories, contact the project maintainers privately through GitHub and include enough detail for triage. Avoid posting exploit details in public comments, commit messages, screenshots, or issue titles.

## What to Include

Please include:

- A clear summary of the issue and expected impact.
- The affected area, such as `public/`, `functions/`, `firebase/`, authentication, Firestore rules, Storage rules, uploads, docs, or moderation workflows.
- Affected URL, route, API path, collection, rule, role, or workflow when known.
- Reproduction steps, proof of concept, request payloads, screenshots, or logs.
- The auth state and role used during testing, such as signed-out, `user`, `contributor`, `maintainer`, `openlib-team`, or `admin`.
- Whether the issue affects production, local emulators, or both.
- Any suggested fixes or mitigations.

Please remove unrelated personal data, access tokens, cookies, service account material, and private user content from the report.

## Response Timeline

| Step | Target |
| --- | --- |
| Acknowledgement | Within 48 hours |
| Initial triage | Within 5 days |
| Fix, mitigation, or status update | Within 14 days |
| Public disclosure | After a fix or mitigation is available |

Complex issues may take longer, but maintainers will try to share status updates while the report is being handled. If a report is accepted, credit will be given unless you ask to remain anonymous.

## In Scope

- Firestore or Storage rule bypasses.
- Authentication or authorization bypasses.
- Privilege escalation between `user`, `contributor`, `maintainer`, `openlib-team`, or `admin`.
- Cross-site scripting or HTML injection through app submissions, reviews, profiles, organizations, reports, docs, or other user content.
- Unauthorized access to private user, moderation, team, or submission data.
- Unsafe Cloud Function behavior, including prerender data exposure.
- File upload behavior that could expose data or allow malicious content to execute.
- Broken ownership claim, edit request, report handling, or moderation approval flows.
- Security-sensitive misconfiguration in Firebase Hosting, Firestore, Storage, Functions, or OAuth setup.

## Out of Scope

- Issues in Firebase, Google, GitHub OAuth, browsers, or other third-party services unless OpenLib configuration makes them exploitable.
- Social engineering, phishing, or physical attacks.
- Self-XSS that cannot affect another user.
- Denial of service against public read-only pages without a practical data or permission impact.
- Reports based only on public Firebase web config values.
- Missing best-practice headers or dependency version reports without a demonstrated OpenLib impact.
- Username, profile, review, or submission spam that does not bypass a security control.
- Automated scanning that creates spam, changes production data, or disrupts users.

## Good-Faith Testing Rules

- Test against your own Firebase project whenever possible.
- Do not access, modify, delete, or exfiltrate data that does not belong to you.
- Do not create persistent backdoors, public proof-of-concept exploits, spam submissions, or abusive accounts.
- Do not run destructive tests against production without prior written permission.
- Stop testing and report promptly if you encounter private data.
- Keep automated testing low-volume and targeted.
- Do not attempt to bypass rate limits, payment systems, hosting quotas, or third-party service limits.

There is no public bug bounty program at this time. Reports are welcomed for coordinated disclosure, remediation, and credit.

## Security Guidance for Contributors

- Keep secrets, private keys, service account files, and tokens out of the repository.
- Use `config/firebase-config.template.js` to create `public/firebase-config.js` for local development.
- Treat Firebase web config values as public identifiers, not secrets.
- Sanitize and escape user-controlled content before rendering it.
- Enforce authorization in Firestore rules, Storage rules, or trusted Functions.
- Review changes to `public/script.js`, `public/firebase-db.js`, `functions/index.js`, `firebase/`, docs rendering, upload handling, and role logic with extra care.
- Run relevant emulator tests before changing rules, roles, submissions, reports, or moderation flows.
- Document security-sensitive behavior changes in the pull request.

## License

OpenLib is distributed under the [Mozilla Public License 2.0](LICENSE).
