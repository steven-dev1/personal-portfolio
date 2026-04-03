import { TitleSection } from "../UI/TitleSection";
import { CarouselComponent } from "./CarouselComponent";
import { CodeIcon } from "../UI/CodeIcon";

export function SkillsSection() {
  return (
    <section id="skills-section" className="flex flex-col items-center gap-4 my-16 sm:my-24">
      <TitleSection>
        <CodeIcon className="size-10 -rotate-18" />
        Habilidades
      </TitleSection>
      <div className="w-screen md:max-w-2xl relative">
        <CarouselComponent first />
        <CarouselComponent first={false} />
      </div>
    </section>
  );
}
