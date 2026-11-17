import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/content/portfolio";
import { Container } from "@/components/site/container";

export function ContactBand() {
  const profiles = socials.filter((item) => item.label === "GitHub" || item.label === "LinkedIn");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mt-12 sm:mt-18">
      <Container>
        <div className="contact-band ink">
          <div className="p-8 sm:p-10">
            <h2 id="contact-heading" className="text-label font-semibold text-on-ink-2 uppercase">
              {profile.availability}
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block text-feature font-bold break-all text-paper"
            >
              {profile.email}
            </a>
            <p className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
              {profiles.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-nav font-medium text-on-ink-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                className="text-nav font-medium text-on-ink-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé (PDF)
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </p>
          </div>
          <a href={`mailto:${profile.email}`} aria-label="Email Ryu" className="accent-fill contact-accent">
            <ArrowUpRight aria-hidden="true" strokeWidth={2} className="absolute right-5 bottom-5 size-9 text-paper" />
          </a>
        </div>
      </Container>
    </section>
  );
}
