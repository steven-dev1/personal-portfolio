import { PROJECTS } from "@/src/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { ScrollScaleRevealEffect } from "../../UI/ScrollScaleRevealEffect";

export function ProjectsList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {PROJECTS.map((project) => (
        <ScrollScaleRevealEffect key={project.id}>
          <ProjectCard  project={project} />
        </ScrollScaleRevealEffect>
      ))}
    </div>
  );
}
