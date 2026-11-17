import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

type SiteLinkProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

function withNewTab(label: string | undefined): string | undefined {
  if (!label) return undefined;
  return label.includes("opens in new tab") ? label : `${label} (opens in new tab)`;
}

/** Internal app routes use next/link. Prefixed static paths and external URLs use <a>. */
export function SiteLink({ href, className, ariaLabel, children }: SiteLinkProps) {
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (href.startsWith(BASE_PATH)) {
    const local = href.slice(BASE_PATH.length) || "/";
    return (
      <Link href={local} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={withNewTab(ariaLabel)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {ariaLabel ? null : <span className="sr-only"> (opens in new tab)</span>}
    </a>
  );
}
