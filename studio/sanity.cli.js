import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || "vbt9hjqu";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  // Hosted Studio URL becomes https://<studioHost>.sanity.studio
  studioHost: "ganesh-koparde",
});
