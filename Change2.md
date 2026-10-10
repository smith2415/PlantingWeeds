# Change 2: Devious in red

Branch: `scroller-color-change`, made from `main` after the job highlights
were merged.

## Goal

Make the "Devious" end of the "Can you spot disinformation?" slider red, so
it is more obvious that the examples become more dangerous, and more devious,
as the slider moves right. Until now that end was a muted thistle purple,
which reads as decorative rather than as a warning.

## Plan

The colours are set once as variables at the top of `assets/css/site.css`.

1. Add a new colour variable, `--devious`, in red, with a light-mode and a
   dark-mode value.
2. Use it for the two things that mean "Devious":
   - the italic "Devious" label at the right end of the slider;
   - the right end of the slider track, so the track now runs from dandelion
     yellow through orange to red.
3. Leave the thistle purple everywhere else (the "Fabricated example" label,
   focus outlines and placeholder borders). Those mean "this is labelled" or
   "you are here", not "danger", so they should not turn red.

| Mode | Red | Contrast against the page |
| --- | --- | --- |
| Light | `#b3261e` | 5.9 : 1 |
| Dark | `#ff6b5e` | 6.2 : 1 |

Both pass the WCAG AA contrast requirement for text (4.5 : 1).

`Change2.md` is excluded from the published site, like `PLAN.md` and
`Change1.md`.

## Checks

- Site builds.
- Slider checked at Devious at 375px and 1280px, in light and dark mode. No
  sideways scrolling.
- Lighthouse on the Home page: Performance 98, Accessibility 100, Best
  Practices 100, SEO 100.

## Next step

Commit, push the branch, then merge into `main` to publish.
