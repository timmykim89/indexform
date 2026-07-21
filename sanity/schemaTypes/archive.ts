import { defineField, defineType } from "sanity";

export const archive = defineType({
  name: "archive",
  title: "Archive",
  type: "document",
  fields: [
    defineField({
      name: "orderIndex",
      title: "정렬 번호",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "리스트 타이틀",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "카테고리",
      type: "string",
      options: {
        list: [
          { title: "Curation", value: "curation" },
          { title: "Delivery", value: "delivery" },
          { title: "Execution", value: "execution" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "커버 이미지 (3:4)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "brand",
      title: "브랜드명",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "위치",
      type: "string",
    }),
    defineField({
      name: "result",
      title: "결과물",
      type: "string",
    }),
    defineField({
      name: "scope",
      title: "업무 범위",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "verticalImages",
      title: "상세 세로 이미지 (3:4, 2장)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: "horizontalImage",
      title: "상세 가로 이미지 (7:5)",
      type: "image",
      options: { hotspot: true },
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
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
