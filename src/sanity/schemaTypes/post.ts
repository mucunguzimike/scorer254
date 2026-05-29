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
      description: 'A short article summary used on cards, SEO and social previews.',
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isFeatured',
      title: 'Feature on homepage hero',
      type: 'boolean',
      description: 'Turn this on to include the article in the rotating homepage hero.',
      initialValue: false,
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
          description: 'Controls where the article appears: Grassroots, Kenya, Regional, World, etc.',
          options: {
            list: [
              {title: 'Grassroots', value: 'grassroots'},
              {title: 'Local Kenya', value: 'local-kenya'},
              {title: 'East Africa', value: 'east-africa'},
              {title: 'African Football', value: 'african-football'},
              {title: 'International', value: 'international'},
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{type: 'category'}],
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
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
      description: 'Use only images you have permission to use. Add source, credit and licence below.',
      hidden: ({document}) => document?.imageSourceType !== 'external',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.imageSourceType === 'external' && !value) {
            return 'External image URL is required when image source type is External / licensed image.'
          }
          return true
        }),
    }),
    defineField({
      name: 'imageSourceUrl',
      title: 'Image source page URL',
      type: 'url',
      description: 'The page where the image or license can be verified.',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.imageSourceType !== 'none' && !value) {
            return 'Add the source page URL for the image.'
          }
          return true
        }),
    }),
    defineField({
      name: 'imageCredit',
      title: 'Image credit',
      type: 'string',
      description: 'Example: Photo by [name] / Wikimedia Commons',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.imageSourceType !== 'none' && !value) {
            return 'Add an image credit when an image is used.'
          }
          return true
        }),
    }),
    defineField({
      name: 'imageLicence',
      title: 'Image licence / permission',
      type: 'string',
      description: 'Example: CC BY-SA 4.0, Used with permission, Club media handout',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.imageSourceType !== 'none' && !value) {
            return 'Add image licence or permission information when an image is used.'
          }
          return true
        }),
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
      description: 'Describe the image for accessibility and SEO.',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.imageSourceType !== 'none' && !value) {
            return 'Add alt text when an image is used.'
          }
          return true
        }),
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
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              defineField({
                name: 'link',
                title: 'Normal link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) => Rule.required(),
                  }),
                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: true,
                  }),
                ],
              }),
              defineField({
                name: 'sourceLink',
                title: 'Source / reference link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'Source URL',
                    type: 'url',
                    validation: (Rule) => Rule.required(),
                  }),
                  defineField({
                    name: 'label',
                    title: 'Source label',
                    type: 'string',
                    description: 'Example: FKF statement, CAF fixture list, club announcement',
                  }),
                ],
              }),
              defineField({
                name: 'affiliateLink',
                title: 'Affiliate / sponsored link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'Affiliate URL',
                    type: 'url',
                    validation: (Rule) => Rule.required(),
                  }),
                  defineField({
                    name: 'disclosure',
                    title: 'Disclosure note',
                    type: 'string',
                    initialValue: 'Affiliate link',
                  }),
                  defineField({
                    name: 'network',
                    title: 'Affiliate network / partner',
                    type: 'string',
                  }),
                ],
              }),
            ],
          },
        }),
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
        defineArrayMember({type: 'youtube'}),
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
      description: 'Used by Google and social previews. Keep it clear and under 160 characters.',
      validation: (Rule) => Rule.required().max(160),
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
