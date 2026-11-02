module.exports = [
  {
    id: "gnu-icecat",
    name: "GNU IceCat",
    alternative: "Mozilla Firefox, Google Chrome, Brave, Chromium, Librewolf",
    category: "Web & Internet",
    subcategory: "Browsers",
    license: "MPL-2.0",
    version: "115.18.0",
    fileSize: "70 MB",
    description: "Fully free GNU version of the Mozilla Firefox browser, stripped of proprietary extensions and telemetry.",
    fullDescription: "GNU IceCat (formerly GNU IceWeasel) is the GNU project's fully free-software edition of the Mozilla Firefox web browser. Built on the Firefox Extended Support Release (ESR) codebase, IceCat completely eliminates all non-free artwork, unfree plugin recommendations, and third-party telemetry collectors. It incorporates advanced privacy-enhancing counter-measures, including privacy protection extensions, LibreJS (which blocks non-free and non-trivial JavaScript), and automatic fingerprinting countermeasures against canvas and font tracking.",
    features: [
      "100% Free Software verified by the Free Software Foundation with zero proprietary blobs",
      "LibreJS integration blocking non-free, obfuscated, and non-trivial JavaScript from executing silently",
      "Built-in countermeasures defending against browser fingerprinting via canvas, audio, and font enumeration",
      "Spyware removal eliminating all Mozilla telemetry, crash reporters, and sponsored shortcuts",
      "Enhanced privacy defaults rejecting third-party tracking cookies and enforcing HTTPS encryption",
      "Full compatibility with modern web standards and free-software browser extensions"
    ],
    uses: "Browse the web with strict software freedom guarantees, block proprietary web scripts, and prevent browser fingerprinting.",
    tags: ["browser", "web-browser", "gnu", "privacy", "free-software", "librejs", "anti-fingerprinting", "web"],
    logoSource: "https://raw.githubusercontent.com/tmiland/GNU-IceCat/master/img/icecat.png",
    screenshotSources: [],
    download: "https://ftp.gnu.org/gnu/gnuzilla/",
    source: "https://git.savannah.gnu.org/cgit/gnuzilla.git",
    website: "https://www.gnu.org/software/gnuzilla/",
    docs: "https://www.gnu.org/software/gnuzilla/manual/",
    youtube: "",
    installMethods: [
      { label: "Arch Linux (AUR)", command: "yay -S icecat-bin" },
      { label: "GNU Guix", command: "guix install icecat" },
      { label: "GNU FTP Download", command: "https://ftp.gnu.org/gnu/gnuzilla/" }
    ],
    comparisonData: {
      columns: ["GNU IceCat", "Mozilla Firefox"],
      rows: [
        { feature: "Strict FSF Free Software evaluation and certification", values: [true, false] },
        { feature: "Built-in LibreJS protection against proprietary JS", values: [true, false] },
        { feature: "Completely zero Mozilla telemetry or sponsored tiles", values: [true, false] },
        { feature: "Gecko rendering engine with modern CSS/HTML5 support", values: [true, true] },
        { feature: "Open Source (MPL/GPL)", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, macOS, Windows\n1 GHz 64-bit CPU\n2 GB RAM minimum\nInternet connection",
    maintainer: "organization",
    developer: "GNU Project & Free Software Foundation",
    developerUrl: "https://git.savannah.gnu.org/cgit/gnuzilla.git",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "gnome-web",
    name: "GNOME Web",
    alternative: "Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge",
    category: "Web & Internet",
    subcategory: "Browsers",
    license: "GPL-3.0-or-later",
    version: "47.0",
    fileSize: "45 MB",
    description: "Elegant, minimalist web browser for the GNOME desktop powered by the WebKitGTK rendering engine.",
    fullDescription: "GNOME Web (code-named Epiphany) is the official web browser of the GNOME desktop environment. Engineered with the philosophy that an interface should never distract from the web page, GNOME Web delivers a clean, responsive browsing experience built upon WebKitGTK—the same WebKit rendering engine that powers Apple Safari. It offers built-in ad and tracker blocking, seamless system dark mode adaptation, gesture navigation, and native support for turning websites into standalone Web Applications (PWAs).",
    features: [
      "WebKitGTK engine providing standards-compliant, energy-efficient web rendering identical to Safari",
      "Native Web App (PWA) creator turning web services into standalone desktop applications with application menus",
      "Integrated ad and tracker blocking powered by EasyList and EasyPrivacy filter subscriptions",
      "Seamless GNOME Shell aesthetic integration with native libadwaita widgets and dynamic accent coloring",
      "Hardware-accelerated rendering utilizing modern DMABUF, EGL, and Wayland graphic pipelines",
      "Strict process isolation and sandbox containment separating individual web views for security"
    ],
    uses: "Browse the modern web, isolate web apps into desktop windows, and enjoy energy-efficient browsing on laptops.",
    tags: ["browser", "gnome", "webkit", "webkitgtk", "libadwaita", "pwa", "wayland", "web"],
    logoSource: "https://raw.githubusercontent.com/GNOME/epiphany/master/data/icons/hicolor/scalable/apps/org.gnome.Epiphany.svg",
    screenshotSources: [],
    download: "https://wiki.gnome.org/Apps/Web",
    source: "https://gitlab.gnome.org/GNOME/epiphany",
    website: "https://wiki.gnome.org/Apps/Web",
    docs: "https://help.gnome.org/users/epiphany/stable/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.gnome.Epiphany" },
      { label: "Ubuntu / Debian", command: "sudo apt install epiphany-browser" },
      { label: "Fedora", command: "sudo dnf install epiphany" },
      { label: "Arch Linux", command: "sudo pacman -S epiphany" }
    ],
    comparisonData: {
      columns: ["GNOME Web", "Google Chrome"],
      rows: [
        { feature: "Native WebKit engine with low memory and power draw", values: [true, false] },
        { feature: "Flawless integration with GNOME desktop themes and Wayland", values: [true, false] },
        { feature: "Built-in ad blocker without Manifest V3 extension limits", values: [true, false] },
        { feature: "Zero Google telemetry or advertising identifiers", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux OS with Wayland or X11\nWebKitGTK compatible GPU (Intel/AMD/NVIDIA)\n1 GHz CPU, 2 GB RAM",
    maintainer: "community",
    developer: "GNOME Project Developers",
    developerUrl: "https://gitlab.gnome.org/GNOME/epiphany",
    platforms: ["Linux"]
  },
  {
    id: "falkon",
    name: "Falkon",
    alternative: "Google Chrome, Mozilla Firefox, Opera, Brave, Vivaldi",
    category: "Web & Internet",
    subcategory: "Browsers",
    license: "GPL-3.0-or-later",
    version: "24.12.0",
    fileSize: "35 MB",
    description: "Lightweight, fast QtWebEngine-based web browser seamlessly integrated with the KDE and Qt ecosystem.",
    fullDescription: "Falkon (formerly QupZilla) is an open-source web browser developed under the KDE project. Utilizing the Chromium-derived QtWebEngine, Falkon combines industry-leading web compatibility and JavaScript execution speeds with an ultra-lightweight resource footprint. Falkon integrates built-in ad blocking, tab management, mouse gestures, speed dial launch panels, and native desktop notification systems, making it an ideal choice for users seeking speed and low memory consumption.",
    features: [
      "QtWebEngine core delivering Chromium web standards rendering with lightweight memory usage",
      "Built-in AdBlock extension pre-configured with EasyList to block ads out of the box",
      "Native KDE Plasma styling integrating with Qt color schemes, icons, and desktop window borders",
      "Speed Dial customizable start page with interactive site thumbnails and category groups",
      "Configurable mouse gestures enabling fast navigation (back, forward, reload, close tab)",
      "Integrated cookie manager, password storage, and history search with privacy management"
    ],
    uses: "Fast web browsing on low-spec PCs, distraction-free research, and seamless integration with KDE Plasma desktop.",
    tags: ["browser", "kde", "qt", "qtwebengine", "lightweight-browser", "adblock", "web"],
    logoSource: "https://invent.kde.org/network/falkon/-/raw/master/src/lib/data/icons/falkon.svg",
    screenshotSources: [],
    download: "https://www.falkon.org/download/",
    source: "https://invent.kde.org/network/falkon",
    website: "https://www.falkon.org/",
    docs: "https://userbase.kde.org/Falkon",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.kde.falkon" },
      { label: "Ubuntu / Debian", command: "sudo apt install falkon" },
      { label: "Fedora", command: "sudo dnf install falkon" },
      { label: "Windows (winget)", command: "winget install KDE.Falkon" }
    ],
    comparisonData: {
      columns: ["Falkon", "Google Chrome"],
      rows: [
        { feature: "Low RAM consumption compared to standard Chromium", values: [true, false] },
        { feature: "Built-in ad blocker without needing third-party extensions", values: [true, false] },
        { feature: "Native Qt look and feel", values: [true, false] },
        { feature: "Zero corporate advertising analytics", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11\nQt 5 / Qt 6 runtime\n1 GHz CPU, 1 GB RAM",
    maintainer: "community",
    developer: "KDE Community & David Rosca",
    developerUrl: "https://invent.kde.org/network/falkon",
    platforms: ["Linux", "Windows"]
  },
  {
    id: "waterfox",
    name: "Waterfox",
    alternative: "Mozilla Firefox, Google Chrome, Brave, Vivaldi, Floorp",
    category: "Web & Internet",
    subcategory: "Browsers",
    license: "MPL-2.0",
    version: "6.5.4",
    fileSize: "75 MB",
    description: "Independent, privacy-conscious web browser balancing modern web performance with extensive customization.",
    fullDescription: "Waterfox is an independent, community-driven web browser built on the Mozilla Gecko engine, crafted to give power users maximum privacy and customization. Waterfox disables all telemetry, data collection, and sponsored top sites by default while supporting both modern Firefox WebExtensions and legacy add-on customization architectures. With native support for vertical tabs, custom CSS styling, private browsing with container isolation, and cross-platform syncing, Waterfox delivers an uncompromised power-user web experience.",
    features: [
      "Strict telemetry elimination disabling data collection, pingback metrics, and sponsored tiles",
      "Comprehensive extension compatibility supporting modern Firefox Add-ons and Chrome Web Store extensions",
      "Native vertical tabs and multi-account container support for organizing research sessions",
      "Advanced interface customizability allowing custom CSS styling through userChrome and userContent",
      "Independent browser engine free from big-tech ad network ownership or data harvesting motives",
      "Encrypted sync support compatible with standard Firefox Sync servers and self-hosted instances"
    ],
    uses: "Power-user multi-tab browsing, web development testing, segregated container browsing, and tracking-free internet usage.",
    tags: ["browser", "waterfox", "gecko", "privacy-browser", "customization", "vertical-tabs", "web"],
    logoSource: "https://raw.githubusercontent.com/BrowserWorks/waterfox/current/browser/branding/official/default128.png",
    screenshotSources: [],
    download: "https://www.waterfox.net/download/",
    source: "https://github.com/BrowserWorks/waterfox",
    website: "https://www.waterfox.net/",
    docs: "https://github.com/BrowserWorks/waterfox#readme",
    youtube: "",
    installMethods: [
      { label: "Linux (Tarball / AppImage)", command: "https://www.waterfox.net/download/" },
      { label: "Ubuntu / Debian (PPA)", command: "sudo add-apt-repository ppa:waterfox/waterfox-kpe && sudo apt install waterfox" },
      { label: "Windows (winget)", command: "winget install Waterfox.Waterfox" },
      { label: "macOS (brew)", command: "brew install --cask waterfox" }
    ],
    comparisonData: {
      columns: ["Waterfox", "Mozilla Firefox"],
      rows: [
        { feature: "Telemetry and data collection disabled by default", values: [true, false] },
        { feature: "Native vertical tabs built directly into core UI", values: [true, false] },
        { feature: "No sponsored tiles, pocket integration, or default ads", values: [true, false] },
        { feature: "Full compatibility with Firefox add-on catalog", values: [true, true] },
        { feature: "Open Source (MPL-2.0)", values: [true, true] }
      ]
    },
    systemRequirements: "Linux 64-bit, Windows 10/11 64-bit, macOS 10.15+\nMulti-core 64-bit CPU\n2 GB RAM minimum (4 GB recommended)",
    maintainer: "community",
    developer: "BrowserWorks & Alex Kontos",
    developerUrl: "https://github.com/BrowserWorks",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "ublock-origin",
    name: "uBlock Origin",
    alternative: "AdGuard, Adblock Plus, Ghostery, Brave Shields",
    category: "Privacy",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "1.61.2",
    fileSize: "5 MB",
    description: "Efficient wide-spectrum content blocker that blocks ads, trackers, coin miners, and malicious web domains.",
    fullDescription: "uBlock Origin (uBO) is a premier open-source, wide-spectrum content-blocking extension engineered by Raymond Hill (gorhill). Far more than a simple ad blocker, uBlock Origin is an efficient content filter that optimizes CPU and memory consumption while intercepting unwanted network connections before they execute. It ships with comprehensive default filter lists (EasyList, EasyPrivacy, Peter Lowe’s, Malware Domains) and provides power users with dynamic filtering rules, element zapper tools, and JavaScript execution toggles.",
    features: [
      "Ultra-efficient memory and CPU footprint with zero noticeable browser slowdowns",
      "Wide-spectrum blocking neutralizing banner ads, video commercials, telemetry, and crypto miners",
      "Interactive point-and-click Element Picker and Element Zapper to permanently remove annoying webpage elements",
      "Dynamic filtering rules allowing granular per-domain or global blocking of scripts, frames, and assets",
      "Comprehensive filter subscriptions: EasyList, EasyPrivacy, Fanboy Annoyances, and regional blocklists",
      "Zero 'Acceptable Ads' whitelist program—uBlock Origin does not accept money from advertisers"
    ],
    uses: "Eliminate intrusive advertisements, accelerate web browsing speeds, block behavioral tracking, and prevent malware infections.",
    tags: ["ad-blocker", "content-filter", "privacy", "anti-tracker", "extension", "security"],
    logoSource: "https://raw.githubusercontent.com/gorhill/uBlock/master/src/img/icon_128.png",
    screenshotSources: [],
    download: "https://ublockorigin.com/",
    source: "https://github.com/gorhill/uBlock",
    website: "https://ublockorigin.com/",
    docs: "https://github.com/gorhill/uBlock/wiki",
    youtube: "",
    installMethods: [
      { label: "Firefox Add-ons", command: "https://addons.mozilla.org/firefox/addon/ublock-origin/" },
      { label: "Chrome Web Store", command: "https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" },
      { label: "Edge Add-ons", command: "https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak" }
    ],
    comparisonData: {
      columns: ["uBlock Origin", "Adblock Plus"],
      rows: [
        { feature: "No paid 'Acceptable Ads' program allowing paid advertisements", values: [true, false] },
        { feature: "Significantly lower memory and CPU overhead", values: [true, false] },
        { feature: "Advanced dynamic script and iframe matrix filtering", values: [true, false] },
        { feature: "Strict community open-source stewardship", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, true] }
      ]
    },
    systemRequirements: "Any modern web browser (Firefox, Chromium, Brave, Edge, Opera, Safari)\nWebExtensions API support",
    maintainer: "individual",
    developer: "Raymond Hill (gorhill) & Contributors",
    developerUrl: "https://github.com/gorhill",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "privacy-badger",
    name: "Privacy Badger",
    alternative: "Ghostery, Disconnect, DuckDuckGo Privacy Essentials",
    category: "Privacy",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "2024.7.17",
    fileSize: "3 MB",
    description: "Intelligent tracker blocker developed by the EFF that learns to detect and block invisible third-party trackers.",
    fullDescription: "Privacy Badger is an open-source browser add-on created by the Electronic Frontier Foundation (EFF) that automatically detects and blocks third-party trackers that secretly monitor your activity across the internet. Unlike traditional filter lists that rely solely on static community-curated blocklists, Privacy Badger inspects third-party domains in real time: if an external domain appears to track you across multiple different websites without your consent, Privacy Badger automatically cuts off its ability to track your browsing.",
    features: [
      "Algorithmic tracker detection identifying covert trackers by behavior rather than static lists alone",
      "Global Privacy Control (GPC) and Do Not Track (DNT) signal transmission to visited websites",
      "Automatic replacement of invasive social media tracking widgets (Facebook/Twitter buttons) with click-to-activate placeholders",
      "Three-color slider controls giving users manual override permissions per individual tracking domain",
      "Zero profit motive, corporate partnerships, or sponsored tracking exceptions",
      "Protects against canvas fingerprinting and covert audio context device identification"
    ],
    uses: "Prevent marketing trackers from profiling your web browsing, replace tracking social buttons, and enforce GPC rights.",
    tags: ["tracker-blocker", "privacy", "eff", "anti-tracking", "fingerprinting", "security"],
    logoSource: "https://raw.githubusercontent.com/EFForg/privacybadger/master/src/icons/badger-128.png",
    screenshotSources: [],
    download: "https://privacybadger.org/",
    source: "https://github.com/EFForg/privacybadger",
    website: "https://privacybadger.org/",
    docs: "https://privacybadger.org/#faq",
    youtube: "",
    installMethods: [
      { label: "Firefox Add-ons", command: "https://addons.mozilla.org/firefox/addon/privacy-badger17/" },
      { label: "Chrome Web Store", command: "https://chromewebstore.google.com/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp" },
      { label: "Edge Add-ons", command: "https://microsoftedge.microsoft.com/addons/detail/privacy-badger/mkejgcglmpfnalbpenmdiendggeboplm" }
    ],
    comparisonData: {
      columns: ["Privacy Badger", "Ghostery"],
      rows: [
        { feature: "Created by non-profit digital rights champion EFF", values: [true, false] },
        { feature: "Replaces tracking social widgets with static click placeholders", values: [true, false] },
        { feature: "Sends automated Global Privacy Control (GPC) signals", values: [true, true] },
        { feature: "No advertising industry ownership or monetization", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, true] }
      ]
    },
    systemRequirements: "Modern web browser supporting WebExtensions (Firefox, Chrome, Edge, Chromium)",
    maintainer: "organization",
    developer: "Electronic Frontier Foundation (EFF)",
    developerUrl: "https://github.com/EFForg",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "noscript",
    name: "NoScript",
    alternative: "ScriptSafe, uMatrix, Brave Shields, JavaScript Toggle",
    category: "Security",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "12.1.2",
    fileSize: "4 MB",
    description: "Maximum browser security suite providing strict, granular whitelisting of JavaScript, Flash, and active content.",
    fullDescription: "NoScript Security Suite is a legendary open-source web security tool developed by Giorgio Maone. Bundled as a critical security component in the Tor Browser, NoScript provides proactive defense against zero-day browser exploits, Cross-Site Scripting (XSS), Cross-site Request Forgery (CSRF), clickjacking, and web-based execution vulnerabilities. By operating on a strict default-deny model, NoScript only executes JavaScript, audio/video media, and fonts from domains you explicitly trust.",
    features: [
      "Proactive default-deny security model blocking unauthorized script execution globally",
      "Granular per-site permissions: Temporarily Allow, Permanently Allow, or Untrusted per domain",
      "Anti-Clickjacking defense (ClearClick) preventing users from being tricked into clicking invisible malicious buttons",
      "Cross-Site Scripting (XSS) application firewall sanitizing malicious injected payload URLs",
      "Core security engine bundled in the official Tor Browser to defend investigative journalists and dissidents",
      "Comprehensive customization: configure script permissions down to individual CDNs and subdomains"
    ],
    uses: "Defend against zero-day browser exploits, stop drive-by malware downloads, eliminate clickjacking, and audit web scripts.",
    tags: ["security", "noscript", "xss-protection", "anti-clickjacking", "tor-browser", "privacy", "extension"],
    logoSource: "https://noscript.net/favicon.ico",
    screenshotSources: [],
    download: "https://noscript.net/",
    source: "https://github.com/hackademix/noscript",
    website: "https://noscript.net/",
    docs: "https://noscript.net/faq",
    youtube: "",
    installMethods: [
      { label: "Firefox Add-ons", command: "https://addons.mozilla.org/firefox/addon/noscript/" },
      { label: "Chrome Web Store", command: "https://chromewebstore.google.com/detail/noscript/doojmbjmlfjjnbmnoijecmcbfeoakpjm" },
      { label: "Official XPI Download", command: "https://noscript.net/getit" }
    ],
    comparisonData: {
      columns: ["NoScript", "Standard Browser"],
      rows: [
        { feature: "Proactive script blocking preventing zero-day exploits", values: [true, false] },
        { feature: "Patented ClearClick anti-clickjacking protection", values: [true, false] },
        { feature: "Trusted default component of the Tor Browser", values: [true, false] },
        { feature: "Temporary per-session authorization toggles", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern web browser supporting WebExtensions (Mozilla Firefox, Tor Browser, Google Chrome, Brave)",
    maintainer: "individual",
    developer: "Giorgio Maone (InformAction)",
    developerUrl: "https://github.com/hackademix",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "keepass",
    name: "KeePass",
    alternative: "1Password, LastPass, Bitwarden, Dashlane, RoboForm",
    category: "Privacy",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "2.57.1",
    fileSize: "12 MB",
    description: "Classic, battle-tested open-source password manager storing credentials in encrypted local vaults.",
    fullDescription: "KeePass Password Safe is an acclaimed, OSI-certified open-source password manager designed for individuals, system administrators, and security specialists who demand absolute control over their sensitive credentials. Unlike cloud-hosted subscription managers, KeePass stores all passwords, passkeys, notes, and digital certificates in a single local database file encrypted with AES-256, ChaCha20, or Twofish. It features auto-type obfuscation against keyloggers, secure password generators, and an extensive ecosystem of community plugins.",
    features: [
      "Local encrypted vault (.kdbx) protected by AES-256, ChaCha20, or Twofish cryptographic algorithms",
      "Multi-factor database authentication: Master Password, Key File, and Windows User Account pairing",
      "Two-Channel Auto-Type Obfuscation (TCATO) defeating hardware and software keyloggers",
      "Configurable password generator creating high-entropy passwords, passphrases, and custom patterns",
      "Extensive plugin architecture supporting cloud sync (Google Drive, Dropbox, WebDAV), OTP tokens, and SSH agents",
      "Zero recurring subscription fees, zero mandatory internet connection, and zero vendor lock-in"
    ],
    uses: "Securely store corporate credentials, generate complex unique passwords, auto-fill login forms, and manage 2FA seeds.",
    tags: ["password-manager", "encryption", "aes-256", "chacha20", "offline-security", "kdbx", "privacy"],
    logoSource: "https://keepass.info/favicon.ico",
    screenshotSources: [],
    download: "https://keepass.info/download.html",
    source: "https://sourceforge.net/projects/keepass/",
    website: "https://keepass.info/",
    docs: "https://keepass.info/help/base/index.html",
    youtube: "",
    installMethods: [
      { label: "Windows (winget)", command: "winget install DominikReichl.KeePass" },
      { label: "Ubuntu / Debian", command: "sudo apt install keepass2" },
      { label: "Fedora", command: "sudo dnf install keepass" },
      { label: "macOS (brew)", command: "brew install --cask keepassxc" }
    ],
    comparisonData: {
      columns: ["KeePass", "1Password / LastPass"],
      rows: [
        { feature: "100% Offline database under your direct physical control", values: [true, false] },
        { feature: "Zero monthly or annual recurring subscriptions", values: [true, false] },
        { feature: "No cloud server vulnerability or centralized data breaches", values: [true, false] },
        { feature: "Hardware and software keylogger obfuscation (TCATO)", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 7/8/10/11 (or Linux/macOS via Mono or KeePassXC)\n.NET Framework 4.0+ or Mono\n500 MHz CPU, 256 MB RAM",
    maintainer: "individual",
    developer: "Dominik Reichl",
    developerUrl: "https://keepass.info/",
    platforms: ["Windows", "Linux", "macOS"]
  },
  {
    id: "gnu-wget",
    name: "GNU Wget",
    alternative: "cURL, Internet Download Manager (IDM), aria2, JDownloader",
    category: "Web & Internet",
    subcategory: "Download Managers",
    license: "GPL-3.0-or-later",
    version: "1.25.0",
    fileSize: "10 MB",
    description: "Ubiquitous, non-interactive command-line tool for retrieving files using HTTP, HTTPS, and FTP protocols.",
    fullDescription: "GNU Wget is a fundamental free-software utility for non-interactive downloading of files from the web. Engineered for robustness over slow or unstable network connections, Wget automatically resumes interrupted downloads, traverses directory trees recursively, converts links for offline viewing, and supports HTTP, HTTPS, and FTP protocols. Because it runs non-interactively in the background, Wget is a cornerstone of automated web archiving, database backups, and scheduled system maintenance.",
    features: [
      "Non-interactive background execution operating seamlessly from shell scripts and cron jobs",
      "Resilient download recovery resuming broken file transfers using HTTP Range and FTP REST",
      "Recursive web scraping traversing links to create complete offline local website mirrors",
      "Comprehensive protocol support: HTTP/1.1, HTTP/2, HTTPS with TLS verification, FTP, and FTPS",
      "Bandwidth throttling controls limiting transfer rates to prevent network saturation",
      "Robust proxy, cookie, HTTP authentication, and custom HTTP header injection capabilities"
    ],
    uses: "Automate bulk dataset downloads, mirror complete websites for offline archival, and script reliable system backups.",
    tags: ["wget", "download-manager", "cli", "gnu", "web-scraping", "offline-mirror", "network", "web"],
    logoSource: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/gnu.svg",
    screenshotSources: [],
    download: "https://ftp.gnu.org/gnu/wget/",
    source: "https://git.savannah.gnu.org/cgit/wget.git",
    website: "https://www.gnu.org/software/wget/",
    docs: "https://www.gnu.org/software/wget/manual/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install wget" },
      { label: "Fedora", command: "sudo dnf install wget" },
      { label: "Arch Linux", command: "sudo pacman -S wget" },
      { label: "macOS (brew)", command: "brew install wget" },
      { label: "Windows (winget)", command: "winget install JernejSimoncic.Wget" }
    ],
    comparisonData: {
      columns: ["GNU Wget", "cURL"],
      rows: [
        { feature: "Built-in recursive page downloading and web mirroring", values: [true, false] },
        { feature: "Automatic download resumption out of the box", values: [true, false] },
        { feature: "Ubiquitous default installation across Linux distros", values: [true, true] },
        { feature: "Non-interactive batch script automation", values: [true, true] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, macOS, Windows, BSD\nAny POSIX-compliant environment\nMinimal CPU and RAM footprint (<10 MB RAM)",
    maintainer: "organization",
    developer: "GNU Project & Hrvoje Nikšić",
    developerUrl: "https://www.gnu.org/software/wget/",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"]
  },
  {
    id: "gnu-emacs",
    name: "GNU Emacs",
    alternative: "Sublime Text, VS Code, Atom, TextMate, JetBrains IDEs",
    category: "Development",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "29.4",
    fileSize: "110 MB",
    description: "Extensible, customizable, self-documenting real-time text editor and computing environment powered by Emacs Lisp.",
    fullDescription: "GNU Emacs is an extensible, customizable, and self-documenting display editor created by Richard Stallman and the GNU Project. At its core is an interpreter for Emacs Lisp (Elisp), a full programming language that enables users to extend, modify, and completely customize every aspect of the editor in real time. Beyond source-code editing with syntax highlighting for hundreds of languages, Emacs functions as a complete operating environment offering Org-mode (outlining, note-taking, and task planning), Magit (the world-renowned Git interface), Dired file manager, and mail reader.",
    features: [
      "Extensible Emacs Lisp (Elisp) core allowing complete runtime modification of all editor behaviors",
      "Org-mode: the revolutionary system for organizing notes, authoring documents, and managing tasks",
      "Magit integration providing the industry's most expressive and powerful Git interface",
      "Content-aware editing modes with syntax highlighting and indentation for virtually every language",
      "Self-documenting interactive help system with built-in tutorials, function inspect, and manuals",
      "Broad package ecosystem (MELPA/GNU ELPA) containing thousands of community extensions"
    ],
    uses: "Code in diverse languages, manage tasks and research with Org-mode, stage complex Git commits with Magit, and write documentation.",
    tags: ["editor", "text-editor", "gnu", "emacs", "elisp", "org-mode", "magit", "development"],
    logoSource: "https://raw.githubusercontent.com/emacs-mirror/emacs/master/etc/images/icons/hicolor/scalable/apps/emacs.svg",
    screenshotSources: [],
    download: "https://www.gnu.org/software/emacs/download.html",
    source: "https://git.savannah.gnu.org/cgit/emacs.git",
    website: "https://www.gnu.org/software/emacs/",
    docs: "https://www.gnu.org/software/emacs/documentation.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.gnu.emacs" },
      { label: "Ubuntu / Debian", command: "sudo apt install emacs" },
      { label: "Fedora", command: "sudo dnf install emacs" },
      { label: "Arch Linux", command: "sudo pacman -S emacs" },
      { label: "macOS (brew)", command: "brew install --cask emacs" },
      { label: "Windows (winget)", command: "winget install GNU.Emacs" }
    ],
    comparisonData: {
      columns: ["GNU Emacs", "VS Code"],
      rows: [
        { feature: "Fully programmable runtime environment in Lisp (Elisp)", values: [true, false] },
        { feature: "Legendary Org-mode and Magit Git interface", values: [true, false] },
        { feature: "Zero corporate telemetry or proprietary marketplace restrictions", values: [true, false] },
        { feature: "Runs seamlessly in terminal (CLI) and graphical (GUI) modes", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS, BSD\n1 GHz CPU, 1 GB RAM\nTerminal emulator or GUI desktop environment",
    maintainer: "organization",
    developer: "GNU Project & Richard Stallman",
    developerUrl: "https://www.gnu.org/software/emacs/",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"]
  }
];
