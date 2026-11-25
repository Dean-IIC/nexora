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
      { time: "08:00", title: "Check-in & kit collection", detail: "Bring your college ID and registration QR.", track: "all", kind: "ceremony" },
      { time: "09:00", title: "Opening ceremony", detail: "Welcome address with IEEE CASS, C-DAC and DEFSEC.", track: "all", kind: "ceremony" },
      { time: "10:00", title: "Problem statements unlocked", detail: "Hacking begins — the 24-hour clock starts.", track: "all", kind: "hack" },
      { time: "11:30", title: "Workshop: TinyML on microcontrollers", track: "edge-iot", kind: "talk" },
      { time: "11:30", title: "Workshop: Network forensics with Zeek", track: "cyber-security", kind: "talk" },
      { time: "13:00", title: "Lunch", track: "all", kind: "break" },
      { time: "15:00", title: "Mentor round 1", detail: "Track mentors visit every team.", track: "all", kind: "hack" },
      { time: "17:00", title: "Hardware lab hours", detail: "Soldering, scopes and dev boards available.", track: "edge-iot", kind: "hack" },
      { time: "17:00", title: "Capture-the-flag side quest", detail: "A 90-minute mini CTF for bonus swag.", track: "cyber-security", kind: "hack" },
      { time: "20:00", title: "Dinner", track: "all", kind: "break" },
      { time: "22:00", title: "Checkpoint 1 review", detail: "Show architecture and progress.", track: "all", kind: "judging" },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "Sat, 12 Dec 2026",
    items: [
      { time: "00:30", title: "Midnight snacks & fun break", track: "all", kind: "break" },
      { time: "04:00", title: "Mentor round 2", track: "all", kind: "hack" },
      { time: "08:00", title: "Breakfast", track: "all", kind: "break" },
      { time: "10:00", title: "Hacking ends — code freeze", detail: "Push final commits and submit.", track: "all", kind: "hack" },
      { time: "10:30", title: "Edge IoT judging", detail: "Live demos at team tables.", track: "edge-iot", kind: "judging" },
      { time: "10:30", title: "Cyber Security judging", detail: "Live attack/defence demos.", track: "cyber-security", kind: "judging" },
      { time: "13:00", title: "Lunch", track: "all", kind: "break" },
      { time: "14:30", title: "Grand finale pitches", detail: "Top teams from each track pitch on stage.", track: "all", kind: "judging" },
      { time: "16:30", title: "Closing ceremony & prize distribution", track: "all", kind: "ceremony" },
    ],
  },
];

export const milestones = [
  { date: "Now open", title: "Registrations open", text: "Form your team of 2–4 and pick a track." },
  { date: "5 Dec 2026", title: "Registration closes", text: "Last date to submit your team and idea abstract." },
  { date: "8 Dec 2026", title: "Shortlist announced", text: "Selected teams receive confirmation by email." },
  { date: "11 Dec 2026", title: "Hackathon begins", text: "24 hours of building, mentoring and workshops." },
  { date: "12 Dec 2026", title: "Finale & awards", text: "Demos, pitches and prize distribution." },
];
