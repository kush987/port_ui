import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t border-border/80 py-16 sm:py-20",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <header className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {id}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
