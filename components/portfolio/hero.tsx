"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/content/portfolio";
import { BASE_PATH } from "@/lib/site";
import { SocialLinks } from "./social-links";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: `${BASE_PATH}/articles/` },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <section className="flex min-h-screen flex-col lg:flex-row">
      <aside className="flex flex-col justify-between p-8 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/3 lg:p-12">
        <div>
          <div
            className={cn(
              "mb-8 transition-all duration-700",
              shown ? "scale-100 opacity-100" : "scale-95 opacity-0",
            )}
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-border ring-offset-2 ring-offset-background lg:h-32 lg:w-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
          </div>

          <h1
            className={cn(
              "mb-4 text-4xl font-bold tracking-tight text-primary transition-all duration-700 lg:text-5xl",
              reveal,
            )}
          >
            {profile.name}
          </h1>
          <p
            className={cn(
              "mb-6 text-xl font-medium text-accent transition-all delay-100 duration-700",
              reveal,
            )}
          >
            {profile.role}
          </p>
          <p
            className={cn(
              "max-w-sm leading-relaxed text-muted-foreground transition-all delay-200 duration-700",
              reveal,
            )}
          >
            {profile.bio}
          </p>

          <nav
            className={cn(
              "mt-16 hidden transition-all delay-300 duration-700 lg:block",
              reveal,
            )}
          >
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-px w-8 bg-muted-foreground transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <SocialLinks
          className={cn(
            "mt-8 transition-all delay-500 duration-700 lg:mt-0",
            reveal,
          )}
        />
      </aside>

      <a
        href="#about"
        className={cn(
          "fixed bottom-8 left-1/2 z-10 flex -translate-x-1/2 transform flex-col items-center gap-2 text-muted-foreground transition-all delay-700 duration-700 hover:text-accent lg:left-[16.5%]",
          shown ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
