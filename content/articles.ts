import { BASE_PATH } from "@/lib/site";

export type Article = {
  slug: string;
  label: string;
  category: string;
  date: string; // ISO (YYYY-MM-DD)
  title: string;
  dek: string;
};

export const publicationsTitle = "Publications & research notes";

const COUNT_WORDS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

export function publicationsLead(count: number): string {
  const label = COUNT_WORDS[count] ?? String(count);
  const pieces = count === 1 ? "piece" : "pieces";
  return `One question runs through all of it: can a model's uncertainty be trusted enough to act on? ${label} ${pieces}, newest first.`;
}

/**
 * Single source of truth for the article archive at `/articles/`.
 * Each article body is a hand-authored, self-contained HTML page kept under
 * `public/articles/<slug>/index.html`. Display order is always date-descending
 * via `sortedArticles()` — do not rely on this array's order.
 */
export const articles: Article[] = [
  {
    slug: "evidential_bert_part2",
    label: "Featured",
    category: "Theory + Engineering",
    date: "2026-10-15",
    title:
      "Evidential BERT on CLINC150, part 2: measuring whether the density term earns its place",
    dek: "The density term turned out to be active and harmful. Before changing the method, the evaluation was rebuilt so the next answer — positive or negative — would be defensible.",
  },
  {
    slug: "evidential_bert_article",
    label: "Report",
    category: "Theory + Engineering",
    date: "2026-07-21",
    title:
      "Evidential BERT on CLINC150: what breaks when you port density-aware EDL from pixels to language",
    dek: "Port density-aware Evidential Deep Learning from vision to language, adapt it to BERT embeddings, then validate on CLINC150 that the uncertainty signal is doing real work.",
  },
  {
    slug: "classic-edl-analysis",
    label: "Analysis",
    category: "Evaluation",
    date: "2026-04-09",
    title: "EDL Phase 2 — PDF Analysis & Evaluation",
    dek: "What the source PDF is actually arguing, mapped onto actionable phase work: ERU/MI, routing decisions, metrics, and OOD behavior.",
  },
  {
    slug: "edl-summary",
    label: "Reference",
    category: "Metrics",
    date: "2026-04-08",
    title: "EDL Robustness & Metrics",
    dek: "Robustness findings, early-exit cross-encoder inference, and a practical metric panel for compute-gated ranking with Dirichlet evidence.",
  },
  {
    slug: "edl-debate",
    label: "Debate",
    category: "Critique",
    date: "2026-03-28",
    title: "Are EDL's Uncertainty Claims a Mirage?",
    dek: "A collegial multi-agent debate on whether Evidential Deep Learning constitutes genuine uncertainty quantification — or a well-calibrated mirage.",
  },
  {
    slug: "evidential-deep-learning",
    label: "Essay",
    category: "Systems",
    date: "2026-03-25",
    title: "Bridging Research LLMs and Business Reality via Evidential Deep Learning",
    dek: "Why uncertainty quantification and early exiting are not merely academic curiosities — but a structural necessity for deploying research-grade LLMs under real business constraints.",
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateParts(iso: string): { year: number; month: number; day: number } {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month, day };
}

export function sortedArticles(): Article[] {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** "15 Oct 2026" */
export function formatArticleDate(iso: string): string {
  const { year, month, day } = dateParts(iso);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/** "Oct 2026" */
export function formatArticleMonth(iso: string): string {
  const { year, month } = dateParts(iso);
  return `${MONTHS[month - 1]} ${year}`;
}

export function articleHref(slug: string): string {
  return `${BASE_PATH}/articles/${slug}/`;
}
