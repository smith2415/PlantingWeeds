# Change 4: InfoTracer open on arrival

Branch: `infotracer-open`, made from `main` after the InfoTracer page was
merged.

## Goal

Have InfoTracer already open when someone visits its page, instead of
behind an "Open it here" box, and keep the "Open InfoTracer in a new tab"
button below it. Along the way, make the embed as quick and dependable as it
can be.

## What changed

1. **InfoTracer is open by default.** The frame is written straight into the
   page, so it no longer needs JavaScript. The page now loads no JavaScript
   at all, and the InfoTracer code in `assets/js/site.js` is removed.
2. **"Starting InfoTracer" note.** InfoTracer runs on Replit, which puts it
   to sleep when nobody is using it, so the first visit in a while can take
   several seconds. The frame sits on top of a short note that says so; the
   note shows only until InfoTracer's own page covers it, and it still makes
   sense if the frame never loads.
3. **Faster connection.** The page tells the browser to start connecting to
   InfoTracer while the rest of the page loads (`preconnect`, only on this
   page, using `infotracer_url` from `_config.yml`).
4. **Loads only when it's about to be seen** (`loading="lazy"`). On a phone,
   where the tool is below the fold, it doesn't load until the visitor
   scrolls toward it.
5. **No jumping.** The frame's box has a fixed height, so nothing moves when
   InfoTracer appears.
6. **Wording:** the description mentions highlighting important posts,
   InfoTracer's new mark alongside seed and weed.
7. **README:** the "no third-party requests" note now names this page as the
   one exception.

## Checked

- Rendered the page and opened it in Chromium with InfoTracer on a different
  address: the "Starting" note while InfoTracer wasn't answering, then
  sign-up and adding a claim inside the frame.
- Phone width in dark mode: no sideways scrolling, and the frame loads only
  once scrolled near.
- No layout shift while the frame loads.
