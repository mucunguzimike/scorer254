# Scorer254 Content Handoff Checklist

This checklist marks the point where demo data is removed and the project is ready for real content entry.

## 1. CMS status

Sanity Studio:

- Studio URL: https://scorer254.sanity.studio
- Project ID: xsp8ugay
- Dataset: production

Required starter content:

- Site Settings created
- Scorer254 Editorial Desk author created
- Categories created
- Regions / Counties created
- Competitions created

## 2. Required article fields

Every published article must include:

- Article title
- Article URL / slug
- Short summary
- Publish date
- Author
- Category
- Coverage type
- Article body
- SEO description

Optional but recommended:

- SEO title
- Teams mentioned
- Players mentioned
- Competition
- Region / County
- Match date
- Match result
- Venue
- Source links

## 3. Image requirements

If an article uses an image, the editor must add:

- Image source type
- External image URL or uploaded image
- Image source page URL
- Image credit
- Image licence / permission
- Image alt text
- Caption if relevant

Recommended image practice:

- Prefer external/licensed images or images owned by the publication
- Avoid unnecessary manual uploads on the free tier
- Compress images before upload
- Keep article images around 1200px wide
- Do not publish uncredited images

## 4. Section routing rules

Homepage sections and section pages depend on Sanity values.

Grassroots page:

- Coverage type: grassroots
- Or category slug: grassroots-football

Kenya page:

- Coverage type: local-kenya

Regional page:

- Coverage type: east-africa

World page:

- Coverage type: international
- Or coverage type: african-football

Matches page:

- Category slug: match-reports

Players page:

- Category slug: player-profiles

## 5. Links inside articles

Editors can add:

- Normal links
- Source / reference links
- Affiliate / sponsored links

Affiliate links should only be used where the commercial relationship is clear. The frontend renders affiliate links with sponsored and nofollow attributes.

## 6. Pre-publication checklist

Before publishing each article:

- Headline is clear
- Summary is filled
- Slug is clean and readable
- Author is selected
- Category is selected
- Coverage type is selected
- Body is complete
- Image rights are complete if an image is used
- SEO description is filled
- Source links are added where needed
- Article preview has been checked on mobile and desktop

## 7. Temporary deployment

Current temporary frontend URL:

https://scorer254.mucunguzi-richard.workers.dev

This is hosted on the developer Cloudflare account and should be moved to the customer Cloudflare account before final production use.

## 8. Final production tasks

Before launch:

- Move Cloudflare deployment to customer account
- Add final custom domain
- Update NEXT_PUBLIC_SITE_URL to final domain
- Add final domain to Sanity CORS
- Confirm robots.txt uses final domain
- Confirm sitemap.xml uses final domain
- Confirm article pages have correct metadata
- Confirm Sanity Studio access for the customer
- Remove temporary test articles
- Confirm no demo data remains
