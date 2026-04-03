"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function ThemeToggle({ iconOnly = true }: { iconOnly?: boolean }) {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) return <button type="button" className="cursor-pointer w-full text-center flex gap-2 items-center" />;

  return (
    <button
      suppressHydrationWarning
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      type="button"
      className="cursor-pointer group hover:bg-zinc-300 p-2 rounded-lg dark:hover:bg-zinc-900 w-full text-center flex gap-2 items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          {iconOnly ? (
            <Sun className="h-4 w-4 group-hover:rotate-16 transition all" />
          ) : (
            <>
              <Sun className="h-4 w-4 group-hover:rotate-16 transition all" /> Modo claro
            </>
          )}
        </>
      ) : (
        <>
          {iconOnly ? (
            <Moon className="h-4 w-4 group-hover:rotate-16 transition all" />
          ) : (
            <>
              <Moon className="h-4 w-4 group-hover:rotate-16 transition all" /> Modo oscuro
            </>
          )}
        </>
      )}
    </button>
  );
}
