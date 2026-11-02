module.exports = [
  {
    id: "anki",
    name: "Anki",
    alternative: "Quizlet, Brainscape, Chegg Prep, Memrise, RemNote",
    category: "Education",
    subcategory: "Learning",
    license: "AGPL-3.0",
    version: "24.06.3",
    fileSize: "135 MB",
    description: "Powerful, intelligent flashcard system utilizing spaced repetition to maximize long-term memory retention.",
    fullDescription: "Anki is an open-source spaced repetition flashcard application that helps learners remember facts, languages, formulas, and concepts over the long term. By adapting review schedules based on cognitive memory retention algorithms (SM-2 and FSRS), Anki ensures you review cards right before you forget them. Anki supports rich media including audio clips, images, LaTeX mathematical notation, and syntax-highlighted code. It features a vast ecosystem of community-shared decks and powerful add-ons for medical students, language learners, and academics.",
    features: [
      "Adaptive Spaced Repetition System (SRS) using modern FSRS and SM-2 algorithms",
      "Support for embedded audio, video, images, LaTeX formulas, and HTML formatting",
      "Seamless synchronization across desktop and mobile devices via AnkiWeb",
      "Access to thousands of community-curated decks across medicine, languages, and sciences",
      "Comprehensive card statistics, retention graphs, and review interval forecasting",
      "Extensible Python plugin architecture for customizing cards, study modes, and workflows"
    ],
    uses: "Memorize medical terminology, acquire foreign languages, master technical interviews, and retain study material efficiently.",
    tags: ["flashcards", "spaced-repetition", "study-tool", "quizlet-alternative", "memorization", "anki"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Anki-icon.svg",
    screenshotSources: [],
    download: "https://apps.ankiweb.net/",
    source: "https://github.com/ankitects/anki",
    website: "https://apps.ankiweb.net/",
    docs: "https://docs.ankiweb.net/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.ankiweb.Anki" },
      { label: "Windows (winget)", command: "winget install Ankitects.Anki" },
      { label: "macOS (brew)", command: "brew install --cask anki" }
    ],
    comparisonData: {
      columns: ["Anki", "Quizlet"],
      rows: [
        { feature: "Full offline access", values: [true, false] },
        { feature: "Free FSRS spaced repetition algorithm", values: [true, false] },
        { feature: "No advertisements or paywalled study modes", values: [true, false] },
        { feature: "Custom Python plugin ecosystem", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11 (64-bit), macOS 11+, or modern 64-bit Linux\n2 GB RAM minimum\nOpenGL 2.0+ compatible graphics",
    maintainer: "individual",
    developer: "Damien Elmes & Anki Community",
    developerUrl: "https://github.com/ankitects",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "ankidroid",
    name: "AnkiDroid",
    alternative: "Quizlet Android, Brainscape Android, Cram.com, Flashcards Deluxe",
    category: "Education",
    subcategory: "Learning",
    license: "GPL-3.0",
    version: "2.18.4",
    fileSize: "28 MB",
    description: "Open-source Android flashcard companion for Anki featuring full offline spaced repetition study.",
    fullDescription: "AnkiDroid is the official community-developed open-source Android client for Anki. It empowers students and lifelong learners to review flashcards on the go with zero network latency. AnkiDroid seamlessly synchronizes card progress, media assets, and study intervals with AnkiWeb and desktop Anki. It offers advanced gestures, custom card themes (including OLED dark mode), whiteboard drawing for script and math practice, speech-to-text, and text-to-speech pronunciation support.",
    features: [
      "Complete offline flashcard study with seamless AnkiWeb cloud synchronization",
      "Full support for embedded media, images, audio clips, and LaTeX equations",
      "Interactive whiteboard overlay for practicing character writing and diagram sketching",
      "Customizable touch gestures, hardware keyboard shortcuts, and game controller input",
      "Advanced statistics including review heatmaps, interval distributions, and forecast charts",
      "Text-to-speech (TTS) engine integration for automated pronunciation practice"
    ],
    uses: "Review language vocabularies, anatomical terms, and study decks anywhere on your Android phone or tablet.",
    tags: ["anki", "android", "flashcards", "spaced-repetition", "learning", "study", "ankidroid"],
    logoSource: "https://raw.githubusercontent.com/ankidroid/Anki-Android/master/AnkiDroid/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
    screenshotSources: [],
    download: "https://github.com/ankidroid/Anki-Android/releases",
    source: "https://github.com/ankidroid/Anki-Android",
    website: "https://ankidroid.org/",
    docs: "https://docs.ankidroid.org/",
    youtube: "",
    installMethods: [
      { label: "F-Droid", command: "https://f-droid.org/packages/com.ichi2.anki/" },
      { label: "Google Play", command: "https://play.google.com/store/apps/details?id=com.ichi2.anki" },
      { label: "GitHub APK", command: "https://github.com/ankidroid/Anki-Android/releases/latest" }
    ],
    comparisonData: {
      columns: ["AnkiDroid", "Quizlet Android"],
      rows: [
        { feature: "100% Free and Open Source", values: [true, false] },
        { feature: "No full-screen advertisements", values: [true, false] },
        { feature: "Full offline functionality", values: [true, false] },
        { feature: "Drawing whiteboard for practice", values: [true, false] },
        { feature: "FSRS Spaced Repetition engine", values: [true, false] }
      ]
    },
    systemRequirements: "Android 5.0 (Lollipop) or newer\n50 MB storage for base app plus media assets\nOptional touch stylus or Bluetooth controller",
    maintainer: "community",
    developer: "AnkiDroid Open Source Team",
    developerUrl: "https://github.com/ankidroid",
    platforms: ["Android"]
  },
  {
    id: "kiwix",
    name: "Kiwix",
    alternative: "Pocket Offline, Instapaper, Wikipedia Offline, EverDB",
    category: "Education",
    subcategory: "Learning",
    license: "GPL-3.0",
    version: "2.4.1",
    fileSize: "110 MB",
    description: "Offline reader and knowledge archiver that lets you access Wikipedia, Project Gutenberg, and educational content without internet.",
    fullDescription: "Kiwix is an open-source offline reader designed to bring the world's knowledge to people without reliable internet connectivity. Kiwix downloads entire websites, encyclopedias, and literature libraries into highly compressed ZIM archive files. You can carry the entirety of Wikipedia, Wiktionary, TED Talks, Project Gutenberg, Stack Overflow, and Khan Academy on a simple USB flash drive or phone storage. Kiwix includes full-text indexing, fast search, bookmarking, and local hotspot broadcasting.",
    features: [
      "Offline access to complete encyclopedias including Wikipedia, Wikimed, and Wikivoyage",
      "High-density ZIM compression saving gigabytes of text and media into compact files",
      "Instant full-text search engine operating without network requests",
      "Built-in local HTTP server allowing a single device to share knowledge across a local Wi-Fi hotspot",
      "Support for Project Gutenberg e-books, Stack Exchange archives, and educational videos",
      "Available across desktop operating systems, Android, iOS, and Raspberry Pi"
    ],
    uses: "Provide educational resources to schools, disaster zones, remote travelers, and prisons without active web connections.",
    tags: ["offline-reader", "wikipedia-offline", "education", "knowledge-base", "zim", "kiwix"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/2/24/Kiwix_logo.svg",
    screenshotSources: [],
    download: "https://kiwix.org/en/download/",
    source: "https://github.com/kiwix/kiwix-desktop",
    website: "https://kiwix.org/",
    docs: "https://kiwix.org/en/faq/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.kiwix.desktop" },
      { label: "Windows (winget)", command: "winget install Kiwix.KiwixDesktop" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/org.kiwix.kiwixmobile/" }
    ],
    comparisonData: {
      columns: ["Kiwix", "Pocket / Instapaper"],
      rows: [
        { feature: "Store millions of Wikipedia pages offline", values: [true, false] },
        { feature: "Operates completely air-gapped", values: [true, false] },
        { feature: "Local Wi-Fi library hotspot broadcasting", values: [true, false] },
        { feature: "Open Source ZIM file format", values: [true, false] },
        { feature: "Zero tracking or telemetry", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android, iOS)\nStorage space dependent on downloaded ZIM archives (2 GB to 100+ GB)\n1 GB RAM minimum",
    maintainer: "organization",
    developer: "Kiwix Association",
    developerUrl: "https://github.com/kiwix",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "kolibri",
    name: "Kolibri",
    alternative: "Khan Academy Offline, Coursera Enterprise, Blackboard Learn, Google Classroom",
    category: "Education",
    subcategory: "Learning",
    license: "MIT",
    version: "0.17.2",
    fileSize: "145 MB",
    description: "Offline-first educational learning platform delivering curated curriculum, assessments, and teacher tools without internet.",
    fullDescription: "Kolibri is an open-source, offline-first educational platform developed by Learning Equality. Specially engineered for low-resource environments and regions without reliable broadband, Kolibri provides a complete digital classroom experience without internet access. Teachers can create student rosters, assign targeted exercises, track student progress, and distribute open-licensed educational content from providers like Khan Academy, CK-12, and TESSA. Kolibri can sync progress peer-to-peer or via USB drives between remote classrooms.",
    features: [
      "Offline digital learning platform with assessments, video lessons, and interactive exercises",
      "Teacher dashboard for managing classes, assigning lessons, and monitoring individual progress",
      "Rich library of pre-curated open curriculum across math, science, language, and literacy",
      "Peer-to-peer and removable media synchronization between offline devices",
      "Lightweight architecture capable of running on Raspberry Pi, low-cost laptops, and servers",
      "Completely multilingual interface supporting over 30 languages"
    ],
    uses: "Empower rural schools, refugee camps, and offline communities with modern digital classrooms and curriculum.",
    tags: ["education", "lms", "offline-learning", "khan-academy", "edtech", "kolibri"],
    logoSource: "https://learningequality.org/static/assets/favicon.ico",
    screenshotSources: [],
    download: "https://learningequality.org/kolibri/download/",
    source: "https://github.com/learningequality/kolibri",
    website: "https://learningequality.org/kolibri/",
    docs: "https://kolibri.readthedocs.io/",
    youtube: "",
    installMethods: [
      { label: "Python pip", command: "pip install kolibri" },
      { label: "Ubuntu / Debian (PPA)", command: "sudo add-apt-repository ppa:learningequality/kolibri && sudo apt install kolibri" },
      { label: "Windows Installer", command: "https://learningequality.org/kolibri/download/" }
    ],
    comparisonData: {
      columns: ["Kolibri", "Google Classroom"],
      rows: [
        { feature: "Works 100% offline without internet", values: [true, false] },
        { feature: "Peer-to-peer USB progress synchronization", values: [true, false] },
        { feature: "Self-hostable on Raspberry Pi", values: [true, false] },
        { feature: "No student account telemetry or ads", values: [true, false] },
        { feature: "Open Source (MIT)", values: [true, false] }
      ]
    },
    systemRequirements: "500 MHz CPU or faster (Raspberry Pi 3+ supported)\n512 MB RAM (1 GB recommended)\nStorage for downloaded curriculum channels",
    maintainer: "organization",
    developer: "Learning Equality",
    developerUrl: "https://github.com/learningequality",
    platforms: ["Linux", "Windows", "macOS", "Web"]
  },
  {
    id: "moodle",
    name: "Moodle",
    alternative: "Canvas LMS, Blackboard Learn, Brightspace, Google Classroom, Schoology",
    category: "Education",
    subcategory: "Learning",
    license: "GPL-3.0-or-later",
    version: "4.5",
    fileSize: "85 MB",
    description: "World-leading open-source learning management system (LMS) providing custom, secure online education environments.",
    fullDescription: "Moodle (Modular Object-Oriented Dynamic Learning Environment) is the most widely adopted open-source learning management platform globally, powering universities, schools, and enterprise training programs. Moodle provides educators with a comprehensive suite of tools to create online courses, conduct timed quizzes, manage gradebooks, evaluate assignments with rubrics, and facilitate collaborative student forums. Its modular architecture supports thousands of community plugins and integrations.",
    features: [
      "Comprehensive course builder supporting multimedia lessons, SCORM, and H5P interactive content",
      "Advanced assessment engine with question banks, automated grading, and anti-cheating timers",
      "Flexible gradebook with custom weighting, competency tracking, and outcome reporting",
      "Collaborative tools including discussion forums, peer-reviewed workshops, and live chat",
      "Role-based access controls for administrators, teachers, teaching assistants, and students",
      "Over 2,000 plugins for video conferencing (Jitsi, BigBlueButton), analytics, and SSO"
    ],
    uses: "Deliver university courses, school district digital learning, professional certifications, and workplace training.",
    tags: ["lms", "e-learning", "education", "course-management", "canvas-alternative", "moodle"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Moodle-logo.svg",
    screenshotSources: [],
    download: "https://download.moodle.org/",
    source: "https://github.com/moodle/moodle",
    website: "https://moodle.org/",
    docs: "https://docs.moodle.org/",
    youtube: "",
    installMethods: [
      { label: "Docker", command: "docker run -d --name moodle -p 80:80 -p 443:443 bitnami/moodle" },
      { label: "Git clone", command: "git clone -b MOODLE_405_STABLE git://git.moodle.org/moodle.git" }
    ],
    comparisonData: {
      columns: ["Moodle", "Canvas LMS"],
      rows: [
        { feature: "Self-hosted on private server", values: [true, false] },
        { feature: "No proprietary per-student licensing fees", values: [true, false] },
        { feature: "Thousands of free community plugins", values: [true, false] },
        { feature: "Full database and student data sovereignty", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "PHP 8.1 or 8.2, Web server (Apache/Nginx)\nDatabase: MariaDB 10.6+, MySQL 8.0+, or PostgreSQL 14+\n1 GB RAM minimum (4 GB+ recommended for active classes)",
    maintainer: "organization",
    developer: "Moodle Pty Ltd & Global Community",
    developerUrl: "https://github.com/moodle",
    platforms: ["Web", "Linux", "Windows"]
  },
  {
    id: "gcompris",
    name: "GCompris",
    alternative: "ABCmouse, Starfall, Endless Alphabet, PBS KIDS Games",
    category: "Education",
    subcategory: "Learning",
    license: "GPL-3.0",
    version: "4.2",
    fileSize: "120 MB",
    description: "High-quality educational software suite featuring over 180 engaging learning activities for children aged 2 to 10.",
    fullDescription: "GCompris is a comprehensive open-source educational software suite tailored for young children aged 2 to 10. Maintained as part of the KDE Education project, GCompris offers over 180 fun, pedagogical activities across mathematics, science, reading, geography, computer literacy, logic puzzles, and memory games. GCompris is completely free of ads, tracking, and in-app purchases, making it a safe choice for elementary school classrooms and home learning.",
    features: [
      "Over 180 interactive pedagogical activities covering core elementary subjects",
      "Math training: counting, arithmetic, fractions, symmetry, and geometric shapes",
      "Science and discovery: water cycle, solar system, electrical circuits, and geography",
      "Computer literacy: keyboard typing practice, mouse control, and programming logic basics",
      "Multilingual audio pronunciations supporting over 30 global languages",
      "Ad-free, tracking-free safe environment compliant with child privacy standards"
    ],
    uses: "Teach early reading, mathematics, spatial reasoning, and digital literacy in primary schools and at home.",
    tags: ["education", "kids", "learning", "elementary", "kde", "games", "gcompris"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Gcompris_logo_%282016%29.svg",
    screenshotSources: [],
    download: "https://gcompris.net/downloads-en.html",
    source: "https://invent.kde.org/education/gcompris",
    website: "https://gcompris.net/",
    docs: "https://gcompris.net/wiki/Manual",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.gcompris.GCompris" },
      { label: "Windows (winget)", command: "winget install KDE.GCompris" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/net.gcompris.full/" }
    ],
    comparisonData: {
      columns: ["GCompris", "ABCmouse"],
      rows: [
        { feature: "100% Free with no monthly subscriptions", values: [true, false] },
        { feature: "Completely offline functionality", values: [true, false] },
        { feature: "Zero trackers or commercial data collection", values: [true, false] },
        { feature: "Over 180 distinct educational activities", values: [true, true] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\n1 GB RAM minimum\nOpenGL 2.0 / OpenGL ES 2.0 compatible GPU",
    maintainer: "community",
    developer: "KDE Community & Timothée Giet",
    developerUrl: "https://invent.kde.org/education/gcompris",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "luanti",
    name: "Luanti",
    alternative: "Minecraft, Roblox, Terraria, Terasology, Blockstorm",
    category: "Games",
    subcategory: "Game Development",
    license: "LGPL-2.1-or-later",
    version: "5.10.0",
    fileSize: "40 MB",
    description: "Extensible infinite-world voxel sandbox game engine formerly known as Minetest, powered by lightweight Lua scripting.",
    fullDescription: "Luanti (formerly Minetest) is an open-source voxel game engine and sandbox gaming platform. Unlike monolithic block games, Luanti is a lightweight, high-performance engine that allows players to discover and download hundreds of community-made games, mods, and texture packs directly from its integrated ContentDB catalog. Luanti features infinite world generation, procedural biome algorithms, dedicated multiplayer server capabilities, and an accessible Lua API for modding.",
    features: [
      "High-performance C++ voxel engine with multi-threaded chunk rendering and procedural terrain",
      "Integrated ContentDB browser for one-click mod, game, and texture pack installation",
      "Extensive Lua scripting API for crafting custom game mechanics, items, and AI mobs",
      "Dedicated multi-user server hosting capable of supporting dozens of simultaneous players",
      "Infinitely expandable 62,000 x 62,000 x 62,000 block world boundaries",
      "Cross-platform multiplayer play between Linux, Windows, macOS, and Android"
    ],
    uses: "Create and play custom block-based sandbox adventures, architectural builds, survival games, and educational simulations.",
    tags: ["voxel", "sandbox", "minetest", "minecraft-alternative", "lua", "game-engine", "luanti"],
    logoSource: "https://raw.githubusercontent.com/luanti-org/luanti/master/misc/luanti.svg",
    screenshotSources: [],
    download: "https://www.luanti.org/downloads/",
    source: "https://github.com/luanti-org/luanti",
    website: "https://www.luanti.org/",
    docs: "https://rubenwardy.com/minetest_modding_book/en/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.minetest.Minetest" },
      { label: "Ubuntu / Debian", command: "sudo apt install minetest" },
      { label: "Windows (winget)", command: "winget install Luanti-org.Luanti" },
      { label: "macOS (brew)", command: "brew install minetest" }
    ],
    comparisonData: {
      columns: ["Luanti", "Minecraft"],
      rows: [
        { feature: "100% Free and Open Source engine", values: [true, false] },
        { feature: "Built-in mod catalog (ContentDB)", values: [true, false] },
        { feature: "Zero telemetry or mandatory Microsoft accounts", values: [true, false] },
        { feature: "Runs smoothly on older and low-spec hardware", values: [true, false] },
        { feature: "Native C++ performance without Java runtime", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\nDual-core CPU, 2 GB RAM\nOpenGL 2.1+ or OpenGL ES 2.0+ GPU",
    maintainer: "community",
    developer: "Luanti Core Developers (Perttu Ahola & Contributors)",
    developerUrl: "https://github.com/luanti-org",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "supertuxkart",
    name: "SuperTuxKart",
    alternative: "Mario Kart, Crash Team Racing, Sonic & All-Stars Racing, Garfield Kart",
    category: "Games",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "1.4",
    fileSize: "750 MB",
    description: "Action-packed open-source 3D arcade kart racer featuring open-source mascots, vibrant tracks, and multiplayer battles.",
    fullDescription: "SuperTuxKart is a beloved open-source 3D arcade kart racing game featuring Tux the Linux penguin and his open-source mascot companions, including Beastie, Suzanne, Wilber, and Pidgin. Offering an engaging single-player story campaign, split-screen local multiplayer, and online networked competition, SuperTuxKart features dozens of imaginative race tracks, battle arenas, soccer mode, time trials, and ghost challenges. Its custom Antarctica graphics engine delivers modern lighting and particle effects.",
    features: [
      "Over 20 handcrafted tracks across alien planets, pirate coves, futuristic cities, and volcanoes",
      "Dynamic multiplayer modes: Grand Prix, Time Trial, Battle Mode, Soccer, and Ghost racing",
      "Online networked multiplayer servers and 4-player local split-screen couch co-op",
      "Story mode campaign with progressive challenges and unlockable kart accessories",
      "Community add-on manager allowing seamless in-game installation of player-created tracks and karts",
      "Custom 3D Antarctica rendering engine with advanced shaders, reflections, and particle physics"
    ],
    uses: "Enjoy competitive arcade kart racing with family and friends locally or over the internet without microtransactions.",
    tags: ["kart-racing", "arcade", "mario-kart-alternative", "multiplayer", "family-friendly", "supertuxkart"],
    logoSource: "https://raw.githubusercontent.com/supertuxkart/stk-code/master/data/supertuxkart_256.png",
    screenshotSources: [],
    download: "https://supertuxkart.net/Download",
    source: "https://github.com/supertuxkart/stk-code",
    website: "https://supertuxkart.net/",
    docs: "https://supertuxkart.net/Community",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.supertuxkart.SuperTuxKart" },
      { label: "Ubuntu / Debian", command: "sudo apt install supertuxkart" },
      { label: "Windows (winget)", command: "winget install SuperTuxKart.SuperTuxKart" },
      { label: "macOS (brew)", command: "brew install --cask supertuxkart" }
    ],
    comparisonData: {
      columns: ["SuperTuxKart", "Mario Kart 8 Deluxe"],
      rows: [
        { feature: "Available on PC, Linux, macOS, and Android", values: [true, false] },
        { feature: "Free community-created add-on tracks and karts", values: [true, false] },
        { feature: "No proprietary console or subscription required", values: [true, false] },
        { feature: "Cross-platform online multiplayer", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\nDual-core 2 GHz CPU, 2 GB RAM\nGPU: NVIDIA GeForce 470 GTX, AMD Radeon 6870 HD series, or Intel HD 4000 minimum",
    maintainer: "community",
    developer: "SuperTuxKart Development Team",
    developerUrl: "https://github.com/supertuxkart",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "0ad",
    name: "0 A.D.",
    alternative: "Age of Empires II, Age of Mythology, Empire Earth, Civilization VI",
    category: "Games",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "0.0.26b",
    fileSize: "1.2 GB",
    description: "Historical real-time strategy game of ancient warfare allowing players to command thirteen historical civilizations.",
    fullDescription: "0 A.D. (pronounced 'zero ey-dee') is a premier open-source historical real-time strategy (RTS) game created by Wildfire Games. Spanning the era between 500 B.C. and 500 A.D., players lead one of thirteen distinct historical civilizations—including Greeks, Romans, Persians, Celts, Carthaginians, and Mauryans. Featuring deep economic management, detailed naval warfare, territory border control, realistic combat formations, and modding capabilities through its Pyrogenesis engine, 0 A.D. provides an epic RTS experience.",
    features: [
      "Command 13 authentic ancient civilizations with unique architecture, units, and military technologies",
      "Historically authentic buildings, weapons, and formations modeled with historical accuracy",
      "Dynamic territory system where structures must be protected within continuous civic borders",
      "Full multiplayer lobby for online ranked skirmishes, cooperative campaigns, and custom battles",
      "Integrated Atlas Scenario Editor for creating custom maps, campaigns, and cinematic events",
      "Pyrogenesis custom 3D engine supporting ambient occlusion, water reflections, and weather systems"
    ],
    uses: "Play deep historical strategy campaigns and competitive online RTS matches without purchasing paid expansions.",
    tags: ["rts", "strategy", "ancient-history", "age-of-empires-alternative", "wildfire-games", "0ad"],
    logoSource: "https://raw.githubusercontent.com/0ad/0ad/master/build/resources/0ad.png",
    screenshotSources: [],
    download: "https://play0ad.com/download/",
    source: "https://github.com/0ad/0ad",
    website: "https://play0ad.com/",
    docs: "https://trac.wildfiregames.com/wiki",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub com.play0ad.zeroad" },
      { label: "Ubuntu / Debian", command: "sudo apt install 0ad" },
      { label: "Windows (winget)", command: "winget install WildfireGames.0AD" },
      { label: "macOS (brew)", command: "brew install --cask 0-ad" }
    ],
    comparisonData: {
      columns: ["0 A.D.", "Age of Empires II: DE"],
      rows: [
        { feature: "100% Free with all 13 civilizations included", values: [true, false] },
        { feature: "Native cross-platform Linux, macOS, and Windows", values: [true, false] },
        { feature: "Territory border management mechanics", values: [true, false] },
        { feature: "Integrated open-source Atlas map editor", values: [true, false] },
        { feature: "Open Source engine and community developed", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS 10.13+)\nIntel/AMD Dual Core 2.6 GHz CPU\n4 GB RAM (8 GB recommended for 8-player matches)\nDirectX 11 or OpenGL 3.3 compatible graphics card with 1 GB VRAM",
    maintainer: "community",
    developer: "Wildfire Games",
    developerUrl: "https://github.com/0ad",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "openttd",
    name: "OpenTTD",
    alternative: "Transport Tycoon Deluxe, Simutrans, Railway Empire, Cities: Skylines, Transport Fever",
    category: "Games",
    subcategory: "General",
    license: "GPL-2.0",
    version: "14.1",
    fileSize: "18 MB",
    description: "Open-source business simulation game where players build global transportation networks and move cargo for profit.",
    fullDescription: "OpenTTD is an open-source urban and logistical simulation game modeled after Chris Sawyer's classic Transport Tycoon Deluxe. Players manage a fledgling transportation company in the year 1950 and build expansive networks of roads, railways, airports, and shipping channels. By delivering passengers, coal, mail, goods, and industrial materials across procedurally generated landscapes, players turn profits, expand transit hubs, and build multi-track railway systems. It includes online multiplayer for up to 255 players.",
    features: [
      "Build complex rail networks with signals, junctions, roundabouts, and multi-train timetables",
      "Manage four distinct transport modes: trains, trucks/buses, ships, and passenger planes",
      "Massive procedurally generated maps up to 4096 x 4096 tiles with rivers, mountains, and cities",
      "Integrated online content downloader for community NewGRF graphics, AI scripts, and game scenarios",
      "Multiplayer networking supporting up to 255 players in 15 competing transport companies",
      "Full localization into over 50 languages with custom climate modes (Temperate, Sub-arctic, Sub-tropical, Toyland)"
    ],
    uses: "Design logistical transit corridors, optimize railway junctions, and build transportation empires with friends.",
    tags: ["simulation", "transport-tycoon", "railway", "logistics", "tycoon", "openttd"],
    logoSource: "https://raw.githubusercontent.com/OpenTTD/OpenTTD/master/media/openttd.512.png",
    screenshotSources: [],
    download: "https://www.openttd.org/downloads/openttd-releases/latest",
    source: "https://github.com/OpenTTD/OpenTTD",
    website: "https://www.openttd.org/",
    docs: "https://wiki.openttd.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.openttd.OpenTTD" },
      { label: "Ubuntu / Debian", command: "sudo apt install openttd" },
      { label: "Windows (winget)", command: "winget install OpenTTD.OpenTTD" },
      { label: "macOS (brew)", command: "brew install --cask openttd" }
    ],
    comparisonData: {
      columns: ["OpenTTD", "Railway Empire"],
      rows: [
        { feature: "Simultaneous trains, road vehicles, ships, and planes", values: [true, false] },
        { feature: "Huge procedural maps up to 4096 x 4096", values: [true, false] },
        { feature: "Online multiplayer supporting up to 255 players", values: [true, false] },
        { feature: "Thousands of community NewGRF mod extensions", values: [true, false] },
        { feature: "100% Free and Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS, Android)\n1 GHz CPU, 512 MB RAM\nMinimal GPU required (runs on integrated graphics)",
    maintainer: "community",
    developer: "OpenTTD Team",
    developerUrl: "https://github.com/OpenTTD",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  }
];
