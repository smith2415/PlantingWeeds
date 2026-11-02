# Change 3: InfoTracer page

Branch: `infotracer-page`, made from `main` after the Devious red change was
merged.

## Goal

Give InfoTracer, my claim-tracing tool, a home on this site. A visitor should
understand what it does in a minute, then be able to use it right on the
page without leaving Planting Weeds.

## What changed

1. **A new page, `/infotracer/`** (`infotracer.md`), linked from the header
   and footer between About and Work Experience. It explains the tool in
   three short paragraphs, then has a "Try it" section.
2. **The tool loads only when it's opened.** "Try it" uses the same open and
   close box as the document previews on the Home page. InfoTracer loads in
   a frame only when a visitor selects "Open it here", so the page itself
   still makes no requests to any other site, in keeping with the site's
   no-trackers choice.
3. **A new-tab button and a note** for browsers that won't keep someone
   logged in inside a frame (Safari does this). Without JavaScript the
   new-tab link still works.
4. **The address lives in one place:** `infotracer_url` in `_config.yml`.
5. **Styles** (`assets/css/site.css`): the tool's box is centered like the
   text but wider (64rem), because a tool needs more room than a paragraph.
   It reuses the document preview styles, so it matches in light and dark
   modes.
6. **Script** (`assets/js/site.js`): a few lines that create the frame on
   first open, like the PDF previews.

## What InfoTracer needed

Embedding needed a matching change in the InfoTracer repository: it only lets
this site (and itself) show it in a frame, its login cookie works inside the
frame over HTTPS, and it refuses forms sent from other websites. That change
must be merged and published on Replit before "Open it here" works.

The frame deliberately has no `sandbox` attribute. A sandboxed frame sends
its forms with no origin, which InfoTracer refuses as a precaution.

## Checked

- Rendered the page and opened it in Chromium in light mode, dark mode and
  at phone width (no sideways scrolling).
- With InfoTracer running on a different address from the page, signed up,
  stayed logged in, and added a claim, all inside the frame.
