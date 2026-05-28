import {defineField, defineType} from 'sanity'

export const youtube = defineType({
  name: 'youtube',
  title: 'YouTube video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      description: 'Paste a full YouTube video URL, for example: https://www.youtube.com/watch?v=VIDEO_ID',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'title',
      title: 'Video title',
      type: 'string',
      description: 'Used for accessibility and iframe title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption / context',
      type: 'text',
      rows: 2,
      description: 'Optional context shown below the embedded video.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'YouTube video',
        subtitle,
      }
    },
  },
})
