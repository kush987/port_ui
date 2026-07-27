"use client";

import { IdCardIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { Profile } from "@/content/types";

interface ContactCardViewerProps {
  profile: Profile;
  ctaLabel: string;
  triggerLabel?: string;
  triggerVariant?: "default" | "outline" | "secondary" | "ghost";
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "?";
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function ContactCardViewer({
  profile,
  ctaLabel,
  triggerLabel = "Contact",
  triggerVariant = "outline",
}: ContactCardViewerProps) {
  const initials = getInitials(profile.name);
  const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, "")}`;
  const socialLinks = profile.socials.filter(
    (social) =>
      !social.href.startsWith("mailto:") && !social.href.startsWith("tel:"),
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant={triggerVariant}>
          <MailIcon data-icon="inline-start" />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-md"
        showCloseButton
      >
        <DialogHeader className="border-b border-border/80 px-4 py-3 pr-12">
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>
            Engineer ID card — reach out via email or socials.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-muted/30 p-4 sm:p-5">
          <article className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm ring-1 ring-foreground/5">
            <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-emerald-950/40 px-4 py-2.5 dark:bg-emerald-950/50">
              <div className="flex items-center gap-2">
                <IdCardIcon className="size-4 text-emerald-400" />
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-emerald-400 uppercase">
                  Engineer ID
                </p>
              </div>
              <Badge variant="outline" className="font-mono text-[0.65rem]">
                ACTIVE
              </Badge>
            </div>

            <div className="flex gap-4 p-4 sm:p-5">
              <Avatar
                size="lg"
                className="size-16 rounded-lg after:rounded-lg sm:size-20"
              >
                <AvatarFallback className="rounded-lg bg-emerald-950/60 font-mono text-lg text-emerald-300 sm:text-xl">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1 space-y-1.5">
                <h3 className="truncate text-lg font-semibold tracking-tight text-foreground">
                  {profile.name}
                </h3>
                <p className="font-mono text-xs tracking-wide text-emerald-600 uppercase dark:text-emerald-400">
                  {profile.role}
                </p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPinIcon className="size-3.5 shrink-0" />
                  <span className="truncate">{profile.location}</span>
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-3 p-4 sm:p-5">
              <div>
                <p className="mb-1 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-sm text-foreground underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              </div>

              <div>
                <p className="mb-1 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                  Phone
                </p>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 hover:underline"
                >
                  <PhoneIcon className="size-3.5 shrink-0 text-muted-foreground" />
                  {profile.phone}
                </a>
              </div>

              {socialLinks.length > 0 ? (
                <div>
                  <p className="mb-2 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                    Links
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.platform}
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noreferrer">
                          {social.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        </div>

        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button asChild>
            <a href={`mailto:${profile.email}`}>
              <MailIcon data-icon="inline-start" />
              {ctaLabel}
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
