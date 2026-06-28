import { scorePercent } from "@/lib/utils";

export function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-semibold text-navy">{score}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-slateblue" style={{ width: `${score > 5 ? score : scorePercent(score)}%` }} />
      </div>
    </div>
  );
}
