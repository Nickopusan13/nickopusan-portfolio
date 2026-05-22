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
    subTitle: "AI-Powered Fullstack E-Commerce Platform",
    slug: "clarity",
    color: "bg-blue-600/60 border-blue-600",
    description:
      "Clarity is a modern, high-performance AI-powered e-commerce platform built for excellent user experience and scalability. The frontend was designed in Figma and developed with Next.js, TypeScript, TailwindCSS, TanStack Query, Axios, and Framer Motion. The backend was built using Python FastAPI with PostgreSQL, Redis caching, and JWT authentication.",
    images: [
      "/assets/clarity/clarity_1.webp",
      "/assets/clarity/clarity_2.webp",
      "/assets/clarity/clarity_3.webp",
      "/assets/clarity/clarity_4.webp",
      "/assets/clarity/clarity_5.webp",
      "/assets/clarity/clarity_6.webp",
      "/assets/clarity/clarity_7.webp",
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
    title: "Automation Pipeline",
    subTitle: "E-Commerce Platform",
    slug: "automation-pipeline",
    color: "bg-green-600/60 border-green-600",
    description:
      "This Python pipeline automates a complete end-to-end workflow. It's built to handle various tasks, from extracting data and integrating with APIs to processing information automatically. The pipeline is designed to run efficiently and deliver clean, structured data for analysis.",
    images: ["/assets/centris/centris-1.png", "/assets/google_maps/maps-1.png"],
    year: "April, 2025",
    tags: ["Python", "Automation", "Scraping"],
    role: "Fullstack Developer",
    solution: "",
    performance: [
      "Optimized image loading using next/image",
      "Reduced unnecessary rerenders",
      "Implemented lazy loading and caching",
    ],
    challenges: "",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "TailwindCSS",
    ],
    architecture:
      "Frontend built with Next.js App Router connected to FastAPI REST APIs with PostgreSQL database.",
  },
];
