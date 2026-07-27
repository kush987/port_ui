import { portfolio } from "@/content/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {year} {portfolio.profile.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js · Edit{" "}
          <code className="text-foreground/80">src/content/portfolio.ts</code>
        </p>
      </div>
    </footer>
  );
}
