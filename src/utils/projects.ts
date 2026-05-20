export interface Project {
  title: string;
  subTitle: string;
  slug: string;
  color: string;
  description: string;
  images: string[];
  year: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Clarity",
    subTitle: "E-Commerce Platform",
    slug: "clarity",
    color: "bg-blue-600/60 border-blue-600",
    description:
      "Clarity is a modern fullstack e-commerce platform built for a seamless shopping experience. The responsive frontend uses Next.js for fast performance, while the FastAPI backend securely manages products, authentication, user accounts, and order processing.",
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
    tags: ["E-Commerce", "Fullstack", "Next.js", "FastAPI"],
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
  },
];
