import Link from "next/link"
import {StoryImage} from "@/components/media/StoryImage"
import {leadStories as fallbackLeadStories} from "@/data/mockStories"
import type {Story} from "@/data/mockStories"
import type {FrontendStory} from "@/sanity/lib/types"

type HeroSectionProps = {
  stories?: Array<Story | FrontendStory>
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

export function HeroSection({stories = fallbackLeadStories}: HeroSectionProps) {
  const [main, ...side] = stories

  if (!main) {
    return null
  }

  const sanityMain = main as FrontendStory
  const mainSanityImage = "slug" in main ? sanityMain.mainImage : undefined
  const mainImageAltText = "slug" in main && sanityMain.imageAltText ? sanityMain.imageAltText : main.title
  const mainHref = `/articles/${getStorySlug(main)}`

  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 lg:grid-cols-[1.5fr_0.9fr] lg:px-6">
      <Link href={mainHref} className="group relative block min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl">
        <StoryImage
          image={main.image}
          sanityImage={mainSanityImage}
          alt={mainImageAltText}
          className="absolute inset-0 h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.22),transparent_30%)]" />
        <div className="relative flex h-full min-h-[460px] flex-col justify-end p-6">
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black uppercase tracking-wide text-black">
              {"tag" in main && main.tag ? main.tag : "Featured"}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {main.category}
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
            {main.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            {main.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
            {main.location ? <span>{main.location}</span> : null}
            {main.location ? <span className="h-1 w-1 rounded-full bg-emerald-400" /> : null}
            <span>{main.date}</span>
          </div>
        </div>
      </Link>

      <div className="grid gap-5">
        {side.slice(0, 2).map((story) => (
          <Link
            key={story.id}
            href={`/articles/${getStorySlug(story)}`}
            className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5 transition hover:border-emerald-400/50"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-300">
                {story.category}
              </span>
              <span className="text-xs uppercase tracking-wide text-zinc-500">{story.date}</span>
            </div>
            <h2 className="text-2xl font-black uppercase leading-tight text-white">
              {story.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{story.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
