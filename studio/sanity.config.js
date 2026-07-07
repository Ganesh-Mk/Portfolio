import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

// projectId is public and safe to commit. It is filled from the env you provide,
// with a hardcoded fallback so `sanity dev` / `sanity deploy` work without env setup.
const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || "vbt9hjqu";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Ganesh Portfolio",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
