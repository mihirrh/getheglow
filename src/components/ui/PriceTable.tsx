import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceTableProps {
  label: string;
  items: readonly { name: string; price: string }[];
  note?: string;
  className?: string;
}

export function PriceTable({ label, items, note, className }: PriceTableProps) {
  return (
    <div className={cn("card-luxury border border-border/50 overflow-hidden", className)}>
      <div className="gradient-primary px-6 py-4">
        <h3 className="font-display font-bold text-white text-lg">{label}</h3>
      </div>
      <div className="divide-y divide-border/40">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-6 py-3 hover:bg-soft-pink/20 transition-colors"
          >
            <span className="text-sm text-dark">{item.name}</span>
            <span className="font-display font-semibold text-primary text-sm whitespace-nowrap ml-4">
              {item.price}
            </span>
          </div>
        ))}
      </div>
      {note && (
        <div className="flex items-start gap-2.5 px-5 py-3.5 bg-soft-pink/30 border-t border-border/40">
          <Info size={13} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-[12px] text-dark/70 leading-relaxed">{note}</p>
        </div>
      )}
    </div>
  );
}
