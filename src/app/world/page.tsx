import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"
import {getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export default async function WorldPage() {
  const internationalStories = await getStoriesByCoverageType("international")
  const africanStories = await getStoriesByCoverageType("african-football")
  const sanityStories = [...internationalStories, ...africanStories]
  const fallbackStories = [...leadStories.slice(2), ...latestStories.slice(0, 2)]
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <SectionPage
      kicker="Global game"
      title="World"
      description="International football stories, African football links, global competitions and wider trends affecting the game."
      stories={stories}
    />
  )
}
