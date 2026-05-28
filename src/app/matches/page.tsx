import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"
import {getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export default async function MatchesPage() {
  const sanityStories = await getStoriesByCategorySlug("match-reports")
  const fallbackStories = [...latestStories, ...leadStories]
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <SectionPage
      kicker="Fixtures and reports"
      title="Matches"
      description="Match reports, weekend previews, competition updates and football storylines from Kenya and beyond."
      stories={stories}
    />
  )
}
