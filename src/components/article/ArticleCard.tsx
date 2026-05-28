import Link from "next/link"
import {StoryImage} from "@/components/media/StoryImage"
import type {Story} from "@/data/mockStories"
import type {FrontendStory} from "@/sanity/lib/types"

type ArticleCardProps = {
  story: Story | FrontendStory
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function getStorySlug(story: Story | FrontendStory) {
  return "slug" in story && story.slug ? story.slug : slugify(story.title)
}

export function ArticleCard({story}: ArticleCardProps) {
  const href = `/articles/${getStorySlug(story)}`
  const sanityStory = story as FrontendStory
  const sanityImage = "slug" in story ? sanityStory.mainImage : undefined
  const imageAltText = "slug" in story && sanityStory.imageAltText ? sanityStory.imageAltText : story.title

  return (
    <Link
      href={href}
      className="block overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-emerald-400/50"
    >
      <article>
        <StoryImage
          image={story.image}
          sanityImage={sanityImage}
          alt={imageAltText}
          className="h-44"
        />
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
    </Link>
  )
}
