import {SectionPage} from "@/components/section/SectionPage"
import {playerWatchStories, latestStories} from "@/data/mockStories"

export default function PlayersPage() {
  return (
    <SectionPage
      kicker="Profiles and prospects"
      title="Players"
      description="Player profiles, rising prospects, scouting stories and football journeys from grassroots to the professional game."
      stories={[...playerWatchStories, ...latestStories.slice(1, 2)]}
    />
  )
}
