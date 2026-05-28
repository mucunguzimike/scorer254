type YouTubeEmbedProps = {
  url: string
  title: string
  caption?: string
}

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '')
    }

    if (parsed.searchParams.get('v')) {
      return parsed.searchParams.get('v')
    }

    const shortsMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/)
    if (shortsMatch?.[1]) {
      return shortsMatch[1]
    }

    const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/)
    if (embedMatch?.[1]) {
      return embedMatch[1]
    }

    return null
  } catch {
    return null
  }
}

export function YouTubeEmbed({url, title, caption}: YouTubeEmbedProps) {
  const videoId = getYouTubeId(url)

  if (!videoId) {
    return (
      <div className="my-8 rounded-[1.5rem] border border-red-400/30 bg-red-950/30 p-5 text-sm text-red-200">
        Invalid YouTube URL: {url}
      </div>
    )
  }

  return (
    <figure className="my-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {caption ? (
        <figcaption className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
