import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings} from "@/sanity/lib/fetchers"
import {getStaticStories} from "@/lib/getStaticStories"

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStaticStories(),
    getSiteSettings(),
  ])

  const sectionStories = stories.filter((story) => {
    const category = story.category?.toLowerCase().trim() || ""
    const slug = story.categorySlug?.toLowerCase().trim() || ""

    return category === "regional football" || slug === "regional-football"
  })

  return (
    <SectionPage
      kicker="East Africa"
      title="Regional Football"
      description="Regional football coverage across East Africa, including competitions, clubs, players and cross-border football developments."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
