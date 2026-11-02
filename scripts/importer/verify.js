const https = require("https");
const { getAccessToken, PROJECT_ID } = require("./uploader");

const TARGET_APPS = [
  "newpipe", "termux", "kde-connect", "syncthing", "organic-maps",
  "aegis-authenticator", "bitwarden", "open-camera", "antennapod", "osmand",
  "mull", "fossify-gallery", "material-files", "amaze-file-manager", "obtainium",
  "f-droid-basic", "k-9-mail", "fairemail", "mastodon", "element",
  "briar", "simplex-chat", "wireguard", "openvpn", "obs-studio",
  "krita", "godot-engine", "freecad", "kicad", "qgis",
  "darktable", "rawtherapee", "handbrake", "kdenlive", "mpv",
  "kodi", "calibre", "okular", "veracrypt", "gnupg",
  "jellyfin", "immich", "nextcloud", "home-assistant", "proton-mail-bridge",
  "retroarch", "pcsx2", "retrodeck", "vscodium", "zulip"
];

function fetchDoc(path, token) {
  return new Promise((resolve, reject) => {
    const req = https.get({
      hostname: "firestore.googleapis.com",
      path: path,
      headers: { "Authorization": "Bearer " + token }
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on("error", reject);
  });
}

async function run() {
  const token = getAccessToken();
  console.log("Listing documents from Firestore apps collection...");

  let pageToken = "";
  let totalDocs = 0;
  const allDocIds = new Set();

  do {
    const path = `/v1/projects/${PROJECT_ID}/databases/(default)/documents/apps?pageSize=100${pageToken ? "&pageToken=" + pageToken : ""}`;
    const res = await fetchDoc(path, token);
    if (res.status !== 200) {
      throw new Error(`Failed to list: ${JSON.stringify(res.body)}`);
    }
    const docs = res.body.documents || [];
    totalDocs += docs.length;
    for (const d of docs) {
      const parts = d.name.split("/");
      allDocIds.add(parts[parts.length - 1]);
    }
    pageToken = res.body.nextPageToken || "";
  } while (pageToken);

  console.log(`\n==================================================`);
  console.log(`Total apps found in Firestore: ${totalDocs}`);
  console.log(`==================================================\n`);

  const missing = [];
  const found = [];
  for (const id of TARGET_APPS) {
    if (allDocIds.has(id)) {
      found.push(id);
    } else {
      missing.push(id);
    }
  }

  console.log(`Verified Target Apps Present: ${found.length} / ${TARGET_APPS.length}`);
  if (missing.length > 0) {
    console.error(`\n[ERROR] Missing Apps:`, missing);
  } else {
    console.log(`\n[SUCCESS] All 50 requested applications are confirmed present in Firestore!`);
  }

  console.log(`\n--- Sampling 5 Applications Across Batches ---`);
  const samples = ["newpipe", "material-files", "obs-studio", "handbrake", "retrodeck"];
  for (const sId of samples) {
    const res = await fetchDoc(`/v1/projects/${PROJECT_ID}/databases/(default)/documents/apps/${sId}`, token);
    const f = res.body.fields || {};
    console.log(`\nApp ID: ${sId}`);
    console.log(`  Name: ${f.name?.stringValue}`);
    console.log(`  Category: ${f.category?.stringValue} / ${f.subcategory?.stringValue}`);
    console.log(`  License: ${f.license?.stringValue}`);
    console.log(`  Version: ${f.version?.stringValue}`);
    console.log(`  Logo URL: ${f.logo?.stringValue}`);
    console.log(`  Platforms: ${f.platforms?.arrayValue?.values?.map(v => v.stringValue).join(", ")}`);
    console.log(`  Screenshots Count: ${f.screenshots?.arrayValue?.values?.length || 0}`);
    console.log(`  Install Methods: ${f.installMethods?.arrayValue?.values?.length || 0}`);
    console.log(`  Alternative To: ${f.alternative?.stringValue}`);
  }
}

run().catch(console.error);
