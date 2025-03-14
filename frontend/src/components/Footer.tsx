import React from 'react';
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Ryu Kakuta</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:ryukakuta@stanford.edu" 
              className="text-foreground hover:text-primary transition" 
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/RyuKakuta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition" 
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ryukakuta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition" 
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
