module.exports = [
  {
    id: "azahar",
    name: "Azahar",
    alternative: "Citra, Panda3DS, RetroArch Citra Core",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-2.0-or-later",
    version: "2104",
    fileSize: "32 MB",
    description: "Open-source Nintendo 3DS emulator continuing the Citra legacy with Vulkan rendering and stereo 3D.",
    fullDescription: "Azahar is an open-source, community-driven Nintendo 3DS emulator engineered to preserve the legacy of Citra. Supporting hundreds of commercial 3DS titles, Azahar features high-resolution stereoscopic 3D rendering, custom texture pack loading, custom post-processing shaders, dual-screen layout customization, gyroscope motion emulation, and Vulkan hardware acceleration on desktop and Android.",
    features: [
      "High-compatibility emulation of Nintendo 3DS commercial titles and homebrew applications",
      "Internal resolution upscaling up to 10x (4K+) with texture filtering and custom HD packs",
      "Modern Vulkan and OpenGL graphics backends delivering high framerate stability",
      "Flexible dual-screen layouts: side-by-side, top-bottom, single-screen, and touch rotation",
      "Integrated motion controls: emulates 3DS accelerometer and gyroscope via mouse or gamepad",
      "Cross-platform support across Linux, Windows, macOS, and Android devices"
    ],
    uses: "Play and preserve Nintendo 3DS game backups with crisp modern upscaling on PC and Android.",
    tags: ["emulator", "3ds", "nintendo", "citra-fork", "vulkan", "azahar"],
    logoSource: "https://raw.githubusercontent.com/azahar-emu/azahar/master/dist/azahar.svg",
    screenshotSources: [],
    download: "https://azahar-emu.org/download/",
    source: "https://github.com/azahar-emu/azahar",
    website: "https://azahar-emu.org/",
    docs: "https://azahar-emu.org/wiki/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.azahar_emu.azahar" },
      { label: "Windows (winget)", command: "winget install AzaharEmu.Azahar" },
      { label: "Android APK", command: "https://github.com/azahar-emu/azahar/releases/latest" }
    ],
    comparisonData: {
      columns: ["Azahar", "Original 3DS Hardware"],
      rows: [
        { feature: "Up to 4K internal resolution upscaling", values: [true, false] },
        { feature: "Custom community HD texture pack loading", values: [true, false] },
        { feature: "Vulkan graphics hardware acceleration", values: [true, false] },
        { feature: "Save states and frame rate unlocking", values: [true, false] },
        { feature: "100% Free and Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS, Android)\nx86-64 or ARM64 CPU with single-core performance\n4 GB RAM minimum\nOpenGL 4.3 or Vulkan 1.1 compatible graphics adapter",
    maintainer: "community",
    developer: "Azahar Emulator Project",
    developerUrl: "https://github.com/azahar-emu",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "rpcs3",
    name: "RPCS3",
    alternative: "Nucleus, Spine, RetroArch PS3 Core",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-2.0",
    version: "0.0.33",
    fileSize: "45 MB",
    description: "World-renowned open-source Sony PlayStation 3 (PS3) emulator delivering 4K 60FPS gameplay.",
    fullDescription: "RPCS3 is an experimental, open-source Sony PlayStation 3 emulator and debugger written in C++ for Linux, Windows, macOS, and FreeBSD. Successfully emulating the complex Cell Broadband Engine processor and RSX 'Reality Synthesizer' GPU, RPCS3 can play over 70% of the entire commercial PS3 catalog. It features internal resolution scaling up to 10K, anisotropic filtering, 60/120 FPS game patches, DualShock/DualSense motion control, and Netplay through RPCN.",
    features: [
      "Exceptional compatibility: over 70% of the 3,500+ PS3 game library marked fully playable",
      "Ultra-high resolution scaling: render native PS3 titles up to 4K, 8K, and beyond",
      "Performance enhancements: community frame rate unlock patches (60 FPS / 120 FPS)",
      "High-performance Vulkan backend utilizing multi-threaded CPU compilation (LLVM)",
      "Built-in RPCN online matchmaking network to play online PS3 multiplayer titles",
      "Native support for Sony DualShock 3, DualShock 4, and DualSense controllers with gyro"
    ],
    uses: "Preserve and play PlayStation 3 classics on modern PC hardware with high resolution and high frame rates.",
    tags: ["emulator", "ps3", "playstation", "cell-broadband", "vulkan", "rpcs3"],
    logoSource: "https://rpcs3.net/favicon.ico",
    screenshotSources: [],
    download: "https://rpcs3.net/download",
    source: "https://github.com/RPCS3/rpcs3",
    website: "https://rpcs3.net/",
    docs: "https://rpcs3.net/quickstart",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.rpcs3.RPCS3" },
      { label: "Windows (winget)", command: "winget install RPCS3.RPCS3" },
      { label: "AppImage", command: "https://rpcs3.net/download" }
    ],
    comparisonData: {
      columns: ["RPCS3", "Original PS3 Hardware"],
      rows: [
        { feature: "Internal 4K resolution scaling with anti-aliasing", values: [true, false] },
        { feature: "60 FPS community game patches", values: [true, false] },
        { feature: "Save states and fast disc drive loading speeds", values: [true, false] },
        { feature: "Free online RPCN multiplayer network", values: [true, true] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\nx86-64 CPU with AVX2/AVX-512 support (6 cores / 12 threads recommended)\n8 GB RAM minimum (16 GB recommended)\nVulkan-compatible GPU (AMD RDNA/Polaris, NVIDIA Turing/Ampere, Intel Arc)\nOfficial PS3 firmware (.PUP) required",
    maintainer: "community",
    developer: "RPCS3 Team (DH, AlexAltea, Nekotekina, kd-11 & Contributors)",
    developerUrl: "https://github.com/RPCS3",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "ppsspp",
    name: "PPSSPP",
    alternative: "JPCSP, RetroArch PPSSPP Core",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-2.0-or-later",
    version: "1.18.1",
    fileSize: "35 MB",
    description: "Fast, highly portable Sony PlayStation Portable (PSP) emulator running games in HD resolution.",
    fullDescription: "PPSSPP is the premier open-source Sony PlayStation Portable (PSP) emulator created by Henrik Rydgård. Renowned for its extreme efficiency and portability, PPSSPP runs commercial PSP games at multiple times their original resolution on desktop and mobile devices. It features texture upscaling, post-processing shaders, anisotropic filtering, save states, online multiplayer WLAN ad-hoc netplay, and customizable touch controls.",
    features: [
      "Plays almost the entire PSP game library in full high-definition (1080p, 4K, 8K)",
      "High-performance renderers: Vulkan, Direct3D 11, OpenGL, and Metal on macOS/iOS",
      "Texture replacement and texture upscaling using xBRZ and BICUBIC filters",
      "Built-in Ad-Hoc multiplayer server for online wireless PSP multiplayer matches",
      "Save state capability with automatic save backups and rewind functionality",
      "Full gamepad button remapping, analog stick sensitivity tuning, and motion tilt support"
    ],
    uses: "Play and preserve Sony PSP games in high resolution across Android, PC, and Mac devices.",
    tags: ["emulator", "psp", "playstation-portable", "hd-upscaling", "vulkan", "ppsspp"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/d/dc/PPSSPP_logo.svg",
    screenshotSources: [],
    download: "https://www.ppsspp.org/download/",
    source: "https://github.com/hrydgard/ppsspp",
    website: "https://www.ppsspp.org/",
    docs: "https://www.ppsspp.org/guide/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.ppsspp.PPSSPP" },
      { label: "Ubuntu / Debian", command: "sudo apt install ppsspp" },
      { label: "Windows (winget)", command: "winget install HenrikRydgard.PPSSPP" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp" }
    ],
    comparisonData: {
      columns: ["PPSSPP", "Original PSP Console"],
      rows: [
        { feature: "Up to 16x internal resolution scaling (4K)", values: [true, false] },
        { feature: "xBRZ texture upscaling filters", values: [true, false] },
        { feature: "Save states and fast-forward speed toggle", values: [true, false] },
        { feature: "Cross-platform mobile and PC multiplayer", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android, iOS)\n1 GHz CPU, 1 GB RAM\nOpenGL 2.0, Vulkan 1.0, or Direct3D 11 compatible graphics",
    maintainer: "individual",
    developer: "Henrik Rydgård (hrydgard)",
    developerUrl: "https://github.com/hrydgard",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "mame",
    name: "MAME",
    alternative: "FinalBurn Neo, RetroArch Arcade, Kawaks, Nebula",
    category: "Games",
    subcategory: "Emulators",
    license: "BSD-3-Clause",
    version: "0.271",
    fileSize: "90 MB",
    description: "Legendary multi-purpose emulation framework preserving decades of arcade and vintage computer history.",
    fullDescription: "MAME (Multiple Arcade Machine Emulator) is a celebrated open-source hardware emulation system dedicated to digital preservation. By accurately reproducing the hardware behavior of thousands of historic arcade boards, vintage home computers, calculators, and early video game consoles, MAME prevents classic computing history from being lost forever. While primarily a preservation project, it provides an authentic arcade gaming experience.",
    features: [
      "Cycle-accurate hardware emulation for tens of thousands of arcade and computer systems",
      "Preserves historic arcade machines, synthesizers, vintage microcomputers, and consoles",
      "Authentic CRT simulation: scanlines, phosphor glow, curvature, and shadow masks (BGFX shaders)",
      "High-precision multi-controller input: trackballs, steering wheels, light guns, and spinner dials",
      "Integrated Lua scripting engine for automated test suites, cheats, and memory analysis",
      "Strict open-source licensing (BSD-3-Clause core) compliant with FSF and OSI standards"
    ],
    uses: "Preserve, study, and play historic arcade video games and vintage computing systems with cycle-level accuracy.",
    tags: ["arcade", "emulator", "preservation", "retro-gaming", "mame", "history"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/6/6f/NewMAME.png",
    screenshotSources: [],
    download: "https://www.mamedev.org/release.php",
    source: "https://github.com/mamedev/mame",
    website: "https://www.mamedev.org/",
    docs: "https://docs.mamedev.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.mamedev.MAME" },
      { label: "Ubuntu / Debian", command: "sudo apt install mame" },
      { label: "Windows (winget)", command: "winget install MAMEDev.MAME" },
      { label: "macOS (brew)", command: "brew install mame" }
    ],
    comparisonData: {
      columns: ["MAME", "FinalBurn Neo"],
      rows: [
        { feature: "Full cycle-accurate digital hardware preservation focus", values: [true, false] },
        { feature: "Emulates vintage computers, synths, and arcade boards", values: [true, false] },
        { feature: "BGFX CRT shader and vector monitor effects", values: [true, true] },
        { feature: "Over 35,000 preserved system ROM sets", values: [true, false] },
        { feature: "OSI-approved Open Source license", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n2 GHz CPU or faster (higher clock speed recommended for 90s 3D arcade boards)\n2 GB RAM\nDirect3D or OpenGL graphics with shader support\nSystem BIOS/ROM dumps required",
    maintainer: "community",
    developer: "MAME Development Team",
    developerUrl: "https://github.com/mamedev",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "gdevelop",
    name: "GDevelop",
    alternative: "Construct 3, GameMaker, Stencyl, Scratch, Clickteam Fusion",
    category: "Development",
    subcategory: "Game Development",
    license: "MIT",
    version: "5.4.216",
    fileSize: "160 MB",
    description: "Visual, no-code 2D and 3D game engine powered by an intuitive event-based visual programming system.",
    fullDescription: "GDevelop is a modern, open-source 2D and 3D game creation engine designed for game designers, indie developers, and educators. GDevelop eliminates the steep learning curve of syntax-heavy coding by using an intuitive, human-readable event-sheet logic system. Developers can build platformers, RPGs, puzzle games, and top-down shooters with integrated physics, particle effects, dialogue trees, and one-click publishing to Steam, itch.io, Google Play, iOS, and the web.",
    features: [
      "Intuitive event-based visual logic: create complex game mechanics without writing code",
      "Full support for both 2D sprite games and modern 3D meshes with real-time lighting",
      "Pre-built behavior components: platformer characters, top-down physics, and pathfinding",
      "Integrated asset store with thousands of free sprites, 3D models, sound effects, and music",
      "One-click multi-platform export to Windows, macOS, Linux, Android, iOS, and Web (HTML5)",
      "Optional JavaScript scripting for advanced developers wanting to write custom logic extensions"
    ],
    uses: "Create and publish 2D and 3D games quickly without needing prior computer programming experience.",
    tags: ["game-engine", "no-code", "visual-scripting", "gdevelop", "indie-games", "html5-games"],
    logoSource: "https://gdevelop.io/favicons/favicon.ico",
    screenshotSources: [],
    download: "https://gdevelop.io/download",
    source: "https://github.com/4ian/GDevelop",
    website: "https://gdevelop.io/",
    docs: "https://wiki.gdevelop.io/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.gdevelop.ide" },
      { label: "Windows (winget)", command: "winget install GDevelop.GDevelop" },
      { label: "macOS (brew)", command: "brew install --cask gdevelop" },
      { label: "Web Editor", command: "https://editor.gdevelop.io" }
    ],
    comparisonData: {
      columns: ["GDevelop", "Construct 3"],
      rows: [
        { feature: "100% Free and Open Source (MIT)", values: [true, false] },
        { feature: "No recurring monthly subscription paywall", values: [true, false] },
        { feature: "Unlimited events and full commercial game rights", values: [true, false] },
        { feature: "Native offline desktop application", values: [true, false] },
        { feature: "One-click cross-platform export", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS, Web)\n2 GHz CPU, 4 GB RAM\nWebGL 2.0 or OpenGL 3.3 compatible graphics adapter",
    maintainer: "community",
    developer: "Florian Rival (4ian) & GDevelop Community",
    developerUrl: "https://github.com/4ian",
    platforms: ["Linux", "Windows", "macOS", "Web"]
  },
  {
    id: "bevy",
    name: "Bevy",
    alternative: "Unreal Engine, Unity, Godot Engine, Amethyst, Raylib",
    category: "Development",
    subcategory: "Game Development",
    license: "MIT",
    version: "0.14.2",
    fileSize: "",
    description: "Refreshingly simple, data-driven 2D and 3D game engine built in Rust with ergonomic ECS architecture.",
    fullDescription: "Bevy is a modern, open-source data-driven game engine built from the ground up in Rust. Designed around a high-performance Entity Component System (ECS) architecture, Bevy combines memory safety and concurrency with an ergonomic, declarative API. Featuring a fast PBR renderer, 2D sprite pipeline, UI layout engine (Flexbox), cross-platform asset loader, and hot-reloading compilation, Bevy empowers developers to build performant games and interactive simulations.",
    features: [
      "Ultra-ergonomic, memory-safe Entity Component System (ECS) written in idiomatic Rust",
      "Modern 2D and 3D rendering pipeline with PBR materials, bloom, shadows, and glTF loading",
      "Fast compilation speeds with dynamic linking and asset hot-reloading",
      "Flexbox UI layout engine (powered by Taffy) for building complex in-game user interfaces",
      "Multi-threaded system execution automatically parallelizing game logic across CPU cores",
      "Cross-platform compilation targeting Windows, macOS, Linux, WebAssembly (Wasm), and mobile"
    ],
    uses: "Engineer high-performance 2D and 3D games with memory safety and parallel ECS concurrency in Rust.",
    tags: ["rust", "game-engine", "ecs", "bevy", "gamedev", "rendering", "data-driven"],
    logoSource: "https://raw.githubusercontent.com/bevyengine/bevy/main/assets/branding/icon.png",
    screenshotSources: [],
    download: "https://bevyengine.org/learn/quick-start/getting-started/",
    source: "https://github.com/bevyengine/bevy",
    website: "https://bevyengine.org/",
    docs: "https://docs.rs/bevy/",
    youtube: "",
    installMethods: [
      { label: "Cargo (Rust)", command: "cargo add bevy" },
      { label: "CLI Setup", command: "cargo install bevy_cli" }
    ],
    comparisonData: {
      columns: ["Bevy", "Godot (Rust Bindings)"],
      rows: [
        { feature: "Native pure Rust implementation without C++ bindings", values: [true, false] },
        { feature: "Pure data-driven Entity Component System (ECS)", values: [true, false] },
        { feature: "Multi-threaded auto-parallelizing logic execution", values: [true, false] },
        { feature: "Dual licensed MIT / Apache-2.0", values: [true, false] },
        { feature: "Fast WebAssembly (Wasm) browser deployment", values: [true, true] }
      ]
    },
    systemRequirements: "Rust 1.79+ toolchain\nModern 64-bit OS (Linux, Windows 10/11, macOS)\nGPU supporting Vulkan, Metal, or DirectX 12",
    maintainer: "community",
    developer: "Bevy Engine Organization (Carter Anderson & Contributors)",
    developerUrl: "https://github.com/bevyengine",
    platforms: ["Linux", "Windows", "macOS", "Web"]
  },
  {
    id: "love2d",
    name: "LÖVE",
    alternative: "Pygame, Raylib, MonoGame, Cocos2d-x, Solar2D",
    category: "Development",
    subcategory: "Game Development",
    license: "Zlib",
    version: "11.5",
    fileSize: "15 MB",
    description: "Awesome 2D game framework that lets you build fast, cross-platform games using lightweight Lua scripting.",
    fullDescription: "LÖVE (also known as Love2D) is a lightweight, open-source 2D game framework designed to make game creation fast, accessible, and enjoyable using the Lua programming language. Providing a clean, simple API for 2D graphics rendering, audio synthesis, joystick input, font management, and Box2D physics simulation, LÖVE allows developers to prototype complete games in hours. Games package into simple `.love` zip archives deployable to Linux, Windows, macOS, Android, and iOS.",
    features: [
      "Lightweight, clean Lua scripting API providing high-speed 2D graphics rendering",
      "Integrated Box2D rigid body physics simulation with collision detection and joints",
      "Full audio playback supporting MP3, OGG, WAV, and real-time positional sound sources",
      "Hardware acceleration powered by OpenGL and OpenGL ES with custom GLSL shader support",
      "Instant distribution: zip game assets into a `.love` file for universal cross-platform execution",
      "Extensive ecosystem of community libraries for cameras, GUI, tilemaps, and state machines"
    ],
    uses: "Prototype and ship high-performance 2D indie games, game jam projects, and interactive art with Lua.",
    tags: ["lua", "game-framework", "love2d", "2d-games", "box2d", "indie-dev"],
    logoSource: "https://raw.githubusercontent.com/love2d/love/main/platform/unix/love.svg",
    screenshotSources: [],
    download: "https://love2d.org/",
    source: "https://github.com/love2d/love",
    website: "https://love2d.org/",
    docs: "https://love2d.org/wiki/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.love2d.Love" },
      { label: "Ubuntu / Debian", command: "sudo apt install love" },
      { label: "Windows (winget)", command: "winget install LOVE.LOVE" },
      { label: "macOS (brew)", command: "brew install love" }
    ],
    comparisonData: {
      columns: ["LÖVE", "Pygame"],
      rows: [
        { feature: "Native hardware-accelerated OpenGL / shader pipeline", values: [true, false] },
        { feature: "Built-in Box2D physics engine", values: [true, false] },
        { feature: "One-file universal `.love` game package distribution", values: [true, false] },
        { feature: "Extremely fast LuaJIT JIT-compiled execution speed", values: [true, false] },
        { feature: "Permissive Open Source license (Zlib)", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android, iOS)\n1 GHz CPU, 512 MB RAM\nOpenGL 2.1 or OpenGL ES 2.0 compatible graphics",
    maintainer: "community",
    developer: "LÖVE Development Team",
    developerUrl: "https://github.com/love2d",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "renpy",
    name: "Ren'Py",
    alternative: "Visual Novel Maker, TyranoBuilder, Twine, RPG Maker",
    category: "Development",
    subcategory: "Game Development",
    license: "MIT",
    version: "8.3.4",
    fileSize: "130 MB",
    description: "Industry-standard open-source visual novel engine combining accessible storytelling syntax with Python power.",
    fullDescription: "Ren'Py is the world's most popular open-source visual novel game engine, powering thousands of commercial and indie narrative games, interactive fiction, and life-simulation titles. Ren'Py uses an intuitive, human-readable script syntax that lets writers direct character dialogue, expressions, background music, transitions, and branching player choices effortlessly. For complex gameplay mechanics, full Python 3 integration is available.",
    features: [
      "Intuitive, writer-friendly screenplay scripting language for dialogue and branching narrative paths",
      "Full Python 3 integration allowing custom mini-games, inventory systems, and complex logic",
      "Complete out-of-the-box UI: dialogue history rollback, save/load menus, preferences, and auto-forward",
      "Screen Language system for crafting customizable user interfaces, HUDs, and title screens",
      "One-click multi-platform building targeting Windows, macOS, Linux, Android, iOS, and Web (HTML5)",
      "Comprehensive accessibility features: self-voicing speech synthesis, text magnification, and high contrast"
    ],
    uses: "Write, direct, and publish commercial narrative visual novels, interactive books, and dialogue-driven games.",
    tags: ["visual-novel", "interactive-fiction", "storytelling", "python", "gamedev", "renpy"],
    logoSource: "https://www.renpy.org/static/logo.png",
    screenshotSources: [],
    download: "https://www.renpy.org/latest.html",
    source: "https://github.com/renpy/renpy",
    website: "https://www.renpy.org/",
    docs: "https://www.renpy.org/doc/html/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.renpy.RenPy" },
      { label: "Windows (winget)", command: "winget install RenPy.RenPy" },
      { label: "Direct Download", command: "https://www.renpy.org/latest.html" }
    ],
    comparisonData: {
      columns: ["Ren'Py", "Visual Novel Maker"],
      rows: [
        { feature: "100% Free with zero royalties or revenue cuts", values: [true, false] },
        { feature: "Full Python 3 language extensibility", values: [true, false] },
        { feature: "Built-in dialogue rollback and accessibility self-voicing", values: [true, false] },
        { feature: "Open Source (MIT)", values: [true, false] },
        { feature: "Runs thousands of top Steam narrative games", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\n2 GHz CPU, 2 GB RAM\nOpenGL 2.0 or DirectX 11 compatible graphics",
    maintainer: "individual",
    developer: "Tom Rothamel (PyTom)",
    developerUrl: "https://github.com/renpy",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS", "Web"]
  },
  {
    id: "opentoonz",
    name: "OpenToonz",
    alternative: "Toon Boom Harmony, TVPaint, Adobe Animate, Moho",
    category: "Graphics & Design",
    subcategory: "Animation",
    license: "BSD-3-Clause",
    version: "1.7.1",
    fileSize: "85 MB",
    description: "Production-grade 2D animation software used by legendary studios including Studio Ghibli for cinematic animation.",
    fullDescription: "OpenToonz is a production-grade open-source 2D animation software suite based on 'Toonz', the software customized and utilized by Studio Ghibli to produce animated masterpieces like Princess Mononoke and Spirited Away. Released by Dwango as open-source software, OpenToonz provides an end-to-end paperless animation and digital ink-and-paint pipeline, featuring vector and raster scanning, skeletal peg rigging, automated inbetweening, node-based visual special effects (Dwango Effect plugins), and GTS scanning integration.",
    features: [
      "Complete 2D animation production pipeline: paper scanning, vector drawing, ink-and-paint, and compositing",
      "GTS scanner integration with automated linework cleanup, binarization, and color indexing",
      "Skeletal character rigging with inverse kinematics (IK) and plastic mesh deformations",
      "Node-based special effects schematic supporting blur, lighting, distortion, and particle systems",
      "Smooth vector line smoothing and vector palette recoloring with automatic style assignment",
      "Dynamic camera stand with multi-plane depth compositing and motion path animation"
    ],
    uses: "Create cinematic hand-drawn and digital 2D animated films, television series, and web animations.",
    tags: ["2d-animation", "studio-ghibli", "traditional-animation", "ink-and-paint", "compositing", "opentoonz"],
    logoSource: "https://opentoonz.github.io/e/img/favicon.ico",
    screenshotSources: [],
    download: "https://opentoonz.github.io/e/download/opentoonz.html",
    source: "https://github.com/opentoonz/opentoonz",
    website: "https://opentoonz.github.io/e/",
    docs: "https://opentoonz.readthedocs.io/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.github.OpenToonz" },
      { label: "Windows (winget)", command: "winget install Dwango.OpenToonz" },
      { label: "macOS (brew)", command: "brew install --cask opentoonz" }
    ],
    comparisonData: {
      columns: ["OpenToonz", "Toon Boom Harmony"],
      rows: [
        { feature: "Studio Ghibli customized production toolset", values: [true, false] },
        { feature: "No costly monthly recurring subscriptions", values: [true, false] },
        { feature: "Node-based visual special effects compositor", values: [true, true] },
        { feature: "Vector and raster ink-and-paint scanning", values: [true, true] },
        { feature: "Open Source (BSD-3-Clause)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS 10.14+)\nIntel/AMD Multi-core processor, 4 GB RAM (8 GB recommended)\nOpenGL 2.1 compatible graphics card\nWacom or compatible digital drawing tablet recommended",
    maintainer: "community",
    developer: "Dwango Co., Ltd. & OpenToonz Community",
    developerUrl: "https://github.com/opentoonz",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "synfig-studio",
    name: "Synfig Studio",
    alternative: "Adobe Animate, Moho, Toon Boom, After Effects",
    category: "Graphics & Design",
    subcategory: "Animation",
    license: "GPL-3.0",
    version: "1.5.1",
    fileSize: "115 MB",
    description: "Powerful vector-based 2D animation software eliminating frame-by-frame tweening through automated interpolation.",
    fullDescription: "Synfig Studio is an open-source 2D vector animation software suite designed to produce feature-film quality animation with fewer people and resources. By utilizing spatial and temporal vector interpolation, Synfig eliminates the tedious need to draw every individual inbetween frame by hand. It features a complete bone rigging system with skeleton deformation, advanced layer types (geometric, gradients, distortions, filters), mathematical linking parameters, and sound sync.",
    features: [
      "Vector tweening: transforms vector shapes smoothly across keyframes without drawing inbetweens",
      "Full bone rigging system: construct skeletal hierarchies and cut-out character puppets",
      "Skeleton deformation layer to bend and deform bitmap artwork organically along vector bones",
      "Over 50 advanced layer types including geometric primitives, gradients, blurs, and fractal distortions",
      "High Dynamic Range Imaging (HDRI) support with 32-bit floating point color precision",
      "Audio track synchronization allowing animators to time lip-sync and action beats accurately"
    ],
    uses: "Produce expressive 2D vector animations, commercial explainer videos, and cartoon series efficiently.",
    tags: ["2d-animation", "vector-animation", "tweening", "bone-rigging", "synfig", "cartoon"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/1/10/Synfig_logo.svg",
    screenshotSources: [],
    download: "https://www.synfig.org/download-stable/",
    source: "https://github.com/synfig/synfig",
    website: "https://www.synfig.org/",
    docs: "https://synfig-docs-dev.readthedocs.io/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.synfig.SynfigStudio" },
      { label: "Ubuntu / Debian", command: "sudo apt install synfigstudio" },
      { label: "Windows (winget)", command: "winget install Synfig.SynfigStudio" }
    ],
    comparisonData: {
      columns: ["Synfig Studio", "Adobe Animate"],
      rows: [
        { feature: "Automated vector morphing between arbitrary shapes", values: [true, false] },
        { feature: "Skeleton deformation of raster bitmap layers", values: [true, false] },
        { feature: "100% Free with zero subscription fees", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Native Linux, Windows, and macOS support", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\nDual-core CPU, 2 GB RAM (4 GB recommended)\nOpenGL compatible graphics adapter",
    maintainer: "community",
    developer: "Synfig Team & Robert Quattlebaum",
    developerUrl: "https://github.com/synfig",
    platforms: ["Linux", "Windows", "macOS"]
  }
];
