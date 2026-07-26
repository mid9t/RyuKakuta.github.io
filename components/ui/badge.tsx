export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center justify-center rounded-md border-0 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent transition-colors hover:bg-accent/20">
      {children}
    </span>
  );
}
