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
    tags: ["E-Commerce", "Next.js", "FastAPI", "Redis"],
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
  {
    title: "Clutch.co Automation",
    subTitle: "Business Data Scraping Pipeline",
    slug: "clutch-automation",
    color: "bg-orange-600/60 border-orange-600",
    description:
      "This project is an automation scraping pipeline built for extracting business and company data from Clutch.co. The system was designed to efficiently collect structured company information and export the results into CSV files for further analysis and lead generation.",
    images: [
      "/assets/clutch/clutch_1.webp",
      "/assets/clutch/clutch_2.webp",
      "/assets/clutch/clutch_3.webp",
      "/assets/clutch/clutch_4.webp",
      "/assets/clutch/clutch_5.webp",
    ],
    year: "March, 2025",
    tags: ["Python", "Scrapy", "Playwright"],
    role: "Automation Developer",
    solution:
      "I built an automation scraper for Clutch.co using Scrapy and Playwright. The scraper automatically collects company data such as business names, locations, services, ratings, reviews, and other public information from the platform. All extracted data is processed and exported into structured CSV files for the client.",
    performance: [
      "Used Scrapy for high-speed concurrent scraping",
      "Integrated Playwright for handling dynamic content",
      "Optimized data extraction and CSV export pipeline",
    ],
    challenges:
      "One of the main challenges in this project was bypassing Cloudflare protection and handling dynamic website rendering. Playwright was used to simulate real browser behavior and properly load JavaScript content, while custom headers, user agents, and request handling strategies helped reduce blocking during the scraping process.",
    techStack: ["Python", "Scrapy", "Playwright", "CSV", "Requests"],
    architecture:
      "The scraping system combines Scrapy for scalable crawling with Playwright for browser automation and dynamic content handling. Extracted company information is cleaned, processed, and exported into structured CSV datasets.",
  },
  {
    title: "DltHub Automation",
    subTitle: "Incremental Multi-Source Data Pipeline",
    slug: "data-automation-pipeline",
    color: "bg-blue-600/60 border-blue-600",
    description:
      "This project is a scalable, incremental data automation pipeline that extracts data from Google Tag Manager (GTM), Google Ads, and Facebook Ads. The system uses dltHub for extraction, Apache Airflow for orchestration, and loads structured data into Google BigQuery, Cloud Storage, and Firestore with optimized incremental loading to reduce costs and improve efficiency.",
    images: [
      "/assets/dlt/dlt_1.webp",
      "/assets/dlt/dlt_2.webp",
      "/assets/dlt/dlt_3.webp",
      "/assets/dlt/dlt_4.webp",
      "/assets/dlt/dlt_5.webp",
      "/assets/dlt/dlt_6.webp",
      "/assets/dlt/dlt_7.webp",
    ],
    year: "October, 2025",
    tags: ["Python", "Apache Airflow", "dltHub"],
    role: "Data Pipeline Engineer",
    solution:
      "I developed a comprehensive incremental data automation pipeline that pulls tracking and advertising data from Google Tag Manager (GTM), Google Ads, and Facebook Ads. The pipeline is fully orchestrated using Apache Airflow (Dockerized on GCP), leverages dltHub for reliable extraction and normalization, and stores data across BigQuery (analytics), Cloud Storage (raw backup), and Firestore (operational use). Strong emphasis was placed on incremental loading to minimize API costs and processing time.",
    performance: [
      "Built true incremental extraction for GTM, Google Ads, and Facebook Ads",
      "Significantly reduced daily processing costs by fetching only new or changed data",
      "Automated daily orchestration using Apache Airflow DAGs",
      "Seamless data delivery to BigQuery, Google Cloud Storage, and Firestore",
      "Implemented secure authentication using Google service accounts and OAuth",
    ],
    challenges:
      "A major challenge was implementing incremental loading for Firestore, as it is not natively supported by dltHub. Previously the pipeline performed full refreshes, which was costly and inefficient. I solved this by developing a custom incremental extractor using Firestore queries based on timestamps and document IDs. This allowed the pipeline to only process new or updated records on each run.",
    techStack: [
      "Python",
      "Apache Airflow",
      "dltHub",
      "Google Cloud Platform",
      "BigQuery",
      "Firestore",
      "Docker",
      "Google Auth",
    ],
    architecture:
      "The architecture uses Apache Airflow as the central orchestrator running in Docker containers on GCP. dltHub handles data extraction and normalization from GTM, Google Ads, and Facebook Ads. A custom incremental layer was built for Firestore support. Data flows into BigQuery for analysis, Cloud Storage for archiving, and Firestore for real-time access — all processed incrementally for maximum efficiency.",
  },
];
