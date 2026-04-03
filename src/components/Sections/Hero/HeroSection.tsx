"use client";
import { LogoLinkedin, LogoGithub, ArrowDownToLine } from "@gravity-ui/icons";
import { ScrollScaleRevealEffect } from "../../UI/ScrollScaleRevealEffect";
import Image from "next/image";
import { LinksComponent } from "../../UI/LinksComponent";

export function HeroSection() {
  return (
    <section className="flex relative h-screen py-16 px-4 md:px-0 md:py-24 lg:py-32 xl:py-40">
      <ScrollScaleRevealEffect>
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <Image
            priority
            src="/steven.webp"
            alt="Steven"
            width={300}
            height={300}
            className="rounded-full dark:bg-zinc-900 bg-zinc-200 w-48 h-48"
          />
          <h1 id="hero-title" className="text-4xl font-bold text-center text-zinc-800 dark:text-zinc-100 md:text-5xl">
            Hola, soy <span className="text-blue-500">Steven Gonzalez</span>
          </h1>
          <p id="hero-desc" className="text-center font-medium text-zinc-600 dark:text-zinc-400 md:text-lg lg:text-xl">
            Desarrollador Web FullStack con +2 años de experiencia.
          </p>
          <div id="hero-links" className="flex text-sm md:text-base items-center justify-center md:flex-row gap-8">
            <LinksComponent link="https://github.com/steven-dev1">
              <LogoGithub className="h-6 w-6" />
              GitHub
            </LinksComponent>
            <a className="flex items-center text-sm font-medium gap-2 px-2 py-2.5 rounded-lg transition-colors bg-zinc-200 hover:bg-blue-100 dark:bg-zinc-900 dark:hover:bg-blue-950/20 hover:text-blue-500" download href="/Hoja de vida Steven Gonzalez.pdf">
              <ArrowDownToLine className="h-5 w-5" />
              Descargar CV
            </a>
            <LinksComponent link="https://www.linkedin.com/in/st3ven10/">
              <LogoLinkedin className="h-6 w-6" />
              LinkedIn
            </LinksComponent>
          </div>
        </div>
      </ScrollScaleRevealEffect>
    </section>
  );
}
