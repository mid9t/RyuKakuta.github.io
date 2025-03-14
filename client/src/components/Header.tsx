import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-card sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          {/* Logo placeholder */}
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-primary hover:text-opacity-80 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/publications" className="hover:text-primary transition">
                Publications
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/cv" className="hover:text-primary transition">
                CV
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
