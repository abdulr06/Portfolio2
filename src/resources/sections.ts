import type { IconName } from "./icons";

export type PortfolioItem = {
  title: string;
  /** Short placeholder description — replace with your own copy */
  description: string;
  /** Optional: point at your own media, e.g. "/images/projects/my-image.jpg" */
  image?: string;
  /** Optional: extra placeholder tiles to showcase a set of media */
  video?: string;
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
      "Full-stack builds, data work and algorithm-heavy coursework.",
    columns: "2",
    items: [
      {
        title: "Beyblade Inventory Database",
        description:
          "This is a full-stack inventory management system built with PHP, SQL, and MongoDB that utilizes custom relational schemas to accurately track and categorize Beyblade Metal Fight collections. I have shown the E-R Diagram as a reference.",
        tags: ["PHP", "SQL", "MongoDB", "Full-stack"],
        aspectRatio: "16 / 9",
        
        image: "/images/gallery/PortfolioImages/beyblade.png"
      },
      {
        title: "Custom C++ Arena Allocator",
        description:
          "A high-performance memory management class utilizing placement new and raw pointer arithmetic to optimize cache locality and eliminate operating system allocation overhead.",
        tags: ["C++", "Data structures", "Complexity"],
        aspectRatio: "15 / 10",
        image: "/images/gallery/PortfolioImages/carbon.png"
      },
      {
        title: "0/1 Knapsack Optimization in C++",
        description:
          "A dynamic programming algorithm utilizing 2D tabulation to efficiently solve the 0/1 knapsack problem by calculating the optimal maximum value for a given weight capacity.",
        tags: ["C++", "Algorithms", "DP"],
        aspectRatio: "22 / 10",
        image: "/images/gallery/PortfolioImages/carbon (1).png"
      },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    navIcon: "chip",
    title: "Hardware & Systems Engineering",
    description:
      "Digital logic, silicon and the machines I put together by hand.",
    columns: "2",
    items: [
      {
        title: "Custom All-White High-Performance PC Build",
        description:
          "A meticulously assembled, aesthetically driven custom desktop featuring a Zotac GeForce RTX 4060Ti GPU, Intel i9 14900k CPU, and 32gb of DDR5 6400MT/s RAM with custom sleeved cables.",
        tags: ["PC assembly"],
        aspectRatio: "3 / 4",
        image: "/images/gallery/PortfolioImages/pcbuild.jpeg"
      },
      {
        title: "Tang Nano 9K FPGA Hardware Implementation",
        description:
          "A physical digital logic project utilizing a Tang Nano 9K development board programmed in Verilog to interface with tactile switches, LED indicators, and a multiplexed 7-segment display.",
        tags: ["Digital Logic"],
        aspectRatio: "4 / 3",
        image: "/images/gallery/PortfolioImages/fpga.jpeg"
      },
    ],
  },
  {
    id: "creative",
    label: "Creative",
    navIcon: "palette",
    title: "Creative Media",
    description:
      "Graphic design and video editing.",
    columns: "3",
    items: [
      {
        title: "Sabanci Cricket Club Logo Design",
        description: "A custom digital crest created for a university sports organization, featuring a dynamic batsman silhouette, bold typography, and a textured crimson color palette.",
        tags: ["Logo", "Branding"],
        aspectRatio: "1 / 1",
        image: "/images/gallery/PortfolioImages/logo.jpeg"
      },
      {
        title: "Cinematic Animated Sequence Edit",
        description:
          "A high-energy video montage demonstrating advanced audio-synchronization, rapid cut transitions, and dramatic visual storytelling using footage from Avatar: The Last Airbender.",
        tags: ["DaVinci Resolve", "After Effects"],
        aspectRatio: "4 / 3",
        video: "/images/gallery/PortfolioImages/videoedit.mp4",
        span: 2,
      },
    ],
  },
];
