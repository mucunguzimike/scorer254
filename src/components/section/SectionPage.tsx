import {ArticleCard} from "@/components/article/ArticleCard"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import type {Story} from "@/data/mockStories"
import type {FrontendStory} from "@/sanity/lib/types"

type SectionPageProps = {
  kicker: string
  title: string
  description: string
  stories: Array<Story | FrontendStory>
}

export function SectionPage({kicker, title, description, stories}: SectionPageProps) {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
            {kicker}
          </p>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white lg:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            {description}
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
