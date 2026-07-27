import { ArrowDownIcon } from "lucide-react";

import { ContactCardViewer } from "@/components/shared/contact-card-viewer";
import { ResumeViewer } from "@/components/shared/resume-viewer";
import { Button } from "@/components/ui/button";
import { NavSectionId, type Profile } from "@/content/types";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.35_0.04_160_/_0.35),_transparent_55%),linear-gradient(to_bottom,_transparent,_var(--background))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-5xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="mb-4 font-mono text-xs tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
          {profile.role}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mt-3 font-mono text-sm text-muted-foreground">
          {profile.location}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <a href={`#${NavSectionId.Systems}`}>
              View systems
              <ArrowDownIcon data-icon="inline-end" />
            </a>
          </Button>
          <ContactCardViewer profile={profile} ctaLabel="Email me" />
          <ResumeViewer resumeUrl={profile.resumeUrl} />
        </div>
      </div>
    </section>
  );
}
