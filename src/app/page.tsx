import { Navbar, HeroSection } from '@/components';
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  TimelineSection,
  EducationSection,
  ContactSection,
  FooterSection,
} from '@/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-cream text-black">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
