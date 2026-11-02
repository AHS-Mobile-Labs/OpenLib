module.exports = [
  {
    id: "newpipe",
    name: "NewPipe",
    alternative: "YouTube, YouTube Vanced, ReVanced, YouTube Premium",
    category: "Media",
    subcategory: "Video Players",
    license: "GPL-3.0",
    version: "0.27.7",
    fileSize: "12 MB",
    description: "Lightweight, privacy-respecting YouTube and streaming frontend for Android without Google Play Services.",
    fullDescription: "NewPipe is a lightweight, privacy-focused media player and YouTube frontend for Android. It is engineered to give users the original YouTube and PeerTube experience on their mobile devices without annoying ads and questionable permissions. NewPipe does not use any proprietary Google Play Services libraries or the official YouTube API, parsing only the website itself to retrieve video information and streams. It supports background playback, picture-in-picture mode, audio and video downloads, customizable subscription feeds, and seamless local playlist management without requiring any account login.",
    features: [
      "Ad-free video and audio playback",
      "Background playback and Picture-in-Picture (PiP) popup",
      "Download videos and audio streams up to 4K resolution",
      "Local subscriptions and feeds without an account",
      "Support for YouTube, PeerTube, Bandcamp, and SoundCloud",
      "Lightweight footprint with zero Google Play Services dependencies"
    ],
    uses: "Watch YouTube, PeerTube, and SoundCloud media without ads, Google tracking, or proprietary Play Services requirements.",
    tags: ["youtube", "media-player", "video-streaming", "privacy", "android", "f-droid", "ad-blocker"],
    logoSource: "https://raw.githubusercontent.com/TeamNewPipe/NewPipe/dev/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/TeamNewPipe/NewPipe/dev/fastlane/metadata/android/en-US/images/phoneScreenshots/00.png",
      "https://raw.githubusercontent.com/TeamNewPipe/NewPipe/dev/fastlane/metadata/android/en-US/images/phoneScreenshots/01.png",
      "https://raw.githubusercontent.com/TeamNewPipe/NewPipe/dev/fastlane/metadata/android/en-US/images/phoneScreenshots/02.png"
    ],
    download: "https://newpipe.net/#download",
    source: "https://github.com/TeamNewPipe/NewPipe",
    website: "https://newpipe.net",
    docs: "https://newpipe.net/FAQ/",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/org.schabi.newpipe/" },
      { label: "Official Website", command: "https://newpipe.net/#download" },
      { label: "GitHub Releases", command: "https://github.com/TeamNewPipe/NewPipe/releases" }
    ],
    comparisonData: {
      columns: ["NewPipe", "YouTube App"],
      rows: [
        { feature: "Ad-free playback", values: [true, false] },
        { feature: "Background playback", values: [true, false] },
        { feature: "Video downloads", values: [true, false] },
        { feature: "No Google account required", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nInternet connection\n50 MB storage space",
    maintainer: "organization",
    developer: "Team NewPipe",
    developerUrl: "https://github.com/TeamNewPipe",
    platforms: ["Android"]
  },
  {
    id: "termux",
    name: "Termux",
    alternative: "UserLAnd, AndroNix, GNURoot Debian, ConnectBot",
    category: "Utility",
    subcategory: "Developer Utilities",
    license: "GPL-3.0",
    version: "0.118.1",
    fileSize: "98 MB",
    description: "Powerful terminal emulation and comprehensive Linux environment app for Android.",
    fullDescription: "Termux is an Android terminal emulator and Linux environment application that works directly without requiring root privileges or complex setup. A minimal base system is installed automatically, with additional packages available using the APT package manager. Termux brings the full power of bash and zsh shells, programming runtimes (Python, Node.js, Rust, Go, C/C++), secure shell clients (OpenSSH), file transfer tools, and development utilities to your Android smartphone or tablet.",
    features: [
      "Full Linux terminal environment without root requirements",
      "Package management via APT with extensive software mirrors",
      "Development support for Python, Node.js, Git, C/C++, and Rust",
      "SSH server and client capabilities for remote computing",
      "Customizable keyboard shortcuts and hardware keyboard support",
      "Termux API extension for device hardware integration"
    ],
    uses: "Develop software, execute shell scripts, run local servers, and administer remote servers right from an Android device.",
    tags: ["terminal", "linux", "developer-tools", "ssh", "python", "programming", "android"],
    logoSource: "https://raw.githubusercontent.com/termux/termux-app/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/termux/termux-app/master/fastlane/metadata/android/en-US/images/phoneScreenshots/1.jpg",
      "https://raw.githubusercontent.com/termux/termux-app/master/fastlane/metadata/android/en-US/images/phoneScreenshots/2.jpg",
      "https://raw.githubusercontent.com/termux/termux-app/master/fastlane/metadata/android/en-US/images/phoneScreenshots/3.jpg"
    ],
    download: "https://github.com/termux/termux-app/releases",
    source: "https://github.com/termux/termux-app",
    website: "https://termux.dev",
    docs: "https://wiki.termux.com",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/com.termux/" },
      { label: "GitHub Releases", command: "https://github.com/termux/termux-app/releases" }
    ],
    comparisonData: {
      columns: ["Termux", "ConnectBot"],
      rows: [
        { feature: "Local Linux environment", values: [true, false] },
        { feature: "APT package manager", values: [true, false] },
        { feature: "Local code compilation", values: [true, false] },
        { feature: "SSH client", values: [true, true] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Android 7.0 (Nougat) or higher\n200 MB free internal storage space minimum",
    maintainer: "organization",
    developer: "Termux",
    developerUrl: "https://github.com/termux",
    platforms: ["Android"]
  },
  {
    id: "kde-connect",
    name: "KDE Connect",
    alternative: "Microsoft Phone Link, AirDroid, Pushbullet, Apple AirDrop",
    category: "Utility",
    subcategory: "Device Companion",
    license: "GPL-2.0",
    version: "24.08.2",
    fileSize: "35 MB",
    description: "Seamless multi-platform bridge enabling phone-to-computer notifications, file sharing, and remote control.",
    fullDescription: "KDE Connect enables wireless communication and integration across all your everyday devices. Designed with privacy in mind, all communication is end-to-end encrypted across your local network without routing through third-party servers. KDE Connect allows you to receive phone notifications on your desktop computer, reply to SMS messages, synchronize your clipboard, transfer photos and files bidirectionally, pause media when receiving phone calls, and use your phone as a virtual touch touchpad and presentation remote.",
    features: [
      "Shared clipboard between phones, tablets, and desktop computers",
      "Direct end-to-end encrypted Wi-Fi file and URL sharing",
      "Phone notification sync and desktop reply capabilities",
      "Virtual trackpad and mouse input control from mobile",
      "Multimedia playback control across devices",
      "Ring my phone feature and battery monitor alerts"
    ],
    uses: "Seamlessly integrate your Android or iOS smartphone with Linux, Windows, and macOS desktops over local Wi-Fi.",
    tags: ["device-sync", "file-sharing", "remote-control", "clipboard-sync", "desktop-integration", "cross-platform"],
    logoSource: "https://raw.githubusercontent.com/KDE/kdeconnect-kde/master/icons/windows/512-apps-kdeconnect.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/KDE/kdeconnect-android/master/fastlane/metadata/android/en-US/images/phoneScreenshots/1_en-US.png",
      "https://raw.githubusercontent.com/KDE/kdeconnect-android/master/fastlane/metadata/android/en-US/images/phoneScreenshots/2_en-US.png",
      "https://raw.githubusercontent.com/KDE/kdeconnect-android/master/fastlane/metadata/android/en-US/images/phoneScreenshots/3_en-US.png"
    ],
    download: "https://kdeconnect.kde.org/download.html",
    source: "https://invent.kde.org/network/kdeconnect-kde",
    website: "https://kdeconnect.kde.org",
    docs: "https://userbase.kde.org/KDEConnect",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install kdeconnect" },
      { label: "Fedora", command: "sudo dnf install kdeconnect" },
      { label: "Arch Linux", command: "sudo pacman -S kdeconnect" },
      { label: "Windows (winget)", command: "winget install KDE.KDEConnect" },
      { label: "macOS (brew)", command: "brew install --cask kdeconnect" },
      { label: "Flathub", command: "flatpak install flathub org.kde.kdeconnect" },
      { label: "F-Droid", command: "https://f-droid.org/packages/org.kde.kdeconnect_tp/" }
    ],
    comparisonData: {
      columns: ["KDE Connect", "Microsoft Phone Link"],
      rows: [
        { feature: "Cross-platform (Linux/Win/Mac)", values: [true, false] },
        { feature: "End-to-end local network encryption", values: [true, false] },
        { feature: "No cloud account required", values: [true, false] },
        { feature: "Notification synchronization", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Shared Wi-Fi or Bluetooth local network\nLinux (any DE), Windows 10/11, macOS 11+, or Android 5.0+",
    maintainer: "organization",
    developer: "KDE Community",
    developerUrl: "https://kde.org",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "syncthing",
    name: "Syncthing",
    alternative: "Dropbox, Google Drive, Resilio Sync, Microsoft OneDrive",
    category: "System",
    subcategory: "Backup & Sync",
    license: "MPL-2.0",
    version: "1.28.1",
    fileSize: "28 MB",
    description: "Continuous decentralized peer-to-peer file synchronization system with TLS encryption.",
    fullDescription: "Syncthing replaces proprietary cloud sync services with a decentralized, privacy-respecting file synchronization architecture. Your data is stored exclusively on your own machines without ever uploading to a central server. Communication between nodes is secured using TLS with cryptographic forward secrecy and strong certificate pinning. Syncthing features a responsive web management interface, real-time file system monitoring, file versioning schemes, and robust conflict resolution.",
    features: [
      "Decentralized peer-to-peer synchronization with no cloud servers",
      "End-to-end TLS encryption with cryptographic node authentication",
      "Clean browser-based GUI and command-line management",
      "Staggered and trash-can file versioning support",
      "Selective folder sharing and read-only/receive-only folder modes",
      "Efficient block-level delta transfers"
    ],
    uses: "Synchronize files, photos, backups, and projects across laptops, desktops, servers, and smartphones securely.",
    tags: ["file-sync", "p2p", "decentralized", "backup", "privacy", "cross-platform", "cloud-storage"],
    logoSource: "https://raw.githubusercontent.com/syncthing/syncthing/main/assets/logo-128.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/syncthing/syncthing-android/main/app/src/main/play/listings/en-GB/graphics/large-tablet-screenshots/screenshot_tablet_7_inch_1.png",
      "https://raw.githubusercontent.com/syncthing/syncthing-android/main/app/src/main/play/listings/en-GB/graphics/large-tablet-screenshots/screenshot_tablet_7_inch_2.png"
    ],
    download: "https://syncthing.net/downloads/",
    source: "https://github.com/syncthing/syncthing",
    website: "https://syncthing.net",
    docs: "https://docs.syncthing.net",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install syncthing" },
      { label: "Arch Linux", command: "sudo pacman -S syncthing" },
      { label: "Fedora", command: "sudo dnf install syncthing" },
      { label: "Windows (winget)", command: "winget install Syncthing.Syncthing" },
      { label: "macOS (brew)", command: "brew install syncthing" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/com.nutomic.syncthingandroid/" },
      { label: "Docker", command: "docker run -d --name=syncthing syncthing/syncthing" }
    ],
    comparisonData: {
      columns: ["Syncthing", "Dropbox"],
      rows: [
        { feature: "No cloud storage limits", values: [true, false] },
        { feature: "Peer-to-peer direct transfer", values: [true, false] },
        { feature: "No third-party data tracking", values: [true, false] },
        { feature: "File versioning", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS or ARM processor\n100 MB RAM minimum\nStorage capacity matching sync payload",
    maintainer: "organization",
    developer: "The Syncthing Foundation",
    developerUrl: "https://github.com/syncthing",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "organic-maps",
    name: "Organic Maps",
    alternative: "Google Maps, Apple Maps, MAPS.ME, Waze",
    category: "Maps & Travel",
    subcategory: "Navigation",
    license: "Apache-2.0",
    version: "2024.10.19",
    fileSize: "75 MB",
    description: "Fast, detailed, completely offline map and turn-by-turn navigation app powered by OpenStreetMap.",
    fullDescription: "Organic Maps is an open-source, privacy-first offline navigation application for travelers, hikers, cyclists, and drivers. Forked from the original MAPS.ME codebase by its original founders, Organic Maps has stripped out all ad trackers, surveillance scripts, and data collection SDKs. It downloads high-compression OpenStreetMap vector maps directly to device storage, delivering instant search, elevation profiles, cycling and hiking paths, and voice navigation without requiring mobile cellular connectivity.",
    features: [
      "100% offline navigation with zero mobile data required",
      "Detailed walking trails, cycling tracks, and hiking contours",
      "Turn-by-turn driving, cycling, and walking voice navigation",
      "Fast offline search with bookmarks (KML/KMZ) import and export",
      "No telemetry, tracking, ads, or data harvesting",
      "Battery-efficient vector map rendering engine"
    ],
    uses: "Navigate cities, highways, and backcountry wilderness routes without an active internet connection or privacy invasion.",
    tags: ["maps", "navigation", "openstreetmap", "gps", "travel", "offline", "privacy"],
    logoSource: "https://raw.githubusercontent.com/organicmaps/organicmaps/master/android/app/ic_launcher-playstore.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/organicmaps/organicmaps/master/android/app/src/fdroid/play/listings/en-US/graphics/phone-screenshots/1.jpg",
      "https://raw.githubusercontent.com/organicmaps/organicmaps/master/android/app/src/fdroid/play/listings/en-US/graphics/phone-screenshots/2.jpg",
      "https://raw.githubusercontent.com/organicmaps/organicmaps/master/android/app/src/fdroid/play/listings/en-US/graphics/phone-screenshots/3.jpg"
    ],
    download: "https://organicmaps.app/#install",
    source: "https://github.com/organicmaps/organicmaps",
    website: "https://organicmaps.app",
    docs: "https://organicmaps.app/faq/",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/app.organicmaps/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=app.organicmaps" },
      { label: "Apple App Store", command: "https://apps.apple.com/app/organic-maps-offline-hiking/id1567437057" },
      { label: "Flathub (Linux)", command: "flatpak install flathub app.organicmaps.desktop" },
      { label: "GitHub Releases", command: "https://github.com/organicmaps/organicmaps/releases" }
    ],
    comparisonData: {
      columns: ["Organic Maps", "Google Maps"],
      rows: [
        { feature: "Full offline navigation", values: [true, false] },
        { feature: "Zero user location tracking", values: [true, false] },
        { feature: "No advertisements", values: [true, false] },
        { feature: "Hiking and cycling trails", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0+, iOS 12.0+, or Linux desktop with OpenGL\nGPS sensor required for live positioning\nStorage for country map downloads",
    maintainer: "organization",
    developer: "Organic Maps Community",
    developerUrl: "https://github.com/organicmaps",
    platforms: ["Android", "iOS", "Linux"]
  },
  {
    id: "aegis-authenticator",
    name: "Aegis Authenticator",
    alternative: "Google Authenticator, Microsoft Authenticator, Authy, Duo Mobile",
    category: "Security",
    subcategory: "Password Managers",
    license: "GPL-3.0",
    version: "3.0.0",
    fileSize: "15 MB",
    description: "Secure, encrypted two-factor authentication (2FA) app for Android with encrypted vault backup.",
    fullDescription: "Aegis Authenticator is a free, secure, and open-source application for Android to manage two-factor authentication tokens. It supports RFC 6238 time-based (TOTP) and RFC 4226 counter-based (HOTP) algorithms. Aegis stores authentication tokens securely in an AES-256-GCM encrypted vault protected by a password or biometric unlock (fingerprint and face). Unlike proprietary alternatives that lock your secrets inside proprietary clouds, Aegis enables automated encrypted exports to local storage or cloud providers.",
    features: [
      "AES-256-GCM vault encryption with password and biometric unlock",
      "Support for TOTP and HOTP two-factor authentication tokens",
      "Seamless import from Google Authenticator, Authy, and andOTP",
      "Automated encrypted scheduled backups to local or cloud storage",
      "Custom icon packs and tag organization for accounts",
      "Zero tracking, internet permission not required for basic functionality"
    ],
    uses: "Protect online accounts with two-factor authentication while maintaining full custody and encrypted backups of 2FA secrets.",
    tags: ["2fa", "totp", "hotp", "security", "authenticator", "encryption", "privacy", "android"],
    logoSource: "https://raw.githubusercontent.com/beemdevelopment/Aegis/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/beemdevelopment/Aegis/master/metadata/en-US/images/phoneScreenshots/screenshot1.png",
      "https://raw.githubusercontent.com/beemdevelopment/Aegis/master/metadata/en-US/images/phoneScreenshots/screenshot2.png",
      "https://raw.githubusercontent.com/beemdevelopment/Aegis/master/metadata/en-US/images/phoneScreenshots/screenshot3.png"
    ],
    download: "https://getaegis.app/#download",
    source: "https://github.com/beemdevelopment/Aegis",
    website: "https://getaegis.app",
    docs: "https://github.com/beemdevelopment/Aegis/wiki",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/com.beemdevelopment.aegis/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis" },
      { label: "GitHub Releases", command: "https://github.com/beemdevelopment/Aegis/releases" }
    ],
    comparisonData: {
      columns: ["Aegis", "Google Authenticator"],
      rows: [
        { feature: "Encrypted backup export", values: [true, false] },
        { feature: "Biometric app lock", values: [true, false] },
        { feature: "Custom icons and tags", values: [true, false] },
        { feature: "TOTP standard support", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\nBiometric sensor optional for fingerprint unlock",
    maintainer: "organization",
    developer: "Beem Development",
    developerUrl: "https://github.com/beemdevelopment",
    platforms: ["Android"]
  },
  {
    id: "bitwarden",
    name: "Bitwarden",
    alternative: "1Password, LastPass, Dashlane, KeePass, Keeper",
    category: "Security",
    subcategory: "Password Managers",
    license: "GPL-3.0",
    version: "2024.10.1",
    fileSize: "85 MB",
    description: "Industry-standard open-source password manager and passkey vault across all major operating systems.",
    fullDescription: "Bitwarden is an open-source password management solution tailored for individuals, teams, and enterprise environments. Bitwarden secures your credentials, passkeys, credit cards, and secure notes in an end-to-end encrypted vault with zero-knowledge architecture. Encryption keys are derived using PBKDF2 SHA-256 or Argon2id directly on the client device. It offers cross-device synchronization, autofill on browsers and mobile devices, password health reports, and self-hosting options via official Docker containers or Vaultwarden.",
    features: [
      "Zero-knowledge end-to-end AES-256-bit encryption",
      "Passkey management and password autofill integration",
      "Cross-platform client support across desktops, mobile, and web browsers",
      "Two-factor authentication and vault health security auditing",
      "Bitwarden Send for encrypted text and file transmission",
      "Self-hosting capabilities with full database ownership"
    ],
    uses: "Generate, store, and autofill strong unique passwords and passkeys securely across all devices and browsers.",
    tags: ["password-manager", "passkeys", "security", "encryption", "autofill", "cross-platform", "privacy"],
    logoSource: "https://raw.githubusercontent.com/bitwarden/clients/main/apps/desktop/resources/icons/128x128.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/bitwarden/clients/main/apps/browser/store/locales/en/screenshots/Chrome/Chrome01.png",
      "https://raw.githubusercontent.com/bitwarden/clients/main/apps/browser/store/locales/en/screenshots/Chrome/Chrome02.png",
      "https://raw.githubusercontent.com/bitwarden/clients/main/apps/browser/store/locales/en/screenshots/Chrome/Chrome03.png"
    ],
    download: "https://bitwarden.com/download/",
    source: "https://github.com/bitwarden/clients",
    website: "https://bitwarden.com",
    docs: "https://bitwarden.com/help/",
    youtube: "",
    installMethods: [
      { label: "Windows (winget)", command: "winget install Bitwarden.Bitwarden" },
      { label: "macOS (brew)", command: "brew install --cask bitwarden" },
      { label: "Flathub (Linux)", command: "flatpak install flathub com.bitwarden.desktop" },
      { label: "Snap", command: "sudo snap install bitwarden" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=com.x8bit.bitwarden" },
      { label: "F-Droid", command: "https://f-droid.org/packages/com.x8bit.bitwarden/" },
      { label: "iOS App Store", command: "https://apps.apple.com/app/bitwarden-password-manager/id1352778147" }
    ],
    comparisonData: {
      columns: ["Bitwarden", "LastPass"],
      rows: [
        { feature: "Zero-knowledge encryption", values: [true, true] },
        { feature: "Self-hosting available", values: [true, false] },
        { feature: "Free multi-device sync", values: [true, false] },
        { feature: "Passkey support", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10+, macOS 11+, modern Linux distro, Android 8.0+, or iOS 14.0+\nInternet connection for sync",
    maintainer: "organization",
    developer: "Bitwarden Inc.",
    developerUrl: "https://github.com/bitwarden",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS", "Web"]
  },
  {
    id: "open-camera",
    name: "Open Camera",
    alternative: "Google Camera, Samsung Camera, ProCam, Camera360",
    category: "Media",
    subcategory: "Photography",
    license: "GPL-3.0",
    version: "1.53.1",
    fileSize: "6 MB",
    description: "Fully featured open-source camera app for Android phones and tablets with manual controls.",
    fullDescription: "Open Camera is an open-source camera application designed for Android devices. It unlocks powerful hardware capabilities of modern smartphone camera sensors without ads, tracking, or unnecessary permissions. It provides auto-stabilization with gyro leveling, exposure lock and compensation, white balance presets, manual focus and shutter speed via the Android Camera2 API, RAW (DNG) capture, HDR bracketing, and remote voice-triggered shooting.",
    features: [
      "Manual controls via Camera2 API: manual focus, ISO, exposure, and white balance",
      "RAW (DNG) image capture and HDR photographic modes",
      "Auto-stabilization option so pictures stay perfectly level",
      "Burst mode, timer controls, and audio trigger shutter",
      "Configurable on-screen GUI and volume key camera triggers",
      "Completely ad-free with no background tracking or data sharing"
    ],
    uses: "Capture photos and videos with professional manual controls, RAW sensor capture, and total privacy on Android.",
    tags: ["camera", "photography", "raw", "dng", "video-recording", "android", "privacy", "open-source"],
    logoSource: "https://opencamera.org.uk/ic_launcher.png",
    screenshotSources: [
      "https://opencamera.org.uk/screenshot_galaxy_nexus_3.jpg",
      "https://opencamera.org.uk/Screenshot_2014-07-02-14-16-35.jpg"
    ],
    download: "https://opencamera.org.uk/",
    source: "https://sourceforge.net/p/opencamera/code/",
    website: "https://opencamera.org.uk",
    docs: "https://opencamera.org.uk/help.html",
    youtube: "",
    installMethods: [
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=net.sourceforge.opencamera" },
      { label: "F-Droid", command: "https://f-droid.org/packages/net.sourceforge.opencamera/" },
      { label: "SourceForge", command: "https://sourceforge.net/projects/opencamera/files/" }
    ],
    comparisonData: {
      columns: ["Open Camera", "Stock Camera"],
      rows: [
        { feature: "No advertisement or tracking", values: [true, false] },
        { feature: "Full manual Camera2 API controls", values: [true, false] },
        { feature: "RAW (DNG) photography", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 4.0.3 or higher\nCamera sensor hardware\nCamera2 API required for manual controls",
    maintainer: "individual",
    developer: "Mark Harman",
    developerUrl: "https://sourceforge.net/u/markharman/profile/",
    platforms: ["Android"]
  },
  {
    id: "antennapod",
    name: "AntennaPod",
    alternative: "Pocket Casts, Spotify, Apple Podcasts, Google Podcasts, Castbox",
    category: "Audio",
    subcategory: "Podcast Apps",
    license: "GPL-3.0",
    version: "3.5.0",
    fileSize: "22 MB",
    description: "Easy-to-use, flexible, and open-source podcast player and manager for Android.",
    fullDescription: "AntennaPod is an open-source podcast manager and player that grants instant access to millions of free and paid podcasts. It allows users to search, stream, or download podcast episodes from directories like Apple Podcasts, Podcast Index, fyyd, or via custom RSS feeds. AntennaPod provides variable playback speeds, silence skipping, volume boosting, sleep timers, chapter navigation, and synchronization via Nextcloud gPodder or the gpodder.net service.",
    features: [
      "Search and import podcasts via Apple Podcasts, Podcast Index, and RSS feeds",
      "Automated episode downloads and smart queue management",
      "Adjustable playback speed, silence skipping, and volume boost",
      "Chapter support and sleep timer functions",
      "Multi-device synchronization via Nextcloud / gPodder",
      "Full OPML import and export capabilities"
    ],
    uses: "Subscribe to and listen to podcasts without subscription fees, corporate tracking, or proprietary ecosystem lock-in.",
    tags: ["podcast", "audio-player", "rss", "gpodder", "streaming", "android", "f-droid", "open-source"],
    logoSource: "https://raw.githubusercontent.com/AntennaPod/AntennaPod/develop/ui/common/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/AntennaPod/AntennaPod.github.io/master/assets/images/screenshot-main-page.png",
      "https://raw.githubusercontent.com/AntennaPod/AntennaPod.github.io/master/assets/images/screenshots/en/00.png"
    ],
    download: "https://antennapod.org/download",
    source: "https://github.com/AntennaPod/AntennaPod",
    website: "https://antennapod.org",
    docs: "https://antennapod.org/documentation/",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/de.danoeh.antennapod/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=de.danoeh.antennapod" },
      { label: "GitHub Releases", command: "https://github.com/AntennaPod/AntennaPod/releases" }
    ],
    comparisonData: {
      columns: ["AntennaPod", "Pocket Casts"],
      rows: [
        { feature: "100% Free with no paywalls", values: [true, false] },
        { feature: "Nextcloud / gPodder sync", values: [true, false] },
        { feature: "OPML import and export", values: [true, true] },
        { feature: "Variable playback speed", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 6.0 (Marshmallow) or newer\nInternet connection for RSS updates\nStorage for downloaded audio",
    maintainer: "organization",
    developer: "AntennaPod Community",
    developerUrl: "https://github.com/AntennaPod",
    platforms: ["Android"]
  },
  {
    id: "osmand",
    name: "OsmAnd",
    alternative: "Google Maps, Apple Maps, Garmin, TomTom GO",
    category: "Maps & Travel",
    subcategory: "Navigation",
    license: "GPL-3.0",
    version: "4.8.6",
    fileSize: "135 MB",
    description: "Comprehensive offline world map and turn-by-turn navigation app based on OpenStreetMap.",
    fullDescription: "OsmAnd (OpenStreetMap Automated Navigation Directions) is a robust offline map and navigation application with access to global OpenStreetMap data. All map data can be saved locally to your device memory card for completely offline usage. OsmAnd offers voice and visual turn-by-turn navigation for cars, trucks, motorcycles, bicycles, and pedestrians. It includes terrain hillshade and contour lines, nautical sea maps, GPX track recording, Wikipedia offline travel guides, and address search.",
    features: [
      "Completely offline vector maps with worldwide coverage",
      "Voice-guided turn-by-turn navigation with lane guidance and speed limit warnings",
      "Contour lines, hillshade maps, and slope visualizations for outdoor activities",
      "GPX track recording, waypoint management, and route planning",
      "Offline Wikipedia articles linked directly to points of interest (POI)",
      "Public transit routing and customizable map display layers"
    ],
    uses: "Navigate roads, waterways, hiking trails, and bicycle networks globally without requiring active cellular internet.",
    tags: ["maps", "navigation", "openstreetmap", "gps", "gpx", "hiking", "travel", "offline"],
    logoSource: "https://raw.githubusercontent.com/osmandapp/OsmAnd/master/OsmAnd-telegram/res/drawable-xxhdpi/osmand_logo.png",
    screenshotSources: [
      "https://raw.githubusercontent.com/osmandapp/osmandapp.github.io/master/website/images/api_phone_demo.png",
      "https://raw.githubusercontent.com/osmandapp/osmandapp.github.io/master/website/images/api_phone_sample.png"
    ],
    download: "https://osmand.net/docs/user/start-with/download-install",
    source: "https://github.com/osmandapp/OsmAnd",
    website: "https://osmand.net",
    docs: "https://osmand.net/docs/intro",
    youtube: "",
    installMethods: [
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=net.osmand" },
      { label: "F-Droid", command: "https://f-droid.org/packages/net.osmand.plus/" },
      { label: "Apple App Store", command: "https://apps.apple.com/app/osmand-maps-travel-navigate/id934850377" },
      { label: "Huawei AppGallery", command: "https://appgallery.huawei.com/app/C101438781" },
      { label: "GitHub Releases", command: "https://github.com/osmandapp/OsmAnd/releases" }
    ],
    comparisonData: {
      columns: ["OsmAnd", "Google Maps"],
      rows: [
        { feature: "Full offline world navigation", values: [true, false] },
        { feature: "Contour lines & hillshades", values: [true, false] },
        { feature: "GPX track recording & export", values: [true, false] },
        { feature: "No user tracking or profiling", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Android 6.0+ or iOS 15.0+\nInternal or external SD storage for map regional packs\nGPS hardware",
    maintainer: "organization",
    developer: "OsmAnd B.V.",
    developerUrl: "https://github.com/osmandapp",
    platforms: ["Android", "iOS"]
  }
];
