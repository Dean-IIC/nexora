/**
 * Single source of truth for event facts. Edit here — every page reads from this file.
 * Values marked TODO are placeholders the organising committee should confirm.
 */
export const siteConfig = {
  name: "Nexora 2.0",
  shortName: "Nexora",
  tagline: "Secure the Edge. Build the Future.",
  host: "HKBK College of Engineering",
  association: "IEEE Bangalore Chapter",
  /** The official line — shown in the top banner, hero and footer. */
  officialLine: "Nexora 2.0 · HKBK College of Engineering in association with IEEE Bangalore Chapter",
  description:
    "Nexora 2.0 — a 24-hour hackathon on Cyber Security and Edge IoT by HKBK College of Engineering in association with IEEE Bangalore Chapter. 11–12 December 2026.",
  theme: "Cyber Security & Edge IoT",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  // Inauguration 09:00 IST on 11 Dec 2026 (TODO: confirm time); valedictory ends ~17:30 IST on 12 Dec.
  startsAt: "2026-12-11T09:00:00+05:30",
  endsAt: "2026-12-12T17:30:00+05:30",
  dateLabel: "11 – 12 December 2026",
  registrationDeadline: "2026-12-05T23:59:00+05:30", // TODO: confirm
  registrationDeadlineLabel: "5 December 2026, 11:59 PM IST", // TODO: confirm
  venue: "HKBK College of Engineering, Bengaluru",
  mode: "Offline · 24-hour sprint",
  teamSize: { min: 2, max: 4 },
  contact: {
    email: "nexora@example.org", // TODO: replace with the official inbox
    phone: "+91 00000 00000", // TODO
  },
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
  },
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/tracks", label: "Tracks" },
  { href: "/schedule", label: "Schedule" },
  { href: "/team", label: "Team" },
  { href: "/prizes", label: "Prizes" },
  { href: "/partners", label: "Partners" },
  { href: "/rules", label: "Rules" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
