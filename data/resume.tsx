import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";


export const DATA = {
  name: "Prabuddha Narayan Datta",
  initials: "PD",
  url: "https://dillion.io",
  location: "India",
  description:
    "Capable of handling end-to-end fullstack projects and codebases.",
  skills: [
    "React",
    "JavaScript",
    "Next.js",
    "Typescript",
    "Zustand",
    "Redux",
    "Tailwind CSS",
    "Express.js",
    "Node.js",
    "Prisma",
    "Postgres",
    "MongoDB",
    "REST APIs",
    "SQL",
    "Docker",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "prabuddha1749@gmail.com",
    tel: "9007139883",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prabuddhaxdev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prabuddhaxdev/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prabuddhaxdev",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Indian Institute of Technology (IIT), Patna",
      href: "",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/logo.png",
      start: "2024",
      end: "Current",
    },
  ],

  projects: [
    {
      title: "VidVault",
      href: "https://vidsvault.vercel.app/",
      dates: "Aug 2025 - Oct 2025",
      active: true,
      description:
        "Engineered a scalable video upload system with AWS S3 presigned URLs and multipart uploads, ensuring resumable and failure-safe uploads. Built resilient background jobs with BullMQ + Redis (idempotency, exponential backoff), offloaded heavy tasks to workers, and delivered a real-time dashboard with secure share links, previews, and instant alerts.",
      technologies: [
        "Nextjs",
        "AWS",
        "Redis",
        "BullMQ",
        "PostgreSQL",
        "Nodejs",
        "Express",
        "Supabase Auth",
      ],
      links: [
        {
          type: "Live",
          href: "https://vidsvault.vercel.app/",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/video-vault/blob/main/README.md",
          icon: Icons.github,
        },
      ],
      image: "/dashboard.png",
      video: "",
    },
    {
      title: "FinSync",
      href: "https://finsyncai.vercel.app",
      dates: "Mar 2025 - June 2025",
      active: true,
      description:
        "Built an AI-powered finance app with real-time tracking, smart budgeting, and dynamic dashboards. Used Gemini 1.5 Flash for 90%+ accurate receipt scanning and auto-logging of transactions. Automated alerts, reminders, and reports using Inngest to boost engagement and retention. Secured access with Arcjet rate limiting and bot protection for safe, scalable performance.",
      technologies: [
        "Nextjs",
        "PostgreSQL",
        "Docker",
        "Gemini AI",
        "Nodejs",
        "Prisma",
        "Clerk Auth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live",
          href: "https://finsyncai.vercel.app",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/finsync/blob/main/README.md",
          icon: Icons.github,
        },
      ],
      image: "/fnsync.png",
      video: "",
    },
    {
      title: "Ichofy",
      href: "https://ichofy.onrender.com",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Architected a high-performance MERN web app for 1000+ users with optimized queries and Zustand state management. Built a WebSocket chat with sub-50ms latency. Developed an analytics dashboard using MongoDB Aggregation, automating reports and improving decision-making.",
      technologies: [
        "Reactjs",
        "Zustand",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "Socket.io",
        "Clerk Auth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live",
          href: "https://ichofy.onrender.com/",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/Ichofy/blob/main/Readme.md",
          icon: Icons.github,
        },
      ],
      image: "/ichofy_thumbnail.png",
      video: "",
    },
    {
      title: "Website Generator",
      href: "https://webgn-ai.vercel.app/",
      dates: "July 2025",
      active: true,
      description:
        "Built as a rapid assignment in under 6 hours, this AI-powered website builder leverages Gemini 1.5 Flash to generate multi-page sites from plain-text prompts, featuring live iframe editing, theme customization, CMS-style navigation, and a clean, modern UI.",
      technologies: [
        "Nextjs",
        "Gemini AI",
        "Nodejs",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live",
          href: "https://webgn-ai.vercel.app/",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/ai-web-gen/blob/main/README.md",
          icon: Icons.github,
        },
      ],
      image: "/web-gen.png",
      video: "",
    },
    {
      title: "Talent Hire",
      href: "https://talent-hire-xi.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "Developed Talent Hire, a scalable Job Board Platform using Next.js, PostgreSQL, Prisma ORM, and Clerk Auth for server-side rendering, efficient data handling, and secure user authentication, contributing to 80+ commits.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live",
          href: "https://talent-hire-xi.vercel.app/",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/TalentHire",
          icon: Icons.github,
        },
      ],
      image: "/talenthire_thumbnail.png",
      video: "",
    },
    {
      title: "CodeCanvas",
      href: "https://code-canvas-alpha1.vercel.app",
      dates: "September 2024 - September 2024",
      active: true,
      description:
        "Engineered a Next.js and TypeScript-based code editor with dynamic features including syntax highlighting, customizable themes, padding configurations, and support for over 6 languages, contributing to 35+ commits in a repository.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live",
          href: "https://code-canvas-alpha1.vercel.app/",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/code-canvas",
          icon: Icons.github,
        },
      ],
      image: "/canvas.png",
      video: "",
    },
    {
      title: "Zapchat",
      href: "http://zapchat-kbke.onrender.com",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Built a scalable MERN chat app with 99.9% uptime, supporting 100+ users via Socket.io. Secured sessions with JWT authentication. Optimized media uploads with Cloudinary, improving performance by 40%. Added 2ms haptic feedback using the Vibration API, real-time indicators, and read receipts for engagement.",
      technologies: [
        "Reactjs",
        "Zustand",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "Socket.io",
        "JWT Auth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Live",
          href: "http://zapchat-kbke.onrender.com",
          icon: Icons.external,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/zapchat",
          icon: Icons.github,
        },
      ],
      image: "/zapchat-thumbnail.png",
      video: "",
    },
    // hackathons: [
    //   {
    //     title: "Hack Western 5",
    //     dates: "November 23rd - 25th, 2018",
    //     location: "London, Ontario",
    //     description:
    //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //     links: [],
    //   },
    //   {
    //     title: "Hack The North",
    //     dates: "September 14th - 16th, 2018",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //     links: [],
    //   },
    // ],
  ],
} as const;
