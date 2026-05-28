import type {Metadata} from "next"
import {SectionPage} from "@/components/section/SectionPage"
import {grassrootsStories, leadStories} from "@/data/mockStories"
import {getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  title: "Grassroots Football",
  description:
    "Grassroots football stories from community clubs, academies, school teams and local tournaments across Kenya.",
  openGraph: {
    title: "Grassroots Football | Scorer254",
    description:
      "Grassroots football stories from community clubs, academies, school teams and local tournaments across Kenya.",
  },
}

export default async function GrassrootsPage() {
  const sanityStories = await getStoriesByCoverageType("grassroots")
  const fallbackStories = [...leadStories.slice(0, 1), ...grassrootsStories]
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <SectionPage
      kicker="From the ground"
      title="Grassroots"
      description="Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up."
      stories={stories}
    />
  )
}
