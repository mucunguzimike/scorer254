import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'defaultSeoTitle',
      title: 'Default SEO title',
      type: 'string',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'xUrl',
      title: 'X / Twitter URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'text',
      rows: 3,
    }),
  ],
})
