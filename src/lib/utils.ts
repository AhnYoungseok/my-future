import type { RiskLevel, ScoreLevel } from "@/types/career";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function riskTone(level: RiskLevel) {
  if (level === "매우 높음") return "border-red-200 bg-red-50 text-red-800";
  if (level === "높음") return "border-orange-200 bg-orange-50 text-orange-800";
  if (level === "보통") return "border-amber-200 bg-amber-50 text-amber-800";
  return "border-emerald-200 bg-emerald-50 text-emerald-800";
}

export function scorePercent(score: ScoreLevel | number) {
  return Math.max(0, Math.min(100, Math.round((Number(score) / 5) * 100)));
}

export function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}
