import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavSectionId, type SkillGroup } from "@/content/types";

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const defaultTab = skills[0]?.category;

  return (
    <Section
      id={NavSectionId.Skills}
      title="Skills"
      description="Tools and practices I use to ship and operate backend systems."
    >
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="mb-4 flex h-auto w-full flex-wrap justify-start gap-1">
          {skills.map((group) => (
            <TabsTrigger key={group.category} value={group.category}>
              {group.category}
            </TabsTrigger>
          ))}
        </TabsList>
        {skills.map((group) => (
          <TabsContent key={group.category} value={group.category}>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-normal"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
