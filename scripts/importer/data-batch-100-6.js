module.exports = [
  {
    id: "rosegarden",
    name: "Rosegarden",
    alternative: "Cubase, Logic Pro, Sibelius, Finale, Cakewalk",
    category: "Audio",
    subcategory: "DAWs",
    license: "GPL-2.0-or-later",
    version: "24.12",
    fileSize: "28 MB",
    description: "Versatile audio and MIDI sequencer, score editor, and general-purpose music composition environment.",
    fullDescription: "Rosegarden is an easy-to-learn, attractive music composition and editing environment based around an advanced MIDI sequencer that features rich notation editing, audio recording, and LADSPA/DSSI plugin support. Engineered for composers, songwriters, and music students, Rosegarden provides traditional stave-based music scoring alongside full matrix and event-list editing. It integrates seamlessly with ALSA, JACK, and Linux synth engines such as FluidSynth and Yoshimi to produce publication-grade musical scores and complex multi-track arrangements.",
    features: [
      "Advanced multi-track MIDI sequencer with precise timing and expressive velocity editing",
      "Comprehensive musical score editor with support for dynamics, fingering, key signatures, and lyrics",
      "Piano roll matrix editor, event list view, and drum grid editor for modern workflow flexibility",
      "Audio playback and recording integrated with JACK and ALSA audio infrastructure",
      "LADSPA and DSSI plugin effect and instrument hosting with automation curves",
      "Direct export and import of MIDI, MusicXML, LilyPond score files, and printable PDF documents"
    ],
    uses: "Compose orchestral scores, sequence MIDI synthesizers, transcribe sheet music, and arrange multi-instrumental compositions.",
    tags: ["midi-sequencer", "score-editor", "daw", "music-composition", "sheet-music", "notation", "audio"],
    logoSource: "https://rosegardenmusic.com/favicon.ico",
    screenshotSources: [],
    download: "https://rosegardenmusic.com/",
    source: "https://github.com/rosegardenmusic/rosegarden",
    website: "https://rosegardenmusic.com/",
    docs: "https://rosegardenmusic.com/wiki/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install rosegarden" },
      { label: "Fedora", command: "sudo dnf install rosegarden" },
      { label: "Arch Linux", command: "sudo pacman -S rosegarden" }
    ],
    comparisonData: {
      columns: ["Rosegarden", "Sibelius / Cubase"],
      rows: [
        { feature: "Built-in MIDI sequencer combined with score editing", values: [true, true] },
        { feature: "Direct LilyPond typesetting export", values: [true, false] },
        { feature: "100% Free with no recurring subscription fees", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Native Linux ALSA and JACK integration", values: [true, false] }
      ]
    },
    systemRequirements: "Linux OS\nJACK or ALSA sound server\n1 GHz CPU, 1 GB RAM\nMIDI synthesizer or soundfont recommended",
    maintainer: "community",
    developer: "Rosegarden Development Team",
    developerUrl: "https://github.com/rosegardenmusic",
    platforms: ["Linux"]
  },
  {
    id: "zrythm",
    name: "Zrythm",
    alternative: "Ableton Live, FL Studio, Bitwig Studio, Reaper",
    category: "Audio",
    subcategory: "DAWs",
    license: "AGPL-3.0-or-later",
    version: "1.0.0",
    fileSize: "75 MB",
    description: "Modern, feature-rich digital audio workstation engineered for high-performance audio production and sequencing.",
    fullDescription: "Zrythm is a modern digital audio workstation designed to be rapid, intuitive, and highly flexible for music producers, sound designers, and electronic musicians. Built with GTK4 and modern C, Zrythm offers unlimited tracks, advanced automation curves, chord progression helpers, robust chord pads, and extensive support for LV2, VST3, CLAP, and JSFX plugins. It features low-latency multi-threaded audio processing, flexible routing matrices, and comprehensive hardware MIDI controller support.",
    features: [
      "Modern GTK4-powered user interface with high-DPI scaling and responsive workflow",
      "Comprehensive plugin format hosting: LV2, VST3, CLAP, LADSPA, and JSFX audio effects",
      "Advanced automation lanes with curved bezier ramps, LFO modulators, and macro controls",
      "Built-in musical aids including chord tracks, scale highlighting, and harmonizer tools",
      "Flexible matrix routing for audio, MIDI, sidechaining, and multi-channel auxiliary sends",
      "Seamless cross-platform session compatibility with non-destructive audio editing"
    ],
    uses: "Produce electronic music, record live bands, mix multi-track projects, sound design, and master audio tracks.",
    tags: ["daw", "music-production", "audio-workstation", "vst3", "clap", "lv2", "synthesizer", "audio"],
    logoSource: "https://www.zrythm.org/static/favicon.ico",
    screenshotSources: [],
    download: "https://www.zrythm.org/en/download.html",
    source: "https://github.com/zrythm/zrythm",
    website: "https://www.zrythm.org/",
    docs: "https://manual.zrythm.org/en/index.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.zrythm.Zrythm" },
      { label: "Arch Linux (AUR)", command: "yay -S zrythm" },
      { label: "Official Installer", command: "https://www.zrythm.org/en/download.html" }
    ],
    comparisonData: {
      columns: ["Zrythm", "Ableton Live / Bitwig"],
      rows: [
        { feature: "Modern GTK4 UI with CLAP, LV2, and VST3 support", values: [true, false] },
        { feature: "Built-in chord assistance and scale highlighting", values: [true, true] },
        { feature: "No restrictive DRM or licensing dongles", values: [true, false] },
        { feature: "Fully open source (AGPL-3.0)", values: [true, false] },
        { feature: "Zero recurring subscription fees", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\n64-bit multi-core CPU (Intel/AMD/Apple Silicon)\n4 GB RAM (8 GB recommended)\nAudio interface with ASIO, JACK, or PipeWire",
    maintainer: "individual",
    developer: "Alexandros Theodotou & Zrythm Contributors",
    developerUrl: "https://github.com/zrythm",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "mixxx",
    name: "Mixxx",
    alternative: "VirtualDJ, Traktor Pro, Serato DJ, Rekordbox",
    category: "Audio",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "2.4.2",
    fileSize: "85 MB",
    description: "Professional open-source DJ software offering dual-deck mixing, beat matching, stem isolation, and controller support.",
    fullDescription: "Mixxx is the world's premier open-source DJ software, trusted by professional club performers, mobile entertainers, and bedroom DJs worldwide. It provides advanced dual- and four-deck playback with automatic BPM calculation, musical key detection, pitch shifting, dynamic beat sync, and vinyl emulation (DVS). Mixxx includes out-of-the-box hardware mappings for over 100 popular DJ controllers, customizable samplers, beat loops, master audio effects, and direct live streaming to Icecast and Shoutcast servers.",
    features: [
      "Four-deck playback with dual-waveform displays, customizable hotcues, and seamless beat looping",
      "Automatic BPM detection, musical harmonic key detection, and beat matching synchronization",
      "Native plug-and-play mappings for over 100 DJ hardware controllers from Pioneer, Denon, Hercules, and Numark",
      "Digital Vinyl System (DVS) timecode vinyl and CD support for ultra-low latency turntable scratching",
      "Multi-effect processing engine with flanger, delay, reverb, bitcrusher, and high/low pass filters",
      "Integrated live radio broadcasting client for streaming straight to Icecast and Shoutcast relays"
    ],
    uses: "Perform live DJ sets, mix multi-track dance sets, livestream radio shows, and practice beatmatching with hardware controllers.",
    tags: ["dj-software", "audio-mixing", "beatmatching", "turntable", "dvs", "broadcasting", "music", "audio"],
    logoSource: "https://mixxx.org/theme/images/favicon.ico",
    screenshotSources: [],
    download: "https://mixxx.org/download/",
    source: "https://github.com/mixxxdj/mixxx",
    website: "https://mixxx.org/",
    docs: "https://manual.mixxx.org/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install mixxx" },
      { label: "Linux (Flathub)", command: "flatpak install flathub org.mixxxdj.Mixxx" },
      { label: "Windows (winget)", command: "winget install Mixxx.Mixxx" },
      { label: "macOS (brew)", command: "brew install --cask mixxx" }
    ],
    comparisonData: {
      columns: ["Mixxx", "VirtualDJ / Traktor"],
      rows: [
        { feature: "Zero paywalls on hardware DJ controller mappings", values: [true, false] },
        { feature: "Built-in Icecast / Shoutcast live internet broadcasting", values: [true, false] },
        { feature: "Digital Vinyl System (DVS) included without extra licenses", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] },
        { feature: "Four-deck mixing and key detection", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS 10.15+\nIntel Core i3 / AMD Ryzen or Apple Silicon\n4 GB RAM\nStandard sound card or multi-channel DJ audio interface",
    maintainer: "community",
    developer: "Mixxx Development Team",
    developerUrl: "https://github.com/mixxxdj",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "lmms",
    name: "LMMS",
    alternative: "FL Studio, Ableton Live, Logic Pro, GarageBand",
    category: "Audio",
    subcategory: "DAWs",
    license: "GPL-2.0-or-later",
    version: "1.2.2",
    fileSize: "40 MB",
    description: "Intuitive cross-platform digital audio workstation and beatmaking suite with built-in synthesizers and drum sequencers.",
    fullDescription: "LMMS (Let's Make Music) is a user-friendly, cross-platform digital audio workstation that lets musicians compose, sequence, synthesize, and mix tracks entirely on their computers. Known for its FL Studio-style step sequencer and Song-Editor timeline, LMMS bundles a versatile collection of built-in software instruments, including Triple-Oscillator, Monstro, BitInvader, and a Commodore 64 SID chip emulator. It provides native support for VST instrument plugins, SoundFont (SF2) libraries, and MIDI hardware keyboards.",
    features: [
      "Pattern-based Song-Editor and Beat+Bassline step sequencer for rapid groove production",
      "Piano Roll editor for arranging complex melodies, chord progressions, and note velocities",
      "Bundled synthesizers including Triple-Oscillator, Monstro, BitInvader, and NES/Commodore chip emulators",
      "VST and VSTi 32/64-bit plugin hosting support with custom automation lanes",
      "64-channel FX mixer with unlimited effects, send channels, and LADSPA plugin compatibility",
      "Full SoundFont2 (SF2) and GUS patch player support for realistic orchestral and acoustic sounds"
    ],
    uses: "Produce electronic beats, compose video game chiptunes, sequence synthwave tracks, and produce complete music albums.",
    tags: ["daw", "beatmaker", "fl-studio-alternative", "chiptune", "synthesizer", "midi-sequencer", "audio"],
    logoSource: "https://lmms.io/favicon.ico",
    screenshotSources: [],
    download: "https://lmms.io/download/",
    source: "https://github.com/LMMS/lmms",
    website: "https://lmms.io/",
    docs: "https://docs.lmms.io/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.lmms.LMMS" },
      { label: "Ubuntu / Debian", command: "sudo apt install lmms" },
      { label: "Windows (winget)", command: "winget install LMMS.LMMS" },
      { label: "macOS (brew)", command: "brew install --cask lmms" }
    ],
    comparisonData: {
      columns: ["LMMS", "FL Studio"],
      rows: [
        { feature: "Pattern step sequencer with integrated piano roll", values: [true, true] },
        { feature: "Complete software suite free of charge", values: [true, false] },
        { feature: "No demo export restrictions or project lockouts", values: [true, false] },
        { feature: "Cross-platform (Linux, Windows, macOS)", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 7/10/11, macOS 10.14+\n1.5 GHz x86/x64 or Apple Silicon CPU\n2 GB RAM\nStandard audio hardware",
    maintainer: "community",
    developer: "LMMS Development Team",
    developerUrl: "https://github.com/LMMS",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "ardour",
    name: "Ardour",
    alternative: "Pro Tools, Logic Pro, Studio One, Reaper, Cubase",
    category: "Audio",
    subcategory: "DAWs",
    license: "GPL-2.0-or-later",
    version: "8.10",
    fileSize: "95 MB",
    description: "Industry-grade digital audio workstation engineered for recording, non-destructive editing, mixing, and mastering.",
    fullDescription: "Ardour is a professional-grade digital audio workstation built for recording engineers, musicians, soundtrack editors, and audio post-production specialists. Engineered to deliver pristine audio fidelity, Ardour offers unlimited audio, MIDI, and bus tracks with sample-accurate editing, non-linear cue grid sequencing, and comprehensive plugin support across VST2, VST3, LV2, and AU formats. Its mixing console features full parameter automation, flexible routing matrices, and extensive hardware control surface support including Mackie Control and OSC protocols.",
    features: [
      "Unlimited multi-channel audio tracks, MIDI tracks, and sub-mix buses with zero arbitrary limits",
      "Pristine floating-point internal signal path with sample-accurate editing and zero latency compensation",
      "Non-linear clip launching grid for electronic performance combined with traditional horizontal linear timeline",
      "Full mixing desk architecture with inline signal meters, sends, inserts, and master bus processing",
      "Broad plugin compatibility supporting VST2, VST3, LV2, and AU formats with comprehensive GUI automation",
      "Comprehensive hardware control surface integration including Mackie MCU, SSL, PreSonus FaderPort, and OSC"
    ],
    uses: "Multi-track studio band recording, podcast production, soundtrack mixing to picture, mastering, and audio restoration.",
    tags: ["daw", "audio-recording", "mixing", "mastering", "pro-audio", "multitrack", "vst3", "audio"],
    logoSource: "https://ardour.org/images/icons/favicon.ico",
    screenshotSources: [],
    download: "https://ardour.org/download.html",
    source: "https://github.com/Ardour/ardour",
    website: "https://ardour.org/",
    docs: "https://manual.ardour.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.ardour.Ardour" },
      { label: "Ubuntu / Debian", command: "sudo apt install ardour" },
      { label: "Fedora", command: "sudo dnf install ardour" },
      { label: "macOS / Windows", command: "https://ardour.org/download.html" }
    ],
    comparisonData: {
      columns: ["Ardour", "Pro Tools"],
      rows: [
        { feature: "Unlimited audio tracks with no artificial tier restrictions", values: [true, false] },
        { feature: "Cross-platform support on Linux, macOS, and Windows", values: [true, false] },
        { feature: "No proprietary hardware or iLok dongle required", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Full automated mixing console with control surface support", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, macOS 10.14+, Windows 10/11\nMulti-core 64-bit processor\n4 GB RAM minimum (8 GB recommended)\nDedicated audio interface with ASIO, CoreAudio, or ALSA/JACK/PipeWire",
    maintainer: "community",
    developer: "Paul Davis & The Ardour Community",
    developerUrl: "https://github.com/Ardour",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "scribus",
    name: "Scribus",
    alternative: "Adobe InDesign, QuarkXPress, Affinity Publisher",
    category: "Office",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "1.6.3",
    fileSize: "90 MB",
    description: "Professional desktop publishing and page layout software producing print-ready, press-compliant publications.",
    fullDescription: "Scribus is an open-source page layout application engineered for print publication, brochure design, magazine layout, and newsletter authoring. Supporting advanced prepress features such as CMYK color separation, Spot colors, ICC color management, and PDF/X-1a, PDF/X-3, and PDF/X-4 export standards, Scribus enables graphic designers to produce commercial press-ready documents. It features versatile vector drawing tools, text-wrapping around shapes, master pages, and Python scripting for automated document generation.",
    features: [
      "Press-ready PDF export supporting PDF/X-1a, PDF/X-3, and PDF/X-4 commercial print standards",
      "Full CMYK color separation, Spot color palettes (including open CIE palettes), and ICC color profiles",
      "Advanced typographic controls: tracking, kerning, baseline grid alignment, and micro-typographic optical margins",
      "Master pages, layer management, and automatic text-frame linking for multi-page documents",
      "Vector drawing tools with Bézier curves, SVG import, and text-flow-around-polygons",
      "Integrated Python scripting API for automated catalog, badge, and publication production"
    ],
    uses: "Design print magazines, books, newspapers, brochures, flyers, interactive PDF forms, and corporate newsletters.",
    tags: ["desktop-publishing", "dtp", "page-layout", "cmyk", "pdf-x", "indesign-alternative", "publishing", "office"],
    logoSource: "https://www.scribus.net/favicon.ico",
    screenshotSources: [],
    download: "https://www.scribus.net/downloads/",
    source: "https://github.com/scribusproject/scribus",
    website: "https://www.scribus.net/",
    docs: "https://wiki.scribus.net/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.scribus.Scribus" },
      { label: "Ubuntu / Debian", command: "sudo apt install scribus" },
      { label: "Windows (winget)", command: "winget install Scribus.Scribus" },
      { label: "macOS (brew)", command: "brew install --cask scribus" }
    ],
    comparisonData: {
      columns: ["Scribus", "Adobe InDesign"],
      rows: [
        { feature: "CMYK color model and commercial PDF/X press export", values: [true, true] },
        { feature: "100% Free with zero monthly subscription costs", values: [true, false] },
        { feature: "Direct XML-based plain-text file format (.sla)", values: [true, false] },
        { feature: "Native Linux, Windows, and macOS support", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS 10.15+\n2 GHz dual-core processor\n2 GB RAM minimum (4 GB recommended)\nHigh-resolution color-calibrated display recommended",
    maintainer: "community",
    developer: "Scribus Development Team",
    developerUrl: "https://github.com/scribusproject",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "calligra",
    name: "Calligra Suite",
    alternative: "Microsoft Office, LibreOffice, WPS Office, Apache OpenOffice",
    category: "Office",
    subcategory: "Document Editors",
    license: "GPL-2.0-or-later",
    version: "4.0.1",
    fileSize: "120 MB",
    description: "Versatile, modular office and creative application suite built upon the KDE and Qt ecosystem.",
    fullDescription: "Calligra Suite is an integrated office suite and digital art framework developed by the KDE community. Built on the open OpenDocument Format (ODF), Calligra offers dedicated components including Words (word processing and desktop publishing), Sheets (powerful spreadsheet application), Stage (dynamic presentations), Plan (project management and Gantt chart scheduling), and Krita/Karbon vector drawing tools. Its clean dockable user interface is optimized for widescreen monitors, laptops, and touch devices.",
    features: [
      "Words word processor offering dual desktop publishing frame-based and traditional flow-based document editing",
      "Sheets calculation software featuring comprehensive mathematical, statistical, and business function libraries",
      "Stage presentation maker with slide transitions, custom presenter notes, and master template themes",
      "Plan comprehensive project management application with Gantt charts, resource allocation, and task dependencies",
      "Native OpenDocument Format (ODF) standard support alongside Microsoft Office DOCX, XLSX, and PPTX import",
      "Widescreen-optimized side-dock inspector panels maximizing vertical editing workspace"
    ],
    uses: "Draft corporate reports, calculate financial spreadsheets, deliver slide presentations, and coordinate project schedules.",
    tags: ["office-suite", "word-processor", "spreadsheet", "presentations", "project-management", "kde", "office"],
    logoSource: "https://calligra.org/favicon.ico",
    screenshotSources: [],
    download: "https://calligra.org/download/",
    source: "https://invent.kde.org/office/calligra",
    website: "https://calligra.org/",
    docs: "https://docs.kde.org/trunk5/en/calligra/calligra/index.html",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install calligra" },
      { label: "Fedora", command: "sudo dnf install calligra" },
      { label: "Arch Linux", command: "sudo pacman -S calligra" }
    ],
    comparisonData: {
      columns: ["Calligra Suite", "Microsoft Office"],
      rows: [
        { feature: "Combined office tools with project management (Plan)", values: [true, false] },
        { feature: "Optimized side-dock layout for widescreen displays", values: [true, false] },
        { feature: "OpenDocument Format (ODF) native storage", values: [true, false] },
        { feature: "Zero subscription fees and zero telemetry", values: [true, false] },
        { feature: "Open Source (GPL / LGPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux OS (FreeBSD also supported)\nQt 5 / Qt 6 compatible desktop environment\n2 GHz CPU, 2 GB RAM",
    maintainer: "community",
    developer: "KDE Community & Calligra Developers",
    developerUrl: "https://invent.kde.org/office/calligra",
    platforms: ["Linux"]
  },
  {
    id: "abiword",
    name: "AbiWord",
    alternative: "Microsoft Word, Apple Pages, Google Docs, LibreOffice Writer",
    category: "Office",
    subcategory: "Document Editors",
    license: "GPL-2.0-or-later",
    version: "3.0.5",
    fileSize: "15 MB",
    description: "Ultra-lightweight, feature-packed word processor with fast startup times and broad document format support.",
    fullDescription: "AbiWord is a lightweight, fully-featured word processor designed to deliver modern text editing capabilities without consuming unnecessary system resources. Ideal for netbooks, older computers, and minimalist workspaces, AbiWord launches near instantaneously while supporting advanced document features such as tables, styles, headers, footers, mail merge, and multilingual spell-checking. It provides broad file interoperability with Microsoft Word (DOC, DOCX), OpenDocument Text (ODT), Rich Text Format (RTF), and HTML.",
    features: [
      "Ultra-compact footprint with fast launch speeds and minimal RAM consumption",
      "Full word processing feature set: styles, character formatting, bullet points, and table layouts",
      "Broad format compatibility: OpenDocument (ODT), Microsoft Word (DOCX/DOC), RTF, LaTeX, and plain text",
      "Advanced mail merge capability generating personalized letters and mailing labels from database files",
      "Multilingual spell checking and grammatical dictionaries powered by Hunspell and Enchant",
      "Extensible modular plugin architecture for grammar assistance, Wikipedia lookups, and format translation"
    ],
    uses: "Write reports, essays, memos, and letters on resource-constrained hardware or fast desktop environments.",
    tags: ["word-processor", "lightweight", "office", "documents", "writer", "gnome", "abiword"],
    logoSource: "https://gitlab.gnome.org/World/AbiWord/-/raw/master/icons/hicolor_apps_scalable_com.abisource.AbiWord.svg",
    screenshotSources: [],
    download: "https://www.abisource.com/download/",
    source: "https://gitlab.gnome.org/World/AbiWord",
    website: "https://www.abisource.com/",
    docs: "https://www.abisource.com/help/en-US/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub com.abisource.AbiWord" },
      { label: "Ubuntu / Debian", command: "sudo apt install abiword" },
      { label: "Fedora", command: "sudo dnf install abiword" },
      { label: "Arch Linux", command: "sudo pacman -S abiword" }
    ],
    comparisonData: {
      columns: ["AbiWord", "Microsoft Word"],
      rows: [
        { feature: "Tiny installation size (under 20 MB) and instant startup", values: [true, false] },
        { feature: "Runs smoothly on legacy or low-power hardware", values: [true, false] },
        { feature: "Zero telemetry and complete offline privacy", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Full support for styles, tables, and spell check", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, BSD, Windows\n500 MHz CPU, 512 MB RAM\n50 MB available disk space",
    maintainer: "community",
    developer: "AbiSource Community & GNOME Contributors",
    developerUrl: "https://gitlab.gnome.org/World/AbiWord",
    platforms: ["Linux", "Windows"]
  },
  {
    id: "gnumeric",
    name: "Gnumeric",
    alternative: "Microsoft Excel, Google Sheets, Apple Numbers, LibreOffice Calc",
    category: "Office",
    subcategory: "Spreadsheets",
    license: "GPL-2.0-or-later",
    version: "1.12.57",
    fileSize: "22 MB",
    description: "High-precision, ultra-fast spreadsheet application engineered for scientific and financial data computation.",
    fullDescription: "Gnumeric is an open-source spreadsheet program developed by the GNOME project, renowned among mathematicians, scientists, and financial analysts for its exceptional numerical precision and computational efficiency. Gnumeric handles massive worksheets effortlessly with minimal memory usage, featuring over 650 built-in mathematical, statistical, financial, and engineering functions—surpassing commercial alternatives in computational accuracy. It offers extensive chart generation and seamless file compatibility with Microsoft Excel (XLS, XLSX), ODF (ODS), and CSV.",
    features: [
      "Industry-leading numerical accuracy validated against NIST statistical reference datasets",
      "Over 650 built-in calculation functions covering advanced statistics, trigonometry, finance, and engineering",
      "High-performance calculation engine capable of handling enormous datasets without slowdowns",
      "Broad format compatibility: Microsoft Excel (.xls, .xlsx), OpenDocument (.ods), CSV, TSV, and HTML",
      "Sophisticated graphing engine supporting line, bar, scatter, pie, radar, and statistical box plots",
      "Python and C plugin scripting architecture for automated modeling and custom calculation routines"
    ],
    uses: "Analyze scientific experiments, calculate statistical models, compute complex financial ledgers, and visualize data distributions.",
    tags: ["spreadsheet", "data-analysis", "scientific-computing", "excel-alternative", "gnome", "statistics", "office"],
    logoSource: "https://gitlab.gnome.org/GNOME/gnumeric/-/raw/master/icons/256x256/apps/org.gnumeric.gnumeric.png",
    screenshotSources: [],
    download: "http://www.gnumeric.org/download.html",
    source: "https://gitlab.gnome.org/GNOME/gnumeric",
    website: "http://www.gnumeric.org/",
    docs: "http://www.gnumeric.org/doc/gnumeric.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.gnome.Gnumeric" },
      { label: "Ubuntu / Debian", command: "sudo apt install gnumeric" },
      { label: "Fedora", command: "sudo dnf install gnumeric" },
      { label: "Arch Linux", command: "sudo pacman -S gnumeric" }
    ],
    comparisonData: {
      columns: ["Gnumeric", "Microsoft Excel"],
      rows: [
        { feature: "Certified high numerical precision on statistical distributions", values: [true, false] },
        { feature: "Lightning-fast execution on large scientific datasets", values: [true, false] },
        { feature: "Ultra-low memory consumption", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Extensive library of over 600 built-in functions", values: [true, true] }
      ]
    },
    systemRequirements: "Linux OS\n1 GHz CPU, 512 MB RAM\nGTK 3 runtime",
    maintainer: "community",
    developer: "GNOME Project & Gnumeric Team",
    developerUrl: "https://gitlab.gnome.org/GNOME/gnumeric",
    platforms: ["Linux"]
  },
  {
    id: "onlyoffice-desktop-editors",
    name: "ONLYOFFICE Desktop Editors",
    alternative: "Microsoft 365, Google Workspace, LibreOffice, WPS Office",
    category: "Office",
    subcategory: "Document Editors",
    license: "AGPL-3.0-only",
    version: "8.2.0",
    fileSize: "180 MB",
    description: "Modern, tabbed office suite delivering high compatibility with Microsoft Office formats (DOCX, XLSX, PPTX).",
    fullDescription: "ONLYOFFICE Desktop Editors is a comprehensive, open-source office suite combining document, spreadsheet, presentation, PDF form, and ebook editors into a unified tabbed application. Engineered with HTML5 canvas technology, ONLYOFFICE guarantees 100% native compatibility with Microsoft Office file formats (DOCX, XLSX, PPTX) while preserving complex layout styling, fonts, and chart elements. It offers advanced collaboration tools, digital signatures, end-to-end document encryption, and seamless connection to self-hosted Nextcloud, ownCloud, and ONLYOFFICE DocSpace clouds.",
    features: [
      "Native OOXML core providing high formatting fidelity with Microsoft Word, Excel, and PowerPoint files",
      "Unified tabbed interface grouping document editing, spreadsheets, and presentations in one window",
      "Interactive fillable PDF and form creator with text fields, checkboxes, dropdowns, and digital signature boxes",
      "Integrated AI assistant plugin (ChatGPT/OpenAI) for automated summarization, text expansion, and translations",
      "Direct integration with cloud storages including Nextcloud, ownCloud, Seafile, and ONLYOFFICE DocSpace",
      "Comprehensive plugin library including YouTube embeds, Telegram messenger, Zotero citations, and OCR text recognition"
    ],
    uses: "Create corporate documents, edit complex spreadsheets with macros, build business presentations, and design fillable PDF forms.",
    tags: ["office-suite", "microsoft-office-alternative", "word-processor", "spreadsheet", "presentation", "pdf-forms", "office"],
    logoSource: "https://static-site.onlyoffice.com/public/images/favicons/favicon.ico",
    screenshotSources: [],
    download: "https://www.onlyoffice.com/download-desktop.aspx",
    source: "https://github.com/ONLYOFFICE/DesktopEditors",
    website: "https://www.onlyoffice.com/desktop.aspx",
    docs: "https://helpcenter.onlyoffice.com/desktop/index.aspx",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.onlyoffice.desktopeditors" },
      { label: "Ubuntu / Debian (deb)", command: "sudo apt install onlyoffice-desktopeditors" },
      { label: "Windows (winget)", command: "winget install ONLYOFFICE.DesktopEditors" },
      { label: "macOS (brew)", command: "brew install --cask onlyoffice" }
    ],
    comparisonData: {
      columns: ["ONLYOFFICE", "Microsoft 365"],
      rows: [
        { feature: "Native OOXML compatibility without layout distortion", values: [true, true] },
        { feature: "Complete desktop editor suite free forever", values: [true, false] },
        { feature: "Zero vendor lock-in with optional self-hosted cloud sync", values: [true, false] },
        { feature: "Open Source (AGPL-3.0)", values: [true, false] },
        { feature: "Integrated interactive fillable PDF form builder", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 7/8/10/11, macOS 10.15+\nDual-core 2 GHz CPU or Apple Silicon\n2 GB RAM minimum (4 GB recommended)\n500 MB disk space",
    maintainer: "company",
    developer: "Ascensio System SIA (ONLYOFFICE)",
    developerUrl: "https://github.com/ONLYOFFICE",
    platforms: ["Linux", "Windows", "macOS"]
  }
];
