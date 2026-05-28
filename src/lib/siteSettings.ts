import type {SanitySiteSettings} from "@/sanity/lib/types"

export const fallbackSiteSettings: Required<
  Pick<
    SanitySiteSettings,
    | "siteName"
    | "tagline"
    | "defaultSeoTitle"
    | "defaultSeoDescription"
    | "footerText"
  >
> = {
  siteName: "Scorer254",
  tagline: "Football stories from Kenya and beyond",
  defaultSeoTitle: "Scorer254 - Kenyan football news and grassroots stories",
  defaultSeoDescription:
    "Scorer254 covers grassroots football, Kenyan soccer, player stories, match reports and regional football news.",
  footerText:
    "Football stories from Kenya, with regional and international coverage.",
}

export function mergeSiteSettings(settings?: SanitySiteSettings | null) {
  return {
    ...fallbackSiteSettings,
    ...settings,
  }
}
