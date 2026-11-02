module.exports = [
  {
    id: "pencil2d",
    name: "Pencil2D",
    alternative: "Adobe Animate, Toon Boom Harmony, TVPaint, Flipaclip",
    category: "Graphics & Design",
    subcategory: "Animation",
    license: "GPL-2.0",
    version: "0.7.0",
    fileSize: "45 MB",
    description: "Lightweight, user-friendly 2D traditional hand-drawn animation software combining bitmap and vector workflows.",
    fullDescription: "Pencil2D is an open-source 2D animation application engineered for traditional frame-by-frame animators, digital cartoonists, and students. Focusing on an intuitive, distraction-free interface, Pencil2D lets creators sketch, ink, and paint hand-drawn animations seamlessly across both bitmap and vector drawing layers. It features customizable onion skinning, keyframe timeline management, variable brush pressure, and export to MP4, AVI, APNG, and animated GIF.",
    features: [
      "Traditional frame-by-frame hand-drawn animation with seamless raster and vector layer blending",
      "Customizable onion skinning showing previous and next frames with color-coded overlays",
      "Lightweight, distraction-free minimalist interface designed for immediate sketching",
      "Pressure-sensitive drawing tablet support (Wacom, Huion, XP-Pen) with customizable smoothing",
      "Timeline scrubbing with sound track audio scrubbing for synchronized character dialogue",
      "Multi-format rendering: MP4 video, animated GIF, APNG, image sequences, and SVG vector frames"
    ],
    uses: "Create traditional 2D hand-drawn animated shorts, storyboards, animated stickers, and educational cartoons.",
    tags: ["2d-animation", "hand-drawn", "traditional-animation", "onion-skinning", "cartoon", "pencil2d"],
    logoSource: "https://www.pencil2d.org/favicon.ico",
    screenshotSources: [],
    download: "https://www.pencil2d.org/download/",
    source: "https://github.com/pencil2d/pencil",
    website: "https://www.pencil2d.org/",
    docs: "https://www.pencil2d.org/doc/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.pencil2d.Pencil2D" },
      { label: "Ubuntu / Debian", command: "sudo apt install pencil2d" },
      { label: "Windows (winget)", command: "winget install Pencil2D.Pencil2D" },
      { label: "macOS (brew)", command: "brew install --cask pencil2d" }
    ],
    comparisonData: {
      columns: ["Pencil2D", "Adobe Animate"],
      rows: [
        { feature: "Lightweight resource footprint (under 50 MB)", values: [true, false] },
        { feature: "Simultaneous bitmap and vector frame layers", values: [true, false] },
        { feature: "100% Free with zero recurring subscriptions", values: [true, false] },
        { feature: "Open Source (GPL)", values: [true, false] },
        { feature: "Audio scrubbing along timeline", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\n1.5 GHz CPU, 2 GB RAM\nDrawing tablet recommended",
    maintainer: "community",
    developer: "Pencil2D Developers & Pascal Naidon",
    developerUrl: "https://github.com/pencil2d",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "mypaint",
    name: "MyPaint",
    alternative: "Corel Painter, Clip Studio Paint, ArtRage, Autodesk SketchBook",
    category: "Graphics & Design",
    subcategory: "Painting & Drawing",
    license: "GPL-2.0-or-later",
    version: "2.0.1",
    fileSize: "60 MB",
    description: "Nimble, distraction-free digital painting program featuring an infinite canvas and expressive brush engine.",
    fullDescription: "MyPaint is an open-source raster graphics editor designed specifically for digital painters and concept artists. Focusing on expressive digital painting rather than photographic manipulation, MyPaint provides an infinite canvas that expands dynamically as you sketch. Its powerful brush engine accurately simulates charcoal, pastels, oils, watercolor, and ink with realistic pigment blending. MyPaint's brush library (libmypaint) is so acclaimed it has been integrated into GIMP and Krita.",
    features: [
      "Dynamic infinite canvas: draw without worrying about pre-set pixel dimensions or canvas boundaries",
      "Extensive procedural brush engine realistically mimicking charcoal, inks, chalk, and wet oils",
      "Highly responsive brush dynamics responding to pen pressure, tilt, speed, and directional heading",
      "Minimalist, distraction-free UI: hide all dockers and color selectors with a single keystroke",
      "Layer management with alpha lock, blend modes (Multiply, Burn, Dodge), and layer grouping",
      "Industry-standard OpenRaster (ORA) layered image format support alongside PNG and JPEG export"
    ],
    uses: "Create digital concept sketches, painterly character illustrations, and expressive speedpaintings without canvas limits.",
    tags: ["digital-painting", "concept-art", "infinite-canvas", "brush-engine", "illustration", "mypaint"],
    logoSource: "https://mypaint.app/favicon.ico",
    screenshotSources: [],
    download: "https://mypaint.app/download/",
    source: "https://github.com/mypaint/mypaint",
    website: "https://mypaint.app/",
    docs: "https://mypaint.org/documentation/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.mypaint.MyPaint" },
      { label: "Ubuntu / Debian", command: "sudo apt install mypaint" },
      { label: "Windows (winget)", command: "winget install MyPaint.MyPaint" }
    ],
    comparisonData: {
      columns: ["MyPaint", "Corel Painter"],
      rows: [
        { feature: "Infinite expanding canvas without bounds", values: [true, false] },
        { feature: "Standalone libmypaint open-source brush engine", values: [true, false] },
        { feature: "100% Free with zero recurring software fees", values: [true, false] },
        { feature: "Native Linux, Windows, and macOS support", values: [true, false] },
        { feature: "Pressure and tilt sensitive brush blending", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\n2 GHz CPU, 2 GB RAM (4 GB recommended)\nWacom or compatible graphics tablet recommended",
    maintainer: "community",
    developer: "MyPaint Development Team & Martin Renold",
    developerUrl: "https://github.com/mypaint",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "olive",
    name: "Olive",
    alternative: "Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, Sony Vegas",
    category: "Video",
    subcategory: "Video Editors",
    license: "GPL-3.0",
    version: "0.2.0",
    fileSize: "55 MB",
    description: "Fast, modern non-linear video editor (NLE) combining traditional timeline editing with a node-based compositor.",
    fullDescription: "Olive is an open-source, non-linear video editing (NLE) application built from the ground up in C++ and Qt to provide a free alternative to high-end commercial video editing software. Combining traditional magnetic timeline editing with a node-based visual compositing pipeline, Olive gives editors complete control over visual effects, color grading, chroma keying, and audio mixing. Olive features GPU-accelerated real-time playback powered by OpenColorIO and shader pipelines.",
    features: [
      "Modern non-linear video editing with standard multi-track audio and video timeline trimming",
      "Full node-based visual compositing workflow for complex masking, keying, and layering",
      "GPU-accelerated video rendering and real-time timeline playback powered by GLSL shaders",
      "Professional color management with OpenColorIO (OCIO) supporting ACES and scene-referred color",
      "Keyframe curve graph editor for precise control over motion parameters and transitions",
      "Cross-platform performance engineered for Linux, Windows, and macOS desktops"
    ],
    uses: "Edit narrative films, YouTube videos, and multi-track video projects with professional node-based color and effects.",
    tags: ["video-editor", "nle", "node-compositor", "premiere-alternative", "color-grading", "olive"],
    logoSource: "https://www.olivevideoeditor.org/favicon.ico",
    screenshotSources: [],
    download: "https://www.olivevideoeditor.org/download.php",
    source: "https://github.com/olive-editor/olive",
    website: "https://www.olivevideoeditor.org/",
    docs: "https://www.olivevideoeditor.org/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.olivevideoeditor.Olive" },
      { label: "AppImage", command: "https://www.olivevideoeditor.org/download.php" }
    ],
    comparisonData: {
      columns: ["Olive", "Adobe Premiere Pro"],
      rows: [
        { feature: "Integrated node-based compositing workflow", values: [true, false] },
        { feature: "OpenColorIO (OCIO) color management pipeline", values: [true, true] },
        { feature: "100% Free with zero cloud subscriptions", values: [true, false] },
        { feature: "Native Linux, Windows, and macOS execution", values: [true, false] },
        { feature: "Open Source (GPL-3.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\nQuad-core 2.5 GHz CPU, 8 GB RAM (16 GB recommended for 4K editing)\nOpenGL 3.3 compatible graphics card with 2 GB VRAM",
    maintainer: "community",
    developer: "Olive Video Editor Team & Matt KC",
    developerUrl: "https://github.com/olive-editor",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "pitivi",
    name: "Pitivi",
    alternative: "iMovie, Adobe Premiere Elements, Filmora, CapCut, Windows Movie Maker",
    category: "Video",
    subcategory: "Video Editors",
    license: "LGPL-2.1-or-later",
    version: "2023.03",
    fileSize: "75 MB",
    description: "Intuitive, beautiful video editor built on the GStreamer multimedia framework for Linux desktops.",
    fullDescription: "Pitivi is an open-source non-linear video editor designed for Linux and GNOME desktop environments. Built directly on top of the powerful GStreamer Editing Services (GES) multimedia framework, Pitivi provides a clean, user-friendly timeline interface with frame-accurate scrubbing, multi-layer video compositing, real-time audio waveform visualization, keyframe curve interpolation, and animated transitions. Pitivi is tailored for creators wanting reliable editing without overwhelming complexity.",
    features: [
      "Frame-accurate video editing and trimming powered by GStreamer Editing Services (GES)",
      "Multi-track timeline with automatic snapping, grouping, splitting, and rolling edits",
      "Real-time audio waveforms directly on audio clips for precise dialogue and beat matching",
      "Over 70 video filters and transitions with keyframe automation curves for parameter changes",
      "Wide codec format support: AV1, VP9, H.264, ProRes, MP4, WebM, and MKV",
      "Automated project backup and crash recovery safeguarding editing sessions"
    ],
    uses: "Assemble home movies, YouTube vlog episodes, and documentary clips with intuitive timeline trimming.",
    tags: ["video-editor", "gstreamer", "gnome", "nle", "imovie-alternative", "pitivi"],
    logoSource: "https://gitlab.gnome.org/GNOME/pitivi/-/raw/master/data/icons/hicolor/scalable/apps/org.pitivi.Pitivi.svg",
    screenshotSources: [],
    download: "https://www.pitivi.org/download/",
    source: "https://gitlab.gnome.org/GNOME/pitivi",
    website: "https://www.pitivi.org/",
    docs: "https://www.pitivi.org/manual/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.pitivi.Pitivi" },
      { label: "Ubuntu / Debian", command: "sudo apt install pitivi" }
    ],
    comparisonData: {
      columns: ["Pitivi", "iMovie"],
      rows: [
        { feature: "Native Linux and GNOME desktop integration", values: [true, false] },
        { feature: "GStreamer framework with broad open codec support", values: [true, false] },
        { feature: "Keyframe automation for all audio and video effects", values: [true, false] },
        { feature: "Open Source (LGPL)", values: [true, false] },
        { feature: "Frame-accurate scrubbing and magnetic snapping", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit Linux distribution\nDual-core 2 GHz CPU, 4 GB RAM\nOpenGL 2.0 compatible graphics card",
    maintainer: "community",
    developer: "Pitivi Team & GNOME Community",
    developerUrl: "https://gitlab.gnome.org/GNOME/pitivi",
    platforms: ["Linux"]
  },
  {
    id: "flowblade",
    name: "Flowblade",
    alternative: "Adobe Premiere Pro, Filmora, DaVinci Resolve, Sony Vegas",
    category: "Video",
    subcategory: "Video Editors",
    license: "GPL-3.0",
    version: "2.16.2",
    fileSize: "40 MB",
    description: "Fast, precise, multi-track non-linear video editor for Linux powered by MLT multimedia framework.",
    fullDescription: "Flowblade is a fast, precise, multi-track non-linear video editor for Linux developed to make the cut-and-trim experience as responsive as possible. Built around the MLT multimedia framework, Flowblade offers multiple editing timeline workflows (Top-track magnetic mode, standard insert mode, and overwrite mode) providing editors with flexibility. It features over 50 image filters, 30 audio filters, G’MIC effects tool integration, and proxy editing for smooth 4K scrubbing.",
    features: [
      "High-speed, multi-track timeline editing with insert, overwrite, and magnetic ripple trimming modes",
      "Over 50 video filters, 30 audio filters, and color grading tools powered by MLT and Frei0r",
      "G’MIC AI and algorithmic image processing tool integration with over 200 procedural filters",
      "Integrated audio mixer with master output leveling, VU meters, and pan controls",
      "Proxy editing workflow converting heavy 4K media into lightweight files for real-time playback",
      "Batch render queue for exporting multiple video sequences in the background"
    ],
    uses: "Cut, trim, and produce professional multi-track video projects on Linux workstations with fast timeline response.",
    tags: ["video-editor", "nle", "mlt", "linux", "flowblade", "video-editing"],
    logoSource: "https://raw.githubusercontent.com/jliljebl/flowblade/master/flowblade-trunk/installdata/io.github.jliljebl.Flowblade.png",
    screenshotSources: [],
    download: "https://jliljebl.github.io/flowblade/download.html",
    source: "https://github.com/jliljebl/flowblade",
    website: "https://jliljebl.github.io/flowblade/",
    docs: "https://jliljebl.github.io/flowblade/help.html",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub io.github.jliljebl.Flowblade" },
      { label: "Ubuntu / Debian", command: "sudo apt install flowblade" }
    ],
    comparisonData: {
      columns: ["Flowblade", "Filmora"],
      rows: [
        { feature: "No watermarks or paid export restrictions", values: [true, false] },
        { feature: "Multiple timeline edit paradigms (insert, overwrite, magnetic)", values: [true, false] },
        { feature: "Integrated G’MIC procedural image filter engine", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] },
        { feature: "Lightweight and fast native Linux execution", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit Linux distribution\n2.5 GHz multi-core CPU, 4 GB RAM (8 GB recommended)\nMLT framework and FFmpeg codecs installed",
    maintainer: "individual",
    developer: "Janne Liljeblad",
    developerUrl: "https://github.com/jliljebl",
    platforms: ["Linux"]
  },
  {
    id: "avidemux",
    name: "Avidemux",
    alternative: "HandBrake, VirtualDub, Adobe Media Encoder, Any Video Converter",
    category: "Video",
    subcategory: "Video Editors",
    license: "GPL-2.0-or-later",
    version: "2.8.1",
    fileSize: "28 MB",
    description: "Simple, fast video editor designed for simple cutting, filtering, and re-encoding tasks without recompressing.",
    fullDescription: "Avidemux is an open-source video editor engineered for straightforward cutting, filtering, and transcoding tasks. What makes Avidemux unique is its 'Copy' mode: it can cut or split video files at keyframe boundaries without re-encoding the audio or video streams, completing operations in seconds with zero loss of quality. It supports virtually all popular container formats (AVI, MP4, MKV, FLV) and provides video filters for deinterlacing, cropping, resizing, and color adjustment.",
    features: [
      "Lossless video cutting and splitting at I-frames (keyframes) without re-encoding",
      "Support for major container formats: MP4, MKV, AVI, MPEG-TS, WebM, and FLV",
      "Video filtering: Yadif deinterlacing, cropping, sub-titling, sharpening, and color correction",
      "Audio processing: track downmixing, dynamic range normalization, and audio delay sync",
      "Powerful batch queue manager for processing hundreds of video files automatically",
      "Built-in SpiderMonkey ECMAScript scripting engine for automating repetitive encoding tasks"
    ],
    uses: "Trim television recordings, remove commercials, split large video files, and adjust audio sync in seconds without quality loss.",
    tags: ["video-editor", "lossless-cutting", "transcoding", "keyframe-editor", "converter", "avidemux"],
    logoSource: "http://avidemux.sourceforge.net/favicon.ico",
    screenshotSources: [],
    download: "https://avidemux.sourceforge.net/download.html",
    source: "https://github.com/mean00/avidemux2",
    website: "https://avidemux.sourceforge.net/",
    docs: "https://www.avidemux.org/nightly/official_wiki/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.avidemux.Avidemux" },
      { label: "Ubuntu / Debian", command: "sudo apt install avidemux-qt" },
      { label: "Windows (winget)", command: "winget install Avidemux.Avidemux" },
      { label: "macOS (brew)", command: "brew install --cask avidemux" }
    ],
    comparisonData: {
      columns: ["Avidemux", "HandBrake"],
      rows: [
        { feature: "Lossless cut and trim without re-encoding (Copy mode)", values: [true, false] },
        { feature: "Keyframe timeline navigation and frame-by-frame stepping", values: [true, false] },
        { feature: "Direct container remuxing between MP4 and MKV", values: [true, false] },
        { feature: "Batch processing and queue automation", values: [true, true] },
        { feature: "100% Free and Open Source (GPL)", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n1 GHz CPU, 1 GB RAM\nRuns smoothly on basic integrated graphics",
    maintainer: "community",
    developer: "Mean & Avidemux Team",
    developerUrl: "https://github.com/mean00",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "tenacity",
    name: "Tenacity",
    alternative: "Audacity, Adobe Audition, WavePad, Sound Forge, Ocenaudio",
    category: "Audio",
    subcategory: "Audio Editors",
    license: "GPL-2.0-or-later",
    version: "1.3.3",
    fileSize: "35 MB",
    description: "Privacy-respecting, community-maintained open-source multi-track audio editor and sound recorder.",
    fullDescription: "Tenacity is an open-source, multi-track audio editor and recorder created by the open-source community as a privacy-focused fork of Audacity. Free from corporate telemetry, network reporting, and data collection, Tenacity preserves the classic, responsive audio editing experience. It supports multi-track recording, sample-accurate wave editing, spectral frequency analysis, noise reduction, and VST/LV2/LADSPA audio plugin effects.",
    features: [
      "100% privacy-respecting audio editor with zero telemetry, network beacons, or data tracking",
      "Multi-track audio recording and non-destructive sample-level waveform editing",
      "Extensive audio effects: spectral noise reduction, equalization, compression, reverb, and normalize",
      "Support for VST3, LV2, LADSPA, and Nyquist audio processing plugins",
      "Comprehensive format support: WAV, AIFF, FLAC, Ogg Vorbis, MP3, and Opus",
      "Built-in spectrum analyzer and spectrogram view for precision audio mastering and cleanup"
    ],
    uses: "Record voiceovers, edit podcasts, restore noisy field recordings, and produce music with full privacy.",
    tags: ["audio-editor", "podcast-editing", "audacity-fork", "recording", "sound-design", "tenacity"],
    logoSource: "https://raw.githubusercontent.com/tenacityteam/tenacity/master/images/TenacityLogo.png",
    screenshotSources: [],
    download: "https://github.com/tenacityteam/tenacity/releases",
    source: "https://github.com/tenacityteam/tenacity",
    website: "https://tenacityaudio.org/",
    docs: "https://github.com/tenacityteam/tenacity/wiki",
    youtube: "",
    installMethods: [
      { label: "AppImage", command: "https://github.com/tenacityteam/tenacity/releases/latest" },
      { label: "Windows Installer", command: "https://github.com/tenacityteam/tenacity/releases/latest" }
    ],
    comparisonData: {
      columns: ["Tenacity", "Audacity"],
      rows: [
        { feature: "Zero telemetry or corporate tracking code", values: [true, false] },
        { feature: "Community-driven open-source governance", values: [true, false] },
        { feature: "Multi-track recording and editing", values: [true, true] },
        { feature: "Spectral editing and noise reduction", values: [true, true] },
        { feature: "Open Source (GPL)", values: [true, true] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS)\n2 GHz CPU, 2 GB RAM\nStandard audio interface or microphone",
    maintainer: "community",
    developer: "Tenacity Team",
    developerUrl: "https://github.com/tenacityteam",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "musescore",
    name: "MuseScore",
    alternative: "Sibelius, Finale, Dorico, Notion",
    category: "Media",
    subcategory: "Music Production",
    license: "GPL-3.0",
    version: "4.4.3",
    fileSize: "120 MB",
    description: "World-renowned professional music notation and sheet music engraving software with realistic orchestral playback.",
    fullDescription: "MuseScore is the world's most popular open-source sheet music notation software, used by composers, arrangers, music educators, and orchestral musicians. Featuring the state-of-the-art Muse Sounds orchestral playback engine, MuseScore produces lifelike musical interpretations directly from notation. It supports MIDI keyboard input, complex engraving rules conforming to classical publishing standards, chord symbol analysis, and direct sharing to the MuseScore.com community.",
    features: [
      "Professional music engraving engine with automatic collision avoidance and layout spacing",
      "State-of-the-art Muse Sounds orchestral sample library delivering realistic orchestral playback",
      "Full MIDI keyboard input, mouse note-entry, and computer keyboard shortcut speed-entry",
      "Dynamic parts: modifying the master orchestral conductor score automatically updates individual instrument parts",
      "Comprehensive export formats: MusicXML, MIDI, PDF sheet music, MP3, WAV, and FLAC audio",
      "Integrated guitar tablature, chord diagrams, percussion notation, and lead sheet generation"
    ],
    uses: "Compose orchestral scores, arrange sheet music, engrave choral pieces, and teach music theory.",
    tags: ["sheet-music", "music-notation", "composition", "orchestra", "midi", "musescore"],
    logoSource: "https://upload.wikimedia.org/wikipedia/commons/6/6d/MuseScore_logo_square.svg",
    screenshotSources: [],
    download: "https://musescore.org/en/download",
    source: "https://github.com/musescore/MuseScore",
    website: "https://musescore.org/",
    docs: "https://musescore.org/en/handbook/4",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.musescore.MuseScore" },
      { label: "Ubuntu / Debian", command: "sudo apt install musescore4" },
      { label: "Windows (winget)", command: "winget install MuseScore.MuseScore" },
      { label: "macOS (brew)", command: "brew install --cask musescore" }
    ],
    comparisonData: {
      columns: ["MuseScore", "Sibelius Ultimate"],
      rows: [
        { feature: "100% Free with zero license dongles or subscription locks", values: [true, false] },
        { feature: "Next-gen realistic Muse Sounds orchestral playback", values: [true, true] },
        { feature: "Automatic parts and score synchronization", values: [true, true] },
        { feature: "Native Linux, Windows, and macOS support", values: [true, false] },
        { feature: "Open Source (GPL-3.0)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows 10/11, macOS 10.14+)\nMulti-core 2 GHz CPU, 4 GB RAM (8 GB recommended for Muse Sounds)\nDedicated audio interface recommended for low latency",
    maintainer: "community",
    developer: "Muse Group & Open Source Community",
    developerUrl: "https://github.com/musescore",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "hydrogen",
    name: "Hydrogen",
    alternative: "EZdrummer, Superior Drummer, Addictive Drums, Battery, Fruity Slicer",
    category: "Media",
    subcategory: "Music Production",
    license: "GPL-2.0-or-later",
    version: "1.2.3",
    fileSize: "32 MB",
    description: "Advanced pattern-based software drum machine and step sequencer for digital music producers.",
    fullDescription: "Hydrogen is an open-source drum machine and pattern-based step sequencer designed for musicians, producers, and beatmakers. Featuring a responsive, graphical interface, Hydrogen lets users program acoustic drum kits, electronic beats, and hip-hop polyrhythms with fine-grained control over velocity, pan, humanize swing, and pitch. It includes a multi-layered sample engine supporting multi-velocity strike layers, Jack Audio server synchronization, and MIDI controller mapping.",
    features: [
      "Pattern-based step sequencer with variable length, time signatures, and swing humanize controls",
      "Multi-layered instrument sample playback supporting velocity layers, round-robin, and envelopes",
      "Extensive drumkit library downloadable directly through the built-in drumkit manager",
      "Professional audio connectivity: JACK Audio Connection Kit, ALSA, PulseAudio, and CoreAudio",
      "Integrated mixer with per-channel volume, pan, mute, solo, and instrument effect inserts (LADSPA)",
      "Full MIDI implementation: trigger drum pads via MIDI keyboards, electronic e-drums, and control surfaces"
    ],
    uses: "Program realistic drum tracks, electronic beats, and backing rhythms for songwriting and music production.",
    tags: ["drum-machine", "sequencer", "beats", "drums", "midi", "hydrogen"],
    logoSource: "https://raw.githubusercontent.com/hydrogen-music/hydrogen/master/data/img/gray/icon.svg",
    screenshotSources: [],
    download: "https://hydrogen-music.org/downloads/",
    source: "https://github.com/hydrogen-music/hydrogen",
    website: "https://hydrogen-music.org/",
    docs: "https://hydrogen-music.org/documentation/manual/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.hydrogenmusic.Hydrogen" },
      { label: "Ubuntu / Debian", command: "sudo apt install hydrogen" },
      { label: "Windows (winget)", command: "winget install Hydrogen.Hydrogen" },
      { label: "macOS (brew)", command: "brew install --cask hydrogen" }
    ],
    comparisonData: {
      columns: ["Hydrogen", "EZdrummer"],
      rows: [
        { feature: "Direct in-app drumkit library downloader", values: [true, true] },
        { feature: "Multi-layered velocity round-robin playback", values: [true, true] },
        { feature: "JACK and ALSA professional Linux audio support", values: [true, false] },
        { feature: "100% Free and Open Source", values: [true, false] },
        { feature: "No proprietary hardware dongles or activations", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit OS (Linux, Windows, macOS)\n1.5 GHz CPU, 2 GB RAM\nAudio interface or sound card",
    maintainer: "community",
    developer: "Hydrogen Music Team & Alessandro Cominu",
    developerUrl: "https://github.com/hydrogen-music",
    platforms: ["Linux", "Windows", "macOS"]
  },
  {
    id: "qtractor",
    name: "Qtractor",
    alternative: "Cubase, Logic Pro, Pro Tools, Studio One, Reaper",
    category: "Media",
    subcategory: "Music Production",
    license: "GPL-2.0-or-later",
    version: "1.0.0",
    fileSize: "25 MB",
    description: "Audio/MIDI multi-track sequencer DAW engineered specifically for Linux desktop audio workstations.",
    fullDescription: "Qtractor is an open-source Audio/MIDI multi-track sequencer application evolved deliberately around the Linux audio ecosystem. Written in C++ using Qt and the JACK Audio Connection Kit / ALSA sequencer, Qtractor is designed to be nimble, modular, and non-destructive. It supports unlimited audio and MIDI tracks, non-destructive editing, sample-accurate looping, tempo automation, audio time-stretching, and plugin architectures including VST2, VST3, LV2, and LADSPA.",
    features: [
      "Multi-track Audio and MIDI sequencing built natively for Linux audio workstations",
      "Seamless integration with JACK Audio Connection Kit and PipeWire professional audio backends",
      "Multi-format plugin support: VST2, VST3, LV2, LADSPA, and DSSI effect and synth plugins",
      "Non-destructive clip editing: fade-in/out, crossfades, volume gain, and real-time pitch shifting",
      "MIDI piano roll editor with velocity editing, quantization, and automation curve envelopes",
      "Lightweight, clean Qt user interface without bloated background processes or dongles"
    ],
    uses: "Compose, record, sequence, and master multi-track audio and MIDI projects on Linux desktops.",
    tags: ["daw", "audio-sequencer", "midi", "jack-audio", "music-production", "qtractor"],
    logoSource: "https://raw.githubusercontent.com/rncbc/qtractor/master/src/images/qtractor.png",
    screenshotSources: [],
    download: "https://qtractor.org/download/",
    source: "https://github.com/rncbc/qtractor",
    website: "https://qtractor.org/",
    docs: "https://qtractor.org/doc/",
    youtube: "",
    installMethods: [
      { label: "Linux (Flathub)", command: "flatpak install flathub org.rncbc.qtractor" },
      { label: "Ubuntu / Debian", command: "sudo apt install qtractor" },
      { label: "AppImage", command: "https://qtractor.org/download/" }
    ],
    comparisonData: {
      columns: ["Qtractor", "Cubase"],
      rows: [
        { feature: "Native JACK and PipeWire professional Linux audio", values: [true, false] },
        { feature: "LV2 and LADSPA open plugin hosting", values: [true, false] },
        { feature: "Zero dongles, subscriptions, or activation servers", values: [true, false] },
        { feature: "Extremely lightweight resource consumption", values: [true, false] },
        { feature: "100% Free and Open Source (GPL)", values: [true, false] }
      ]
    },
    systemRequirements: "Modern 64-bit Linux distribution\n2 GHz CPU, 2 GB RAM (4 GB recommended for virtual instruments)\nJACK Audio Connection Kit or PipeWire audio server recommended",
    maintainer: "individual",
    developer: "Rui Nuno Capela (rncbc)",
    developerUrl: "https://github.com/rncbc",
    platforms: ["Linux"]
  }
];
