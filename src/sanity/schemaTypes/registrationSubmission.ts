import { defineField, defineType } from "sanity"

const readOnly = true

export const registrationSubmission = defineType({
  name: "registrationSubmission",
  title: "Registration Submission",
  type: "document",
  readOnly,
  fields: [
    defineField({
      name: "formId",
      type: "string",
      readOnly,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      type: "string",
      readOnly,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      readOnly,
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      type: "string",
      readOnly,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profession",
      type: "string",
      readOnly,
    }),
    defineField({
      name: "interests",
      type: "array",
      readOnly,
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experienceLevel",
      type: "string",
      readOnly,
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      },
    }),
    defineField({
      name: "message",
      type: "text",
      readOnly,
    }),
    defineField({
      name: "pagePath",
      type: "string",
      readOnly,
    }),
    defineField({
      name: "source",
      type: "string",
      readOnly,
    }),
    defineField({
      name: "userAgent",
      type: "string",
      readOnly,
    }),
    defineField({
      name: "ip",
      type: "string",
      readOnly,
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      readOnly,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      email: "email",
      phone: "phone",
    },
    prepare({ title, email, phone }) {
      return {
        title: title || "Untitled registration",
        subtitle: email || phone || "",
      }
    },
  },
})
