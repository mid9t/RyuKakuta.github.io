import { formatTechnologies, type Project } from "@/content/portfolio";
import { SiteLink } from "@/components/site/site-link";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SiteLink href={project.href} className="card-link flex h-full flex-col">
      <p className="text-meta text-text-3">
        {project.year} · {project.area}
      </p>
      <h3 className="mt-2 text-item font-bold text-ink">{project.title}</h3>
      <p className="mt-2 text-body text-text-2">{project.description}</p>
      <p className="mt-auto pt-6 text-meta text-text-3">{formatTechnologies(project.technologies)}</p>
    </SiteLink>
  );
}
