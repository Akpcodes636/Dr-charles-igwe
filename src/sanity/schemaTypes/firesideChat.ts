import { defineType, defineField } from "sanity";

export const firesideChat = defineType({
  name: "firesideChat",
  title: "Fireside Chat",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      description:
        "Title of the fireside chat event (e.g. The Growth Mindset Sessions)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "speaker",
      title: "Speaker",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "position",
          title: "Position",
          type: "string",
          description: "e.g. CEO, Founder, Author",
        }),
      ],
    }),
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload an image or flyer for the event",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
      description: "Date and time of the fireside chat",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
      description:
        "External link to Eventbrite or another registration platform",
    }),
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "speaker.name",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? `Speaker: ${subtitle}` : "No speaker added",
        media,
      };
    },
  },
});
