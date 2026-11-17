import Link from "next/link";
import { profile } from "@/content/portfolio";
import { Container } from "@/components/site/container";

export function SiteFooter({ homeLink = false }: { homeLink?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container className="flex flex-wrap items-center justify-between gap-x-7 gap-y-2 py-5 text-meta text-text-3">
        <p>
          © {year} {profile.name}
        </p>
        {homeLink ? (
          <Link href="/" className="text-meta text-text-3">
            ← Home
          </Link>
        ) : (
          <p>Built with Next.js · GitHub Pages</p>
        )}
      </Container>
    </footer>
  );
}
