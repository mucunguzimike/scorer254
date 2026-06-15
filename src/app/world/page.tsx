import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings} from "@/sanity/lib/fetchers"
import {getStaticStories} from "@/lib/getStaticStories"

export const metadata: Metadata = {
  alternates: {canonical: `${siteUrl}/world`},
  title: "World",
  description:
    "International football stories, African football links, global competitions and wider trends affecting the game. Unfiltered Football: Kenya and Beyond.",
  openGraph: {
    title: "World | Scorer254",
    description:
      "International football stories, African football links, global competitions and wider trends affecting the game.",
    url: `${siteUrl}/world`,
    siteName: "Scorer254",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World | Scorer254",
    description:
      "International football stories, African football links, global competitions and wider trends affecting the game.",
  },
}

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStaticStories(),
    getSiteSettings(),
  ])

  const sectionStories = stories.filter((story) => {
    const category = story.category?.toLowerCase() || ""
    const slug = story.categorySlug?.toLowerCase() || ""
    const coverage = story.coverageType?.toLowerCase() || ""

    return coverage === "international" || coverage === "african-football" || slug === "world" || slug === "international" || slug === "african-football" || category === "world" || category === "international" || category === "african football"
  })

  return (
    <SectionPage
      kicker="Global game"
      title="World"
      description="International football stories, African football links, global competitions and wider trends affecting the game."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
