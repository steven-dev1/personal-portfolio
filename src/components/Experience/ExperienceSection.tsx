import { CodeIcon } from "../UI/CodeIcon";
import { ScrollScaleRevealEffect } from "../UI/ScrollScaleRevealEffect";
import { TitleSection } from "../UI/TitleSection";
import { ExperienceList } from "./ExperienceList";

export function ExperienceSection() {
  return (
    <section id="experience-section" className="flex flex-col items-center gap-4 my-16 sm:my-24 px-4">
      <ScrollScaleRevealEffect>
        <TitleSection>
          <CodeIcon className="size-10 -rotate-18" />
          Experiencia
        </TitleSection>
      </ScrollScaleRevealEffect>
      <ExperienceList />
    </section>
  );
}
