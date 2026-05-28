import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"

export default function RegionalPage() {
  return (
    <SectionPage
      kicker="East Africa"
      title="Regional"
      description="Regional football coverage across East Africa, including competitions, clubs, players and cross-border football developments."
      stories={[...latestStories.filter((story) => story.category === "Regional"), ...leadStories.slice(1, 2)]}
    />
  )
}
