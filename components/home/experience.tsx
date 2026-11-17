import { experiences } from "@/content/portfolio";
import { Container } from "@/components/site/container";
import { SectionTitle } from "@/components/site/section-title";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="pt-12 sm:pt-18">
      <Container>
        <SectionTitle id="experience-title" title="Experience" />
        <div className="rule-grid-wrap">
          <div className="rule-grid" style={{ "--col-min": "300px" } as React.CSSProperties}>
            {experiences.map((item) => (
              <div key={item.company} className="min-w-0">
                <p className="text-meta text-text-3">{item.period}</p>
                <h3 className="mt-2 text-[19px] leading-[1.3] font-bold text-ink">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.company}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </h3>
                <p className="mt-1 text-nav font-medium text-text-2">{item.role}</p>
                <p className="mt-2 text-small text-text-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
