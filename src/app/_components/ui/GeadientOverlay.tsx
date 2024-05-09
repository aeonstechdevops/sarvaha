import { cn } from "@/app/lib/utils";

/** This component covers its relative parent fully.
 * Need to set other elements to relative to avoid click blocking.
 */
export const GradientOverlay = ({
  className,
}: React.HTMLAttributes<HTMLDivElement> & {}) => (
  <div className={cn("absolute h-[calc(100%-4rem)] w-full", className)} />
);
