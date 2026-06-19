---
title: Categories & Tags
description: Learn how OpenLib categories and tags organize app discovery.
maintainedBy: OpenLib Team
contributors:
  - OpenLib Team
lastUpdated: 2026-06-19
version: "1.0"
tags:
  - taxonomy
  - categories
status: Published
category: Docs
order: 40
---

# Categories & Tags

Categories and tags help people find software by job, platform, and workflow.

![Category and tag pills on a Joplin app page](/docs/assets/categories-tags-app-example.png)

## How discovery works

OpenLib discovery combines broad categories with flexible tags. Categories answer "what kind of app is this?" Tags answer "what details help someone find it?"

For example, a note-taking app might use:

- Category: Productivity
- Tags: markdown, notes, sync, offline, self-hosted

This lets visitors browse the Productivity category while still finding specific features through search and tag pages.

## Categories

Use one primary category for each app. The category should describe the broad area of software.

Use an optional subcategory when a more specific type helps discovery. Leave subcategory blank when none of the listed options fit.

Core categories:

- Communication
- Finance
- Media
- Productivity
- Security
- Utility

Additional primary categories and subcategories:

| Primary category | Subcategories |
| --- | --- |
| Development | IDEs, Code Editors, Git Clients, API Tools, DevOps |
| Graphics & Design | Image Editors, Vector Graphics, 3D Modeling, Animation, Photography |
| Education | Learning, Science, Mathematics, Research |
| Games | Game Launchers, Emulators, Game Development |
| System | File Managers, Backup Tools, System Monitoring, Virtualization |
| Network | VPN, DNS Tools, Firewalls, Network Analysis |
| Privacy | Ad Blockers, Tracker Blockers, Encryption, Password Managers |
| Office | Document Editors, Spreadsheets, Presentation Tools, PDF Tools |
| Audio | Music Players, DAWs, Podcast Apps, Audio Editors |
| Video | Video Players, Video Editors, Streaming Tools, Screen Recording |
| Web & Internet | Browsers, Email Clients, RSS Readers, Download Managers |
| Social | Social Networks, Messaging, Forums |
| Books & Reading | Ebook Readers, Manga Readers, Comics, News Readers |
| Entertainment | Anime, Movies, TV Shows, Streaming |
| AI & Machine Learning | AI Chat, Local LLMs, Image Generation, AI Assistants |
| Maps & Travel | Navigation, Public Transport, Travel Planning |
| Health & Fitness | Workout, Nutrition, Medical |
| Business | CRM, ERP, Accounting, Project Management |
| Accessibility | Screen Readers, Accessibility Tools |
| Platforms | Android, Linux, Windows, macOS, Cross-Platform |
| Other | Use when no primary category fits |

## How to choose a category

Ask what the user would primarily use the app for. If the app does many things, choose the main workflow rather than every possible use.

| App behavior | Category approach |
| --- | --- |
| One clear purpose | Use that purpose |
| Many features, one main audience | Use the audience's main workflow |
| Developer tool with productivity features | Usually Development |
| Privacy feature inside another workflow | Use the workflow, add privacy tags |

## Tags

Tags add flexible context. They can describe features, platforms, protocols, or use cases.

```yaml
tags:
  - notes
  - markdown
  - sync
  - self-hosted
```

## Choosing between categories and tags

| Use | Category | Tag |
| --- | --- | --- |
| Main purpose | Yes | Sometimes |
| Secondary features | No | Yes |
| Platform details | No | Yes |
| Alternative product names | No | Yes |

## Naming conventions

- Use short, human-readable names.
- Prefer singular concepts when possible.
- Avoid duplicate tags with different casing.
- Avoid marketing phrases as tags.

## Tag examples

| Tag type | Examples |
| --- | --- |
| Feature | sync, encryption, markdown, collaboration |
| Platform | linux, android, web, self-hosted |
| Protocol | activitypub, matrix, webdav |
| Workflow | notes, backup, password-management |
| License or ecosystem | gpl, kde, gnome |

## How to clean up tags

When maintaining tags:

1. Merge spelling duplicates.
2. Prefer lowercase simple words.
3. Remove vague tags such as `best`, `awesome`, or `new`.
4. Keep tags useful for search.
5. Avoid adding too many tags to a single app.

## Internal links

Documentation should link to collection pages when helpful, such as [Linux software](/linux-software) or [privacy-focused software](/privacy-focused-software).
