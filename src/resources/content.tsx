import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  // PLACEHOLDER: replace with your full name
  firstName: "Abdul",
  lastName: "Rehman",
  name: `Abdul Rehman`,
  role: "CSE Student · Software, Hardware, Video Editing & Graphic Design",
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
      I&apos;m {person.firstName} {person.lastName}, a Computer Science &amp; Engineering student at Sabanci University focused on systems and
      hardware — and a highly experienced graphic designer and video editor. I build the thing, then
      I make it look and feel right.
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
        I am a 20-year-old undergraduate student at Sabanci University, 
        My diverse skill set spans across multiple disciplines, including Video Editing, Graphic design, Software development, and PC hardware consulting. 
        With a balanced blend of technical expertise and creative thinking, I approach each project with precision and adaptability. 
        Whether it's developing user-centric digital solutions or creating visually compelling designs, I take pride in delivering work that is both effective and thoughtfully executed.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Forage, Commonwealth Bank",
        timeframe: "June 2026",
        role: "Cybsersecurity Job Simulation",
        achievements: [
          <>
            Completed the Introduction to Cybersecurity Job Simulation at Commonwealth Bank.
          </>,
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
        company: "Forage, Deloitte Australia",
        timeframe: "August 2026",
        role: "Data Analytics Job Simulation",
        achievements: [
          <>
            Completed the Data Analytics Job Simulation at Deloitte Australia.
          </>,
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
        company: "Discord",
        timeframe: "2020 - 2022",
        role: "Creative Design",
        achievements: [
          <>
            Worked with multiple servers as their lead designer and lead video editor.
          </>,
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
        description: <>Currently studying Computer Science & Engineering.</>,
      },
      {
        name: "Pakistan International School, Riyadh",
        description: <>Studied A/O Levels, with exceptional grades.</>,
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
            name: "XAMPP",
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
            name: "Wokwi",
          },
          {
            name: "Tang Nano 9K FPGA",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Object-Oriented Programming & Software Engineering",
        description: (
          <>Wrote, debugged, and optimized complex algorithmic code for advanced Computer Science coursework.</>
        ),
        tags: [
          {
            name: "CLion",
          },
          {
            name: "VS Code",
          },
          {
            name: "Git/Github",
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

