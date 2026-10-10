# Change 1: Job highlights

Branch: `Job-Highlights`. Not yet pushed or merged into `main`.

## Goal

Make the Work Experience page show my credentials in information warfare,
not just my job titles. The first version listed roles and dates with
generic descriptions and placeholders. This change replaces the placeholders
with what I actually did: leading Psychological Operations soldiers on a
global deployment, serving as information operations lead, analyzing
information landscapes, threats and target audiences, planning PSYOP
training, and working on counter-disinformation and crisis response at
Edelman Smithfield. It also shows that I bridge military and civilian
practice, through the joint US Army-Edelman tabletop exercise I created.

A visitor should come away understanding that my perspective on
disinformation comes from hands-on operational experience as well as
research.

## Plan

All content changes are in `_data/experience.yml`. The page template does
not change: each role's `placeholder: true` is replaced by a `points` list,
and the "Placeholder" notice at the top of the page disappears once no role
is marked.

| Role | Change |
| --- | --- |
| Hiring Our Heroes Fellow | Two highlights: project support (M&A, social impact, crisis response, counter disinformation) and the joint US Army-Edelman tabletop exercise. |
| Assistant Operations Officer | One highlight: planning and executing training exercises for PSYOP detachments and companies. |
| Psychological Operations Detachment Commander | One highlight: leading 12 soldiers on a decentralized global deployment, information operations lead for two units, 89 successful missions. |
| Group Assistant Operations Officer | One highlight: supporting command and control of PSYOP missions across the globe. |
| Student, US Army Special Warfare Center and School | No highlight. The description becomes: "Specially selected for training at the U.S. Army John F. Kennedy Special Warfare Center and School to become a Psychological Operations Officer." |
| Infantry Stryker Company Executive Officer | One highlight: commanding a company of 152 personnel and 19 vehicles in the commander's absence. |
| Infantry Platoon Leader | One highlight: commanding over 50 soldiers defending 2 bases in Afghanistan. |

### Decisions

- Highlights use my wording as supplied. Only end-of-sentence periods were
  added where missing.
- The Hiring Our Heroes text is split into two bullet points, one per
  sentence, so the tabletop exercise stands out.
- The Infantry Platoon Leader description no longer says "roughly 30 to 40
  soldiers". That was a typical platoon size, and it contradicted the real
  figure of over 50 in the highlight.
- The role title "Group Assistant Operations Officer" is unchanged from
  LinkedIn, although the highlight was supplied under "Group Operations
  Officer". Change the title in `_data/experience.yml` if it should read
  differently.
- The README's "Still to fill in" section no longer lists Work Experience.

## Checks

- Site builds; the Work Experience page shows every highlight and no
  placeholder notice.
- No sideways scrolling at 375px or 1280px.
- Lighthouse on the Work Experience page: 100 for Performance,
  Accessibility, Best Practices and SEO.
- `Change1.md` is excluded from the published site, like `PLAN.md`.

## Next step

Review the branch, then push it and merge into `main` to publish.
