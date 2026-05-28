import type {Story} from "@/data/mockStories"

type ArticleCardProps = {
  story: Story
}

export function ArticleCard({story}: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-emerald-400/50">
      <div className="h-44 bg-gradient-to-br from-zinc-800 via-black to-emerald-950" />
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wide">
          <span className="text-emerald-400">{story.category}</span>
          <span className="text-zinc-500">{story.date}</span>
        </div>
        <h2 className="text-xl font-black uppercase leading-tight text-white">
          {story.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{story.excerpt}</p>
      </div>
    </article>
  )
}
