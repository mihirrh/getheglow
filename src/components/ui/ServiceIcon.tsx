/**
 * ServiceIcon — renders a branded Lucide icon for each service slug.
 * Use instead of emoji wherever a service icon is displayed.
 *
 * Usage:
 *   <ServiceIcon slug="hair" size={24} className="text-primary" />
 */

import {
  Scissors,
  Sparkles,
  Flower2,
  Leaf,
  Waves,
  Feather,
  Eye,
  Star,
  type LucideProps,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  hair:      Scissors,
  nails:     Sparkles,
  facials:   Flower2,
  massage:   Leaf,
  waxing:    Waves,
  threading: Feather,
  eyebrows:  Eye,
  beauty:    Star,
};

interface ServiceIconProps {
  slug: string;
  size?: number;
  className?: string;
}

export function ServiceIcon({ slug, size = 22, className }: ServiceIconProps) {
  const Icon = ICON_MAP[slug] ?? Sparkles;
  return <Icon size={size} className={cn("flex-shrink-0", className)} />;
}
