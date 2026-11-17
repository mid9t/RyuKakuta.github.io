import { formatTechnologies, projectMeta, type Project } from "@/content/portfolio";
import { SiteLink } from "@/components/site/site-link";

export function ProjectCard({ project }: { project: Project }) {
  const [primary, ...rest] = project.links;
  const meta = projectMeta(project);
  const tech = formatTechnologies(project.technologies);

  if (!primary) return null;

  if (rest.length === 0) {
    return (
      <SiteLink href={primary.href} className="card-link flex h-full flex-col">
        <p className="text-meta text-text-3">{meta}</p>
        <h3 className="mt-2 text-item font-bold text-ink">{project.title}</h3>
        <p className="mt-2 text-body text-text-2">{project.description}</p>
        <p className="mt-auto pt-6 text-meta text-text-3">{tech}</p>
      </SiteLink>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <p className="text-meta text-text-3">{meta}</p>
      <h3 className="mt-2 text-item font-bold text-ink">
        <SiteLink href={primary.href}>{project.title}</SiteLink>
      </h3>
      <p className="mt-2 text-body text-text-2">{project.description}</p>
      <p className="mt-auto pt-6 text-meta text-text-3">{tech}</p>
      <p className="mt-3 flex flex-wrap gap-x-4">
        {project.links.map((link) => (
          <SiteLink key={link.label} href={link.href} className="text-nav font-semibold text-accent">
            {link.label}
          </SiteLink>
        ))}
      </p>
    </div>
  );
}