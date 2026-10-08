# Planting Weeds

A website about Austin Schmid's work and philosophy on countering mis- and
disinformation.

Live site: <https://smith2415.github.io/PlantingWeeds/>

It is a static [Jekyll](https://jekyllrb.com/) site. GitHub Pages builds and
publishes it from the `main` branch and the `/` (root) folder every time a
change is pushed. There is no build step to run and nothing to install.

## Turning the site on (once)

In the repository on GitHub: **Settings → Pages → Build and deployment**. Set
**Source** to "Deploy from a branch", **Branch** to `main` and folder to
`/ (root)`, then **Save**. The site appears at the address above a minute or
two later.

## Where things are

| What | Where |
| --- | --- |
| Home page text | `index.md` |
| About page text | `about.md` |
| Work experience entries | `_data/experience.yml` |
| Contact details | `_data/contact.yml` |
| Pull quotes | `_data/quotes.yml` |
| The five slider examples | `_data/spot.yml` |
| The documents and their descriptions | `_data/documents.yml`, PDFs in `assets/docs/` |
| Header and footer links | `_data/navigation.yml` |
| Site title, description, address | `_config.yml` |
| Page templates | `_layouts/`, `_includes/` |
| Colors, fonts, spacing | `assets/css/site.css` (variables at the top) |
| Slider and PDF preview script | `assets/js/site.js` |

Content lives in Markdown and `_data` files. Design lives in `_layouts`,
`_includes` and `assets/css`. You can change one without touching the other.

## Updating the site

Edit a file on GitHub (pencil icon) or on your computer, then commit to
`main`. GitHub Pages rebuilds the site by itself.

### Still to fill in

Two pages ship with clearly marked placeholders because the details have not
been supplied yet. Nothing on them is real.

- **Work Experience**: replace the entries in `_data/experience.yml` and
  delete `placeholder: true` from each.
- **Contact**: fill in `_data/contact.yml` and delete `placeholder: true` from
  each row.

The "Placeholder" notice on each page disappears once no row is marked.

The slider also has two labelled image placeholders (steps 3 and 5).

### Add a pull quote

Add an entry to `_data/quotes.yml` with the exact wording, the source and the
page, then place it in a page with:

```liquid
{% include quote.html id="your-quote-id" %}
```

### Add a document

Put the PDF in `assets/docs/` and copy a block in `_data/documents.yml`.

### Add a page

Create a Markdown file with front matter (`layout: page`, `title`,
`permalink`) and add it to `_data/navigation.yml`.

### Links

Always write internal links with the `relative_url` filter so they work on
GitHub Pages and in local preview:

```liquid
[About]({{ '/about/' | relative_url }})
```

## Previewing on your own computer

You need Ruby 3 and Bundler.

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/>. The `Gemfile` uses the `github-pages` gem,
so the preview uses the same Jekyll version and plugins as the live site.

## Running Lighthouse

In Chrome, open the page, then **DevTools → Lighthouse → Analyze page load**.
Or from a terminal, with Node installed:

```sh
npx lighthouse https://smith2415.github.io/PlantingWeeds/ --view
```

Scores from a local build at the time of writing (mobile emulation):

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Home | 98 | 100 | 100 | 100 |
| About | 99 | 100 | 100 | 100 |
| Work Experience | 100 | 100 | 100 | 100 |
| Contact | 99 | 100 | 100 | 100 |

## Technical choices

- **Plain Jekyll, GitHub Pages defaults.** No framework, no `package.json`, no
  build pipeline. Plugins are limited to `jekyll-seo-tag` (SEO tags) and
  `jekyll-sitemap` (`sitemap.xml` and `robots.txt`), both supported by GitHub
  Pages.
- **`baseurl` is left empty.** This is a project repository, so the site lives
  under `/PlantingWeeds`. GitHub Pages supplies that path at build time, and
  every link uses `relative_url` or `absolute_url`, so the same files work
  live and locally.
- **Fonts are hosted in the repository** (Fraunces and Source Serif 4, both
  under the SIL Open Font License), so the site makes no third-party requests
  and has no trackers.
- **Light and dark themes** follow the visitor's device setting using CSS
  variables. No theme switcher, no stored preference.
- **JavaScript is one small file** used for the slider and for loading a PDF
  preview only when it is opened. Without JavaScript all five slider steps
  are shown in order and each document keeps its download link.
- **The fabricated examples are labelled.** Every slider example carries a
  "Fabricated example" label, and the outlets and people in them are invented.
  Do not replace them with real outlets or real people.

## Assumptions

- The name on the site is "Austin Schmid", as on both documents.
- Austin holds the rights to publish both PDFs in full (confirmed).
- The published article PDF is the corrected version ("twenty-first century"
  in the abstract).
- Page numbers on pull quotes are the page numbers printed in each document.
- The About page summarises the two documents and adds no claims of its own,
  other than the introduction Austin supplied.
