import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SystemsSection } from "@/components/sections/systems-section";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { portfolio } from "@/content/portfolio";

export default function HomePage() {
  return (
    <>
      <SiteHeader profile={portfolio.profile} nav={portfolio.nav} />
      <main className="flex-1">
        <HeroSection profile={portfolio.profile} />
        <AboutSection profile={portfolio.profile} />
        <ExperienceSection experience={portfolio.experience} />
        <SystemsSection systems={portfolio.systems} />
        <SkillsSection skills={portfolio.skills} />
        <ContactSection
          profile={portfolio.profile}
          contact={portfolio.contact}
        />
      </main>
      <SiteFooter />
    </>
  );
}
