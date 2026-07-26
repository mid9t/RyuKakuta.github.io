import { profile } from "@/content/portfolio";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-8 py-12 lg:ml-[33.333%] lg:px-16">
      <div className="max-w-2xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            <span>Designed &amp; Built by </span>
            <a
              href="https://github.com/mid9t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              {profile.name}
            </a>
          </p>
          <SocialLinks className="lg:hidden" hoverScale={false} />
          <p className="text-xs text-muted-foreground/60">Thanks for checking in :)</p>
        </div>
      </div>
    </footer>
  );
}
