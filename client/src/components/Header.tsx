import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  const navItems = [
    { label: "About", href: "/" },
    { label: "Publications", href: "/publications" },
    { label: "Projects", href: "/projects" },
    { label: "CV", href: "/cv" }
  ];
  
  return (
    <header className="bg-card sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src={`${baseUrl}images/profile.jpeg`} 
              alt="Ryu Kakuta" 
              className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            />
            <span className="font-bold text-lg hidden sm:inline-block">Ryu Kakuta</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map(item => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${location === item.href ? 'text-primary font-medium' : 'text-foreground hover:text-primary'} transition`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="ml-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card py-4 px-4 shadow-md animate-in fade-in slide-in-from-top-5">
          <ul className="space-y-4">
            {navItems.map(item => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${location === item.href ? 'text-primary font-medium' : 'text-foreground hover:text-primary'} block py-2 transition`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
