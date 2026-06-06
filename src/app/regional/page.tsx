import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings} from "@/sanity/lib/fetchers"
import {getStaticStories} from "@/lib/getStaticStories"

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStaticStories(),
    getSiteSettings(),
  ])

  const sectionStories = stories.filter((story) => {
    const categoryTitle = story.category?.toLowerCase().trim() || ""
    const categorySlug = story.categorySlug?.toLowerCase().trim() || ""

    return categoryTitle === "regional football" || categorySlug === "regional-football"
  })

  return (
    <SectionPage
      kicker="Regional Football"
      title="Regional Football"
      description="Regional football stories, competitions, clubs, players and developments from across the region."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
