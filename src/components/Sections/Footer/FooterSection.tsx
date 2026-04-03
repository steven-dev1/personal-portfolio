import { ArrowDownToLine, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { LinksComponent } from "../../UI/LinksComponent";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/10 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Steven Gonzalez</p>
        <div className="flex items-center gap-4">
          <LinksComponent link="https://github.com/steven-dev1">
            <LogoGithub className="h-5 w-5" />
          </LinksComponent>
          <a
            className="flex items-center text-sm font-medium gap-2 px-2 py-2.5 rounded-lg transition-colors bg-zinc-200 hover:bg-blue-100 dark:bg-zinc-900 dark:hover:bg-blue-950/20 hover:text-blue-500"
            download
            href="/Hoja de vida Steven Gonzalez.pdf"
          >
            <ArrowDownToLine className="h-5 w-5" />
            Descargar CV
          </a>
          <LinksComponent link="https://www.linkedin.com/in/st3ven10/">
            <LogoLinkedin className="h-5 w-5" />
          </LinksComponent>
        </div>
      </div>
    </footer>
  );
}
