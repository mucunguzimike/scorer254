import {ArticleCard} from "@/components/article/ArticleCard"
import type {FrontendStory} from "@/sanity/lib/types"

type StoryGridProps = {
  title: string
  kicker?: string
  stories: FrontendStory[]
  emptyTitle?: string
  emptyDescription?: string
}

export function StoryGrid({title, kicker, stories}: StoryGridProps) {
  if (stories.length === 0) {
    return null
  }

  return (
    <section className="py-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          {kicker ? (
            <p className="mb-2 text-xs font-heading font-black uppercase tracking-[0.25em] text-emerald-400">
              {kicker}
            </p>
          ) : null}
          <h2 className="text-3xl font-heading font-black uppercase tracking-tight text-white">
            {title}
          </h2>
        </div>
        <a href="/articles" className="hidden font-mono-sports text-sm font-bold uppercase tracking-wide text-zinc-400 hover:text-emerald-400 sm:block">
          View all
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stories.map((story) => (
          <ArticleCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}
