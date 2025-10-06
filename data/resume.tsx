import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Prabuddha Narayan Datta",
  initials: "PD",
  url: "https://dillion.io",
  location: "India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
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

//   work: [
//     {
//       company: "Jio Platforms",
//       href: "",
//       badges: [],
//       location: "Remote",
//       title: "Project Intern",
//       logoUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohZW0W9TJymIUxUO7wDwLLWzxdugPz5FiRw&s",
//       start: "Aug 2024",
//       end: "May 2025",
//       description:
//         "Engineered precise data transmission protocols using Protocol Buffers, ensuring type-safe interactions thatimproved efficiency in medical documentation workflows.Integrated Socket.IO with a gRPC server to enable real-time audio streaming via Protocol Buffers,facilitating efficient and seamless communication between client and server.",
//     },
//     {
//       company: "Perfect Software Solutions",
//       badges: [],
//       href: "",
//       location: "Aurangabad",
//       title: "Frontend Intern",
//       logoUrl: "/PSS-Logo.png",
//       start: "Jan 2024",
//       end: "Mar 2024",
//       description:
//         "Crafted pixel-perfect React components from Figma designs, integrating advanced animations with FramerMotion to enhance the UI/UX of flagship products, ensuring a seamless and engaging user experience(UX).",
//     },
//   ],
  education: [
    {
      school: "Indian Institute of Technology(IIT), Patna",
      href: "",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgqfQzC_IS038iujinz4yAE1zRW2z-2cX5YI459Oy8zm9VLa3b9OcMG2AyJdlmJMltO8&usqp=CAU",
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
        "Engineered a scalable video upload system with [AWS S3 presigned URLs]() and [multipart uploads](), ensuring resumable and failure-safe uploads.Built resilient [background jobs with BullMQ + Redis]() (idempotency, exponential backoff), offloaded heavy tasks to workers, and delivered a real-time dashboard with secure share links, previews, and instant alerts.",
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
          href: "https://vidsvault.vercel.app",
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/video-vault/blob/main/README.md",
          icon: <Icons.github className="size-3" />,
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
        "Built an AI-powered finance app with real-time tracking, smart budgeting, and dynamic dashboards.Used [Gemini 1.5]() Flash for [90%+ accurate]() receipt scanning and [auto-logging of transactions]().Automated alerts, reminders, and [reports]() using Inngest to boost engagement and retention.Secured access with Arcjet [rate limiting]() and bot protection for safe, scalable performance.",
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
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/finsync/blob/main/README.md",
          icon: <Icons.github className="size-3" />,
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
        "Architected a high-performance MERN web app for [1000+]() users with optimized queries and Zustand state management. Built a [WebSocket]() chat with sub-50ms latency. Developed an analytics dashboard using [MongoDB Aggregation](), automating reports and improving decision-making.",
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
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/Ichofy/blob/main/Readme.md",
          icon: <Icons.github className="size-3" />,
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
        "Built as a rapid assignment in under [6 hours](), this AI-powered website builder leverages [Gemini 1.5]() Flash to generate [multi-page sites]() from plain-text prompts, featuring live iframe editing, theme customization, [CMS-style navigation](), and a clean, modern UI.",
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
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/ai-web-gen/blob/main/README.md",
          icon: <Icons.github className="size-3" />,
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
        "Developed Talent Hire, a scalable Job Board Platform using Next.js, PostgreSQL, Prisma ORM, and Clerk Auth for  server-side rendering, efficient data handling, and secure user authentication, contributing to [80+ commits](https://github.com/Rupesh-Piwal/TalentHire/commits/main/).",
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
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/TalentHire",
          icon: <Icons.github className="size-3" />,
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
        "Engineered a Next.js and TypeScript-based code editor with dynamic features including syntax highlighting,customizable themes, padding configurations, and support for over 6 languages, contributing to [35+ commits](https://github.com/Rupesh-Piwal/code-canvas/commits/main/) in a repository.",
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
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/code-canvas",
          icon: <Icons.github className="size-3" />,
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
        "Built a scalable MERN chat app with 99.9% uptime, supporting [100+]() users via [Socket.io](). Secured sessions with JWT authentication. Optimized media uploads with Cloudinary, improving performance by 40%. Added [2ms]() haptic feedback using the [Vibration API](), real-time indicators, and read receipts for engagement.",
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
          icon: <Icons.external className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rupesh-Piwal/zapchat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zapchat-thumbnail.png",
      video: "",
    },
  ],
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
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
