import { Globe } from "@gravity-ui/icons";

export function LanguageToggle() {
  return (
    <button className="flex items-center cursor-pointer px-2 py-1.5 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-900 gap-1">
      <Globe />
      <span>EN</span>
    </button>
  );
}