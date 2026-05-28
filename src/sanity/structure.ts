import type {StructureResolver} from "sanity/structure"

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Scorer254 Studio")
    .items([
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("post").title("Articles"),
              S.documentTypeListItem("author").title("Authors"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("tag").title("Tags"),
            ])
        ),

      S.listItem()
        .title("Football Database")
        .child(
          S.list()
            .title("Football Database")
            .items([
              S.documentTypeListItem("team").title("Teams"),
              S.documentTypeListItem("player").title("Players"),
              S.documentTypeListItem("competition").title("Competitions"),
              S.documentTypeListItem("region").title("Regions / Counties"),
            ])
        ),

      S.listItem()
        .title("Settings")
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                    .title("Site Settings")
                ),
            ])
        ),
    ])
