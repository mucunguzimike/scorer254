import {getSanityImageUrl} from "@/sanity/lib/imageUrl"
import type {SanityImageAsset} from "@/sanity/lib/types"

type StoryImageProps = {
  image?: string
  sanityImage?: SanityImageAsset
  alt?: string
  className?: string
}

export function StoryImage({
  image,
  sanityImage,
  alt = "",
  className = "h-44",
}: StoryImageProps) {
  const sanityImageUrl = getSanityImageUrl(sanityImage, 1400)
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
