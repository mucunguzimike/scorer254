# Agent instructions for Scorer254

Read this file before making any change to this project.

## Project summary

Scorer254 is a Next.js football editorial site using Sanity as the CMS and Cloudflare Pages as the static hosting target.

The production site is:

```txt
https://scorer254.com
```

The GitHub repository is:

```txt
mucunguzimike/scorer254
```

The default branch is:

```txt
main
```

## Deployment model

This project is deployed as a static Cloudflare Pages site.

Do not assume Vercel deployment.
Do not use `next-on-pages` unless the project is deliberately migrated back to that model.
Do not use OpenNext deployment commands for the normal production deploy.

The normal GitHub Actions deployment builds the site and deploys the `out` directory to Cloudflare Pages.

The manual/static deploy shape is:

```bash
npm run build
npx wrangler pages deploy out --project-name scorer254 --branch main
```

The GitHub Actions workflow is at:

```txt
.github/workflows/deploy.yml
```

GitHub Actions requires:

```txt
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

These are stored as GitHub repository secrets under:

```txt
Settings -> Secrets and variables -> Actions -> Secrets
```

The Cloudflare Account ID currently used is:

```txt
697cb79008c2e4bdc8b24e8eb5dfce16
```

Wrangler v4 requires Node 22 or later in GitHub Actions.

## Cloudflare Pages config

The `wrangler.jsonc` file must stay valid for Pages static deploys.

For this project, do not put Workers/OpenNext bindings in `wrangler.jsonc` unless the whole deployment model is changed.

For Pages static deploys, the key required field is:

```json
{
  "name": "scorer254",
  "pages_build_output_dir": "out"
}
```

Do not add `account_id` to `wrangler.jsonc` for Pages deploys. Wrangler Pages validation rejects it.

Do not use an `ASSETS` binding in a Pages project. `ASSETS` is reserved.

## Sanity content model

Sanity article documents use `_type == "post"`.

Important article fields include:

```txt
title
slug
excerpt
publishedAt
isFeatured
contentDetails.coverageType
contentDetails.category
contentDetails.tags
contentDetails.author
footballDetails.teams
footballDetails.players
footballDetails.competition
footballDetails.region
imageSourceType
mainImage
externalImageUrl
imageSourceUrl
imageCredit
imageLicence
imageLicenceUrl
imageAltText
imageCaption
body
sourceLinks
seoTitle
seoDescription
```

The category document has:

```txt
title
slug
description
```

## Homepage behavior

The homepage should keep these rules:

```txt
Hero: 3 featured stories, using Sanity isFeatured first
Latest News: 4 newest articles
Editor's Picks: 9 articles, excluding the 4 already used in Latest News
```

When a new article is published, it should enter Latest News. The previous 4th Latest News item becomes eligible for Editor's Picks.

Do not duplicate the exact same articles in both Latest News and Editor's Picks.

Keep the Editor's Picks `Read more` button.

## Regional nav behavior

The Regional nav link points to:

```txt
/regional
```

The user wants this rule:

```txt
Any article whose Sanity category is Regional Football should appear on /regional.
```

Do not rely on `coverageType` for this behavior unless explicitly requested.

The important Sanity category is:

```txt
Category title: Regional Football
Expected slug: regional-football
```

If `/regional` is empty, first check whether the page queries or filters by `contentDetails.category->slug.current == "regional-football"` or equivalent mapped story fields.

## Rebuild after Sanity-only changes

Because the site is statically exported, Sanity content changes do not appear until a new deploy runs.

If only Sanity content changed and no repository file changed, trigger a new deployment with:

```bash
git commit --allow-empty -m "Trigger deploy after Sanity update"
git push origin main
```

## SEO files

Google Search Console verification file is stored in `public/`.

Sitemap and robots routes use Next.js metadata routes:

```txt
src/app/sitemap.ts
src/app/robots.ts
```

Because the project uses static export, these routes must be static-compatible.

If using `export const dynamic = "force-static"`, define it only once per file.

The sitemap should be available at:

```txt
https://scorer254.com/sitemap.xml
```

Robots should be available at:

```txt
https://scorer254.com/robots.txt
```

## Article layout rules

The user wants article title, excerpt, cover image, and body text aligned to the same width and right edge.

Avoid reintroducing a narrow body wrapper like:

```tsx
max-w-3xl
```

inside `PortableArticleBody` if it causes the body to be narrower than the cover image.

The user also wants the hardcoded sidebar block removed from article pages:

```txt
Scorer254 focus
Football from the ground up
Grassroots clubs, academies, county tournaments, player pathways and local football communities.
```

Related stories can be shown at the end of article pages, preferably by same Sanity category, excluding the current article.

## Command style preference

The user prefers one-shot Python commands for file edits.

Avoid heredocs.
Avoid `nano`.
Avoid `cat > file`.

Use commands like:

```bash
python3 -c 'from pathlib import Path; p=Path("file"); s=p.read_text(); ...; p.write_text(s)'
```

## Before suggesting a command

Check the repository file first when possible.

Avoid guessing deployment commands, branch names, or folder names.

Current confirmed values:

```txt
Branch: main
Cloudflare Pages project: scorer254
Static output directory: out
Node for GitHub Actions: 22
Production domain: https://scorer254.com
```
