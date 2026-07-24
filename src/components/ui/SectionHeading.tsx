import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.3em] font-sans font-medium mb-3",
            light ? "text-soft-pink" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-bold text-4xl sm:text-5xl mb-4",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl mx-auto text-base leading-relaxed",
            align !== "center" && "mx-0",
            light ? "text-white/65" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
