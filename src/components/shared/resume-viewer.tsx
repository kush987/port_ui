"use client";

import { DownloadIcon, FileTextIcon } from "lucide-react";

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
import { withBasePath } from "@/lib/paths";

interface ResumeViewerProps {
  resumeUrl: string;
}

export function ResumeViewer({ resumeUrl }: ResumeViewerProps) {
  const resolvedResumeUrl = withBasePath(resumeUrl);
  const downloadFileName = resumeUrl.split("/").pop() ?? "resume.pdf";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="ghost">
          <FileTextIcon data-icon="inline-start" />
          Resume
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex max-h-[90vh] w-full flex-col gap-0 overflow-hidden p-0 sm:max-w-4xl"
        showCloseButton
      >
        <DialogHeader className="border-b border-border/80 px-4 py-3 pr-12">
          <DialogTitle>Resume</DialogTitle>
          <DialogDescription>
            Preview below, or download a copy for offline use.
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 bg-muted/30 p-3 sm:p-4">
          <iframe
            src={resolvedResumeUrl}
            title="Resume"
            className="h-[70vh] w-full rounded-md border border-border/80 bg-background"
          />
        </div>

        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button asChild>
            <a href={resolvedResumeUrl} download={downloadFileName}>
              <DownloadIcon data-icon="inline-start" />
              Download resume
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
