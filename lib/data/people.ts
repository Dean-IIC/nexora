/**
 * People and ceremonies shown on the landing page and /about.
 * `name` is optional: when it is empty the card shows the role only, so nothing
 * placeholder-looking appears on the live site. Fill names in as they are confirmed.
 * `photo` is an optional path under /public (e.g. "/team/principal.jpg").
 */
export type Person = { role: string; name?: string; org?: string; photo?: string };

export const college = {
  name: "HKBK College of Engineering",
  city: "Nagawara, Bengaluru",
  summary:
    "Established in 1997, HKBK College of Engineering is part of the HKBK Group of Institutions — HKBK stands for \"Have Knowledge, Be Knowledgeable\". Its 17-acre campus sits opposite Manyata Tech Park in Nagawara, Bengaluru. The college is affiliated to Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE, and offers B.E. programmes in Computer Science & Engineering (CSE), Artificial Intelligence & Machine Learning (AIML), Electronics & Communication Engineering (ECE), Information Science & Engineering (ISE) and Mechanical Engineering (ME).",
  detail:
    "With NBA-accredited programmes in ECE, CSE and ISE, well-equipped laboratories and a community of 200+ faculty and 10,000+ alumni, HKBK pairs academic rigour with hands-on learning. Nexora is the college's flagship hackathon, bringing students, faculty and industry experts together to solve real problems in cyber security and edge computing.",
  highlights: [
    { label: "Established", value: "1997" },
    { label: "Campus", value: "17 acres, Bengaluru" },
    { label: "Affiliation", value: "VTU, Belagavi" },
    { label: "Approval", value: "AICTE" },
    { label: "Departments", value: "CSE · AIML · ECE · ISE · ME", wide: true },
  ] as { label: string; value: string; wide?: boolean }[],
};

export type Department = {
  id: "aiml" | "ece";
  short: string;
  name: string;
  about: string;
  focus: string[];
  accent: "iot" | "cyber";
};

export const departments: Department[] = [
  {
    id: "aiml",
    short: "AIML",
    name: "Department of Artificial Intelligence & Machine Learning",
    about:
      "Established in 2021–22 with an intake of 60, the Department of Artificial Intelligence & Machine Learning has grown to an intake of 180 in 2025–26. Its B.E. programme covers machine learning, neural networks and natural language processing, with hands-on work in Python, PyTorch, Keras, scikit-learn and spaCy — the skills behind the intelligent threat detection and on-device AI that Nexora's teams build.",
    focus: ["Machine learning", "Neural networks", "Natural language processing", "AI for security"],
    accent: "cyber",
  },
  {
    id: "ece",
    short: "ECE",
    name: "Department of Electronics & Communication Engineering",
    about:
      "Established in 1997 with an intake of 45, the Department of Electronics & Communication Engineering now admits 180 students a year, and its B.E. programme is NBA-accredited till 2026. Its 35+ faculty bring expertise in VLSI and embedded systems, digital communication, signal processing, computer networks and nanoelectronics, backed by labs running MATLAB, LabVIEW, Cadence, Xilinx and Keil — the hardware foundations of Nexora's Edge IoT track.",
    focus: ["Embedded systems", "VLSI", "Internet of Things", "Wireless communication", "Signal processing"],
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
  { name: "Prof. Afreen", role: "Faculty Organiser", photo: "/team/prof-afreen.webp" },
  { name: "Prof. Nelvita", role: "Faculty Organiser", photo: "/team/prof-nelvita.webp" },
  { name: "Prof. Saroja", role: "Faculty Organiser", photo: "/team/prof-saroja.webp" },
];

export const facultyCoordinators: Person[] = [
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
  { name: "Mr. Mohammed Ikram", role: "Student Organiser", photo: "/team/mohammed-ikram.webp" },
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
  { name: "MD Musaib", role: "Coordinator", photo: "/team/md-musaib.webp" },
  { name: "Saud Zanjani", role: "Coordinator", photo: "/team/saud-zanjani.webp" },
  { name: "Ayman Mohammedi", role: "Coordinator", photo: "/team/ayman-mohammedi.webp" },
  { name: "Deepankar Maji", role: "Coordinator" },
  { name: "Chetan IS", role: "Coordinator", photo: "/team/chetan-is.webp" },
  { name: "MD Sabir", role: "Coordinator", photo: "/team/md-sabir.webp" },
  { name: "MD Omeir", role: "Coordinator", photo: "/team/md-omeir.webp" },
  { name: "Sagar H D", role: "Coordinator", photo: "/team/sagar-h-d.webp" },
  { name: "Rakesh M", role: "Coordinator", photo: "/team/rakesh-m.webp" },
  { name: "Sandeep N Goudar", role: "Coordinator", photo: "/team/sandeep-n-goudar.webp" },
  { name: "Shashank", role: "Coordinator", photo: "/team/shashank.webp" },
  { name: "Rutik Bhandare", role: "Coordinator", photo: "/team/rutik-bhandare.webp" },
  { name: "S J Pavan Rao", role: "Coordinator", photo: "/team/s-j-pavan-rao.webp" },
  { name: "Akifa Ghouse", role: "Coordinator", photo: "/team/akifa-ghouse.webp" },
  { name: "Sharat O", role: "Coordinator", photo: "/team/sharat-o.webp" },
  { name: "Maera Shams", role: "Coordinator" },
  { name: "MD Maaz", role: "Coordinator" },
  { name: "MD Luqman", role: "Coordinator" },
  { name: "Anusha", role: "ECE · 5th Sem" },
  { name: "Mohammed Bilal", role: "ECE · 5th Sem" },
  { name: "Mamatha", role: "ECE · 5th Sem" },
  { name: "Karpaswamy", role: "ECE · 5th Sem" },
  { name: "Mubasshira", role: "ECE · 5th Sem" },
  { name: "Jayesh", role: "ECE · 5th Sem" },
  { name: "Gagan", role: "ECE · 5th Sem" },
  { name: "Rohith", role: "ECE · 5th Sem" },
  { name: "Shaistha", role: "ECE · 3rd Sem" },
  { name: "Nisha", role: "ECE · 3rd Sem" },
  { name: "Munavvara", role: "ECE · 3rd Sem" },
  { name: "Poorvika", role: "ECE · 3rd Sem" },
  { name: "Munazza", role: "ECE · 3rd Sem" },
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
    title: "Pre-hackathon Talk & Inauguration",
    date: "Fri, 11 December 2026",
    time: "10:00 AM – 1:30 PM IST",
    sessions: [
      { label: "Pre-hackathon talk (Cyber Security)", time: "10:00 AM – 12:00 PM" },
      { label: "Inauguration", time: "1:00 – 1:30 PM" },
    ],
    description:
      "Our chief guest opens Nexora 2.0 with a 2-hour pre-hackathon talk on cyber security, followed by the inauguration after lunch.",
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
    time: "12:30 – 1:00 PM IST",
    description: "Closing ceremony, winner announcements and prize distribution.",
    chiefGuest: { role: "Chief Guest — to be announced" }, // TODO: add valedictory chief guest
    accent: "primary",
  },
];
