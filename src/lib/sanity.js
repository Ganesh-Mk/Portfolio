import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-10-01",
  // Public dataset + CDN = fast, cached, no token needed in the browser.
  useCdn: true,
});

const builder = imageUrlBuilder(client);

/** Build a URL for a Sanity image reference. Usage: urlFor(img).width(400).url() */
export const urlFor = (source) => builder.image(source);
