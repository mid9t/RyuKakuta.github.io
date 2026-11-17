import { selectedProjects } from "@/content/portfolio";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";
import { ProjectCard } from "@/components/home/project-card";

export function SelectedWork() {
  const projects = selectedProjects();
  if (projects.length === 0) return null;

  return (
    <section id="work" aria-labelledby="work-title" className="pt-12 sm:pt-18">
      <Container>
        <SectionTitle
          id="work-title"
          title="Selected work"
          more={{ label: "All on GitHub", href: "https://github.com/mid9t" }}
        />
        <div className="rule-grid-wrap">
          <div className="rule-grid" style={{ "--col-min": "300px" } as React.CSSProperties}>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
