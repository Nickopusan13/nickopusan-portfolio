export interface Project {
  title: string;
  subTitle: string;
  slug: string;
  color: string;
  description: string;
  images: string[];
  year: string;
  tags: string[];
  role: string;
  challenges: string;
  solution: string;
  techStack: string[];
  performance: string[];
  architecture: string;
}

export const projects: Project[] = [
  {
    title: "Clarity",
    subTitle: "E-Commerce",
    slug: "clarity",
    color: "bg-blue-600/60 border-blue-600",
    description:
      "Clarity is a modern, high-performance e-commerce platform built for excellent user experience and scalability. The frontend was designed in Figma and developed with Next.js, TypeScript, TailwindCSS, TanStack Query, Axios, and Framer Motion. The backend was built using Python FastAPI with PostgreSQL, Redis caching, and JWT authentication.",
    images: [
      "/assets/clarity/clarity_1.webp",
      "/assets/clarity/clarity_2.webp",
      "/assets/clarity/clarity_3.webp",
      "/assets/clarity/clarity_4.webp",
      "/assets/clarity/clarity_5.webp",
      "/assets/clarity/clarity_6.webp",
      "/assets/clarity/clarity_7.webp",
      "/assets/clarity/clarity_8.webp",
    ],
    year: "December, 2025",
    tags: ["E-Commerce", "Fullstack", "Next.js", "FastAPI", "Redis", "Docker"],
    role: "Fullstack Developer",
    challenges:
      "Building a secure, scalable e-commerce platform with AI integration, payment processing, admin image uploads, and smooth frontend interactions.",
    solution:
      "Developed a fullstack solution with FastAPI backend using PostgreSQL and asyncpg. Implemented JWT + Google OAuth authentication, secure email verification, and password recovery. Integrated Google Gemini AI chatbot with session context, Midtrans payments, and Cloudflare R2 for storing images uploaded from the admin panel. Used Redis for caching, TanStack Query + Axios for efficient data fetching and API communication on the frontend.",
    performance: [
      "Redis caching for faster API responses",
      "TanStack Query + Axios for optimized data fetching",
      "Cloudflare R2 for optimized image storage and delivery",
      "Async database operations with asyncpg",
      "Dockerized backend for scalable deployment",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "TanStack Query",
      "Axios",
      "Framer Motion",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Cloudflare R2",
      "Google Gemini AI",
      "Midtrans",
      "JWT",
      "Docker",
      "Google Cloud Run",
      "Vercel",
      "Supabase",
    ],
    architecture:
      "Frontend built with Next.js App Router, TanStack Query, Axios, and deployed on Vercel. Backend built with FastAPI, containerized with Docker, and deployed on Google Cloud Run. PostgreSQL as primary database, Redis for caching, and Cloudflare R2 for admin-uploaded product images.",
  },
  {
    title: "Centris.ca Automation",
    subTitle: "Scraping & Data Pipeline",
    slug: "automation-pipeline",
    color: "bg-green-600/60 border-green-600",
    description:
      "This project is an automation pipeline built for scraping real estate data from a website and storing the results in structured JSONL files along with downloaded property images. The system was designed for fast and reliable large-scale extraction using Scrapy and Playwright.",
    images: [
      "/assets/centris/centris_1.webp",
      "/assets/centris/centris_2.webp",
      "/assets/centris/centris_3.webp",
      "/assets/centris/centris_4.webp",
      "/assets/centris/centris_5.webp",
      "/assets/centris/centris_6.webp",
    ],
    year: "April, 2025",
    tags: ["Python", "Scrapy", "Playwright"],
    role: "Automation Developer",
    solution:
      "I built two different automation scripts for the client. The first script allows the client to enter keywords such as location, title, or search filters, then automatically scrapes all matching houses from the platform. The second script reads data from the user's liked or favorite house list and extracts all saved properties automatically. The scraped data is stored as JSONL files while all property images are downloaded into organized folders.",
    performance: [
      "Used Scrapy for fast concurrent scraping",
      "Integrated Playwright for automated login and dynamic page handling",
      "Implemented rotating proxies and custom user agents",
    ],
    challenges:
      "The main challenge was handling authenticated sessions and dynamic website interactions. Playwright was used to automate login flows and browser actions, while rotating proxies and custom user agents helped reduce blocking during large-scale scraping.",
    techStack: [
      "Python",
      "Scrapy",
      "Playwright",
      "JSONL",
      "Proxy Rotation",
      "Requests",
    ],
    architecture:
      "The automation system combines Scrapy for high-performance crawling with Playwright for browser automation and login handling. Extracted data is processed and stored into JSONL datasets with automatic image downloading and folder organization.",
  },
];
