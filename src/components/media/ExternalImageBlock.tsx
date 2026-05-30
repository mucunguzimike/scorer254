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
  const creditLine = [caption, credit, licence].filter(Boolean).join(" / ")

  return (
    <figure className="my-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
      <img
        src={url}
        alt={alt || caption || ""}
        loading="lazy"
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
