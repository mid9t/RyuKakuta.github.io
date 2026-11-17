import { writingCount, featuredWriting } from "@/content/archive";
import { articleHref, formatArticleMonth, sortedArticles } from "@/content/articles";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";
import { SiteLink } from "@/components/site/site-link";
import { Citation } from "@/components/publications/citation";
import { PaperLinks } from "@/components/publications/paper-links";

export function PublicationsPreview() {
  const notes = sortedArticles().slice(0, 4);
  const featured = featuredWriting();
  const count = writingCount();

  return (
    <section id="writing" aria-labelledby="writing-title" className="pt-12 sm:pt-18">
      <Container>
        <SectionTitle
          id="writing-title"
          title="Publications & research notes"
          more={{ label: `All ${count}`, href: "/articles/" }}
        />
        <div className={featured ? "pub-split" : undefined}>
          {featured?.kind === "paper" ? (
            <div className="min-w-0 pt-5">
              <p className="text-label font-semibold text-text-3 uppercase">Paper</p>
              <h3 className="mt-3 text-item font-bold text-ink">{featured.publication.title}</h3>
              <Citation publication={featured.publication} className="mt-3" />
              <PaperLinks links={featured.publication.links} className="mt-4" />
            </div>
          ) : null}
          {featured?.kind === "external" ? (
            <div className="min-w-0 pt-5">
              <p className="text-label font-semibold text-text-3 uppercase">
                Published · {featured.article.outlet}
              </p>
              <h3 className="mt-3 text-item font-bold text-ink">{featured.article.title}</h3>
              <p className="mt-3 text-small text-text-2">{featured.article.summary}</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-2 text-nav font-semibold">
                <SiteLink href={featured.article.href} className="text-accent">
                  Read on {featured.article.platform}
                </SiteLink>
                {featured.article.codeHref ? (
                  <>
                    <span aria-hidden="true" className="font-normal text-text-3">
                      /
                    </span>
                    <SiteLink href={featured.article.codeHref} className="text-accent">
                      Code
                    </SiteLink>
                  </>
                ) : null}
              </p>
            </div>
          ) : null}
          <div className={featured ? undefined : "pt-1"}>
            {notes.map((article, index) => (
              <a
                key={article.slug}
                href={articleHref(article.slug)}
                className="card-link grid grid-cols-[88px_minmax(0,1fr)] gap-x-4 border-b border-rule py-5"
              >
                <time
                  dateTime={article.date}
                  className={
                    index === 0 ? "text-meta font-semibold text-accent" : "text-meta text-text-3"
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