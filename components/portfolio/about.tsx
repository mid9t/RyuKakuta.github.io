"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/components/ui/use-in-view";
import { aboutParagraphs, aboutClosing } from "@/content/portfolio";

export function About() {
  const { ref, inView } = useInView<HTMLElement>();
  const reveal = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section ref={ref} id="about" className="min-h-screen px-8 py-24 lg:ml-[33.333%] lg:px-16">
      <div className="max-w-2xl">
        <h2
          className={cn(
            "mb-8 text-sm uppercase tracking-widest text-accent transition-all duration-700",
            reveal,
          )}
        >
          About
        </h2>
        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className={cn(
                "text-lg leading-relaxed text-foreground transition-all delay-100 duration-700",
                reveal,
              )}
            >
              {paragraph.lead}
              <a
                href={paragraph.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {paragraph.link.label}
              </a>
              {paragraph.tail}
            </p>
          ))}
          <p
            className={cn(
              "text-lg leading-relaxed text-muted-foreground transition-all delay-200 duration-700",
              reveal,
            )}
          >
            {aboutClosing}
          </p>
        </div>
      </div>
    </section>
  );
}
