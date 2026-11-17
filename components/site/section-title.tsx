import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site/site-link";

type MoreLink = {
  label: string;
  href: string;
};

export function SectionTitle({
  id,
  title,
  more,
}: {
  id: string;
  title: string;
  more?: MoreLink;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b-2 border-ink pb-2">
      <h2 id={id} className="text-section font-bold text-ink">
        {title}
      </h2>
      {more ? (
        <SiteLink
          href={more.href}
          className="inline-flex shrink-0 items-center gap-1 text-nav font-medium text-ink"
        >
          {more.label}
          <ArrowRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </SiteLink>
      ) : null}
    </div>
  );
}
