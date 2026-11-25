export type TrackSlug = "edge-iot" | "cyber-security";

export type ProblemStatement = {
  id: string;
  title: string;
  summary: string;
  difficulty: "Intermediate" | "Advanced" | "Expert";
};

export type Track = {
  slug: TrackSlug;
  number: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  accent: "iot" | "cyber";
  leadPartner: string;
  focusAreas: { title: string; text: string }[];
  problems: ProblemStatement[];
  stack: string[];
  judging: { criterion: string; weight: number }[];
  deliverables: string[];
};

export const tracks: Track[] = [
  {
    slug: "edge-iot",
    number: "01",
    name: "Edge IoT",
    short: "IoT",
    tagline: "Intelligence where the data is born.",
    description:
      "Design connected systems that sense, decide and act at the edge — low latency, low power and resilient when the cloud is out of reach. Hardware, firmware, TinyML and system-level design all welcome.",
    accent: "iot",
    leadPartner: "IEEE CASS",
    focusAreas: [
      { title: "TinyML & on-device AI", text: "Run inference on microcontrollers and edge accelerators within tight memory and power budgets." },
      { title: "Low-power sensing", text: "Energy-harvesting nodes, duty-cycling and sensor fusion for long-life deployments." },
      { title: "Edge-to-cloud pipelines", text: "MQTT, CoAP and LoRaWAN pipelines with offline-first sync and graceful degradation." },
      { title: "Circuits & systems", text: "Hardware/software co-design, signal conditioning and efficient embedded architectures." },
    ],
    problems: [
      { id: "IOT-01", title: "Smart-grid anomaly detection at the substation", summary: "Detect faults and load anomalies on an edge gateway using streaming sensor data, without round-trips to the cloud.", difficulty: "Advanced" },
      { id: "IOT-02", title: "Precision agriculture on a coin-cell budget", summary: "A soil and micro-climate node that lasts a full season and alerts farmers over a low-bandwidth link.", difficulty: "Intermediate" },
      { id: "IOT-03", title: "TinyML for predictive maintenance", summary: "Classify vibration signatures of industrial motors on an MCU to predict failures before they happen.", difficulty: "Advanced" },
      { id: "IOT-04", title: "Privacy-first smart-campus occupancy", summary: "Count and map occupancy in real time without cameras or personal identifiers.", difficulty: "Intermediate" },
      { id: "IOT-05", title: "Disaster-resilient mesh communication", summary: "A self-healing mesh that keeps first responders connected when cellular infrastructure is down.", difficulty: "Expert" },
      { id: "IOT-OPEN", title: "Open innovation — Edge IoT", summary: "Bring your own problem. Must run meaningful computation on an edge device.", difficulty: "Intermediate" },
    ],
    stack: ["ESP32 / STM32", "Raspberry Pi", "Arduino", "TensorFlow Lite Micro", "Edge Impulse", "MQTT", "LoRaWAN", "Zephyr / FreeRTOS", "Node-RED", "Grafana"],
    judging: [
      { criterion: "Innovation & originality", weight: 25 },
      { criterion: "Technical depth (edge compute, efficiency)", weight: 30 },
      { criterion: "Working prototype / demo", weight: 25 },
      { criterion: "Real-world impact & scalability", weight: 10 },
      { criterion: "Presentation", weight: 10 },
    ],
    deliverables: [
      "Working hardware or simulated prototype with live demo",
      "Public repository with README and architecture diagram",
      "Power / latency measurements where applicable",
      "5-minute pitch deck",
    ],
  },
  {
    slug: "cyber-security",
    number: "02",
    name: "Cyber Security",
    short: "Cyber",
    tagline: "Defend what the world depends on.",
    description:
      "Build tools that detect, prevent and respond to threats — from hardened firmware to AI-driven SOC workflows. Offensive research is welcome when it leads to a defensive outcome.",
    accent: "cyber",
    leadPartner: "DEFSEC",
    focusAreas: [
      { title: "Threat detection & response", text: "Anomaly detection, SIEM rules and automated triage for modern networks." },
      { title: "IoT & firmware security", text: "Secure boot, OTA integrity, device attestation and firmware analysis." },
      { title: "Applied cryptography", text: "Post-quantum readiness, lightweight crypto and privacy-preserving computation." },
      { title: "Digital forensics", text: "Evidence collection, malware analysis and incident reconstruction." },
    ],
    problems: [
      { id: "CYB-01", title: "Lightweight IDS for constrained IoT networks", summary: "An intrusion detection system that runs on a gateway and flags attacks on MQTT/CoAP traffic.", difficulty: "Advanced" },
      { id: "CYB-02", title: "Phishing & deepfake detection for citizens", summary: "A browser or mobile tool that warns users about phishing links, scam calls or manipulated media.", difficulty: "Intermediate" },
      { id: "CYB-03", title: "Secure OTA updates for edge fleets", summary: "Signed, verifiable, rollback-safe firmware delivery for thousands of devices.", difficulty: "Expert" },
      { id: "CYB-04", title: "AI-assisted SOC triage", summary: "Cluster, enrich and prioritise alerts so analysts spend time on what matters.", difficulty: "Advanced" },
      { id: "CYB-05", title: "Critical-infrastructure honeypot", summary: "A realistic ICS/SCADA decoy that captures attacker behaviour and produces actionable intel.", difficulty: "Advanced" },
      { id: "CYB-OPEN", title: "Open innovation — Cyber Security", summary: "Bring your own problem. Must have a clear defensive outcome.", difficulty: "Intermediate" },
    ],
    stack: ["Wireshark", "Zeek / Suricata", "Wazuh", "Ghidra", "Python / Rust", "Kali Linux", "OpenSSL / liboqs", "Docker", "Elastic Stack", "YARA"],
    judging: [
      { criterion: "Innovation & originality", weight: 25 },
      { criterion: "Security rigour & threat model", weight: 30 },
      { criterion: "Working prototype / demo", weight: 25 },
      { criterion: "Real-world impact & usability", weight: 10 },
      { criterion: "Presentation", weight: 10 },
    ],
    deliverables: [
      "Working prototype with live attack/defence demo",
      "Public repository with README and threat model",
      "Responsible-disclosure note for any real findings",
      "5-minute pitch deck",
    ],
  },
];

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}
