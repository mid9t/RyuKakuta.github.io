import { articleHref, sortedArticles } from "@/content/articles";
import {
  externalArticles,
  publicationHref,
  publications,
  type ExternalArticle,
  type Publication,
} from "@/content/portfolio";

export type FeaturedWriting =
  | { kind: "paper"; publication: Publication }
  | { kind: "external"; article: ExternalArticle };

export type ArchiveRow = {
  id: string;
  title: string;
  dek: string;
  date: string;
  href: string;
  typeLabel: string;
  external: boolean;
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function isIsoDate(value: string): boolean {
  return ISO_DATE.test(value);
}

/** Undated items sort ahead of real dates until a publication date is known. */
function sortKey(date: string): string {
  return isIsoDate(date) ? date : "9999-99-99";
}

function byNewest(a: { date: string }, b: { date: string }): number {
  return sortKey(b.date).localeCompare(sortKey(a.date));
}

export function writingCount(): number {
  return sortedArticles().length + externalArticles.length + publications.length;
}

export function featuredWriting(): FeaturedWriting | undefined {
  const [paper] = [...publications].sort(byNewest);
  if (paper) return { kind: "paper", publication: paper };
  const [article] = [...externalArticles].sort(byNewest);
  if (article) return { kind: "external", article };
  return undefined;
}

function publicationDek(publication: Publication): string {
  if (publication.abstract) return publication.abstract;
  const authors = publication.authors.join(", ");
  return `${authors}. ${publication.venue}, ${publication.year}.`;
}

/**
 * Every note, external article, and paper except the piece currently in the
 * featured block. Undated rows lead, so the Medium article stays first until
 * it has a real date. A formal paper takes the featured block; this list is
 * where that article lands.
 */
export function archiveRows(): ArchiveRow[] {
  const featured = featuredWriting();
  const featuredId =
    featured?.kind === "paper"
      ? `paper:${featured.publication.title}`
      : featured?.kind === "external"
        ? `external:${featured.article.href}`
        : undefined;

  const rows: ArchiveRow[] = [
    ...sortedArticles().map((article) => ({
      id: `article:${article.slug}`,
      title: article.title,
      dek: article.dek,
      date: article.date,
      href: articleHref(article.slug),
      typeLabel: article.label,
      external: false,
    })),
    ...externalArticles.map((article) => ({
      id: `external:${article.href}`,
      title: article.title,
      dek: article.summary,
      date: article.date,
      href: article.href,
      typeLabel: `Article · ${article.platform}`,
      external: true,
    })),
    ...publications.map((publication) => ({
      id: `paper:${publication.title}`,
      title: publication.title,
      dek: publicationDek(publication),
      date: publication.date,
      href: publicationHref(publication),
      typeLabel: "Paper",
      external: true,
    })),
  ];

  return rows
    .filter((row) => row.id !== featuredId)
    .sort((a, b) => byNewest(a, b) || a.title.localeCompare(b.title));
}
