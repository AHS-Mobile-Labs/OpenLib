const https = require("https");
const http = require("http");
const fs = require("fs");
const { execSync } = require("child_process");

const PROJECT_ID = "openlib-f7bf1";
const STORAGE_BUCKET = "openlib-f7bf1.firebasestorage.app";
const ADMIN_UID = "p7ku3FYRMIbKjjgF0B9v12V609p1";

function getAccessToken() {
  const cfg = JSON.parse(fs.readFileSync("/home/Linox/.config/configstore/firebase-tools.json", "utf8"));
  if (cfg.tokens.expires_at - Date.now() < 300000) {
    execSync("firebase projects:list --non-interactive", { stdio: "ignore" });
    const newCfg = JSON.parse(fs.readFileSync("/home/Linox/.config/configstore/firebase-tools.json", "utf8"));
    return newCfg.tokens.access_token;
  }
  return cfg.tokens.access_token;
}

function fetchUrlBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, {
      headers: {
        "User-Agent": "OpenLib/1.0 (https://openlib.online; contact@openlib.online) Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith("http")) loc = new URL(loc, url).href;
        return fetchUrlBuffer(loc).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => {
        let ct = res.headers["content-type"] || "image/png";
        ct = ct.split(";")[0].trim();
        resolve({ buffer: Buffer.concat(chunks), contentType: ct });
      });
    });
    req.on("error", reject);
    req.setTimeout(20000, () => {
      req.destroy(new Error(`Timeout fetching ${url}`));
    });
  });
}

function uploadToStorage(buffer, storagePath, contentType) {
  return new Promise((resolve, reject) => {
    const token = getAccessToken();
    const req = https.request({
      hostname: "firebasestorage.googleapis.com",
      path: `/v0/b/${STORAGE_BUCKET}/o?name=${encodeURIComponent(storagePath)}`,
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": contentType,
        "Content-Length": buffer.length
      }
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          if (json.error) return reject(new Error(json.error.message));
          const url = `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encodeURIComponent(storagePath)}?alt=media&token=${json.downloadTokens}`;
          resolve(url);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on("error", reject);
    req.write(buffer);
    req.end();
  });
}

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === "boolean") return { booleanValue: val };
  if (typeof val === "number") {
    if (Number.isInteger(val)) return { integerValue: String(val) };
    return { doubleValue: val };
  }
  if (typeof val === "string") return { stringValue: val };
  if (Array.isArray(val)) {
    return {
      arrayValue: val.length ? { values: val.map(toFirestoreValue) } : {}
    };
  }
  if (typeof val === "object") {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      if (v !== undefined) {
        fields[k] = toFirestoreValue(v);
      }
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function toFirestoreFields(obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) {
      fields[k] = toFirestoreValue(v);
    }
  }
  return fields;
}

function checkAppExists(id) {
  return new Promise((resolve, reject) => {
    const token = getAccessToken();
    https.get({
      hostname: "firestore.googleapis.com",
      path: `/v1/projects/${PROJECT_ID}/databases/(default)/documents/apps/${encodeURIComponent(id)}`,
      headers: { "Authorization": "Bearer " + token }
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode === 200) return resolve(true);
        if (res.statusCode === 404) return resolve(false);
        resolve(false);
      });
    }).on("error", reject);
  });
}

function saveAppToFirestore(id, appData) {
  return new Promise((resolve, reject) => {
    const token = getAccessToken();
    const fields = toFirestoreFields(appData);
    const postData = JSON.stringify({ fields });

    const req = https.request({
      hostname: "firestore.googleapis.com",
      path: `/v1/projects/${PROJECT_ID}/databases/(default)/documents/apps/${encodeURIComponent(id)}`,
      method: "PATCH",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData)
      }
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Firestore write error (${res.statusCode}): ${data}`));
        }
      });
    });
    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

function saveAppVersionToFirestore(appId, appData) {
  return new Promise((resolve, reject) => {
    const token = getAccessToken();
    const now = new Date().toISOString();
    const versionDoc = {
      appId,
      versionNumber: 1,
      type: "initial",
      changes: {},
      commitMessage: "Initial app listing by OpenLib Team",
      summary: "Initial app listing",
      authorUid: ADMIN_UID,
      authorName: "OpenLib Team",
      authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocI8XtozJfAtHegOIA2f9TMT8VXfSJz7MfyFrDElrNeMbW8grrkn=s96-c",
      editRequestId: null,
      fullSnapshot: appData,
      createdAt: now
    };
    const fields = toFirestoreFields(versionDoc);
    const postData = JSON.stringify({ fields });

    const req = https.request({
      hostname: "firestore.googleapis.com",
      path: `/v1/projects/${PROJECT_ID}/databases/(default)/documents/app_versions`,
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData)
      }
    }, res => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Firestore app_version error (${res.statusCode}): ${data}`));
        }
      });
    });
    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

module.exports = {
  ADMIN_UID,
  PROJECT_ID,
  STORAGE_BUCKET,
  getAccessToken,
  fetchUrlBuffer,
  uploadToStorage,
  toFirestoreFields,
  checkAppExists,
  saveAppToFirestore,
  saveAppVersionToFirestore
};
