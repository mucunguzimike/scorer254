import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings, getStoriesByCategorySlug} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {canonical: `${siteUrl}/regional`},
  title: "Regional Football",
  description:
    "Regional football stories, competitions, clubs, players and developments from across East Africa. Unfiltered Football: Kenya and Beyond.",
  openGraph: {
    title: "Regional Football | Scorer254",
    description:
      "Regional football stories, competitions, clubs, players and developments from across East Africa.",
    url: `${siteUrl}/regional`,
    siteName: "Scorer254",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional Football | Scorer254",
    description:
      "Regional football stories, competitions, clubs, players and developments from across East Africa.",
  },
}

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
