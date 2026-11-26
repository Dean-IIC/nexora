import type { LogoAsset } from "@/components/features/brand-logo";

import { logos } from "./logos";
import type { TrackSlug } from "./tracks";

export type Partner = { name: string; role: string; description: string; tracks: TrackSlug[]; logo?: LogoAsset };

export const partners: Partner[] = [
  {
    name: "IEEE Bangalore",
    role: "In association with — IEEE Bangalore Chapter",
    description:
      "Nexora 2.0 is organised by HKBK College of Engineering in association with the IEEE Bangalore Chapter, connecting participants with IEEE's professional community, mentors and judges.",
    tracks: ["edge-iot", "cyber-security"],
    logo: logos.ieeeBangalore,
  },
  {
    name: "IEEE CASS",
    role: "Technical Collaborator — Edge IoT",
    description:
      "The IEEE Circuits and Systems Society advances the theory, design and application of circuits and systems — the foundation of every edge device. CASS mentors shape the Edge IoT track.",
    tracks: ["edge-iot"],
    logo: logos.ieeeCass,
  },
  {
    name: "C-DAC",
    role: "Knowledge Partner — Both Tracks",
    logo: logos.cdac,
    description:
      "The Centre for Development of Advanced Computing is India's premier R&D organisation for IT and electronics, spanning embedded systems, HPC and cyber security.",
    tracks: ["edge-iot", "cyber-security"],
  },
  {
    name: "DEFSEC",
    role: "Defence Security · Security Collaborator — Cyber Security",
    description:
      "DEFSEC (Defence Security) is the security collaborator for Nexora 2.0, bringing defence-security expertise to the Cyber Security track through problem statements, mentoring and judging.",
    tracks: ["cyber-security"],
  },
];

export const prizes = {
  pool: "₹75,000",
  poolShort: "₹75K",
  positions: ["Winner", "1st Runner-up", "2nd Runner-up"],
  certificates: [
    { title: "Winner's certificate", text: "Awarded to every member of the winning teams." },
    { title: "Certificate of participation", text: "For every participant who takes part in the hackathon." },
  ],
};

export const faqs: { q: string; a: string }[] = [
  { q: "Who can participate?", a: "Undergraduate and postgraduate students from any recognised institution in India. Teams may be inter-college." },
  { q: "What is the team size?", a: "2 to 4 members. Solo entries are not accepted, but you can find teammates in our community channel." },
  { q: "Is there a registration fee?", a: "No. Participation is free for shortlisted teams. Meals, snacks and a workspace are provided during the event." },
  { q: "Can we switch tracks after registering?", a: "Yes, until registration closes. After shortlisting, your track is locked." },
  { q: "Do we need our own hardware for the Edge IoT track?", a: "Bring what you have. A shared hardware lab with dev boards, sensors and tools is available on a first-come basis. Simulated prototypes are also accepted." },
  { q: "Is offensive security allowed in the Cyber Security track?", a: "Only against targets you own or that are provided by the organisers. Any testing of third-party systems is grounds for disqualification." },
  { q: "Can we start building before the event?", a: "You may research and plan, but all code and hardware builds must be done during the 24 hours. Pre-existing libraries and open-source tools are fine." },
  { q: "Will accommodation be provided?", a: "The venue stays open overnight for hacking. Accommodation for outstation teams will be shared with shortlisted participants." },
  { q: "Who owns the IP of our project?", a: "Your team does. Partners may offer incubation or collaboration, but nothing is assigned without your consent." },
];

export const rules: { title: string; items: string[] }[] = [
  {
    title: "Eligibility & teams",
    items: [
      "Teams of 2–4 students with valid institutional ID.",
      "A participant may be part of only one team.",
      "Every team must pick exactly one track: Edge IoT or Cyber Security.",
    ],
  },
  {
    title: "Building",
    items: [
      "All project work must be done during the 24-hour hacking window.",
      "Open-source libraries, frameworks and public datasets are allowed with attribution.",
      "Repositories must be public by code freeze and show commit history from the event.",
    ],
  },
  {
    title: "Security conduct",
    items: [
      "Test only systems you own or targets provided by the organisers.",
      "Do not attack the venue network, other teams or partner infrastructure.",
      "Report any real vulnerability you discover responsibly to the organisers.",
    ],
  },
  {
    title: "Judging",
    items: [
      "Projects are judged against the published per-track criteria.",
      "The jury's decision is final.",
      "Teams that miss the code freeze will not be evaluated.",
    ],
  },
  {
    title: "Code of conduct",
    items: [
      "Be respectful and inclusive — harassment of any kind is not tolerated.",
      "Look after shared equipment and return borrowed hardware.",
      "Organisers may disqualify any team that violates these rules.",
    ],
  },
];
