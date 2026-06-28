import type { ComparisonPreset } from "@/types/career";

export function ComparisonTable({ preset }: { preset: ComparisonPreset }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">{preset.title}</h2>
      <div className="scrollbar-soft mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b border-slate-200 bg-slate-50 p-3 text-left">비교 항목</th>
              {preset.items.map((item) => <th key={item} className="border-b border-slate-200 bg-slate-50 p-3 text-left">{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {preset.columns.map((row) => (
              <tr key={row.label}>
                <td className="border-b border-slate-100 p-3 font-bold text-navy">{row.label}</td>
                {preset.items.map((item, index) => <td key={item} className="border-b border-slate-100 p-3 leading-6 text-slate-600">{row.values[index] || "추가 확인 필요"}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 rounded-md bg-blue-50 p-4 text-sm leading-6 text-blue-950">{preset.finalComment}</p>
    </section>
  );
}
