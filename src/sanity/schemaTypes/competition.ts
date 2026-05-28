import {defineField, defineType} from 'sanity'

export const competition = defineType({
  name: 'competition',
  title: 'Competitions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Competition name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Competition URL',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country / Region',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Grassroots', value: 'grassroots'},
          {title: 'County', value: 'county'},
          {title: 'National', value: 'national'},
          {title: 'Regional', value: 'regional'},
          {title: 'Continental', value: 'continental'},
          {title: 'International', value: 'international'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
  ],
})
