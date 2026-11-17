import type { Metadata } from "next";
import { sortedPublications } from "@/content/portfolio";
import {
  articleHref,
  formatArticleDate,
  publicationsIntro,
  publicationsTitle,
  sortedArticles,
} from "@/content/articles";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Container } from "@/components/site/container";
import { Citation } from "@/components/publications/citation";
import { PaperLinks } from "@/components/publications/paper-links";

export const metadata: Metadata = {
  title: `${publicationsTitle} — Ryu Kakuta`,
  description: publicationsIntro,
};

export default function ArticlesPage() {
  const notes = sortedArticles();
  const [newest, ...rest] = sortedPublications();

  return (
    <>
      <SiteHeader current="publications" />
      <main>
        <Container className="pt-12">
          <div className="split-420">
            <div className="min-w-0">
              <h1 className="text-pub font-bold text-ink">{publicationsTitle}</h1>
              <p className="mt-5 max-w-[34em] text-lead text-text-2">{publicationsIntro}</p>
            </div>
            {newest ? (
              <article className="ink bg-ink px-8 py-8 text-paper sm:px-10">
                <p className="flex items-center gap-3 text-label font-semibold text-paper uppercase">
                  <span className="size-2.5 shrink-0 bg-accent" aria-hidden="true" />
                  Paper
                </p>
                <h2 className="mt-4 text-[26px] leading-[1.2] font-bold tracking-[-0.02em]">
                  {newest.title}
                </h2>
                <Citation publication={newest} onInk className="mt-3" />
                {newest.abstract ? (
                  <p className="mt-4 text-small text-on-ink-2">{newest.abstract}</p>
                ) : null}
                <PaperLinks links={newest.links} onInk className="mt-5" />
              </article>
            ) : null}
          </div>
        </Container>

        {rest.length > 0 ? (
          <Container className="pt-14">
            <h2 className="border-b-2 border-ink pb-2 text-section font-bold">Papers</h2>
            <ul>
              {rest.map((paper) => (
                <li key={paper.title} className="border-b border-rule py-6">
                  <h3 className="text-item font-bold text-ink">{paper.title}</h3>
                  <Citation publication={paper} className="mt-2" />
                  <PaperLinks links={paper.links} className="mt-3" />
                </li>
              ))}
            </ul>
          </Container>
        ) : null}

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
            {notes.map((article, index) => (
              <a key={article.slug} href={articleHref(article.slug)} className="notes-row card-link">
                <div className="notes-kicker">
                  <time
                    dateTime={article.date}
                    className={
                      index === 0
                        ? "text-nav font-semibold text-accent"
                        : "text-nav text-text-3"
                    }
                  >
                    {formatArticleDate(article.date)}
                  </time>
                  <span className="text-nav text-text-3">{article.label}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-row font-bold text-ink">{article.title}</h3>
                  <p className="mt-1 max-w-[46em] text-small text-text-2">{article.dek}</p>
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
