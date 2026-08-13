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

**Open question before building**: three domains below need either a
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

Frontend: `src/app/partnerships/data.js` → `getPartnerships()`.
Fallback data: `src/app/_data/partnershipsFallbackData.js`.

| Field | Type | Notes |
|---|---|---|
| `main_image` | MEDIA_LIST | Card image, 1 image expected |
| `title` | SHORT_TEXT | Partner org name |
| `description` | LONG_TEXT | |
| `website_link` | SHORT_TEXT | Full URL |

---

## 2. `committees` (collection)

Frontend: not yet migrated (still `src/components/committees-general-cards/data/committeesData.jsx`), but this is the intended shape for when it is.

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

---

## 3. `alumni` (collection)

Frontend: not yet migrated (still `src/pages/alumni/data.js`), intended shape below.

| Field | Type | Notes |
|---|---|---|
| `name` | SHORT_TEXT | |
| `workplace` | SHORT_TEXT | |
| `testimony` | LONG_TEXT | |
| `photo` | MEDIA_LIST | |

---

## 4. `history_years` (collection)

Frontend: not yet migrated (still `src/pages/history/data.js`), intended shape below. Currently two separate arrays (`timelineData`, `additionalInfoData`) are keyed by the same year and should become **one** collection to avoid the two going out of sync.

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

Frontend: not yet migrated (still `src/pages/home.data.jsx`), intended shape below. This is the homepage's rotating hero banner.

| Field | Type | Notes |
|---|---|---|
| `image` | MEDIA_LIST | |
| `label` | SHORT_TEXT | Small eyebrow text, e.g. "OUR MISSION" |
| `title` | SHORT_TEXT | |
| `subtitle` | LONG_TEXT | |
| `button_text` | SHORT_TEXT | |
| `button_link` | SHORT_TEXT | Internal path, e.g. `/join` |
| `tags` | SHORT_TEXT | Only used on one slide today (3 pill labels: "Leadership, Empathy, Responsibility"). If there's no list-of-strings field type, store as a single comma-separated string and split on the frontend. |

Note: the homepage also shows a 5-card committee grid, but that's just the `committees` collection above re-rendered — it should **not** become its own collection, to avoid a 3rd copy of committee names/images (there were already two duplicates on the live site before this cleanup).

---

## 6. `site_settings` (singleton)

Global site chrome — logo and a few standalone CTA links. Frontend: `src/data/site.js` (logo only, hardcoded for now).

| Field | Type | Notes |
|---|---|---|
| `logo` | MEDIA_LIST | Used in the navbar, footer, and as a watermark on several pages |
| `apply_form_link` | SHORT_TEXT | Google Form URL — currently a `"#"` placeholder in `src/app/partnerships/page.jsx` (`APPLY_FORM_LINK`), used by both partnerships CTA buttons |

**Not included here**: the full navbar link structure (Home / About dropdown / Committees dropdown / Contact / Join), currently in `src/components/navBar/navLinks.js`. That's a nested structure — two of the five nav items have their own sub-menus — which needs either a repeater-of-repeaters or is just left hardcoded in the frontend rather than CMS-driven. Flagging this as a decision to make once repeater/relation support is confirmed, rather than guessing at a shape now.
