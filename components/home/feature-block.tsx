import { ArrowUpRight } from "lucide-react";
import { formatTechnologies, type Project } from "@/content/portfolio";
import { SiteLink } from "@/components/site/site-link";

export function FeatureBlock({ project }: { project: Project }) {
  return (
    <SiteLink
      href={project.href}
      className="feature-block card-link ink"
      ariaLabel={`${project.title} — view on GitHub`}
    >
      <div>
        <p className="flex items-center gap-3 text-label font-semibold text-paper uppercase">
          <span className="size-2.5 shrink-0 bg-accent" aria-hidden="true" />
          Current project
        </p>
        <h2 className="mt-4 text-feature font-bold">{project.title}</h2>
        <p className="feature-copy">{project.description}</p>
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <p className="min-w-0 pb-6 text-meta text-on-ink-3">{formatTechnologies(project.technologies)}</p>
        <span className="feature-square" aria-hidden="true">
          <ArrowUpRight strokeWidth={2} className="absolute right-4 bottom-4 size-8 text-paper" />
        </span>
      </div>
    </SiteLink>
  );
}
