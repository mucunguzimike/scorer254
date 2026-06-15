import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings} from "@/sanity/lib/fetchers"
import {getStaticStories} from "@/lib/getStaticStories"

export const metadata: Metadata = {
  alternates: {canonical: `${siteUrl}/matches`},
  title: "Matches",
  description:
    "Match reports, weekend previews, competition updates and football storylines from Kenya and beyond. Unfiltered Football: Kenya and Beyond.",
  openGraph: {
    title: "Matches | Scorer254",
    description:
      "Match reports, weekend previews, competition updates and football storylines from Kenya and beyond.",
    url: `${siteUrl}/matches`,
    siteName: "Scorer254",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matches | Scorer254",
    description:
      "Match reports, weekend previews, competition updates and football storylines from Kenya and beyond.",
  },
}

export default async function Page() {
  const [stories, siteSettings] = await Promise.all([
    getStaticStories(),
    getSiteSettings(),
  ])

  const sectionStories = stories.filter((story) => {
    const category = story.category?.toLowerCase() || ""
    const slug = story.categorySlug?.toLowerCase() || ""
    const coverage = story.coverageType?.toLowerCase() || ""

    return slug === "match-reports" || slug === "matches" || category === "match reports" || category === "matches"
  })

  return (
    <SectionPage
      kicker="Fixtures and reports"
      title="Matches"
      description="Match reports, weekend previews, competition updates and football storylines from Kenya and beyond."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
