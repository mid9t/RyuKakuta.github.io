import { Link, useLocation } from "wouter";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/images/profile.jpeg"
              alt="Ryu Kakuta" 
              className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            />
            <span className="font-bold text-lg">Ryu Kakuta</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/publications" className={location === "/publications" ? "text-primary" : ""}>
              Publications
            </Link>
            <Link href="/projects" className={location === "/projects" ? "text-primary" : ""}>
              Projects
            </Link>
            <Link href="/cv" className={location === "/cv" ? "text-primary" : ""}>
              CV
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4">
            <ul className="space-y-4">
              <li>
                <Link href="/publications" className={location === "/publications" ? "text-primary" : ""}>
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/projects" className={location === "/projects" ? "text-primary" : ""}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/cv" className={location === "/cv" ? "text-primary" : ""}>
                  CV
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
