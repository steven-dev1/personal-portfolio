"use client";
import { EXPERIENCE } from "@/src/lib/experience";
import { ScrollScaleRevealEffect } from "../../UI/ScrollScaleRevealEffect";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList() {
  return (
    <div className="flex flex-col gap-0">
      <ScrollScaleRevealEffect>
        {EXPERIENCE.map((experience, index) => {
          if (index === EXPERIENCE.length - 1) {
            return (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                description={experience.description}
                date={experience.date}
                company={experience.company}
                isEnded
              />
            );
          }
          return (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              description={experience.description}
              date={experience.date}
              company={experience.company}
            />
          );
        })}
      </ScrollScaleRevealEffect>
    </div>
  );
}
