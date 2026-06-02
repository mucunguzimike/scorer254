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

    return slug === "player-profiles" || slug === "players" || category === "player profiles" || category === "players" || category === "player watch"
  })

  return (
    <SectionPage
      kicker="Profiles and prospects"
      title="Players"
      description="Player profiles, rising prospects, scouting stories and football journeys from grassroots to the professional game."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
