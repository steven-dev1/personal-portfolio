import { AboutMe } from "../components/Sections/AboutMe/AboutMe";
import { ExperienceSection } from "../components/Sections/Experience/ExperienceSection";
import { Footer } from "../components/Sections/Footer/FooterSection";
import { HeroSection } from "../components/Sections/Hero/HeroSection";
import { ProjectsSection } from "../components/Sections/Projects/ProjectsSection";
import { SkillsSection } from "../components/Sections/Skills/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutMe />
      <SkillsSection />
      <Footer />
    </div>
  );
}
