import {PortableText} from "@portabletext/react"
import type {PortableTextComponents} from "@portabletext/react"
import {StoryImage} from "@/components/media/StoryImage"
import type {SanityImageAsset} from "@/sanity/lib/types"

const components: PortableTextComponents = {
  block: {
    h2: ({children}) => (
      <h2 className="pt-6 text-3xl font-black uppercase leading-tight text-white">
        {children}
      </h2>
    ),
    h3: ({children}) => (
      <h3 className="pt-4 text-2xl font-black uppercase leading-tight text-white">
        {children}
      </h3>
    ),
    normal: ({children}) => (
      <p className="text-lg leading-9 text-zinc-300">
        {children}
      </p>
    ),
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-emerald-400 pl-5 text-xl font-semibold leading-9 text-zinc-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="ml-5 list-disc space-y-3 text-lg leading-8 text-zinc-300">
        {children}
      </ul>
    ),
    number: ({children}) => (
      <ol className="ml-5 list-decimal space-y-3 text-lg leading-8 text-zinc-300">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({children, value}) => {
      const href = value?.href || "#"
      const openInNewTab = value?.openInNewTab !== false

      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className="font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
        >
          {children}
        </a>
      )
    },
    sourceLink: ({children, value}) => {
      const href = value?.href || "#"

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200"
          title={value?.label || "Source link"}
        >
          {children}
        </a>
      )
    },
    affiliateLink: ({children, value}) => {
      const href = value?.href || "#"
      const disclosure = value?.disclosure || "Affiliate link"

      return (
        <span className="inline-flex flex-wrap items-center gap-2">
          <a
            href={href}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="font-semibold text-amber-300 underline underline-offset-4 hover:text-amber-200"
            title={disclosure}
          >
            {children}
          </a>
          <span className="rounded-full border border-amber-300/30 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-amber-300">
            {disclosure}
          </span>
        </span>
      )
    },
    strong: ({children}) => (
      <strong className="font-black text-white">{children}</strong>
    ),
    em: ({children}) => (
      <em className="italic text-zinc-100">{children}</em>
    ),
  },
  types: {
    image: ({value}) => {
      const image = value as SanityImageAsset & {
        caption?: string
        credit?: string
        alt?: string
      }

      return (
        <figure className="my-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
          <StoryImage
            sanityImage={image}
            alt={image?.alt || image?.caption || ""}
            className="h-80"
          />
          {image?.caption || image?.credit ? (
            <figcaption className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500">
              {[image?.caption, image?.credit].filter(Boolean).join(" / ")}
            </figcaption>
          ) : null}
        </figure>
      )
    },
  },
}

type PortableArticleBodyProps = {
  value: unknown[]
}

export function PortableArticleBody({value}: PortableArticleBodyProps) {
  return (
    <div className="max-w-3xl space-y-6">
      <PortableText value={value} components={components} />
    </div>
  )
}
