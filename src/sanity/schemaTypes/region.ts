import {defineField, defineType} from 'sanity'

export const region = defineType({
  name: 'region',
  title: 'Regions / Counties',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Region / County name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Region URL',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      initialValue: 'Kenya',
    }),
    defineField({
      name: 'regionType',
      title: 'Region type',
      type: 'string',
      options: {
        list: [
          {title: 'County', value: 'county'},
          {title: 'Town / City', value: 'town-city'},
          {title: 'Region', value: 'region'},
          {title: 'Country', value: 'country'},
        ],
      },
    }),
  ],
})
