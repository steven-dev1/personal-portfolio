import { LogoGithub, LogoLinkedin } from "@gravity-ui/icons"
import { LinksComponent } from "../../UI/LinksComponent"

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/10 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Steven Gonzalez
        </p>
        <div className="flex items-center gap-4">
          
         <LinksComponent link="https://github.com/steven-dev1">
            <LogoGithub className="h-5 w-5" />
         </LinksComponent>
        <LinksComponent link="https://www.linkedin.com/in/st3ven10/">
            <LogoLinkedin className="h-5 w-5" />
        </LinksComponent>
        </div>
      </div>
    </footer>
  );
}