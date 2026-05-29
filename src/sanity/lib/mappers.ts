import type {FrontendStory, SanityPost} from "./types"

function formatDate(date?: string) {
  if (!date) return "Unpublished"

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

function getCategory(post: SanityPost) {
  return post.contentDetails?.category?.title || "Football"
}

function getCategorySlug(post: SanityPost) {
  return post.contentDetails?.category?.slug?.current
}

function getCoverageType(post: SanityPost) {
  return post.contentDetails?.coverageType
}

function getLocation(post: SanityPost) {
  return post.footballDetails?.region?.name
}

function getAuthor(post: SanityPost) {
  return post.contentDetails?.author?.name
}

function getImage(post: SanityPost) {
  if (post.imageSourceType === "external") {
    return post.externalImageUrl
  }

  return undefined
}

export function mapPostToStory(post: SanityPost): FrontendStory {
  return {
    id: post._id,
    title: post.title,
    slug: post.slug?.current || post._id,
    category: getCategory(post),
    categorySlug: getCategorySlug(post),
    coverageType: getCoverageType(post),
    isFeatured: post.isFeatured,
    date: formatDate(post.publishedAt),
    excerpt: post.excerpt || "",
    image: getImage(post),
    mainImage: post.mainImage,
    imageAltText: post.imageAltText,
    location: getLocation(post),
    author: getAuthor(post),
    imageCredit: post.imageCredit,
    imageLicence: post.imageLicence,
    imageLicenceUrl: post.imageLicenceUrl,
    imageSourceUrl: post.imageSourceUrl,
  }
}

export function mapPostsToStories(posts: SanityPost[] = []) {
  return posts.map(mapPostToStory)
}
