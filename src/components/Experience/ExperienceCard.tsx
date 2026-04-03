import { ExperienceCard as ExperienceType } from "@/src/lib/experience";
import { CircleFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";

interface Props extends Omit<ExperienceType, "id"> {
  isEnded?: boolean;
}

export function ExperienceCard({ title, description, date, isEnded, company }: Props) {
  return (
    <article className="flex items-start gap-4">
      <div className="flex flex-col gap-1 items-center self-stretch">
        <CircleFill className="h-4 w-4 text-blue-500 dark:text-blue-700" />
        <div className={`w-px flex-1 dark:bg-blue-950 bg-blue-400`}></div>
      </div>
      <div
        className={`max-w-120 dark:bg-black bg-zinc-100 p-4 flex flex-col ${isEnded ? "" : "mb-6"} items-start gap-2 border-zinc-300 shadow-md hover:shadow-blue-400/20 hover:border-blue-400 dark:hover:border-blue-800 dark:hover:shadow-blue-950/30 border rounded-lg dark:border-zinc-900`}
      >
        <div className="flex items-center flex-wrap gap-2">
          <Chip variant="soft" color="accent" className="text-xs">
            {date}
          </Chip>
          <CircleFill className="w-1 h-1" />
          <Chip variant="tertiary" color="default" className="text-xs pl-0">
            {company}
          </Chip>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-zinc-800 dark:text-zinc-100">{title}</h2>
        <p className="text-zinc-600 font-medium sm:font-normal text-xs sm:text-sm lg:text-base dark:text-zinc-400">{description}</p>
      </div>
    </article>
  );
}
