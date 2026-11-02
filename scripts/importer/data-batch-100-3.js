module.exports = [
  {
    id: "dungeon-crawl-stone-soup",
    name: "Dungeon Crawl Stone Soup",
    alternative: "NetHack, Angband, Caves of Qud, ADOM, Brogue",
    category: "Games",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "0.32.1",
    fileSize: "30 MB",
    description: "Deep, turn-based roguelike RPG of dungeon exploration, tactical combat, and magical mastery.",
    fullDescription: "Dungeon Crawl Stone Soup (DCSS) is an acclaimed open-source turn-based roguelike adventure game. Descending into a sprawling, perilous dungeon, players seek the mythical Orb of Zot through tactical positioning, diverse species/background archetypes, and devotion to an eclectic pantheon of deities. DCSS prioritizes tactical depth and strategic clarity over arcane spoilers, featuring both classic ASCII and full graphical 2D tile modes playable on desktop or via online web servers.",
    features: [
      "Dozens of distinct playable species and character classes with unique gameplay mechanics",
      "Dynamic divine pantheon: over 25 distinct gods granting unique tactical abilities and boons",
      "Permadeath roguelike mechanics emphasizing thoughtful tactical positioning and resource management",
      "Playable with vibrant graphical tiles or classic high-speed terminal ASCII characters",
      "Seamless online WebTiles server support enabling spectator streaming and community tournaments",
      "Extensive in-game item descriptions, threat indicators, and integrated auto-explore capabilities"
    ],
    uses: "Experience deep, unforgiving, tactical roguelike RPG adventures without paying for microtransactions or revives.",
    tags: ["roguelike", "rpg", "dungeon-crawler", "turn-based", "procedural", "dcss"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Dungeon_Crawl_Stone_Soup_logo.png",
    screenshotSources: [],
    download: "https://crawl.develz.org/download.htm",
    source: "https://github.com/crawl/crawl",
    website: "https://crawl.develz.org/",
    docs: "http://crawl.chaosforge.org/Crawl_Wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.develz.Crawl" },
      { label: "Ubuntu / Debian", command: "sudo apt install crawl-tiles" },
      { label: "Web Browser", command: "https://crawl.develz.org/play.htm" }
    ],
    comparisonData: {
      columns: ["Dungeon Crawl Stone Soup", "Caves of Qud"],
      rows: [
        { feature: "Full WebTiles browser gameplay with spectators", values: [true, false] },
        { feature: "Active community tournaments and shared scoring", values: [true, false] },
        { feature: "Over 25 customizable deity religions", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] },
        { feature: "Deep tactical procedural combat", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android, Web)\n1 GHz CPU, 512 MB RAM\nRuns smoothly in standard terminal or web browser",
    maintainer: "community",
    developer: "DCSS DevTeam",
    developerUrl: "https://github.com/crawl",
    platforms: ["Linux", "Windows", "macOS", "Android", "Web"]
  },
  {
    id: "cataclysm-dark-days-ahead",
    name: "Cataclysm: Dark Days Ahead",
    alternative: "Project Zomboid, Neo Scavenger, DayZ, State of Decay",
    category: "Games",
    subcategory: "General",
    license: "CC-BY-SA-3.0",
    version: "0.H",
    fileSize: "120 MB",
    description: "Post-apocalyptic roguelike survival simulator featuring unparalleled crafting, vehicle building, and emergent simulation.",
    fullDescription: "Cataclysm: Dark Days Ahead (CDDA) is a turn-based survival simulator set in a post-cataclysmic New England. Trapped in a harsh procedural world populated by zombies, cyborg monstrosities, Eldritch abominations, and rival survivors, players scavenge dead cities, fortify safehouses, install bionic augmentations, and engineer custom armored survival vehicles. Its emergent physical simulation models bodily temperature, hunger, nutrition, wound infection, and vehicle kinematics with unmatched granularity.",
    features: [
      "In-depth modular vehicle construction: build armored mobile RV bases from salvaged parts",
      "Extensive crafting and tailoring system covering thousands of realistic survival recipes",
      "Emergent simulation of bodily trauma, limb encumbrance, nutrition, and mutation trees",
      "Dynamic procedural world generation featuring cities, military bunkers, labs, and swamps",
      "Turn-based tactical combat with martial arts styles, firearms, and improvised weaponry",
      "Vibrant community with multiple built-in tilesets and complete soundpack support"
    ],
    uses: "Survive a rich, complex post-apocalyptic simulation where every physical decision and crafting choice matters.",
    tags: ["survival", "roguelike", "post-apocalypse", "crafting", "zombies", "simulation", "cdda"],
    logoSource: "https://raw.githubusercontent.com/CleverRaven/Cataclysm-DDA/master/build-data/osx/AppIcon.iconset/icon_512x512.png",
    screenshotSources: [],
    download: "https://cataclysmdda.org/releases/",
    source: "https://github.com/CleverRaven/Cataclysm-DDA",
    website: "https://cataclysmdda.org/",
    docs: "https://cdda.chezalex.net/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.cleverraven.CataclysmDDA" },
      { label: "Ubuntu / Debian", command: "sudo apt install cataclysm-dda-curses" },
      { label: "Windows (winget)", command: "winget install CleverRaven.CataclysmDDA" }
    ],
    comparisonData: {
      columns: ["Cataclysm: DDA", "Project Zomboid"],
      rows: [
        { feature: "Granular vehicle construction and custom welding", values: [true, false] },
        { feature: "Bionics (CBMs) and genetic mutation systems", values: [true, false] },
        { feature: "Turn-based tactical survival simulation", values: [true, false] },
        { feature: "100% Free and Open Source", values: [true, false] },
        { feature: "Extensive real-world item and chemistry crafting", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\n2 GHz CPU, 2 GB RAM\nOpenGL 2.1 compatible graphics for tiles version",
    maintainer: "community",
    developer: "CleverRaven & Cataclysm Community",
    developerUrl: "https://github.com/CleverRaven",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "shattered-pixel-dungeon",
    name: "Shattered Pixel Dungeon",
    alternative: "Pixel Dungeon, Soul Knight, Dead Cells, Enter the Gungeon",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0",
    version: "2.5.4",
    fileSize: "25 MB",
    description: "Highly polished traditional roguelike RPG featuring pixel art, distinct heroes, and challenging tactical dungeon runs.",
    fullDescription: "Shattered Pixel Dungeon is an open-source traditional roguelike dungeon crawler featuring charming pixel graphics and immense replayability. Forked and extensively refined from Watabou's original Pixel Dungeon, Shattered PD offers five distinct character classes (Warrior, Mage, Rogue, Huntress, and Duelist), each with unique subclasses, talent trees, and playstyles. Players navigate 26 randomized dungeon floors, discovering hundreds of magical wands, rings, artifacts, potions, and enchanted weaponry.",
    features: [
      "Five distinct character classes with unique talent trees, subclasses, and late-game abilities",
      "Over 250 items to discover and identify: weapons, armor, magical wands, rings, and artifacts",
      "Challenging turn-based tactical combat emphasizing positioning, stealth, and item synergy",
      "Randomized dungeon levels, hidden traps, secret doors, and challenging boss battles",
      "Full offline functionality with cross-platform desktop and mobile touch controls",
      "Completely free of pay-to-win microtransactions, timers, and non-cosmetic paywalls"
    ],
    uses: "Enjoy classic bite-sized yet challenging turn-based roguelike RPG runs on desktop or mobile.",
    tags: ["roguelike", "pixel-art", "rpg", "dungeon-crawler", "turn-based", "shattered-pixel-dungeon"],
    logoSource: "https://raw.githubusercontent.com/00-Evan/shattered-pixel-dungeon/master/android/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [],
    download: "https://shatteredpixel.com/",
    source: "https://github.com/00-Evan/shattered-pixel-dungeon",
    website: "https://shatteredpixel.com/",
    docs: "https://shatteredpixel.fandom.com/wiki/Main_Page",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub com.shatteredpixel.shatteredpixeldungeon" },
      { label: "F-Droid", command: "https://f-droid.org/packages/com.shatteredpixel.shatteredpixeldungeon/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=com.shatteredpixel.shatteredpixeldungeon" }
    ],
    comparisonData: {
      columns: ["Shattered Pixel Dungeon", "Soul Knight"],
      rows: [
        { feature: "Zero pay-to-win microtransactions or energy gates", values: [true, false] },
        { feature: "Full offline single-player experience", values: [true, true] },
        { feature: "True turn-based classic roguelike mechanics", values: [true, false] },
        { feature: "Open Source (GPL-3.0)", values: [true, false] },
        { feature: "Cross-platform desktop and mobile saves", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android, iOS)\n1 GHz CPU, 512 MB RAM\nOpenGL 2.0 or OpenGL ES 2.0 compatible graphics",
    maintainer: "individual",
    developer: "Evan Debenham (00-Evan)",
    developerUrl: "https://github.com/00-Evan",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "mindustry",
    name: "Mindustry",
    alternative: "Factorio, Shapez, Satisfactory, Kingdom Rush, Bloons TD",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0",
    version: "146",
    fileSize: "70 MB",
    description: "Addictive hybrid of factory automation logistics and tower defense combat on procedural alien planets.",
    fullDescription: "Mindustry is an open-source factory-building game combined with tower defense strategy. Players manage intricate supply chains of conveyor belts, item conduits, mass drivers, and power grids to mine ores, refine materials, construct automated munitions factories, and defend cores against waves of mechanized invaders. Mindustry supports solo campaigns across two distinct planets (Serpulo and Erekir), competitive multiplayer battles, cooperative building, and an in-game map/mod editor.",
    features: [
      "Intricate logistics networks: conveyor belts, liquid pipes, mass drivers, and logic processors",
      "Two distinct planetary campaigns with unique technology trees and environmental challenges",
      "Automated tower defense: build anti-air batteries, railguns, artillery, and shield projectors",
      "Cross-platform multiplayer featuring cooperative survival, team PvP, and custom sandbox maps",
      "In-game block-based assembly logic programming for controlling units and factory routing",
      "Integrated community mod browser for discovering custom turrets, units, and campaign sectors"
    ],
    uses: "Design automated logistical production lines and defend bases against enemy invasions with friends.",
    tags: ["automation", "factory-sim", "tower-defense", "factorio-alternative", "multiplayer", "mindustry"],
    logoSource: "https://raw.githubusercontent.com/Anuken/Mindustry/master/core/assets/icons/icon.png",
    screenshotSources: [],
    download: "https://anuke.itch.io/mindustry",
    source: "https://github.com/Anuken/Mindustry",
    website: "https://mindustrygame.github.io/",
    docs: "https://mindustry-game.fandom.com/wiki/Mindustry_Wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub com.github.Anuken.Mindustry" },
      { label: "F-Droid", command: "https://f-droid.org/packages/io.anuke.mindustry/" },
      { label: "GitHub Releases", command: "https://github.com/Anuken/Mindustry/releases/latest" }
    ],
    comparisonData: {
      columns: ["Mindustry", "Factorio"],
      rows: [
        { feature: "Native cross-platform mobile and desktop play", values: [true, false] },
        { feature: "Built-in wave defense combat integration", values: [true, true] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] },
        { feature: "In-game visual logic processor programming", values: [true, false] },
        { feature: "Complex conveyor and liquid routing networks", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\n2 GHz CPU, 1 GB RAM\nOpenGL 2.0 compatible graphics adapter",
    maintainer: "individual",
    developer: "Anuke (Anuken)",
    developerUrl: "https://github.com/Anuken",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "openmw",
    name: "OpenMW",
    alternative: "Creation Engine, Gamebryo, The Elder Scrolls III: Morrowind, Unity",
    category: "Games",
    subcategory: "Game Development",
    license: "GPL-3.0",
    version: "0.48.0",
    fileSize: "60 MB",
    description: "Modern, open-source reimplementation of The Elder Scrolls III: Morrowind game engine with native 64-bit performance.",
    fullDescription: "OpenMW is a modern, open-source C++ game engine designed to re-implement and extend the mechanics of Bethesda's classic RPG The Elder Scrolls III: Morrowind. Built from scratch without proprietary Bethesda code, OpenMW replaces the dated 2002 Gamebryo engine with a native 64-bit architecture featuring OpenSceneGraph rendering, realistic water reflections, modern physics, high-refresh rates, unlimited draw distances, and an advanced Lua modding system.",
    features: [
      "Native 64-bit cross-platform game engine replacing the original 2002 Morrowind executable",
      "Modern graphics features: distant terrain rendering, dynamic sun shadows, and water reflections",
      "Native support for high-DPI displays, ultrawide resolutions, and modern gamepad navigation",
      "Completely rewritten Lua scripting engine providing advanced modding possibilities",
      "OpenMW-CS (Construction Set) tool for crafting, editing, and managing custom RPG worlds",
      "Eliminates physics bugs, memory limits, and engine crashes inherent to original 32-bit executables"
    ],
    uses: "Play The Elder Scrolls III: Morrowind on modern Linux, Windows, macOS, and Android hardware with enhanced visual fidelity.",
    tags: ["game-engine", "openmw", "morrowind", "rpg", "elder-scrolls", "re-implementation"],
    logoSource: "https://gitlab.com/OpenMW/openmw/-/raw/master/files/launcher/images/openmw.png",
    screenshotSources: [],
    download: "https://openmw.org/downloads/",
    source: "https://gitlab.com/OpenMW/openmw",
    website: "https://openmw.org/",
    docs: "https://openmw.readthedocs.io/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.openmw.OpenMW" },
      { label: "Ubuntu / Debian", command: "sudo apt install openmw" },
      { label: "Windows (winget)", command: "winget install OpenMW.OpenMW" },
      { label: "macOS (brew)", command: "brew install --cask openmw" }
    ],
    comparisonData: {
      columns: ["OpenMW", "Original Morrowind Engine"],
      rows: [
        { feature: "Native 64-bit memory addressing (no 4GB crash limit)", values: [true, false] },
        { feature: "Native Linux and macOS execution without Wine", values: [true, false] },
        { feature: "Hardware distant land and real-time shadow casting", values: [true, false] },
        { feature: "Open Source engine and tools (GPL-3.0)", values: [true, false] },
        { feature: "Requires original game content files to play", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\nDual-core CPU, 4 GB RAM\nOpenGL 3.0+ compatible graphics card\nRequires legitimate Morrowind game data files (GOG or Steam)",
    maintainer: "community",
    developer: "OpenMW Team",
    developerUrl: "https://gitlab.com/OpenMW",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "pcsx-redux",
    name: "PCSX-Redux",
    alternative: "ePSXe, DuckStation, Bleem!, Mednafen PSX",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-3.0-or-later",
    version: "0.1",
    fileSize: "15 MB",
    description: "Highly accurate PlayStation 1 (PSX) emulator with integrated reverse-engineering tools and modern debugging capabilities.",
    fullDescription: "PCSX-Redux is an open-source, highly accurate PlayStation 1 (PSX) emulator and debugging platform. While capable of playing commercial PS1 games with authentic timing, PCSX-Redux is specially engineered for homebrew developers, romhackers, and reverse engineers. It integrates an interactive MIPS R3000A disassembler, memory viewer, live GDB server debugging, assembly patching, and full simulation of the PSX hardware pipeline.",
    features: [
      "Cycle-accurate PlayStation 1 hardware emulation including CPU, GPU, GTE, and SPU",
      "Interactive reverse-engineering toolkit: live memory hex viewer, MIPS disassembler, and symbol table",
      "Integrated GDB stub server for debugging homebrew games in real time with breakpoints",
      "Support for standard PS1 optical disc formats (BIN/CUE, ISO, CHD, PBP)",
      "High-performance Dear ImGui interface providing customizable dockable developer panels",
      "Lua and JavaScript scripting APIs for automated game testing, memory hooks, and tool development"
    ],
    uses: "Develop PlayStation 1 homebrew software, reverse engineer game code, and preserve classic PS1 titles.",
    tags: ["emulator", "playstation", "ps1", "reverse-engineering", "debugging", "pcsx-redux"],
    logoSource: "https://raw.githubusercontent.com/grumpycoders/pcsx-redux/main/resources/pcsx-redux.ico",
    screenshotSources: [],
    download: "https://pcsx-redux.drunkencoders.com/",
    source: "https://github.com/grumpycoders/pcsx-redux",
    website: "https://pcsx-redux.drunkencoders.com/",
    docs: "https://github.com/grumpycoders/pcsx-redux/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub com.drunkencoders.pcsx_redux" },
      { label: "AppImage", command: "https://pcsx-redux.drunkencoders.com/" }
    ],
    comparisonData: {
      columns: ["PCSX-Redux", "ePSXe"],
      rows: [
        { feature: "Built-in MIPS disassembler and live GDB server", values: [true, false] },
        { feature: "Open Source with active modern maintenance", values: [true, false] },
        { feature: "No legacy closed-source plugin requirements", values: [true, false] },
        { feature: "Modern Dear ImGui developer workspace", values: [true, false] },
        { feature: "CHD compressed disc format support", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n2 GHz CPU, 2 GB RAM\nOpenGL 3.3 compatible graphics card\nPS1 BIOS image recommended for maximum compatibility",
    maintainer: "community",
    developer: "GrumpyCoders Team",
    developerUrl: "https://github.com/grumpycoders",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "dolphin-emulator",
    name: "Dolphin Emulator",
    alternative: "Cemu, PCSX2, RPCS3, Ryujinx, Yuzu",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-2.0-or-later",
    version: "2409",
    fileSize: "40 MB",
    description: "Industry-leading GameCube and Wii emulator delivering 4K resolution enhancements, netplay, and motion controls.",
    fullDescription: "Dolphin is an open-source emulator for the Nintendo GameCube and Wii video game consoles. Regarded as one of the most accomplished open-source emulator projects in computing history, Dolphin allows PC and mobile players to experience classic sixth- and seventh-generation Nintendo masterpieces in full 4K UHD resolutions, with widescreen hacks, 60 FPS patches, custom HD texture packs, netplay online multiplayer, and real Wiimote Bluetooth passthrough.",
    features: [
      "Exceptional compatibility running the vast majority of GameCube and Wii game libraries",
      "High-definition internal upscaling: render games at 1080p, 1440p, and 4K resolutions",
      "State-of-the-art backend graphics support: Vulkan, DirectX 11/12, and OpenGL",
      "Built-in Netplay lobby for playing local multiplayer GameCube and Wii games over the internet",
      "Real Wiimote Bluetooth passthrough and motion emulation for standard PC gamepads",
      "Support for custom high-resolution texture replacements, post-processing shaders, and cheats"
    ],
    uses: "Preserve and enjoy Nintendo GameCube and Wii game collections in high-definition on modern hardware.",
    tags: ["emulator", "gamecube", "wii", "nintendo", "4k-upscaling", "netplay", "dolphin"],
    logoSource: "https://raw.githubusercontent.com/dolphin-emu/dolphin/master/Data/dolphin-emu.png",
    screenshotSources: [],
    download: "https://dolphin-emu.org/download/",
    source: "https://github.com/dolphin-emu/dolphin",
    website: "https://dolphin-emu.org/",
    docs: "https://wiki.dolphin-emu.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.DolphinEmu.dolphin-emu" },
      { label: "Windows (winget)", command: "winget install DolphinEmulator.Dolphin" },
      { label: "macOS (brew)", command: "brew install --cask dolphin" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=org.dolphinemu.dolphinemu" }
    ],
    comparisonData: {
      columns: ["Dolphin", "Original GameCube Hardware"],
      rows: [
        { feature: "Native 4K rendering and 16x anisotropic filtering", values: [true, false] },
        { feature: "Integrated online Netplay for all multiplayer titles", values: [true, false] },
        { feature: "Save states and fast-forward speed controls", values: [true, false] },
        { feature: "Community high-resolution texture pack support", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS, Android)\nx86-64 or AArch64 processor with AVX2 instruction support\n4 GB RAM minimum\nGPU with Direct3D 11.1, Vulkan 1.1, or OpenGL 4.4 support",
    maintainer: "community",
    developer: "Dolphin Emulator Project",
    developerUrl: "https://github.com/dolphin-emu",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "duckstation",
    name: "DuckStation",
    alternative: "ePSXe, PCSX-Reloaded, RetroArch Beetlepsx, Bleem!",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-3.0",
    version: "0.1-7000",
    fileSize: "22 MB",
    description: "Fast, highly accurate Sony PlayStation 1 (PSX) emulator with pristine upscaling, PGXP geometry, and modern UI.",
    fullDescription: "DuckStation is an acclaimed open-source Sony PlayStation (PS1/PSX) emulator focusing on playability, speed, and long-term maintainability. Delivering exceptional accuracy alongside modern enhancements, DuckStation features PGXP precision geometry processing (eliminating 3D polygon wobbling and texture warping), internal resolution scaling up to 16x (4K+), true 24-bit RGB color rendering, widescreen aspect ratio corrections, and audio interpolation.",
    features: [
      "Hardware-accelerated rendering backends: Vulkan, Direct3D 11/12, and OpenGL",
      "Advanced PGXP 3D geometry correction eliminating classic PlayStation polygon jitter",
      "High-resolution internal upscaling up to 16x (4K UHD) with texture filtering",
      "Widescreen rendering hacks and true 24-bit color depth (removes color banding)",
      "Comprehensive game database with automatic cover art matching and cheat integration",
      "Supports modern controller rumble, analogue triggers, and touchscreen controls on Android"
    ],
    uses: "Play classic PS1 games in stunning 4K resolution with smooth 3D geometry and zero polygon wobble.",
    tags: ["emulator", "playstation", "ps1", "psx", "duckstation", "pgxp", "retro"],
    logoSource: "https://raw.githubusercontent.com/stenzek/duckstation/master/data/resources/images/duck.png",
    screenshotSources: [],
    download: "https://www.duckstation.org/",
    source: "https://github.com/stenzek/duckstation",
    website: "https://www.duckstation.org/",
    docs: "https://github.com/stenzek/duckstation/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.duckstation.DuckStation" },
      { label: "Windows (winget)", command: "winget install Stenzek.DuckStation" },
      { label: "Android APK", command: "https://github.com/stenzek/duckstation/releases/latest" }
    ],
    comparisonData: {
      columns: ["DuckStation", "ePSXe"],
      rows: [
        { feature: "PGXP geometry precision (no polygon wobbling)", values: [true, false] },
        { feature: "Modern Vulkan and D3D12 renderers", values: [true, false] },
        { feature: "No legacy plugin configurations needed", values: [true, false] },
        { feature: "Open Source (GPL-3.0)", values: [true, false] },
        { feature: "Cross-platform Linux, Windows, macOS, Android", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS, Android)\nx86-64 or ARM64 CPU with SSE4.1/AVX support\n2 GB RAM\nGPU supporting Vulkan 1.0 or Direct3D 11\nLegitimate PS1 BIOS dump recommended",
    maintainer: "individual",
    developer: "Stenzek",
    developerUrl: "https://github.com/stenzek",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "scummvm",
    name: "ScummVM",
    alternative: "DOSBox, VirtualBox, ScummC, ResidualVM",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-3.0",
    version: "2.8.1",
    fileSize: "95 MB",
    description: "Virtual machine running hundreds of classic 2D graphic point-and-click adventure games and RPGs.",
    fullDescription: "ScummVM is an open-source program that allows you to play hundreds of classic point-and-click graphic adventure games and RPGs on modern hardware. Originally designed to run LucasArts' SCUMM games (Monkey Island, Day of the Tentacle, Sam & Max), ScummVM has expanded into a universal engine re-implementing game logic for titles from Sierra On-Line (King's Quest, Space Quest), Revolution Software (Broken Sword), Westwood (Kyrandia), and Humongous Entertainment.",
    features: [
      "Re-implements game interpreter engines natively for hundreds of classic adventure games",
      "Supports masterpieces from LucasArts, Sierra On-Line, Revolution Software, and Humongous",
      "Modern graphic upscalers: HQ2x, AdvMame, xBRZ, OpenGL shaders, and aspect ratio correction",
      "Cloud save synchronization (Dropbox, Google Drive, OneDrive, WebDAV) across devices",
      "High-quality digital audio synthesizer emulation: Roland MT-32, General MIDI, and AdLib",
      "Available across virtually every platform: desktop PCs, Android, iOS, game consoles, and handhelds"
    ],
    uses: "Relive and play classic 80s and 90s point-and-click graphic adventure games without configuring DOS.",
    tags: ["adventure-games", "scumm", "monkey-island", "point-and-click", "retro", "scummvm"],
    logoSource: "https://raw.githubusercontent.com/scummvm/scummvm/master/icons/scummvm.svg",
    screenshotSources: [],
    download: "https://www.scummvm.org/downloads/",
    source: "https://github.com/scummvm/scummvm",
    website: "https://www.scummvm.org/",
    docs: "https://docs.scummvm.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.scummvm.ScummVM" },
      { label: "Ubuntu / Debian", command: "sudo apt install scummvm" },
      { label: "Windows (winget)", command: "winget install ScummVM.ScummVM" },
      { label: "macOS (brew)", command: "brew install --cask scummvm" }
    ],
    comparisonData: {
      columns: ["ScummVM", "DOSBox"],
      rows: [
        { feature: "Native C++ game engine reimplementation (zero CPU emulation overhead)", values: [true, false] },
        { feature: "Cross-platform cloud save state synchronization", values: [true, false] },
        { feature: "Roland MT-32 emulation and high-res font rendering", values: [true, true] },
        { feature: "One-click game library scanning and detection", values: [true, false] },
        { feature: "100% Free and Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android, iOS)\n500 MHz CPU, 256 MB RAM\nRuns on almost any hardware\nOriginal adventure game data files required",
    maintainer: "community",
    developer: "ScummVM Team",
    developerUrl: "https://github.com/scummvm",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "dosbox-staging",
    name: "DOSBox Staging",
    alternative: "DOSBox, DOSBox-X, VirtualBox, VMware Workstation",
    category: "Games",
    subcategory: "Emulators",
    license: "GPL-2.0",
    version: "0.82.0",
    fileSize: "20 MB",
    description: "Modern, focus-driven continuation of the classic DOSBox MS-DOS emulator with advanced audio, pixel-perfect scaling, and VRR.",
    fullDescription: "DOSBox Staging is a modernized, community-driven continuation of the MS-DOS emulator DOSBox. While preserving full compatibility with classic 1980s and 1990s PC gaming and productivity software, DOSBox Staging reimagines the emulator for contemporary systems. It introduces modern features such as variable refresh rate (VRR/G-Sync/FreeSync), pixel-perfect integer scaling with CRT shaders, 3dfx Voodoo Glide emulation, auto-mounting, and studio-grade audio synthesis (FluidSynth SoundFont, Roland MT-32, Gravis UltraSound).",
    features: [
      "Modernized MS-DOS emulation with enhanced 16-bit/32-bit x86 compatibility",
      "Pixel-perfect scaling with adaptive CRT and scanline shaders for authentic retro displays",
      "Studio-grade audio: integrated FluidSynth with SoundFonts, Roland MT-32, and Gravis UltraSound",
      "Native 3dfx Voodoo Glide hardware acceleration emulation for early 3D PC titles",
      "Variable Refresh Rate (VRR) support delivering tear-free retro gaming on modern monitors",
      "Raw mouse input, modern gamepad hotplugging, and automated drive mounting configurations"
    ],
    uses: "Play classic MS-DOS games and run legacy PC software with authentic sound and modern display scaling.",
    tags: ["emulator", "dos", "ms-dos", "retro-gaming", "dosbox", "dosbox-staging"],
    logoSource: "https://raw.githubusercontent.com/dosbox-staging/dosbox-staging/main/extras/icons/windows/dosbox-staging.ico",
    screenshotSources: [],
    download: "https://dosbox-staging.github.io/downloads/",
    source: "https://github.com/dosbox-staging/dosbox-staging",
    website: "https://dosbox-staging.github.io/",
    docs: "https://github.com/dosbox-staging/dosbox-staging/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.github.dosbox-staging" },
      { label: "Ubuntu / Debian (PPA)", command: "sudo add-apt-repository ppa:dosbox-staging/ppa && sudo apt install dosbox-staging" },
      { label: "Windows (winget)", command: "winget install DOSBox-Staging.DOSBox-Staging" },
      { label: "macOS (brew)", command: "brew install dosbox-staging" }
    ],
    comparisonData: {
      columns: ["DOSBox Staging", "Original DOSBox 0.74"],
      rows: [
        { feature: "Built-in FluidSynth soundfont and MT-32 synthesis", values: [true, false] },
        { feature: "Variable Refresh Rate (VRR / FreeSync / G-Sync)", values: [true, false] },
        { feature: "3dfx Voodoo Glide emulation out of the box", values: [true, false] },
        { feature: "Modern gamepad hotplugging and auto-mapping", values: [true, false] },
        { feature: "Active modern maintenance and GitHub releases", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\n2 GHz CPU, 2 GB RAM\nOpenGL 3.3 or modern graphics driver capable of shader compilation",
    maintainer: "community",
    developer: "DOSBox Staging Team",
    developerUrl: "https://github.com/dosbox-staging",
    platforms: ["Linux", "Windows", "macOS"]
  }
];
