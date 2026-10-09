import HeroBanner from "@/components/hero-banner";
import AboutSection from "@/components/about-section";
import ProjectSection from "@/components/project-section";
import ServicesSection from "@/components/services-section";
import Cta from "@/components/cta";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="h-auto container mx-auto overflow-y-hidden">
      <HeroBanner />
      {/*  About */}
      <AboutSection />
      {/*  Projects */}
      <ProjectSection />
      {/*  Services */}
      <ServicesSection />
      <Cta />
      {/*  Contact */}
      <ContactSection />

      {/*/!*  Experience *!/*/}
      {/*<ExperienceSection />*/}

      {/*/!*  Skills *!/*/}
      {/*<SkillSection />*/}
    </main>
  );
}
