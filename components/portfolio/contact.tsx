"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { useInView } from "@/components/ui/use-in-view";
import { contact, profile } from "@/content/portfolio";

export function Contact() {
  const { ref, inView } = useInView<HTMLElement>();
  const [copied, setCopied] = useState(false);
  const reveal = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard may be unavailable; fail silently. */
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="flex min-h-[70vh] flex-col justify-center px-8 py-24 lg:ml-[33.333%] lg:px-16"
    >
      <div className="max-w-2xl">
        <h2
          className={cn(
            "mb-8 text-sm uppercase tracking-widest text-accent transition-all duration-700",
            reveal,
          )}
        >
          Contact
        </h2>
        <h3
          className={cn(
            "mb-6 text-3xl font-bold text-primary transition-all delay-100 duration-700 lg:text-4xl",
            reveal,
          )}
        >
          {contact.heading}
        </h3>
        <p
          className={cn(
            "mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground transition-all delay-200 duration-700",
            reveal,
          )}
        >
          {contact.body}
        </p>
        <div
          className={cn(
            "flex flex-col gap-4 transition-all delay-300 duration-700 sm:flex-row",
            reveal,
          )}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-all duration-300 hover:scale-105 hover:bg-accent/90"
          >
            <Mail className="h-4 w-4" />
            Say Hello
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-accent/30 px-6 text-sm font-medium text-primary transition-all duration-300 hover:border-accent hover:bg-accent/10"
          >
            View Résumé
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-accent/30 bg-transparent px-6 text-sm font-medium text-primary transition-all duration-300 hover:border-accent hover:bg-accent/10"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-accent" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                {profile.email}
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
