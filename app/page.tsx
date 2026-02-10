import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ProjectsGrid } from "@/components/home/projects-grid";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsGrid />
      <AboutSection />
      <ContactSection />
    </>
  );
}
