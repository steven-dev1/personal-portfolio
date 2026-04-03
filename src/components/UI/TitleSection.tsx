export function TitleSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center gap-4 mb-4 mt-8 px-4">
      <h1 className="text-3xl sm:text-4xl flex items-center gap-1 font-bold text-center mb-4 text-zinc-800 dark:text-zinc-100">
        {children}
      </h1>
    </section>
  );
}