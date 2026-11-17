import { cn } from "@/lib/cn";
import type { Publication } from "@/content/portfolio";

export function Citation({
  publication,
  onInk = false,
  className,
}: {
  publication: Publication;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("text-small", onInk ? "text-on-ink-2" : "text-text-2", className)}>
      {publication.authors.map((author, index) => (
        <span key={`${author}-${index}`}>
          {index > 0 ? ", " : null}
          <span
            className={
              author === "R. Kakuta"
                ? cn("font-semibold", onInk ? "text-paper" : "text-ink")
                : undefined
            }
          >
            {author}
          </span>
        </span>
      ))}
      {". "}
      <em>{publication.venue}</em>
      {`, ${publication.year}.`}
    </p>
  );
}
