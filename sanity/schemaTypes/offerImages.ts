import { defineField, defineType } from "sanity";

export const offerImages = defineType({
  name: "offerImage",
  title: "Offer 이미지",
  type: "document",
  fields: [
    defineField({
      name: "slot",
      title: "Offer 번호",
      type: "number",
      options: {
        list: [
          { title: "1 — Dessert Supply", value: 1 },
          { title: "2 — VIC Delivery", value: 2 },
          { title: "3 — In-Store Experience", value: 3 },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "이미지 (16:9)",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { slot: "slot", media: "image" },
    prepare: ({ slot, media }) => ({
      title: `Offer ${slot ?? "?"}`,
      media,
    }),
  },
});
