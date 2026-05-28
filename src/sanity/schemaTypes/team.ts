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
