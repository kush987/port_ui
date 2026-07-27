import { Section } from "@/components/shared/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavSectionId, type Profile } from "@/content/types";

interface AboutSectionProps {
  profile: Profile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <Section
      id={NavSectionId.About}
      title="About"
      description={profile.bio}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.focusAreas.map((area) => (
          <Card key={area.title} className="border-border/80 bg-card/40">
            <CardHeader>
              <CardTitle className="font-mono text-base">{area.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {area.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
