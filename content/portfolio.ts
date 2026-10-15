import { BASE_PATH } from "@/lib/site";

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
};

export type FeaturedArticle = {
  href: string;
  label: string;
  category: string;
  title: string;
  description: string;
};

export const profile = {
  name: "Ryu Kakuta",
  role: "AI Evaluation Engineer",
  bio: "I work on AI evaluation and RL environments — designing tasks, rewards, and benchmarks that stress-test frontier agents — while my central research focus is uncertainty quantification via density-aware Evidential Deep Learning.",
  avatar: `${BASE_PATH}/assets/images/profile.jpg`,
  backgroundImage: `${BASE_PATH}/assets/images/portfolio-background.jpg`,
  email: "kakuryu555@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1C9Dhx1d-iXLT55JD-BOZ-fEj9R-vqj1i/view?usp=sharing",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mid9t" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kakury/" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const aboutParagraphs = [
  // Rendered with an inline UC Berkeley link (see About component).
  {
    lead: "I'm an AI Evaluation Engineer at Handshake, where I design evaluation environments and RL tasks that stress-test frontier agents — authoring containerized tasks, defining scoring gates, and hardening the harness against being gamed. I graduated from ",
    link: { label: "UC Berkeley", href: "https://www.berkeley.edu" },
    tail: " with a degree in Data Science.",
  },
];

export const aboutClosing =
  "My research centers on uncertainty quantification through density-aware Evidential Deep Learning: models that know when they don't know, and the diagnostics to prove that signal is doing real work. Across everything I build, I care about failure modes, data correctness, and reliability under real-world constraints.";

export const experiences: Experience[] = [
  {
    period: "February 2026 — Current",
    role: "AI Evaluation Engineer (Contract), Post-Training",
    company: "Handshake",
    href: "https://joinhandshake.com",
    description:
      "Own end-to-end evaluation environments for frontier agents: author containerized coding tasks, enforce scoring gates, calibrate difficulty (avg@8 ≤ 0.5), and debug whether failures come from task design or harness/infrastructure issues.",
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
      "Built an ML system for sales-forecast anomaly diagnosis, with SKU–week ETL, schema contracts, data-quality tests, and SHAP-validated explanations before results reached decision-makers.",
    technologies: ["Python", "ETL", "SQL", "SHAP", "Statistical Modeling", "Data Quality"],
  },
  {
    period: "December 2022 — August 2023",
    role: "Data Systems Intern",
    company: "Terra Drone Corporation",
    href: "https://terra-drone.net/global/",
    description:
      "Built automated Google Cloud + SQL pipelines that cut manual production reporting and made data workflows reproducible.",
    technologies: ["Google Cloud", "SQL", "Data Pipelines"],
  },
];

export const projects: Project[] = [
  {
    title:
      "Epic Ranker: Dynamic Computational Allocation via Evidential Uncertainty Quantification (In Progress)",
    href: "https://github.com/mid9t/ER-1-Epistemic-Ranker-",
    description:
      "Currently building an early-exiting architecture with Evidential Deep Learning uncertainty gates. The system emits intermediate predictions and confidence estimates during inference, then exits early when confidence is high or vacuity is sufficiently low.",
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
  },
  {
    title: "GeoGenie: Natural-Language Spatial Search",
    href: "https://github.com/mid9t/GeoGenie",
    description:
      "An LLM turns free-text intent into structured spatial queries over hand-built geometric data structures — enabling accessible route and place discovery.",
    technologies: [
      "Python",
      "NumPy",
      "Computational Geometry",
      "Spatial Indexing",
      "LLMs",
      "FastAPI",
      "Routing",
    ],
  },
  {
    title: "EEG-Based MDD Classification via Effective Connectivity (CNNs)",
    href: "https://drive.google.com/file/d/15EPzoSF4bGnPS9oWDxrQCKYTlEsCJP0M/view?usp=sharing",
    description:
      "Built and stress-tested an end-to-end ML pipeline for clinical signal classification, focusing on evaluation rigor and leakage prevention in high-risk modeling settings.",
    technologies: ["Python", "Convolutional Neural Networks", "Granger Causality"],
  },
];

export const featuredArticle: FeaturedArticle = {
  href: `${BASE_PATH}/articles/evidential_bert_part2/`,
  label: "Featured",
  category: "Theory + Engineering",
  title:
    "Evidential BERT on CLINC150, part 2: measuring whether the density term earns its place",
  description:
    "The density term turned out to be active and harmful. Before changing the method, the evaluation was rebuilt so the next answer — positive or negative — would be defensible.",
};

export const contact = {
  heading: "Get In Touch",
  body: "I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, my inbox is always open!",
};
