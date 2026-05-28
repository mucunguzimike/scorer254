import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"

export default function MatchesPage() {
  return (
    <SectionPage
      kicker="Fixtures and reports"
      title="Matches"
      description="Match reports, weekend previews, competition updates and football storylines from Kenya and beyond."
      stories={[...latestStories, ...leadStories]}
    />
  )
}
