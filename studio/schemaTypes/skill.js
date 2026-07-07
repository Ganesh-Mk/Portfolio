import { defineType, defineField } from "sanity";

export const SKILL_CATEGORIES = [
  "Frontend",
  "Backend",
  "AI",
  "DevOps",
  "Tools",
  "Programming Languages",
];

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      title: "Icon alt text",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: SKILL_CATEGORIES.map((c) => ({ title: c, value: c })),
        layout: "dropdown",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categoryOrder",
      title: "Category order",
      type: "number",
      description: "Controls the order groups appear on the page",
    }),
    defineField({
      name: "order",
      title: "Order within category",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Category then order",
      name: "byCategory",
      by: [
        { field: "categoryOrder", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
