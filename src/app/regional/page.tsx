import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings, getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/regional`,
  },
  title: "Regional Football",
  description:
    "East African football coverage, including competitions, clubs, players and cross-border football developments.",
  openGraph: {
    title: "Regional Football | Scorer254",
    description:
      "East African football coverage, including competitions, clubs, players and cross-border football developments.",
  },
}

export default async function RegionalPage() {
  const [stories, siteSettings] = await Promise.all([getStoriesByCoverageType("east-africa"), getSiteSettings()])

  return (
    <SectionPage
      kicker="East Africa"
      title="Regional"
      description="Regional football coverage across East Africa, including competitions, clubs, players and cross-border football developments."
      stories={stories}
      settings={siteSettings}
    />
  )
}
