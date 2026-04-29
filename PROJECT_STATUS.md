# PROJECT_STATUS.md

Dense, Claude-readable snapshot of the Sonja Speicher · Custòdia website project.
**Sonja-facing context lives in Anytype** — this file is the terse mirror, kept current so
future Claude sessions don't need to make MCP calls just to learn the basics.

For verbose source-of-truth (Sonja's feedback fields, full businessplan prose, brand assets),
read the Anytype pages listed in the [Anytype Index](#anytype-index) section.

---

## Current Live State (as of 2026-04-28)

| Aspect | Value |
|:---|:---|
| Hauptdomain | sonjaspeicher-custodia.com |
| Domain redirects | sonjaspeicher.com + custodia-mallorca.com → 301 → Hauptdomain (Porkbun URL Forwarding) |
| Public surface | Coming-Soon page at `/`, full draft at `/preview/` |
| Languages live | DE / EN / FR / ES |
| Legal pages | `/preview/#impressum`, `/preview/#datenschutz` (hash-routed via LegalPage component) |
| Contact form | AJAX `POST` to Formsubmit (`https://formsubmit.co/ajax/hello@sonjaspeicher-custodia.com`); subject hard-coded to `Kontaktformular - sonjaspeicher-custodia.com`; reply-to = submitter's email field. **Activated 2026-04-27, fully live.** |
| Email setup | 12 Porkbun aliases (`hello`/`hi`/`info`/`mail` × 3 domains); 11 forward directly to `sonja.speicher@gmx.de`; `hello@sonjaspeicher-custodia.com` is a Porkbun mailbox ($24/year, locked) with Sieve filter redirecting to GMX. GMX Send-As verified for `hello@`, replies leave from brand domain. |
| Annual costs | 3× .com renewal (~$33/yr after promo) + email mailbox $24/yr = **~$57/yr ≈ €54/yr** (year 1 was promo-cheaper at ~$50). Tracked in Anytype "💰 Laufende Kosten · Domain & E-Mail". |
| Hosting | GitHub Pages, deploy on push to `main` (Actions builds `./dist` → `production` branch) |
| Rechtsform | Autónoma — Sonja persönlich, NIE X8224719B, Polígono 5 Parcela 263, 07529 Ariany |

## Image Slots (current)

| Slot | File | Description |
|:---|:---|:---|
| Hero | `/images/20260405_182836.jpg` | Steinbogen-Blick auf Pool und Garten |
| Philosophy | `/images/20260426_094945.jpg` | Finca mit Bougainvillea, Pool im Hintergrund |
| About portrait | `/images/sonjaspeicher1.png` | Sonja-Portrait *(open: Hintergrund soll eigenes Haus sein)* |
| Eindrücke #1 | `/images/20260426_100811.jpg` | Pergola mit Glyzinien, Holzofen, Esstisch |
| Eindrücke #2 | `/images/20260426_095025.jpg` | Bougainvillea an Steinmauer, Pergola-Eingang |
| Eindrücke #3 | `/images/20260403_083625.jpg` | Zitrusgarten der Finca |

`/public/images/` usually has extra candidate photos sitting uncommitted from selection passes — check `git status` before assuming any file is unused.

## Service Packages (current copy)

- **CARE** — wöchentlicher Komplettcheck, Fotodoku, Sofortmeldung, Koordination Dienstleister, Briefkasten/Pakete. *(Behördengänge sind in FULL CARE, nicht hier.)*
- **ARRIVE** — Einkaufsservice nach persönlichen Wünschen, Haus sorgfältig vorbereitet, Airport-Transfer. *(Schlüsselübergabe & saisonale Vorbereitung sind raus.)*
- **FULL CARE** — alles aus CARE + ARRIVE plus Budget, Jahresplanung, Fuhrpark, Concierge, Behörden-Repräsentation.
- **Zusatzleistungen-Block ist entfernt** — Private Chef und Renovierungsberatung werden NICHT mehr beworben (Sonjas Wunsch).

## Key Copy Anchors (German source — others derive)

- Philosophy body ends with: *"…Diskretion, Proaktivität, Verlässlichkeit — und ein Ansprechpartner, der erreichbar ist, wenn es darauf ankommt. Das ist Custòdia."*
- About paragraph 1 starts: *"25 Jahre als Köchin und Chief Stewardess auf Luxusyachten."*
- About quote: *"Ich kümmere mich um wenige Anwesen — dafür um jedes wie um mein Eigenes."* — capital "E" is intentional (substantiviertes Adjektiv).
- Footer tagline: *"Custòdia · Private Property Care Mallorca"*
- Caption Eindrücke: *"Sonjas Finca in der Inselmitte — drei Jahre eigene Bauleitung"*

## Open Items (engineering-side)

- Sonja-Portrait: replace background with eigenes Haus when photo arrives.
- Hero typeface: Jürgen had a remark, not yet captured.
- Website von `/preview/` auf öffentlich umstellen — pending Sonja's Freigabe.

## Open Items (business-side, not blocking code)

Tracked in the Businessplan v0.6 (Anytype). Highlights: Berufshaftpflicht prüfen, Reinigungsnetzwerk aufbauen, Profil-PDF für Makler, Steuerberater-Termin (Cuota de Autónomos / Tarifa plana), Instagram-Konzept.

---

## Changelog (reverse chrono)

### 2026-04-29 — Cost tracking + price correction
- Verified actual Porkbun invoices from Gmail. Email mailbox is **$24/year** (locked-in 2026-04-27, one day before Porkbun raised the rate to $36/year for new accounts) — earlier internal references to "$1.49/mo" were incorrect and have been corrected in project CLAUDE.md.
- New Anytype reference: "💰 Laufende Kosten · Domain & E-Mail" — Sonja-facing cost breakdown with year-1 (~$51) and year-2+ (~$58) figures, ready for her bookkeeping/Steuerberater.
- PROJECT_STATUS live state extended with annual-cost row.
- Open: line items for `sonjaspeicher.com` and `custodia-mallorca.com` from Order 9617899 still unverified — Gmail tool truncates the order body. Frederik to check Porkbun dashboard if exact figures matter; conservative assumption is same $8.88 promo across all three.

### 2026-04-28 — Email + domain infrastructure complete
- `sonjaspeicher.com` redirect fixed: was pointing to GitHub Pages IPs and 404'ing; switched to Porkbun URL Forwarding 301 → Hauptdomain (matches `custodia-mallorca.com` setup).
- All 11 non-`hello@` aliases verified as direct forwards to `sonja.speicher@gmx.de` (decision against funneling through `hello@` mailbox — extra hop = SPF/spam-filter risk for no functional gain; GMX is already the single inbox).
- End-to-end loop confirmed working: visitor form submission → Formsubmit → Porkbun mailbox → Sieve filter → Sonja's GMX. Replies from GMX → Porkbun SMTP → recipient sees `From: hello@sonjaspeicher-custodia.com`.
- Production-ready. No further infrastructure work pending.

### 2026-04-27 — Mailbox + Datenschutz update for Porkbun
- Sonja got a Porkbun-hosted mailbox for `hello@sonjaspeicher-custodia.com` to enable Send-As from GMX. Forwarding still routes inbound to her GMX inbox; the mailbox primarily provides SMTP credentials so replies leave with the brand domain as From.
- GMX Send-As verified — Sonja can now reply from `hello@sonjaspeicher-custodia.com` instead of her personal GMX address.
- Datenschutz section "Kontaktformular" → renamed to "Kontaktformular und E-Mail-Korrespondenz" (and EN/FR/ES equivalents). New paragraph discloses Porkbun, LLC (Portland, OR, USA) as email-infrastructure processor, with Art. 46 GDPR safeguards reference.
- Formsubmit activation confirmed live (`success: true` from POST). Form is operational end-to-end.

### 2026-04-27 — Contact form backend via Formsubmit
- Replaced `mailto:` handler with AJAX `POST` to `https://formsubmit.co/ajax/hello@sonjaspeicher-custodia.com`. No backend, no account — Formsubmit verifies the destination once via confirmation email, then forwards every submission as an email.
- Subject is hard-coded to `Kontaktformular - sonjaspeicher-custodia.com` across all 4 languages (Sonja can filter by subject in GMX). `_template: "table"` formats the message body. Reply-To defaults to the form's `email` field, so Sonja can reply to a submitter directly from GMX.
- Honeypot field `_honey` for bot protection. Loading / success / error states render inline (no page redirect); submit button disables while in flight; form resets on success.
- `subjectPrefix` is no longer name-suffixed (was `…via sonjaspeicher-custodia.com – Max`).
- Datenschutz copy in DE/EN/FR/ES updated: now discloses Formsubmit as a third-party processor with US-based servers, references Art. 46 GDPR safeguards, and states data is processed solely for delivery. The earlier "no third-party transmission" wording is removed.
- All visible email addresses on the site (contact section, Impressum, Datenschutz) consolidated to `hello@sonjaspeicher-custodia.com` (matching the canonical domain). The `sonjaspeicher.com` and `custodia-mallorca.com` aliases still forward to the same GMX inbox.
- **Activation step required:** first submission triggers a Formsubmit confirmation email to `hello@sonjaspeicher-custodia.com` → forwards to Sonja's GMX. She must click the confirmation link before the form goes live.

### 2026-04-27 — Eindrücke #1 swap + "Eigenes" capitalization
- Replaced first Eindrücke image: `IMG_1843.jpeg` → `20260426_100811.jpg` (wisteria-pergola dining shot). Image needed 90° CCW rotation + EXIF orientation strip (sips left orientation=6 which made browsers un-rotate).
- About-quote: `eigenes` → `Eigenes`.
- Commit: `3743e12`. Sonja-update doc: "Website Update — 27. April 2026".

### 2026-04-27 — Legal pages live, contact form via mailto
- New `LegalPage` component renders `/preview/#impressum` and `/preview/#datenschutz` via hash-based routing (no router dependency). Brand-styled, with language switcher and back-link.
- Footer Impressum/Datenschutz links activated (were `href="#"`).
- Contact form submit now opens `mailto:hello@sonjaspeicher.com` with the form fields as subject + body — no server backend needed.
- Hooks gotcha: initial implementation conditionally returned `<LegalPage>` before all hooks ran → Rules of Hooks violation. Fixed by moving the routing decision after all hook calls. Don't repeat that.
- Commits: `246d008`, `7b6b5cc`, `48f57b1`.

### 2026-04-27 — Sonja-Feedback Round (services + about + Eindrücke #3)
- Eindrücke #3 image: dish-table → `/images/20260403_083625.jpg` (Zitrusgarten).
- About paragraph 2 fully rewritten — removed duplicate "Diskretion, Proaktivität, keine Ausreden" repetition that mirrored Philosophy.
- About-quote replaced "Ich betreue maximal fünf Anwesen…" → "Ich kümmere mich um wenige Anwesen…" (warmer, relationship-focused).
- Philosophy: "keine Ausreden" → "Verlässlichkeit"; added Erreichbarkeit point.
- About paragraph 1: prepended "Köchin und" before "Chief Stewardess"; restructured ending re Bau drei Jahre persönlich mit Mann.
- Service packages tightened (CARE simplified, ARRIVE adjusted; FULL CARE unchanged). "detailverliebt" → "sorgfältig". Behördengänge moved from CARE to FULL CARE.
- Zusatzleistungen-Block (Private Chef / Renovierungsberatung) removed.
- "Max. 5 Mandate" Kennzahl-Bullet removed from Philosophy.
- Commits: `666e881`, `b104265`, `e7c979b`, merge `6f33788`.

### 2026-04-26 — Image refresh batch
- Hero, Philosophy, Eindrücke #2 + #3 all swapped to fresh Finca shots (eigene Bauleitung emphasis). See "Website Update — 26. April 2026" in Anytype for full mapping.

### 2026-03-30 — Telephone + earlier text round
- Real Telefonnummer +34 653 545 612 in place of Platzhalter. See "Website Update — 30. März 2026" in Anytype.

---

## Anytype Index

Space: **Sonja Speicher Custodia** · Space ID `bafyreifqsffrrujnvtxcoapcfedbx7dd4d25ffzk3p2qljjsnsl3ebwhim.1vdc9e09a7b69`

| Page | Object ID | Purpose |
|:---|:---|:---|
| 🌐 Website — Vorschau & Feedback (Sonja) | `bafyreifaslyu4mr3whtynzgnuqlmyxjf5zxfmwv47cnhndpah4xzwzurvy` | Section-by-section mirror of the live site, with `✏️ Feedback & Änderungen` fields where Sonja writes notes. **Read this when implementing her feedback.** |
| 📄 Sonja Speicher · Custòdia (Businessplan) | `bafyreiekzjjkuqpxf5yac5ceoum4xupzpfujcxmiyxgobtcrqrytkec23i` | Canonical strategy doc (current: v0.6 · 2026-04-27). Holds the "why" behind positioning, pricing, packages, roadmap. Sections 4 (Leistungsportfolio) and 8 (Website-Konzept) cross-check against `translations.ts`. |
| 📧 Dein Custòdia E-Mail-Setup | `bafyreifeac5rxafk5wlgdxgiahfcyzsw2aag5bwduxnisumolaixqxbfbe` | Timeless reference doc for Sonja: how Custòdia mail flows, what to do in GMX (almost nothing), how to verify Send-As, optional GMX filter rules. |
| 💰 Laufende Kosten · Domain & E-Mail | `bafyreicqxkeeecy6aaycatnnb45rbkjofzqs3f7jgyq2f7fanpn3cfjbbq` | Sonja-facing cost breakdown for Porkbun domains + email mailbox. Year 1 ~$51 (promo), Year 2+ ~$58/yr. Tracks confirmed Porkbun invoice numbers from Gmail (Order 9617899 + 10186380). |
| 🚀 Website Update — 27. April 2026 · Kontaktformular | `bafyreigmvd45phnugvl5bjpgofx3q7rf7hlin5wlvpheyo2qojkv4mytru` | Sonja-friendly release notes: contact form now sends via Formsubmit, email consolidated, activation step. |
| 🚀 Website Update — 27. April 2026 | `bafyreibbvdu5t2axkjfsapzytdiecr6t4m7smoqfovol3ztuketw6pjpnu` | Sonja-friendly release notes for the earlier 27 April changes (Eindrücke, Eigenes, legal pages). |
| 🚀 Website Update — 26. April 2026 | `bafyreiblbs6kccp4pe4qfps34nbztabneyk2pfuzodnd5onashr64kp57u` | Image refresh batch release notes. |
| 🚀 Website Update — 30. März 2026 | `bafyreiglfllf3qyrhgq63trfcsijchmjzfrodzgusn424kk55scogr7bge` | Earlier release notes. |
| 🎨 Brand Design (folder) | `bafyreiamvzbqv34ic75vb37zbug3nqap5gmkme2zymzzb3fau2iz4akbvq` | Logo, palette, typography, mood boards, social media, Geschäftsausstattung. |

---

## How to use this file (for future Claude sessions)

**At session start, read this file first.** It's the cheap, fast snapshot. Only fall through to Anytype MCP calls when:
- You need verbose source (Sonja's exact feedback wording, full businessplan section, brand assets).
- You're about to write a Sonja-facing release note (always cross-check the latest "Website Update — DATE" page format in Anytype).
- The user explicitly references an Anytype page by name.

**When you ship a change, update this file:**
1. Adjust "Current Live State" / "Image Slots" / "Service Packages" / "Key Copy Anchors" if the change touches them.
2. Prepend an entry to the changelog with date, one-line summary, file/commit refs, and any gotchas.
3. **Then** mirror the change into the relevant Anytype page (Sonja-friendly tone, with screenshot links / images / feedback acknowledgements).

This file is tracked in git; the Anytype pages are not. If they disagree, **this file wins for engineering facts**, Anytype wins for narrative and brand voice.
