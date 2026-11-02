module.exports = [
  {
    id: "mull",
    name: "Mull",
    alternative: "Google Chrome, Microsoft Edge, Brave, Mozilla Firefox, Opera",
    category: "Web & Internet",
    subcategory: "Browsers",
    license: "GPL-3.0",
    version: "132.0.2",
    fileSize: "85 MB",
    description: "Hardened privacy-oriented Android web browser built from Mozilla Gecko and Fennec.",
    fullDescription: "Mull is a privacy-focused, hardened web browser for Android developed by the Divested Mobile project. Built from Mozilla's Fennec codebase, Mull incorporates numerous security and privacy configurations ported from the renowned Arkenfox user.js project. It strips proprietary blobs, disables invasive telemetry and analytics, enables robust anti-fingerprinting protections by default, and enforces HTTPS-only mode to prevent tracking and surveillance across the web.",
    features: [
      "Hardened browser configuration using Arkenfox user.js privacy presets",
      "Removal of proprietary binaries, Google Play Services, and telemetry SDKs",
      "Comprehensive anti-fingerprinting and tracking protection mechanisms",
      "Support for Firefox Add-ons (uBlock Origin, Dark Reader, Bitwarden)",
      "Strict HTTPS-only mode and encrypted DNS resolution",
      "Isolated sandboxed browsing tabs and per-site permissions"
    ],
    uses: "Browse the modern web on Android with hardened security and zero behavioral tracking or advertising telemetry.",
    tags: ["browser", "privacy", "security", "firefox", "hardened", "android", "anti-tracking"],
    logoSource: "https://raw.githubusercontent.com/Divested-Mobile/Mull-Fenix/master/fastlane/metadata/android/en-US/images/icon.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/Divested-Mobile/Mull-Fenix/master/fastlane/metadata/android/en-US/images/phoneScreenshots/Mull.png"
    ],
    download: "https://f-droid.org/packages/us.spotco.fennec_dos/",
    source: "https://github.com/Divested-Mobile/Mull-Fenix",
    website: "https://divestos.org",
    docs: "https://divestos.org/pages/our_apps#mull",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/us.spotco.fennec_dos/" },
      { label: "GitHub Releases", command: "https://github.com/Divested-Mobile/Mull-Fenix/releases" }
    ],
    comparisonData: {
      columns: ["Mull", "Google Chrome"],
      rows: [
        { feature: "No advertising telemetry", values: [true, false] },
        { feature: "Supports extensions (uBlock Origin)", values: [true, false] },
        { feature: "Advanced anti-fingerprinting", values: [true, false] },
        { feature: "HTTPS-only enforcement", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nARM64, ARMv7, or x86_64 architecture\n150 MB free storage",
    maintainer: "organization",
    developer: "Divested Mobile",
    developerUrl: "https://github.com/Divested-Mobile",
    platforms: ["Android"]
  },
  {
    id: "fossify-gallery",
    name: "Fossify Gallery",
    alternative: "Google Photos, QuickPic, Samsung Gallery, Apple Photos",
    category: "Media",
    subcategory: "Image Editors",
    license: "GPL-3.0",
    version: "1.2.0",
    fileSize: "18 MB",
    description: "Highly customizable, offline photo and video gallery with powerful built-in editor.",
    fullDescription: "Fossify Gallery is an offline media viewer and photo organizer created as a community-driven continuation of Simple Gallery. It provides a lightweight, ad-free environment to browse pictures, play videos, and organize photo collections. The app includes a built-in image editor supporting cropping, rotation, filters, and annotations. It values user privacy with zero internet permissions, offering file security via PIN, pattern, or fingerprint protection.",
    features: [
      "Completely offline with zero internet access permission",
      "Integrated photo editor with cropping, rotation, resizing, and filters",
      "Recycle bin functionality for recovering accidentally deleted photos",
      "Vault protection with PIN, pattern, and fingerprint authentication",
      "Extensive format support: RAW, SVG, GIF, MP4, MKV, and panoramic images",
      "Highly customizable grid layouts, themes, and sorting options"
    ],
    uses: "Organize, view, and edit photos and home videos locally without cloud upload or telemetry tracking.",
    tags: ["gallery", "photo-viewer", "image-editor", "privacy", "android", "offline", "media"],
    logoSource: "https://raw.githubusercontent.com/FossifyOrg/Gallery/master/app/src/main/ic_launcher-playstore.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/FossifyOrg/Gallery/master/fastlane/metadata/android/en-US/images/phoneScreenshots/1_en-US.png",
      "https://raw.githubusercontent.com/FossifyOrg/Gallery/master/fastlane/metadata/android/en-US/images/phoneScreenshots/2_en-US.png"
    ],
    download: "https://github.com/FossifyOrg/Gallery/releases",
    source: "https://github.com/FossifyOrg/Gallery",
    website: "https://fossify.org",
    docs: "https://github.com/FossifyOrg/Gallery#readme",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/org.fossify.gallery/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=org.fossify.gallery" },
      { label: "GitHub Releases", command: "https://github.com/FossifyOrg/Gallery/releases" }
    ],
    comparisonData: {
      columns: ["Fossify Gallery", "Google Photos"],
      rows: [
        { feature: "No cloud account required", values: [true, false] },
        { feature: "No internet access permission", values: [true, false] },
        { feature: "PIN/biometric protected folders", values: [true, true] },
        { feature: "Built-in image editor", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 or higher\nStorage access permission for photos and videos",
    maintainer: "organization",
    developer: "Fossify",
    developerUrl: "https://github.com/FossifyOrg",
    platforms: ["Android"]
  },
  {
    id: "material-files",
    name: "Material Files",
    alternative: "Solid Explorer, MiXplorer, FX File Explorer, Files by Google",
    category: "System",
    subcategory: "File Managers",
    license: "GPL-3.0",
    version: "1.7.0",
    fileSize: "12 MB",
    description: "Modern, open-source Material Design file manager for Android with root and network storage support.",
    fullDescription: "Material Files is an open-source file manager for Android designed following Google Material Design guidelines. It combines clean aesthetics with advanced system administration capabilities. It supports managing local files, compressed archives (ZIP, TAR, 7Z, RAR), root file system access via libsu, Linux documents provider integration, and remote network storage connections over FTP, FTPS, SFTP, and SMB/Samba.",
    features: [
      "Strict compliance with Android Material Design specifications",
      "Archive inspection and extraction support (ZIP, TAR, 7Z, RAR, GZ)",
      "Root access explorer via top-tier root integration (libsu)",
      "Network storage connections via SMB, SFTP, FTP, and FTPS",
      "Built-in text editor with syntax highlighting",
      "Storage Access Framework (SAF) integration for external SD cards"
    ],
    uses: "Browse, copy, compress, and transfer files across internal Android storage, external SD cards, and LAN servers.",
    tags: ["file-manager", "material-design", "root", "sftp", "smb", "ftp", "android", "system"],
    logoSource: "https://raw.githubusercontent.com/zhanghai/MaterialFiles/master/app/src/main/res/mipmap-hdpi/launcher_icon.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/zhanghai/MaterialFiles/master/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png",
      "https://raw.githubusercontent.com/zhanghai/MaterialFiles/master/fastlane/metadata/android/en-US/images/phoneScreenshots/2.png"
    ],
    download: "https://github.com/zhanghai/MaterialFiles/releases",
    source: "https://github.com/zhanghai/MaterialFiles",
    website: "https://github.com/zhanghai/MaterialFiles",
    docs: "https://github.com/zhanghai/MaterialFiles#readme",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/me.zhanghai.android.files/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=me.zhanghai.android.files" },
      { label: "GitHub Releases", command: "https://github.com/zhanghai/MaterialFiles/releases" }
    ],
    comparisonData: {
      columns: ["Material Files", "Files by Google"],
      rows: [
        { feature: "Network storage (SMB/SFTP)", values: [true, false] },
        { feature: "Root filesystem access", values: [true, false] },
        { feature: "Archive creation (ZIP/7Z)", values: [true, false] },
        { feature: "Ad-free experience", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nRoot access optional for system root navigation",
    maintainer: "individual",
    developer: "Hai Zhang",
    developerUrl: "https://github.com/zhanghai",
    platforms: ["Android"]
  },
  {
    id: "amaze-file-manager",
    name: "Amaze File Manager",
    alternative: "ES File Explorer, Total Commander, X-plore, Files by Google",
    category: "System",
    subcategory: "File Managers",
    license: "GPL-3.0",
    version: "3.10.1",
    fileSize: "16 MB",
    description: "Lightweight and smooth Material Design file manager with cloud, SMB, and app management tools.",
    fullDescription: "Amaze File Manager is a free, open-source file explorer for Android engineered for speed, ease of use, and multi-tab efficiency. It features dual navigation panels, full root explorer access for rooted devices, an application manager to back up or uninstall APKs, AES encryption for sensitive files, and integrated FTP server functionality allowing wireless PC-to-phone file transfers.",
    features: [
      "Dual-tab navigation for simultaneous folder browsing",
      "Built-in FTP / FTPS server for effortless wireless PC file sharing",
      "Root explorer for advanced root user operations",
      "App manager to backup, open, or uninstall installed Android applications",
      "AES file encryption and decryption vault",
      "Multiple themes and customizable color accents"
    ],
    uses: "Manage phone directories, transfer files over Wi-Fi via FTP, extract archives, and backup installed apps.",
    tags: ["file-manager", "ftp-server", "root-explorer", "app-manager", "encryption", "android"],
    logoSource: "https://raw.githubusercontent.com/TeamAmaze/AmazeFileManager/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/TeamAmaze/AmazeFileManager/master/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png",
      "https://raw.githubusercontent.com/TeamAmaze/AmazeFileManager/master/fastlane/metadata/android/en-US/images/phoneScreenshots/2.png"
    ],
    download: "https://github.com/TeamAmaze/AmazeFileManager/releases",
    source: "https://github.com/TeamAmaze/AmazeFileManager",
    website: "https://github.com/TeamAmaze/AmazeFileManager",
    docs: "https://github.com/TeamAmaze/AmazeFileManager/wiki",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/com.amaze.filemanager/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=com.amaze.filemanager" },
      { label: "GitHub Releases", command: "https://github.com/TeamAmaze/AmazeFileManager/releases" }
    ],
    comparisonData: {
      columns: ["Amaze", "ES File Explorer"],
      rows: [
        { feature: "No adware or bloatware", values: [true, false] },
        { feature: "Built-in FTP server", values: [true, true] },
        { feature: "Root explorer capabilities", values: [true, true] },
        { feature: "AES file encryption", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 or newer\nLocal storage access permissions",
    maintainer: "organization",
    developer: "Team Amaze",
    developerUrl: "https://github.com/TeamAmaze",
    platforms: ["Android"]
  },
  {
    id: "obtainium",
    name: "Obtainium",
    alternative: "Google Play Store, Aurora Store, APKMirror, APKPure, Aptoide",
    category: "Utility",
    subcategory: "Developer Utilities",
    license: "GPL-3.0",
    version: "1.1.28",
    fileSize: "24 MB",
    description: "Get Android app updates directly from developer release pages like GitHub, GitLab, and websites.",
    fullDescription: "Obtainium allows Android users to install and update open-source applications directly from their original source repositories and release pages, bypassing intermediate app stores. Obtainium monitors developer releases on GitHub, GitLab, Codeberg, F-Droid, SourceForge, IzzyOnDroid, and custom HTML release pages. It notifies you when new APK releases are published, verifies package signatures, and automates APK downloads and installations.",
    features: [
      "Direct app tracking from GitHub, GitLab, Codeberg, and F-Droid releases",
      "Automatic background check for new software versions",
      "Package signature verification ensuring APK authenticity",
      "Custom regex release filtering and pre-release opt-in flags",
      "Batch export and import of followed applications list",
      "No account required with support for custom GitHub API tokens"
    ],
    uses: "Keep sideloaded open-source Android apps up-to-date directly from developer releases without middlemen.",
    tags: ["package-manager", "apk-updater", "github-releases", "f-droid", "android", "utility", "sideloading"],
    logoSource: "https://raw.githubusercontent.com/ImranR98/Obtainium/main/assets/graphics/icon_small.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/ImranR98/Obtainium/main/assets/screenshots/1.apps.png",
      "https://raw.githubusercontent.com/ImranR98/Obtainium/main/assets/screenshots/2.app.png"
    ],
    download: "https://github.com/ImranR98/Obtainium/releases",
    source: "https://github.com/ImranR98/Obtainium",
    website: "https://github.com/ImranR98/Obtainium",
    docs: "https://github.com/ImranR98/Obtainium/wiki",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/dev.imranr.obtainium/" },
      { label: "GitHub Releases", command: "https://github.com/ImranR98/Obtainium/releases" }
    ],
    comparisonData: {
      columns: ["Obtainium", "Google Play Store"],
      rows: [
        { feature: "Direct from developer repo", values: [true, false] },
        { feature: "No Google account required", values: [true, false] },
        { feature: "Package signature validation", values: [true, true] },
        { feature: "Zero developer store commissions", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nInstall unknown apps permission for APK installations\nInternet connection",
    maintainer: "individual",
    developer: "Imran R.",
    developerUrl: "https://github.com/ImranR98",
    platforms: ["Android"]
  },
  {
    id: "f-droid-basic",
    name: "F-Droid Basic",
    alternative: "Google Play Store, Aurora Store, APKPure, Uptodown",
    category: "Utility",
    subcategory: "Developer Utilities",
    license: "GPL-3.0",
    version: "1.21.0",
    fileSize: "8 MB",
    description: "Lightweight and minimalist F-Droid client focused on essential repository browsing and updates.",
    fullDescription: "F-Droid Basic is an official, lightweight variant of the standard F-Droid client designed for simplicity, reduced resource consumption, and rapid app discovery. F-Droid Basic removes background daemon services, automated scheduled syncs, and nearby Wi-Fi swap features in favor of on-demand catalogue updates. It provides clean access to the vast ecosystem of verified free and open-source Android software with cryptographically verified reproducible builds.",
    features: [
      "Ultra-lightweight footprint with zero background battery drain",
      "Access to official F-Droid repository and third-party custom repos",
      "Cryptographic signature verification on all downloaded APK packages",
      "Category browsing, search, and installed apps management",
      "Manual on-demand repository synchronization",
      "Completely tracker-free with zero telemetry"
    ],
    uses: "Install and update verified open-source Android software without running persistent background services.",
    tags: ["f-droid", "app-store", "package-manager", "open-source", "android", "repository"],
    logoSource: "https://gitlab.com/fdroid/fdroidclient/-/raw/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/ImranR98/Obtainium/main/assets/screenshots/1.apps.png"
    ],
    download: "https://f-droid.org/packages/org.fdroid.basic/",
    source: "https://gitlab.com/fdroid/fdroidclient",
    website: "https://f-droid.org",
    docs: "https://f-droid.org/docs/",
    youtube: "",
    installMethods: [
      { label: "Official F-Droid Website", command: "https://f-droid.org/packages/org.fdroid.basic/" },
      { label: "GitLab Releases", command: "https://gitlab.com/fdroid/fdroidclient/-/releases" }
    ],
    comparisonData: {
      columns: ["F-Droid Basic", "Google Play Store"],
      rows: [
        { feature: "100% Free and Open Source catalogue", values: [true, false] },
        { feature: "No user account needed", values: [true, false] },
        { feature: "Zero background telemetry", values: [true, false] },
        { feature: "Custom repository support", values: [true, false] },
        { feature: "Open Source client", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 or newer\nStorage permission for package downloads\nInstall unknown apps permission",
    maintainer: "organization",
    developer: "F-Droid Limited",
    developerUrl: "https://gitlab.com/fdroid",
    platforms: ["Android"]
  },
  {
    id: "k-9-mail",
    name: "K-9 Mail",
    alternative: "Gmail, Microsoft Outlook, Apple Mail, Spark, Edison Mail",
    category: "Web & Internet",
    subcategory: "Email Clients",
    license: "Apache-2.0",
    version: "6.804",
    fileSize: "28 MB",
    description: "Full-featured open-source Android email client supporting multiple IMAP/POP3 accounts and OpenPGP.",
    fullDescription: "K-9 Mail is an open-source email client for Android that has served as the gold standard for independent mobile messaging. Now officially joining Mozilla to become Thunderbird on Android, K-9 Mail supports multiple accounts, unified inboxes, IMAP IDLE push email notifications, POP3 mailboxes, message signatures, per-identity signatures, and seamless end-to-end PGP email encryption via OpenKeychain.",
    features: [
      "Multi-account management with unified inbox view",
      "IMAP push email support via IMAP IDLE for real-time delivery",
      "End-to-end email encryption using OpenPGP via OpenKeychain",
      "Rich text HTML and plain text email composing",
      "Configurable swipe actions and notification filters",
      "Full privacy focus with zero email data harvesting"
    ],
    uses: "Connect to standard email providers (Gmail, Outlook, Fastmail, self-hosted) with complete privacy and PGP encryption.",
    tags: ["email", "email-client", "imap", "pop3", "openpgp", "privacy", "thunderbird", "android"],
    logoSource: "https://raw.githubusercontent.com/thunderbird/thunderbird-android/main/app-metadata/com.fsck.k9/en-US/images/icon.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/thunderbird/thunderbird-android/main/app-metadata/com.fsck.k9/en-US/images/phoneScreenshots/1.png",
      "https://raw.githubusercontent.com/thunderbird/thunderbird-android/main/app-metadata/com.fsck.k9/en-US/images/phoneScreenshots/2.png",
      "https://raw.githubusercontent.com/thunderbird/thunderbird-android/main/app-metadata/com.fsck.k9/en-US/images/phoneScreenshots/3.png"
    ],
    download: "https://k9mail.app/download",
    source: "https://github.com/thunderbird/thunderbird-android",
    website: "https://k9mail.app",
    docs: "https://forum.k9mail.app/",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/com.fsck.k9/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=com.fsck.k9" },
      { label: "GitHub Releases", command: "https://github.com/thunderbird/thunderbird-android/releases" }
    ],
    comparisonData: {
      columns: ["K-9 Mail", "Gmail App"],
      rows: [
        { feature: "No corporate email scanning", values: [true, false] },
        { feature: "OpenPGP encryption support", values: [true, false] },
        { feature: "Unified multi-account inbox", values: [true, true] },
        { feature: "IMAP IDLE real-time push", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nIMAP, POP3, or WebDAV email server access",
    maintainer: "organization",
    developer: "MZLA Technologies / Thunderbird",
    developerUrl: "https://github.com/thunderbird",
    platforms: ["Android"]
  },
  {
    id: "fairemail",
    name: "FairEmail",
    alternative: "Gmail, Microsoft Outlook, BlueMail, Newton Mail, Spark",
    category: "Web & Internet",
    subcategory: "Email Clients",
    license: "GPL-3.0",
    version: "1.2223",
    fileSize: "32 MB",
    description: "Fully featured, privacy-oriented open-source email client for Android with tracker blocking.",
    fullDescription: "FairEmail is a privacy-first email app for Android designed to protect users against email tracking pixels, malicious phishing links, and unauthorized data leakage. It supports unlimited email accounts, unlimited email addresses, unified inboxes, IMAP IDLE push notifications, and bi-directional synchronization. FairEmail renders email messages with safe styling, neutralizes tracking web beacons, and includes built-in S/MIME and OpenPGP encryption.",
    features: [
      "Automatic detection and blocking of spy tracking pixels and beacons",
      "Rewriting of tracking confirmation links to prevent phishing",
      "Unlimited email accounts and email aliases in unified folders",
      "Low battery and low data usage with efficient IMAP push",
      "OpenPGP and S/MIME cryptographic signing and encryption",
      "Zero telemetry, advertising, or third-party cloud intermediaries"
    ],
    uses: "Read and write emails without exposing your IP address, location, or read receipts to marketing trackers.",
    tags: ["email", "privacy", "anti-tracking", "openpgp", "smime", "imap", "android"],
    logoSource: "https://raw.githubusercontent.com/M66B/FairEmail/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/M66B/FairEmail/master/metadata/en-US/images/phoneScreenshots/0_setup.png",
      "https://raw.githubusercontent.com/M66B/FairEmail/master/metadata/en-US/images/phoneScreenshots/1_main.png"
    ],
    download: "https://github.com/M66B/FairEmail/releases",
    source: "https://github.com/M66B/FairEmail",
    website: "https://email.faircode.eu",
    docs: "https://github.com/M66B/FairEmail/blob/master/FAQ.md",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/eu.faircode.email/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=eu.faircode.email" },
      { label: "GitHub Releases", command: "https://github.com/M66B/FairEmail/releases" }
    ],
    comparisonData: {
      columns: ["FairEmail", "Gmail App"],
      rows: [
        { feature: "Tracking pixel blocking", values: [true, false] },
        { feature: "No intermediate cloud servers", values: [true, false] },
        { feature: "OpenPGP and S/MIME support", values: [true, false] },
        { feature: "Unlimited email accounts", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nStandard IMAP / SMTP mail server",
    maintainer: "individual",
    developer: "Marcel Bokhorst",
    developerUrl: "https://github.com/M66B",
    platforms: ["Android"]
  },
  {
    id: "mastodon",
    name: "Mastodon",
    alternative: "X (Twitter), Threads, Bluesky, Facebook",
    category: "Social",
    subcategory: "Social Networks",
    license: "AGPL-3.0",
    version: "4.3.1",
    fileSize: "",
    description: "Decentralized, federated social networking platform powered by open web protocols.",
    fullDescription: "Mastodon is an open-source, decentralized social networking platform built on open web standards including the W3C ActivityPub protocol. Rather than being owned by a single corporation, Mastodon is a federation of thousands of independent servers operated by different individuals and organizations. Users on any server can follow, interact with, and discover users across the entire network seamlessly without algorithmic manipulation, targeted advertising, or corporate surveillance.",
    features: [
      "Decentralized federation via the open W3C ActivityPub protocol",
      "Chronological timeline feeds without algorithmic manipulation",
      "Comprehensive moderation tools for server administrators and users",
      "500-character posts with content warnings, polls, and media attachments",
      "No corporate advertisements, user profiling, or invasive surveillance",
      "Rich REST API with hundreds of third-party mobile and desktop clients"
    ],
    uses: "Publish microblogging updates and engage in public discourse in a federated network without proprietary lock-in.",
    tags: ["fediverse", "activitypub", "social-network", "microblogging", "decentralized", "privacy"],
    logoSource: "https://raw.githubusercontent.com/mastodon/mastodon/main/.storybook/static/logo.svg",
    screenshotSources: [
      "https://raw.githubusercontent.com/mastodon/mastodon-android/master/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png",
      "https://raw.githubusercontent.com/mastodon/mastodon-android/master/fastlane/metadata/android/en-US/images/phoneScreenshots/2.png"
    ],
    download: "https://joinmastodon.org/apps",
    source: "https://github.com/mastodon/mastodon",
    website: "https://joinmastodon.org",
    docs: "https://docs.joinmastodon.org/",
    youtube: "",
    installMethods: [
      { label: "Web Application", command: "https://joinmastodon.org" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=org.joinmastodon.android" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/org.joinmastodon.android/" },
      { label: "iOS (App Store)", command: "https://apps.apple.com/app/mastodon-for-iphone-and-ipad/id1571998974" },
      { label: "Docker Server", command: "docker run -d --name mastodon ghcr.io/mastodon/mastodon" }
    ],
    comparisonData: {
      columns: ["Mastodon", "X (Twitter)"],
      rows: [
        { feature: "Decentralized federation", values: [true, false] },
        { feature: "Chronological timelines", values: [true, false] },
        { feature: "No surveillance advertising", values: [true, false] },
        { feature: "Self-hostable servers", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern web browser on desktop or mobile\nMobile app: Android 6.0+ or iOS 14.0+\nServer hosting: Linux with Ruby, Node.js, and PostgreSQL",
    maintainer: "organization",
    developer: "Mastodon gGmbH",
    developerUrl: "https://github.com/mastodon",
    platforms: ["Web", "Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "element",
    name: "Element",
    alternative: "Slack, Microsoft Teams, Discord, WhatsApp, Telegram",
    category: "Communication",
    subcategory: "Messaging",
    license: "Apache-2.0",
    version: "1.11.83",
    fileSize: "95 MB",
    description: "Secure, end-to-end encrypted collaboration and messaging client built on the decentralized Matrix protocol.",
    fullDescription: "Element is a flagship collaboration client powered by the decentralized Matrix communication protocol. Element enables secure real-time messaging, audio/video conferencing, file sharing, and bridge integrations across organizations and public communities. All direct chats and private rooms are secured with end-to-end encryption using the Olm and Megolm cryptographic ratchets. Element gives organizations and individuals complete data ownership by connecting to public or self-hosted homeservers.",
    features: [
      "End-to-end encryption (E2EE) powered by Olm and Megolm cryptographic ratchets",
      "Decentralized communication across the federated Matrix ecosystem",
      "High-definition voice and video calls powered by WebRTC and LiveKit",
      "Cross-signing key verification ensuring identity verification",
      "Bridges to IRC, Slack, Discord, and Telegram networks",
      "Rich collaborative spaces, threads, voice messages, and file sharing"
    ],
    uses: "Chat, call, and collaborate securely with friends, teams, or enterprise colleagues without proprietary data silos.",
    tags: ["matrix", "chat", "messaging", "e2ee", "encryption", "collaboration", "decentralized"],
    logoSource: "https://raw.githubusercontent.com/element-hq/element-desktop/develop/build/icon.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/element-hq/element-android/develop/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png",
      "https://raw.githubusercontent.com/element-hq/element-android/develop/fastlane/metadata/android/en-US/images/phoneScreenshots/2.png"
    ],
    download: "https://element.io/download",
    source: "https://github.com/element-hq/element-web",
    website: "https://element.io",
    docs: "https://element.io/help",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub im.vector.app" },
      { label: "Windows (winget)", command: "winget install Element.Element" },
      { label: "macOS (brew)", command: "brew install --cask element" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/im.vector.app/" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=im.vector.app" },
      { label: "iOS (App Store)", command: "https://apps.apple.com/app/element-messenger/id1083446067" },
      { label: "Web App", command: "https://app.element.io" }
    ],
    comparisonData: {
      columns: ["Element", "Slack"],
      rows: [
        { feature: "Default End-to-end encryption", values: [true, false] },
        { feature: "Decentralized federation", values: [true, false] },
        { feature: "Self-hostable homeservers", values: [true, false] },
        { feature: "Unlimited message history", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern web browser, Windows 10+, macOS 11+, Linux desktop, Android 7.0+, or iOS 14.0+",
    maintainer: "organization",
    developer: "Element / New Vector Ltd",
    developerUrl: "https://github.com/element-hq",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS", "Web"]
  }
];
