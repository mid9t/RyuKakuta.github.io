import { projectsByTier } from "@/content/portfolio";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";
import { SiteLink } from "@/components/site/site-link";
import { ProjectCard } from "@/components/home/project-card";

export function SelectedWork() {
  const selected = projectsByTier("selected");
  const also = projectsByTier("also");
  if (selected.length === 0 && also.length === 0) return null;

  return (
    <section id="work" aria-labelledby="work-title" className="pt-12 sm:pt-18">
      <Container>
        <SectionTitle
          id="work-title"
          title="Selected work"
          more={{ label: "All on GitHub", href: "https://github.com/mid9t" }}
        />
        {selected.length > 0 ? (
          <div className="rule-grid-wrap">
            <div className="rule-grid" style={{ "--col-min": "300px" } as React.CSSProperties}>
              {selected.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        ) : null}
        {also.length > 0 ? (
          <p className="flex flex-wrap items-baseline gap-x-7 gap-y-2 border-b border-rule py-4">
            <span className="text-small text-text-3">Also</span>
            {also.map((project) => {
              const href = project.links[0]?.href;
              if (!href) return null;
              return (
                <SiteLink key={project.title} href={href} className="text-small">
                  <span className="font-semibold text-ink">{project.title}</span>
                  {project.short ? (
                    <span className="font-normal text-text-3"> — {project.short}</span>
                  ) : null}
                </SiteLink>
              );
            })}
          </p>
        ) : null}
      </Container>
    </section>
  );
}