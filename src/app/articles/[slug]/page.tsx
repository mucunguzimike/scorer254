import Link from "next/link"
import {ArticleCard} from "@/components/article/ArticleCard"
import {PortableArticleBody} from "@/components/article/PortableArticleBody"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {grassrootsStories, latestStories, leadStories, playerWatchStories} from "@/data/mockStories"
import {getPostBySlug} from "@/sanity/lib/fetchers"
import {mapPostToStory} from "@/sanity/lib/mappers"
import type {FrontendStory} from "@/sanity/lib/types"
import {notFound} from "next/navigation"

const fallbackStories = [
  ...leadStories,
  ...latestStories,
  ...grassrootsStories,
  ...playerWatchStories,
]

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage({params}: ArticlePageProps) {
  const {slug} = await params

  const sanityPost = await getPostBySlug(slug)
  const sanityStory = sanityPost ? mapPostToStory(sanityPost) : null
  const fallbackStory = fallbackStories.find((item) => slugify(item.title) === slug)
  const story = sanityStory || fallbackStory

  if (!story) {
    notFound()
  }

  const isSanityStory = Boolean(sanityStory)

  const relatedStories = fallbackStories
    .filter((item) => slugify(item.title) !== slug)
    .slice(0, 3)

  const imageCredit = isSanityStory
    ? (story as FrontendStory).imageCredit
    : undefined

  const imageLicence = isSanityStory
    ? (story as FrontendStory).imageLicence
    : undefined

  const imageSourceUrl = isSanityStory
    ? (story as FrontendStory).imageSourceUrl
    : undefined

  const authorName =
    isSanityStory && (story as FrontendStory).author
      ? (story as FrontendStory).author
      : "Scorer254 Editorial Desk"

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

      <article>
        <section className="border-b border-white/10 bg-black">
          <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
            <Link
              href="/articles"
              className="mb-8 inline-flex text-xs font-black uppercase tracking-[0.25em] text-emerald-400 transition hover:text-emerald-300"
            >
              Back to articles
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wide">
              <span className="rounded-full bg-emerald-400 px-3 py-1 text-black">
                {story.category}
              </span>
              <span className="text-zinc-500">{story.date}</span>
              {story.location ? <span className="text-zinc-500">{story.location}</span> : null}
            </div>

            <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
              {story.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              {story.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-sm text-zinc-400">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-zinc-500">By</p>
                <p className="font-bold text-white">{authorName}</p>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-zinc-500">Section</p>
                <p className="font-bold text-white">{story.category}</p>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-zinc-500">Status</p>
                <p className="font-bold text-white">
                  {isSanityStory ? "CMS article" : "Mock article"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-6">
          <div>
            <div className="mb-4 h-[380px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-800 via-black to-emerald-950" />

            <p className="mb-10 text-xs font-medium uppercase tracking-wide text-zinc-500">
              {imageCredit || imageLicence
                ? [imageCredit, imageLicence].filter(Boolean).join(" / ")
                : "Image credit and licence information will appear here when connected to Sanity."}
            </p>

            {sanityPost?.body?.length ? (
              <PortableArticleBody value={sanityPost.body} />
            ) : (
              <div className="max-w-3xl space-y-6 text-lg leading-9 text-zinc-300">
                <p>
                  {isSanityStory
                    ? "This article is loading its headline, metadata and editorial fields from Sanity. Add body content in Sanity Studio to replace this placeholder."
                    : "This is a mock article page for the Scorer254 design system. The real article body will later come from Sanity, using the article schema already added to the project."}
                </p>
                <p>
                  The page is designed for football reporting, with space for context, interviews, match details, image credits and source links.
                </p>
                <p>
                  It should work for grassroots features, match reports, player profiles and local football investigations.
                </p>
                <p>
                  The goal is to keep the reading experience strong, fast and simple while preserving the football magazine feel of the homepage.
                </p>
              </div>
            )}

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
                <h2 className="text-lg font-black uppercase text-white">Source links</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {imageSourceUrl
                    ? "Image/source verification URL is available from Sanity."
                    : "Source links, match references or verification notes will appear here once the article is connected to Sanity."}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
                <h2 className="text-lg font-black uppercase text-white">Image rights</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {imageCredit || imageLicence
                    ? [imageCredit, imageLicence].filter(Boolean).join(" / ")
                    : "Credit line, licence, source URL and usage notes will appear here for uploaded or external images."}
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[1.5rem] border border-emerald-400/30 bg-emerald-400 p-5 text-black">
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Scorer254 focus
              </p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight">
                Football from the ground up
              </h2>
              <p className="mt-3 text-sm font-medium leading-6">
                Grassroots clubs, academies, county tournaments, player pathways and local football communities.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
              <h2 className="mb-4 text-xl font-black uppercase text-white">Article tools</h2>
              <div className="space-y-3 text-sm font-bold uppercase tracking-wide text-zinc-400">
                <p>Share article</p>
                <p>Save story</p>
                <p>Follow section</p>
              </div>
            </div>
          </aside>
        </section>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-12 lg:px-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
              Keep reading
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              Related Stories
            </h2>
          </div>
          <Link href="/articles" className="hidden text-sm font-bold uppercase tracking-wide text-zinc-400 hover:text-emerald-400 sm:block">
            View all
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {relatedStories.map((item) => (
            <ArticleCard key={item.id} story={item} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
