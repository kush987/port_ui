"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import type { Profile } from "@/content/types";
import { getInitials, resolveAvatarSrc } from "@/lib/avatar";

interface AvatarViewerProps {
  profile: Profile;
}

export function AvatarViewer({ profile }: AvatarViewerProps) {
  const avatarSrc = resolveAvatarSrc(profile.avatarUrl);
  const initials = getInitials(profile.name);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`View ${profile.name} photo`}
          className="rounded-full ring-offset-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar className="size-8">
            <AvatarImage src={avatarSrc} alt={profile.name} />
            <AvatarFallback className="font-mono text-xs">{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DialogTrigger>
      <DialogContent
        className="flex w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-md"
        showCloseButton
      >
        <DialogHeader className="border-b border-border/80 px-4 py-3 pr-12">
          <DialogTitle>{profile.name}</DialogTitle>
          <DialogDescription>Profile photo</DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center bg-muted/30 p-4 sm:p-5">
          {/* eslint-disable-next-line @next/next/no-img-element -- local/public avatar path */}
          <img
            src={avatarSrc}
            alt={profile.name}
            className="max-h-[70vh] w-full rounded-xl border border-border/80 object-contain bg-background"
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
