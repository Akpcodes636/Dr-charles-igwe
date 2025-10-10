import { defineType, defineField } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Where the event took place (e.g. Toronto, Canada).",
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      options: {
        dateFormat: "MMMM DD, YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      description: "Main event image or banner.",
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Photos",
      type: "array",
      of: [{ type: "image" }],
      description: "Upload up to 4 photos from the event.",
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "videos",
      title: "Event Videos",
      type: "array",
      of: [
        defineField({
          name: "video",
          title: "Video",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Video Title",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "Video URL",
              type: "url",
              description: "Link to the video (e.g. YouTube or Vimeo).",
            }),
          ],
        }),
      ],
      description: "Add up to 2 videos for this event.",
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: "description",
      title: "Event Description",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Write details about the event — highlights, speakers, outcomes, etc.",
    }),
    defineField({
      name: "featured",
      title: "Featured Event",
      type: "boolean",
      description:
        "Mark this event as featured to display it prominently on the events page.",
    }),
  ],
});
