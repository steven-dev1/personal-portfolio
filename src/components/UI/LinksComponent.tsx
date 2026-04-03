import Link from "next/link";

export function LinksComponent({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex items-center text-sm font-medium gap-2 p-2 rounded-lg transition-colors bg-zinc-200 hover:bg-blue-100 dark:bg-zinc-900 dark:hover:bg-blue-950/20 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}
