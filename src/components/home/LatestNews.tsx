import {latestStories as fallbackLatestStories} from "@/data/mockStories"
import type {Story} from "@/data/mockStories"
import type {FrontendStory} from "@/sanity/lib/types"

type LatestNewsProps = {
  stories?: Array<Story | FrontendStory>
}

export function LatestNews({stories = fallbackLatestStories}: LatestNewsProps) {
  return (
    <section className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-black uppercase text-white">Latest News</h2>
        <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">Live desk</span>
      </div>

      <div className="divide-y divide-white/10">
        {stories.map((story) => (
          <article key={story.id} className="py-4 first:pt-0 last:pb-0">
            <div className="mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-wide">
              <span className="text-emerald-400">{story.category}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-500">{story.date}</span>
            </div>
            <h3 className="text-base font-black leading-snug text-white transition hover:text-emerald-300">
              {story.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{story.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
