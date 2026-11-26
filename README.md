# Nexora 2.0 — Hackathon Website

Website for **Nexora 2.0**, a 24-hour hackathon on **Cyber Security & Edge IoT**, 11–12 December 2026,
organised with **IEEE CASS**, **C-DAC** and **DEFSEC**.

Built with Next.js 15 (App Router), React 19, Tailwind CSS v4, shadcn/ui-style primitives and Supabase.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero with countdown, stats, both tracks, key dates, collaborators |
| `/about` | Story and pillars of the event |
| `/tracks` | Overview of both tracks |
| `/tracks/edge-iot` | Track 01: focus areas, problem statements, judging, stack, checklist |
| `/tracks/cyber-security` | Track 02: same structure, cyber-themed |
| `/schedule` | Day 1 / Day 2 tabs with per-track filter |
| `/prizes` | Grand podium, per-track and special prizes |
| `/partners` | IEEE CASS, C-DAC, DEFSEC + sponsorship CTA |
| `/rules` | Eligibility, building, security conduct, judging, code of conduct |
| `/faq` | Accordion FAQ |
| `/register` | Team registration (Server Action → Supabase) |
| `/contact` | Contact form (Server Action → Supabase) |

## Editing content

All event facts live in two places — no page edits needed:

- `lib/site-config.ts` — dates, venue, deadline, contact, socials, nav
- `lib/data/` — tracks & problem statements, schedule, prizes, partners, FAQ, rules

Values marked `TODO` (venue, deadline, contact details, prize amounts) are placeholders.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key
npm run dev
```

### Supabase

1. Create a project and run `supabase/migrations/20261125000000_init.sql` (SQL editor or `supabase db push`).
2. Put the project URL and **anon** key in `.env.local`.

RLS is enabled: the public role can only `INSERT` registrations and contact messages; nothing is readable
through the public API. View submissions in the Supabase dashboard. Duplicate team names / lead emails are
rejected by unique indexes. Without env vars the site still builds and the forms show a friendly
"not configured" message.

## Structure

```
app/                    routes, layout, loading/error/not-found, sitemap, robots
actions/                Server Actions (register, contact)
components/ui/          shadcn/ui primitives
components/features/    assembled sections, forms, graphics/ (custom animated SVGs)
lib/                    utils, site config, data, validations (zod), supabase client + types
supabase/migrations/    database schema + RLS policies
```

## Logos & photos

`public/logos/` holds partner logos downloaded from each organisation's own website:
HKBK Group (hkbk.edu.in), IEEE Bangalore Section (ieeebangalore.org), IEEE CASS (ieee-cas.org)
and C-DAC (Wikimedia Commons). DEFSEC has no logo yet and is shown as text. Logos are registered
marks of their owners; use them only with the organisations' consent and do not alter them.
Logo metadata lives in `lib/data/logos.ts`.

`public/team/` holds people photos (512px WebP); assign them in `lib/data/people.ts`.
