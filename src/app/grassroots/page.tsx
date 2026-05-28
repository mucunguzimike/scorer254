import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings, getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export default async function GrassrootsPage() {
  const [stories, siteSettings] = await Promise.all([getStoriesByCoverageType("grassroots"), getSiteSettings()])

  return (
    <SectionPage
      kicker="From the ground"
      title="Grassroots"
      description="Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up."
      stories={stories}
      settings={siteSettings}
    />
  )
}
