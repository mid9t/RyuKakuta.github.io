import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { PublicationsPreview } from "@/components/home/publications-preview";
import { Experience } from "@/components/home/experience";
import { ContactBand } from "@/components/home/contact-band";

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main>
        <Hero />
        <SelectedWork />
        <PublicationsPreview />
        <Experience />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
