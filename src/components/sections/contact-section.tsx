import { ContactCardViewer } from "@/components/shared/contact-card-viewer";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import {
  NavSectionId,
  type ContactContent,
  type Profile,
} from "@/content/types";

interface ContactSectionProps {
  profile: Profile;
  contact: ContactContent;
}

export function ContactSection({ profile, contact }: ContactSectionProps) {
  return (
    <Section
      id={NavSectionId.Contact}
      title={contact.heading}
      description={contact.description}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-muted-foreground">Primary</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-1 block text-lg text-foreground underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="mt-1 block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {profile.phone}
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <ContactCardViewer
            profile={profile}
            ctaLabel={contact.ctaLabel}
            triggerLabel="View contact card"
            triggerVariant="default"
          />
          {profile.socials
            .filter(
              (social) =>
                !social.href.startsWith("mailto:") &&
                !social.href.startsWith("tel:"),
            )
            .map((social) => (
              <Button key={social.platform} variant="outline" size="lg" asChild>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </Button>
            ))}
        </div>
      </div>
    </Section>
  );
}
