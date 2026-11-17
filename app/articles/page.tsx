import type { Metadata } from "next";
import { archiveRows, featuredWriting, isIsoDate, writingCount } from "@/content/archive";
import { formatArticleDate, publicationsLead, publicationsTitle } from "@/content/articles";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Container } from "@/components/site/container";
import { FeaturedInk } from "@/components/publications/featured-ink";

const pieceCount = writingCount();

export const metadata: Metadata = {
  title: `${publicationsTitle} — Ryu Kakuta`,
  description: publicationsLead(pieceCount),
};

export default function ArticlesPage() {
  const rows = archiveRows();
  const featured = featuredWriting();
  const accentIndex = rows.findIndex((row) => isIsoDate(row.date));

  return (
    <>
      <SiteHeader current="publications" />
      <main>
        <Container className="pt-12">
          <div className="split-420">
            <div className="min-w-0">
              <h1 className="text-pub font-bold text-ink">{publicationsTitle}</h1>
              <p className="mt-5 max-w-[34em] text-lead text-text-2">{publicationsLead(pieceCount)}</p>
            </div>
            {featured ? <FeaturedInk /> : null}
          </div>
        </Container>

        <section aria-labelledby="notes-heading" className="pt-14 pb-12 sm:pb-18">
          <Container>
            <h2 id="notes-heading" className="sr-only">
              Research notes
            </h2>
            <div className="notes-head text-label font-semibold text-text-3 uppercase">
              <span>Date</span>
              <span>Type</span>
              <span>Title</span>
            </div>
            {rows.map((row, index) => (
              <a
                key={row.id}
                href={row.href}
                className="notes-row card-link"
                {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="notes-kicker">
                  {isIsoDate(row.date) ? (
                    <time
                      dateTime={row.date}
                      className={
                        index === accentIndex
                          ? "text-nav font-semibold text-accent"
                          : "text-nav text-text-3"
                      }
                    >
                      {formatArticleDate(row.date)}
                    </time>
                  ) : (
                    <span className="text-nav text-text-3">Date TBD</span>
                  )}
                  <span className="text-nav text-text-3">{row.typeLabel}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-row font-bold text-ink">{row.title}</h3>
                  <p className="mt-1 max-w-[46em] text-small text-text-2">{row.dek}</p>
                  {row.external ? <span className="sr-only"> (opens in new tab)</span> : null}
                </div>
              </a>
            ))}
          </Container>
        </section>
      </main>
      <SiteFooter homeLink />
    </>
  );
}