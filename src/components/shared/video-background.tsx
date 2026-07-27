"use client";

import { useSyncExternalStore } from "react";

import { withBasePath } from "@/lib/paths";

const VIDEO_SRC = withBasePath("/video/Make_a_techincal_intro_video_o.mp4");

function subscribeReducedMotion(onStoreChange: () => void): () => void {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

export function VideoBackground() {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {!reduceMotion ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.35_0.05_160_/_0.45),_transparent_55%),var(--background)]" />
      )}

      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_88%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/25 to-background/90" />
    </div>
  );
}
