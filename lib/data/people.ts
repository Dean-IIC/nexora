/**
 * People and ceremonies shown on the landing page and /team.
 * `name` is optional: when it is empty the card shows the role only, so nothing
 * placeholder-looking appears on the live site. Fill names in as they are confirmed.
 * `photo` is an optional path under /public (e.g. "/team/principal.jpg").
 */
export type Person = { role: string; name?: string; org?: string; photo?: string };

export const college = {
  name: "HKBK College of Engineering",
  city: "Bengaluru, Karnataka",
  // TODO: review this copy with the college before publishing widely.
  summary:
    "HKBK College of Engineering is an engineering institution in Bengaluru affiliated to Visvesvaraya Technological University (VTU) and approved by AICTE. The college offers undergraduate and postgraduate programmes across computer science, artificial intelligence, electronics and allied engineering disciplines.",
  detail:
    "With active student chapters, research labs and strong industry connections, HKBK encourages students to learn by building. Nexora is the college's flagship hackathon, bringing together students, faculty and industry experts to solve real problems in cyber security and edge computing.",
  highlights: [
    { label: "Affiliation", value: "VTU, Belagavi" },
    { label: "Approval", value: "AICTE" },
    { label: "Location", value: "Bengaluru" },
    { label: "Host departments", value: "AIML & ECE" },
  ],
};

export type Department = {
  id: "aiml" | "ece";
  short: string;
  name: string;
  about: string;
  focus: string[];
  hod: Person & { bio?: string };
  accent: "iot" | "cyber";
};

export const departments: Department[] = [
  {
    id: "aiml",
    short: "AIML",
    name: "Department of Artificial Intelligence & Machine Learning",
    about:
      "The AIML department trains engineers to design intelligent systems — from data and learning algorithms to secure, responsible deployment. Its students bring machine-learning depth to threat detection, anomaly analysis and on-device intelligence.",
    focus: ["Machine learning", "Deep learning", "Data analytics", "AI for security"],
    hod: { role: "Head of Department, AIML" }, // TODO: add name, photo and bio
    accent: "cyber",
  },
  {
    id: "ece",
    short: "ECE",
    name: "Department of Electronics & Communication Engineering",
    about:
      "The ECE department covers embedded systems, VLSI, communication and signal processing — the hardware foundations of every edge device. Its labs and faculty anchor the hands-on side of Nexora's Edge IoT track.",
    focus: ["Embedded systems", "IoT", "VLSI", "Wireless communication"],
    hod: { role: "Head of Department, ECE" }, // TODO: add name, photo and bio
    accent: "iot",
  },
];

/** Leadership grid — designed for up to 10 people (5 per row on desktop). */
export const leaders: Person[] = [
  { name: "C. M. Ibrahim", role: "Chairman", org: "HKBK Group of Institutions", photo: "/team/chairman-cm-ibrahim.webp" },
  { name: "C. M. Faiz", role: "Director", org: "HKBK College of Engineering", photo: "/team/director-cm-faiz.webp" },
  { name: "Dr. Riaz Ahmed", role: "Principal", org: "HKBK College of Engineering", photo: "/team/principal-riaz-ahmed.webp" },
  { role: "HOD, AIML", org: "HKBK College of Engineering" }, // TODO: name
  { role: "HOD, ECE", org: "HKBK College of Engineering" }, // TODO: name
];

export const facultyOrganisers: Person[] = [
  { name: "Prof. Afreen", role: "Faculty Coordinator", photo: "/team/prof-afreen.webp" },
  { name: "Prof. Nelvita", role: "Faculty Coordinator", photo: "/team/prof-nelvita.webp" },
  { name: "Prof. Saroja", role: "Faculty Coordinator", photo: "/team/prof-saroja.webp" },
];

export const studentOrganisers: Person[] = [
  { name: "Hanzala Jawwad", role: "Student Organiser" },
  { name: "Rehan", role: "Student Organiser" },
  { name: "Shaob H Jamadar", role: "Student Organiser", photo: "/team/shaob-h-jamadar.webp" },
  { name: "Mateen U S", role: "Student Organiser", photo: "/team/mateen-u-s.webp" },
];

export type Ceremony = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  chiefGuest?: Person;
  accent: "iot" | "cyber" | "primary";
};

export const ceremonies: Ceremony[] = [
  {
    id: "inauguration",
    title: "Inauguration",
    date: "Fri, 11 December 2026",
    time: "09:00 – 10:00 AM IST", // TODO: confirm
    description: "Opening ceremony, welcome address and launch of Nexora 2.0.",
    chiefGuest: { name: "Altaf Balsing", role: "Cyber Security Expert", org: "Cisco" },
    accent: "cyber",
  },
  {
    id: "pre-hackathon-talk",
    title: "Pre-hackathon Talk",
    date: "Fri, 11 December 2026",
    time: "10:00 AM – 12:00 PM IST",
    description: "A 2-hour expert session to set the stage before hacking begins — open to all participants.",
    accent: "iot",
  },
  {
    id: "valedictory",
    title: "Valedictory",
    date: "Sat, 12 December 2026",
    time: "04:30 PM IST", // TODO: confirm
    description: "Closing ceremony, winner announcements and prize distribution.",
    chiefGuest: { role: "Chief Guest — to be announced" }, // TODO: add valedictory chief guest
    accent: "primary",
  },
];
