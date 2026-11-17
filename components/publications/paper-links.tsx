import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Publication } from "@/content/portfolio";

export function PaperLinks({
  links,
  onInk = false,
  className,
}: {
  links: Publication["links"];
  onInk?: boolean;
  className?: string;
}) {
  const items = [
    links.pdf ? { label: "PDF", href: links.pdf } : null,
    links.arxiv ? { label: "arXiv", href: links.arxiv } : null,
    links.code ? { label: "Code", href: links.code } : null,
  ].filter((item): item is { label: string; href: string } => item !== null);

  if (items.length === 0) return null;

  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 text-nav font-semibold", className)}>
      {items.map((item, index) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className={onInk ? "font-normal text-on-ink-3" : "font-normal text-text-3"}>
              /
            </span>
          ) : null}
          <a
            href={item.href}
            className={onInk ? "text-paper" : "text-accent"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
            {onInk ? (
              <ArrowRight aria-hidden="true" strokeWidth={2} className="ml-1 inline size-3.5" />
            ) : null}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </span>
      ))}
    </p>
  );
}
