module.exports = [
  {
    id: "darktable",
    name: "Darktable",
    alternative: "Adobe Lightroom, Capture One, DxO PhotoLab",
    category: "Graphics & Design",
    subcategory: "Photography",
    license: "GPL-3.0",
    version: "4.8.1",
    fileSize: "140 MB",
    description: "Open-source photography workflow application and non-destructive raw developer.",
    fullDescription: "Darktable is an open-source photography workflow application and raw developer designed by photographers for photographers. A virtual lighttable and darkroom for digital camera files, Darktable manages your digital negatives in an indexed database and lets you view them through an expandable lighttable. Its fully non-destructive editing pipeline operates on 32-bit floating point precision buffers with accelerated OpenCL GPU processing, advanced tone mapping (filmic RGB, agx), color grading, and lens aberration corrections.",
    features: [
      "Non-destructive image processing pipeline using 32-bit floating point buffers",
      "GPU-accelerated image processing using OpenCL",
      "Professional color management with full sRGB, Adobe RGB, and XYZ support",
      "Camera RAW decoding supporting hundreds of camera models via LibRaw",
      "Powerful parametric and drawn masks for selective module application",
      "Filmic RGB and AgX scene-referred color science tone mapping"
    ],
    uses: "Develop raw camera images, organize photography libraries, and export finished high-resolution photos.",
    tags: ["photography", "raw-editor", "lightroom-alternative", "color-grading", "opencl", "darktable"],
    logoSource: "https://raw.githubusercontent.com/darktable-org/darktable/master/data/pixmaps/scalable/darktable.svg",
    screenshotSources: [],
    download: "https://www.darktable.org/install/",
    source: "https://github.com/darktable-org/darktable",
    website: "https://www.darktable.org",
    docs: "https://docs.darktable.org/usermanual/development/en/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub org.darktable.Darktable" },
      { label: "Ubuntu / Debian", command: "sudo apt install darktable" },
      { label: "Windows (winget)", command: "winget install darktable.darktable" },
      { label: "macOS (brew)", command: "brew install --cask darktable" },
      { label: "Arch Linux", command: "sudo pacman -S darktable" }
    ],
    comparisonData: {
      columns: ["Darktable", "Adobe Lightroom"],
      rows: [
        { feature: "No recurring subscription fee", values: [true, false] },
        { feature: "Scene-referred color pipeline", values: [true, false] },
        { feature: "Full OpenCL GPU acceleration", values: [true, true] },
        { feature: "Parametric & drawn masks", values: [true, true] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "64-bit OS (Linux, Windows 10/11, macOS 11+)\nOpenCL 1.2 compatible graphics card recommended\n4 GB RAM minimum (8 GB+ recommended)",
    maintainer: "organization",
    developer: "Darktable Team",
    developerUrl: "https://github.com/darktable-org",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "rawtherapee",
    name: "RawTherapee",
    alternative: "Adobe Lightroom, Capture One, DxO PureRAW, Silkypix",
    category: "Graphics & Design",
    subcategory: "Photography",
    license: "GPL-3.0",
    version: "5.11",
    fileSize: "60 MB",
    description: "Powerful cross-platform raw photo processing system with advanced demosaicing algorithms.",
    fullDescription: "RawTherapee is a powerful, cross-platform raw photo processing system designed for developing raw files from a broad range of digital cameras. Targeted at enthusiast newcomers and professional photographers, RawTherapee features cutting-edge demosaicing algorithms (AMaZE, RCD, IGV, LMMSE), 32-bit floating point processing, advanced color tone curves, Wavelet decomposition levels, and local adjustment control points.",
    features: [
      "Multiple state-of-the-art demosaicing algorithms (AMaZE, RCD, Pixel Shift)",
      "High-precision 32-bit floating-point processing engine",
      "Advanced Wavelet levels processing for contrast, texture, and noise control",
      "Local adjustment control points for targeted adjustments",
      "Extensive camera profile and lens distortion correction via Lensfun",
      "Full color management supporting custom ICC input and output profiles"
    ],
    uses: "Process raw camera photographs with clinical precision, advanced noise reduction, and fine demosaicing.",
    tags: ["photography", "raw-developer", "demosaicing", "image-processing", "color-curves", "rawtherapee"],
    logoSource: "https://rawtherapee.com/images/rt-logo-white.svg",
    screenshotSources: [],
    download: "https://rawtherapee.com/downloads/",
    source: "https://github.com/RawTherapee/RawTherapee",
    website: "https://rawtherapee.com",
    docs: "https://rawpedia.rawtherapee.com/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub com.rawtherapee.RawTherapee" },
      { label: "Ubuntu / Debian", command: "sudo apt install rawtherapee" },
      { label: "Windows (winget)", command: "winget install RawTherapee.RawTherapee" },
      { label: "macOS (brew)", command: "brew install --cask rawtherapee" },
      { label: "Arch Linux", command: "sudo pacman -S rawtherapee" }
    ],
    comparisonData: {
      columns: ["RawTherapee", "Adobe Lightroom"],
      rows: [
        { feature: "No subscription required", values: [true, false] },
        { feature: "Choice of demosaicing engines", values: [true, false] },
        { feature: "Pixel-shift multi-shot processing", values: [true, false] },
        { feature: "Wavelet noise decomposition", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "64-bit Windows 10/11, macOS 10.15+, or Linux distribution\n4 GB RAM minimum (8 GB+ recommended)",
    maintainer: "organization",
    developer: "RawTherapee Team",
    developerUrl: "https://github.com/RawTherapee",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "handbrake",
    name: "HandBrake",
    alternative: "Adobe Media Encoder, Wondershare UniConverter, Any Video Converter, Handbrake Batch",
    category: "Video",
    subcategory: "Video Editors",
    license: "GPL-2.0",
    version: "1.8.2",
    fileSize: "38 MB",
    description: "Open-source video transcoder for converting video from nearly any format to modern codecs.",
    fullDescription: "HandBrake is an open-source tool built to convert video files from nearly any format to a selection of modern, widely supported codecs. Powered by FFmpeg, libvpx, x264, x265, and SVT-AV1, HandBrake enables users to transcode video collections for playback on mobile devices, TVs, and web browsers. It includes hardware-accelerated video encoding (Intel QSV, NVIDIA NVENC, AMD VCN, Apple VideoToolbox), subtitle passthrough and burn-in, chapter markers, video filters (deinterlacing, denoising), and batch queue processing.",
    features: [
      "Built-in presets for web, mobile, Discord, YouTube, Roku, and Apple devices",
      "Hardware-accelerated encoding: Intel QuickSync, NVIDIA NVENC, AMD VCN, Apple Silicon",
      "Modern codec support: AV1, H.265 (HEVC), H.264, VP9, VP8, and Theora",
      "Advanced video filters: deinterlacing (Yadif/Bwdif), decomb, denoise, and detelecine",
      "Audio passthrough and encoding for Dolby Digital (AC3), E-AC3, DTS, AAC, and Opus",
      "Queue management for automated batch encoding"
    ],
    uses: "Compress large video recordings, convert legacy DVD/video files, and optimize videos for web streaming.",
    tags: ["video-transcoder", "ffmpeg", "encoder", "av1", "hevc", "handbrake", "video-compression"],
    logoSource: "https://raw.githubusercontent.com/HandBrake/HandBrake/master/gtk/icons/256x256/apps/fr.handbrake.ghb.png",
    screenshotSources: [],
    download: "https://handbrake.fr/downloads.php",
    source: "https://github.com/HandBrake/HandBrake",
    website: "https://handbrake.fr",
    docs: "https://handbrake.fr/docs/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub fr.handbrake.ghb" },
      { label: "Ubuntu / Debian", command: "sudo apt install handbrake" },
      { label: "Windows (winget)", command: "winget install HandBrake.HandBrake" },
      { label: "macOS (brew)", command: "brew install --cask handbrake" }
    ],
    comparisonData: {
      columns: ["HandBrake", "Adobe Media Encoder"],
      rows: [
        { feature: "No Creative Cloud subscription", values: [true, false] },
        { feature: "Hardware AV1 / HEVC encoding", values: [true, true] },
        { feature: "Batch queue processing", values: [true, true] },
        { feature: "Zero watermarks or limitations", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11, macOS 10.13+, or modern Linux desktop\nIntel Core i3 / AMD equivalent or newer\n4 GB RAM",
    maintainer: "organization",
    developer: "The HandBrake Team",
    developerUrl: "https://github.com/HandBrake",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "kdenlive",
    name: "Kdenlive",
    alternative: "Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, Vegas Pro",
    category: "Video",
    subcategory: "Video Editors",
    license: "GPL-3.0",
    version: "24.08.2",
    fileSize: "180 MB",
    description: "Powerful, multi-track non-linear video editing suite with advanced audio and color tools.",
    fullDescription: "Kdenlive is a non-linear video editing suite from the KDE project designed for video creators, documentary filmmakers, and educators. Built on the MLT framework and FFmpeg, Kdenlive handles almost any audio and video format without requiring transcoding. It supports multi-track video and audio editing, titling tools, proxy editing for smooth 4K playback, automated speech-to-text subtitling using OpenAI Whisper, audio waveform visualization, keyframeable effects, and advanced color grading.",
    features: [
      "Multi-track video and audio timeline with indefinite track composition",
      "Proxy clip generation for fluid editing of high-bitrate 4K and 8K footage",
      "Speech-to-text automated subtitle generation using OpenAI Whisper",
      "Keyframeable visual effects, transitions, and audio filters via MLT and Frei0r",
      "Scopes: Histogram, Waveform, Vectorscope, and RGB Parade for color grading",
      "Auto-save, project archiving, and recovery mechanisms"
    ],
    uses: "Edit movies, YouTube videos, and multi-camera footage with titling, color grading, and audio mixing.",
    tags: ["video-editor", "non-linear-editor", "nle", "kde", "whisper-subtitles", "color-grading", "video-production"],
    logoSource: "https://raw.githubusercontent.com/KDE/kdenlive/master/data/icons/512-apps-kdenlive.png",
    screenshotSources: [],
    download: "https://kdenlive.org/en/download/",
    source: "https://invent.kde.org/multimedia/kdenlive",
    website: "https://kdenlive.org",
    docs: "https://docs.kdenlive.org/",
    youtube: "",
    installMethods: [
      { label: "Flathub (Linux)", command: "flatpak install flathub org.kde.kdenlive" },
      { label: "Ubuntu (PPA)", command: "sudo add-apt-repository ppa:kdenlive/kdenlive-stable && sudo apt install kdenlive" },
      { label: "Windows (winget)", command: "winget install KDE.Kdenlive" },
      { label: "macOS (brew)", command: "brew install --cask kdenlive" }
    ],
    comparisonData: {
      columns: ["Kdenlive", "Adobe Premiere Pro"],
      rows: [
        { feature: "No monthly subscription fee", values: [true, false] },
        { feature: "Whisper speech-to-text subtitles", values: [true, true] },
        { feature: "Multi-track proxy editing", values: [true, true] },
        { feature: "Native Linux, Windows, & Mac builds", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "64-bit OS (Linux, Windows 10/11, macOS 11+)\nMulti-core CPU (Intel i5/i7 or AMD Ryzen recommended)\n8 GB RAM (16 GB for 4K editing)\nOpenGL 2.0+ compatible GPU",
    maintainer: "organization",
    developer: "KDE Community",
    developerUrl: "https://kdenlive.org",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "mpv",
    name: "MPV",
    alternative: "VLC media player, Windows Media Player, QuickTime, PotPlayer",
    category: "Video",
    subcategory: "Video Players",
    license: "GPL-2.0",
    version: "0.39.0",
    fileSize: "25 MB",
    description: "Free, minimalist, and extremely powerful cross-platform media player with GPU video decoding.",
    fullDescription: "MPV is a free and open-source media player for the command line and desktop. Forked from MPlayer and mplayer2, MPV is renowned for its high-quality video output, minimalism, and extensive extensibility via Lua and JavaScript. It features an advanced OpenGL and Vulkan video output driver capable of high-grade video scaling algorithms (Lanczos, EWA, FSRCNNX), color management, frame timing interpolation, HDR tone mapping, and hardware decoding acceleration (VA-API, NVDEC, D3D11VA, VideoToolbox).",
    features: [
      "Minimalist on-screen controller (OSC) integrated into the video window",
      "Advanced GPU video output with Vulkan, OpenGL, and Direct3D11 support",
      "High-quality video scaling algorithms (EWA-Lanczos, FSRCNNX shaders)",
      "High Dynamic Range (HDR) to SDR tone mapping algorithms",
      "Scriptable user interface and keybindings using Lua and JavaScript",
      "Embedding capability as a library (libmpv) into third-party media software"
    ],
    uses: "Play video and audio files across all containers and codecs with pristine color reproduction and hardware acceleration.",
    tags: ["media-player", "video-player", "gpu-scaling", "vulkan", "lua-scripting", "libmpv", "lightweight"],
    logoSource: "https://raw.githubusercontent.com/mpv-player/mpv/master/etc/mpv.svg",
    screenshotSources: [],
    download: "https://mpv.io/installation/",
    source: "https://github.com/mpv-player/mpv",
    website: "https://mpv.io",
    docs: "https://mpv.io/manual/master/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install mpv" },
      { label: "Arch Linux", command: "sudo pacman -S mpv" },
      { label: "macOS (brew)", command: "brew install mpv" },
      { label: "Windows (winget)", command: "winget install mpv.net" },
      { label: "Android (F-Droid)", command: "https://f-droid.org/packages/is.xyz.mpv/" }
    ],
    comparisonData: {
      columns: ["MPV", "VLC Media Player"],
      rows: [
        { feature: "Vulkan / GLSL custom shaders", values: [true, false] },
        { feature: "Minimalist distraction-free UI", values: [true, false] },
        { feature: "High-grade HDR tone mapping", values: [true, false] },
        { feature: "Hardware GPU acceleration", values: [true, true] },
        { feature: "Open Source", values: [true, true] }
      ]
    },
    systemRequirements: "Linux, Windows 10/11, macOS 10.15+, or Android\nGPU with OpenGL 2.1+ or Vulkan 1.0+ support",
    maintainer: "organization",
    developer: "MPV Development Team",
    developerUrl: "https://github.com/mpv-player",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "kodi",
    name: "Kodi",
    alternative: "Plex, Apple TV, Emby, Jellyfin, Windows Media Center",
    category: "Entertainment",
    subcategory: "Streaming",
    license: "GPL-2.0",
    version: "21.1",
    fileSize: "90 MB",
    description: "Award-winning open-source entertainment hub and home theatre software for televisions and monitors.",
    fullDescription: "Kodi (formerly XBMC) is an open-source media player and entertainment hub designed for 10-foot interfaces in living rooms. Kodi turns any computer, television box, or smartphone into a digital jukebox and multimedia powerhouse. It allows users to play and view videos, music, podcasts, and digital media files from local storage, network shares (SMB, NFS, UPnP), and the internet. Kodi features a 100% remote-controlled GUI, automated metadata scrapers for movies and TV series, PVR live television recording, and a vast repository of community add-ons.",
    features: [
      "10-foot user interface optimized for televisions and remote controllers",
      "Automatic movie, TV show, and music metadata scraping with fanart",
      "Extensive audio/video format support with hardware passthrough audio (Dolby Atmos, DTS:X)",
      "Live TV and PVR frontend with electronic program guides (EPG)",
      "Extensible Python addon repository for streaming, games, and lyrics",
      "Retro video game emulation support with game controller mappings"
    ],
    uses: "Organize home media libraries and stream videos, music, and live television from the comfort of your living room couch.",
    tags: ["home-theater", "media-center", "streaming", "hdtv", "pvr", "addons", "kodi"],
    logoSource: "https://raw.githubusercontent.com/xbmc/xbmc/master/media/icon256x256.png",
    screenshotSources: [],
    download: "https://kodi.tv/download/",
    source: "https://github.com/xbmc/xbmc",
    website: "https://kodi.tv",
    docs: "https://kodi.wiki/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu (PPA)", command: "sudo add-apt-repository ppa:team-xbmc/ppa && sudo apt install kodi" },
      { label: "Flathub (Linux)", command: "flatpak install flathub tv.kodi.Kodi" },
      { label: "Windows (winget)", command: "winget install XBMCFoundation.Kodi" },
      { label: "Android (Google Play)", command: "https://play.google.com/store/apps/details?id=org.xbmc.kodi" },
      { label: "macOS (brew)", command: "brew install --cask kodi" }
    ],
    comparisonData: {
      columns: ["Kodi", "Plex"],
      rows: [
        { feature: "No Plex Pass or paid tiers", values: [true, false] },
        { feature: "Direct local playback (no transcode required)", values: [true, false] },
        { feature: "Dolby Atmos / TrueHD bitstream passthrough", values: [true, true] },
        { feature: "Retro gaming emulator frontend", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Hardware with 3D graphics hardware acceleration (OpenGL ES 2.0 / DirectX 11)\n2 GB RAM minimum\nHDMI connection to TV or monitor",
    maintainer: "organization",
    developer: "XBMC Foundation",
    developerUrl: "https://github.com/xbmc",
    platforms: ["Linux", "Windows", "macOS", "Android", "iOS"]
  },
  {
    id: "calibre",
    name: "Calibre",
    alternative: "Apple Books, Adobe Digital Editions, Kindle Desktop, Freda",
    category: "Books & Reading",
    subcategory: "Ebook Readers",
    license: "GPL-3.0",
    version: "7.20.0",
    fileSize: "160 MB",
    description: "Comprehensive and powerful open-source e-book manager, converter, and reader.",
    fullDescription: "Calibre is the definitive open-source e-book manager for digital readers and book enthusiasts. Calibre handles your entire digital library: it manages book metadata, automatically fetches book covers and synopsis summaries from online sources, converts between dozens of e-book formats (EPUB, MOBI, AZW3, PDF, FB2, CBZ), syncs directly with dedicated hardware e-readers (Kindle, Kobo, Nook), and includes a built-in content server to read books wirelessly in any browser.",
    features: [
      "Comprehensive library cataloging with custom tags, series, and ratings",
      "Two-way conversion between major e-book formats: EPUB, AZW3, MOBI, PDF, and CBZ",
      "Direct USB sync and collection management with Kindle, Kobo, and Android e-readers",
      "Automated metadata, cover art, and ISBN fetching from Goodreads and Google Books",
      "Built-in full-featured E-book viewer with dictionary lookup and font customization",
      "Embedded Content Server allowing remote browser-based reading across your home network"
    ],
    uses: "Organize e-book collections, convert books between proprietary formats, and synchronize libraries to e-readers.",
    tags: ["ebooks", "epub", "calibre", "kindle", "kobo", "pdf-reader", "book-converter"],
    logoSource: "https://raw.githubusercontent.com/kovidgoyal/calibre/master/icons/calibre.png",
    screenshotSources: [],
    download: "https://calibre-ebook.com/download",
    source: "https://github.com/kovidgoyal/calibre",
    website: "https://calibre-ebook.com",
    docs: "https://manual.calibre-ebook.com/",
    youtube: "",
    installMethods: [
      { label: "Linux (Official Installer)", command: "sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin" },
      { label: "Ubuntu / Debian", command: "sudo apt install calibre" },
      { label: "Windows (winget)", command: "winget install KovidGoyal.Calibre" },
      { label: "macOS (brew)", command: "brew install --cask calibre" },
      { label: "Flathub", command: "flatpak install flathub com.calibre_ebook.calibre" }
    ],
    comparisonData: {
      columns: ["Calibre", "Adobe Digital Editions"],
      rows: [
        { feature: "No vendor lock-in", values: [true, false] },
        { feature: "Comprehensive format conversion (EPUB/AZW3)", values: [true, false] },
        { feature: "Built-in web content server", values: [true, false] },
        { feature: "Automated metadata scraping", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 10/11, macOS 11+, or modern 64-bit Linux distribution\n1 GB RAM minimum",
    maintainer: "individual",
    developer: "Kovid Goyal",
    developerUrl: "https://github.com/kovidgoyal",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "okular",
    name: "Okular",
    alternative: "Adobe Acrobat Reader, Foxit PDF Reader, Sumatra PDF, Apple Preview",
    category: "Office",
    subcategory: "PDF Tools",
    license: "GPL-2.0",
    version: "24.08.2",
    fileSize: "75 MB",
    description: "Universal multi-format document viewer for PDF, EPub, DjVu, Markdown, and comics by KDE.",
    fullDescription: "Okular is a universal document viewer developed by the KDE community and awarded the prestigious German Blue Angel eco-label for sustainable software design. Okular supports reading and annotating a wide variety of formats: PDF, PostScript, DjVu, CHM, XPS, ePub, FictionBook, and comic book archives (CBR/CBZ). It offers advanced annotation tools (highlighting, text notes, stamps, drawing lines), digital cryptographic signature verification, form completion, text-to-speech reading, and presentation mode.",
    features: [
      "Multi-format document support: PDF, PostScript, DjVu, CHM, ePub, Markdown, and CBZ",
      "Extensive annotation tools: highlighters, geometric shapes, text boxes, and stamps",
      "Digital cryptographic signatures verification and PDF signing",
      "Interactive PDF forms filling and calculation",
      "Awarded the Blue Angel eco-label for resource efficiency and sustainability",
      "Text-to-speech document voice reading via speech-dispatcher"
    ],
    uses: "Read, annotate, fill out, and digitally sign PDF documents and e-books without proprietary bloat.",
    tags: ["pdf-viewer", "document-reader", "pdf-annotations", "kde", "digital-signatures", "epub", "djvu"],
    logoSource: "https://raw.githubusercontent.com/KDE/okular/master/icons/512-apps-okular.png",
    screenshotSources: [],
    download: "https://okular.kde.org/download/",
    source: "https://invent.kde.org/graphics/okular",
    website: "https://okular.kde.org",
    docs: "https://docs.kde.org/stable5/en/okular/okular/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install okular" },
      { label: "Flathub (Linux)", command: "flatpak install flathub org.kde.okular" },
      { label: "Windows (winget)", command: "winget install KDE.Okular" },
      { label: "macOS (brew)", command: "brew install --cask okular" },
      { label: "Arch Linux", command: "sudo pacman -S okular" }
    ],
    comparisonData: {
      columns: ["Okular", "Adobe Acrobat Reader"],
      rows: [
        { feature: "No cloud upsells or subscription prompts", values: [true, false] },
        { feature: "Multi-format (DjVu, ePub, Markdown, CBR)", values: [true, false] },
        { feature: "Digital signature verification", values: [true, true] },
        { feature: "Blue Angel eco-label certified", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Linux desktop, Windows 10/11, macOS 11+, or Android tablet\n2 GB RAM minimum",
    maintainer: "organization",
    developer: "KDE Community",
    developerUrl: "https://okular.kde.org",
    platforms: ["Linux", "Windows", "macOS", "Android"]
  },
  {
    id: "veracrypt",
    name: "VeraCrypt",
    alternative: "BitLocker, Apple FileVault, Symantec Endpoint Encryption, TrueCrypt",
    category: "Security",
    subcategory: "Encryption",
    license: "Apache-2.0",
    version: "1.26.14",
    fileSize: "32 MB",
    description: "Robust open-source on-the-fly disk encryption software protecting storage drives and virtual volumes.",
    fullDescription: "VeraCrypt is a free, open-source disk encryption software based on TrueCrypt that brings enhanced security algorithms. VeraCrypt secures your data by creating virtual encrypted disks within a file, encrypting entire partitions, or encrypting the whole system storage device with pre-boot authentication. It supports enterprise-grade cryptographic ciphers (AES-256, Serpent, Twofish, Camellia, and cascaded ciphers) combined with robust hash algorithms (SHA-512, Whirlpool, Streebog, BLAKE2s) that resist brute-force and quantum decryption attacks.",
    features: [
      "Real-time transparent on-the-fly disk encryption and decryption",
      "Creates virtual encrypted volumes inside files and mounts them as virtual drives",
      "Full partition and storage device encryption (USB drives, external SSDs)",
      "Plausible deniability via hidden volumes and hidden operating system capability",
      "Industry-standard ciphers: AES, Serpent, Twofish, Camellia, and multi-tier cascades",
      "Audited codebase with defense against modern cold boot attacks"
    ],
    uses: "Protect confidential files, external USB thumbdrives, and entire laptop hard drives from unauthorized physical extraction.",
    tags: ["encryption", "disk-encryption", "security", "privacy", "truecrypt-successor", "cryptography"],
    logoSource: "https://raw.githubusercontent.com/veracrypt/VeraCrypt/master/src/Resources/Icons/VeraCrypt-256x256.png",
    screenshotSources: [],
    download: "https://www.veracrypt.fr/en/Downloads.html",
    source: "https://github.com/veracrypt/VeraCrypt",
    website: "https://www.veracrypt.fr",
    docs: "https://www.veracrypt.fr/en/Documentation.html",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian (PPA)", command: "sudo add-apt-repository ppa:unit193/encryption && sudo apt install veracrypt" },
      { label: "Windows (winget)", command: "winget install IDRIX.VeraCrypt" },
      { label: "macOS (brew)", command: "brew install --cask veracrypt" },
      { label: "Arch Linux", command: "sudo pacman -S veracrypt" }
    ],
    comparisonData: {
      columns: ["VeraCrypt", "BitLocker"],
      rows: [
        { feature: "Plausible deniability (hidden volumes)", values: [true, false] },
        { feature: "Cross-platform (Linux/Win/Mac)", values: [true, false] },
        { feature: "No proprietary escrow keys", values: [true, false] },
        { feature: "Multi-cipher cascade encryption", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Windows 7/8/10/11, macOS 10.13+, or Linux\nAdministrative/root permissions for disk mounting",
    maintainer: "organization",
    developer: "IDRIX",
    developerUrl: "https://github.com/veracrypt",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "gnupg",
    name: "GnuPG",
    alternative: "Symantec PGP Desktop, PKWARE, Kleopatra",
    category: "Security",
    subcategory: "Encryption",
    license: "GPL-3.0",
    version: "2.4.6",
    fileSize: "8 MB",
    description: "Complete and free implementation of the OpenPGP standard for cryptographic email and file signing.",
    fullDescription: "GnuPG (GNU Privacy Guard) is a complete and free implementation of the OpenPGP standard as defined by RFC 4880 and RFC 9580. GnuPG allows you to encrypt and sign your data and communications, featuring a versatile key management system along with access modules for all kinds of public key directories. GnuPG underpins Linux package verification, Git commit verification, cryptographic email communication, and hardware security token authentication (YubiKey, Nitrokey).",
    features: [
      "OpenPGP standard cryptographic file and communication encryption",
      "Digital signatures for tamper-proof software releases and Git commits",
      "Advanced asymmetric algorithms: Ed25519, Curve25519, RSA, and ECDSA",
      "Native hardware security key support (smartcards, YubiKey, Nitrokey)",
      "Secure key server directory synchronization via WKD and HKPS",
      "Universal integration with email clients, text editors, and terminal scripts"
    ],
    uses: "Encrypt sensitive documents, sign software packages and Git commits, and protect email communication with asymmetric keys.",
    tags: ["openpgp", "encryption", "digital-signatures", "gpg", "security", "cryptography", "privacy"],
    logoSource: "https://raw.githubusercontent.com/gpg/gnupg/master/artwork/gnupg-logo-180x59tr.png",
    screenshotSources: [],
    download: "https://gnupg.org/download/",
    source: "https://github.com/gpg/gnupg",
    website: "https://gnupg.org",
    docs: "https://gnupg.org/documentation/",
    youtube: "",
    installMethods: [
      { label: "Ubuntu / Debian", command: "sudo apt install gnupg" },
      { label: "Fedora", command: "sudo dnf install gnupg2" },
      { label: "Arch Linux", command: "sudo pacman -S gnupg" },
      { label: "macOS (brew)", command: "brew install gnupg" },
      { label: "Windows (Gpg4win)", command: "winget install GnuPG.Gpg4win" }
    ],
    comparisonData: {
      columns: ["GnuPG", "Symantec PGP"],
      rows: [
        { feature: "Complete RFC OpenPGP standard compliance", values: [true, true] },
        { feature: "No corporate licensing costs", values: [true, false] },
        { feature: "Hardware smartcard / YubiKey support", values: [true, true] },
        { feature: "Modern elliptic curves (Ed25519)", values: [true, false] },
        { feature: "Open Source", values: [true, false] }
      ]
    },
    systemRequirements: "Linux, macOS, Windows, BSD, or UNIX\nMinimal CPU and RAM footprint (<50 MB)",
    maintainer: "organization",
    developer: "The GnuPG Project",
    developerUrl: "https://gnupg.org",
    platforms: ["Linux", "Windows", "macOS"]
  }
];
