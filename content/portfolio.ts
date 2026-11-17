import { withBase, BASE_PATH } from "@/lib/site";

export type SocialLink = {
  label: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  href: string;
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  href: string;
  description: string;
  technologies: string[];
  year: string;
  area: string;
  status?: "in-progress" | "complete";
  featured?: boolean;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract?: string;
  links: { pdf?: string; arxiv?: string; code?: string };
};

export const profile = {
  name: "Ryu Kakuta",
  role: "AI Evaluation Engineer",
  eyebrow: "AI Evaluation Engineer · Uncertainty Research",
  headline: "I build evaluations that expose what AI models don't know.",
  bio: "At Handshake I design RL environments and benchmarks that stress-test frontier agents. My research makes models report their own uncertainty, using density-aware Evidential Deep Learning.",
  availability: "Open to AI evaluation & reliability roles",
  email: "kakuryu555@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1C9Dhx1d-iXLT55JD-BOZ-fEj9R-vqj1i/view?usp=sharing",
  ogImage: `${BASE_PATH}/assets/images/profile.jpg`,
};

export const credentials = [
  { label: "Now", value: "Handshake" },
  { label: "Before", value: "Fractal Analytics" },
  { label: "Education", value: "UC Berkeley, Data Sci." },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mid9t" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kakury/" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const experiences: Experience[] = [
  {
    period: "February 2026 — Current",
    role: "AI Evaluation Engineer (Contract), Post-Training",
    company: "Handshake",
    href: "https://joinhandshake.com",
    description:
      "Author containerized coding tasks and scoring gates that stress-test frontier agents.",
    technologies: [
      "Python",
      "Docker",
      "Evaluation Harnesses",
      "Agent Evaluation",
      "Reproducibility",
    ],
  },
  {
    period: "February 2025 — December 2025",
    role: "Research Software Engineer Intern, ML Infrastructure",
    company: "Fractal Analytics",
    href: "https://fractal.ai",
    description:
      "Built an ML system for sales-forecast anomaly diagnosis, with data-quality checks before results reached decision-makers.",
    technologies: ["Python", "ETL", "SQL", "SHAP", "Statistical Modeling", "Data Quality"],
  },
  {
    period: "December 2022 — August 2023",
    role: "Data Systems Intern",
    company: "Terra Drone Corporation",
    href: "https://terra-drone.net/global/",
    description:
      "Built automated Google Cloud and SQL pipelines that made production reporting reproducible.",
    technologies: ["Google Cloud", "SQL", "Data Pipelines"],
  },
];

/**
 * Year and area for GeoGenie and the EEG project are provisional until confirmed.
 */
export const projects: Project[] = [
  {
    title: "Epic Ranker",
    href: "https://github.com/mid9t/ER-1-Epistemic-Ranker-",
    description:
      "An early-exiting ranker that uses evidential uncertainty to stop inference when confidence is high.",
    technologies: [
      "Python",
      "PyTorch",
      "Model Calibration",
      "Model Evaluation",
      "Uncertainty Quantification",
      "Information Retrieval",
      "HuggingFace",
      "Data Streaming",
    ],
    year: "2026",
    area: "Uncertainty",
    status: "in-progress",
    featured: true,
  },
  {
    title: "GeoGenie: Natural-Language Spatial Search",
    href: "https://github.com/mid9t/GeoGenie",
    description:
      "An LLM turns free-text intent into structured spatial queries over hand-built geometric data structures.",
    technologies: [
      "Python",
      "NumPy",
      "Computational Geometry",
      "Spatial Indexing",
      "LLMs",
      "FastAPI",
      "Routing",
    ],
    year: "2025",
    area: "Spatial AI",
  },
  {
    title: "EEG-Based MDD Classification via Effective Connectivity (CNNs)",
    href: withBase("/projects/eeg-based-mdd-classification/"),
    description:
      "An end-to-end EEG pipeline for MDD classification, built for evaluation rigor and leakage prevention.",
    technologies: ["Python", "Convolutional Neural Networks", "Granger Causality"],
    year: "2024",
    area: "Clinical signals",
  },
];

/** Formal papers. Empty until titles, authors, and links are supplied. */
export const publications: Publication[] = [];

export function featuredProject(): Project | undefined {
  return projects.find((project) => project.featured);
}

export function selectedProjects(): Project[] {
  return projects.filter((project) => !project.featured).slice(0, 3);
}

export function sortedPublications(): Publication[] {
  return [...publications].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

export function formatTechnologies(technologies: string[]): string {
  return technologies.slice(0, 4).join(" · ");
}
