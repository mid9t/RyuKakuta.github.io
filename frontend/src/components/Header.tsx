import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" }
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold font-heading hover:text-primary transition-colors">
            RK
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`${
                      isActive(item.path) 
                        ? "text-primary font-medium" 
                        : "hover:text-primary"
                    } transition-colors duration-200`}
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
        </div>

        {/* Mobile Navigation */}
        <nav className={`${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <ul className="pt-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive(item.path) 
                      ? "text-primary font-medium" 
                      : "hover:text-primary"
                  } block transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-border">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
