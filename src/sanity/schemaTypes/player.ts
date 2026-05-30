import {defineField, defineType} from 'sanity'

export const player = defineType({
  name: 'player',
  title: 'Players',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Player name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Player URL',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Player photo',
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
      name: 'currentTeam',
      title: 'Current team',
      type: 'reference',
      to: [{type: 'team'}],
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      options: {
        list: [
          {title: 'Goalkeeper', value: 'goalkeeper'},
          {title: 'Defender', value: 'defender'},
          {title: 'Midfielder', value: 'midfielder'},
          {title: 'Forward', value: 'forward'},
          {title: 'Coach', value: 'coach'},
        ],
      },
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
      initialValue: 'Kenyan',
    }),
    defineField({
      name: 'region',
      title: 'Region / County',
      type: 'reference',
      to: [{type: 'region'}],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
  ],
})
