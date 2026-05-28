import type {Story} from "@/data/mockStories"

type StoryGridProps = {
  title: string
  kicker?: string
  stories: Story[]
}

export function StoryGrid({title, kicker, stories}: StoryGridProps) {
  return (
    <section className="py-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          {kicker ? (
            <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
              {kicker}
            </p>
          ) : null}
          <h2 className="text-3xl font-black uppercase tracking-tight text-white">
            {title}
          </h2>
        </div>
        <a href="#" className="hidden text-sm font-bold uppercase tracking-wide text-zinc-400 hover:text-emerald-400 sm:block">
          View all
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stories.map((story) => (
          <article
            key={story.id}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-emerald-400/50"
          >
            <div className="h-40 bg-gradient-to-br from-zinc-800 via-black to-emerald-950" />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wide">
                <span className="text-emerald-400">{story.category}</span>
                <span className="text-zinc-500">{story.date}</span>
              </div>
              <h3 className="text-xl font-black uppercase leading-tight text-white">
                {story.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{story.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
