import { ExternalLinkIcon } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavSectionId, type SystemProject } from "@/content/types";

interface SystemsSectionProps {
  systems: SystemProject[];
}

export function SystemsSection({ systems }: SystemsSectionProps) {
  return (
    <Section
      id={NavSectionId.Systems}
      title="Systems"
      description="Selected backend work — platforms, pipelines, and services built for scale and operability."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {systems.map((system) => (
          <Card
            key={system.id}
            className="flex flex-col border-border/80 bg-card/40"
          >
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-[0.65rem] uppercase">
                  {system.scale}
                </Badge>
              </div>
              <CardTitle className="text-lg">{system.name}</CardTitle>
              <CardDescription className="leading-relaxed">
                {system.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <div>
                <p className="mb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Problem
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {system.problem}
                </p>
              </div>
              <div>
                <p className="mb-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Outcome
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {system.outcome}
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-2 rounded-lg border border-border/60 bg-muted/30 p-3">
                {system.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-mono text-[0.65rem] tracking-wide text-muted-foreground uppercase">
                      {metric.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-foreground">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2">
                {system.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {system.links.length > 0 ? (
              <CardFooter className="flex flex-wrap gap-2 border-t border-border/60 pt-4">
                {system.links.map((link) => (
                  <Button key={link.href + link.label} variant="outline" size="sm" asChild>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ExternalLinkIcon data-icon="inline-end" />
                    </a>
                  </Button>
                ))}
              </CardFooter>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
