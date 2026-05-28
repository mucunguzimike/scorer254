# Scorer254

Scorer254 is a football-first digital publication focused on grassroots football stories from Kenya, with regional and international coverage.

The project is built with Next.js, Sanity CMS and Cloudflare Workers. It gives editors an online CMS through Sanity Studio while keeping the public site fast, structured and SEO-ready.

## Live demo

Temporary frontend:

https://scorer254.mucunguzi-richard.workers.dev

Sanity Studio:

https://scorer254.sanity.studio

## Project status

This project is in active development.

Implemented:

- Football-news homepage design
- Article archive page
- Dynamic article pages
- Section pages
- Sanity CMS integration
- Hosted Sanity Studio
- Portable Text article body rendering
- Inline article images
- Normal links
- Source/reference links
- Affiliate/sponsored links
- Image credit and licence fields
- SEO metadata
- Article JSON-LD structured data
- robots.txt
- sitemap.xml
- Branded 404 page
- Starter CMS seed script
- CMS content handoff checklist
- Cloudflare Workers deployment

Pending:

- Move deployment from developer Cloudflare account to customer Cloudflare account
- Add final custom domain
- Update NEXT_PUBLIC_SITE_URL to final production domain
- Add final domain to Sanity CORS
- Add final OpenGraph image
- Add favicon/app icon polish
- Add more real editorial content
- Optional preview/draft workflow
- Optional newsletter integration
- Optional search

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Sanity CMS
- Portable Text
- Cloudflare Workers
- OpenNext Cloudflare adapter
- Wrangler
- GitHub

## CMS architecture

The Sanity content model includes:

- Articles
- Authors
- Categories
- Tags
- Teams
- Players
- Competitions
- Regions / Counties
- Site Settings

The article schema supports:

- Title
- Slug
- Excerpt
- Publish date
- Author
- Category
- Tags
- Coverage type
- Teams mentioned
- Players mentioned
- Competition
- Region / County
- Match date
- Match result
- Venue
- Main image upload
- External image URL
- Image source URL
- Image credit
- Image licence
- Image alt text
- Image caption
- Portable Text body
- Source links
- SEO title
- SEO description

## Editorial sections

The site currently includes:

- Home
- Articles
- Grassroots
- Kenya
- Matches
- Players
- Regional
- World

Section routing is controlled through Sanity fields.

Grassroots page:

- coverageType = grassroots

Kenya page:

- coverageType = local-kenya

Regional page:

- coverageType = east-africa

World page:

- coverageType = international
- coverageType = african-football

Matches page:

- category slug = match-reports

Players page:

- category slug = player-profiles

## Local setup

Install dependencies:

    npm install

Run the development server:

    npm run dev

Open:

    http://localhost:3000

## Environment variables

Create .env.local:

    NEXT_PUBLIC_SANITY_PROJECT_ID="xsp8ugay"
    NEXT_PUBLIC_SANITY_DATASET="production"
    NEXT_PUBLIC_SITE_URL="https://scorer254.mucunguzi-richard.workers.dev"

For production, update NEXT_PUBLIC_SITE_URL to the final domain.

## Sanity Studio

Sanity Studio is deployed separately from the Cloudflare frontend:

https://scorer254.sanity.studio

This keeps the Cloudflare Worker bundle smaller and avoids embedding the full Studio inside the public app.

Deploy Studio:

    npx sanity deploy

## Seed starter CMS content

The project includes an optional seed script for starter categories, regions, competitions, site settings and the default author.

Create a Sanity token with write access, then run:

    SANITY_WRITE_TOKEN="your-token-here" npm run seed:cms

The script creates:

- Starter categories
- Starter regions/counties
- Starter competitions
- Scorer254 Editorial Desk author
- Site Settings document

## Cloudflare deployment

Build locally:

    npm run build

Preview with Cloudflare/OpenNext:

    npm run preview

Deploy:

    npm run deploy

Current temporary deployment:

https://scorer254.mucunguzi-richard.workers.dev

Before production, this should be moved to the customer’s Cloudflare account.

## Production notes

Before final launch:

- Move Cloudflare deployment to the customer account
- Add the final custom domain
- Update NEXT_PUBLIC_SITE_URL
- Add the final domain to Sanity CORS
- Confirm robots.txt uses the final domain
- Confirm sitemap.xml uses the final domain
- Confirm article metadata and JSON-LD output
- Remove temporary test articles
- Confirm Studio permissions for the customer

## Documentation

Additional internal documentation:

- docs/CMS_STARTER_GUIDE.md
- docs/CONTENT_HANDOFF_CHECKLIST.md

## Portfolio note

This project demonstrates:

- CMS-driven editorial site architecture
- Sanity schema design
- Sports publication information architecture
- Cloudflare Workers deployment
- Next.js App Router implementation
- SEO and structured data setup
- Client-friendly CMS workflow
- Content modelling for football journalism
