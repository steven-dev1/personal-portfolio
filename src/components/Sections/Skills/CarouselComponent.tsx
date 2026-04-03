"use client";
import { SKILLS as firstSkills } from "@/src/lib/skills";
import Image from "next/image";

export function CarouselComponent({ first = true }: { first: boolean }) {
  const SKILLS = firstSkills[first ? 0 : 1];
  const animate = first ? "animate-carousel" : "animate-carousel2";
  return (
    <div className="relative w-full overflow-hidden mb-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-24 z-10 bg-linear-to-r dark:from-black from-[#f0f0f0] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-24 z-10 bg-linear-to-l dark:from-black from-[#f0f0f0] to-transparent" />

      <div className={`${animate} flex w-max`}>
        {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
          <div
            key={i}
            style={{ minWidth: "6rem" }}
            className="flex flex-col items-center gap-2 pl-6 sm:pl-8 sm:min-w-32"
          >
            <div className="size-12 sm:size-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center p-2">
              <Image
                loading="lazy"
                width={100}
                height={100}
                src={skill.icon}
                alt={skill.name}
                className="size-8 sm:size-8 object-contain"
              />
            </div>
            <span className="text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
