import Link from "next/link"
import {StoryImage} from "@/components/media/StoryImage"
import type {FrontendStory} from "@/sanity/lib/types"

type ArticleCardProps = {
  story: FrontendStory
}

export function ArticleCard({story}: ArticleCardProps) {
  const href = `/articles/${story.slug}`
  const imageAltText = story.imageAltText || story.title

  return (
    <Link
      href={href}
      className="block h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-emerald-400/50"
    >
      <article className="flex h-full flex-col">
        <StoryImage
          image={story.image}
          sanityImage={story.mainImage}
          alt={imageAltText}
          className="h-32"
        />
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-center justify-between gap-3 font-mono-sports text-[10px] font-bold uppercase tracking-wide">
            <span className="truncate text-emerald-400">{story.category}</span>
            <span className="shrink-0 text-zinc-500">{story.date}</span>
          </div>
          <h2 className="line-clamp-3 text-base font-heading font-black uppercase leading-tight text-white">
            {story.title}
          </h2>
          {story.excerpt ? (
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">
              {story.excerpt}
            </p>
          ) : null}
        </div>
      </article>
    </Link>
  )
}
