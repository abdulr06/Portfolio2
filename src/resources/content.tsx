import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  // PLACEHOLDER: replace with your full name
  firstName: "Abdul",
  lastName: "Rehman",
  name: `Abdul Rehman`,
  role: "Computer Science & Systems Engineer",
  avatar: "/images/avatar.jpg",
  email: "arg4gg@gmail.com",
  location: "Asia/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    // PLACEHOLDER: replace with your GitHub profile
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdulr06",
    essential: true,
  },
  {
    // PLACEHOLDER: replace with your LinkedIn profile
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdul-rehman-48914224b/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Engineering & Design Portfolio`,
  description:
    "Portfolio of a Computer Science & Engineering student working across software, hardware systems, graphic design and video editing.",
  headline: <>Engineering systems. Designing everything around them.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">CSE</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Software · Hardware · Creative Media
        </Text>
      </Row>
    ),
    href: "#software",
  },
  subline: (
    <>
      Bridging the gap between low-level hardware architecture and polished user experiences. I engineer high-performance physical systems and data structures, applying professional design expertise to deliver complete, market-ready solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Systems Engineer based in Istanbul specializing in the intersection of low-level hardware architecture and high-performance software. My technical foundation spans C++ memory management, FPGA digital logic, and scalable database design. By combining rigorous backend engineering with professional technical design, I build physical and digital systems that are computationally efficient, highly intuitive, and market-ready.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Commonwealth Bank (via Forage)",
        timeframe: "June 2026",
        role: "Data Analytics Consultant (Simulation)",
        achievements: [
            "Evaluated network vulnerabilities and simulated enterprise-level threat mitigation strategies."
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/commonwealth.jpg",
            alt: "Once UI Project",
            width: 12,
            height: 9,
          },
        ],
      },
      {
        company: "Deloitte Australia (via Forage)",
        timeframe: "August 2026",
        role: "Data Analytics Consultant (Simulation)",
        achievements: [
            "Simulated client strategy delivery by transforming raw data into comprehensive executive dashboards."
        ],
        images: [
          {
            src: "/images/projects/project-01/deloitte.jpg",
            alt: "Once UI Project",
            width: 12,
            height: 9,
          }
        ],
      },
      {
        company: "Independent Technical Designer",
        timeframe: "2020 - 2022",
        role: "Lead Digital Media Designer",
        achievements: [
            "Directed brand identity and full-cycle media production for high-traffic community platforms, engineering optimized video assets and custom graphic architectures to drive user engagement."
        ],
        images: [
          
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sabanci University, Istanbul",
        description: <>Computer Science & Engineering</>,
      },
      {
        name: "Pakistan International School, Riyadh",
        description: <>O/A Levels</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full-Stack Database & Web Development",
        description: (
          <>Engineering comprehensive database systems alongside deploying modern web architectures.</>
        ),
        tags: [
          {
            name: "PHP",
          },
          {
            name: "MySQL",
          },
          {
            name: "MongoDB",
          },
          {
            name: "Next.js",
          },
          {
            name: "Vercel",
          },
          {
            name: "HTML/CSS",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Digital Hardware Design & Simulation",
        description: (
          <>Designing simulated and physical digital logic circuits.</>
        ),
        tags: [
          {
            name: "Verilog",
          },
          {
            name: "Digital Logic",
          },
          {
            name: "Circuit Design",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Object-Oriented Programming & Software Engineering",
        description: (
          <>Architected and optimized high-performance algorithms, custom data structures, and manual memory management systems.</>
        ),
        tags: [
          {
            name: "C++",
          },
          {
            name: "Advanced Data Structures",
          },
          {
            name: "Git/Github",
          },
          {
            name: "Memory Management",
          },
          {
            name: "Algorithm Optimization",
          },
          {
            name: "Data Modelling",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Creative Media & Interactive UI Design",
        description: (
          <>Delivered freelance graphic design assets, including branding and video editing.</>
        ),
        tags: [
          {
            name: "Behance",
          },
          {
            name: "Adobe Creative Suite",
          },
          {
            name: "DaVinci Resolve",
          },
          {
            name: "FFmpeg",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

