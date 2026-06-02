import Link from "next/link"
import {ArticleCard} from "@/components/article/ArticleCard"
import {EmptyState} from "@/components/common/EmptyState"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {HeroSection} from "@/components/home/HeroSection"
import {LatestNews} from "@/components/home/LatestNews"
import {Sidebar} from "@/components/home/Sidebar"
import {getHomepageStories, getSiteSettings} from "@/sanity/lib/fetchers"

export default async function Home() {
  const [stories, siteSettings] = await Promise.all([
    getHomepageStories(),
    getSiteSettings(),
  ])

  const safeStories = stories.filter((story) => story?.title && story?.slug)

  const heroStories = safeStories.slice(0, 3)
  const latestStories = safeStories.slice(0, 4)
  const articleGridStories = safeStories.slice(0, 9)

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header settings={siteSettings} />

      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wide text-zinc-400 lg:px-6">
          <span className="text-emerald-400">Scorer254</span>
          <span>/</span>
          <span>Football stories from Kenya and beyond</span>
        </div>
      </div>

      {safeStories.length > 0 ? (
        <>
          <HeroSection stories={heroStories} />

          <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 pb-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-6">
            <div className="flex h-full flex-col py-8">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
                    Kenya football
                  </p>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                    Latest Articles
                  </h2>
                </div>


              </div>

              {articleGridStories.length > 0 ? (
                <>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {articleGridStories.map((story) => (
                      <ArticleCard key={story.id} story={story} />
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href="/kenya"
                      className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-wide text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400"
                    >
                      Read more
                    </Link>
                  </div>
                </>
              ) : (
                <EmptyState
                  title="No articles published yet"
                  description="Published articles will appear here once they are added in Sanity Studio."
                />
              )}
            </div>

            <div className="flex h-full flex-col gap-5 py-8">
              <LatestNews stories={latestStories} />
              <Sidebar />
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <EmptyState
            title="No stories published yet"
            description="Create and publish articles in Sanity Studio. Once published, they will appear on the homepage automatically."
          />
        </section>
      )}

      <Footer settings={siteSettings} />
    </main>
  )
}
