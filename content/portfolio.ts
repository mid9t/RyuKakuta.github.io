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

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  links: ProjectLink[];
  description: string;
  question?: string;
  short?: string;
  technologies: string[];
  statusLabel: string;
  area: string;
  tier: "featured" | "selected" | "also";
};

export type ExternalArticle = {
  title: string;
  outlet: string;
  platform: string;
  href: string;
  date: string;
  summary: string;
  /** Longer standfirst for the publications-page ink block. */
  detail?: string;
  codeHref?: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  date: string;
  abstract?: string;
  links: { pdf?: string; arxiv?: string; code?: string };
};

export const profile = {
  name: "Ryu Kakuta",
  role: "AI Evaluation Engineer",
  eyebrow: "Model Evaluation · AI Safety · Uncertainty",
  headline: "I test whether a model's signals can be trusted.",
  bio: "At Handshake I build RL environments and containerized coding tasks that stress-test frontier agents. My research asks three things: is the uncertainty signal real, is the measured gain real, and when should a safety monitor hand off?",
  availability: "Open to talk AI safety, uncertainty & honest evaluation",
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
      "RL environments and containerized coding tasks for frontier agents: scoring gates, difficulty calibration (avg@8 ≤ 0.5), and telling task-design failures from harness failures.",
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

export const projects: Project[] = [
  {
    title: "Activation Probes",
    tier: "featured",
    statusLabel: "Current build",
    area: "AI safety",
    links: [{ label: "GitHub", href: "https://github.com/mid9t/Activation-Monitoring" }],
    description:
      "A two-stage harmful-request monitor. A linear probe on frozen Llama-3-8B-Instruct activations decides about 95% of traffic; Llama Guard 3 takes the uncertain rest within a 5% deferral budget.",
    question:
      "Question: do ensemble disagreement and residual-stream density beat the margin baseline on three held-out shifts?",
    technologies: ["PyTorch", "Llama-3-8B", "Linear Probes", "Llama Guard 3"],
  },
  {
    title: "Skeptic",
    tier: "selected",
    statusLabel: "In progress",
    area: "Agent evaluation",
    links: [
      { label: "Repo", href: "https://github.com/Jamestilfords/self-refuting-swarm" },
      {
        label: "Slides",
        href: "https://drive.google.com/file/d/1AcFYQGjtcfUy0MQgPs4nuv7faYg9P0rR/view?usp=sharing",
      },
    ],
    description:
      "Measures false discoveries in agent-driven research loops. One stream of agent-proposed model changes runs through three acceptance rules (keep-if-better, Thresholdout, a statistical critic), with sealed test data and a pre-registered ledger.",
    technologies: ["Python", "Modal Sandboxes", "Paired Bootstrap", "Holm"],
  },
  {
    title: "ER-1: Epistemic Ranker",
    tier: "selected",
    statusLabel: "Finished 2026",
    area: "Uncertainty",
    links: [{ label: "GitHub", href: "https://github.com/mid9t/ER-1-Epistemic-Ranker-" }],
    description:
      "Does density-aware EDL, ported from vision to BERT, improve out-of-scope detection? No: plain EDL vacuity scored AUROC 0.9763 against 0.9713 for the density variant over 5 seeds, within seed noise.",
    technologies: ["PyTorch", "EDL", "HuggingFace", "CLINC150"],
  },
  {
    title: "GeoGenie",
    tier: "selected",
    statusLabel: "",
    area: "Spatial AI",
    links: [{ label: "GitHub", href: "https://github.com/mid9t/GeoGenie" }],
    description:
      "Natural-language spatial search. An LLM turns free-text intent into structured queries over hand-built geometric indexes, benchmarked down to the commit.",
    technologies: ["Python", "NumPy", "FastAPI", "LLMs"],
  },
  {
    title: "RCA-Demo",
    tier: "also",
    statusLabel: "",
    area: "Applied ML",
    links: [{ label: "GitHub", href: "https://github.com/mid9t/RCA-Demo" }],
    short: "root-cause analysis for sales anomalies",
    description: "Automated root-cause analysis for sales anomalies on synthetic data.",
    technologies: ["Python", "SHAP", "Statistical Modeling"],
  },
  {
    title: "EEG-based Depression Classification",
    tier: "also",
    statusLabel: "",
    area: "Clinical ML",
    links: [{ label: "Project page", href: withBase("/projects/eeg-based-mdd-classification/") }],
    short: "leakage-safe clinical pipeline",
    description:
      "CNNs on effective-connectivity EEG features, built around evaluation rigor and leakage prevention.",
    technologies: ["Python", "CNNs", "Granger Causality"],
  },
];

/**
 * Date is unknown. Non-ISO values sort ahead of dated pieces until a real
 * publication date is supplied.
 */
export const externalArticles: ExternalArticle[] = [
  {
    title: "Does Density Help Out-of-Scope Detection? Auditing DAEDL on BERT",
    outlet: "Data Science Collective",
    platform: "Medium",
    href: "https://medium.com/data-science-collective/does-density-help-out-of-scope-detection-auditing-daedl-on-bert-04fcdb7ac8d4",
    date: "2026-MM-DD",
    summary:
      "The public write-up of ER-1: plain evidential vacuity matched the density-scaled variant, so the density term did not earn its place.",
    detail:
      "Density-aware EDL, ported from vision to BERT and tested on CLINC150 over 5 seeds. Plain evidential vacuity scored AUROC 0.9763 against 0.9713 for the density variant, a gap inside seed noise.",
    codeHref: "https://github.com/mid9t/ER-1-Epistemic-Ranker-",
  },
];

/** Formal papers. Empty until titles, authors, and links are supplied. */
export const publications: Publication[] = [];

export function featuredProject(): Project | undefined {
  return projects.find((project) => project.tier === "featured");
}

export function projectsByTier(tier: Project["tier"]): Project[] {
  return projects.filter((project) => project.tier === tier);
}

export function projectMeta(project: Project): string {
  return [project.statusLabel, project.area].filter(Boolean).join(" · ");
}

export function formatTechnologies(technologies: string[]): string {
  return technologies.slice(0, 4).join(" · ");
}

export function publicationHref(publication: Publication): string {
  return publication.links.pdf ?? publication.links.arxiv ?? publication.links.code ?? "";
}
