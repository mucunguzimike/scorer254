import {defineField, defineType} from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Author URL',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'externalImageUrl',
      title: 'External image URL',
      type: 'url',
      description: 'Use this instead of uploading when the image is hosted elsewhere and you have permission to use it.',
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image alt text',
      type: 'string',
      description: 'Describe the image for accessibility and SEO.',
    }),
    defineField({
      name: 'imageCredit',
      title: 'Image credit',
      type: 'string',
      description: 'Example: Photo by Name / Wikimedia Commons',
    }),
    defineField({
      name: 'imageLicence',
      title: 'Image licence / permission',
      type: 'string',
      description: 'Example: CC BY-SA 4.0, used with permission, club handout',
    }),
    defineField({
      name: 'imageSourceUrl',
      title: 'Image source page URL',
      type: 'url',
      description: 'The page where the image or licence can be verified.',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
  ],
})
