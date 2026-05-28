import type {MetadataRoute} from "next"
import {siteUrl} from "@/lib/site"
import {client} from "@/sanity/lib/client"

type SitemapPost = {
  slug?: {
    current?: string
  }
  publishedAt?: string
}

const staticRoutes = [
  "",
  "/articles",
  "/grassroots",
  "/kenya",
  "/matches",
  "/players",
  "/regional",
  "/world",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<SitemapPost[]>(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      slug,
      publishedAt
    }
  `)

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const postEntries = posts
    .filter((post) => post.slug?.current)
    .map((post) => ({
      url: `${siteUrl}/articles/${post.slug?.current}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))

  return [...staticEntries, ...postEntries]
}
