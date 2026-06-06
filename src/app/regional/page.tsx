import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings, getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStoriesByCategorySlug("regional-football"),
    getSiteSettings(),
  ])

  return (
    <SectionPage
      kicker="Regional Football"
      title="Regional Football"
      description="Regional football stories, competitions, clubs, players and developments from across the region."
      stories={stories}
      settings={siteSettings}
    />
  )
}
