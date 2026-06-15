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
  tagline: "Unfiltered Football: Kenya and Beyond",
  defaultSeoTitle: "Scorer254 | Unfiltered Football: Kenya and Beyond",
  defaultSeoDescription:
    "Unfiltered Football: Kenya and Beyond — grassroots football, Kenyan soccer, player stories, match reports and regional coverage.",
  footerText:
    "Unfiltered Football: Kenya and Beyond",
}

export function mergeSiteSettings(settings?: SanitySiteSettings | null) {
  return {
    ...fallbackSiteSettings,
    ...settings,
  }
}
