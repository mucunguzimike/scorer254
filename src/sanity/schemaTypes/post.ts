import {defineArrayMember, defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Article URL',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(220),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
    }),
    defineField({
      name: 'contentDetails',
      title: 'Content details',
      type: 'object',
      fields: [
        defineField({
          name: 'coverageType',
          title: 'Coverage type',
          type: 'string',
          options: {
            list: [
              {title: 'Grassroots', value: 'grassroots'},
              {title: 'Local Kenya', value: 'local-kenya'},
              {title: 'East Africa', value: 'east-africa'},
              {title: 'African Football', value: 'african-football'},
              {title: 'International', value: 'international'},
            ],
          },
        }),
        defineField({
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{type: 'category'}],
        }),
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'tag'}]}],
        }),
        defineField({
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
        }),
      ],
    }),
    defineField({
      name: 'footballDetails',
      title: 'Football details',
      type: 'object',
      fields: [
        defineField({
          name: 'teams',
          title: 'Teams mentioned',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'team'}]}],
        }),
        defineField({
          name: 'players',
          title: 'Players mentioned',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'player'}]}],
        }),
        defineField({
          name: 'competition',
          title: 'Competition',
          type: 'reference',
          to: [{type: 'competition'}],
        }),
        defineField({
          name: 'region',
          title: 'Region / County',
          type: 'reference',
          to: [{type: 'region'}],
        }),
        defineField({
          name: 'matchDate',
          title: 'Match date',
          type: 'datetime',
        }),
        defineField({
          name: 'matchResult',
          title: 'Match result',
          type: 'string',
          description: 'Example: Gor Mahia 2-1 AFC Leopards',
        }),
        defineField({
          name: 'venue',
          title: 'Venue',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'imageSourceType',
      title: 'Image source type',
      type: 'string',
      initialValue: 'external',
      options: {
        layout: 'radio',
        list: [
          {title: 'External / licensed image', value: 'external'},
          {title: 'Upload image', value: 'upload'},
          {title: 'No image yet', value: 'none'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Uploaded main image',
      type: 'image',
      description: 'Use only for images you own or have permission to use. Prefer compressed images to save storage.',
      options: {hotspot: true},
      hidden: ({document}) => document?.imageSourceType !== 'upload',
    }),
    defineField({
      name: 'externalImageUrl',
      title: 'External image URL',
      type: 'url',
      hidden: ({document}) => document?.imageSourceType !== 'external',
    }),
    defineField({
      name: 'imageSourceUrl',
      title: 'Image source page URL',
      type: 'url',
      description: 'The page where the image or license can be verified.',
    }),
    defineField({
      name: 'imageCredit',
      title: 'Image credit',
      type: 'string',
      description: 'Example: Photo by [name] / Wikimedia Commons',
    }),
    defineField({
      name: 'imageLicence',
      title: 'Image licence / permission',
      type: 'string',
      description: 'Example: CC BY-SA 4.0, Used with permission, Club media handout',
    }),
    defineField({
      name: 'imageLicenceUrl',
      title: 'Image licence URL',
      type: 'url',
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image alt text',
      type: 'string',
    }),
    defineField({
      name: 'imageCaption',
      title: 'Image caption',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      title: 'Article body',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
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
          ],
        }),
      ],
    }),
    defineField({
      name: 'sourceLinks',
      title: 'Source links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'contentDetails.category.title',
      media: 'mainImage',
    },
  },
})
