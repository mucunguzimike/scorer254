import type {Metadata} from "next"
import {SectionPage} from "@/components/section/SectionPage"
import {playerWatchStories, latestStories} from "@/data/mockStories"
import {getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  title: "Player Watch",
  description:
    "Player profiles, rising prospects, scouting stories and football journeys from grassroots to the professional game.",
  openGraph: {
    title: "Player Watch | Scorer254",
    description:
      "Player profiles, rising prospects, scouting stories and football journeys from grassroots to the professional game.",
  },
}

export default async function PlayersPage() {
  const sanityStories = await getStoriesByCategorySlug("player-profiles")
  const fallbackStories = [...playerWatchStories, ...latestStories.slice(1, 2)]
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <SectionPage
      kicker="Profiles and prospects"
      title="Players"
      description="Player profiles, rising prospects, scouting stories and football journeys from grassroots to the professional game."
      stories={stories}
    />
  )
}
