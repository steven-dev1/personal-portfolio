import { AboutMe } from "../components/AboutMe/AboutMe";
import { ExperienceSection } from "../components/Experience/ExperienceSection";
import { Footer } from "../components/Footer/FooterSection";
import { HeroSection } from "../components/Hero/HeroSection";
import { ProjectsSection } from "../components/Projects/ProjectsSection";
import { SkillsSection } from "../components/Skills/SkillsSection";

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
