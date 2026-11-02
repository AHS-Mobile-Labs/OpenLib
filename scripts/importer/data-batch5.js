module.exports = [
  {
    id: "jellyfin",
    name: "Jellyfin",
    alternative: "Plex, Emby, Netflix, Prime Video, Apple TV+",
    category: "Media",
    subcategory: "Streaming",
    license: "GPL-2.0",
    version: "10.9.11",
    fileSize: "115 MB",
    description: "The Free Software Media System that puts you in control of managing and streaming your media.",
    fullDescription: "Jellyfin is a volunteer-built, open-source media streaming system that lets you collect, manage, and stream your personal movies, TV shows, music, photos, and live television. Forked from Emby when it became closed-source, Jellyfin is dedicated to 100% free software principles: no premium tiers, no tracking, and no paywalls for basic features like hardware transcoding or remote mobile streaming. It features automated metadata matching, multiple user profiles, parental controls, DLNA support, and cross-platform native client apps for Smart TVs, web, desktop, and mobile.",
    features: [
      "Stream movies, TV shows, music, and home photos to any connected device",
      "Completely free hardware-accelerated transcoding (NVENC, QSV, VA-API, AMF)",
      "Multi-user accounts with customizable permissions and parental access limits",
      "Live TV streaming and DVR recording with electronic program guide (EPG) integration",
      "SyncPlay feature to watch movies in sync with friends remotely",
      "Clients available for Android TV, Apple TV, Roku, Fire TV, web browsers, and desktop"
    ],
    uses: "Host and stream your private movie, television, and audio collection across all screens without subscription fees.",
    tags: ["media-server", "streaming", "home-theater", "plex-alternative", "transcoding", "dlna", "jellyfin"],
    logoSource: "https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/branding/SVG/icon-transparent.svg",
    screenshotSources: [],
    download: "https://jellyfin.org/downloads/",
    source: "https://github.com/jellyfin/jellyfin",
    website: "https://jellyfin.org",
    docs: "https://jellyfin.org/docs/",
    youtube: "",
    installMethods: [
      { label: "Docker", command: "docker run -d --name=jellyfin -p 8096:8096 jellyfin/jellyfin" },
      { label: "Ubuntu / Debian", command: "curl -fsSL https://repo.jellyfin.org/jellyfin_team.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/jellyfin.gpg && sudo apt install jellyfin" },
      { label: "Windows (winget)", command: "winget install Jellyfin.Server" },
      { label: "macOS (brew)", command: "brew install --cask jellyfin" }
    ],
    comparisonData: {
      columns: ["Jellyfin", "Plex"],
      rows: [
        { feature: "Free hardware transcoding", values: [true, false] },
        { feature: "No authentication relay required", values: [true, false] },
        { feature: "No paid Plex Pass upsells", values: [true, false] },
        { feature: "Live TV and DVR support", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, or Docker)\nDedicated GPU recommended for real-time 4K transcoding\n2 GB RAM minimum",
    maintainer: "organization",
    developer: "Jellyfin Project",
    developerUrl: "https://github.com/jellyfin",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS", "Web"]
  },
  {
    id: "immich",
    name: "Immich",
    alternative: "Google Photos, Apple Photos, Amazon Photos, Flickr, Photoprism",
    category: "Media",
    subcategory: "Image Editors",
    license: "AGPL-3.0",
    version: "1.118.2",
    fileSize: "",
    description: "High-performance self-hosted photo and video management and backup solution directly from mobile devices.",
    fullDescription: "Immich is a high-performance self-hosted photo and video backup solution designed to be a drop-in open-source alternative to Google Photos and Apple iCloud Photos. Immich delivers real-time automatic photo and video backups directly from mobile devices. It incorporates machine learning for facial recognition, object detection, semantic natural language search (CLIP), map view geocoding, multi-user album sharing, and partner library sharing with total data sovereignty.",
    features: [
      "Seamless background automated mobile photo and video backup",
      "On-device and server-side machine learning: facial recognition and CLIP search",
      "Interactive map view showing photos pinpointed by GPS coordinates",
      "Multi-user libraries with shared albums and partner library sharing",
      "Video transcoding and high-efficiency thumbnail generation",
      "RAW image file preview support and live photo playback"
    ],
    uses: "Back up, organize, search, and share family photos and videos securely on your own home server or NAS.",
    tags: ["photos", "self-hosted", "google-photos-alternative", "machine-learning", "facial-recognition", "backup", "immich"],
    logoSource: "https://raw.githubusercontent.com/immich-app/immich/main/design/immich-logo-inline-dark.png",
    screenshotSources: [],
    download: "https://immich.app/docs/install/docker-compose",
    source: "https://github.com/immich-app/immich",
    website: "https://immich.app",
    docs: "https://immich.app/docs/overview/introduction",
    youtube: "",
    installMethods: [
      { label: "Docker Compose", command: "docker compose up -d" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=app.alextran.immich" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/app.alextran.immich/" },
      { label: "iOS (App Store)", command: "https://apps.apple.com/app/immich/id1613934652" }
    ],
    comparisonData: {
      columns: ["Immich", "Google Photos"],
      rows: [
        { feature: "No recurring cloud storage fees", values: [true, false] },
        { feature: "Facial recognition on local hardware", values: [true, false] },
        { feature: "Original quality backups with no compression", values: [true, false] },
        { feature: "Partner library sharing", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Docker and Docker Compose on 64-bit Linux server or NAS\n4 GB RAM minimum (8 GB+ recommended for machine learning)\nFast storage for photo repository",
    maintainer: "organization",
    developer: "Immich Team / FUTO",
    developerUrl: "https://github.com/immich-app",
    platforms: ["Web", "Android", "iOS", "Linux"]
  },
  {
    id: "nextcloud",
    name: "Nextcloud",
    alternative: "Google Workspace, Microsoft 365, Dropbox, Box, ownCloud",
    category: "System",
    subcategory: "Backup & Sync",
    license: "AGPL-3.0",
    version: "29.0.8",
    fileSize: "",
    description: "Self-hosted productivity platform combining file sync, office document collaboration, calendar, and video calls.",
    fullDescription: "Nextcloud Hub is the leading open-source on-premises content collaboration platform worldwide. Nextcloud provides total data sovereignty for individuals, educational institutions, and enterprises. The platform merges secure file synchronization and sharing (Nextcloud Files), collaborative real-time document editing (Nextcloud Office), calendar and contact synchronization (Nextcloud Groupware), and encrypted text and video conferencing (Nextcloud Talk) within a single self-hosted server.",
    features: [
      "Enterprise file synchronization and granular access permissions",
      "Real-time collaborative office document editing (Nextcloud Office)",
      "Secure end-to-end encrypted video conferencing and chat (Nextcloud Talk)",
      "Integrated CalDAV calendar, CardDAV contacts, and webmail clients",
      "End-to-end client-side encryption and server-side encryption modules",
      "Ecosystem of over 300 community apps and integrations"
    ],
    uses: "Reclaim total control of your cloud files, contacts, schedules, and team communication without corporate surveillance.",
    tags: ["cloud-storage", "collaboration", "file-sync", "self-hosted", "office-suite", "privacy", "nextcloud"],
    logoSource: "https://raw.githubusercontent.com/nextcloud/server/master/core/img/logo/logo.svg",
    screenshotSources: [],
    download: "https://nextcloud.com/install/",
    source: "https://github.com/nextcloud/server",
    website: "https://nextcloud.com",
    docs: "https://docs.nextcloud.com/",
    youtube: "",
    installMethods: [
      { label: "Docker", command: "docker run -d -p 8080:80 nextcloud" },
      { label: "Snap", command: "sudo snap install nextcloud" },
      { label: "Desktop Client (Linux)", command: "flatpak install flathub com.nextcloud.desktopclient.nextcloud" },
      { label: "Desktop Client (Windows)", command: "winget install Nextcloud.Nextcloud" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/com.nextcloud.client/" }
    ],
    comparisonData: {
      columns: ["Nextcloud", "Google Workspace"],
      rows: [
        { feature: "Complete data self-custody", values: [true, false] },
        { feature: "No per-user monthly subscription", values: [true, false] },
        { feature: "Integrated document collaboration", values: [true, true] },
        { feature: "Extensive custom app store", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "PHP 8.2+, MySQL/MariaDB or PostgreSQL, and Apache/Nginx on Linux\n2 GB RAM minimum (4 GB recommended)\nStorage matching library size",
    maintainer: "organization",
    developer: "Nextcloud GmbH",
    developerUrl: "https://github.com/nextcloud",
    platforms: ["Web", "Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "home-assistant",
    name: "Home Assistant",
    alternative: "Google Home, Apple HomeKit, Amazon Alexa, Samsung SmartThings",
    category: "Utility",
    subcategory: "Automation",
    license: "Apache-2.0",
    version: "2024.10.4",
    fileSize: "",
    description: "Open-source home automation platform focused on local control, security, and privacy.",
    fullDescription: "Home Assistant is an open-source home automation hub that puts local control and privacy first. Powered by a worldwide community of tinkerers and engineers, Home Assistant integrates with over 2,500 different smart devices and internet services. It runs locally on your home network without requiring cloud connectivity, ensuring that your smart lights, thermostats, locks, and sensors continue working even when your internet connection goes down.",
    features: [
      "100% local automation execution without mandatory cloud dependencies",
      "Over 2,500 device integrations: Zigbee, Z-Wave, Matter, Thread, Wi-Fi, Bluetooth",
      "Powerful visual and YAML automation engine with state triggers and conditions",
      "Energy monitoring dashboard tracking solar generation and grid consumption",
      "Customizable Lovelace dashboards for phones, tablets, and wall-mounted touchscreens",
      "Local voice assistant capabilities using private speech-to-text models"
    ],
    uses: "Automate smart lights, appliances, climate, and security cameras locally while keeping home data private.",
    tags: ["home-automation", "smart-home", "iot", "zigbee", "zwave", "matter", "energy-monitoring"],
    logoSource: "https://brands.home-assistant.io/homeassistant/icon.png",
    screenshotSources: [],
    download: "https://www.home-assistant.io/installation/",
    source: "https://github.com/home-assistant/core",
    website: "https://www.home-assistant.io",
    docs: "https://www.home-assistant.io/docs/",
    youtube: "",
    installMethods: [
      { label: "Home Assistant OS (Raspberry Pi)", command: "https://www.home-assistant.io/installation/raspberrypi" },
      { label: "Docker Container", command: "docker run -d --name homeassistant --privileged --restart=unless-stopped -v /PATH_TO_YOUR_CONFIG:/config --network=host ghcr.io/home-assistant/home-assistant:stable" },
      { label: "Android Companion App", command: "https://play.google.com/store/apps/details?id=io.homeassistant.companion.android" },
      { label: "iOS Companion App", command: "https://apps.apple.com/app/home-assistant/id1099568401" }
    ],
    comparisonData: {
      columns: ["Home Assistant", "Samsung SmartThings"],
      rows: [
        { feature: "Local execution without internet", values: [true, false] },
        { feature: "No cloud telemetry or tracking", values: [true, false] },
        { feature: "Matter and Zigbee compatibility", values: [true, true] },
        { feature: "Over 2,500 integrations", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Raspberry Pi 4/5, Intel NUC, or x86_64 home server with 2 GB+ RAM\nDedicated storage drive (SSD recommended)\nZigbee/Z-Wave USB coordinator optional",
    maintainer: "organization",
    developer: "Open Home Foundation / Home Assistant",
    developerUrl: "https://github.com/home-assistant",
    platforms: ["Web", "Linux", "Android", "iOS"]
  },
  {
    id: "proton-mail-bridge",
    name: "Proton Mail Bridge",
    alternative: "Proton Webmail, Proprietary Exchange Connectors, DavMail",
    category: "Web & Internet",
    subcategory: "Email Clients",
    license: "GPL-3.0",
    version: "3.13.0",
    fileSize: "75 MB",
    description: "Desktop application that bridges Proton Mail's end-to-end encryption with email clients like Thunderbird and Outlook.",
    fullDescription: "Proton Mail Bridge is an open-source desktop application that enables users to integrate their end-to-end encrypted Proton Mail accounts with traditional desktop email clients such as Mozilla Thunderbird, Apple Mail, and Microsoft Outlook. Bridge acts as a local IMAP/SMTP server on your computer, automatically encrypting outgoing messages before they leave your machine and decrypting incoming messages locally, allowing users to keep their favorite desktop email workflow without sacrificing privacy.",
    features: [
      "Local IMAP and SMTP proxy seamlessly bridging standard email clients",
      "Automatic on-the-fly client-side cryptographic encryption and decryption",
      "Support for Mozilla Thunderbird, Apple Mail, and Microsoft Outlook",
      "Full local full-text search capability inside desktop email clients",
      "Multi-account and email alias support within a single bridge instance",
      "Zero modifications needed to existing email client software"
    ],
    uses: "Use desktop email clients with full IMAP search while maintaining Proton Mail's zero-access encryption.",
    tags: ["email", "proton-mail", "imap", "smtp", "encryption", "thunderbird", "security"],
    logoSource: "https://pmecdn.protonweb.com/image-transformation/?s=c&image=image/upload/v1776940263/static/logos/mail/mail-badge.svg",
    screenshotSources: [],
    download: "https://proton.me/mail/bridge",
    source: "https://github.com/ProtonMail/proton-bridge",
    website: "https://proton.me/mail/bridge",
    docs: "https://proton.me/support/bridge",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian (DEB)", command: "sudo apt install ./protonmail-bridge.deb" },
      { label: "Fedora (RPM)", command: "sudo dnf install ./protonmail-bridge.rpm" },
      { label: "Windows (winget)", command: "winget install Proton.Bridge" },
      { label: "macOS (brew)", command: "brew install --cask proton-mail-bridge" },
      { label: "Arch Linux", command: "yay -S protonmail-bridge" }
    ],
    comparisonData: {
      columns: ["Proton Mail Bridge", "Standard IMAP"],
      rows: [
        { feature: "Zero-access encryption at rest", values: [true, false] },
        { feature: "Works with Thunderbird & Outlook", values: [true, true] },
        { feature: "Local encryption key custody", values: [true, false] },
        { feature: "Open Source client", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11, macOS 10.15+, or modern 64-bit Linux\nProton Mail account\nStandard IMAP email client (Thunderbird, Outlook, Apple Mail)",
    maintainer: "organization",
    developer: "Proton AG",
    developerUrl: "https://github.com/ProtonMail",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "retroarch",
    name: "RetroArch",
    alternative: "OpenEmu, RetroPie, LaunchBox, Hyperspin, EmulationStation",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-3.0",
    version: "1.19.1",
    fileSize: "185 MB",
    description: "Multi-system frontend for game engines, retro consoles, and media players via Libretro cores.",
    fullDescription: "RetroArch is the premier open-source frontend for emulators, game engines, and media players. Through its modular Libretro API, RetroArch unifies dozens of discrete console emulators (PlayStation, Nintendo 64, SNES, Genesis, Game Boy, arcade boards) into a unified cross-platform interface. RetroArch features real-time rewind capabilities, run-ahead latency reduction that beats original console response times, CRT and retro shaders (Slang/GLSL), netplay multiplayer, and RetroAchievements integration.",
    features: [
      "Modular Libretro core architecture supporting dozens of gaming consoles",
      "Next-generation run-ahead latency reduction minimizing input lag",
      "Real-time gameplay rewind, save states, and fast-forward controls",
      "Advanced CRT, scanline, and upscaling shaders (Slang, GLSL, CG)",
      "Cross-platform peer-to-peer Netplay for classic multiplayer gaming",
      "RetroAchievements integration unlocking community trophies on classic games"
    ],
    uses: "Play retro video games across decades of console history within a unified, feature-rich interface.",
    tags: ["emulator", "retro-gaming", "libretro", "retrogaming", "shaders", "netplay", "cross-platform"],
    logoSource: "https://raw.githubusercontent.com/libretro/RetroArch/master/media/retroarch-96x96.png",
    screenshotSources: [],
    download: "https://www.retroarch.com/?page=platforms",
    source: "https://github.com/libretro/RetroArch",
    website: "https://www.retroarch.com",
    docs: "https://docs.libretro.com/",
    youtube: "",
    installMethods: [
      { label: "Steam", command: "https://store.steampowered.com/app/1118310/RetroArch/" },
      { label: "Flathub (Linux)", command: "flatpak install flathub org.libretro.RetroArch" },
      { label: "Windows (winget)", command: "winget install Libretro.RetroArch" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/com.retroarch/" },
      { label: "Apple App Store", command: "https://apps.apple.com/app/retroarch/id6499539433" }
    ],
    comparisonData: {
      columns: ["RetroArch", "Standalone Emulators"],
      rows: [
        { feature: "Unified UI across all systems", values: [true, false] },
        { feature: "Run-ahead latency reduction", values: [true, false] },
        { feature: "Real-time gameplay rewind", values: [true, false] },
        { feature: "Global shader pipeline", values: [true, false] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "OpenGL 2.0+ or Vulkan compatible GPU\nWindows, Linux, macOS, Android, iOS, or game console\nGame controller recommended",
    maintainer: "organization",
    developer: "Libretro Team",
    developerUrl: "https://github.com/libretro",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "pcsx2",
    name: "PCSX2",
    alternative: "Play! Emulator, DamonPS2",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-3.0",
    version: "2.2.0",
    fileSize: "45 MB",
    description: "The definitive open-source Sony PlayStation 2 emulator with 4K upscaling and widescreen hacks.",
    fullDescription: "PCSX2 is a free and open-source Sony PlayStation 2 emulator for Windows, Linux, and macOS. With over two decades of active development, PCSX2 delivers near-perfect commercial compatibility across thousands of PS2 titles. It allows players to experience classic PS2 games with modern visual enhancements: 4K rendering resolutions, anti-aliasing, texture filtering, widescreen 16:9 patches, 60 FPS patches, save states, and modern gamepad support with vibration.",
    features: [
      "Over 99% commercial PS2 game compatibility rate",
      "Internal resolution upscaling up to 4K and 8K with anisotropic filtering",
      "Vulkan, Direct3D11, Direct3D12, and OpenGL hardware renderers",
      "Widescreen 16:9 and ultrawide patches alongside 60fps unlocked frame rates",
      "Full gamepad mapping with pressure-sensitive buttons and rumble feedback",
      "Instant save states and internal gameplay recording"
    ],
    uses: "Emulate and enhance classic PlayStation 2 games on modern PCs with high-definition resolutions and controller support.",
    tags: ["ps2-emulator", "playstation2", "gaming", "vulkan", "retrogaming", "pcsx2"],
    logoSource: "https://raw.githubusercontent.com/PCSX2/pcsx2/master/bin/resources/icons/AppIconLarge.png",
    screenshotSources: [],
    download: "https://pcsx2.net/downloads/",
    source: "https://github.com/PCSX2/pcsx2",
    website: "https://pcsx2.net",
    docs: "https://pcsx2.net/docs/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub net.pcsx2.PCSX2" },
      { label: "Windows (winget)", command: "winget install PCSX2.PCSX2" },
      { label: "macOS (brew)", command: "brew install --cask pcsx2" },
      { label: "Arch Linux", command: "sudo pacman -S pcsx2" }
    ],
    comparisonData: {
      columns: ["PCSX2", "Original PS2 Console"],
      rows: [
        { feature: "4K internal upscaling", values: [true, false] },
        { feature: "Widescreen 16:9 patches", values: [true, false] },
        { feature: "Instant save states", values: [true, false] },
        { feature: "Modern Bluetooth controllers", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "64-bit OS (Windows 10+, macOS 11+, or modern Linux)\nCPU with high single-thread performance (PassMark single thread > 2000)\nGPU supporting Vulkan 1.1 or Direct3D 11",
    maintainer: "organization",
    developer: "PCSX2 Team",
    developerUrl: "https://github.com/PCSX2",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "retrodeck",
    name: "RetroDECK",
    alternative: "EmuDeck, Batocera, RetroPie, Lakka",
    category: "Games",
    subcategory: "Game Launchers",
    license: "GPL-3.0",
    version: "0.8.3b",
    fileSize: "850 MB",
    description: "All-in-one retro gaming and emulation environment built specifically for Steam Deck and desktop Linux.",
    fullDescription: "RetroDECK is an all-in-one emulation hub tailored for the Valve Steam Deck and desktop Linux environments. Distributed cleanly as a sandboxed Flatpak, RetroDECK configures, organizes, and launches your entire retro gaming library through an elegant controller-friendly EmulationStation-DE interface. It preconfigures controls, hotkeys, screen bezels, and emulators (RetroArch, PCSX2, RPCS3, Dolphin, DuckStation, Ryujinx, PPSSPP) without cluttering the host file system.",
    features: [
      "Zero-setup sandboxed Flatpak deployment with all emulators pre-configured",
      "EmulationStation-DE frontend tailored for handheld controls and big screens",
      "Standardized Steam Deck controller layouts and hotkeys across all emulators",
      "Integrated scrapers for game box art, video previews, and manual PDFs",
      "Built-in bios checker and file manager for easy ROM management",
      "Support for arcade, handheld, 8-bit, 16-bit, 3D, and modern console emulation"
    ],
    uses: "Turn the Steam Deck or a Linux PC into a dedicated retro gaming console without complex manual configuration.",
    tags: ["steam-deck", "emulation", "retrogaming", "flatpak", "emulationstation", "game-launcher"],
    logoSource: "https://retrodeck.net/assets/rd-icons/squircle-icon.svg",
    screenshotSources: [
      "https://retrodeck.net/assets/screens/screen01.png",
      "https://retrodeck.net/assets/screens/screen02.png",
      "https://retrodeck.net/assets/screens/screen03.png"
    ],
    download: "https://retrodeck.net/#download",
    source: "https://github.com/XargonWan/RetroDECK",
    website: "https://retrodeck.net",
    docs: "https://retrodeck.net/wiki/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Steam Deck / Linux)", command: "flatpak install flathub net.retrodeck.retrodeck" },
      { label: "Discover Software Center", command: "Search 'RetroDECK' in Discover on Steam Deck Desktop Mode" }
    ],
    comparisonData: {
      columns: ["RetroDECK", "EmuDeck"],
      rows: [
        { feature: "Clean sandboxed Flatpak", values: [true, false] },
        { feature: "Pre-configured Steam Deck controls", values: [true, true] },
        { feature: "Single-package updater", values: [true, false] },
        { feature: "Integrated ES-DE frontend", values: [true, true] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Valve Steam Deck (SteamOS) or 64-bit Linux distribution with Flatpak support\nStorage space for ROM libraries",
    maintainer: "organization",
    developer: "RetroDECK Team",
    developerUrl: "https://github.com/XargonWan/RetroDECK",
    platforms: ["Linux"]
  },
  {
    id: "vscodium",
    name: "VSCodium",
    alternative: "Visual Studio Code, Sublime Text, JetBrains WebStorm, Atom",
    category: "Development",
    subcategory: "Code Editors",
    license: "MIT",
    version: "1.95.2",
    fileSize: "95 MB",
    description: "Community-driven, freely licensed binary distribution of Microsoft’s code editor VS Code without telemetry.",
    fullDescription: "VSCodium is a community-driven, freely-licensed binary distribution of Microsoft's editor VS Code. Microsoft’s vscode source code is open source under the MIT license, but the binaries distributed by Microsoft contain proprietary telemetry, tracking scripts, and licensing restrictions. VSCodium provides automated build scripts to compile the original MIT source repository into clean binaries with telemetry, crash reporting, and tracking completely disabled by default.",
    features: [
      "100% telemetry-free binary builds of the vscode open-source repository",
      "Complete drop-in compatibility with the Open VSX extension registry",
      "Built-in Git version control, visual diffing, and stage management",
      "Interactive code debugging with breakpoints, call stacks, and interactive consoles",
      "Integrated terminal supporting bash, zsh, PowerShell, and fish",
      "Rich language support for Python, JavaScript, TypeScript, Go, Rust, and C++"
    ],
    uses: "Write, debug, and develop software with the complete VS Code experience while keeping your coding activity private.",
    tags: ["code-editor", "ide", "vscode", "development", "privacy", "open-vsx", "telemetry-free"],
    logoSource: "https://raw.githubusercontent.com/VSCodium/vscodium/master/icons/corner_512.png",
    screenshotSources: [],
    download: "https://vscodium.com/#install",
    source: "https://github.com/VSCodium/vscodium",
    website: "https://vscodium.com",
    docs: "https://github.com/VSCodium/vscodium/blob/master/DOCS.md",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install codium" },
      { label: "Flathub (Linux)", command: "flatpak install flathub com.vscodium.codium" },
      { label: "Windows (winget)", command: "winget install VSCodium.VSCodium" },
      { label: "macOS (brew)", command: "brew install --cask vscodium" },
      { label: "Arch Linux", command: "sudo pacman -S vscodium" }
    ],
    comparisonData: {
      columns: ["VSCodium", "VS Code (Microsoft)"],
      rows: [
        { feature: "Zero telemetry or user tracking", values: [true, false] },
        { feature: "Free MIT binary license", values: [true, false] },
        { feature: "Open VSX extension marketplace", values: [true, false] },
        { feature: "Integrated terminal & debugger", values: [true, true] },
        { feature: "Open Source binaries", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11, macOS 11+, or modern 64-bit Linux distribution\n1.6 GHz or faster processor\n2 GB RAM minimum (4 GB recommended)",
    maintainer: "organization",
    developer: "VSCodium Community",
    developerUrl: "https://github.com/VSCodium",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "zulip",
    name: "Zulip",
    alternative: "Slack, Microsoft Teams, Mattermost, Discord, Twist",
    category: "Communication",
    subcategory: "Messaging",
    license: "Apache-2.0",
    version: "9.2",
    fileSize: "",
    description: "Powerful open-source team collaboration chat that combines real-time chat with email-like topic threading.",
    fullDescription: "Zulip is an open-source team collaboration chat application designed to solve communication chaos. Unlike Slack, Discord, or Teams where fast conversations get buried in sprawling channels, Zulip organizes conversations into streams and lightweight subject topics. This allows team members to catch up on important conversations at their own pace, read and reply asynchronously, and maintain productive workflows without missing key decisions.",
    features: [
      "Unique stream and topic conversation threading for clear asynchronous teamwork",
      "Markdown formatting with syntax highlighting, spoilers, and LaTeX math formulas",
      "Over 100 integrations with GitHub, Jira, GitLab, Sentry, and CI/CD tools",
      "Advanced search syntax allowing instant discovery of past decisions and code snippets",
      "Enterprise security: LDAP/Active Directory, SAML, Google Workspace SSO",
      "Full data sovereignty with self-hosted on-premises server deployments"
    ],
    uses: "Coordinate engineering teams, open-source communities, and enterprise organizations without losing conversation history.",
    tags: ["team-chat", "threaded-messaging", "collaboration", "slack-alternative", "asynchronous", "enterprise"],
    logoSource: "https://raw.githubusercontent.com/zulip/zulip/main/static/images/logo/zulip-icon-128x128.png",
    screenshotSources: [],
    download: "https://zulip.com/apps/",
    source: "https://github.com/zulip/zulip",
    website: "https://zulip.com",
    docs: "https://zulip.com/help/",
    youtube: "",
    installMethods: [
      { label: "Docker Server", command: "docker run -d --name zulip -p 80:80 -p 443:443 zulip/docker-zulip" },
      { label: "Linux (Flathub Client)", command: "flatpak install flathub org.zulip.Zulip" },
      { label: "Windows (winget)", command: "winget install Zulip.Zulip" },
      { label: "macOS (brew)", command: "brew install --cask zulip" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=com.zulipmobile" },
      { label: "Web App", command: "https://zulip.com" }
    ],
    comparisonData: {
      columns: ["Zulip", "Slack"],
      rows: [
        { feature: "Topic-based asynchronous threading", values: [true, false] },
        { feature: "Unlimited message history on self-hosted", values: [true, false] },
        { feature: "LaTeX mathematical formula rendering", values: [true, false] },
        { feature: "Full data self-hosting", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern web browser, or Windows 10+, macOS 11+, Linux desktop, Android, iOS\nServer: Linux with 2 GB RAM (4 GB recommended)",
    maintainer: "organization",
    developer: "Kandra Labs / Zulip Community",
    developerUrl: "https://github.com/zulip",
    platforms: ["Web", "Linux", "Windows", "macOS", "Android", "iOS"]
  }
];
