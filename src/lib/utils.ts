import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string): string {
  return price;
}

export function generateSeoTitle(page: string, suffix?: string): string {
  const base = suffix || "Get The Glow | Beauty Salon Leicester";
  return `${page} | ${base}`;
}
