import {SectionPage} from "@/components/section/SectionPage"
import {latestStories, leadStories} from "@/data/mockStories"

export default function KenyaPage() {
  return (
    <SectionPage
      kicker="Kenyan football"
      title="Kenya"
      description="Coverage of Kenyan football, domestic leagues, clubs, transfers, players and the stories shaping the local game."
      stories={[...leadStories, ...latestStories].filter((story) =>
        ["Kenyan Football", "Grassroots", "Youth Football", "Women’s Football"].includes(story.category)
      )}
    />
  )
}
