import type {Metadata} from "next"
import {siteUrl} from "@/lib/site"
import Link from "next/link"
import {ArticleCard} from "@/components/article/ArticleCard"
import {PortableArticleBody} from "@/components/article/PortableArticleBody"
import {StoryImage} from "@/components/media/StoryImage"
import {Footer} from "@/components/layout/Footer"
import {Header} from "@/components/layout/Header"
import {getAllPostSlugs, getPostBySlug, getSiteSettings, getStoriesByCategorySlug} from "@/sanity/lib/fetchers"
import {getSanityImageUrl} from "@/sanity/lib/imageUrl"
import {mapPostToStory} from "@/sanity/lib/mappers"
import {notFound} from "next/navigation"


export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({params}: ArticlePageProps): Promise<Metadata> {
  const {slug} = await params
  const [sanityPost, siteSettings] = await Promise.all([getPostBySlug(slug), getSiteSettings()])

  if (!sanityPost) {
    return {
      title: "Article not found",
      description: "The requested Scorer254 article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const story = mapPostToStory(sanityPost)
  const title = sanityPost.seoTitle || story.title
  const description =
    sanityPost.seoDescription ||
    story.excerpt ||
    "Football story from Scorer254."

  const canonicalUrl = `${siteUrl}/articles/${slug}`

  const uploadedImageUrl = sanityPost.mainImage
    ? getSanityImageUrl(sanityPost.mainImage, 1200, 630)
    : undefined

  const imageUrl =
    sanityPost.imageSourceType === "external" && sanityPost.externalImageUrl
      ? sanityPost.externalImageUrl
      : uploadedImageUrl || "/logo.png"

  const authorName =
    story.author ||
    sanityPost.contentDetails?.author?.name ||
    "Scorer254 Editorial Desk"

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Scorer254",
      type: "article",
      publishedTime: sanityPost.publishedAt,
      authors: [authorName],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: sanityPost.imageAltText || story.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

function createArticleJsonLd({
  title,
  description,
  url,
  image,
  author,
  publishedAt,
  updatedAt,
}: {
  title: string
  description: string
  url: string
  image: string
  author: string
  publishedAt?: string
  updatedAt?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    url,
    image: [image],
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Scorer254",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }
}

export default async function ArticlePage({params}: ArticlePageProps) {
  const {slug} = await params
  const [sanityPost, siteSettings] = await Promise.all([
    getPostBySlug(slug),
    getSiteSettings(),
  ])

  if (!sanityPost) {
    notFound()
  }

  const story = mapPostToStory(sanityPost)
  const imageCredit = story.imageCredit
  const imageLicence = story.imageLicence
  const storyMainImage = story.mainImage
  const storyImageAltText = story.imageAltText || story.title
  const authorName: string = story.author || "Scorer254 Editorial Desk"

  const articleUrl = `${siteUrl}/articles/${slug}`
  const uploadedImageUrl = sanityPost.mainImage
    ? getSanityImageUrl(sanityPost.mainImage, 1200, 630)
    : undefined
  const articleImageUrl =
    sanityPost.imageSourceType === "external" && sanityPost.externalImageUrl
      ? sanityPost.externalImageUrl
      : uploadedImageUrl || `${siteUrl}/logo.png`
  const articleDescription =
    sanityPost.seoDescription || story.excerpt || "Football story from Scorer254."

  const relatedStories = story.categorySlug
    ? (await getStoriesByCategorySlug(story.categorySlug))
        .filter((relatedStory) => relatedStory.id !== story.id)
        .slice(0, 3)
    : []

  const articleJsonLd = createArticleJsonLd({
    title: sanityPost.seoTitle || story.title,
    description: articleDescription,
    url: articleUrl,
    image: articleImageUrl,
    author: authorName,
    publishedAt: sanityPost.publishedAt,
    updatedAt: sanityPost._updatedAt,
  })

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}}
      />
      <Header settings={siteSettings} />

      <article>
        <section className="border-b border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
            <Link
              href="/articles"
              className="mb-8 inline-flex text-xs font-heading font-black uppercase tracking-[0.25em] text-emerald-400 transition hover:text-emerald-300"
            >
              Back to articles
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-heading font-black uppercase tracking-wide">
              <span className="rounded-full bg-emerald-400 px-3 py-1 text-black">
                {story.category}
              </span>
              <span className="text-zinc-500">{story.date}</span>
              {story.location ? <span className="text-zinc-500">{story.location}</span> : null}
            </div>

            <h1 className="max-w-5xl text-4xl font-heading font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {story.title}
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg">
              {story.excerpt}
            </p>

            <div className="mt-8 flex max-w-5xl flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-sm text-zinc-400">
              <div>
                <p className="text-xs font-heading font-black uppercase tracking-wide text-zinc-500">By</p>
                <p className="font-bold text-white">{authorName}</p>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <p className="text-xs font-heading font-black uppercase tracking-wide text-zinc-500">Section</p>
                <p className="font-bold text-white">{story.category}</p>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <p className="text-xs font-heading font-black uppercase tracking-wide text-zinc-500">Status</p>
                <p className="font-bold text-white">Published article</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
          <div>
            <div className="mb-4 overflow-hidden rounded-[2rem] border border-white/10">
              <StoryImage
                image={story.image}
                sanityImage={storyMainImage}
                alt={storyImageAltText}
                className="h-[360px]"
              />
            </div>

            <p className="mb-10 text-xs font-medium uppercase tracking-wide text-zinc-500">
              {imageCredit || imageLicence
                ? [imageCredit, imageLicence].filter(Boolean).join(" / ")
                : "Image credit and licence information can be added in Sanity Studio."}
            </p>

            {sanityPost.body?.length ? (
              <PortableArticleBody value={sanityPost.body} />
            ) : (
              <div className="max-w-3xl space-y-6 text-lg leading-9 text-zinc-300">
                <p>
                  This article has metadata but no body content yet. Add article body content in Sanity Studio.
                </p>
              </div>
            )}

            {relatedStories.length ? (
              <section className="mt-14 border-t border-white/10 pt-8">
                <div className="mb-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-400">
                    Related Stories
                  </p>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-white">
                    More from {story.category}
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {relatedStories.map((relatedStory) => (
                    <ArticleCard key={relatedStory.id} story={relatedStory} />
                  ))}
                </div>
              </section>
            ) : null}

          </div>

        </section>
      </article>



      <Footer settings={siteSettings} />
    </main>
  )
}
