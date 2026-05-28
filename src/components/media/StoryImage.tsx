import imageUrlBuilder from "@sanity/image-url"
import {client} from "@/sanity/lib/client"
import type {SanityImageAsset} from "@/sanity/lib/types"

const builder = imageUrlBuilder(client)

type StoryImageProps = {
  image?: string
  sanityImage?: SanityImageAsset
  alt?: string
  className?: string
}

function getSanityImageUrl(source?: SanityImageAsset) {
  if (!source?.asset?._ref) {
    return undefined
  }

  return builder.image(source).width(1400).auto("format").fit("max").url()
}

export function StoryImage({
  image,
  sanityImage,
  alt = "",
  className = "h-44",
}: StoryImageProps) {
  const sanityImageUrl = getSanityImageUrl(sanityImage)
  const src = image || sanityImageUrl

  if (!src) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-zinc-800 via-black to-emerald-950`}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className={`${className} overflow-hidden bg-zinc-900`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}
