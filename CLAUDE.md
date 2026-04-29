# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Read this first

**Before doing anything substantive, read [`PROJECT_STATUS.md`](./PROJECT_STATUS.md).** It's the dense, Claude-readable snapshot of:
- Current live state (domains, languages, legal pages, image slots, service packages)
- Key copy anchors (Philosophy body, About quote, footer tagline)
- Open engineering and business items
- Reverse-chrono changelog of significant changes
- An index of the relevant Anytype pages with their object IDs

`PROJECT_STATUS.md` is the engineering source-of-truth. The Anytype pages are the **narrative source-of-truth** for Sonja — verbose, with screenshots and `✏️ Feedback & Änderungen` fields. Reach for Anytype (via MCP) when you need:
- Sonja's exact feedback wording before implementing it
- The full businessplan prose (positioning, pricing, roadmap rationale)
- Brand assets (logo, palette, typography, mood boards)
- The release-note format used in the "Website Update — DATE" pages

For routine engineering tasks (image swap, copy tweak, layout fix), `PROJECT_STATUS.md` + this file are usually enough.

**When you ship a change, update both:**
1. Mirror the change into `PROJECT_STATUS.md` (terse, technical) — adjust the live-state tables and prepend a changelog entry.
2. Mirror the user-visible parts into the relevant Anytype pages (Sonja-friendly tone): the section in "🌐 Website — Vorschau & Feedback", and a new "🚀 Website Update — DATE" release note. Update the businessplan only when the change reflects a strategic decision (rechtsform, scope, positioning).

If the two ever disagree, `PROJECT_STATUS.md` wins for engineering facts; Anytype wins for narrative, voice, and brand assets.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Type-check + Vite build → ./dist
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

No test suite configured.

## Deployment

Push to `main` → GitHub Actions builds → deploys `./dist` to the `production` branch → served via GitHub Pages at `sonjaspeicher-custodia.com`.

## Domain & email infrastructure (Porkbun)

All three domains are registered via Porkbun under Frederik's account. Sonja is not the registrant — the website is operated by Sonja per Impressum, but DNS/registrar control sits with Frederik.

**Domains:**
- `sonjaspeicher-custodia.com` — canonical, A records → GitHub Pages
- `sonjaspeicher.com` — Porkbun URL Forwarding 301 → canonical
- `custodia-mallorca.com` — Porkbun URL Forwarding 301 → canonical

**Email — 12 aliases per Porkbun (`hello`, `hi`, `info`, `mail` × 3 domains):**
- `hello@sonjaspeicher-custodia.com` is a **Porkbun mailbox** ($24/year, locked-in 2026-04-27 just before Porkbun raised the rate to $36/year for new accounts). All other 11 aliases remain plain forwards. The mailbox exists primarily to provide SMTP credentials so GMX can Send-As from the brand domain.
- The mailbox has a Sieve filter (`rainloop.user`) that redirects all incoming mail to `sonja.speicher@gmx.de` and discards the original — i.e., the mailbox is effectively forward-only at runtime, the inbox stays empty.
- The other 11 aliases forward directly to `sonja.speicher@gmx.de`.
- **GMX side:** Send-As verified for `hello@sonjaspeicher-custodia.com`. Sonja replies in GMX → outbound goes via Porkbun SMTP → recipient sees `From: hello@sonjaspeicher-custodia.com`, not her personal GMX address.

**Contact form:**
- AJAX `POST` from `App.tsx` to `https://formsubmit.co/ajax/hello@sonjaspeicher-custodia.com`. Subject hard-coded to `Kontaktformular - sonjaspeicher-custodia.com` (filterable in GMX). Reply-To = the form's email field. Honeypot, inline status UI.
- Activated 2026-04-27 — no further activation steps needed.

**Datenschutz** discloses Formsubmit (FormSubmit, US) and Porkbun (Portland, OR, USA) as Art. 46 GDPR processors.

## Architecture

Single-page React app (no router). The entire page is one long scroll in `src/App.tsx`: Navigation → Hero → Philosophy → Services → About → Impressions → Contact → Footer.

**Animations:** GSAP + ScrollTrigger, initialized in `App.tsx`'s main `useEffect`. CSS selector classes like `.reveal-item`, `.service-card`, `.about-reveal` are the animation targets — don't rename them without updating the GSAP calls.

**i18n:** Custom context-based system in `src/i18n/`. Four languages: `de`, `en`, `fr`, `es`. All copy lives in `src/i18n/translations.ts`. The `t()` function from `useLanguage()` returns strings or arrays; service feature lists are `string[]`. Add new copy to all four language objects in `translations.ts`.

**Styling:** Tailwind CSS v3 + `tailwind.config.js`. Brand colors are hardcoded inline (`#FAF8F5` background, `#C4A77D` gold accent, `#1A1A1A` text). Utility classes `section-padding`, `container-custom`, `btn-primary`, `card-hover` are defined in `src/App.css`.

**UI components:** 40+ shadcn/ui components live in `src/components/ui/` — these are available but mostly unused by the main site. Import path alias: `@/components/ui/...`.

**`src/config.ts`:** Contains leftover boilerplate from the original template (references "Mallorca Settlement Services", "Maria Santos", etc.) — this file is **not used** by the current site. Ignore it; the real content is in `translations.ts` and `App.tsx`.

**Images:** All served from `/public/images/`. Personal photos use original filenames — older shots as `IMG_*.jpeg`, newer batch as `YYYYMMDD_HHMMSS.jpg`. Referenced directly in `App.tsx` as `/images/...`. Hero, Philosophy, and the three Impressions cards are the only image slots; About uses Sonja's portrait (`sonjaspeicher1.png`).

There are usually a few extra candidate photos sitting uncommitted in `/public/images/` from past selection passes — check `git status` before assuming a file is unused.

**Hero overlay:** the hero section uses a centered radial dark gradient (not a full-frame veil) plus a text-shadow on the headline, so the image stays bright at the edges. The nav crossfades from a top-down dark gradient (white text over hero) to a solid `#FAF8F5` (dark text) within a ~150 px scroll window in the lower portion of the hero — driven by a `navProgress` 0→1 state in `App.tsx`. Keep both layers if you change the hero image.

## Content Editing — Sonja's Workflow

Sonja reviews and edits website content via Anytype, in the shared **Sonja Speicher Custodia** space.

**Anytype document:** `🌐 Website — Vorschau & Feedback`
**Object ID:** `bafyreifaslyu4mr3whtynzgnuqlmyxjf5zxfmwv47cnhndpah4xzwzurvy`
**Space ID:** `bafyreifqsffrrujnvtxcoapcfedbx7dd4d25ffzk3p2qljjsnsl3ebwhim.1vdc9e09a7b69`

The document mirrors the full page scroll (Navigation → Hero → Philosophie → Leistungen → Über Sonja → Eindrücke → Kontakt → Footer). Each section shows the current German text, which images are used, and a `✏️ Feedback & Änderungen` field where Sonja writes her notes.

### Implementing Sonja's feedback

When Sonja has written feedback, run this in Claude Code:

```
Read Sonja's feedback from the Anytype website document
(object ID: bafyreifaslyu4mr3whtynzgnuqlmyxjf5zxfmwv47cnhndpah4xzwzurvy)
and implement her changes on a new git branch called sonja-feedback-YYYY-MM-DD.
Make all necessary changes across translations.ts, App.tsx, and /public/images/
as needed. Summarise what you changed before committing. After merging,
update PROJECT_STATUS.md and the relevant Anytype pages
(Vorschau-Doc + new "Website Update — DATE" release note).
```

Claude Code will read the Anytype object via MCP, interpret the feedback as change instructions, apply them, and create a branch for review. Frederik merges → site redeploys automatically. The post-merge step keeps `PROJECT_STATUS.md` and Sonja's docs in sync.

### Anytype MCP setup notes

Since 2026-04-27, the Anytype MCP runs against a headless `anytype-cli` service
(`127.0.0.1:31012`), not the Electron Desktop app. Reads/writes are performed by a
separate bot account `claude-bot` that has been invited as a member of the
**Sonja Speicher Custodia** space — not by Frederik's personal account.

Practical implications:
- Desktop app does not need to be running for the MCP to work.
- If reads return empty or 401: check `~/.local/bin/anytype service status` — the
  CLI daemon is the failure point, not the MCP.
- Member list of the Sonja space will show `claude-bot` alongside Frederik. If Sonja
  asks what that is, it's the automation account that Claude uses to read her feedback.
- Full setup details in global CLAUDE.md → "AnyType MCP (Headless via CLI)" section.
