import {client} from "./client"
import {
  homepagePostsQuery,
  latestPostsQuery,
  postBySlugQuery,
} from "./queries"
import {mapPostToStory, mapPostsToStories} from "./mappers"
import type {FrontendStory, SanityPost} from "./types"

export async function getHomepageStories(): Promise<FrontendStory[]> {
  const posts = await client.fetch<SanityPost[]>(homepagePostsQuery)
  return mapPostsToStories(posts)
}

export async function getLatestStories(): Promise<FrontendStory[]> {
  const posts = await client.fetch<SanityPost[]>(latestPostsQuery)
  return mapPostsToStories(posts)
}

export async function getStoryBySlug(slug: string): Promise<FrontendStory | null> {
  const post = await client.fetch<SanityPost | null>(postBySlugQuery, {slug})

  if (!post) {
    return null
  }

  return mapPostToStory(post)
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch<SanityPost | null>(postBySlugQuery, {slug})
}
