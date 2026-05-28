import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings, getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/players`,
  },
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
  const [stories, siteSettings] = await Promise.all([getStoriesByCategorySlug("player-profiles"), getSiteSettings()])

  return (
    <SectionPage
      kicker="Profiles and prospects"
      title="Players"
      description="Player profiles, rising prospects, scouting stories and football journeys from grassroots to the professional game."
      stories={stories}
      settings={siteSettings}
    />
  )
}
