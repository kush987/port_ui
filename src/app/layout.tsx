import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { VideoBackground } from "@/components/shared/video-background";
import { TooltipProvider } from "@/components/ui/tooltip";
import { portfolio } from "@/content/portfolio";

import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${portfolio.profile.name} · ${portfolio.profile.role}`,
  description: portfolio.profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plexSans.variable} ${plexMono.variable} h-full scroll-smooth bg-background antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col bg-transparent font-sans text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
        <VideoBackground />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
