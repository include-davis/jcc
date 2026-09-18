# CMS Content Schemas — JCC Frontend

This documents the collections/singletons the frontend expects, so the CMS
(`include-cms-consumer`, built with `@include/hearth`) can be scaffolded to
match. Field names below are exactly what the frontend's fetch functions map
from — keeping them in sync avoids a naming round-trip later.

Every collection is fetched with `next: { tags: ["cms"] }`, so a `GET` to
`/api/revalidate` on this frontend invalidates all of them at once (see
`src/app/api/revalidate/route.js`). If per-collection revalidation is wanted
later, that's a separate tag per collection — not set up yet, out of scope
for now.

The frontend is fully on the App Router now, under `src/app/(pages)/`. All
fetch functions + fallback data live in `src/app/(pages)/_data/`, one file
per domain.

**Open question before building**: a few domains below need either a
**repeatable list of sub-items within one entry** (e.g. a committee's 4–8
past-event photos) or a **relation between two collections**. The example
schema we were given only documents three field types — `MEDIA_LIST`,
`SHORT_TEXT`, `LONG_TEXT` — with no repeater or relation type mentioned. If
hearth has one of those, use it and ignore the "child collection" workaround
noted inline. If not, the workaround (a second collection + a plain
`SHORT_TEXT` field storing the parent's `key`/`year` to correlate) is what's
described below.

---

## 1. `partnerships` (collection)

Frontend: `src/app/(pages)/_data/partnerships.js` → `getPartnerships()`.

| Field | Type | Notes |
|---|---|---|
| `main_image` | MEDIA_LIST | Card image, 1 image expected |
| `title` | SHORT_TEXT | Partner org name |
| `description` | LONG_TEXT | |
| `website_link` | SHORT_TEXT | Full URL |

---

## 2. `committees` (collection)

Frontend: `src/app/(pages)/_data/committees.js` → `getCommittees()` / `getCommittee(key)`.

| Field | Type | Notes |
|---|---|---|
| `key` | SHORT_TEXT | URL slug — **must** match the frontend route, e.g. `dental`, `mental`, `physical`, `community`, `sexual`. Routes are `/committees/{key}`. |
| `name` | SHORT_TEXT | Display name, e.g. "Dental Health Committee" |
| `icon` | MEDIA_LIST | Small logo shown on the committee list page |
| `page_img` | MEDIA_LIST | Larger image shown on the committee's own page header |
| `description` | LONG_TEXT | |

### 2a. `committee_past_events` (child collection — workaround if no repeater/relation type)

Each committee's "Past Events" gallery holds 4–8 photos with a caption each.

| Field | Type | Notes |
|---|---|---|
| `committee_key` | SHORT_TEXT | Must match a `committees.key` value — this is how the frontend groups photos back to their committee |
| `image` | MEDIA_LIST | |
| `caption` | SHORT_TEXT | One line, shown on hover |

Note: Committees' own hero section is **not** in scope for a CMS-driven image carousel — it keeps a static circular JCC logo badge, unlike the other three pages below.

### 2b. `committee_members` (collection)

Frontend: `src/app/(pages)/_data/committees.js` → `getCommitteeMembers(key)`. One collection for both "lead" members (shown as a single row of 1–3, with photo/name/role/email) and regular members (shown in a grid, photo/name only) — split by `is_lead`.

| Field | Type | Notes |
|---|---|---|
| `committee_key` | SHORT_TEXT | Must match a `committees.key` value, same correlation pattern as `committee_past_events` |
| `name` | SHORT_TEXT | |
| `photo` | MEDIA_LIST | |
| `is_lead` | BOOLEAN | `"true"`/`"false"` — Expect 1–3 people per committee flagged true. |
| `role` | SHORT_TEXT | Only meaningful/shown for leads (e.g. "President") — leave blank for regular members |
| `email` | SHORT_TEXT | Only meaningful/shown for leads — leave blank for regular members. Displayed as plain text on the frontend, not a mailto link. |

Regular (non-lead) members: expect roughly 12–20 per committee, count is whatever the CMS returns — rendered in a 4-per-row grid.

---

## 3. `alumni` (collection)

Frontend: `src/app/(pages)/_data/alumni.js` → `getAlumni()`.

| Field | Type | Notes |
|---|---|---|
| `name` | SHORT_TEXT | |
| `workplace` | SHORT_TEXT | |
| `testimony` | LONG_TEXT | |
| `photo` | MEDIA_LIST | |

---

## 4. `history_years` (collection)

Frontend: `src/app/(pages)/_data/history.js` → `getHistoryYears()`. Two originally-separate arrays (`timelineData`, `additionalInfoData`) were merged into this one collection so there's a single source of truth per year.

| Field | Type | Notes |
|---|---|---|
| `year` | SHORT_TEXT | e.g. "2021" |
| `timeline_image` | MEDIA_LIST | The single photo shown in the vertical timeline entry |
| `description` | LONG_TEXT | Shown in the "Additional Information" expandable accordion |

Note: which side (left/right) each year's timeline card renders on is currently just alternated by array order on the frontend, not CMS-authored — no field needed for it unless you want manual control later.

### 4a. `history_year_photos` (child collection — workaround if no repeater/relation type)

The accordion's photo carousel (4–8 images per year, browsable 3 at a time).

| Field | Type | Notes |
|---|---|---|
| `year` | SHORT_TEXT | Must match a `history_years.year` value |
| `image` | MEDIA_LIST | |

---

## 5. `hero_slides` (collection)

Frontend: `src/app/(pages)/_data/home.js` → `getHeroSlides()`. This is the homepage's rotating hero banner — the only hero on the site with full slide content (title/subtitle/button) that changes per slide, not just a background image carousel.

| Field | Type | Notes |
|---|---|---|
| `image` | MEDIA_LIST | |
| `label` | SHORT_TEXT | Small eyebrow text, e.g. "OUR MISSION" |
| `title` | SHORT_TEXT | |
| `subtitle` | LONG_TEXT | |
| `button_text` | SHORT_TEXT | |
| `button_link` | SHORT_TEXT | Internal path, e.g. `/join` |
| `tags` | SHORT_TEXT | Only used on one slide today (pill labels: "Leadership, Humility, Empathy, Responsibility"). If there's no list-of-strings field type, store as a single comma-separated string and split on the frontend. |

Note: the homepage also shows a 5-card committee grid, but that's just the `committees` collection above re-rendered — it should **not** become its own collection, to avoid a 3rd copy of committee names/images.

---

## 6. `site_settings` (singleton)

Global site chrome — logo and a couple of standalone CTA links. Frontend: `src/app/(pages)/_data/site.js` → `getSiteSettings()`. Assumes the API returns this the same shape as a collection (`{ ok, body: [...] }`) and just reads `body[0]` — adjust once the real singleton API contract is confirmed, since hearth's singleton response shape hasn't been verified yet.

| Field | Type | Notes |
|---|---|---|
| `logo` | MEDIA_LIST | Used in the navbar, footer, and as a watermark on several pages. **Not yet fetched** — the frontend still uses the hardcoded `LOGO_SRC` constant in `site.js`, since wiring this up would require making every page that imports `LOGO_SRC` async. Flagging as a follow-up. |
| `partnership_form_link` | SHORT_TEXT | Google Form URL for partner applications (renamed from `apply_form_link` for clarity — it's specifically for partnerships, not any other kind of application). Fetched and used by both of Partnerships' "Apply Now" buttons (`src/app/(pages)/partnerships/page.jsx`). |
| `join_form_link` | SHORT_TEXT | Google Form URL for member recruitment — a separate form from the other two (prospective members, not partners or alumni). Used by the navbar's "Join Us" link (opens in a new tab) and the home page hero's "Apply to Join" button. There used to be a static `/join` page for this; it's been removed entirely in favor of linking straight to the form. |
| `alumni_form_link` | SHORT_TEXT | Google Form URL for alumni to share their story — a separate form from the other two. Used by the "Share Your Story" button in the Alumni page's "Share Your JCC Experience" section (`src/app/(pages)/alumni/page.jsx`), replacing what used to be a `mailto:` link. Opens in a new tab. |

**Not included here**: the full navbar link structure (Home / About dropdown / Committees dropdown / Contact / Join), currently in `src/app/(pages)/_data/navLinks.js`. That's a nested structure — two of the five nav items have their own sub-menus — which needs either a repeater-of-repeaters or is just left hardcoded in the frontend rather than CMS-driven. Flagging this as a decision to make once repeater/relation support is confirmed, rather than guessing at a shape now.

---

## 7. `history_hero_images` (collection)

Frontend: `src/app/(pages)/_data/history.js` → `getHistoryHeroImages()`. Feeds the crossfade image carousel in the History page's hero (shared `Hero` component, `src/app/(pages)/_components/hero/Hero.jsx`). Each image shows for 5 seconds, crossfades to the next, and pauses (with a slight zoom) on hover. No manual controls. 3 fallback images ship with the frontend for when this collection is empty/unreachable.

| Field | Type | Notes |
|---|---|---|
| `image` | MEDIA_LIST | 1 image per entry. Carousel order follows the order entries are returned by the CMS API — no explicit ordering field. |

---

## 8. `partnerships_hero_images` (collection)

Frontend: `src/app/(pages)/_data/partnerships.js` → `getPartnershipsHeroImages()`. Same `Hero` component/behavior as above, used on the Partnerships page.

| Field | Type | Notes |
|---|---|---|
| `image` | MEDIA_LIST | 1 image per entry, same ordering note as `history_hero_images`. |

---

## 9. `alumni_hero_images` (collection)

Frontend: `src/app/(pages)/_data/alumni.js` → `getAlumniHeroImages()`. Same `Hero` component/behavior as above, used on the Alumni page.

| Field | Type | Notes |
|---|---|---|
| `image` | MEDIA_LIST | 1 image per entry, same ordering note as `history_hero_images`. |

---

## 10. `board_members` (collection)

Frontend: `src/app/(pages)/_data/boardMembers.js` → `getBoardMembers()`. Renders as a 4-per-row grid on the About page (`src/app/(pages)/about/page.jsx`), below the History/Partnerships/Alumni cards. Currently ~19 people, but the frontend doesn't assume a fixed count — it renders however many the CMS returns.

| Field | Type | Notes |
|---|---|---|
| `name` | SHORT_TEXT | |
| `photo` | MEDIA_LIST | |
| `title` | SHORT_TEXT | e.g. "President", "Treasurer" — shown under the name |
| `email` | SHORT_TEXT | Displayed as plain text, not a mailto link |
