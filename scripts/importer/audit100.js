const fs = require("fs");

const candidates = [
  { num: 89, name: "Anki", cat: "Education / Flashcards" },
  { num: 90, name: "AnkiDroid", cat: "Education / Flashcards" },
  { num: 91, name: "Kiwix", cat: "Education / Offline Knowledge" },
  { num: 92, name: "Kolibri", cat: "Education / Learning" },
  { num: 93, name: "Moodle", cat: "Education / LMS" },
  { num: 94, name: "GCompris", cat: "Education / Learning" },
  { num: 95, name: "Minetest (Luanti)", cat: "Gaming / Sandbox" },
  { num: 96, name: "SuperTuxKart", cat: "Gaming / Racing" },
  { num: 97, name: "0 A.D.", cat: "Gaming / Strategy" },
  { num: 98, name: "OpenTTD", cat: "Gaming / Simulation" },
  { num: 99, name: "Battle for Wesnoth", cat: "Gaming / Strategy" },
  { num: 100, name: "Freeciv", cat: "Gaming / Strategy" },
  { num: 101, name: "The Battle for Wesnoth", cat: "Gaming / Strategy" },
  { num: 102, name: "Xonotic", cat: "Gaming / FPS" },
  { num: 103, name: "OpenRA", cat: "Gaming / Strategy" },
  { num: 104, name: "Minetest Game", cat: "Gaming / Sandbox" },
  { num: 105, name: "SuperTux", cat: "Gaming / Platformer" },
  { num: 106, name: "Pingus", cat: "Gaming / Puzzle" },
  { num: 107, name: "Hedgewars", cat: "Gaming / Strategy" },
  { num: 108, name: "Endless Sky", cat: "Gaming / Simulation" },
  { num: 109, name: "OpenRCT2", cat: "Gaming / Simulation" },
  { num: 110, name: "Dungeon Crawl Stone Soup", cat: "Gaming / RPG" },
  { num: 111, name: "Cataclysm: Dark Days Ahead", cat: "Gaming / Survival" },
  { num: 112, name: "Shattered Pixel Dungeon", cat: "Gaming / RPG" },
  { num: 113, name: "Mindustry", cat: "Gaming / Strategy" },
  { num: 114, name: "OpenMW", cat: "Gaming / Game Engine" },
  { num: 115, name: "Luanti", cat: "Gaming / Game Engine" },
  { num: 116, name: "PCSX-Redux", cat: "Gaming / Emulator" },
  { num: 117, name: "Dolphin Emulator", cat: "Gaming / Emulator" },
  { num: 118, name: "DuckStation", cat: "Gaming / Emulator" },
  { num: 119, name: "ScummVM", cat: "Gaming / Emulator" },
  { num: 120, name: "DOSBox Staging", cat: "Gaming / Emulator" },
  { num: 121, name: "RetroArch", cat: "Gaming / Emulator" },
  { num: 122, name: "Azahar", cat: "Gaming / Emulator" },
  { num: 123, name: "RPCS3", cat: "Gaming / Emulator" },
  { num: 124, name: "PPSSPP", cat: "Gaming / Emulator" },
  { num: 125, name: "MAME", cat: "Gaming / Emulator" },
  { num: 126, name: "GDevelop", cat: "Development / Game Engine" },
  { num: 127, name: "Defold", cat: "Development / Game Engine" },
  { num: 128, name: "Bevy", cat: "Development / Game Engine" },
  { num: 129, name: "LÖVE", cat: "Development / Game Engine" },
  { num: 130, name: "Ren'Py", cat: "Development / Game Engine" },
  { num: 131, name: "OpenToonz", cat: "Graphics / Animation" },
  { num: 132, name: "Synfig Studio", cat: "Graphics / Animation" },
  { num: 133, name: "Pencil2D", cat: "Graphics / Animation" },
  { num: 134, name: "MyPaint", cat: "Graphics / Drawing" },
  { num: 135, name: "Kdenlive", cat: "Media / Video Editing" },
  { num: 136, name: "Shotcut", cat: "Media / Video Editing" },
  { num: 137, name: "Olive", cat: "Media / Video Editing" },
  { num: 138, name: "Pitivi", cat: "Media / Video Editing" },
  { num: 139, name: "Flowblade", cat: "Media / Video Editing" },
  { num: 140, name: "Avidemux", cat: "Media / Video Editing" },
  { num: 141, name: "Tenacity", cat: "Media / Audio Editing" },
  { num: 142, name: "Audacity", cat: "Media / Audio Editing" },
  { num: 143, name: "MuseScore", cat: "Media / Music Notation" },
  { num: 144, name: "Hydrogen", cat: "Media / Music Production" },
  { num: 145, name: "Qtractor", cat: "Media / Audio Production" },
  { num: 146, name: "Rosegarden", cat: "Media / Music Production" },
  { num: 147, name: "Zrythm", cat: "Media / Music Production" },
  { num: 148, name: "Mixxx", cat: "Media / DJ Software" },
  { num: 149, name: "LMMS", cat: "Media / Music Production" },
  { num: 150, name: "Ardour", cat: "Media / Audio Production" },
  { num: 151, name: "Scribus", cat: "Productivity / Desktop Publishing" },
  { num: 152, name: "Calligra Suite", cat: "Productivity / Office" },
  { num: 153, name: "AbiWord", cat: "Productivity / Word Processor" },
  { num: 154, name: "Gnumeric", cat: "Productivity / Spreadsheet" },
  { num: 155, name: "ONLYOFFICE Desktop Editors", cat: "Productivity / Office" },
  { num: 156, name: "PDF Arranger", cat: "Productivity / PDF" },
  { num: 157, name: "PDFsam Basic", cat: "Productivity / PDF" },
  { num: 158, name: "Xournal++", cat: "Productivity / Notes" },
  { num: 159, name: "Zim Wiki", cat: "Productivity / Notes" },
  { num: 160, name: "Cherrytree", cat: "Productivity / Notes" },
  { num: 161, name: "Freeplane", cat: "Productivity / Mind Mapping" },
  { num: 162, name: "FreeMind", cat: "Productivity / Mind Mapping" },
  { num: 163, name: "Jitsi Meet", cat: "Communication / Video Conferencing" },
  { num: 164, name: "Mumble", cat: "Communication / Voice Chat" },
  { num: 165, name: "Jami", cat: "Communication / Messaging" },
  { num: 166, name: "qTox", cat: "Communication / Messaging" },
  { num: 167, name: "GNU IceCat", cat: "Browser / Privacy" },
  { num: 168, name: "GNOME Web", cat: "Browser / General" },
  { num: 169, name: "Falkon", cat: "Browser / General" },
  { num: 170, name: "Waterfox", cat: "Browser / General" },
  { num: 171, name: "uBlock Origin", cat: "Security / Ad Blocker" },
  { num: 172, name: "Privacy Badger", cat: "Security / Privacy" },
  { num: 173, name: "NoScript", cat: "Security / Browser Protection" },
  { num: 174, name: "KeePass", cat: "Security / Password Manager" },
  { num: 175, name: "GNU Wget", cat: "Utility / Download Manager" },
  { num: 176, name: "GNU Emacs", cat: "Development / Text Editor" },
  { num: 177, name: "Vim", cat: "Development / Text Editor" },
  { num: 178, name: "Neovim", cat: "Development / Text Editor" },
  { num: 179, name: "Geany", cat: "Development / IDE" },
  { num: 180, name: "Code::Blocks", cat: "Development / IDE" },
  { num: 181, name: "Eclipse IDE", cat: "Development / IDE" },
  { num: 182, name: "Apache NetBeans", cat: "Development / IDE" },
  { num: 183, name: "GNU Octave", cat: "Development / Scientific Computing" },
  { num: 184, name: "RStudio Desktop (Open Source Edition)", cat: "Development / Data Science" },
  { num: 185, name: "JupyterLab", cat: "Development / Data Science" },
  { num: 186, name: "Orange Data Mining", cat: "Development / Data Science" },
  { num: 187, name: "OpenRefine", cat: "Development / Data Cleaning" },
  { num: 188, name: "VeraCrypt", cat: "Security / Encryption" }
];

console.log(`Total candidate items in prompt: ${candidates.length}`);

// Existing Firestore apps
const existingFirestoreApps = [
  "adaway", "aegis-authenticator", "amaze-file-manager", "aniyomi", "antennapod",
  "audacity", "balenaetcher", "bangumi", "bitwarden", "blender", "blockads",
  "blokada", "briar", "calibre", "cryptomator", "darktable", "dnsnet", "element",
  "etchdroid", "f-droid", "f-droid-basic", "fairemail", "finzo", "fossify-gallery",
  "frappe-books", "freecad", "gimp", "gnupg", "godot-engine", "handbrake",
  "home-assistant", "immich", "inkscape", "jellyfin", "joplin", "k-9-mail",
  "kcalc", "kde-connect", "kdenlive", "keepassxc", "kicad", "killerpdf", "kodi",
  "krita", "libreoffice", "librepods", "localsend", "logseq", "luviosa",
  "mastodon", "material-files", "mozilla-firefox", "mpv", "mull", "newpipe",
  "nextcloud", "obs-studio", "obtainium", "okular", "open-camera", "openvpn",
  "organic-maps", "osmand", "pcsx2", "permission-scanner", "personaldnsfilter",
  "portmaster", "proton-mail-bridge", "pwabuilder", "qgis", "rawtherapee",
  "rethinkdns", "retroarch", "retrodeck", "rufus", "shotcut", "signal",
  "simplex-chat", "syncthing", "termux", "thunderbird", "trackercontrol",
  "veracrypt", "vlc-media-player", "vscodium", "wireguard", "xournal", "zulip"
];

function slugify(name) {
  return name.toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

console.log("\nChecking matches against Firestore...");
candidates.forEach(c => {
  const slug = slugify(c.name);
  if (existingFirestoreApps.includes(slug)) {
    console.log(`[EXISTING IN FIRESTORE] #${c.num}: ${c.name} -> ID: ${slug}`);
  }
  // Check special cases
  if (c.name === "Xournal++" && existingFirestoreApps.includes("xournal")) {
    console.log(`[EXISTING IN FIRESTORE] #${c.num}: ${c.name} -> matches existing id "xournal"`);
  }
});

module.exports = { candidates, existingFirestoreApps };
