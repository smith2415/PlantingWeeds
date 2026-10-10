# Change 3: Learning tools

Branch: `learning-tools`, made from `main` after both pull requests were
merged. Not yet merged into `main`.

## Goal

Turn more of the site from something you read into something you do, so
visitors practise spotting and checking disinformation rather than just
reading about it.

## What changed

1. **A second slider story.** The "Can you spot disinformation?" slider now
   has a story picker. Next to the palm-tree story there is a fuel-shortage
   story, told at the same five levels. It shows something the first story
   doesn't: a rumor can make itself come true. Panic buying creates real
   lines, and those real lines then become the "evidence" for the next, more
   believable version. Every name, outlet and organization is invented, and
   every step carries the "Fabricated example" label. Steps 3 and 5 have
   image placeholders.
2. **The laundering chain diagram.** On the About page, under "A tale of two
   yachts", a diagram traces the yacht story from the Russian propagandist,
   through each layer, to a supporter reading it four steps removed. Taken
   from the chain in *Planting Weeds*, p. 17.
3. **An interactive SCAME checklist.** Under "Pulling weeds", the five SCAME
   questions are now a checklist. Visitors tick the questions they answer
   "yes" to about something they have seen, and get a count of their flags.

## How it is built

- New content lives in data files: `_data/spot.yml` (now a list of stories),
  `_data/laundering.yml` and `_data/scame.yml`. The new includes are
  `_includes/laundering.html` and `_includes/scame.html`.
- The JavaScript in `assets/js/site.js` grew slightly, to handle the story
  picker and the checklist count. Without JavaScript, every story and step
  is shown in order and the checklist can still be ticked.

## Checks

- Site builds; both stories, the diagram and the checklist render.
- Story picker, slider, checklist count and Clear button work, including
  with the keyboard.
- No sideways scrolling at 375px or 1280px, in light and dark mode.
- Lighthouse on Home and About: Performance 98, Accessibility 100, Best
  Practices 100, SEO 100.
