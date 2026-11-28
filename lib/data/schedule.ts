export type ScheduleTrack = "all" | "edge-iot" | "cyber-security";

export type ScheduleItem = {
  time: string;
  title: string;
  detail?: string;
  track: ScheduleTrack;
  kind: "ceremony" | "hack" | "talk" | "break" | "judging";
};

export type ScheduleDay = { id: string; label: string; date: string; items: ScheduleItem[] };

export const schedule: ScheduleDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "Fri, 11 Dec 2026",
    items: [
      { time: "9:00 – 10:00 AM", title: "Registration", detail: "Bring your college ID and registration confirmation.", track: "all", kind: "ceremony" },
      { time: "10:00 AM – 12:00 PM", title: "Pre-Hackathon Talk (Cyber Security)", detail: "By chief guest Mr. Altaf Balsing, Founder and CEO, DEFSEC Pvt. Ltd.", track: "all", kind: "talk" },
      { time: "12:00 – 1:00 PM", title: "Lunch Break", track: "all", kind: "break" },
      { time: "1:00 – 1:30 PM", title: "Inauguration", track: "all", kind: "ceremony" },
      { time: "5:00 – 5:30 PM", title: "Phase-1 Review & Tea Break", track: "all", kind: "judging" },
      { time: "7:30 – 8:30 PM", title: "Dinner", track: "all", kind: "break" },
      { time: "10:00 – 11:00 PM", title: "Bonfire / DJ", detail: "With midnight tea.", track: "all", kind: "break" },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "Sat, 12 Dec 2026",
    items: [
      { time: "7:30 – 8:30 AM", title: "Breakfast", track: "all", kind: "break" },
      { time: "11:00 AM – 12:00 PM", title: "Phase-2 Review", track: "all", kind: "judging" },
      { time: "12:30 – 1:00 PM", title: "Valedictory", detail: "Winner announcements and prize distribution.", track: "all", kind: "ceremony" },
    ],
  },
];

export const milestones = [
  { date: "Now open", title: "Registrations open", text: "Form your team of 2–4 and pick a track." },
  { date: "5 Dec 2026", title: "Registration closes", text: "Last date to submit your team and idea abstract." },
  { date: "8 Dec 2026", title: "Shortlist announced", text: "Selected teams receive confirmation by email." },
  { date: "11 Dec 2026", title: "Hackathon begins", text: "Registration, a 2-hour pre-hackathon talk on cyber security, then the inauguration." },
  { date: "12 Dec 2026", title: "Finale & awards", text: "Phase-2 review, then the valedictory and prize distribution." },
];
