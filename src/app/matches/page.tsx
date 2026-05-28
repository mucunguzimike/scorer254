import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/matches`,
  },
  title: "Match Reports",
  description:
    "Match reports, weekend previews, competition updates and football storylines from Kenya and beyond.",
  openGraph: {
    title: "Match Reports | Scorer254",
    description:
      "Match reports, weekend previews, competition updates and football storylines from Kenya and beyond.",
  },
}

export default async function MatchesPage() {
  const stories = await getStoriesByCategorySlug("match-reports")

  return (
    <SectionPage
      kicker="Fixtures and reports"
      title="Matches"
      description="Match reports, weekend previews, competition updates and football storylines from Kenya and beyond."
      stories={stories}
    />
  )
}
