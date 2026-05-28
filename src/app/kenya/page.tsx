import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"
import {getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export default async function KenyaPage() {
  const sanityStories = await getStoriesByCoverageType("local-kenya")
  const fallbackStories = [...leadStories, ...latestStories].filter((story) =>
    ["Kenyan Football", "Grassroots", "Youth Football", "Women’s Football"].includes(story.category)
  )
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <SectionPage
      kicker="Kenyan football"
      title="Kenya"
      description="Coverage of Kenyan football, domestic leagues, clubs, transfers, players and the stories shaping the local game."
      stories={stories}
    />
  )
}
