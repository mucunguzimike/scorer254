import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings} from "@/sanity/lib/fetchers"
import {getStaticStories} from "@/lib/getStaticStories"

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStaticStories(),
    getSiteSettings(),
  ])

  const sectionStories = stories.filter((story) => {
    const category = story.category?.toLowerCase() || ""
    const slug = story.categorySlug?.toLowerCase() || ""
    const coverage = story.coverageType?.toLowerCase() || ""

    return coverage === "local-kenya" || slug === "kenya" || slug === "kenyan-football" || category === "kenya" || category === "kenyan football"
  })

  return (
    <SectionPage
      kicker="Kenyan football"
      title="Kenya"
      description="Coverage of Kenyan football, domestic leagues, clubs, transfers, players and the stories shaping the local game."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
