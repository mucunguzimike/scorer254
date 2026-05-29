import Link from "next/link"
import {StoryImage} from "@/components/media/StoryImage"
import type {FrontendStory} from "@/sanity/lib/types"

type HeroSectionProps = {
  stories: FrontendStory[]
}

export function HeroSection({stories}: HeroSectionProps) {
  const [main, ...side] = stories

  if (!main) {
    return null
  }

  const mainHref = `/articles/${main.slug}`
  const mainImageAltText = main.imageAltText || main.title
  const hasSideStories = side.length > 0

  return (
    <section
      className={`mx-auto grid max-w-7xl gap-5 px-4 py-8 lg:px-6 ${
        hasSideStories ? "lg:grid-cols-[1.45fr_0.9fr]" : "lg:grid-cols-1"
      }`}
    >
      <Link
        href={mainHref}
        className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl transition hover:border-emerald-400/50"
      >
        <article>
          <div className="overflow-hidden border-b border-white/10">
            <StoryImage
              image={main.image}
              sanityImage={main.mainImage}
              alt={mainImageAltText}
              className="aspect-[16/9] h-auto min-h-[320px] w-full"
            />
          </div>

          <div className="space-y-5 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-heading font-black uppercase tracking-wide text-black">
                Featured
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-heading font-black uppercase tracking-wide text-zinc-200">
                {main.category}
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-heading font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              {main.title}
            </h1>

            <p className="max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
              {main.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-heading font-black uppercase tracking-[0.2em] text-zinc-500">
              {main.location ? <span>{main.location}</span> : null}
              {main.location ? <span className="h-1 w-1 rounded-full bg-emerald-400" /> : null}
              <span>{main.date}</span>
            </div>
          </div>
        </article>
      </Link>

      {hasSideStories ? (
        <div className="grid gap-5">
          {side.slice(0, 2).map((story) => (
              <Link
              key={story.id}
              href={`/articles/${story.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 transition hover:border-emerald-400/50"
            >
            <article>
              <StoryImage
                image={story.image}
                sanityImage={story.mainImage}
                alt={story.imageAltText || story.title}
                className="h-40"
              />

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-mono-sports text-xs font-bold uppercase tracking-wide text-emerald-300">
                    {story.category}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-zinc-500">
                    {story.date}
                  </span>
                </div>

                <h2 className="text-2xl font-heading font-black uppercase leading-tight text-white transition group-hover:text-emerald-300">
                  {story.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {story.excerpt}
                </p>
              </div>
            </article>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  )
}
