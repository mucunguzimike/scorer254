import {defineField, defineType} from 'sanity'

export const team = defineType({
  name: 'team',
  title: 'Teams',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Team name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Team URL',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Team logo',
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
      name: 'teamType',
      title: 'Team type',
      type: 'string',
      options: {
        list: [
          {title: 'Club', value: 'club'},
          {title: 'Academy', value: 'academy'},
          {title: 'School Team', value: 'school-team'},
          {title: 'Community Team', value: 'community-team'},
          {title: 'National Team', value: 'national-team'},
        ],
      },
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'Kenya',
    }),
    defineField({
      name: 'region',
      title: 'Region / County',
      type: 'reference',
      to: [{type: 'region'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
  ],
})
