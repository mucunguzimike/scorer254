import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getStoriesByCoverageType} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/kenya`,
  },
  title: "Kenyan Football",
  description:
    "Coverage of Kenyan football, domestic leagues, clubs, transfers, players and local football stories.",
  openGraph: {
    title: "Kenyan Football | Scorer254",
    description:
      "Coverage of Kenyan football, domestic leagues, clubs, transfers, players and local football stories.",
  },
}

export default async function KenyaPage() {
  const stories = await getStoriesByCoverageType("local-kenya")

  return (
    <SectionPage
      kicker="Kenyan football"
      title="Kenya"
      description="Coverage of Kenyan football, domestic leagues, clubs, transfers, players and the stories shaping the local game."
      stories={stories}
    />
  )
}
