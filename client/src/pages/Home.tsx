import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, MailIcon, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <Profile />
      
      {/* Quick Links Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 font-heading">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/publications">
            <div className="bg-card hover:bg-primary/10 transition-colors p-6 rounded-lg shadow-md cursor-pointer flex gap-4 items-center">
              <div className="p-3 bg-primary/10 rounded-md">
                <BookOpen className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Publications</h3>
                <p className="text-sm text-muted-foreground">View my research papers</p>
              </div>
            </div>
          </Link>
          
          <Link href="/projects">
            <div className="bg-card hover:bg-primary/10 transition-colors p-6 rounded-lg shadow-md cursor-pointer flex gap-4 items-center">
              <div className="p-3 bg-primary/10 rounded-md">
                <Users className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Projects</h3>
                <p className="text-sm text-muted-foreground">Explore my research work</p>
              </div>
            </div>
          </Link>
          
          <Link href="/cv">
            <div className="bg-card hover:bg-primary/10 transition-colors p-6 rounded-lg shadow-md cursor-pointer flex gap-4 items-center">
              <div className="p-3 bg-primary/10 rounded-md">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">CV</h3>
                <p className="text-sm text-muted-foreground">Download my resume</p>
              </div>
            </div>
          </Link>
          
          <a href="mailto:kakuryu@berkeley.edu">
            <div className="bg-card hover:bg-primary/10 transition-colors p-6 rounded-lg shadow-md cursor-pointer flex gap-4 items-center">
              <div className="p-3 bg-primary/10 rounded-md">
                <MailIcon className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Contact</h3>
                <p className="text-sm text-muted-foreground">Get in touch with me</p>
              </div>
            </div>
          </a>
        </div>
      </section>
      
      {/* Featured Research */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 font-heading">Featured Research</h2>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Featured Research" 
                className="rounded-md w-full object-cover h-[200px]"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">...Coming soon...</h3>
              <p className="text-sm mb-4">
                ...Coming soon...
              </p>
              {/* <p className="text-primary italic text-sm mb-4">Published in Conference on Robot Learning (CoRL), 2023</p> */}
              <Link href="/publications">
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* News and Updates */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 font-heading">News & Updates</h2>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="border-l-2 border-primary pl-4 pb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold">Started internship at Asper.ai</h3>
                <span className="text-sm text-muted-foreground">March 2025</span>
              </div>
              <p className="text-sm">ML pipeline and AI Agent system design</p>
            </li>
            <li className="border-l-2 border-primary pl-4 pb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-semibold">Joined UC Berkeley</h3>
                <span className="text-sm text-muted-foreground">September 2023</span>
              </div>
              <p className="text-sm">Started my Bachelor's degree in Data Science at UC Berkeley.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
