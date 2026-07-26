"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useInView } from "@/components/ui/use-in-view";
import { Badge } from "@/components/ui/badge";
import { experiences, profile } from "@/content/portfolio";

export function Experience() {
  const { ref, inView } = useInView<HTMLElement>();
  const reveal = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section ref={ref} id="experience" className="px-8 py-24 lg:ml-[33.333%] lg:px-16">
      <div className="max-w-2xl">
        <h2
          className={cn(
            "mb-12 text-sm uppercase tracking-widest text-accent transition-all duration-700",
            reveal,
          )}
        >
          Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((item, index) => (
            <a
              key={item.company}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group block cursor-pointer rounded-lg p-6 transition-all duration-500 hover:bg-card/50",
                reveal,
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="grid gap-4 lg:grid-cols-[140px_1fr]">
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-medium text-primary transition-colors group-hover:text-accent">
                    {item.role} · {item.company}
                    <ArrowUpRight className="h-4 w-4 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group mt-12 inline-flex items-center gap-2 rounded-md border border-accent/30 px-5 py-2.5 text-primary transition-all duration-300 hover:border-accent hover:bg-accent/10",
            inView ? "opacity-100" : "opacity-0",
          )}
        >
          <span>View Résumé</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
