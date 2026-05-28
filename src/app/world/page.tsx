import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/world`,
  },
  title: "World Football",
  description:
    "International football stories, African football links, global competitions and wider trends affecting the game.",
  openGraph: {
    title: "World Football | Scorer254",
    description:
      "International football stories, African football links, global competitions and wider trends affecting the game.",
  },
}

export default async function WorldPage() {
  const internationalStories = await getStoriesByCoverageType("international")
  const africanStories = await getStoriesByCoverageType("african-football")
  const stories = [...internationalStories, ...africanStories]

  return (
    <SectionPage
      kicker="Global game"
      title="World"
      description="International football stories, African football links, global competitions and wider trends affecting the game."
      stories={stories}
    />
  )
}
