/**
 * Single source of truth for event facts. Edit here — every page reads from this file.
 * Values marked TODO are placeholders the organising committee should confirm.
 */
export const siteConfig = {
  name: "Nexora 2.0",
  shortName: "Nexora",
  tagline: "Secure the Edge. Build the Future.",
  description:
    "Nexora 2.0 is a 24-hour national hackathon on Cyber Security and Edge IoT, in collaboration with IEEE CASS, C-DAC and DEFSEC. 11–12 December 2026.",
  theme: "Cyber Security & Edge IoT",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  // Event starts 09:00 IST on 11 Dec 2026, ends 18:00 IST on 12 Dec 2026.
  startsAt: "2026-12-11T09:00:00+05:30",
  endsAt: "2026-12-12T18:00:00+05:30",
  dateLabel: "11 – 12 December 2026",
  registrationDeadline: "2026-12-05T23:59:00+05:30", // TODO: confirm
  registrationDeadlineLabel: "5 December 2026, 11:59 PM IST", // TODO: confirm
  venue: "Venue to be announced", // TODO: set host campus & city
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
  { href: "/prizes", label: "Prizes" },
  { href: "/partners", label: "Partners" },
  { href: "/rules", label: "Rules" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
