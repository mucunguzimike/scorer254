# Scorer254 project context

This document records the practical project context for future agents and contributors.

## What this project is

Scorer254 is a football blog/editorial website.

The design direction is graphics-first and sports-blog inspired. The site should not depend on expensive paid match photography. Use Sanity fields for image source, credit, licence, alt text, and caption.

The public domain is:

```txt
https://scorer254.com
```

The repository is:

```txt
https://github.com/mucunguzimike/scorer254
```

The default branch is:

```txt
main
```

## Tech stack

```txt
Next.js 16
React 19
Sanity CMS
Cloudflare Pages
Wrangler
TypeScript
Tailwind-style utility classes
```

The site is built with:

```bash
npm run build
```

The production deployment uploads the static `out` directory to Cloudflare Pages.

## Current deployment workflow

GitHub Actions deploys on push to `main`.

Workflow file:

```txt
.github/workflows/deploy.yml
```

Expected workflow behavior:

```txt
Checkout repo
Setup Node 22
npm ci
npm run build
npx wrangler pages deploy out --project-name scorer254 --branch main
```

Required GitHub secrets:

```txt
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

Do not ask the user to deploy with Vercel.
Do not suggest `.vercel/output/static` for the current setup.
Do not use `pages:build` unless the script is actually present in package.json.

## Sanity article model

Article type:

```txt
post
```

Key files:

```txt
src/sanity/schemaTypes/post.ts
src/sanity/schemaTypes/category.ts
src/sanity/lib/queries.ts
src/sanity/lib/fetchers.ts
src/sanity/lib/mappers.ts
src/sanity/lib/types.ts
```

Important editorial fields:

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
footballDetails.matchDate
footballDetails.matchResult
footballDetails.venue
body
sourceLinks
seoTitle
seoDescription
```

Important image-rights fields:

```txt
imageSourceType
mainImage
externalImageUrl
imageSourceUrl
imageCredit
imageLicence
imageLicenceUrl
imageAltText
imageCaption
```

## Homepage rules

Homepage file:

```txt
src/app/page.tsx
```

Expected homepage sections:

```txt
HeroSection
Editor's Picks
Latest News
Sidebar / tags if kept
```

Business rules:

```txt
Hero uses up to 3 featured stories from Sanity isFeatured.
Latest News shows the newest 4 articles.
Editor's Picks shows up to 9 articles and must exclude the 4 articles already used by Latest News.
Keep the Editor's Picks Read more button.
```

If the site has fewer than 13 articles, Editor's Picks can show fewer than 9. That is expected.

## Regional section rule

Regional page file:

```txt
src/app/regional/page.tsx
```

The user requirement is specific:

```txt
The Regional nav page must show articles categorized in Sanity as Regional Football.
```

Preferred matching rule:

```txt
contentDetails.category->slug.current == "regional-football"
```

or, when filtering mapped stories:

```txt
story.category === "Regional Football"
OR
story.categorySlug === "regional-football"
```

Do not use the article title or article slug to decide whether it appears in Regional.
Do not use `coverageType` for this page unless the user explicitly changes the requirement.

## Article page rules

Article page file:

```txt
src/app/articles/[slug]/page.tsx
```

Article body renderer:

```txt
src/components/article/PortableArticleBody.tsx
```

Expected article page SEO features:

```txt
generateStaticParams for all Sanity article slugs
generateMetadata using seoTitle, seoDescription, title, excerpt
canonical URL
Open Graph article metadata
Twitter card metadata
NewsArticle JSON-LD
```

Expected article layout:

```txt
Article heading, excerpt, cover image, and body text should share the same content width.
The body should not be narrower than the image.
```

Avoid reintroducing a narrow `max-w-3xl` around `PortableArticleBody` if it causes misalignment.

Remove this hardcoded sidebar block from article pages:

```txt
Scorer254 focus
Football from the ground up
Grassroots clubs, academies, county tournaments, player pathways and local football communities.
```

Related stories are desirable at the end of article pages:

```txt
Same Sanity category
Exclude current article
Limit to 3
```

## SEO setup

Google Search Console has been set up.

HTML verification file is in:

```txt
public/googlebe1dc98070f804f3.html
```

Sitemap and robots files are handled through:

```txt
src/app/sitemap.ts
src/app/robots.ts
```

Expected public URLs:

```txt
https://scorer254.com/sitemap.xml
https://scorer254.com/robots.txt
```

For static export, metadata routes must build successfully. Do not duplicate:

```ts
export const dynamic = "force-static"
```

## Static content refresh after Sanity edits

Because this is a static export, Sanity changes need a redeploy.

When only Sanity content changes, trigger a deploy with:

```bash
git commit --allow-empty -m "Trigger deploy after Sanity update"
git push origin main
```

## User command preferences

The user prefers precise commands and does not want several alternatives.

Use one-shot Python for file edits.

Avoid:

```txt
nano
cat heredocs
multi-option guessing
```

Prefer:

```bash
python3 -c 'from pathlib import Path; p=Path("..."); ...'
```

Before suggesting commands, inspect the repo when possible.

## Known mistakes to avoid

Do not confuse Cloudflare Account ID with API token.

Do not put `account_id` inside `wrangler.jsonc` for Pages config.

Do not add an `ASSETS` binding to Pages config.

Do not use Node 20 for Wrangler 4.95.0. Use Node 22.

Do not rerun old failed GitHub Action jobs when a new commit is needed. Open the latest run.

Do not assume Sanity content changes are live until GitHub Actions rebuilds and deploys.
