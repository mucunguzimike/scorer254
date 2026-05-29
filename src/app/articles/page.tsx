import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import {ArticleCard} from "@/components/article/ArticleCard"
import {EmptyState} from "@/components/common/EmptyState"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {getLatestStories, getSiteSettings} from "@/sanity/lib/fetchers"

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteUrl}/articles`,
  },
  title: "Latest Stories",
  description:
    "Latest football stories from Scorer254, covering grassroots football, Kenyan soccer, player profiles, match reports and regional football.",
  openGraph: {
    title: "Latest Stories | Scorer254",
    description:
      "Latest football stories from Scorer254, covering grassroots football, Kenyan soccer, player profiles, match reports and regional football.",
  },
}

export default async function ArticlesPage() {
  const [stories, siteSettings] = await Promise.all([getLatestStories(), getSiteSettings()])

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header settings={siteSettings} />

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <p className="mb-3 text-xs font-heading font-black uppercase tracking-[0.25em] text-emerald-400">
            Scorer254 archive
          </p>
          <h1 className="text-5xl font-heading font-black uppercase tracking-tight text-white lg:text-7xl">
            Latest Stories
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Grassroots football, Kenyan soccer, player stories, match reports and regional coverage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
        {stories.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <ArticleCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No articles published yet"
            description="Published articles from Sanity Studio will appear here."
          />
        )}
      </section>

      <Footer settings={siteSettings} />
    </main>
  )
}
