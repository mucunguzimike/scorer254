import {EmptyState} from "@/components/common/EmptyState"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {HeroSection} from "@/components/home/HeroSection"
import {LatestNews} from "@/components/home/LatestNews"
import {Sidebar} from "@/components/home/Sidebar"
import {StoryGrid} from "@/components/home/StoryGrid"
import {getFeaturedStories, getHomepageStories, getSiteSettings} from "@/sanity/lib/fetchers"

export default async function Home() {
  const [stories, featuredStories, siteSettings] = await Promise.all([
    getHomepageStories(),
    getFeaturedStories(),
    getSiteSettings(),
  ])

  const heroStories = featuredStories
  const latestStories = stories.slice(0, 4)
  const grassrootsStories = stories
    .filter(
      (story) =>
        story.coverageType === "grassroots" ||
        story.categorySlug === "grassroots-football"
    )
    .slice(0, 3)

  const playerWatchStories = stories
    .filter((story) => story.categorySlug === "player-profiles")
    .slice(0, 2)

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header settings={siteSettings} />

      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wide text-zinc-400 lg:px-6">
          <span className="text-emerald-400">Scorer254</span>
          <span>/</span>
          <span>Grassroots football</span>
          <span>/</span>
          <span>Kenyan soccer</span>
          <span>/</span>
          <span>Regional and international game</span>
        </div>
      </div>

      {stories.length > 0 ? (
        <>
          <HeroSection stories={heroStories} />

          <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 lg:grid-cols-[1fr_340px] lg:px-6">
            <div>
              <StoryGrid
                title="Grassroots Football"
                kicker="From the ground"
                stories={grassrootsStories}
              />
              <StoryGrid
                title="Player Watch"
                kicker="Profiles and prospects"
                stories={playerWatchStories}
              />
            </div>

            <div className="space-y-5 py-8">
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
