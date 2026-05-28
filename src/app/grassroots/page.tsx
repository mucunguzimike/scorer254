import {SectionPage} from "@/components/section/SectionPage"
import {grassrootsStories, leadStories} from "@/data/mockStories"

export default function GrassrootsPage() {
  return (
    <SectionPage
      kicker="From the ground"
      title="Grassroots"
      description="Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up."
      stories={[...leadStories.slice(0, 1), ...grassrootsStories]}
    />
  )
}
