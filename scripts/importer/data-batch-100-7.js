module.exports = [
  {
    id: "pdf-arranger",
    name: "PDF Arranger",
    alternative: "Adobe Acrobat, PDF-XChange Editor, Smallpdf, Sejda, PDF Candy",
    category: "Office",
    subcategory: "PDF Tools",
    license: "GPL-3.0-or-later",
    version: "1.11.1",
    fileSize: "18 MB",
    description: "Fast, graphical tool for rearranging, rotating, splitting, cropping, and merging PDF documents.",
    fullDescription: "PDF Arranger is an open-source graphical utility built on Python and GTK that enables users to merge, split, rotate, crop, and reorder pages in PDF documents with effortless drag-and-drop mechanics. Designed as an enhanced continuation of PDF-Shuffler, PDF Arranger loads pages as visual thumbnails, allowing intuitive reorganization, duplicate duplication, batch rotation, margin cropping, and page deletion without requiring command-line tools or costly commercial PDF suites.",
    features: [
      "Visual grid view rendering page thumbnails with responsive zoom and multi-selection",
      "Interactive page reorganization: drag-and-drop reordering, duplication, and deletion",
      "Page orientation control with 90, 180, and 270 degree clockwise and counterclockwise rotation",
      "Precise margin cropping by percentage or millimeter offsets across selected pages",
      "Merge multiple heterogeneous PDF files into a single consolidated document",
      "Lossless page manipulation preserving hyperlinks, text layers, and embedded form fields"
    ],
    uses: "Reorder scanned document pages, combine multiple PDF receipts into one file, crop document margins, and delete blank pages.",
    tags: ["pdf", "pdf-editor", "pdf-merger", "pdf-split", "page-reorder", "gtk", "office"],
    logoSource: "https://raw.githubusercontent.com/pdfarranger/pdfarranger/main/data/icons/hicolor/scalable/apps/com.github.jeromerobert.pdfarranger.svg",
    screenshotSources: [],
    download: "https://github.com/pdfarranger/pdfarranger/releases",
    source: "https://github.com/pdfarranger/pdfarranger",
    website: "https://github.com/pdfarranger/pdfarranger",
    docs: "https://github.com/pdfarranger/pdfarranger/blob/main/README.md",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub com.github.jeromerobert.pdfarranger" },
      { label: "Ubuntu / Debian", command: "sudo apt install pdfarranger" },
      { label: "Windows (winget)", command: "winget install PDFArranger.PDFArranger" },
      { label: "macOS (brew)", command: "brew install pdfarranger" }
    ],
    comparisonData: {
      columns: ["PDF Arranger", "Adobe Acrobat Pro"],
      rows: [
        { feature: "Instant drag-and-drop thumbnail manipulation", values: [true, true] },
        { feature: "Zero tracking, telemetry, or cloud upload", values: [true, false] },
        { feature: "100% Free with no subscription fees", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Ultra-fast lightweight startup (under 25 MB)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\n1 GHz CPU, 512 MB RAM\nPython 3 with GTK 3 and pikepdf libraries",
    maintainer: "community",
    developer: "Jérôme Robert & PDF Arranger Contributors",
    developerUrl: "https://github.com/pdfarranger",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "pdfsam-basic",
    name: "PDFsam Basic",
    alternative: "Adobe Acrobat Pro, Nitro PDF, Foxit PDF Editor, Smallpdf",
    category: "Office",
    subcategory: "PDF Tools",
    license: "AGPL-3.0-or-later",
    version: "5.2.4",
    fileSize: "62 MB",
    description: "Robust desktop solution to split, merge, mix, rotate, and extract pages from PDF files.",
    fullDescription: "PDFsam Basic (PDF Split and Merge) is a widely deployed, open-source desktop utility designed to handle day-to-day PDF document tasks locally with total privacy. Free from cloud uploads or file size quotas, PDFsam Basic provides specialized modules to merge multiple PDFs into one, split documents by page numbers, bookmarks, or file size limits, rotate pages in bulk, and alternate (mix) pages from two documents—ideal for double-sided scanner reconciliation.",
    features: [
      "Merge multiple PDF documents with fine-grained control over page ranges and table of contents generation",
      "Split PDFs by single pages, even/odd pages, specific page intervals, or bookmark levels",
      "Alternate Mix module interleaving pages from two separate PDF scans with optional reverse order",
      "Extract specific page sequences into independent PDF files with customized naming templates",
      "Batch rotate PDF pages permanently across entire directories with multi-angle support",
      "100% Local processing ensuring confidential legal and financial documents never leave your machine"
    ],
    uses: "Interleave double-sided scans, extract specific book chapters, merge monthly invoices, and split large PDF books.",
    tags: ["pdf", "pdf-split", "pdf-merge", "pdf-extract", "privacy", "batch-processing", "office"],
    logoSource: "https://pdfsam.org/favicon.ico",
    screenshotSources: [],
    download: "https://pdfsam.org/download-pdfsam-basic/",
    source: "https://github.com/torakiki/pdfsam",
    website: "https://pdfsam.org/",
    docs: "https://pdfsam.org/documentation/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.pdfsam.PDFsamBasic" },
      { label: "Windows (winget)", command: "winget install AndreaVacondio.PDFsam" },
      { label: "macOS (brew)", command: "brew install --cask pdfsam-basic" },
      { label: "Debian / Ubuntu (.deb)", command: "https://pdfsam.org/download-pdfsam-basic/" }
    ],
    comparisonData: {
      columns: ["PDFsam Basic", "Adobe Acrobat"],
      rows: [
        { feature: "Alternate mix feature for double-sided scanner scans", values: [true, false] },
        { feature: "Strict offline local processing guaranteed", values: [true, false] },
        { feature: "No document volume limits or subscriptions", values: [true, false] },
        { feature: "Cross-platform (Linux, Windows, macOS)", values: [true, true] },
        { feature: "Open Source (AGPL-3.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS 64-bit\nJava 17+ (bundled in modern standalone installers)\n1.5 GHz CPU, 2 GB RAM",
    maintainer: "company",
    developer: "Sober Lemur The Software House Srl",
    developerUrl: "https://github.com/torakiki",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "zim-wiki",
    name: "Zim Wiki",
    alternative: "Microsoft OneNote, Evernote, Obsidian, Notion, Bear",
    category: "Productivity",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "0.75.2",
    fileSize: "16 MB",
    description: "Graphical personal desktop wiki that organizes notes and knowledge in simple, future-proof plain text files.",
    fullDescription: "Zim is a graphical text editor designed to bring the concept of a personal desktop wiki to your local storage. Each page is stored as an individual plain-text file formatted with lightweight wiki markup, ensuring complete future-proof longevity and effortless synchronization via Git, Nextcloud, or Syncthing. Zim enables users to create hierarchical page trees, link ideas effortlessly with CamelCase or wiki links, embed images, manage task lists with checkable checkboxes, and export full notebooks to HTML or Markdown.",
    features: [
      "Plain-text file storage on local disk formatted with clean, human-readable wiki markup",
      "Automatic wiki-style linking between pages, external URLs, and local filesystem attachments",
      "Hierarchical page outline tree with instantaneous real-time searching and indexing",
      "Embedded task list manager aggregating todo checkboxes across all notebook pages",
      "Rich plugin ecosystem including LaTeX equation rendering, spell checking, and calendar journals",
      "Multi-format exporter rendering entire personal wikis to HTML websites, LaTeX, or Markdown"
    ],
    uses: "Maintain personal knowledge bases, organize university lecture notes, track daily sprint tasks, and document code architectures.",
    tags: ["wiki", "notes", "personal-knowledge-base", "pkm", "plain-text", "task-list", "productivity"],
    logoSource: "https://zim-wiki.org/favicon.ico",
    screenshotSources: [],
    download: "https://zim-wiki.org/downloads.html",
    source: "https://github.com/jaap-karssenberg/zim-desktop-wiki",
    website: "https://zim-wiki.org/",
    docs: "https://zim-wiki.org/manual/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.zim_wiki.Zim" },
      { label: "Ubuntu / Debian", command: "sudo apt install zim" },
      { label: "Windows (winget)", command: "winget install JaapKarssenberg.Zim" },
      { label: "macOS (brew)", command: "brew install zim" }
    ],
    comparisonData: {
      columns: ["Zim Wiki", "OneNote / Evernote"],
      rows: [
        { feature: "Stored as readable plain-text files on local disk", values: [true, false] },
        { feature: "Zero vendor lock-in or proprietary binary databases", values: [true, false] },
        { feature: "Works 100% offline without mandatory account registration", values: [true, false] },
        { feature: "Integrated task aggregation from all notes", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\n1 GHz CPU, 512 MB RAM\nPython 3 with GTK 3",
    maintainer: "individual",
    developer: "Jaap Karssenberg & Zim Contributors",
    developerUrl: "https://github.com/jaap-karssenberg",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "cherrytree",
    name: "Cherrytree",
    alternative: "Microsoft OneNote, Evernote, Joplin, TreeSheets, KeepNote",
    category: "Productivity",
    subcategory: "General",
    license: "GPL-3.0-or-later",
    version: "1.2.0",
    fileSize: "32 MB",
    description: "High-performance hierarchical note-taking application featuring rich text, syntax highlighting, and encrypted databases.",
    fullDescription: "Cherrytree is a feature-rich, high-performance hierarchical note-taking application built in modern C++ and GTKmm. Featuring a multi-level tree hierarchy of nodes and subnodes, Cherrytree supports rich text formatting, syntax highlighting for dozens of programming languages, embedded images, tables, code boxes, and clickable cross-links between nodes. Users can store their notebooks as single SQLite databases, XML documents, or encrypted SQLite files protected with 7-Zip password encryption.",
    features: [
      "Hierarchical multi-level node tree with customizable node icons and color tagging",
      "Rich text formatting alongside dedicated syntax-highlighted code execution boxes",
      "Flexible storage backends: single XML file, SQLite database, or password-encrypted 7-Zip archive",
      "Multi-node global search with regex support, replace across nodes, and tag filtering",
      "Embedded editable tables, image scaling, and internal inter-node hyperlinks",
      "Comprehensive import/export capabilities supporting HTML, PDF, Markdown, and plain text"
    ],
    uses: "Organize cybersecurity penetration testing notes, technical coding snippets, research papers, and structured study guides.",
    tags: ["notes", "hierarchical-notes", "syntax-highlighting", "sqlite", "encryption", "code-snippets", "productivity"],
    logoSource: "https://raw.githubusercontent.com/giuspen/cherrytree/master/icons/cherrytree.svg",
    screenshotSources: [],
    download: "https://www.giuspen.net/cherrytree/#downl",
    source: "https://github.com/giuspen/cherrytree",
    website: "https://www.giuspen.net/cherrytree/",
    docs: "https://www.giuspen.net/cherrytree/#documentation",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.giuspen.cherrytree" },
      { label: "Ubuntu / Debian", command: "sudo apt install cherrytree" },
      { label: "Windows (winget)", command: "winget install GiuseppePenone.Cherrytree" },
      { label: "macOS (brew)", command: "brew install cherrytree" }
    ],
    comparisonData: {
      columns: ["Cherrytree", "OneNote"],
      rows: [
        { feature: "Dedicated code boxes with syntax highlighting", values: [true, false] },
        { feature: "Built-in 7-Zip password encryption on SQLite database", values: [true, false] },
        { feature: "High-speed C++ execution with low memory footprint", values: [true, false] },
        { feature: "Unlimited hierarchical nesting of subnodes", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 7/10/11, macOS\n1.2 GHz CPU, 512 MB RAM\nGTKmm 3 runtime",
    maintainer: "individual",
    developer: "Giuseppe Penone (giuspen) & Evgenii Gurianov",
    developerUrl: "https://github.com/giuspen",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "freeplane",
    name: "Freeplane",
    alternative: "XMind, MindManager, MindMeister, Miro, GitMind",
    category: "Productivity",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "1.11.14",
    fileSize: "68 MB",
    description: "Powerful mind-mapping and knowledge management application for structured thinking, planning, and brainstorming.",
    fullDescription: "Freeplane is an open-source mind-mapping and structured information management application engineered for students, project managers, and researchers. As an advanced and active evolution of FreeMind, Freeplane enables users to visualize thoughts, organize complex ideas, and plan projects through hierarchical node networks. It features rich-text nodes, LaTeX mathematical formula support, conditional node styling, Groovy scripting, and flexible connector links between disparate branches.",
    features: [
      "Visual hierarchical mind-mapping with folding branches, floating nodes, and graphical clouds",
      "Embedded rich-text formatting, Markdown formatting, and LaTeX formula typesetting inside nodes",
      "Dynamic filtering, attribute tables, and conditional styling rules based on node metadata",
      "Extensible Groovy and JavaScript scripting for automating mind map transformations",
      "Direct hyperlinking between nodes, external websites, and local desktop filesystem files",
      "Export maps to HTML, SVG, PDF, PNG, Microsoft Office formats, and FreeMind XML"
    ],
    uses: "Brainstorm business strategies, structure thesis research, outline book chapters, and organize hierarchical project requirements.",
    tags: ["mind-mapping", "brainstorming", "knowledge-management", "latex", "groovy", "diagram", "productivity"],
    logoSource: "https://www.freeplane.org/favicon.ico",
    screenshotSources: [],
    download: "https://www.freeplane.org/wiki/index.php/Download_and_Installation",
    source: "https://github.com/freeplane/freeplane",
    website: "https://www.freeplane.org/",
    docs: "https://docs.freeplane.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.freeplane.Freeplane" },
      { label: "Ubuntu / Debian", command: "sudo apt install freeplane" },
      { label: "Windows (winget)", command: "winget install Freeplane.Freeplane" },
      { label: "macOS (brew)", command: "brew install --cask freeplane" }
    ],
    comparisonData: {
      columns: ["Freeplane", "XMind / MindManager"],
      rows: [
        { feature: "Full LaTeX mathematical equations inside nodes", values: [true, false] },
        { feature: "Full Groovy scripting automation capability", values: [true, false] },
        { feature: "No subscription fees or feature paywalls", values: [true, false] },
        { feature: "Standard XML file format with backward compatibility", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS\nJava Runtime Environment (JRE) 11+\n1.5 GHz CPU, 2 GB RAM",
    maintainer: "community",
    developer: "Freeplane Developer Community & Volker Börchers",
    developerUrl: "https://github.com/freeplane",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "freemind",
    name: "FreeMind",
    alternative: "XMind, Coggle, Freeplane, MindNode, Mindomo",
    category: "Productivity",
    subcategory: "General",
    license: "GPL-2.0-or-later",
    version: "1.0.1",
    fileSize: "25 MB",
    description: "Classic, lightweight Java-based mind-mapping tool providing fast keyboard-driven hierarchical diagramming.",
    fullDescription: "FreeMind is a pioneering open-source mind-mapping application written in Java that established the standard for electronic mind maps. Designed around rapid keyboard-driven navigation and brainstorming, FreeMind allows users to capture thoughts instantly with the Insert and Enter keys, establishing radiating branch networks around central concepts. It features node folding, customizable graphical icons, cloud shapes, encrypted nodes, and universal .mm XML file compatibility supported by dozens of modern mind-mapping applications.",
    features: [
      "Rapid keyboard-centric mind mapping with instant branch addition and navigation",
      "Foldable and expandable branch hierarchies facilitating focused thought exploration",
      "Standardized XML file format (.mm) widely supported across mobile and desktop tools",
      "Node decoration with icons, colors, cloud backgrounds, and graphical link arrows",
      "Password-protected encrypted nodes securing confidential thoughts and sensitive data",
      "Export to HTML click-maps, SVG vector drawings, PDF documents, and PNG images"
    ],
    uses: "Quick brainstorming sessions, organizing essay outlines, mapping software requirements, and visual project planning.",
    tags: ["mind-mapping", "brainstorming", "diagramming", "xml", "classic-foss", "productivity"],
    logoSource: "https://raw.githubusercontent.com/jiangxin/freemind-mmx/master/freemind/images/FreeMindWindowIcon.png",
    screenshotSources: [],
    download: "http://freemind.sourceforge.net/wiki/index.php/Download",
    source: "https://sourceforge.net/projects/freemind/",
    website: "http://freemind.sourceforge.net/",
    docs: "http://freemind.sourceforge.net/wiki/index.php/Documentation",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install freemind" },
      { label: "Arch Linux (AUR)", command: "yay -S freemind" },
      { label: "SourceForge Zip / Installer", command: "http://freemind.sourceforge.net/wiki/index.php/Download" }
    ],
    comparisonData: {
      columns: ["FreeMind", "XMind"],
      rows: [
        { feature: "Universal .mm plain-text XML format support", values: [true, false] },
        { feature: "Instant keyboard-driven node creation", values: [true, true] },
        { feature: "100% Free with zero cloud login obligations", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Runs on any Java-enabled platform", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows, macOS\nJava Runtime Environment (JRE) 8+\n1 GHz CPU, 512 MB RAM",
    maintainer: "community",
    developer: "Christian Foltin, Jörg Müller & FreeMind Team",
    developerUrl: "https://sourceforge.net/projects/freemind/",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "jitsi-meet",
    name: "Jitsi Meet",
    alternative: "Zoom, Google Meet, Microsoft Teams, Cisco Webex, Skype",
    category: "Communication",
    subcategory: "Video Conferencing",
    license: "Apache-2.0",
    version: "2.0.9823",
    fileSize: "95 MB",
    description: "Fully encrypted, open-source video conferencing solution offering HD video, screen sharing, and no mandatory accounts.",
    fullDescription: "Jitsi Meet is a secure, flexible, and open-source video conferencing solution that allows individuals, schools, and enterprises to meet over encrypted audio and video directly through web browsers and desktop apps. With zero account registration required to join, Jitsi Meet delivers end-to-end encryption (E2EE), HD video and Opus audio, screen sharing, virtual backgrounds, meeting recording to Dropbox/Nextcloud, live streaming to YouTube, and collaborative document editing via Etherpad.",
    features: [
      "Instant video meetings with zero account registration or software downloads required for web guests",
      "End-to-End Encryption (E2EE) support for confidential one-on-one and group video calls",
      "High-definition video and Opus audio with adaptive bandwidth and noise suppression",
      "Simultaneous multi-participant screen sharing and audio sharing with annotation support",
      "Moderator tools: lobby waiting rooms, participant muting, kick controls, and meeting passwords",
      "Self-hostable with Docker and Kubernetes for total enterprise data sovereignty and privacy compliance"
    ],
    uses: "Host team meetings, conduct distance-learning classrooms, organize private family video calls, and stream webinars.",
    tags: ["video-conferencing", "e2ee", "webrtc", "screen-sharing", "virtual-meetings", "self-hosted", "communication"],
    logoSource: "https://raw.githubusercontent.com/jitsi/jitsi-meet/master/images/watermark.svg",
    screenshotSources: [],
    download: "https://desktop.jitsi.org/",
    source: "https://github.com/jitsi/jitsi-meet",
    website: "https://jitsi.org/jitsi-meet/",
    docs: "https://jitsi.github.io/handbook/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.jitsi.jitsi-meet" },
      { label: "Debian / Ubuntu Server", command: "sudo apt install jitsi-meet" },
      { label: "Docker Self-Hosted", command: "git clone https://github.com/jitsi/docker-jitsi-meet && cd docker-jitsi-meet && docker compose up -d" },
      { label: "Windows (winget)", command: "winget install Jitsi.JitsiMeet" },
      { label: "macOS (brew)", command: "brew install --cask jitsi-meet" }
    ],
    comparisonData: {
      columns: ["Jitsi Meet", "Zoom / Google Meet"],
      rows: [
        { feature: "No account registration required to start or join", values: [true, false] },
        { feature: "100% Self-hostable for total data privacy", values: [true, false] },
        { feature: "No arbitrary 40-minute call time limit on free tiers", values: [true, false] },
        { feature: "End-to-end encryption support", values: [true, true] },
        { feature: "Open Source (Apache-2.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern web browser (Chromium, Firefox, Safari) or Desktop App\n2 GHz multi-core CPU, 2 GB RAM\nWebcam, microphone, and stable broadband internet",
    maintainer: "company",
    developer: "8x8, Inc. & Jitsi Community",
    developerUrl: "https://github.com/jitsi",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS", "Web"]
  },
  {
    id: "mumble",
    name: "Mumble",
    alternative: "Discord, TeamSpeak, Ventrilo, Skype, CurseForge Voice",
    category: "Communication",
    subcategory: "Voice Chat",
    license: "BSD-3-Clause",
    version: "1.5.634",
    fileSize: "38 MB",
    description: "Low-latency, high-quality encrypted voice chat application designed for gamers, podcasters, and team coordination.",
    fullDescription: "Mumble is an open-source, ultra-low latency voice chat application engineered primarily for gaming clans, podcasters, and real-time operational communications. Featuring military-grade TLS and UDP encryption, Mumble delivers crystal-clear audio powered by the Opus codec with near-zero acoustic delay. It features 3D positional audio that realistically renders player voices according to their in-game locations, customizable in-game overlays, and an autonomous lightweight server component (Murmur).",
    features: [
      "Ultra-low latency audio processing delivering real-time voice feedback faster than commercial competitors",
      "3D positional audio placing teammate voices in physical 3D space across dozens of supported games",
      "Cryptographically secure voice traffic with mandatory TLS control channels and AES-encrypted UDP packets",
      "Customizable in-game HUD overlay displaying active speakers, channels, and avatars",
      "Automatic volume normalization, acoustic echo cancellation, and advanced noise suppression",
      "Self-hostable lightweight Murmur server capable of handling hundreds of concurrent voice users on minimal hardware"
    ],
    uses: "Coordinate competitive gaming matches, conduct live podcast recordings, secure internal team comms, and host radio nets.",
    tags: ["voice-chat", "low-latency", "gaming", "voip", "opus", "positional-audio", "self-hosted", "communication"],
    logoSource: "https://raw.githubusercontent.com/mumble-voip/mumble/master/icons/mumble.svg",
    screenshotSources: [],
    download: "https://www.mumble.info/downloads/",
    source: "https://github.com/mumble-voip/mumble",
    website: "https://www.mumble.info/",
    docs: "https://wiki.mumble.info/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub info.mumble.Mumble" },
      { label: "Ubuntu / Debian", command: "sudo apt install mumble" },
      { label: "Windows (winget)", command: "winget install Mumble.Mumble" },
      { label: "macOS (brew)", command: "brew install --cask mumble" }
    ],
    comparisonData: {
      columns: ["Mumble", "Discord / TeamSpeak"],
      rows: [
        { feature: "Ultra-low voice latency (often <20ms)", values: [true, false] },
        { feature: "3D positional in-game spatial audio", values: [true, false] },
        { feature: "Zero voice data harvesting or behavioral tracking", values: [true, false] },
        { feature: "100% Free and self-hostable server (Murmur)", values: [true, false] },
        { feature: "Open Source (BSD-3-Clause)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS 10.14+\n1 GHz CPU, 512 MB RAM\nMicrophone and headphones recommended to avoid feedback",
    maintainer: "community",
    developer: "Mumble Developers & Thorvald Natvig",
    developerUrl: "https://github.com/mumble-voip",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "jami",
    name: "Jami",
    alternative: "WhatsApp, Telegram, Signal, Skype, Zoom, Viber",
    category: "Communication",
    subcategory: "Messaging",
    license: "GPL-3.0-or-later",
    version: "20241029",
    fileSize: "85 MB",
    description: "End-to-end encrypted, distributed peer-to-peer communication platform for messaging, voice, and video calls.",
    fullDescription: "Jami (formerly Ring) is an official GNU project and a distributed, secure peer-to-peer communication platform that requires no central servers to function. Built upon a Distributed Hash Table (OpenDHT) and standard SIP protocol, Jami provides end-to-end encrypted instant messaging, high-definition audio and video calls, screen sharing, and unlimited file sharing directly between devices. Users create cryptographic account keys locally without providing phone numbers, email addresses, or personal credentials.",
    features: [
      "Decentralized peer-to-peer architecture operating over Distributed Hash Tables (OpenDHT) with zero central servers",
      "End-to-End Encryption (E2EE) using TLS 1.3 and DTLS-SRTP for all messages, audio, and video streams",
      "No phone number, email, or personal identification required to generate an anonymous cryptographic ID",
      "Peer-to-peer HD video calling, group conferences, screen sharing, and real-time audio calls",
      "Unlimited file sharing with no file size caps, transmitted directly between connected peers",
      "Local SIP protocol client support allowing integration with standard enterprise telephone PBX networks"
    ],
    uses: "Conduct private one-on-one video calls, exchange large files without intermediary cloud storage, and message without phone numbers.",
    tags: ["p2p", "e2ee", "decentralized", "messaging", "video-calls", "privacy", "gnu", "communication"],
    logoSource: "https://jami.net/favicon.png",
    screenshotSources: [],
    download: "https://jami.net/download-jami/",
    source: "https://git.jami.net/savoirfairelinux/jami-client-qt",
    website: "https://jami.net/",
    docs: "https://docs.jami.net/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub net.jami.Jami" },
      { label: "Ubuntu / Debian", command: "sudo apt install jami" },
      { label: "Windows (winget)", command: "winget install Savoir-faireLinux.Jami" },
      { label: "macOS (brew)", command: "brew install --cask jami" }
    ],
    comparisonData: {
      columns: ["Jami", "WhatsApp / Telegram"],
      rows: [
        { feature: "No phone number or personal credentials required", values: [true, false] },
        { feature: "True decentralized peer-to-peer architecture", values: [true, false] },
        { feature: "Zero central servers storing metadata", values: [true, false] },
        { feature: "Unlimited direct peer-to-peer file transfer sizes", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS, Android, iOS\n2 GHz multi-core processor\n2 GB RAM minimum\nWebcam and microphone for video calling",
    maintainer: "organization",
    developer: "Savoir-faire Linux & GNU Project",
    developerUrl: "https://jami.net/",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "qtox",
    name: "qTox",
    alternative: "Skype, Discord, Telegram, WhatsApp, Element",
    category: "Communication",
    subcategory: "Messaging",
    license: "GPL-3.0-or-later",
    version: "1.17.6",
    fileSize: "28 MB",
    description: "Powerful, distributed Qt client for the Tox peer-to-peer encrypted messaging and calling protocol.",
    fullDescription: "qTox is an open-source, feature-packed client for the decentralized Tox protocol, designed to restore privacy to instant communications. With qTox, all communications—including 1-to-1 chats, group text channels, voice calls, video chats, and file transfers—are encrypted end-to-end using the NaCl cryptographic library (Curve25519, XSalsa20, and Poly1305). Because Tox operates over a peer-to-peer DHT network without central servers or metadata logging, surveillance and censorship are virtually impossible.",
    features: [
      "Decentralized peer-to-peer messaging network operating without centralized servers or databases",
      "End-to-End Encryption powered by NaCl (Curve25519 key exchange, XSalsa20 stream cipher, Poly1305 MAC)",
      "Crystal-clear voice calling and HD video calling with desktop screen sharing capabilities",
      "Unlimited peer-to-peer file sharing with high-speed direct transfers and pause/resume support",
      "Group text and audio chatrooms with customizable permissions and public Tox conference channels",
      "Strict zero-telemetry policy with zero logging of message contents, timestamps, or IP metadata"
    ],
    uses: "Secure confidential communications, chat securely without phone numbers, conduct encrypted voice calls, and share sensitive files.",
    tags: ["tox", "p2p", "encrypted-messaging", "e2ee", "nacl", "privacy", "decentralized", "communication"],
    logoSource: "https://raw.githubusercontent.com/qTox/qTox/master/img/icons/qtox.svg",
    screenshotSources: [],
    download: "https://qtox.github.io/download.html",
    source: "https://github.com/qTox/qTox",
    website: "https://qtox.github.io/",
    docs: "https://toktok.ltd/spec.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.github.qtox.qTox" },
      { label: "Ubuntu / Debian", command: "sudo apt install qtox" },
      { label: "Windows (winget)", command: "winget install qTox.qTox" },
      { label: "macOS (brew)", command: "brew install --cask qtox" }
    ],
    comparisonData: {
      columns: ["qTox", "Skype / Discord"],
      rows: [
        { feature: "Zero central servers or company data centers", values: [true, false] },
        { feature: "No registration required (uses Tox IDs)", values: [true, false] },
        { feature: "Mandatory NaCl end-to-end encryption by default", values: [true, false] },
        { feature: "Zero telemetry or advertising tracking", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, Windows 7/10/11, macOS\n1.2 GHz CPU, 1 GB RAM\nInternet connection (IPv4 or IPv6 with UDP support)",
    maintainer: "community",
    developer: "Tox Project & qTox Contributors",
    developerUrl: "https://github.com/qTox",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"]
  }
];
