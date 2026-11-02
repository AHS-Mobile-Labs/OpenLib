const {
  ADMIN_UID,
  fetchUrlBuffer,
  uploadToStorage,
  checkAppExists,
  saveAppToFirestore,
  saveAppVersionToFirestore
} = require("./uploader");

async function processApp(app) {
  console.log(`\n========================================`);
  console.log(`Processing: ${app.name} (${app.id})`);
  console.log(`========================================`);

  // 1. Check duplicate
  const exists = await checkAppExists(app.id);
  if (exists) {
    console.log(`[SKIP] App '${app.id}' already exists in Firestore!`);
    return { status: "skipped", reason: "duplicate", id: app.id, name: app.name };
  }

  // 2. Upload Logo
  let uploadedLogo = "";
  if (app.logoSource) {
    try {
      console.log(`Downloading logo: ${app.logoSource}`);
      const { buffer, contentType } = await fetchUrlBuffer(app.logoSource);
      const ext = app.logoSource.endsWith(".svg") ? "svg" : (app.logoSource.endsWith(".ico") ? "ico" : "png");
      const cType = ext === "svg" ? "image/svg+xml" : (ext === "ico" ? "image/x-icon" : (contentType.startsWith("image/") ? contentType : "image/png"));
      const storagePath = `logos/${app.id}_${Date.now()}.${ext}`;
      uploadedLogo = await uploadToStorage(buffer, storagePath, cType);
      console.log(`[OK] Logo uploaded: ${uploadedLogo}`);
    } catch (err) {
      console.error(`[WARN] Logo upload failed: ${err.message}`);
      uploadedLogo = app.logoSource; // fallback if direct upload failed
    }
  }

  // 3. Upload Screenshots
  const uploadedScreenshots = [];
  if (Array.isArray(app.screenshotSources)) {
    for (let i = 0; i < app.screenshotSources.length && i < 8; i++) {
      const sUrl = app.screenshotSources[i];
      try {
        console.log(`Downloading screenshot ${i + 1}: ${sUrl}`);
        const { buffer, contentType } = await fetchUrlBuffer(sUrl);
        const ext = sUrl.endsWith(".jpg") || sUrl.endsWith(".jpeg") ? "jpg" : (sUrl.endsWith(".webp") ? "webp" : "png");
        const cType = ext === "jpg" ? "image/jpeg" : (ext === "webp" ? "image/webp" : "image/png");
        const storagePath = `screenshots/${app.id}_${Date.now()}_${i}.${ext}`;
        const uploadedSUrl = await uploadToStorage(buffer, storagePath, cType);
        console.log(`[OK] Screenshot ${i + 1} uploaded: ${uploadedSUrl}`);
        uploadedScreenshots.push(uploadedSUrl);
      } catch (err) {
        console.error(`[WARN] Screenshot ${i + 1} failed: ${err.message}`);
      }
    }
  }

  // 4. Construct Firestore Document
  const now = new Date().toISOString();
  const appDoc = {
    id: app.id,
    name: app.name,
    alternative: app.alternative,
    category: app.category,
    subcategory: app.subcategory || "General",
    logo: uploadedLogo,
    license: app.license,
    version: app.version,
    fileSize: app.fileSize || "",
    description: app.description,
    fullDescription: app.fullDescription,
    features: app.features || [],
    uses: app.uses,
    tags: (app.tags || []).map(t => String(t).toLowerCase().trim()),
    screenshots: uploadedScreenshots,
    download: app.download,
    source: app.source,
    website: app.website,
    docs: app.docs || "",
    youtube: app.youtube || "",
    installMethods: app.installMethods || [],
    comparisonData: app.comparisonData || null,
    systemRequirements: app.systemRequirements || "",
    maintainer: app.maintainer || "organization",
    developer: app.developer || app.name,
    developerUrl: app.developerUrl || app.source,
    platforms: app.platforms || ["Linux"],
    likes: 0,
    dislikes: 0,
    views: 0,
    downloads: 0,
    opens: 0,
    addedBy: {
      type: "openlib-team",
      name: "OpenLib Team",
      uid: ADMIN_UID
    },
    ownerType: "openlib-team",
    ownerId: ADMIN_UID,
    moderationStatus: "active",
    openSourceVerified: true,
    createdAt: now,
    updatedAt: now
  };

  // 5. Save App Document
  console.log(`Saving app to Firestore: apps/${app.id}...`);
  await saveAppToFirestore(app.id, appDoc);
  console.log(`[OK] apps/${app.id} saved successfully!`);

  // 6. Save App Version Document
  console.log(`Saving version history for: ${app.id}...`);
  await saveAppVersionToFirestore(app.id, appDoc);
  console.log(`[OK] app_versions saved successfully!`);

  return { status: "created", id: app.id, name: app.name, screenshots: uploadedScreenshots.length };
}

async function runBatch(batchFile) {
  const apps = require(batchFile);
  console.log(`Loaded ${apps.length} apps from ${batchFile}`);
  const results = [];

  for (const app of apps) {
    try {
      const res = await processApp(app);
      results.push(res);
    } catch (err) {
      console.error(`[ERROR] Failed to process ${app.id}:`, err);
      results.push({ status: "failed", id: app.id, name: app.name, error: err.message });
    }
  }

  console.log("\n================ SUMMARY ================");
  console.log("Total processed:", results.length);
  console.log("Created:", results.filter(r => r.status === "created").length);
  console.log("Skipped:", results.filter(r => r.status === "skipped").length);
  console.log("Failed:", results.filter(r => r.status === "failed").length);
  return results;
}

if (require.main === module) {
  const batchArg = process.argv[2] || "./data-batch1.js";
  runBatch(batchArg)
    .then(() => process.exit(0))
    .catch(err => {
      console.error("Fatal error:", err);
      process.exit(1);
    });
}

module.exports = { processApp, runBatch };
