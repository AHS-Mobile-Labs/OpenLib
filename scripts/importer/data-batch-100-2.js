module.exports = [
  {
    id: "battle-for-wesnoth",
    name: "Battle for Wesnoth",
    alternative: "Fire Emblem, Heroes of Might and Magic, Advance Wars, Wargroove",
    category: "Games",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "1.18.3",
    fileSize: "450 MB",
    description: "Turn-based tactical fantasy strategy game featuring competitive multiplayer and dozens of community campaigns.",
    fullDescription: "The Battle for Wesnoth is a premier open-source turn-based tactical strategy game set in a rich high-fantasy universe. Players recruit and command specialized units across hex-based battlefields, factoring in day/night cycles, terrain defense modifiers, unit advancements, and faction affinities. Wesnoth offers sixteen official single-player campaigns, hundreds of user-made add-on campaigns, competitive cross-platform multiplayer, and an integrated map editor.",
    features: [
      "Deep turn-based tactical hex combat with over 200 unit types across six major factions",
      "Over 16 fully scripted single-player campaigns ranging from rookie quests to epic wars",
      "Dynamic day/night cycle and terrain modifiers directly influencing unit combat stats",
      "Built-in add-on server providing instant access to hundreds of community campaigns and eras",
      "Cross-platform competitive multiplayer with hotseat, LAN, and dedicated official matchmaking",
      "Integrated map editor for designing custom battlefields, scenarios, and story cutscenes"
    ],
    uses: "Experience deep tactical turn-based fantasy campaigns and competitive multiplayer matches without microtransactions.",
    tags: ["strategy", "turn-based", "tactical-rpg", "fantasy", "hex-grid", "wesnoth"],
    logoSource: "https://www.wesnoth.org/favicon.ico",
    screenshotSources: [],
    download: "https://www.wesnoth.org/#download",
    source: "https://github.com/wesnoth/wesnoth",
    website: "https://www.wesnoth.org/",
    docs: "https://wiki.wesnoth.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.wesnoth.Wesnoth" },
      { label: "Ubuntu / Debian", command: "sudo apt install wesnoth" },
      { label: "Windows (winget)", command: "winget install Wesnoth.Wesnoth" },
      { label: "macOS (brew)", command: "brew install --cask battle-for-wesnoth" }
    ],
    comparisonData: {
      columns: ["Battle for Wesnoth", "Wargroove"],
      rows: [
        { feature: "Over 200 unit types and 16+ official campaigns", values: [true, false] },
        { feature: "Free community content add-on repository", values: [true, true] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] },
        { feature: "Cross-platform Linux, Windows, macOS, Android, iOS", values: [true, false] },
        { feature: "Native hex-grid tactical mechanics", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n2 GHz dual-core processor, 2 GB RAM\nOpenGL 2.0 compatible graphics card",
    maintainer: "community",
    developer: "Wesnoth Development Team (David White & Contributors)",
    developerUrl: "https://github.com/wesnoth",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "freeciv",
    name: "Freeciv",
    alternative: "Civilization VI, Civilization V, Old World, Humankind",
    category: "Games",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "3.1.2",
    fileSize: "60 MB",
    description: "Free and open-source empire-building strategy game inspired by the history of human civilization.",
    fullDescription: "Freeciv is an open-source multiplayer turn-based empire-building strategy game inspired by Sid Meier's Civilization series. Players lead their civilization from the Stone Age into the Space Age, founding cities, researching new technologies, conducting diplomacy, exploring continents, and engaging in tactical warfare. Freeciv supports extensive game rule customization (including Civ I, Civ II, and Freeciv rulesets) and supports multiplayer games with up to 126 human players.",
    features: [
      "Lead human civilization from 4000 B.C. to the modern space age and interstellar colonization",
      "Over 500 playable historical nations with authentic leader names and city lists",
      "Configurable rulesets supporting Civilization I, Civilization II, and modern Freeciv mechanics",
      "Massive multiplayer support hosting games with dozens of simultaneous human players",
      "Advanced diplomacy: alliances, trade treaties, embassies, and shared military visions",
      "Multiple user interface clients: Qt, GTK3, SDL, and web browser edition (Freeciv-web)"
    ],
    uses: "Play deep 4X empire-building grand strategy games with friends on desktop or directly via web browsers.",
    tags: ["4x", "strategy", "turn-based", "civilization-alternative", "empire-building", "freeciv"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Freeciv_Web_Logo.png",
    screenshotSources: [],
    download: "https://www.freeciv.org/download.html",
    source: "https://github.com/freeciv/freeciv",
    website: "https://www.freeciv.org/",
    docs: "https://freeciv.fandom.com/wiki/Main_Page",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.freeciv.Freeciv" },
      { label: "Ubuntu / Debian", command: "sudo apt install freeciv-client-gtk3" },
      { label: "Windows (winget)", command: "winget install Freeciv.Freeciv" }
    ],
    comparisonData: {
      columns: ["Freeciv", "Civilization VI"],
      rows: [
        { feature: "Lightweight and runs on minimal hardware", values: [true, false] },
        { feature: "Support for massive multi-week multiplayer games", values: [true, false] },
        { feature: "Customizable rulesets and scripting", values: [true, false] },
        { feature: "Zero DLC paywalls or microtransactions", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Web)\n1 GHz CPU, 512 MB RAM\nRuns on basic integrated graphics",
    maintainer: "community",
    developer: "Freeciv Project Team",
    developerUrl: "https://github.com/freeciv",
    platforms: ["Linux", "Windows", "macOS", "Web"]
  },
  {
    id: "xonotic",
    name: "Xonotic",
    alternative: "Quake Champions, Unreal Tournament, DOOM, Splitgate",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "0.8.6",
    fileSize: "950 MB",
    description: "Fast-paced, arena-style first-person shooter combining extreme movement physics with high-voltage weapons.",
    fullDescription: "Xonotic is an open-source arena-style first-person shooter that delivers intense, twitch-reflex arcade gameplay directly inspired by Quake III Arena and Unreal Tournament. Featuring classic movement physics including strafe-jumping, bunny-hopping, and rocket-jumping, Xonotic provides 16 high-impact weapons with dual firing modes. It offers an active multiplayer community, dedicated competitive servers, diverse game modes (Capture the Flag, Deathmatch, Nexball), and a community map ecosystem.",
    features: [
      "High-velocity arena shooter gameplay emphasizing skill-based movement and fast reflexes",
      "16 lethal sci-fi and kinetic weapons, each featuring distinctive primary and secondary fire modes",
      "Diverse multiplayer modes: Deathmatch, Team Deathmatch, CTF, Clan Arena, Freeze Tag, and Nexball",
      "Over 25 official maps plus hundreds of community-built arenas and trickjump obstacle courses",
      "Integrated integrated statistics tracking, demo recording, and server browser",
      "Customizable HUD layout, crosshair editor, and cross-platform multiplayer networking"
    ],
    uses: "Play fast-paced, competitive arena FPS matches with friends without paid cosmetic battle passes.",
    tags: ["fps", "arena-shooter", "quake-alternative", "fast-paced", "multiplayer", "xonotic"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/4/41/Xonotic_logo.svg",
    screenshotSources: [],
    download: "https://xonotic.org/download/",
    source: "https://gitlab.com/xonotic/xonotic",
    website: "https://xonotic.org/",
    docs: "https://xonotic.org/faq/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.xonotic.Xonotic" },
      { label: "Ubuntu / Debian", command: "sudo apt install xonotic" },
      { label: "Direct Download", command: "https://xonotic.org/download/" }
    ],
    comparisonData: {
      columns: ["Xonotic", "Quake Champions"],
      rows: [
        { feature: "No paid loot boxes or battle pass gating", values: [true, false] },
        { feature: "Full offline bot matches and LAN support", values: [true, false] },
        { feature: "Native Linux, Windows, and macOS support", values: [true, false] },
        { feature: "Self-hostable dedicated servers", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\nDual-core 2 GHz CPU, 2 GB RAM\nOpenGL 2.0+ compatible GPU",
    maintainer: "community",
    developer: "Team Xonotic",
    developerUrl: "https://gitlab.com/xonotic",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "openra",
    name: "OpenRA",
    alternative: "Command & Conquer Remastered, StarCraft, Age of Empires, Dune: Spice Wars",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0",
    version: "20241215",
    fileSize: "85 MB",
    description: "Open-source real-time strategy game engine reimagining classic 90s Command & Conquer and Dune titles.",
    fullDescription: "OpenRA is an open-source real-time strategy (RTS) engine that modernizes and recreates early Westwood RTS classics, including Command & Conquer: Red Alert, Tiberian Dawn, and Dune 2000. Re-engineered with modern RTS mechanics—such as unit attack-move orders, fog-of-war, veterancy, customizable production queues, and spectator mode—OpenRA provides an active online multiplayer lobby, competitive ranked seasons, and cooperative skirmish battles.",
    features: [
      "Modernized reimplementation of Red Alert, Tiberian Dawn, and Dune 2000",
      "Modern RTS control scheme: production queues, rally points, unit stances, and hotkeys",
      "Integrated online multiplayer lobby with ladder rankings, auto-matching, and spectator streams",
      "Map editor with one-click community map publishing to the OpenRA Resource Center",
      "Support for full original campaign missions, sound effects, and classic FMV cinematics",
      "Flexible Lua scripting framework for developing original standalone RTS mods and campaigns"
    ],
    uses: "Relive classic 90s real-time strategy games with modern responsive controls and competitive online multiplayer.",
    tags: ["rts", "strategy", "command-and-conquer", "red-alert", "dune", "openra"],
    logoSource: "https://www.openra.net/images/openra-logo-with-text.svg",
    screenshotSources: [],
    download: "https://www.openra.net/download/",
    source: "https://github.com/OpenRA/OpenRA",
    website: "https://www.openra.net/",
    docs: "https://docs.openra.net/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.openra.OpenRA" },
      { label: "Windows (winget)", command: "winget install OpenRA.OpenRA" },
      { label: "macOS (brew)", command: "brew install --cask openra" }
    ],
    comparisonData: {
      columns: ["OpenRA", "C&C Remastered Collection"],
      rows: [
        { feature: "Native cross-platform Linux, macOS, and Windows", values: [true, false] },
        { feature: "Community-driven open development and modding", values: [true, false] },
        { feature: "Integrated community map and replay center", values: [true, false] },
        { feature: "Modern competitive RTS control improvements", values: [true, true] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS 10.15+)\n2 GHz CPU, 2 GB RAM\nOpenGL 3.2 or DirectX 11 compatible graphics",
    maintainer: "community",
    developer: "OpenRA Developers",
    developerUrl: "https://github.com/OpenRA",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "minetest-game",
    name: "Minetest Game",
    alternative: "Minecraft Vanilla, Blockstorm, Creativerse, Terasology",
    category: "Games",
    subcategory: "General",
    license: "LGPL-2.1-or-later",
    version: "5.8.0",
    fileSize: "12 MB",
    description: "Classic foundational voxel sandbox game for the Luanti engine, offering mining, crafting, and building.",
    fullDescription: "Minetest Game (MTG) is the foundational sandbox game developed for the Luanti (formerly Minetest) voxel engine. Designed as a clean, highly optimized sandbox canvas, MTG includes essential gameplay mechanics: harvesting raw ores, crafting tools and armor, discovering underground caves, farming wheat and apples, and building architectural creations. While intentionally minimalist to maximize performance, it serves as the stable base for thousands of community mods.",
    features: [
      "Foundational voxel sandbox gameplay with mining, crafting, farming, and building",
      "Multiple biomes including deserts, snowy tundras, dense forests, and deep ocean trenches",
      "Extensive crafting tree with wooden, stone, steel, bronze, and mese block tiers",
      "Stable, standardized baseline compatible with thousands of ContentDB Lua mods",
      "Extremely lightweight resource footprint running effortlessly on low-power devices",
      "Creative and survival modes supporting multiplayer cooperative construction"
    ],
    uses: "Serve as a lightweight, mod-ready voxel survival and building sandbox running on the Luanti engine.",
    tags: ["voxel", "sandbox", "luanti", "minetest", "crafting", "minetest-game"],
    logoSource: "https://raw.githubusercontent.com/luanti-org/minetest_game/master/menu/icon.png",
    screenshotSources: [],
    download: "https://content.luanti.org/packages/Minetest/minetest_game/",
    source: "https://github.com/luanti-org/minetest_game",
    website: "https://www.luanti.org/",
    docs: "https://wiki.luanti.org/Minetest_Game",
    youtube: "",
    installMethods: [
      { label: "Luanti ContentDB", command: "Install via Luanti main menu -> Content -> Browse" },
      { label: "Git clone", command: "git clone https://github.com/luanti-org/minetest_game.git ~/.minetest/games/minetest_game" }
    ],
    comparisonData: {
      columns: ["Minetest Game", "Minecraft Vanilla"],
      rows: [
        { feature: "Mod-first lightweight design", values: [true, false] },
        { feature: "Instant loading and low CPU/RAM consumption", values: [true, false] },
        { feature: "Free community ContentDB integration", values: [true, false] },
        { feature: "Open Source license (LGPL / CC-BY-SA)", values: [true, false] },
        { feature: "Infinite procedural block terrain", values: [true, true] }
      ]
    },
    systemRequirements: "Requires Luanti (Minetest) 5.0.0 or newer\n50 MB disk space\nRuns on any hardware capable of launching Luanti",
    maintainer: "community",
    developer: "Luanti Core Team",
    developerUrl: "https://github.com/luanti-org",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "supertux",
    name: "SuperTux",
    alternative: "Super Mario Bros., Rayman, Sonic the Hedgehog, Shovel Knight",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "0.6.3",
    fileSize: "180 MB",
    description: "Classic 2D jump-and-run sidescroller platformer starring Tux the Linux penguin in frosty fantasy worlds.",
    fullDescription: "SuperTux is a classic open-source 2D sidescrolling jump-and-run platformer inspired by Nintendo's Super Mario series. Guiding Tux the Linux penguin across icy glaciers, lush forests, and underground caverns, players stomp treacherous enemies, discover hidden secret blocks, unleash ice and fire flower powers, and rescue Penny from the villainous Nolok. SuperTux includes two complete official worlds, dozens of community levels, and an integrated in-game level editor.",
    features: [
      "Over 30 handcrafted campaign levels featuring responsive physics and classic platforming",
      "Distinct enemy types with unique behavioral AI, hazards, and challenging boss encounters",
      "Power-ups including the Ice Flower, Fire Flower, Air Flower, and Earth Flower",
      "Built-in level editor for creating custom platforming courses and story islands",
      "Community level manager allowing instant in-game downloading of player-made worlds",
      "Delightful original soundtrack and hand-drawn 2D vector graphics and animations"
    ],
    uses: "Enjoy fun, family-friendly 2D platforming action and build custom jump-and-run levels.",
    tags: ["platformer", "2d-game", "super-mario-alternative", "arcade", "tux", "supertux"],
    logoSource: "https://raw.githubusercontent.com/SuperTux/supertux/master/data/images/engine/icons/supertux.png",
    screenshotSources: [],
    download: "https://www.supertux.org/download.html",
    source: "https://github.com/SuperTux/supertux",
    website: "https://www.supertux.org/",
    docs: "https://github.com/SuperTux/supertux/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.supertuxproject.SuperTux" },
      { label: "Ubuntu / Debian", command: "sudo apt install supertux" },
      { label: "Windows (winget)", command: "winget install SuperTux.SuperTux" }
    ],
    comparisonData: {
      columns: ["SuperTux", "Super Mario Bros."],
      rows: [
        { feature: "Integrated level creation tool", values: [true, false] },
        { feature: "Available natively on Linux, Windows, macOS", values: [true, false] },
        { feature: "Open Source and free to modify", values: [true, false] },
        { feature: "Classic 2D jump-and-run mechanics", values: [true, true] },
        { feature: "Zero paid advertisements or DRM", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n1.5 GHz CPU, 1 GB RAM\nOpenGL 2.0 compatible graphics",
    maintainer: "community",
    developer: "SuperTux Development Team",
    developerUrl: "https://github.com/SuperTux",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "pingus",
    name: "Pingus",
    alternative: "Lemmings, Lemmings Revolution, Clones, Humans",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0",
    version: "0.7.6",
    fileSize: "25 MB",
    description: "Charming puzzle game inspired by Lemmings where players guide a colony of penguins through dangerous terrain.",
    fullDescription: "Pingus is an open-source puzzle game directly inspired by DMA Design's classic Lemmings. Players must safely guide a line of fearless, marching penguins across treacherous landscapes filled with spikes, chasms, and deadly traps to reach the exit portal. By assigning tactical roles to individual penguins—such as digging tunnels, building bridges, climbing cliffs, mining obstacles, and deploying parachutes—players solve brain-teasing spatial puzzles.",
    features: [
      "Over 75 handcrafted puzzle stages spanning tutorials, summer islands, and winter glaciers",
      "Diverse penguin abilities: basher, blocker, digger, miner, jumper, climber, and floater",
      "Charming hand-painted 2D artwork and ambient background music",
      "Integrated level editor allowing players to design and test custom puzzle challenges",
      "Precise physics and timing mechanics requiring logical problem-solving",
      "Full localization into multiple languages with simple mouse and keyboard controls"
    ],
    uses: "Test logic and spatial reasoning skills through addictive, non-violent puzzle-solving challenges.",
    tags: ["puzzle", "lemmings-alternative", "logic-game", "penguins", "strategy", "pingus"],
    logoSource: "https://raw.githubusercontent.com/Pingus/pingus/master/data/images/icons/pingus.png",
    screenshotSources: [],
    download: "https://pingus.seul.org/download.html",
    source: "https://github.com/Pingus/pingus",
    website: "https://pingus.seul.org/",
    docs: "https://pingus.seul.org/welcome.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.seul.pingus" },
      { label: "Ubuntu / Debian", command: "sudo apt install pingus" }
    ],
    comparisonData: {
      columns: ["Pingus", "Lemmings Mobile"],
      rows: [
        { feature: "No energy meters or timed paywalls", values: [true, false] },
        { feature: "Full offline gameplay", values: [true, false] },
        { feature: "Built-in puzzle level editor", values: [true, false] },
        { feature: "100% Free and Open Source", values: [true, false] },
        { feature: "Faithful to classic PC Lemmings gameplay", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n1 GHz CPU, 512 MB RAM\nBasic 2D graphics support",
    maintainer: "community",
    developer: "Ingo Ruhnke & Pingus Contributors",
    developerUrl: "https://github.com/Pingus",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "hedgewars",
    name: "Hedgewars",
    alternative: "Worms W.M.D, Worms Armageddon, Scorched Earth, Gunbound",
    category: "Games",
    subcategory: "General",
    license: "GPL-2.0",
    version: "1.0.2",
    fileSize: "220 MB",
    description: "Hilarious turn-based artillery strategy game featuring combative hedgehogs battling with absurd weaponry.",
    fullDescription: "Hedgewars is a comedy turn-based artillery and tactical strategy game modeled after the classic Worms franchise. Players command teams of feisty hedgehogs across fully destructible 2D terrain, using outrageous arsenals—including exploding watermelons, flying homing pigeons, baseball bats, cake bombs, and laser sights—to eliminate opposing teams. Hedgewars features local hotseat multiplayer, online networked matchmaking, single-player mission campaigns, and extensive customization.",
    features: [
      "Over 55 hilarious weapons and utilities including banana bombs, RC planes, and portal guns",
      "Fully destructible 2D cartoon terrain with dynamic water physics and sudden death flooding",
      "Turn-based artillery combat supporting up to 8 teams with 64 combatants per match",
      "Online multiplayer lobbies, global chat, ranked matches, and LAN party support",
      "Extensive cosmetic customization: custom hedgehog voices, grave markers, and hundreds of hats",
      "Single-player campaign missions, training challenges, and customizable AI bots"
    ],
    uses: "Enjoy chaotic turn-based party artillery battles with friends locally on the couch or over the web.",
    tags: ["artillery", "turn-based", "worms-alternative", "party-game", "multiplayer", "hedgewars"],
    logoSource: "https://raw.githubusercontent.com/hedgewars/hw/master/misc/hedgewars.png",
    screenshotSources: [],
    download: "https://www.hedgewars.org/download.html",
    source: "https://github.com/hedgewars/hw",
    website: "https://www.hedgewars.org/",
    docs: "https://www.hedgewars.org/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.hedgewars.Hedgewars" },
      { label: "Ubuntu / Debian", command: "sudo apt install hedgewars" },
      { label: "Windows (winget)", command: "winget install Hedgewars.Hedgewars" }
    ],
    comparisonData: {
      columns: ["Hedgewars", "Worms Armageddon"],
      rows: [
        { feature: "100% Free and Open Source", values: [true, false] },
        { feature: "Built-in online multiplayer matchmaking", values: [true, true] },
        { feature: "Cross-platform Linux, Windows, and macOS", values: [true, false] },
        { feature: "Over 55 absurd comedic weapons", values: [true, true] },
        { feature: "Extensive custom hats and voice packs", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n1.5 GHz CPU, 1 GB RAM\nOpenGL compatible graphics adapter",
    maintainer: "community",
    developer: "Hedgewars Team",
    developerUrl: "https://github.com/hedgewars",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "endless-sky",
    name: "Endless Sky",
    alternative: "Escape Velocity, Elite Dangerous, Star Citizen, Starsector, Freelancer",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0",
    version: "0.10.10",
    fileSize: "280 MB",
    description: "Open-world 2D space exploration, trading, and combat simulation game inspired by classic Escape Velocity.",
    fullDescription: "Endless Sky is an open-world 2D space trading and combat simulation game inspired by the legendary Escape Velocity series. Starting out as the captain of a modest shuttle or light freighter, players explore a vast galaxy containing hundreds of star systems, alien factions, and spaceports. You can earn credits by ferrying passengers, shipping freight, hunting pirate bounties, mining asteroid belts, or becoming a pirate yourself.",
    features: [
      "Vast galaxy containing hundreds of star systems, planets, and distinct alien civilizations",
      "Multiple branching story campaigns influenced by player choices and moral allegiances",
      "Deep economic sandbox: passenger transit, freight logistics, and commodity trading",
      "Over 60 customizable starships from tiny scouts to massive dreadnought flagships",
      "Extensive weapon and ship outfitting: beam lasers, plasma turrets, shields, and hyperdrives",
      "Active modding community with seamless plugin support for new ships, galaxy maps, and quests"
    ],
    uses: "Explore open-ended space frontiers, trade goods between planets, and build private carrier fleets.",
    tags: ["space-sim", "escape-velocity", "trading", "open-world", "sci-fi", "endless-sky"],
    logoSource: "https://raw.githubusercontent.com/endless-sky/endless-sky/master/icons/icon_512x512.png",
    screenshotSources: [],
    download: "https://endless-sky.github.io/",
    source: "https://github.com/endless-sky/endless-sky",
    website: "https://endless-sky.github.io/",
    docs: "https://github.com/endless-sky/endless-sky/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.github.endless_sky.endless_sky" },
      { label: "Ubuntu / Debian", command: "sudo apt install endless-sky" },
      { label: "Windows (winget)", command: "winget install EndlessSky.EndlessSky" },
      { label: "macOS (brew)", command: "brew install --cask endless-sky" }
    ],
    comparisonData: {
      columns: ["Endless Sky", "Escape Velocity Nova"],
      rows: [
        { feature: "Native modern 64-bit cross-platform support", values: [true, false] },
        { feature: "Active continuous development and community story arcs", values: [true, false] },
        { feature: "Dozens of alien species and deep faction lore", values: [true, true] },
        { feature: "Fleet command of multiple companion ships", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n2 GHz CPU, 2 GB RAM\nOpenGL 3.0 compatible graphics card",
    maintainer: "community",
    developer: "Endless Sky Community & Michael Zahniser",
    developerUrl: "https://github.com/endless-sky",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "openrct2",
    name: "OpenRCT2",
    alternative: "RollerCoaster Tycoon 2, Planet Coaster, Parkitect, Theme Park World",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0",
    version: "0.4.16",
    fileSize: "35 MB",
    description: "Open-source re-implementation of RollerCoaster Tycoon 2 with multiplayer, UI scaling, and fast-forward.",
    fullDescription: "OpenRCT2 is an open-source modernization and complete reimplementation of Chris Sawyer's iconic amusement park simulation game RollerCoaster Tycoon 2. Decompiled from original x86 assembly into clean C++, OpenRCT2 removes original engine limits, introduces smooth hardware-accelerated OpenGL rendering, high-DPI scaling, cooperative multiplayer park building, fast-forward speed controls, ride auto-painting, and an advanced cheat engine. It supports assets from both RCT1 and RCT2.",
    features: [
      "Full cooperative online multiplayer allowing multiple friends to build a theme park simultaneously",
      "High-resolution support with crisp high-DPI UI scaling and OpenGL hardware rendering",
      "Fast-forward gameplay controls allowing rapid simulation testing of complex roller coasters",
      "Uncapped sprite and map limits supporting colossal theme parks with hundreds of rides",
      "Seamless integration of original RollerCoaster Tycoon 1 scenarios, paths, and music assets",
      "Integrated tile inspector and cheat engine for detailed sandbox landscaping and construction"
    ],
    uses: "Design breathtaking roller coasters, manage theme park finances, and build parks together with friends online.",
    tags: ["simulation", "theme-park", "rollercoaster-tycoon", "multiplayer", "retro", "openrct2"],
    logoSource: "https://raw.githubusercontent.com/OpenRCT2/OpenRCT2/develop/resources/logo/icon_x512.png",
    screenshotSources: [],
    download: "https://openrct2.org/downloads",
    source: "https://github.com/OpenRCT2/OpenRCT2",
    website: "https://openrct2.org/",
    docs: "https://docs.openrct2.io/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.github.OpenRCT2.OpenRCT2" },
      { label: "Windows (winget)", command: "winget install OpenRCT2.OpenRCT2" },
      { label: "macOS (brew)", command: "brew install --cask openrct2" }
    ],
    comparisonData: {
      columns: ["OpenRCT2", "RollerCoaster Tycoon 2 Classic"],
      rows: [
        { feature: "Online cooperative multiplayer", values: [true, false] },
        { feature: "OpenGL hardware acceleration and 4K UI scaling", values: [true, false] },
        { feature: "Simulate both RCT1 and RCT2 in one unified engine", values: [true, false] },
        { feature: "Removes original engine entity and map limits", values: [true, false] },
        { feature: "Open Source (GPL-3.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\n1.6 GHz CPU, 1 GB RAM\nRequires original RCT2 game assets (available via demo, GOG, or Steam)",
    maintainer: "community",
    developer: "OpenRCT2 Team",
    developerUrl: "https://github.com/OpenRCT2",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  }
];
