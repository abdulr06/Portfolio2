import type { IconName } from "./icons";

export type PortfolioItem = {
  title: string;
  /** Short placeholder description — replace with your own copy */
  description: string;
  /** Optional: point at your own media, e.g. "/images/projects/my-image.jpg" */
  image?: string;
  /** Optional: extra placeholder tiles to showcase a set of media */
  gallery?: number;
  tags?: string[];
  href?: string;
  aspectRatio?: string;
  span?: 1 | 2;
};

export type PortfolioSection = {
  id: string;
  label: string;
  navIcon: IconName;
  title: string;
  description: string;
  columns: "2" | "3";
  items: PortfolioItem[];
};

export const sections: PortfolioSection[] = [
  {
    id: "software",
    label: "Software",
    navIcon: "code",
    title: "Software & Web Development",
    description:
      "Full-stack builds, data work and algorithm-heavy coursework. Placeholder copy — swap in your own write-ups and screenshots.",
    columns: "2",
    items: [
      {
        title: "Beyblade Inventory Database",
        description:
          "Placeholder description: full-stack inventory system with authentication, CRUD stock management and a relational schema mirrored into a document store.",
        tags: ["PHP", "SQL", "MongoDB", "Full-stack"],
        aspectRatio: "16 / 10",
        span: 2,
      },
      {
        title: "Deloitte Data Analytics Job Simulation",
        description:
          "Placeholder description: data cleaning, forensic analysis and dashboard-style reporting completed as part of the Deloitte virtual programme.",
        tags: ["Data analytics", "Excel", "Tableau"],
        aspectRatio: "16 / 10",
      },
      {
        title: "Birthday Website",
        description:
          "Placeholder description: a small personal side project — an animated, single-page surprise site built for a friend.",
        tags: ["HTML", "CSS", "JavaScript"],
        aspectRatio: "16 / 10",
      },
      {
        title: "Advanced Data Structures — Coursework I",
        description:
          "Placeholder description: implementation-heavy work in C++ covering trees, heaps and graph traversal with an emphasis on complexity analysis.",
        tags: ["C++", "Data structures", "Complexity"],
        aspectRatio: "16 / 10",
      },
      {
        title: "Algorithms — Coursework II",
        description:
          "Placeholder description: complex problem-solving in C++ — dynamic programming, greedy strategies and competitive-style optimisation problems.",
        tags: ["C++", "Algorithms", "DP"],
        aspectRatio: "16 / 10",
      },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    navIcon: "chip",
    title: "Hardware & Systems Engineering",
    description:
      "Digital logic, silicon and the machines I put together by hand. Replace the placeholders with board photos and benchmark captures.",
    columns: "2",
    items: [
      {
        title: "Tang Nano 9K FPGA — Digital Logic Design",
        description:
          "Placeholder description: Verilog modules synthesised onto the Tang Nano 9K — state machines, clock division, seven-segment drivers and testbench simulation.",
        tags: ["Verilog", "FPGA", "Digital logic", "Gowin EDA"],
        aspectRatio: "4 / 3",
      },
      {
        title: "Custom PC Builds & Thermal Benchmarks",
        description:
          "Placeholder gallery: assembly walkthroughs, cable management, airflow layouts and before/after thermal and acoustic benchmark results.",
        tags: ["PC assembly", "Thermals", "Benchmarking"],
        aspectRatio: "4 / 3",
        gallery: 4,
      },
    ],
  },
  {
    id: "creative",
    label: "Creative",
    navIcon: "palette",
    title: "Creative Media",
    description:
      "Graphic design, UI work and video editing. A dense grid built for visuals — drop your own artwork into each tile.",
    columns: "3",
    items: [
      {
        title: "Sports Team Logo Design",
        description: "Placeholder: crest and mascot marks, wordmarks and kit applications.",
        tags: ["Logo", "Branding"],
        aspectRatio: "1 / 1",
      },
      {
        title: "Brand Identity Systems",
        description: "Placeholder: type pairings, palettes and layout systems for a full identity.",
        tags: ["Identity", "Print"],
        aspectRatio: "1 / 1",
      },
      {
        title: "UI / UX Mockups",
        description: "Placeholder: app flows, component sheets and high-fidelity screens.",
        tags: ["UI/UX", "Figma"],
        aspectRatio: "1 / 1",
      },
      {
        title: "Android Launcher Configs",
        description:
          "Placeholder: custom home-screen setups — icon packs, widgets and KWGT layouts.",
        tags: ["Android", "Customisation"],
        aspectRatio: "1 / 1",
      },
      {
        title: "Video Editing Reel",
        description:
          "Placeholder: professional edit reel — colour grading, sound design and motion titles.",
        tags: ["Premiere Pro", "After Effects"],
        aspectRatio: "16 / 9",
        span: 2,
      },
      {
        title: "Thumbnails & Social Graphics",
        description: "Placeholder: high-CTR thumbnails, posters and social campaign assets.",
        tags: ["Photoshop", "Social"],
        aspectRatio: "1 / 1",
      },
    ],
  },
  {
    id: "builds",
    label: "Builds",
    navIcon: "hammer",
    title: "Architectural & Physical Builds",
    description:
      "Spaces and furniture I designed and built. High-resolution placeholders ready for your own photography.",
    columns: "2",
    items: [
      {
        title: "Custom Woodwork",
        description:
          "Placeholder description: joinery, finishing and hand-built storage — process shots and final results.",
        tags: ["Woodwork", "Fabrication"],
        aspectRatio: "3 / 2",
      },
      {
        title: "Media Wall Design",
        description:
          "Placeholder description: cable-managed media wall with integrated lighting and mounted display planning.",
        tags: ["Interior", "AV"],
        aspectRatio: "3 / 2",
      },
      {
        title: "Custom Desk Configuration",
        description:
          "Placeholder description: desk layout, monitor arms, acoustic treatment and lighting for long work sessions.",
        tags: ["Setup", "Ergonomics"],
        aspectRatio: "3 / 2",
        span: 2,
      },
    ],
  },
];
