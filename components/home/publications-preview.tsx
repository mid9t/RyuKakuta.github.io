import { sortedPublications } from "@/content/portfolio";
import { articleHref, formatArticleMonth, sortedArticles } from "@/content/articles";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";
import { Citation } from "@/components/publications/citation";
import { PaperLinks } from "@/components/publications/paper-links";

export function PublicationsPreview() {
  const notes = sortedArticles();
  const [paper] = sortedPublications();
  const preview = notes.slice(0, 4);

  return (
    <section id="writing" aria-labelledby="writing-title" className="pt-12 sm:pt-18">
      <Container>
        <SectionTitle
          id="writing-title"
          title="Publications & research notes"
          more={{ label: `All ${notes.length}`, href: "/articles/" }}
        />
        <div className={paper ? "pub-split" : undefined}>
          {paper ? (
            <div className="pt-5">
              <p className="text-label font-semibold text-text-3 uppercase">Paper</p>
              <h3 className="mt-3 text-item font-bold text-ink">{paper.title}</h3>
              <Citation publication={paper} className="mt-3" />
              <PaperLinks links={paper.links} className="mt-4" />
            </div>
          ) : null}
          <div className={paper ? undefined : "pt-1"}>
            {preview.map((article, index) => (
              <a
                key={article.slug}
                href={articleHref(article.slug)}
                className="card-link grid grid-cols-[88px_minmax(0,1fr)] gap-x-4 border-b border-rule py-5"
              >
                <time
                  dateTime={article.date}
                  className={
                    index === 0
                      ? "text-meta font-semibold text-accent"
                      : "text-meta text-text-3"
                  }
                >
                  {formatArticleMonth(article.date)}
                </time>
                <h3 className="text-[17px] leading-[1.4] font-semibold text-ink">{article.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
