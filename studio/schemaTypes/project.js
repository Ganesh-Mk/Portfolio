import { defineType, defineField } from "sanity";

export const PROJECT_CATEGORIES = [
  "Web Development",
  "App Development",
  "Console Applications",
];

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: PROJECT_CATEGORIES.map((c) => ({ title: c, value: c })),
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "images",
      title: "Images (carousel)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 10,
    }),
    defineField({ name: "download", title: "Download link", type: "url" }),
    defineField({ name: "live", title: "Live link", type: "url" }),
    defineField({ name: "repo", title: "Repo link", type: "url" }),
    defineField({ name: "video", title: "Video link", type: "url" }),
    defineField({ name: "alt", title: "Image alt text", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "images.0" },
  },
});
