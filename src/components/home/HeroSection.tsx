"use client"

import {useEffect, useMemo, useState} from "react"
import Link from "next/link"
import {StoryImage} from "@/components/media/StoryImage"
import type {FrontendStory} from "@/sanity/lib/types"

type HeroSectionProps = {
  stories: FrontendStory[]
}

const ROTATION_INTERVAL_MS = 5 * 60 * 1000

export function HeroSection({stories}: HeroSectionProps) {
  const featuredStories = useMemo(() => stories.filter(Boolean), [stories])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (featuredStories.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredStories.length)
    }, ROTATION_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [featuredStories.length])

  if (featuredStories.length === 0) {
    return null
  }

  const main = featuredStories[activeIndex] || featuredStories[0]
  const mainHref = `/articles/${main.slug}`
  const mainImageAltText = main.imageAltText || main.title

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl">
        <div className="overflow-hidden border-b border-white/10">
          <StoryImage
            image={main.image}
            sanityImage={main.mainImage}
            alt={mainImageAltText}
            className="aspect-[16/8] h-auto min-h-[360px] w-full"
          />
        </div>

        <div className="space-y-5 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black uppercase tracking-wide text-black">
              Featured
            </span>
            {featuredStories.length > 1 ? (
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                {activeIndex + 1} / {featuredStories.length}
              </span>
            ) : null}
          </div>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {main.title}
          </h1>

          {main.excerpt ? (
            <p className="max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
              {main.excerpt}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-500">
              {main.location ? <span>{main.location}</span> : null}
              {main.location ? <span className="h-1 w-1 rounded-full bg-emerald-400" /> : null}
              <span>{main.date}</span>
            </div>

            <Link
              href={mainHref}
              className="inline-flex rounded-full bg-emerald-400 px-5 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-emerald-300"
            >
              Read more
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
