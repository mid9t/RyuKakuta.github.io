import { BASE_PATH } from "@/lib/site";

export type Article = {
  slug: string;
  label: string;
  category: string;
  date: string; // ISO (YYYY-MM-DD)
  title: string;
  dek: string;
};

/**
 * Single source of truth for the article archive at `/articles/`.
 * Each article body is a hand-authored, self-contained HTML page kept under
 * `public/articles/<slug>/index.html`; this registry generates the index/cards
 * and the homepage "Featured Writing" link. Order = display order (newest work first).
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
    slug: "evidential-deep-learning",
    label: "Essay",
    category: "Systems",
    date: "2026-03-25",
    title: "Bridging Research LLMs and Business Reality via Evidential Deep Learning",
    dek: "Why uncertainty quantification and early exiting are not merely academic curiosities — but a structural necessity for deploying research-grade LLMs under real business constraints.",
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
    slug: "classic-edl-analysis",
    label: "Analysis",
    category: "Evaluation",
    date: "2026-04-09",
    title: "EDL Phase 2 — PDF Analysis & Evaluation",
    dek: "What the source PDF is actually arguing, mapped onto actionable phase work: ERU/MI, routing decisions, metrics, and OOD behavior.",
  },
  {
    slug: "edl-debate",
    label: "Debate",
    category: "Critique",
    date: "2026-03-28",
    title: "Are EDL's Uncertainty Claims a Mirage?",
    dek: "A collegial multi-agent debate on whether Evidential Deep Learning constitutes genuine uncertainty quantification — or a well-calibrated mirage.",
  },
];

export function articleHref(slug: string): string {
  return `${BASE_PATH}/articles/${slug}/`;
}

export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
