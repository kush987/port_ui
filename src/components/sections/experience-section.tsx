import { Section } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { NavSectionId, type ExperienceItem } from "@/content/types";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section
      id={NavSectionId.Experience}
      title="Experience"
      description="Roles where I owned services, data paths, and the operational story around them."
    >
      <Accordion
        type="single"
        collapsible
        defaultValue={experience[0]?.id}
        className="w-full"
      >
        {experience.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-1 flex-col items-start gap-1 pr-4 text-left sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-base font-medium text-foreground">
                    {item.role}
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    {item.company} · {item.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                  {item.startDate} — {item.endDate}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
