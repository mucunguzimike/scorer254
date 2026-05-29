import {ArticleCard} from "@/components/article/ArticleCard"
import {EmptyState} from "@/components/common/EmptyState"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import type {FrontendStory, SanitySiteSettings} from "@/sanity/lib/types"

type SectionPageProps = {
  kicker: string
  title: string
  description: string
  stories: FrontendStory[]
  settings?: SanitySiteSettings | null
}

export function SectionPage({kicker, title, description, stories, settings}: SectionPageProps) {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header settings={settings} />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <p className="mb-3 text-xs font-heading font-black uppercase tracking-[0.25em] text-emerald-400">
            {kicker}
          </p>
          <h1 className="text-5xl font-heading font-black uppercase tracking-[-0.03em] text-white lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            {description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        {stories.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <ArticleCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={`No ${title.toLowerCase()} stories yet`}
            description="Published stories will appear here once they are added in Sanity Studio."
          />
        )}
      </section>

      <Footer settings={settings} />
    </main>
  )
}
