import type {StructureResolver} from "sanity/structure"

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Scorer254 Studio")
    .items([
      S.documentTypeListItem("post").title("Articles"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("tag").title("Tags"),
      S.documentTypeListItem("team").title("Teams"),
      S.documentTypeListItem("player").title("Players"),
      S.documentTypeListItem("competition").title("Competitions"),
      S.documentTypeListItem("region").title("Regions / Counties"),
      S.divider(),
      S.documentTypeListItem("siteSettings").title("Site Settings"),
    ])
