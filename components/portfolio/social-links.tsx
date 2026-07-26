import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { socials, type SocialLink } from "@/content/portfolio";

const ICONS: Record<SocialLink["label"], LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function SocialLinks({ className, hoverScale = true }: { className?: string; hoverScale?: boolean }) {
  return (
    <div className={cn("flex gap-6", className)}>
      {socials.map((social) => {
        const Icon = ICONS[social.label];
        const isMail = social.href.startsWith("mailto:");
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className={cn(
              "text-muted-foreground transition-colors duration-300 hover:text-accent",
              hoverScale && "transform hover:scale-110",
            )}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
