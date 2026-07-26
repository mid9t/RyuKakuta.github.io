import { profile } from "@/content/portfolio";
import { CursorGlow } from "@/components/portfolio/cursor-glow";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden bg-background"
      style={{
        backgroundImage: `linear-gradient(rgba(2,9,14,.78), rgba(2,9,14,.78)), url(${profile.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CursorGlow />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
