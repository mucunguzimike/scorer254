import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"

export default function WorldPage() {
  return (
    <SectionPage
      kicker="Global game"
      title="World"
      description="International football stories, African football links, global competitions and wider trends affecting the game."
      stories={[...leadStories.slice(2), ...latestStories.slice(0, 2)]}
    />
  )
}
