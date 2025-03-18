import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-muted-foreground">
            <p>© Copyright 2023 Ishikaa Lunawat. Powered by Jekyll with al-folio theme. Hosted by GitHub Pages. Photos from Unsplash.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:kakuryu@berkeley.edu" 
              className="text-foreground hover:text-primary transition" 
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/mid9t" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition" 
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/kakury/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground hover:text-primary transition" 
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
