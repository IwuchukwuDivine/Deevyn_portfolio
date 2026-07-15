import type {
  ExperienceEntry,
  OpenSourceProject,
  Project,
} from "~/utils/types";

export const SITE_URL = "https://deevyn-portfolio.vercel.app";

export const themes = [
  {
    name: "theme-default",
    color: "#ff4500",
  },
  {
    name: "theme-deep-space",
    color: "#00d9ff",
  },
  {
    name: "theme-cosmic-void",
    color: "#ff00ff",
  },
  {
    name: "theme-nebula-glow",
    color: "#b84dff",
  },
  {
    name: "theme-stellar-gold",
    color: "#ffd700",
  },
  {
    name: "theme-aurora-night",
    color: "#00ffaa",
  },
  {
    name: "theme-navy-pink",
    color: "#fc5185",
  },
  {
    name: "theme-warm-purple",
    color: "#d1512d",
  },
  {
    name: "theme-grey-red",
    color: "#d72323",
  },
];

export const facts = [
  "💫 I have a very fast and calculating mind",
  "⚡ My favorite programming language is JavaScript",
  "🎨 I paid for a course on three.js but never finished it",
  "🚀 I prefer vanilla css over frameworks",
  "✨ My best Javascript framework is Vue.js",
  "💻 I believe in writing clean, maintainable code with TypeScript",
  "🎮 I can spend hours optimizing performance and user experience",
  "🌟 I'm always learning new web technologies and frameworks",
  "🔥 I love the challenge of solving complex coding problems",
  "🎯 I'm a perfectionist when it comes to UI/UX details",
  "🌐 I love crocheting",
  "I have little to no problem learning new things and I am very curious",
  "I studied Civil and Environmental Engineering in the University of Port Harcourt",
  "I am a first class graduate",
  "I was the best Graduating Student in my secondary and university, proof that I am always the best",
  "I am lazy and hardworking at the same time",
  "I want to be rich rich",
];
export const SKILLS = [
  {
    id: "javascript",
    label: "JavaScript",
    color1: "#ffd86b",
    color2: "#ff9f47",
    text: "Core language for web & app development.",
  },
  {
    id: "typescript",
    label: "TypeScript",
    color1: "#85d1ff",
    color2: "#6fa7ff",
    text: "Typed JS for large, scalable projects.",
  },
  {
    id: "react-native",
    label: "React Native",
    color1: "#8ee6ff",
    color2: "#508bff",
    text: "Cross-platform mobile apps.",
  },
  {
    id: "capacitor",
    label: "Capacitor",
    color1: "#b78bff",
    color2: "#ff6bb0",
    text: "Native runtime for web-based mobile apps.",
  },
  {
    id: "nuxt",
    label: "Nuxt",
    color1: "#7ee0ff",
    color2: "#7b6bff",
    text: "SSR & full-stack Vue framework.",
  },
  {
    id: "supabase",
    label: "Supabase",
    color1: "#7fffd4",
    color2: "#28cba5",
    text: "Auth, DB, APIs & storage backend.",
  },
  {
    id: "node-red",
    label: "Node-RED",
    color1: "#ff6161",
    color2: "#ff3434",
    text: "Automation & low-code flows.",
  },
  {
    id: "vuetify",
    label: "Vuetify",
    color1: "#caa6ff",
    color2: "#8e6bff",
    text: "Material UI Framework.",
  },
  {
    id: "python",
    label: "Python",
    color1: "#f7db6a",
    color2: "#4b8bff",
    text: "Scripting, automation & backend tooling.",
  },
  {
    id: "aws-lambda",
    label: "AWS (Lambda)",
    color1: "#ffa34b",
    color2: "#ff7f00",
    text: "Serverless compute & cloud services.",
  },
  {
    id: "bootstrap",
    label: "Bootstrap",
    color1: "#ba8bff",
    color2: "#7952b3",
    text: "CSS Framework for layouts & UIs.",
  },
  {
    id: "vue.js",
    label: "Vue.js",
    color1: "#67f2a9",
    color2: "#32c2a0",
    text: "Reactive UI framework.",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    color1: "#ff9de2",
    color2: "#a56bff",
    text: "Agentic workflows, MCP & Claude Code tooling.",
  },
];
export const crochetImages = [
  "/hobby/27A63DF5-857C-483D-8208-A3F60063C3BE.JPG",
  "/hobby/ED115DE1-DAD1-48F8-9576-E6B872DB3B89.JPG",
  "/hobby/IMG_1506.JPG",
  "/hobby/IMG_9165.JPG",
  "/hobby/IMG_9166.JPG",
  "/hobby/IMG_9177.JPG",
  "/hobby/IMG_9178.JPG",
  "/hobby/IMG_9180.JPG",
  "/hobby/IMG_9183.JPG",
  "/hobby/IMG_9189.JPG",
  "/hobby/IMG_9192.JPG",
  "/hobby/IMG_9202.JPG",
  "/hobby/IMG_9207.JPG",
  "/hobby/IMG_9217.JPG",
  "/hobby/IMG_9218.JPG",
  "/hobby/IMG_9220.JPG",
  "/hobby/IMG_9387.JPG",
  "/hobby/IMG_9391.JPG",
  "/hobby/IMG_9398.JPG",
  "/hobby/IMG_9402.JPG",
  "/hobby/IMG_9404.JPG",
  "/hobby/IMG_9408.JPG",
  "/hobby/IMG_9409.JPG",
  "/hobby/IMG_9420.JPG",
  "/hobby/IMG_9808.JPG",
];
export const planetPositions = [
  { top: "15%", left: "20%" },
  { top: "28%", left: "70%" },
  { top: "55%", left: "25%" },
  { top: "62%", left: "75%" },
  { top: "40%", left: "45%" },
];
export const projects: Project[] = [
  {
    slug: "idi-fly",
    name: "IDI Fly",
    icon: "🚁",
    description:
      "Browser-based command platform for autonomous drone fleet operations — flying DJI and MAVLink aircraft from anywhere, with live telemetry, 3D mapping, and low-code automation.",
    tech: [
      "Vue.js",
      "Nuxt",
      "TypeScript",
      "Cesium",
      "WebSockets",
      "Node-RED",
      "AWS",
      "MQTT",
    ],
    link: "https://idroneinnovations.com",
    screenshot: "/projects/idi-fly.webp",
    screenshotAlt: "IDRONEINNOVATIONS — IDI Fly drone autonomy platform",
    category: "client",
    featured: true,
    caseStudy: {
      role: "Software Developer · IDI (IDRONEINNOVATIONS)",
      year: "2024 — Present",
      problem:
        "Flying one drone well is a solved problem. Running many aircraft across multiple sites into a single control room is not: every new dock, site, or aircraft adds another window, another login, another feed to watch. Remote operations stall because operators can't hold the whole picture together.",
      solution:
        "IDI Fly is a browser-based, flight-controller-agnostic command platform (DJI + MAVLink) that puts every mission, every aircraft's telemetry, and every live stream in one pane of glass. It's open by design — a documented REST API, real-time WebSocket telemetry, webhooks, and Node-RED for low-code automation — so it plugs into the systems control rooms already run.",
      highlights: [
        "Real-time fleet telemetry and video over WebSockets, rendered onto Cesium-powered 3D maps with terrain and obstacle awareness",
        "Dock-based autonomous operations: scheduled patrols, alarm response, and Drone-as-First-Responder workflows",
        "UK regulations & site-risk tooling — airspace, Flight Restriction Zones, NOTAMs, and SORA ground-risk scoring baked into flight planning",
        "OAuth 2.0 with scoped permissions, REST + webhook surface for CAD-stack and control-room integrations",
      ],
    },
  },
  {
    slug: "griot",
    name: "Griot",
    icon: "🧠",
    description:
      "An AI Slack teammate with institutional memory. Answers from your team's knowledge base, remembers decisions (and pushes back on contradictions), and tracks todos.",
    tech: ["TypeScript", "AWS Lambda", "CockroachDB", "Vector Search", "Slack API", "RAG"],
    link: "https://griot-web-phi.vercel.app",
    github: "https://github.com/IwuchukwuDivine/griot",
    screenshot: "/projects/griot.webp",
    screenshotAlt: "Griot — AI Slack teammate with institutional memory",
    category: "ai",
    featured: true,
    caseStudy: {
      role: "Creator",
      year: "2025",
      problem:
        "Teams bleed knowledge: decisions live in scrollback, context leaves when people do, and new decisions quietly contradict old ones. Nobody notices until something breaks.",
      solution:
        "Griot is an open-source AI teammate that lives in Slack and never forgets. It maintains four memory types — semantic facts, logged decisions, tracked todos, and recent message context — all stored in CockroachDB with vector search, and answers questions from the team's own knowledge base.",
      highlights: [
        "Conflict Guard: alerts the team when a new decision contradicts a previously logged one",
        "Four-type memory architecture on CockroachDB vector search (RAG over institutional knowledge)",
        "Serverless on AWS Lambda — self-hostable, MIT-licensed",
        "Natural-language interface for learning facts, logging decisions, and managing todos",
      ],
    },
  },
  {
    slug: "herstory-africa",
    name: "HerStory Africa",
    icon: "👑",
    description:
      "The women history forgot to teach you — an open-source digital archive documenting 139+ African women who shaped history, across 26 countries and every era.",
    tech: ["Nuxt 4", "Vue 3", "Nuxt Content", "TypeScript", "Tailwind CSS", "Zod"],
    link: "https://herstoryafrica.com.ng",
    github: "https://github.com/IwuchukwuDivine/HerStory-Africa",
    screenshot: "/projects/herstory-africa.webp",
    screenshotAlt: "HerStory Africa — digital archive of African women in history",
    category: "open-source",
    featured: true,
    caseStudy: {
      role: "Creator & Maintainer",
      year: "2025",
      problem:
        "Most people can name maybe two or three African women from history — yet there are over a hundred whose stories shaped the continent and never made it into classrooms.",
      solution:
        "A fully static, searchable archive built on Nuxt Content: profiles are Markdown with Zod-validated frontmatter, prerendered into fast pages with search by region, era, and cause, an interactive timeline, contextual articles, and built-in text-to-speech.",
      highlights: [
        "139+ profiles across 26 countries, plus 24 in-depth articles",
        "Content-as-data architecture: Markdown + typed Zod collections, zero backend",
        "Text-to-speech playback, favourites, reading progress, RSS feed, and newsletter",
        "Open source (MIT) with good-first-issue onboarding for new contributors",
      ],
    },
  },
  {
    slug: "teacher-oge",
    name: "Teacher Oge Educonsult",
    icon: "📐",
    description:
      "A tutoring platform for WAEC, NECO, JAMB and international exam prep — live lesson bookings, gamified daily quizzes, and a full admin back-office.",
    tech: ["Nuxt 4", "TypeScript", "Tailwind CSS", "Supabase", "Vue Query", "Nitro"],
    link: "https://teacheroge.com",
    screenshot: "/projects/teacher-oge.webp",
    screenshotAlt: "Teacher Oge Educonsult — exam prep tutoring platform",
    category: "client",
    featured: true,
    caseStudy: {
      role: "Full-Stack Developer",
      problem:
        "A veteran educator and former WAEC examiner with 17 years of experience needed her tutoring practice online: lesson booking, learning resources, and student engagement — without juggling separate tools for scheduling, quizzes, and payments.",
      solution:
        "A production Nuxt platform with Calendly-style hourly and monthly bookings (with calendar invites), a gamified quiz engine over past exam questions, free resources, and an admin dashboard covering students, sessions, subscriptions, transactions, revenue, and leads.",
      highlights: [
        "Booking flows with server-generated ICS calendar files and email confirmations",
        "Gamified quiz engine: streaks, XP, and leaderboards over WAEC/NECO/JAMB past questions",
        "Full admin back-office: students, sessions, subscriptions, transactions, revenue, leads",
        "Nitro server API layer with consent-gated analytics and per-page OG images",
      ],
    },
  },
  {
    slug: "claudeverse",
    name: "ClaudeVerse",
    icon: "🌌",
    description:
      "The developer's universe for Claude Code mastery — an opinionated, open guide to workflows, extensions, token economics, and multi-agent orchestration.",
    tech: ["Nuxt", "Vue 3", "TypeScript", "MCP", "Claude Code"],
    link: "https://claude-verse.vercel.app",
    github: "https://github.com/IwuchukwuDivine/ClaudeVerse",
    screenshot: "/projects/claudeverse.webp",
    screenshotAlt: "ClaudeVerse — open guide to Claude Code mastery",
    category: "ai",
    featured: true,
    caseStudy: {
      role: "Creator & Maintainer",
      year: "2025",
      problem:
        "Most developers use AI coding tools casually and plateau there. The practices that compound — context management, token economics, skills, multi-agent orchestration — are scattered across docs, threads, and hard-won experience.",
      solution:
        "An open, structured guide that takes developers from 'I use Claude sometimes' to systems that compound productivity: twelve sections spanning foundations, workflows, extensions, token mastery, orchestration, evals, recipes, and troubleshooting.",
      highlights: [
        "Twelve structured learning sections, from foundations to multi-agent orchestration",
        "Practical token-economics guidance: context windows, caching, and cost control",
        "Workshop materials and a quick-reference cheatsheet for teams",
        "Open source and community-maintained",
      ],
    },
  },
  {
    slug: "foodprint",
    name: "Foodprint",
    icon: "🍔",
    description:
      "A food ordering and delivery marketplace for Anambra, Nigeria — connecting customers with trusted local kitchens, vendors, and riders, with real-time order tracking.",
    tech: ["Nuxt", "Vue 3", "TypeScript", "PWA", "Supabase", "Tailwind CSS"],
    link: "https://foodprint.com.ng",
    screenshot: "/projects/foodprint.webp",
    screenshotAlt: "Foodprint — food ordering marketplace for Anambra",
    category: "client",
    featured: true,
    caseStudy: {
      role: "Full-Stack Developer",
      problem:
        "Local kitchens and food vendors in Awka had no digital storefront, and customers had no reliable way to order local delicacies with secure payment and delivery tracking.",
      solution:
        "A PWA marketplace serving three user roles — customers order from trusted kitchens and track riders in real time, vendors get restaurant visibility, and riders get earning opportunities. Built on Nuxt + Supabase with offline-capable PWA installability.",
      highlights: [
        "Three-sided marketplace: customers, vendors, and delivery riders",
        "Real-time rider tracking and secure payments",
        "PWA architecture for app-like installs on low-end devices",
        "1,200+ early adopters on the launch waitlist",
      ],
    },
  },
  {
    slug: "bgi-gold",
    name: "BGI Gold & Bullion",
    icon: "🥇",
    description:
      "Luxury e-commerce for handcrafted gold jewelry and certified 24k investment bullion (5g–1kg with assay certificates), based in Lagos.",
    tech: ["Vue.js", "Nuxt", "Tailwind CSS"],
    link: "https://bgigold.com",
    screenshot: "/projects/bgi-gold.webp",
    screenshotAlt: "BGI Gold & Bullion — luxury gold e-commerce",
    category: "client",
    featured: true,
    caseStudy: {
      role: "Full-Stack Developer",
      problem:
        "A Lagos gold house selling high-value pieces — handcrafted jewelry and investment-grade bullion — needed a storefront that communicates trust and luxury, where a single transaction can be worth more than a typical e-commerce store's monthly revenue.",
      solution:
        "A polished luxury storefront covering both jewelry lines and certified 24k bullion, with assay-certificate presentation, same-day Lagos delivery, and personalized WhatsApp purchase support for high-touch sales.",
      highlights: [
        "Catalog spanning handcrafted jewelry and certified investment bullion (5g–1kg)",
        "Trust-first product presentation: assay certificates and provenance",
        "WhatsApp-assisted purchase flow for high-value, high-touch transactions",
        "Same-day delivery workflow for Lagos customers",
      ],
    },
  },
  {
    slug: "sweet-healthy-foods",
    name: "Sweet Healthy Foods",
    icon: "🥗",
    description:
      "E-commerce for nutritious Nigerian food products and natural supplements — traditional staples, wellness items, and healthy-cooking tools.",
    tech: ["Vue.js", "Nuxt", "Tailwind CSS"],
    link: "https://sweethealthyfoodsventures.com",
    screenshot: "/projects/sweet-healthy-foods.webp",
    screenshotAlt: "Sweet Healthy Foods — Nigerian healthy food e-commerce",
    category: "client",
    featured: true,
    caseStudy: {
      role: "Full-Stack Developer",
      problem:
        "A health-focused Nigerian food brand — 'traditional wisdom meets modern science' — was selling through WhatsApp and word of mouth, with no storefront to organize its catalog of staples, supplements, and kitchen tools.",
      solution:
        "A clean e-commerce experience across three product categories (traditional staples, natural wellness, kitchen tools) with WhatsApp, email, and phone support woven into the purchase journey Nigerian customers actually use.",
      highlights: [
        "Three-category catalog: traditional staples, natural supplements, healthy-cooking tools",
        "WhatsApp-first checkout support matching local buying habits",
        "Brand storytelling around food-as-medicine philosophy",
      ],
    },
  },
  {
    slug: "html-vue-converter",
    name: "HTML to Vue Converter",
    icon: "🔄",
    description:
      "A powerful web-based tool that instantly converts vanilla HTML into Vue 3 Single File Components. Supports both Composition API and Options API with intelligent parsing of scripts, styles, and templates.",
    tech: ["Vue 3", "Nuxt 3", "TypeScript", "Vitest"],
    link: "https://html-vue-converter.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/html_vue_converter",
    screenshot: "/projects/html-vue-converter.webp",
    screenshotAlt: "HTML to Vue Converter tool",
    category: "open-source",
    featured: true,
  },
  {
    slug: "flagit",
    name: "Flagit",
    icon: "🚩",
    description:
      "A civic complaints platform where citizens can report local issues, upvote problems, and track resolutions in their community. Open source and open for contributions.",
    tech: ["Nuxt 4", "TypeScript", "Prisma", "SQLite", "Tailwind CSS"],
    link: "https://flagit.mooo.com",
    github: "https://github.com/IwuchukwuDivine/flagit",
    screenshot: "/projects/flagit.webp",
    screenshotAlt: "Flagit — civic complaints platform",
    category: "open-source",
    featured: true,
  },
  {
    slug: "essenceials",
    name: "Essenceials",
    icon: "🛍️",
    description:
      "An online shopping platform for premium home appliances, perfumes, electronics, and lifestyle essentials with a smooth, secure checkout experience.",
    tech: ["Nuxt", "Tailwind CSS", "Supabase", "Paystack"],
    link: "https://essenceials.com/",
    screenshot: "/projects/essenceials.webp",
    screenshotAlt: "Essenceials — lifestyle e-commerce platform",
    category: "client",
    featured: true,
  },
  {
    slug: "umoja-africa",
    name: "Umoja Africa",
    icon: "🔗",
    description:
      "A Pan-African platform focused on unity, collaboration, and empowerment. Connecting communities across the continent.",
    tech: ["Vue.js", "Nuxt", "Vuetify"],
    link: "https://umoja-africa.com/",
    screenshot: "/projects/umoja-africa.webp",
    screenshotAlt: "Umoja Africa — Pan-African community platform",
    category: "client",
    featured: true,
  },
  {
    slug: "flickfusion",
    name: "FlickFusion",
    icon: "🎥",
    description:
      "A movie discovery app powered by the TMDB API with a clean, responsive UI. Search, explore, and discover your next favorite film.",
    tech: ["HTML5", "CSS3", "JavaScript", "TMDB API", "Axios"],
    link: "https://flickfusion.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/flick-fusion",
    screenshot: "/projects/flickfusion.webp",
    screenshotAlt: "FlickFusion — movie discovery app",
    category: "personal",
    featured: true,
  },
  {
    slug: "buds-sensation",
    name: "Buds Sensation",
    icon: "🍽️",
    description:
      "A modern restaurant landing page that highlights the menu, specials, reservations, and gallery. Designed for an exceptional dining experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://buds-sensation.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/restaurant-website",
    screenshot: "/projects/buds-sensation.webp",
    screenshotAlt: "Buds Sensation — restaurant landing page",
    category: "personal",
    featured: true,
  },
  {
    slug: "nft-gallery",
    name: "NFT Gallery",
    icon: "🖼️",
    description:
      "A modern landing page for showcasing digital NFTs with stunning visuals and smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://nft-website-chi-seven.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/NFT-website",
    category: "experiment",
    featured: false,
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe Game",
    icon: "🎮",
    description:
      "A fun, interactive, and responsive game built for browsers. Classic gameplay with modern design.",
    tech: ["JavaScript", "CSS3", "HTML5"],
    link: "https://tic-tac-toe-game-six-kappa.vercel.app/",
    category: "experiment",
    featured: false,
  },
  {
    slug: "solux-solana",
    name: "Solux Solana",
    icon: "🪙",
    description:
      "A dark-themed Solana blockchain landing page with smooth animations and modern Web3 aesthetics.",
    tech: ["React", "Web3", "CSS3"],
    link: "https://soluxsolana.netlify.app/",
    category: "experiment",
    featured: false,
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    icon: "💰",
    description:
      "A tool for managing and tracking daily expenses with intuitive charts and budget management features.",
    tech: ["Vue.js", "Chart.js"],
    link: "https://expense-tracker-xi-gray.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/Expense-Tracker",
    category: "experiment",
    featured: false,
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Software Developer",
    company: "IDI — IDRONEINNOVATIONS",
    period: "Aug 2024 — Present",
    type: "contract",
    location: "Remote · United Kingdom",
    summary:
      "Building IDI Fly, a browser-based command platform for autonomous drone fleet operations — the software layer of a complete drone autonomy stack engineered in Britain.",
    highlights: [
      "Fleet command UI flying DJI and MAVLink aircraft from the browser, with live WebSocket telemetry and video",
      "Cesium-powered 3D mapping with terrain, obstacle heights, and flight-path visualization",
      "UK regulations & site-risk tooling: airspace, Flight Restriction Zones, NOTAMs, and SORA ground-risk scoring",
      "Low-code automation surface — REST API, webhooks, and Node-RED flows for control-room integrations",
    ],
    tech: ["Vue.js", "Nuxt", "TypeScript", "Cesium", "WebSockets", "Node-RED", "AWS Lambda", "MQTT", "Python"],
  },
  {
    role: "Frontend Developer",
    company: "Inhouse Codes LLC",
    period: "Mar 2024 — Jun 2025",
    type: "contract",
    location: "Remote · Delaware, USA",
    summary:
      "Built responsive, user-friendly web applications with Nuxt and Vuetify, collaborating with backend engineers and UX designers across the product lifecycle.",
    highlights: [
      "Developed and optimized frontend architecture for seamless user interactions with Nuxt and Vue",
      "Implemented consistent, responsive UI components with Vuetify design systems",
      "Integrated backend APIs and translated design mockups into functional interfaces",
    ],
    tech: ["Vue.js", "Nuxt", "Vuetify", "JavaScript", "REST APIs"],
  },
  {
    role: "Internship Trainee",
    company: "National Oil Spill Detection and Response Agency",
    period: "Feb 2022 — Jul 2022",
    type: "internship",
    location: "Port Harcourt, Nigeria",
    summary:
      "Environmental engineering internship — field exposure to oil spill detection, monitoring, and response operations.",
    highlights: [],
    tech: [],
  },
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "Griot",
    badge: "AI · Open Source",
    githubUrl: "https://github.com/IwuchukwuDivine/griot",
    liveUrl: "https://griot-web-phi.vercel.app",
    description:
      "An AI Slack teammate with institutional memory. Four memory types on CockroachDB vector search, a Conflict Guard that pushes back on contradictory decisions, and serverless AWS deployment. MIT-licensed and self-hostable.",
    tags: [
      "TypeScript",
      "AWS Lambda",
      "CockroachDB",
      "RAG",
      "Slack Bot",
      "AI",
      "Open Source",
    ],
    ctaIcon: "🧠",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Help build the AI teammate that never forgets — memory architectures, Slack UX, retrieval quality, and new integrations are all open ground.",
  },
  {
    name: "HerStory Africa",
    badge: "Featured Open Source Project",
    githubUrl: "https://github.com/IwuchukwuDivine/HerStory-Africa",
    liveUrl: "https://herstoryafrica.com.ng",
    description:
      "The women history forgot to teach you — a digital archive of 139+ African women who shaped history, across 26 countries. Built with Nuxt Content, fully static, and open to contributors.",
    tags: [
      "Nuxt 4",
      "Nuxt Content",
      "Vue 3",
      "Good First Issue",
      "Women in Tech",
      "Open Source",
    ],
    ctaIcon: "👑",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Add a profile, write an article, or improve the archive — contributions are Markdown-first, so historians and beginners are as welcome as developers.",
  },
  {
    name: "ClaudeVerse",
    badge: "AI · Open Source",
    githubUrl: "https://github.com/IwuchukwuDivine/ClaudeVerse",
    liveUrl: "https://claude-verse.vercel.app",
    description:
      "The developer's universe for Claude Code mastery — an opinionated, open guide to workflows, extensions, token economics, evals, and multi-agent orchestration.",
    tags: [
      "Claude Code",
      "MCP",
      "Documentation",
      "Developer Tools",
      "AI",
      "Open Source",
    ],
    ctaIcon: "🌌",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Share your workflows, recipes, and hard-won lessons — the guide grows from real-world Claude Code practice.",
  },
  {
    name: "Skill Registry",
    badge: "AI · Open Source",
    githubUrl: "https://github.com/IwuchukwuDivine/skill-registry",
    description:
      "A modular registry of AI skills and orchestration blueprints. Browse, pick, and integrate — each skill lives in its own folder with full documentation and usage guides.",
    tags: ["AI Skills", "Orchestration", "Claude", "AI Workflow", "Open Source"],
    ctaIcon: "🧩",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Contribute a skill or orchestration blueprint — the registry is designed so each addition is self-contained and documented.",
  },
  {
    name: "Polls",
    badge: "Featured Open Source Project",
    githubUrl: "https://github.com/IwuchukwuDivine/polls",
    liveUrl: "https://polls-liart-six.vercel.app/",
    description:
      "A modern, progressive web app for creating engaging polls with multiple formats - multiple-choice, visual comparisons, and live results. Built with Nuxt 4 and Vue 3.",
    tags: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "PWA",
      "Tailwind CSS",
      "Pinia",
      "Good First Issue",
      "Open Source",
    ],
    ctaIcon: "🚀",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Perfect for developers interested in building modern polling applications. Contribute to features like real-time voting, visual comparisons, and analytics!",
  },
  {
    name: "Flagit",
    badge: "Featured Open Source Project",
    githubUrl: "https://github.com/IwuchukwuDivine/flagit",
    liveUrl: "https://flagit.mooo.com",
    description:
      "A civic complaints platform where citizens can report local issues, upvote problems, and track resolutions in their community. Built with Nuxt 4, Prisma, and SQLite.",
    tags: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQLite",
      "Civic Tech",
      "Open Source",
    ],
    ctaIcon: "🚀",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Help build a platform for civic engagement! Contribute to features like AI-assisted writing, community events, real-time messaging, and more.",
  },
  {
    name: "HTML to Vue Converter",
    badge: "Featured Open Source Project",
    githubUrl: "https://github.com/IwuchukwuDivine/html_vue_converter",
    liveUrl: "https://html-vue-converter.vercel.app/",
    description:
      "A powerful tool that instantly converts vanilla HTML to Vue 3 Single File Components. Supports both Composition API and Options API with smart parsing.",
    tags: [
      "Beginner Friendly",
      "Good First Issue",
      "Vue 3",
      "TypeScript",
      "Open Source",
    ],
    ctaIcon: "🚀",
    ctaTitle: "Open for Contributions!",
    ctaDescription:
      "Perfect for beginners and anyone looking to dive into open source. You don't need to be a Vue expert—just bring your enthusiasm to learn!",
  },
];
