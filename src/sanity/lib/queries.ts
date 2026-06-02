import {defineQuery} from "next-sanity"

export const postFields = `
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  imageSourceType,
  mainImage,
  externalImageUrl,
  imageSourceUrl,
  imageCredit,
  imageLicence,
  imageLicenceUrl,
  imageAltText,
  imageCaption,
  body,
  seoTitle,
  seoDescription,
  sourceLinks,
  contentDetails {
    coverageType,
    category->{
      _id,
      title,
      slug
    },
    tags[]->{
      _id,
      title,
      slug
    },
    author->{
      _id,
      name,
      slug
    }
  },
  footballDetails {
    teams[]->{
      _id,
      name,
      slug
    },
    players[]->{
      _id,
      name,
      slug
    },
    competition->{
      _id,
      name,
      slug
    },
    region->{
      _id,
      name,
      slug
    },
    matchDate,
    matchResult,
    venue
  }
`

export const latestPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...12] {
    ${postFields}
  }
`)

export const homepagePostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...12] {
    ${postFields}
  }
`)

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`)

export const postsByCoverageTypeQuery = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    contentDetails.coverageType == $coverageType
  ] | order(publishedAt desc)[0...12] {
    ${postFields}
  }
`)

export const postsByCategorySlugQuery = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    contentDetails.category->slug.current == $categorySlug
  ] | order(publishedAt desc)[0...12] {
    ${postFields}
  }
`)

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    defaultSeoTitle,
    defaultSeoDescription,
    contactEmail,
    facebookUrl,
    xUrl,
    instagramUrl,
    youtubeUrl,
    footerText
  }
`)


export const featuredPostsQuery = `
  *[_type == "post" && isFeatured == true && defined(slug.current)] | order(publishedAt desc)[0...8] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    isFeatured,
    imageSourceType,
    externalImageUrl,
    mainImage,
    imageSourceUrl,
    imageCredit,
    imageLicence,
    imageAltText,
    imageCaption,
    seoTitle,
    seoDescription,
    contentDetails {
      coverageType,
      author->{name, slug},
      category->{title, slug},
      region->{name, slug},
      competition->{name, slug},
      teams[]->{name, slug},
      players[]->{name, slug}
    }
  }
`


export const allPostSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`)
