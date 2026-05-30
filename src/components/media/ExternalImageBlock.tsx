"use client"

import {useState} from "react"

type ExternalImageBlockProps = {
  url: string
  alt?: string
  caption?: string
  credit?: string
  licence?: string
  sourceUrl?: string
}

export function ExternalImageBlock({
  url,
  alt,
  caption,
  credit,
  licence,
  sourceUrl,
}: ExternalImageBlockProps) {
  const [hasError, setHasError] = useState(false)
  const creditLine = [caption, credit, licence].filter(Boolean).join(" / ")

  if (hasError) {
    return (
      <figure className="my-8 rounded-[1.5rem] border border-amber-400/30 bg-amber-950/20 p-5">
        <p className="text-sm font-semibold leading-6 text-amber-200">
          This external image could not be loaded. Make sure the URL points directly to an image file, not to a webpage.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex text-sm font-bold text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
        >
          Open image URL
        </a>
      </figure>
    )
  }

  return (
    <figure className="my-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
      <img
        src={url}
        alt={alt || caption || ""}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-auto max-h-[620px] w-full object-cover"
      />

      {creditLine || sourceUrl ? (
        <figcaption className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500">
          {creditLine}
          {sourceUrl ? (
            <>
              {creditLine ? " / " : null}
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                Source
              </a>
            </>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  )
}
