import {getAllPostSlugs, getPostBySlug} from "@/sanity/lib/fetchers"
import {mapPostToStory} from "@/sanity/lib/mappers"

export async function getStaticStories() {
  const slugs = await getAllPostSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))

  return posts
    .filter(Boolean)
    .map((post) => mapPostToStory(post!))
    .filter((story) => story?.title && story?.slug)
}
