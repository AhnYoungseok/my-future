import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { comparisonPresets } from "@/data/mockData";

export default function ComparePage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <h1 className="text-4xl font-black text-navy">비교실</h1>
      <p className="max-w-3xl text-slate-600">2개 또는 3개 항목을 나란히 보며 학업 난도, 공부 기간, 연봉 구조, 생활수준, 리스크, 10년 전망을 비교합니다.</p>
      {comparisonPresets.map((preset) => <ComparisonTable key={preset.id} preset={preset} />)}
    </main>
  );
}
