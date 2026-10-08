# Planting Weeds: site plan

Status: **awaiting approval**. Nothing below is built yet.

## What this is

A portfolio site for Austin Schmid about his work and philosophy on countering
mis- and disinformation. Static Jekyll site, Markdown content with YAML front
matter, published by GitHub Pages from `main` and `/` (root).

Live address once Pages is switched on: `https://smith2415.github.io/PlantingWeeds/`

## Pages

| Page | Content |
| --- | --- |
| Home | Short intro (from the supplied About text), the "Can you spot disinformation?" slider, and the two documents with preview and download. |
| About | The philosophy: what disinformation is, why it works (targeted, convenient, emotional), how it spreads, the life cycle, the two-yachts case study in brief, and what to do about it (SCAME, media literacy, pre-bunking). Drawn only from the two documents. |
| Work Experience | **Placeholder** until experience entries are supplied. |
| Contact | **Placeholder** until contact details are supplied. No form backend; plain links only. |

Navigation in the header, footer on every page.

## The two documents

- *Planting Weeds: The Structure of Disinformation Campaigns and Why They Work* (corrected PDF, 29 pages)
- *The Final Crusade: A Study of the Crusades in ISIS Propaganda* (345 pages)

Each gets a title button that opens an in-page preview, a download link, and a
description underneath. The preview loads only when opened, so the large PDFs
do not slow the page down.

## Pull quotes

Verbatim quotes from the two documents, each with its source, used as full-width
breaks between sections. Stored in one data file (`_data/quotes.yml`) so they
can be edited without touching the design.

## "Can you spot disinformation?" slider

A five-step slider from **Obvious** to **Devious**. Each step shows a made-up
example that is harder to dismiss than the last, starting with "Aliens landed
in downtown LA" and ending with a polished newspaper-style paragraph with
named sources and citations. Each step has a "What makes this work" reveal
tied to the ideas on the About page.

Safeguards, because this page publishes fabricated content on purpose:

- Every example carries a visible "Fabricated example" label.
- The newspaper, people, and organisations are all invented. No real outlet,
  official, or person is named or imitated.
- Photos are labelled placeholder frames until images are supplied.

## Design

- Single column, responsive, checked at 375px and 1280px.
- Light and dark themes following the visitor's device setting.
- Type: scholarly but not stuffy. Fraunces (a warm, slightly quirky serif) for
  headings and Source Serif 4 for body text, both open-licensed and hosted in
  the repo, so no third-party requests.
- Garden-ledger palette: paper and ink, with a weed-green accent. Contrast
  meets WCAG AA in both themes.
- Semantic HTML, skip link, visible focus states, reduced-motion respected.

## Technical choices

- **Jekyll with the GitHub Pages defaults.** No build step, no `package.json`,
  no framework. Plugins limited to `jekyll-seo-tag` and `jekyll-sitemap`, both
  supported by GitHub Pages.
- **`baseurl` left empty.** Because this is a project repository, GitHub Pages
  fills in `/PlantingWeeds` at build time. Every link uses the `relative_url`
  or `absolute_url` filter so it works there and in local preview.
- **Layouts and includes** (`_layouts`, `_includes`) hold the design; page
  content lives in Markdown and `_data` files.
- **JavaScript** only for the slider and the document preview. Both degrade to
  readable content without it.
- SEO tags, `sitemap.xml`, `robots.txt`, and an SVG favicon.
- README covering how to update content, preview locally, and run Lighthouse.

## Assumptions

- The name on the site is "Austin Schmid", as on both documents.
- You hold the rights to publish both PDFs in full on this site.
- GitHub Pages will be set to deploy from `main` and `/` (root).
- A fifth section is not needed; the documents live on the Home page.

## Still needed from you

1. Work experience entries (titles, organisations, dates, descriptions).
2. Contact details to make public.
