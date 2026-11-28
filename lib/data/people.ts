/**
 * People and ceremonies shown on the landing page and /about.
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
    hod: { name: "Dr. Tabassum", role: "Head of Department, AIML & Dean, IIC", photo: "/team/hod-aiml-tabassum.webp" }, // TODO: add bio
    accent: "cyber",
  },
  {
    id: "ece",
    short: "ECE",
    name: "Department of Electronics & Communication Engineering",
    about:
      "The ECE department covers embedded systems, VLSI, communication and signal processing — the hardware foundations of every edge device. Its labs and faculty anchor the hands-on side of Nexora's Edge IoT track.",
    focus: ["Embedded systems", "IoT", "VLSI", "Wireless communication"],
    hod: { name: "Dr. Manjunath", role: "Head of Department, ECE", photo: "/team/hod-ece-manjunath.webp" }, // TODO: add bio
    accent: "iot",
  },
];

/** Leadership grid — designed for up to 10 people (5 per row on desktop). */
export const leaders: Person[] = [
  { name: "C. M. Ibrahim", role: "Chairman", org: "HKBK Group of Institutions", photo: "/team/chairman-cm-ibrahim.webp" },
  { name: "C. M. Faiz", role: "Director", org: "HKBK College of Engineering", photo: "/team/director-cm-faiz.webp" },
  { name: "Dr. Riaz Ahmed", role: "Principal", org: "HKBK College of Engineering", photo: "/team/principal-riaz-ahmed.webp" },
  { name: "Dr. Tabassum", role: "HOD, AIML & Dean, IIC", org: "HKBK College of Engineering", photo: "/team/hod-aiml-tabassum.webp" },
  { name: "Dr. Manjunath", role: "HOD, ECE", org: "HKBK College of Engineering", photo: "/team/hod-ece-manjunath.webp" },
];

export const facultyOrganisers: Person[] = [
  { name: "Prof. Afreen", role: "Faculty Coordinator", photo: "/team/prof-afreen.webp" },
  { name: "Prof. Nelvita", role: "Faculty Coordinator", photo: "/team/prof-nelvita.webp" },
  { name: "Prof. Saroja", role: "Faculty Coordinator", photo: "/team/prof-saroja.webp" },
  { name: "Prof. Aushij Singh", role: "Faculty Coordinator", photo: "/team/prof-aushij-singh.webp" },
  { name: "Prof. Arun Kumar", role: "Faculty Coordinator", photo: "/team/prof-arun-kumar.webp" },
  { name: "Prof. Nabeel Baig", role: "Faculty Coordinator", photo: "/team/prof-nabeel-baig.webp" },
  { name: "Dr. Aryalekshmi B.N", role: "Faculty Coordinator" },
  { name: "Dr. Abdul Azeez", role: "Faculty Coordinator" },
  { name: "Prof. Noor Ayesha", role: "Faculty Coordinator" },
  { name: "Dr. Hashinur Islam", role: "Faculty Coordinator" },
];

export const studentOrganisers: Person[] = [
  { name: "Mr. Hanzala Jawwad", role: "Student Organiser", photo: "/team/hanzala-jawwad.webp" },
  { name: "Mr. Rehan", role: "Student Organiser", photo: "/team/rehan.webp" },
  { name: "Mr. Shoaib H Jamadar", role: "Student Organiser", photo: "/team/shoaib-h-jamadar.webp" },
  { name: "Mr. Mateen U S", role: "Student Organiser", photo: "/team/mateen-u-s.webp" },
  { name: "Ms. Zaiba", role: "Student Organiser" },
  { name: "Mr. Mohammed Ikram", role: "Student Organiser" },
  { name: "Mr. Sai Charan", role: "Student Organiser" },
  { name: "Ms. Chrysolite", role: "Student Organiser" },
  { name: "Mr. Mohammed Afnan", role: "Student Organiser" },
  { name: "Mr. Sakib", role: "Student Organiser" },
];

/**
 * Volunteers — shown on the About page below the student organisers.
 * The section stays hidden while this list is empty.
 * Photos: add `photo: "/team/<file>.webp"` to an entry.
 */
export const volunteers: Person[] = [
  { name: "Ziyafatima Mallur", role: "Coordinator", photo: "/team/ziyafatima-mallur.webp" },
  { name: "Syed Mutammur Abbas", role: "Coordinator", photo: "/team/syed-mutammur-abbas.webp" },
  { name: "Syed Fatir Arman", role: "Coordinator", photo: "/team/syed-fatir-arman.webp" },
  { name: "Rubina Mehreen", role: "Coordinator", photo: "/team/rubina-mehreen.webp" },
  { name: "Arham A K", role: "Coordinator", photo: "/team/arham-a-k.webp" },
  { name: "MD Musaib", role: "Coordinator" },
  { name: "Saud Zanjani", role: "Coordinator", photo: "/team/saud-zanjani.webp" },
  { name: "Ayman Mohammedi", role: "Coordinator", photo: "/team/ayman-mohammedi.webp" },
  { name: "Deepankar Maji", role: "Coordinator" },
  { name: "Chetan IS", role: "Coordinator", photo: "/team/chetan-is.webp" },
  { name: "MD Sabir", role: "Coordinator", photo: "/team/md-sabir.webp" },
  { name: "MD Omeir", role: "Coordinator" },
  { name: "Sagar H D", role: "Coordinator", photo: "/team/sagar-h-d.webp" },
  { name: "Rakesh M", role: "Coordinator", photo: "/team/rakesh-m.webp" },
  { name: "Sandeep N Goudar", role: "Coordinator" },
  { name: "Shashank", role: "Coordinator" },
  { name: "Rutik Bhandare", role: "Coordinator", photo: "/team/rutik-bhandare.webp" },
  { name: "S J Pavan Rao", role: "Coordinator", photo: "/team/s-j-pavan-rao.webp" },
  { name: "Akifa Ghouse", role: "Coordinator" },
  { name: "Sharat O", role: "Coordinator", photo: "/team/sharat-o.webp" },
  { name: "Maera Shams", role: "Coordinator" },
  { name: "MD Maaz", role: "Coordinator" },
  { name: "MD Luqman", role: "Coordinator" },
];

export type Ceremony = {
  id: string;
  title: string;
  date: string;
  time: string;
  /** Optional breakdown shown instead of `time`, e.g. inauguration + talk. */
  sessions?: { label: string; time: string }[];
  description: string;
  chiefGuest?: Person;
  accent: "iot" | "cyber" | "primary";
};

export const ceremonies: Ceremony[] = [
  {
    id: "inauguration",
    title: "Inauguration & Pre-hackathon Talk",
    date: "Fri, 11 December 2026",
    time: "09:00 AM – 12:00 PM IST",
    sessions: [
      { label: "Inauguration", time: "09:00 – 10:00 AM" }, // TODO: confirm
      { label: "Pre-hackathon talk", time: "10:00 AM – 12:00 PM" },
    ],
    description:
      "The opening ceremony launches Nexora 2.0, followed by a 2-hour pre-hackathon talk by our chief guest to set the stage before hacking begins.",
    chiefGuest: {
      name: "Altaf Balsing",
      role: "Co-founder, DEFSEC Systems and Security Pvt. Ltd.",
      org: "Cyber Security Expert, Cisco",
      photo: "/team/altaf-balsing.webp",
    },
    accent: "cyber",
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
