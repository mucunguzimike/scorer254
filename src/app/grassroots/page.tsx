import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {SectionPage} from "@/components/section/SectionPage"
import {getSiteSettings} from "@/sanity/lib/fetchers"
import {getStaticStories} from "@/lib/getStaticStories"

export const metadata: Metadata = {
  alternates: {canonical: `${siteUrl}/grassroots`},
  title: "Grassroots",
  description:
    "Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up. Unfiltered Football: Kenya and Beyond.",
  openGraph: {
    title: "Grassroots | Scorer254",
    description:
      "Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up.",
    url: `${siteUrl}/grassroots`,
    siteName: "Scorer254",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grassroots | Scorer254",
    description:
      "Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up.",
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

    return coverage === "grassroots" || slug === "grassroots" || slug === "grassroots-football" || category === "grassroots" || category === "grassroots football"
  })

  return (
    <SectionPage
      kicker="From the ground"
      title="Grassroots"
      description="Stories from community clubs, academies, school teams, local tournaments and the people building football from the ground up."
      stories={sectionStories}
      settings={siteSettings}
    />
  )
}
