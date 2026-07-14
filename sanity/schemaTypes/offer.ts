import { defineField, defineType } from "sanity";

export const offer = defineType({
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    defineField({
      name: "orderIndex",
      title: "정렬 번호",
      description: "카드 노출 순서 및 우측 상단 인덱스 번호(01, 02, 03)",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "카테고리 라벨",
      description: "예: Offer 1 / Curation",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "타이틀",
      description: "예: DESSERT SUPPLY",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "이미지 (16:9)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "subtitle",
      title: "서브타이틀",
      type: "string",
    }),
    defineField({
      name: "points",
      title: "포인트",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  orderings: [
    {
      title: "정렬 번호",
      name: "orderIndexAsc",
      by: [{ field: "orderIndex", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
