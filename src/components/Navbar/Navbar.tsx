"use client";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "../UI/ThemeToggle";
import { LanguageToggle } from "../UI/LanguageToggle";
import { Envelope, FolderOpen, House } from "@gravity-ui/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="fixed z-50 inset-x-0 w-full mx-auto bg-zinc-400/20 dark:bg-zinc-900/20 backdrop-blur-lg">
      <div className="flex w-full items-center justify-between max-w-5xl mx-auto px-4">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center justify-center gap-8 p-4">
          <li>
            <Link className="hover:text-blue-500 flex items-center gap-2 transition-colors" href="/">
              <House /> Inicio
            </Link>
          </li>
          <li>
            <a
              className="hover:text-blue-500 flex items-center gap-2 transition-colors"
              href="#projects-section"
            >
              <FolderOpen /> Proyectos
            </a>
          </li>
          <li>
            <Link className="hover:text-blue-500 flex items-center gap-2 transition-colors" href="#contact">
              <Envelope /> Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile burger */}
        <button className="md:hidden p-4 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-1" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-1" : ""}`}
            />
          </div>
        </button>

        <div className="flex items-center gap-4 py-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden ${open ? "h-auto translate-0" : "h-0 -translate-x-100"} origin-center flex transition-all flex-col`}
      >
        <li>
          <Link
            className="hover:text-blue-500 flex items-center gap-2 transition-colors px-6 py-4"
            href="/"
            onClick={() => setOpen(false)}
          >
            <House /> Inicio
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-500 flex items-center gap-2 transition-colors px-6 py-4"
            href="#projects"
            onClick={() => setOpen(false)}
          >
            <FolderOpen /> Proyectos
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-500 flex items-center gap-2 transition-colors px-6 py-4"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            <Envelope /> Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
