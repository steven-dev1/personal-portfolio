import Image from "next/image";
import { CodeIcon } from "../UI/CodeIcon";
import { TitleSection } from "../UI/TitleSection";
import { ScrollTranslateRevealEffect } from "../UI/ScrollTranslateRevealEffect";
import { ScrollScaleRevealEffect } from "../UI/ScrollScaleRevealEffect";

export function AboutMe() {
  return (
    <section id="about-me-section" className="flex flex-col max-w-5xl items-center gap-4 my-16 sm:my-24 px-8 md:px-4">
      <ScrollScaleRevealEffect>
        <TitleSection>
          <CodeIcon className="size-10 -rotate-18" />
          Sobre mi
        </TitleSection>
      </ScrollScaleRevealEffect>
      <div className="flex flex-col items-center md:flex-row gap-16 md:items-start justify-between max-w-5xl">
        <ScrollTranslateRevealEffect side="left" delay={0.175}>
          <div className="text-left text-sm sm:text-base flex flex-col items-start justify-between gap-4">
            <p className="text-zinc-800 dark:text-zinc-100">
              Desarrollador Full-Stack con más de 2 años de experiencia construyendo aplicaciones web modernas,
              utilizando
              <span className="text-blue-500"> React, Next.js y TypeScript</span> en el Front-End, e integrando
              soluciones backend con Node.js y Supabase como Backend as a Service.
            </p>
            <p>
              Enfocado en desarrollar aplicaciones eficientes, escalables y centradas en el usuario, aplicando buenas
              prácticas, optimización de rendimiento y consumo de APIs. Tengo experiencia en manejo de estado global,
              arquitectura frontend y colaboración en equipos de desarrollo, orientado a mejorar continuamente la
              calidad del código y la experiencia del usuario.
            </p>
          </div>
        </ScrollTranslateRevealEffect>
        <ScrollTranslateRevealEffect side="right" delay={0.175}>
          <div>
            <Image
              loading="lazy"
              src="/aboutme.webp"
              alt="Steven"
              width={1000}
              height={1000}
              className="min-w-75 w-75 mx-auto sm:w-125 md:w-250 lg:w-325"
            />
          </div>
        </ScrollTranslateRevealEffect>
      </div>
    </section>
  );
}
