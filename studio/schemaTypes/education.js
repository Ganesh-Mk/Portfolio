import { defineType, defineField } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Degree / Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: 'e.g. "2022 - 2025"',
    }),
    defineField({
      name: "description",
      title: "Institution / Description",
      type: "string",
    }),
    defineField({
      name: "percentage",
      title: "Percentage / CGPA",
      type: "string",
    }),
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
    select: { title: "title", subtitle: "period" },
  },
});
