# UI and UX skills instructions for Scorer254

Read this file before making frontend, layout, interaction, typography, spacing, homepage, article page, navigation, card, or visual-design changes.

These instructions supplement:

```txt
AGENTS.md
docs/PROJECT_CONTEXT.md
```

## Installed design skills to use

The user intends the agent to use these installed skills for UI and UX work:

```txt
emilkowalski/skill
pbakaus/impeccable
Leonxlnx/taste-skill, skill: design-taste-frontend
```

When available in the agent environment, use them before proposing or implementing frontend changes.

Expected installed skill names may include:

```txt
emil-design-eng
impeccable
design-taste-frontend
```

If the exact skill names differ, inspect the local skills list and use the matching UI/design/taste skills.

## How to use the skills

Before editing UI code, the agent should do this:

```txt
1. Read AGENTS.md.
2. Read docs/PROJECT_CONTEXT.md.
3. Read docs/UI_UX_SKILLS.md.
4. Activate or consult the installed UI/design skills.
5. Inspect the actual component files before changing anything.
6. Explain the concrete UI issue.
7. Apply one focused implementation.
8. Run npm run build before pushing.
```

## Design direction

Scorer254 should feel like a modern football editorial site:

```txt
sports-blog energy
clean editorial hierarchy
graphics-first presentation
strong headlines
clear article cards
mobile-first readability
fast static pages
simple navigation
credible article layout
```

Avoid generic SaaS or corporate UI patterns. The site should feel editorial, not like a dashboard.

## Current visual identity

Respect the current dark sports design unless the user explicitly asks for a redesign:

```txt
black / near-black background
white text
zinc neutral text
emerald accents
bold uppercase headings
rounded cards
image-led article cards
```

Do not introduce many new colors. Keep the current emerald accent unless instructed otherwise.

## Layout rules to preserve

Homepage:

```txt
Hero uses featured stories.
Latest News shows 4 newest articles.
Editor's Picks shows up to 9 articles and excludes Latest News stories.
Keep the Editor's Picks Read more button.
Do not duplicate stories between Latest News and Editor's Picks.
```

Article pages:

```txt
Article heading, excerpt, cover image, and body text should share the same content width.
The body text should align with the cover image on the right edge.
Do not reintroduce a narrow body wrapper that makes the body shorter than the cover image width.
Remove the hardcoded Scorer254 focus sidebar.
Related stories may appear at the end of article pages.
```

Section pages:

```txt
The Regional nav page must show articles categorized as Regional Football in Sanity.
Do not use article slug, title, or broad string matching to classify Regional stories.
```

## UX priorities

For every frontend change, optimize for:

```txt
clear hierarchy
readable line length
consistent spacing
clear click targets
mobile responsiveness
predictable navigation
no duplicated content blocks
no empty-looking sections when article count is low
fast loading
accessible alt text usage
```

## What not to do

Do not:

```txt
Guess the file structure.
Change deployment config while doing UI work.
Change Sanity schema validation unless explicitly asked.
Change content classification rules while doing layout work.
Introduce heavy animation libraries without approval.
Introduce paid image dependencies.
Break static export.
Use Vercel-specific assumptions.
Use broad filters that make section pages unreliable.
```

## Recommended frontend workflow

When the user asks for a UI/UX change:

```txt
1. Inspect the relevant component or route.
2. Identify the exact class/layout causing the issue.
3. Use the UI/design skills to refine spacing, hierarchy, and alignment.
4. Make the smallest code change that fixes the issue.
5. Run npm run build.
6. Commit with a precise message.
```

## Command preference

The user prefers one-shot Python edits.

Use this style:

```bash
python3 -c 'from pathlib import Path; p=Path("src/app/page.tsx"); s=p.read_text(); s=s.replace("old", "new"); p.write_text(s)'
```

Avoid:

```txt
nano
cat heredocs
large vague refactors
multiple alternative command paths
```
