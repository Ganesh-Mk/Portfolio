/**
 * One-shot seeder: pushes all existing portfolio data + images into Sanity.
 *
 * It reads your CURRENT source of truth directly:
 *   - src/Images.jsx        -> maps every image key to its file on disk
 *   - src/data/*.jsx        -> services, skills, projects, achievements, education, experience
 *   - hardcoded siteSettings (name/about/socials live in JSX, not a data file)
 *
 * Idempotent: uses deterministic _id's (createOrReplace) and reuses already-uploaded
 * image assets (matched by label), so you can run it as many times as you like.
 *
 * Run:  npm run seed
 * Needs a .env at the project root with:
 *   VITE_SANITY_PROJECT_ID=xxxxxxxx
 *   VITE_SANITY_DATASET=production
 *   SANITY_API_TOKEN=sk...            (Editor / write token — never shipped to the browser)
 */
import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/* ------------------------------------------------------------------ env ---- */
function loadEnv() {
  const p = path.join(root, ".env");
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const val = m[2].replace(/^["']|["']$/g, "");
    if (!(m[1] in process.env)) process.env[m[1]] = val;
  }
}
loadEnv();

const projectId =
  process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error(
    "\n❌ Missing config. Add these to .env at the project root:\n" +
      "   VITE_SANITY_PROJECT_ID=...\n" +
      "   VITE_SANITY_DATASET=production\n" +
      "   SANITY_API_TOKEN=sk...(write token)\n"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

/* -------------------------------------------------------------- helpers ---- */

// key -> absolute file path, parsed straight from src/Images.jsx
function buildImageMap() {
  const src = fs.readFileSync(path.join(root, "src", "Images.jsx"), "utf8");
  const map = {};
  for (const m of src.matchAll(
    /import\s+(\w+)\s+from\s+["']\.\/([^"']+)["']/g
  )) {
    map[m[1]] = path.join(root, "src", m[2]);
  }
  return map;
}
const imageMap = buildImageMap();

// Load a data file as plain JS: strip the images import and turn every
// `images.foo` reference into the string "foo". The data files contain only
// object/array literals (no JSX), so they evaluate cleanly as an ES module.
async function loadData(rel) {
  let s = fs.readFileSync(path.join(root, "src", "data", rel), "utf8");
  s = s.replace(/import\s+\{\s*images\s*\}\s+from\s+["'][^"']+["'];?/g, "");
  s = s.replace(/images\.(\w+)/g, '"$1"');
  const url =
    "data:text/javascript;base64," + Buffer.from(s, "utf8").toString("base64");
  return import(url);
}

const assetCache = {};
async function uploadImage(key) {
  if (!key) return null;
  if (assetCache[key]) return assetCache[key];
  // reuse an already-uploaded asset (matched by label) so re-runs don't duplicate
  const existing = await client.fetch(
    '*[_type == "sanity.imageAsset" && label == $k][0]._id',
    { k: key }
  );
  if (existing) {
    assetCache[key] = existing;
    return existing;
  }
  const file = imageMap[key];
  if (!file || !fs.existsSync(file)) {
    console.warn("   ! no image file for key:", key);
    return null;
  }
  const asset = await client.assets.upload(
    "image",
    fs.createReadStream(file),
    { filename: path.basename(file), label: key }
  );
  assetCache[key] = asset._id;
  return asset._id;
}

const imgField = (id) =>
  id ? { _type: "image", asset: { _type: "reference", _ref: id } } : undefined;

async function imgArray(keys) {
  const out = [];
  const list = keys || [];
  for (let i = 0; i < list.length; i++) {
    const id = await uploadImage(list[i]);
    if (id)
      out.push({
        _type: "image",
        _key: `img-${i}`,
        asset: { _type: "reference", _ref: id },
      });
  }
  return out;
}

const slug = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

/* ------------------------------------------------------------------ run ---- */
async function run() {
  console.log(`\n🌱 Seeding ${projectId} / ${dataset}\n`);

  /* 1. Site settings (single doc) */
  const avatarId = await uploadImage("NewProfile");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: "Ganesh Koparde",
    role: "Software Engineer",
    avatar: imgField(avatarId),
    aboutText:
      "Software Development Engineer with 1 year of experience shipping production full-stack AI products — autonomous agents, voice AI, and multi-tenant SaaS platforms. Multiple-time hackathon winner and student mentor with hands-on experience in system design, client-facing delivery, and taking products from idea to production rapidly.",
    resumeUrl:
      "https://drive.google.com/file/d/1t0Pfrh1mbTuymx7k-oMwYujoLI12D31u/view?usp=sharing",
    email: "ganeshmk247@gmail.com",
    phone: "+91 9380795986",
    birthday: "Dec 17, 2004",
    location: "Hubli, Karnataka, India",
    socials: {
      instagram: "https://www.instagram.com/ganesh_mk_247/",
      twitter: "https://x.com/Ganesh_Koparde_",
      linkedin: "https://www.linkedin.com/in/ganesh-koparde/",
      github: "https://github.com/Ganesh-Mk",
      whatsapp: "https://wa.me/9380795986",
    },
  });
  console.log("✓ siteSettings");

  /* 2. Services */
  const { servicesData } = await loadData("serviceItems.jsx");
  for (let i = 0; i < servicesData.length; i++) {
    const s = servicesData[i];
    const iconId = await uploadImage(s.icon);
    await client.createOrReplace({
      _id: `service-${slug(s.title)}`,
      _type: "service",
      title: s.title,
      description: s.description,
      alt: s.alt,
      icon: imgField(iconId),
      order: i,
    });
  }
  console.log(`✓ ${servicesData.length} services`);

  /* 3. Skills */
  const sk = await loadData("skills.jsx");
  const groups = [
    ["Frontend", sk.frontendSkillsData],
    ["Backend", sk.backendSkillsData],
    ["AI", sk.aiSkillsData],
    ["DevOps", sk.devopsSkillsData],
    ["Tools", sk.toolsSkillsData],
    ["Programming Languages", sk.programmingLangSkillsData],
  ];
  let skillCount = 0;
  for (let ci = 0; ci < groups.length; ci++) {
    const [category, arr] = groups[ci];
    for (let i = 0; i < (arr || []).length; i++) {
      const skill = arr[i];
      const imgId = await uploadImage(skill.image);
      await client.createOrReplace({
        _id: `skill-${slug(category)}-${slug(skill.name)}`,
        _type: "skill",
        name: skill.name,
        alt: skill.alt,
        category,
        categoryOrder: ci,
        order: i,
        image: imgField(imgId),
      });
      skillCount++;
    }
  }
  console.log(`✓ ${skillCount} skills`);

  /* 4. Projects */
  const { projects } = await loadData("projectsData.jsx");
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const images = await imgArray(p.images);
    await client.createOrReplace({
      _id: `project-${slug(p.title)}`,
      _type: "project",
      title: p.title,
      category: p.category,
      description: p.desc,
      alt: p.alt || "Project image",
      images,
      download: p.download || undefined,
      live: p.live || undefined,
      repo: p.repo || undefined,
      video: p.video || undefined,
      order: i,
    });
  }
  console.log(`✓ ${projects.length} projects`);

  /* 5. Achievements */
  const { achievementData } = await loadData("achievementsData.jsx");
  for (let i = 0; i < achievementData.length; i++) {
    const a = achievementData[i];
    const images = await imgArray(a.images);
    await client.createOrReplace({
      _id: `achievement-${i}-${slug(a.title)}`,
      _type: "achievement",
      title: a.title,
      date: a.date,
      description: a.desc,
      images,
      order: i,
    });
  }
  console.log(`✓ ${achievementData.length} achievements`);

  /* 6. Education */
  const { educationData } = await loadData("education.jsx");
  for (let i = 0; i < educationData.length; i++) {
    const e = educationData[i];
    await client.createOrReplace({
      _id: `education-${e.id ?? i}`,
      _type: "education",
      title: e.title,
      period: e.period,
      description: e.description,
      percentage: e.percentage,
      order: i,
    });
  }
  console.log(`✓ ${educationData.length} education`);

  /* 7. Experience */
  const { experienceData } = await loadData("experience.jsx");
  for (let i = 0; i < experienceData.length; i++) {
    const x = experienceData[i];
    await client.createOrReplace({
      _id: `experience-${x.id ?? i}`,
      _type: "experience",
      title: x.title,
      period: x.period,
      workMode: x.workMode,
      location: x.location,
      description: x.description,
      order: i,
    });
  }
  console.log(`✓ ${experienceData.length} experience`);

  console.log("\n✅ Done. Open your Studio to see and edit everything.\n");
}

run().catch((err) => {
  console.error("\n❌ Seed failed:\n", err);
  process.exit(1);
});
