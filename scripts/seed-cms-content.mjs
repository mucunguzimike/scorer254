import {createClient} from "@sanity/client"

const projectId = process.env.SANITY_PROJECT_ID || "xsp8ugay"
const dataset = process.env.SANITY_DATASET || "production"
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  console.error("")
  console.error("Missing SANITY_WRITE_TOKEN.")
  console.error("Create a Sanity token with write access, then run:")
  console.error("SANITY_WRITE_TOKEN='your-token' npm run seed:cms")
  console.error("")
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-05-28",
  useCdn: false,
})

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const categories = [
  ["Grassroots Football", "Stories from community clubs, academies, school teams and local tournaments."],
  ["Kenyan Football", "Domestic Kenyan football coverage, clubs, leagues and local football news."],
  ["Match Reports", "Match reports, previews, fixtures and competition updates."],
  ["Player Profiles", "Profiles of players, prospects and football journeys."],
  ["Women’s Football", "Coverage of women’s football in Kenya and beyond."],
  ["Youth Football", "School football, academies, youth competitions and development pathways."],
  ["Transfers", "Transfer news, rumours, signings and squad changes."],
  ["Regional Football", "East African football coverage and regional competitions."],
  ["World Football", "International football and global football stories."],
  ["Opinion", "Columns, analysis and editorial views."],
  ["Club Stories", "Stories about clubs, academies and community teams."],
]

const regions = [
  ["Nairobi", "county"],
  ["Mombasa", "county"],
  ["Kisumu", "county"],
  ["Kakamega", "county"],
  ["Nakuru", "county"],
  ["Uasin Gishu", "county"],
  ["Kiambu", "county"],
  ["Machakos", "county"],
  ["Meru", "county"],
  ["Nyeri", "county"],
  ["Kisii", "county"],
  ["Bungoma", "county"],
]

const competitions = [
  ["Kenyan Premier League", "Kenya", "national"],
  ["FKF National Super League", "Kenya", "national"],
  ["FKF Division One", "Kenya", "national"],
  ["FKF Women Premier League", "Kenya", "national"],
  ["Mozzart Bet Cup", "Kenya", "national"],
  ["CAF Champions League", "Africa", "continental"],
  ["CAF Confederation Cup", "Africa", "continental"],
  ["CECAFA Club Competitions", "East Africa", "regional"],
  ["AFCON", "Africa", "continental"],
  ["Premier League", "England", "international"],
  ["UEFA Champions League", "Europe", "international"],
]

async function main() {
  const transaction = client.transaction()

  for (const [title, description] of categories) {
    const slug = slugify(title)

    transaction.createIfNotExists({
      _id: `category.${slug}`,
      _type: "category",
      title,
      slug: {
        _type: "slug",
        current: slug,
      },
      description,
    })
  }

  for (const [name, regionType] of regions) {
    const slug = slugify(name)

    transaction.createIfNotExists({
      _id: `region.${slug}`,
      _type: "region",
      name,
      slug: {
        _type: "slug",
        current: slug,
      },
      country: "Kenya",
      regionType,
    })
  }

  for (const [name, country, level] of competitions) {
    const slug = slugify(name)

    transaction.createIfNotExists({
      _id: `competition.${slug}`,
      _type: "competition",
      name,
      slug: {
        _type: "slug",
        current: slug,
      },
      country,
      level,
      description: "",
    })
  }

  transaction.createIfNotExists({
    _id: "author.scorer254-editorial-desk",
    _type: "author",
    name: "Scorer254 Editorial Desk",
    slug: {
      _type: "slug",
      current: "scorer254-editorial-desk",
    },
    bio: "Editorial team covering grassroots football, Kenyan soccer and regional football stories.",
  })

  transaction.createIfNotExists({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Scorer254",
    tagline: "Football stories from Kenya and beyond",
    defaultSeoTitle: "Scorer254 - Kenyan football news and grassroots stories",
    defaultSeoDescription:
      "Scorer254 covers grassroots football, Kenyan soccer, player stories, match reports and regional football news.",
    footerText:
      "Football stories from Kenya, with regional and international coverage.",
  })

  const result = await transaction.commit()

  console.log("Seed completed.")
  console.log("Starter categories, regions, competitions, author and site settings are ready.")
  console.log(JSON.stringify(result, null, 2))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
