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
  const heroStories = useMemo(() => stories.filter(Boolean).slice(0, 3), [stories])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (heroStories.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroStories.length)
    }, ROTATION_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [heroStories.length])

  useEffect(() => {
    if (activeIndex > heroStories.length - 1) {
      setActiveIndex(0)
    }
  }, [activeIndex, heroStories.length])

  if (heroStories.length === 0) {
    return null
  }

  const main = heroStories[activeIndex] || heroStories[0]
  const mainHref = `/articles/${main.slug}`
  const mainImageAltText = main.imageAltText || main.title

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
      <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl">
        <div className="relative overflow-hidden border-b border-white/10">
          <StoryImage
            image={main.image}
            sanityImage={main.mainImage}
            alt={mainImageAltText}
            className="aspect-[16/8] h-auto min-h-[360px] w-full"
          />

          {heroStories.length > 1 ? (
            <div
              className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-5"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-3" role="tablist" aria-label="Featured stories">
                {heroStories.map((story, index) => (
                  <button
                    key={story.id}
                    type="button"
                    role="tab"
                    onClick={() => setActiveIndex(index)}
                    aria-selected={index === activeIndex}
                    aria-label={`Show featured article ${index + 1}: ${story.title}`}
                    className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:scale-90"
                  >
                    <span
                      className={`rounded-full transition-all duration-200 ${
                        index === activeIndex
                          ? "h-2.5 w-10 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
                          : "h-2.5 w-3 bg-white/30 group-hover:bg-white/60 group-hover:w-5"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-5 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black uppercase tracking-wide text-black">
              Featured
            </span>
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
