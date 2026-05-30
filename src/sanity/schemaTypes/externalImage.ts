import {defineField, defineType} from 'sanity'

export const externalImage = defineType({
  name: 'externalImage',
  title: 'External image URL',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Image URL',
      type: 'url',
      description: 'Paste the direct image URL. Use images you have permission to use.',
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'credit',
      title: 'Image credit',
      type: 'string',
    }),
    defineField({
      name: 'licence',
      title: 'Licence / permission',
      type: 'string',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source page URL',
      type: 'url',
    }),
  ],
})
