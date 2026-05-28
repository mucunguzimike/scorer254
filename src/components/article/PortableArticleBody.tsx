import {PortableText} from "@portabletext/react"
import type {PortableTextComponents} from "@portabletext/react"

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
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
        >
          {children}
        </a>
      )
    },
    strong: ({children}) => (
      <strong className="font-black text-white">{children}</strong>
    ),
  },
  types: {
    image: ({value}) => (
      <figure className="my-8 rounded-[1.5rem] border border-white/10 bg-zinc-950 p-4">
        <div className="h-72 rounded-xl bg-gradient-to-br from-zinc-800 via-black to-emerald-950" />
        {value?.caption || value?.credit ? (
          <figcaption className="mt-3 text-xs uppercase tracking-wide text-zinc-500">
            {[value?.caption, value?.credit].filter(Boolean).join(" / ")}
          </figcaption>
        ) : null}
      </figure>
    ),
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
