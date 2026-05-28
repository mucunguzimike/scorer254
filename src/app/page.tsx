import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {HeroSection} from "@/components/home/HeroSection"
import {LatestNews} from "@/components/home/LatestNews"
import {Sidebar} from "@/components/home/Sidebar"
import {StoryGrid} from "@/components/home/StoryGrid"
import {
  grassrootsStories as fallbackGrassrootsStories,
  latestStories as fallbackLatestStories,
  leadStories as fallbackLeadStories,
  playerWatchStories as fallbackPlayerWatchStories,
} from "@/data/mockStories"
import {getHomepageStories} from "@/sanity/lib/fetchers"

export default async function Home() {
  const sanityStories = await getHomepageStories()
  const hasSanityStories = sanityStories.length > 0

  const heroStories = hasSanityStories ? sanityStories.slice(0, 3) : fallbackLeadStories
  const latestStories = hasSanityStories ? sanityStories.slice(0, 4) : fallbackLatestStories
  const grassrootsStories = hasSanityStories
    ? sanityStories.filter((story) => story.category.toLowerCase().includes("grassroots")).slice(0, 3)
    : fallbackGrassrootsStories
  const playerWatchStories = hasSanityStories
    ? sanityStories.filter((story) => story.category.toLowerCase().includes("player")).slice(0, 2)
    : fallbackPlayerWatchStories

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

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

      <Footer />
    </main>
  )
}
