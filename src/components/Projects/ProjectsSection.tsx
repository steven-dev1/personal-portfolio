"use client";
import { CodeIcon } from "../UI/CodeIcon";
import { ScrollScaleRevealEffect } from "../UI/ScrollScaleRevealEffect";
import { TitleSection } from "../UI/TitleSection";
import { ProjectsList } from "./ProjectsList";

export function ProjectsSection() {
  return (
    <section id="projects-section" className="flex max-w-5xl flex-col items-center gap-4 my-4 px-4">
      <ScrollScaleRevealEffect>
        <TitleSection>
          <CodeIcon className="size-10 -rotate-18" />
          Proyectos
        </TitleSection>
      </ScrollScaleRevealEffect>
      <ProjectsList />
    </section>
  );
}
