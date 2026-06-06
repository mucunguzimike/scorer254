export type SanityImageAsset = {
  _type: "image"
  asset?: {
    _ref?: string
    _type?: "reference"
  }
  alt?: string
  caption?: string
  credit?: string
}

export type SanityReference = {
  _id: string
  title?: string
  name?: string
  slug?: {
    current: string
  }
}

export type SanityPost = {
  _id: string
  _updatedAt?: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  publishedAt?: string
  isFeatured?: boolean
  imageSourceType?: "external" | "upload" | "none"
  mainImage?: SanityImageAsset
  externalImageUrl?: string
  imageSourceUrl?: string
  imageCredit?: string
  imageLicence?: string
  imageLicenceUrl?: string
  imageAltText?: string
  imageCaption?: string
  body?: unknown[]
  seoTitle?: string
  seoDescription?: string
  sourceLinks?: {
    label?: string
    url?: string
  }[]
  contentDetails?: {
    coverageType?: string
  isFeatured?: boolean
    category?: SanityReference
    tags?: SanityReference[]
    author?: SanityReference
  }
  footballDetails?: {
    teams?: SanityReference[]
    players?: SanityReference[]
    competition?: SanityReference
    region?: SanityReference
    matchDate?: string
    matchResult?: string
    venue?: string
  }
}

export type SanitySiteSettings = {
  siteName?: string
  tagline?: string
  defaultSeoTitle?: string
  defaultSeoDescription?: string
  contactEmail?: string
  facebookUrl?: string
  xUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  footerText?: string
}

export type FrontendStory = {
  id: string
  title: string
  slug: string
  category: string
  categorySlug?: string
  coverageType?: string
  isFeatured?: boolean
  date: string
  excerpt: string
  image?: string
  mainImage?: SanityImageAsset
  imageAltText?: string
  location?: string
  tag?: string
  author?: string
  imageCredit?: string
  imageLicence?: string
  imageLicenceUrl?: string
  imageSourceUrl?: string
}
