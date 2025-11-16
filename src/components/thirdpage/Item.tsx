import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiVuejsFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiFastapi,
  SiFlask,
  SiDjango,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiPolars,
  SiN8N,
  SiApacheairflow,
  SiFirebase,
  SiSupabase,
  SiGooglebigquery,
  SiMongodb,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { FaPython, FaDocker, FaNodeJs } from "react-icons/fa";

export const frontend = [
  {
    logo: (
      <RiNextjsFill className="text-5xl text-zinc-900 transition-transform duration-300 hover:text-zinc-800 hover:scale-110 hover:drop-shadow-[0_0_8px_#000]" />
    ),
    desc: "Next.js – React framework for server-side rendering and static sites",
  },
  {
    logo: (
      <RiReactjsFill className="text-5xl text-cyan-400 transition-transform duration-300 hover:text-cyan-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#22d3ee]" />
    ),
    desc: "React.js – JavaScript library for building user interfaces",
  },
  {
    logo: (
      <RiTailwindCssFill className="text-5xl text-sky-500 transition-transform duration-300 hover:text-sky-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#0ea5e9]" />
    ),
    desc: "Tailwind CSS – Utility-first CSS framework for rapid UI design",
  },
  {
    logo: (
      <RiVuejsFill className="text-5xl text-[#42b883] transition-transform duration-300 hover:text-[#6be6ad] hover:scale-110 hover:drop-shadow-[0_0_8px_#42b883]" />
    ),
    desc: "Vue.js – Progressive JavaScript framework for building UIs",
  },
  {
    logo: (
      <BiLogoTypescript className="text-5xl text-blue-500 transition-transform duration-300 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#3b82f6]" />
    ),
    desc: "TypeScript – Typed superset of JavaScript for safer code",
  },
  {
    logo: (
      <TbBrandReactNative className="text-5xl text-blue-400 transition-transform duration-300 hover:text-blue-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#3b82f6]" />
    ),
    desc: "React Native – Build mobile apps using React",
  },
];

export const backend = [
  {
    logo: (
      <FaPython className="text-5xl text-yellow-400 transition-transform duration-300 hover:text-yellow-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#facc15]" />
    ),
    desc: "Python – High-level programming language for backend development",
  },
  {
    logo: (
      <SiFastapi className="text-5xl text-teal-400 transition-transform duration-300 hover:text-teal-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#14b8a6]" />
    ),
    desc: "FastAPI – Modern Python framework for building APIs quickly",
  },
  {
    logo: (
      <SiFlask className="text-5xl text-gray-400 transition-transform duration-300 hover:text-gray-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#9ca3af]" />
    ),
    desc: "Flask – Lightweight Python web framework",
  },
  {
    logo: (
      <SiDjango className="text-5xl text-green-600 transition-transform duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#22c55e]" />
    ),
    desc: "Django – Full-featured Python web framework",
  },
  {
    logo: (
      <FaNodeJs className="text-5xl text-green-400 transition-transform duration-300 hover:text-green-300 hover:scale-110 hover:drop-shadow-[0_0_8px_#4ade80]" />
    ),
    desc: "Node.js – JavaScript runtime for server-side development",
  },
  {
    logo: (
      <SiExpress className="text-5xl text-gray-700 transition-transform duration-300 hover:text-gray-600 hover:scale-110 hover:drop-shadow-[0_0_8px_#374151]" />
    ),
    desc: "Express.js – Minimal web framework for Node.js",
  },
];

export const database = [
  {
    logo: (
      <SiPostgresql className="text-5xl text-[#336791] transition-transform duration-300 hover:text-[#2a5578] hover:scale-110 hover:drop-shadow-[0_0_8px_#336791]" />
    ),
    desc: "PostgreSQL – Powerful open-source relational database",
  },
  {
    logo: (
      <SiMysql className="text-5xl text-[#4479A1] transition-transform duration-300 hover:text-[#36627a] hover:scale-110 hover:drop-shadow-[0_0_8px_#4479A1]" />
    ),
    desc: "MySQL – Widely used relational database system",
  },
  {
    logo: (
      <SiSupabase className="text-5xl text-[#3ECF8E] transition-transform duration-300 hover:text-[#33b77b] hover:scale-110 hover:drop-shadow-[0_0_8px_#3ECF8E]" />
    ),
    desc: "Supabase – Backend-as-a-Service with PostgreSQL database",
  },
  {
    logo: (
      <SiFirebase className="text-5xl text-[#FFCA28] transition-transform duration-300 hover:text-[#e6b923] hover:scale-110 hover:drop-shadow-[0_0_8px_#FFCA28]" />
    ),
    desc: "Firebase – Cloud database and authentication services",
  },
  {
    logo: (
      <SiGooglebigquery className="text-5xl text-[#4285F4] transition-transform duration-300 hover:text-[#3367c6] hover:scale-110 hover:drop-shadow-[0_0_8px_#4285F4]" />
    ),
    desc: "Google BigQuery – Cloud-based data warehouse for analytics",
  },
  {
    logo: (
      <SiMongodb className="text-5xl text-[#47A248] transition-transform duration-300 hover:text-[#399036] hover:scale-110 hover:drop-shadow-[0_0_8px_#47A248]" />
    ),
    desc: "MongoDB – Popular NoSQL document database",
  },
];

export const others = [
  {
    logo: (
      <SiGithub className="text-5xl text-black transition-transform duration-300 hover:text-gray-700 hover:scale-110 hover:drop-shadow-[0_0_8px_#000]" />
    ),
    desc: "GitHub – Version control and code hosting platform",
  },
  {
    logo: (
      <FaDocker className="text-5xl text-blue-500 transition-transform duration-300 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#0db7ed]" />
    ),
    desc: "Docker – Containerization tool for deploying applications",
  },
  {
    logo: (
      <SiApacheairflow className="text-5xl text-orange-500 transition-transform duration-300 hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_#e2761b]" />
    ),
    desc: "Apache Airflow – Workflow orchestration and scheduling tool",
  },
  {
    logo: (
      <DiGoogleCloudPlatform className="text-5xl text-blue-600 transition-transform duration-300 hover:text-blue-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#4285F4]" />
    ),
    desc: "Google Cloud Platform – Cloud services and infrastructure",
  },
  {
    logo: (
      <SiN8N className="text-5xl text-purple-600 transition-transform duration-300 hover:text-purple-500 hover:scale-110 hover:drop-shadow-[0_0_8px_#8b5cf6]" />
    ),
    desc: "n8n – Workflow automation and API integration tool",
  },
  {
    logo: (
      <SiPolars className="text-5xl text-purple-700 transition-transform duration-300 hover:text-purple-600 hover:scale-110 hover:drop-shadow-[0_0_8px_#6b21a8]" />
    ),
    desc: "Polars – Fast DataFrame library for large datasets",
  },
];
