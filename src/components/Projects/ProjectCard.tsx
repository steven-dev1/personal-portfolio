import { Project } from "@/src/lib/projects";
import { LogoGithub, ArrowUpRightFromSquare, CircleFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { LinksComponent } from "../UI/LinksComponent";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex max-w-110 my-2 group mx-4 gap-2 flex-col items-center justify-center rounded-2xl border dark:border-zinc-900 dark:bg-black bg-zinc-100 p-4 shadow-md transition-all hover:border-blue-500 dark:hover:border-blue-900 dark:hover:shadow dark:hover:shadow-blue-800/20">
      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl">
        <Image
          loading="eager"
          width={500}
          height={500}
          src={project.image}
          alt={project.title}
          className="inset-0 transition-transform group-hover:scale-110 h-full w-full object-cover select-none"
        />
      </div>
      <div className="mt-2 text-center flex flex-col gap-1">
        <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h2>
        <p className="font-medium sm:font-normal text-sm text-zinc-700 dark:text-zinc-400">{project.description}</p>
      </div>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {project.techs.map((tech) => (
          <Chip variant="soft" color="accent" key={tech} className="text-xs">
            <CircleFill className="h-1.5 w-1.5" />
            {tech}
          </Chip>
        ))}
      </div>
      <div className="flex  items-center font-medium gap-2 my-2">
        {project.link && (
          <LinksComponent link={project.link}>
            <ArrowUpRightFromSquare />
            Demo
          </LinksComponent>
        )}
        <LinksComponent
          link={project.github}
        >
          <LogoGithub />
          Código
        </LinksComponent>
      </div>
    </article>
  );
}
