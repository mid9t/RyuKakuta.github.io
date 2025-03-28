import { MailIcon, ExternalLink, BookIcon, GraduationCapIcon, Bookmark } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { SiResearchgate, SiGooglescholar } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <MailIcon className="h-5 w-5" />, href: "mailto:kakuryu@berkeley.edu", label: "Email" },
    { icon: <FaGithub className="h-5 w-5" />, href: "https://github.com/mid9t", label: "GitHub" },
    { icon: <FaLinkedin className="h-5 w-5" />, href: "https://linkedin.com/in/kakury/", label: "LinkedIn" },
    { icon: <FaTwitter className="h-5 w-5" />, href: "https://twitter.com/RyuKakuta", label: "Twitter" },
  ];
  
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Copyright and Credits */}
          <div className="text-sm text-muted-foreground">
            <h3 className="font-bold text-foreground mb-3">Ryu Kakuta</h3>
            <p className="mb-2">© Copyright {currentYear} Ryu Kakuta.</p>
            <p>Powered by React. Hosted by Github Pages.</p>
          </div>
          
          {/* Column 2: Links */}
          <div className="text-sm">
            <h3 className="font-bold mb-3">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.berkeley.edu" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                  <GraduationCapIcon className="h-4 w-4" />
                  <span>UC Berkeley</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                  <BookIcon className="h-4 w-4" />
                  <span>Research Lab</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" />
                  <span>Resources</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Social Links */}
          <div>
            <h3 className="font-bold mb-3 text-sm">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition" 
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="mt-5">
              <p className="text-xs text-muted-foreground">
                Last updated: March 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
