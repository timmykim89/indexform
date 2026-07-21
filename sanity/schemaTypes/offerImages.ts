import { defineField, defineType } from "sanity";

export const offerImages = defineType({
  name: "offerImages",
  title: "Offer 이미지",
  type: "document",
  fields: [
    defineField({
      name: "image1",
      title: "01 Dessert Supply 이미지 (16:9)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image2",
      title: "02 VIC Delivery 이미지 (16:9)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image3",
      title: "03 In-Store Experience 이미지 (16:9)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Offer 이미지 (3장)" }),
  },
});
