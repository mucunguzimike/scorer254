import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings, getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStoriesByCategorySlug("regional-football"),
    getSiteSettings(),
  ])

  return (
    <SectionPage
      kicker="East Africa"
      title="Regional Football"
      description="Regional football coverage across East Africa, including competitions, clubs, players and cross-border football developments."
      stories={stories}
      settings={siteSettings}
    />
  )
}
