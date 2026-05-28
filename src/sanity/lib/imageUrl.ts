import {createImageUrlBuilder} from "@sanity/image-url"
import {client} from "@/sanity/lib/client"
import type {SanityImageAsset} from "@/sanity/lib/types"

const builder = createImageUrlBuilder(client)

export function getSanityImageUrl(
  source?: SanityImageAsset,
  width = 1200,
  height?: number
) {
  if (!source?.asset?._ref) {
    return undefined
  }

  const image = builder.image(source).width(width).auto("format").fit("max")

  if (height) {
    return image.height(height).url()
  }

  return image.url()
}
