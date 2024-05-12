import { cn } from "@/app/lib/utils";

/** This component covers its relative parent fully.
 * Need to set other elements to relative to avoid click blocking.
 * Need to add gradient in className
 */
export const GradientOverlay = ({
  className,
}: React.HTMLAttributes<HTMLDivElement> & {}) => (
  <div className={cn("absolute h-full w-full", className)} />
);
