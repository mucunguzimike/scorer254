import {ArticleCard} from "@/components/article/ArticleCard"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {grassrootsStories, latestStories, leadStories, playerWatchStories} from "@/data/mockStories"
import {getLatestStories} from "@/sanity/lib/fetchers"

const fallbackStories = [
  ...leadStories,
  ...latestStories,
  ...grassrootsStories,
  ...playerWatchStories,
]

export default async function ArticlesPage() {
  const sanityStories = await getLatestStories()
  const stories = sanityStories.length > 0 ? sanityStories : fallbackStories

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
            Scorer254 archive
          </p>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white lg:text-7xl">
            Latest Stories
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Grassroots football, Kenyan soccer, player stories, match reports and regional coverage.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 md:grid-cols-2 lg:grid-cols-3 lg:px-6">
        {stories.map((story) => (
          <ArticleCard key={story.id} story={story} />
        ))}
      </section>

      <Footer />
    </main>
  )
}
