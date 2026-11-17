import { ArrowRight } from "lucide-react";
import { featuredWriting } from "@/content/archive";
import { publicationHref } from "@/content/portfolio";
import { SiteLink } from "@/components/site/site-link";
import { Citation } from "@/components/publications/citation";

export function FeaturedInk() {
  const featured = featuredWriting();
  if (!featured) return null;

  if (featured.kind === "external") {
    const article = featured.article;
    return (
      <SiteLink href={article.href} className="ink card-link block min-w-0 bg-ink px-8 py-8 text-paper sm:px-10">
        <p className="flex items-center gap-3 text-label font-semibold uppercase">
          <span className="size-2.5 shrink-0 bg-accent" aria-hidden="true" />
          Published · {article.outlet}
        </p>
        <h2 className="mt-4 text-[26px] leading-[1.2] font-bold tracking-[-0.02em]">{article.title}</h2>
        <p className="mt-4 text-small text-on-ink-2">{article.detail ?? article.summary}</p>
        <p className="mt-5 inline-flex items-center gap-1 text-nav font-semibold text-paper">
          Read on {article.platform}
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </p>
      </SiteLink>
    );
  }

  const publication = featured.publication;
  const href = publicationHref(publication);
  const label = publication.links.pdf ? "PDF" : publication.links.arxiv ? "arXiv" : "Code";
  const body = (
    <>
      <p className="flex items-center gap-3 text-label font-semibold uppercase">
        <span className="size-2.5 shrink-0 bg-accent" aria-hidden="true" />
        Paper
      </p>
      <h2 className="mt-4 text-[26px] leading-[1.2] font-bold tracking-[-0.02em]">
        {publication.title}
      </h2>
      <Citation publication={publication} onInk className="mt-3" />
      {publication.abstract ? (
        <p className="mt-4 text-small text-on-ink-2">{publication.abstract}</p>
      ) : null}
      {href ? (
        <p className="mt-5 inline-flex items-center gap-1 text-nav font-semibold text-paper">
          {label}
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </p>
      ) : null}
    </>
  );

  if (!href) {
    return <article className="ink min-w-0 bg-ink px-8 py-8 text-paper sm:px-10">{body}</article>;
  }

  return (
    <SiteLink href={href} className="ink card-link block min-w-0 bg-ink px-8 py-8 text-paper sm:px-10">
      {body}
    </SiteLink>
  );
}