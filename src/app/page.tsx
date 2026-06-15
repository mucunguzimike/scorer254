import Link from "next/link"
import {ArticleCard} from "@/components/article/ArticleCard"
import {EmptyState} from "@/components/common/EmptyState"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {HeroSection} from "@/components/home/HeroSection"
import {LatestNews} from "@/components/home/LatestNews"
import {Sidebar} from "@/components/home/Sidebar"
import {getFeaturedStories, getHomepageStories, getLatestStories, getSiteSettings} from "@/sanity/lib/fetchers"
import {siteUrl, siteName, defaultDescription} from "@/lib/site"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  logo: `${siteUrl}/logo.png`,
  sameAs: [],
}

export default async function Home() {
  const [featuredStories, stories, latestStories, siteSettings] = await Promise.all([
    getFeaturedStories(),
    getHomepageStories(),
    getLatestStories(),
    getSiteSettings(),
  ])

  const featuredIds = new Set(featuredStories.map((story) => story.id))
  const heroStories = [
    ...featuredStories,
    ...stories.filter((story) => !featuredIds.has(story.id)),
  ].slice(0, 3)
  const latestNewsStories = latestStories.slice(0, 4)
  const latestNewsIds = new Set(latestNewsStories.map((story) => story.id))
  const editorPicks = stories.filter((story) => !latestNewsIds.has(story.id)).slice(0, 9)

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(organizationJsonLd)}}
      />
      <Header settings={siteSettings} />

      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wide text-zinc-400 lg:px-6">
          <span className="text-emerald-400">Scorer254</span>
          <span>/</span>
          <span>Unfiltered Football: Kenya and Beyond</span>
        </div>
      </div>

      {stories.length > 0 ? (
        <>
          <HeroSection stories={heroStories} />

          <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 pb-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-6">
            <div className="flex h-full flex-col py-8">
              <div className="mb-5">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
                  Editor&apos;s Picks
                </p>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                  Editor&apos;s Picks
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {editorPicks.map((story) => (
                  <ArticleCard key={story.id} story={story} />
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/kenya/"
                  className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="flex h-full flex-col gap-5 py-8">
              <LatestNews stories={latestNewsStories} />
              <Sidebar />
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <EmptyState
            title="No stories published yet"
            description="The homepage could not find published article data during static build."
          />
        </section>
      )}

      <Footer settings={siteSettings} />
    </main>
  )
}
