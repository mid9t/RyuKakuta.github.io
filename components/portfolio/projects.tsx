"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { useInView } from "@/components/ui/use-in-view";
import { Badge } from "@/components/ui/badge";
import { projects, featuredArticle } from "@/content/portfolio";
import { BASE_PATH } from "@/lib/site";

export function Projects() {
  const { ref, inView } = useInView<HTMLElement>();
  const reveal = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section ref={ref} id="projects" className="px-8 py-24 lg:ml-[33.333%] lg:px-16">
      <div className="max-w-2xl">
        <h2
          className={cn(
            "mb-12 text-sm uppercase tracking-widest text-accent transition-all duration-700",
            reveal,
          )}
        >
          Projects
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group block cursor-pointer rounded-lg p-6 transition-all duration-500 hover:bg-card/50",
                reveal,
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="flex items-center gap-2 text-lg font-medium text-primary transition-colors group-hover:text-accent">
                {project.title}
                <ArrowUpRight className="h-4 w-4 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/mid9t?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group mt-12 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent",
            inView ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="border-b border-transparent transition-colors group-hover:border-accent">
            View all projects on GitHub
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

        {/* Featured Writing */}
        <div id="articles" className="mt-24">
          <h2
            className={cn(
              "mb-8 text-sm uppercase tracking-widest text-accent transition-all duration-700",
              reveal,
            )}
          >
            Featured Writing
          </h2>
          <div className="grid gap-4">
            <a
              href={featuredArticle.href}
              className={cn(
                "group block rounded-lg bg-card/30 p-6 transition-all duration-500 hover:bg-card/50",
                reveal,
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full border border-accent/30 px-2 py-0.5 text-xs uppercase tracking-widest text-accent">
                      {featuredArticle.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-primary transition-colors group-hover:text-accent">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {featuredArticle.description}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm text-accent">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </div>
          <a
            href={`${BASE_PATH}/articles/`}
            className={cn(
              "group mt-8 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent",
              inView ? "opacity-100" : "opacity-0",
            )}
          >
            <span className="border-b border-transparent transition-colors group-hover:border-accent">
              View all articles
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
