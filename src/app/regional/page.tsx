import type {Metadata} from "next"
import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"
import {getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  title: "Regional Football",
  description:
    "East African football coverage, including competitions, clubs, players and cross-border football developments.",
  openGraph: {
    title: "Regional Football | Scorer254",
    description:
      "East African football coverage, including competitions, clubs, players and cross-border football developments.",
  },
}

export default async function RegionalPage() {
  const sanityStories = await getStoriesByCoverageType("east-africa")
  const fallbackStories = [...latestStories.filter((story) => story.category === "Regional"), ...leadStories.slice(1, 2)]
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <SectionPage
      kicker="East Africa"
      title="Regional"
      description="Regional football coverage across East Africa, including competitions, clubs, players and cross-border football developments."
      stories={stories}
    />
  )
}
