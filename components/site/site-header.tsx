import Link from "next/link";
import { profile } from "@/content/portfolio";

type Current = "home" | "publications";

function navHref(key: "work" | "publications" | "experience", current?: Current): string {
  if (key === "work") return current === "home" ? "#work" : "/#work";
  if (key === "experience") return current === "home" ? "#experience" : "/#experience";
  if (current === "home") return "#writing";
  return "/articles/";
}

export function SiteHeader({ current }: { current?: Current }) {
  const items = [
    { key: "work" as const, label: "Work" },
    { key: "publications" as const, label: "Publications" },
    { key: "experience" as const, label: "Experience" },
  ];

  return (
    <header className="border-b-2 border-ink">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Link href="/" className="w-fit py-2.5 text-[18px] font-bold leading-6 text-ink">
          {profile.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-7">
          {items.map((item) => {
            const active = item.key === "publications" && current === "publications";
            return (
              <Link
                key={item.key}
                href={navHref(item.key, current)}
                className="nav-link py-2.5 text-nav font-medium leading-6 text-ink"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={profile.resumeUrl}
            className="nav-link py-2.5 text-nav font-medium leading-6 text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="accent-fill bg-accent px-4 py-[10px] text-nav font-medium leading-6 text-paper"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
