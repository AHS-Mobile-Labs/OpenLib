module.exports = [
  {
    id: "briar",
    name: "Briar",
    alternative: "Signal, WhatsApp, Telegram, Session, Threema",
    category: "Communication",
    subcategory: "Messaging",
    license: "GPL-3.0",
    version: "1.5.10",
    fileSize: "36 MB",
    description: "Peer-to-peer encrypted messaging app designed for activists and journalists that works over Wi-Fi and Bluetooth.",
    fullDescription: "Briar is a peer-to-peer encrypted messaging application designed for activists, journalists, and anyone who needs a safe, easy, and robust way to communicate. Unlike traditional messaging apps, Briar does not rely on a central server. Messages are stored locally on user devices and synchronized directly between peers via the Tor network when internet connectivity is available, or mesh-synced over local Wi-Fi networks and Bluetooth during blackouts or censorship events.",
    features: [
      "Direct peer-to-peer messaging with no central servers",
      "Off-grid communication via local Wi-Fi and Bluetooth mesh",
      "Automatic Tor hidden service onion routing for internet communication",
      "End-to-end encrypted direct messaging and private group chats",
      "Decentralized public forums and blogs",
      "Protection against surveillance, metadata collection, and internet blackouts"
    ],
    uses: "Communicate securely during internet outages, network censorship, or severe surveillance conditions.",
    tags: ["p2p", "mesh-network", "tor", "encryption", "anti-censorship", "messaging", "privacy"],
    logoSource: "https://raw.githubusercontent.com/briar/briar/master/briar-android/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [],
    download: "https://briarproject.org/download-briar/",
    source: "https://code.briarproject.org/briar/briar",
    website: "https://briarproject.org",
    docs: "https://briarproject.org/manual/",
    youtube: "",
    installMethods: [
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=org.briarproject.briar.android" },
      { label: "F-Droid", command: "https://f-droid.org/packages/org.briarproject.briar.android/" },
      { label: "Official APK", command: "https://briarproject.org/apk/briar.apk" }
    ],
    comparisonData: {
      columns: ["Briar", "Signal"],
      rows: [
        { feature: "No central servers", values: [true, false] },
        { feature: "Offline Bluetooth/Wi-Fi mesh", values: [true, false] },
        { feature: "No phone number required", values: [true, false] },
        { feature: "Tor onion routing by default", values: [true, false] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer, or modern Linux desktop\nBluetooth and Wi-Fi hardware optional for off-grid mesh",
    maintainer: "organization",
    developer: "Briar Project",
    developerUrl: "https://briarproject.org",
    platforms: ["Android", "Linux"]
  },
  {
    id: "simplex-chat",
    name: "SimpleX Chat",
    alternative: "Signal, Telegram, WhatsApp, Threema, Session",
    category: "Communication",
    subcategory: "Messaging",
    license: "AGPL-3.0",
    version: "6.1.4",
    fileSize: "48 MB",
    description: "The first private messaging network with zero user IDs, phone numbers, or metadata footprints.",
    fullDescription: "SimpleX Chat is an open-source decentralized communication platform built on a revolutionary unidirectional messaging protocol. Unlike Signal, Matrix, or Telegram, SimpleX does not use any user identifiers—no phone numbers, usernames, emails, or public keys identify your profile to servers. Instead, temporary isolated communication queues connect contacts pairwise. SimpleX features end-to-end encrypted messaging, self-destructing messages, voice and video calls, file sharing, and self-hosted message relay servers.",
    features: [
      "Zero user identifiers: no phone numbers, usernames, or persistent user keys",
      "Unidirectional duplex communication queues minimizing metadata leakage",
      "End-to-end encryption with double ratchet protocol and forward secrecy",
      "Encrypted audio and video calls with WebRTC",
      "Hidden profiles, incognito contacts, and self-destructing messages",
      "Self-hostable SimpleX Messaging Protocol (SMP) relay servers"
    ],
    uses: "Converse, call, and send files with total anonymity and cryptographic metadata elimination.",
    tags: ["simplex", "anonymous", "privacy", "messaging", "metadata-free", "e2ee", "security"],
    logoSource: "https://raw.githubusercontent.com/simplex-chat/simplex-chat/stable/fastlane/metadata/android/en-US/images/icon.png",
    screenshotSources: [],
    download: "https://simplex.chat/downloads/",
    source: "https://github.com/simplex-chat/simplex-chat",
    website: "https://simplex.chat",
    docs: "https://github.com/simplex-chat/simplex-chat/blob/stable/README.md",
    youtube: "",
    installMethods: [
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=chat.simplex.app" },
      { label: "F-Droid", command: "https://f-droid.org/packages/chat.simplex.app/" },
      { label: "Apple App Store", command: "https://apps.apple.com/app/simplex-chat/id1605771084" },
      { label: "Linux (Flathub)", command: "flatpak install flathub chat.simplex.simplex" },
      { label: "macOS (brew)", command: "brew install simplex-chat" }
    ],
    comparisonData: {
      columns: ["SimpleX Chat", "Signal"],
      rows: [
        { feature: "No phone number required", values: [true, false] },
        { feature: "Zero user IDs or usernames", values: [true, false] },
        { feature: "End-to-end encryption", values: [true, true] },
        { feature: "Self-hostable relays", values: [true, false] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Android 7.0+, iOS 14.0+, Windows 10+, macOS 11+, or modern 64-bit Linux distribution",
    maintainer: "organization",
    developer: "SimpleX Chat Ltd",
    developerUrl: "https://github.com/simplex-chat",
    platforms: ["Android", "iOS", "Linux", "Windows", "macOS"]
  },
  {
    id: "wireguard",
    name: "WireGuard",
    alternative: "OpenVPN, IPsec, NordVPN, ExpressVPN, Tailscale",
    category: "Network",
    subcategory: "VPN",
    license: "GPL-2.0",
    version: "1.0.20240424",
    fileSize: "14 MB",
    description: "Extremely simple, fast, and modern VPN using state-of-the-art cryptography and kernel integration.",
    fullDescription: "WireGuard is an extremely simple yet fast and modern VPN protocol and implementation designed to outperform IPsec and OpenVPN. WireGuard utilizes state-of-the-art cryptography (Noise protocol framework, Curve25519, ChaCha20, Poly1305, BLAKE2s, SipHash24). Operating inside the Linux kernel as a network interface, WireGuard provides incredible transmission speeds, minimal latency, instantaneous handshake reconnection when roaming between networks, and a tiny codebase of under 4,000 lines.",
    features: [
      "High performance in-kernel packet processing with ultra-low latency",
      "Modern cryptographic primitives: ChaCha20-Poly1305 and Curve25519",
      "Seamless roaming across cellular and Wi-Fi networks without dropping connections",
      "Minimal attack surface with roughly 4,000 lines of auditable C code",
      "Simple public-key exchange authentication reminiscent of SSH",
      "Cross-platform client applications for desktops and mobile devices"
    ],
    uses: "Tunnel internet and LAN network traffic securely with maximum throughput and minimal battery consumption.",
    tags: ["vpn", "wireguard", "networking", "cryptography", "security", "privacy", "kernel"],
    logoSource: "https://raw.githubusercontent.com/WireGuard/wireguard-android/master/ui/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [],
    download: "https://www.wireguard.com/install/",
    source: "https://git.zx2c4.com/wireguard-tools",
    website: "https://www.wireguard.com",
    docs: "https://www.wireguard.com/quickstart/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install wireguard" },
      { label: "Fedora", command: "sudo dnf install wireguard-tools" },
      { label: "Arch Linux", command: "sudo pacman -S wireguard-tools" },
      { label: "Windows (winget)", command: "winget install WireGuard.WireGuard" },
      { label: "macOS (brew)", command: "brew install wireguard-tools" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=com.wireguard.android" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/com.wireguard.android/" }
    ],
    comparisonData: {
      columns: ["WireGuard", "OpenVPN"],
      rows: [
        { feature: "Modern cryptography (ChaCha20)", values: [true, false] },
        { feature: "Linux kernel implementation", values: [true, false] },
        { feature: "Codebase size", values: ["~4,000 lines", "~100,000 lines"] },
        { feature: "Instant roaming handshakes", values: [true, false] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Linux kernel 5.6+ (built-in) or WireGuard module\nWindows 7+, macOS 10.14+, Android 5.0+, or iOS 12.0+",
    maintainer: "organization",
    developer: "Jason A. Donenfeld / WireGuard Project",
    developerUrl: "https://www.wireguard.com",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "openvpn",
    name: "OpenVPN",
    alternative: "WireGuard, IPsec, Cisco AnyConnect, FortiClient",
    category: "Network",
    subcategory: "VPN",
    license: "GPL-2.0",
    version: "2.6.12",
    fileSize: "18 MB",
    description: "Battle-tested, enterprise-grade open-source SSL/TLS VPN daemon for secure site-to-site networking.",
    fullDescription: "OpenVPN is an open-source virtual private network application that creates secure point-to-point or site-to-site routed and bridged network configurations. Built on the OpenSSL library, OpenVPN implements robust SSL/TLS key exchange, bidirectional certificate authentication, and UDP/TCP protocol tunneling. It can traverse NATs and restrictive corporate firewalls by running over standard TCP/UDP ports, and is widely deployed in cloud infrastructure and enterprise remote access setups.",
    features: [
      "TLS-based mutual cryptographic authentication and key negotiation",
      "Flexible tunneling over TCP or UDP ports (including port 443)",
      "Comprehensive routing, NAT traversal, and bridging options",
      "Hardware token, smartcard, and multi-factor authentication (MFA) support",
      "Granular access control policies via client configuration directives",
      "Broadest compatibility across enterprise routers and operating systems"
    ],
    uses: "Establish secure corporate remote access, site-to-site tunnels, and bypass restrictive firewalls.",
    tags: ["vpn", "ssl-vpn", "networking", "security", "firewall-traversal", "enterprise", "openvpn"],
    logoSource: "https://raw.githubusercontent.com/schwabe/ics-openvpn/master/main/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [],
    download: "https://openvpn.net/community-downloads/",
    source: "https://github.com/OpenVPN/openvpn",
    website: "https://openvpn.net",
    docs: "https://openvpn.net/community-resources/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install openvpn" },
      { label: "Fedora", command: "sudo dnf install openvpn" },
      { label: "Arch Linux", command: "sudo pacman -S openvpn" },
      { label: "Windows (winget)", command: "winget install OpenVPNTechnologies.OpenVPN" },
      { label: "macOS (brew)", command: "brew install openvpn" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/de.blinkt.openvpn/" }
    ],
    comparisonData: {
      columns: ["OpenVPN", "WireGuard"],
      rows: [
        { feature: "TCP tunneling (bypasses blocks)", values: [true, false] },
        { feature: "Certificate / PKI infrastructure", values: [true, false] },
        { feature: "MFA & smartcard support", values: [true, false] },
        { feature: "High-speed kernel module", values: [false, true] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS, BSD, Android, or iOS\nTUN/TAP virtual network device driver support",
    maintainer: "organization",
    developer: "OpenVPN Inc.",
    developerUrl: "https://github.com/OpenVPN",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    alternative: "Streamlabs, Camtasia, XSplit, Bandicam, vMix",
    category: "Video",
    subcategory: "Screen Recording",
    license: "GPL-2.0",
    version: "30.2.3",
    fileSize: "130 MB",
    description: "Industry-standard open-source software for video recording and live streaming.",
    fullDescription: "OBS Studio (Open Broadcaster Software) is the world's leading open-source suite for live video streaming and desktop screen recording. OBS equips creators, gamers, educators, and broadcasters with high-performance real-time video/audio capturing and mixing. It enables users to compose dynamic scenes from diverse media sources (webcams, capture cards, desktop windows, browser sources, images, audio inputs). It includes an intuitive audio mixer with VST plugin support, hardware encoding (NVENC, QuickSync, AMF, AV1), and streaming integration with Twitch, YouTube, Kick, and custom RTMP/SRT servers.",
    features: [
      "Real-time video/audio capturing and mixing with unlimited scenes",
      "Hardware-accelerated encoding supporting NVENC, QuickSync, AMF, and AV1",
      "Intuitive audio mixer with per-source noise suppression, gates, and VST plugins",
      "Modular Dock user interface for customized workspace arrangement",
      "Studio Mode for previewing scenes and transitions before pushing live",
      "Direct integration with Twitch, YouTube, Kick, Facebook Live, and custom RTMP/SRT"
    ],
    uses: "Stream live gameplay, record tutorials, produce podcasts, and broadcast multi-camera productions.",
    tags: ["streaming", "screen-recorder", "obs", "broadcasting", "video-production", "twitch", "youtube"],
    logoSource: "https://raw.githubusercontent.com/obsproject/obs-studio/master/frontend/cmake/linux/icons/obs-logo-512.png",
    screenshotSources: [],
    download: "https://obsproject.com/download",
    source: "https://github.com/obsproject/obs-studio",
    website: "https://obsproject.com",
    docs: "https://obsproject.com/wiki/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu (PPA)", command: "sudo add-apt-repository ppa:obsproject/obs-studio && sudo apt install obs-studio" },
      { label: "Flathub (Linux)", command: "flatpak install flathub com.obsproject.Studio" },
      { label: "Windows (winget)", command: "winget install OBSProject.OBSStudio" },
      { label: "macOS (brew)", command: "brew install --cask obs" },
      { label: "Arch Linux", command: "sudo pacman -S obs-studio" }
    ],
    comparisonData: {
      columns: ["OBS Studio", "Streamlabs Desktop"],
      rows: [
        { feature: "Completely free with no paywalls", values: [true, false] },
        { feature: "No proprietary account required", values: [true, false] },
        { feature: "Lightweight resource footprint", values: [true, false] },
        { feature: "Hardware AV1 / NVENC encoding", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "OpenGL 3.3 compatible GPU (DirectX 11 on Windows)\nIntel Core i5 or AMD Ryzen quad-core processor\n4 GB RAM minimum",
    maintainer: "organization",
    developer: "OBS Project",
    developerUrl: "https://github.com/obsproject",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "krita",
    name: "Krita",
    alternative: "Adobe Photoshop, Corel Painter, Clip Studio Paint, Procreate",
    category: "Graphics & Design",
    subcategory: "Image Editors",
    license: "GPL-3.0",
    version: "5.2.6",
    fileSize: "190 MB",
    description: "Professional, free and open-source painting and 2D animation studio designed by artists.",
    fullDescription: "Krita is a professional free and open-source digital painting, illustration, and 2D frame-by-frame animation software developed by the KDE community. Tailored for concept artists, illustrators, comic creators, and matte painters, Krita delivers over 100 professionally crafted brush engines with brush stabilization, seamless pattern textures, full color management (CMYK, RGB, Lab), non-destructive layer masks, vector drawing tools, and PSD file compatibility.",
    features: [
      "Over 100 professionally designed brush engines with unique stabilizers",
      "Frame-by-frame 2D animation timeline with audio track scrubbing",
      "Full color management supporting CMYK, linear RGB, and HDR color spaces",
      "Wrap-around canvas mode for creating seamless repeating textures",
      "Non-destructive layer masks, clone layers, and filter effects",
      "Native PSD file import and export support"
    ],
    uses: "Create digital concept art, comics, illustrations, matte paintings, and hand-drawn 2D animations.",
    tags: ["digital-art", "painting", "illustration", "animation", "cmyk", "graphics", "photoshop-alternative"],
    logoSource: "https://raw.githubusercontent.com/KDE/krita/master/krita/pics/branding/default/512-apps-krita.png",
    screenshotSources: [],
    download: "https://krita.org/en/download/",
    source: "https://invent.kde.org/graphics/krita",
    website: "https://krita.org",
    docs: "https://docs.krita.org/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub org.kde.krita" },
      { label: "Ubuntu / Debian", command: "sudo apt install krita" },
      { label: "Windows (winget)", command: "winget install KDE.Krita" },
      { label: "macOS (brew)", command: "brew install --cask krita" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=org.krita" }
    ],
    comparisonData: {
      columns: ["Krita", "Adobe Photoshop"],
      rows: [
        { feature: "No monthly subscription fee", values: [true, false] },
        { feature: "Dedicated digital brush stabilizers", values: [true, false] },
        { feature: "CMYK & HDR color support", values: [true, true] },
        { feature: "Seamless texture wrap-around", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "64-bit OS: Windows 10/11, macOS 10.15+, Linux, or Android tablet\nOpenGL 3.0 compatible graphics card\n4 GB RAM (8 GB+ recommended)",
    maintainer: "organization",
    developer: "Krita Foundation / KDE",
    developerUrl: "https://krita.org",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "godot-engine",
    name: "Godot Engine",
    alternative: "Unity, Unreal Engine, GameMaker, Cocos2d",
    category: "Games",
    subcategory: "Game Development",
    license: "MIT",
    version: "4.3.0",
    fileSize: "65 MB",
    description: "Feature-packed, multi-platform 2D and 3D game engine with node-based scene architecture.",
    fullDescription: "Godot Engine is a free, all-in-one cross-platform game development engine licensed under the MIT license. Godot provides a unified set of tools so you can focus on building 2D and 3D games without reinventing the wheel. It features an intuitive node-and-scene hierarchical architecture, a lightweight built-in scripting language (GDScript), first-class C# support, Vulkan and OpenGL renderers, visual shaders, physics engines, and one-click export to Windows, macOS, Linux, Android, iOS, and WebAssembly.",
    features: [
      "True dedicated 2D graphics engine alongside modern 3D Vulkan renderer",
      "Intuitive node and scene hierarchy with composition over inheritance",
      "Python-like GDScript and C# (.NET) programming support",
      "Instant engine startup with tiny standalone executable footprint",
      "One-click multi-platform deployment (PC, Mobile, Web, Consoles)",
      "Completely free with zero royalty cuts, license fees, or telemetry"
    ],
    uses: "Develop indie 2D and 3D video games, interactive simulations, and cross-platform graphical applications.",
    tags: ["game-engine", "gamedev", "2d", "3d", "gdscript", "vulkan", "mit-license"],
    logoSource: "https://raw.githubusercontent.com/godotengine/godot/master/editor/icons/Godot.svg",
    screenshotSources: [
      "https://raw.githubusercontent.com/godotengine/godot/master/main/splash.png"
    ],
    download: "https://godotengine.org/download/",
    source: "https://github.com/godotengine/godot",
    website: "https://godotengine.org",
    docs: "https://docs.godotengine.org/",
    youtube: "",
    installMethods: [
      { label: "Steam", command: "https://store.steampowered.com/app/404790/Godot_Engine/" },
      { label: "Flathub (Linux)", command: "flatpak install flathub org.godotengine.Godot" },
      { label: "Windows (winget)", command: "winget install GodotEngine.GodotEngine" },
      { label: "macOS (brew)", command: "brew install --cask godot" },
      { label: "Direct Download", command: "https://godotengine.org/download/" }
    ],
    comparisonData: {
      columns: ["Godot Engine", "Unity"],
      rows: [
        { feature: "Zero revenue royalties or fees", values: [true, false] },
        { feature: "No runtime splash screen restrictions", values: [true, false] },
        { feature: "Dedicated 2D pixel-perfect pipeline", values: [true, false] },
        { feature: "Lightweight editor (<100 MB)", values: [true, false] },
        { feature: "Open Source (MIT)", values: [true, false] }
      ]
    },
    systemRequirements: "Vulkan 1.0 or OpenGL 3.3 compatible GPU\nDual-core x86_64 or ARM64 processor\n4 GB RAM minimum",
    maintainer: "organization",
    developer: "Godot Foundation",
    developerUrl: "https://github.com/godotengine",
    platforms: ["Linux", "Windows", "macOS", "Android", "Web"]
  },
  {
    id: "freecad",
    name: "FreeCAD",
    alternative: "AutoCAD, SolidWorks, Autodesk Fusion 360, Rhino 3D",
    category: "Graphics & Design",
    subcategory: "3D Modeling",
    license: "LGPL-3.0",
    version: "0.21.2",
    fileSize: "220 MB",
    description: "Parametric 3D computer-aided design (CAD) modeler for mechanical engineering and architecture.",
    fullDescription: "FreeCAD is an open-source parametric 3D CAD modeler primarily designed to model real-life objects of any size. Parametric modeling allows you to easily modify your design by going back into your model history and changing parameters. FreeCAD offers specialized workbenches for Part Design, Sketcher, Architectural BIM, CNC machining (Path/CAM), Finite Element Analysis (FEM), and technical 2D drafting (TechDraw). It supports STEP, IGES, STL, SVG, DXF, OBJ, and IFC open file standards.",
    features: [
      "Parametric history-based feature modeling engine",
      "Modular workbenches: Part Design, Sketcher, BIM/Arch, CAM/CNC, and FEM",
      "TechDraw workbench for producing standard engineering 2D blueprints",
      "Full Python API allowing automation, scripting, and custom workbenches",
      "Comprehensive standard CAD format import/export: STEP, IGES, STL, DXF, IFC",
      "Finite Element Analysis simulation with CalculiX integration"
    ],
    uses: "Design mechanical parts, 3D printing models, architectural structures, and CNC manufacturing toolpaths.",
    tags: ["cad", "3d-modeling", "parametric", "engineering", "3d-printing", "bim", "architecture"],
    logoSource: "https://raw.githubusercontent.com/FreeCAD/FreeCAD/main/src/Gui/Icons/freecad.svg",
    screenshotSources: [],
    download: "https://www.freecad.org/downloads.php",
    source: "https://github.com/FreeCAD/FreeCAD",
    website: "https://www.freecad.org",
    docs: "https://wiki.freecad.org/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub org.freecadweb.FreeCAD" },
      { label: "Ubuntu (PPA)", command: "sudo add-apt-repository ppa:freecad-maintainers/freecad-stable && sudo apt install freecad" },
      { label: "Windows (winget)", command: "winget install FreeCAD.FreeCAD" },
      { label: "macOS (brew)", command: "brew install --cask freecad" }
    ],
    comparisonData: {
      columns: ["FreeCAD", "Autodesk Fusion 360"],
      rows: [
        { feature: "No cloud lock-in / 100% offline", values: [true, false] },
        { feature: "No commercial licensing restrictions", values: [true, false] },
        { feature: "Parametric solid modeling", values: [true, true] },
        { feature: "Integrated CAM/CNC workbench", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "64-bit OS (Windows 10/11, macOS 11+, or Linux)\nOpenGL 2.0+ compliant graphics adapter\n8 GB RAM (16 GB recommended)",
    maintainer: "organization",
    developer: "FreeCAD Community",
    developerUrl: "https://github.com/FreeCAD",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "kicad",
    name: "KiCad",
    alternative: "Altium Designer, Autodesk EAGLE, Proteus, OrCAD",
    category: "Education",
    subcategory: "Science",
    license: "GPL-3.0",
    version: "8.0.6",
    fileSize: "280 MB",
    description: "Professional cross-platform electronic design automation (EDA) suite for schematic capture and PCB layout.",
    fullDescription: "KiCad is an open-source electronics design automation (EDA) software suite for schematic capture and printed circuit board (PCB) design. KiCad provides an integrated workflow from concept to manufacturing files: the Eeschema schematic editor with electrical rule checking, the Pcbnew board layout editor with up to 32 copper layers and push-and-shove interactive routing, an ultra-realistic 3D board raytracer, and Gerber/Drill file generation for fabrication.",
    features: [
      "Schematic capture editor with hierarchical sheets and electrical rule verification",
      "High-speed PCB layout editor with push-and-shove interactive differential routing",
      "Built-in 3D board viewer with realistic raytracing rendering",
      "Extensive official component library and 3D footprint models",
      "Integrated SPICE circuit simulation using ngspice",
      "Production-ready export to Gerber (RS-274X), Excellon drill, and IPC-2581 standards"
    ],
    uses: "Capture electronic schematics, simulate analog/digital circuits, and route multi-layer PCBs for manufacturing.",
    tags: ["eda", "pcb-design", "electronics", "schematics", "circuit-simulation", "hardware"],
    logoSource: "https://raw.githubusercontent.com/KiCad/kicad-source-mirror/master/resources/bitmaps_png/icons/icon_kicad.png",
    screenshotSources: [],
    download: "https://www.kicad.org/download/",
    source: "https://gitlab.com/kicad/code/kicad",
    website: "https://www.kicad.org",
    docs: "https://docs.kicad.org/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu (PPA)", command: "sudo add-apt-repository ppa:kicad/kicad-8.0-releases && sudo apt install kicad" },
      { label: "Flathub (Linux)", command: "flatpak install flathub org.kicad.KiCad" },
      { label: "Windows (winget)", command: "winget install KiCad.KiCad" },
      { label: "macOS (brew)", command: "brew install --cask kicad" },
      { label: "Arch Linux", command: "sudo pacman -S kicad kicad-packages3d" }
    ],
    comparisonData: {
      columns: ["KiCad", "Autodesk EAGLE"],
      rows: [
        { feature: "No board area or layer limitations", values: [true, false] },
        { feature: "No subscription or cloud tie-in", values: [true, false] },
        { feature: "Built-in 3D board inspection", values: [true, true] },
        { feature: "SPICE circuit simulation", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11, macOS 10.15+, or modern Linux\nOpenGL 2.1 capable hardware (OpenGL 3.3+ recommended)\n8 GB RAM",
    maintainer: "organization",
    developer: "KiCad Development Team",
    developerUrl: "https://gitlab.com/kicad",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "qgis",
    name: "QGIS",
    alternative: "ArcGIS, MapInfo Pro, Google Earth Pro, Global Mapper",
    category: "Education",
    subcategory: "Science",
    license: "GPL-2.0",
    version: "3.38.3",
    fileSize: "350 MB",
    description: "Professional, free and open-source Geographic Information System (GIS) for spatial analysis and map creation.",
    fullDescription: "QGIS is a free, open-source Geographic Information System that enables viewing, editing, managing, and analyzing geospatial data. Used globally by urban planners, environmental scientists, cartographers, and governments, QGIS supports vector and raster data formats (Shapefile, GeoPackage, PostGIS, GeoTIFF, KML, NetCDF). It offers geoprocessing algorithms, 3D map views, temporal animation, cartographic print layouts, and an extensive ecosystem of Python plugins.",
    features: [
      "Advanced vector and raster data visualization, styling, and symbology",
      "Spatial geoprocessing algorithms via Processing toolbox (GDAL, GRASS, SAGA)",
      "Database integration with PostGIS, SpatiaLite, Oracle Spatial, and PostgreSQL",
      "Print Layout compositor for publishing high-resolution publication maps",
      "3D map canvas and temporal data animation controllers",
      "Extensible Python API (PyQGIS) with hundreds of community plugins"
    ],
    uses: "Analyze spatial data, create publication-ready maps, and execute complex geospatial algorithms for research and planning.",
    tags: ["gis", "cartography", "spatial-analysis", "geospatial", "maps", "postgis", "remote-sensing"],
    logoSource: "https://raw.githubusercontent.com/qgis/QGIS/master/images/icons/qgis-icon-512x512.png",
    screenshotSources: [],
    download: "https://qgis.org/download/",
    source: "https://github.com/qgis/QGIS",
    website: "https://qgis.org",
    docs: "https://docs.qgis.org/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install qgis qgis-plugin-grass" },
      { label: "Flathub (Linux)", command: "flatpak install flathub org.qgis.qgis" },
      { label: "Windows (winget)", command: "winget install OSGeo.QGIS" },
      { label: "macOS (brew)", command: "brew install --cask qgis" },
      { label: "Fedora", command: "sudo dnf install qgis" }
    ],
    comparisonData: {
      columns: ["QGIS", "ArcGIS Desktop"],
      rows: [
        { feature: "No expensive enterprise licensing", values: [true, false] },
        { feature: "Runs natively on Linux, Mac, & Windows", values: [true, false] },
        { feature: "Full PostGIS / GeoPackage support", values: [true, true] },
        { feature: "PyQGIS scripting & automation", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11, macOS 11+, or modern Linux distribution\n8 GB RAM minimum (16 GB recommended for large datasets)\nOpenGL support",
    maintainer: "organization",
    developer: "QGIS Development Team",
    developerUrl: "https://github.com/qgis",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  }
];
