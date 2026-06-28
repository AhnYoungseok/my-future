import type { RiskLevel } from "@/types/career";

const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));
const toPercent = (value: number) => clamp(value > 5 ? value : (value / 5) * 100);

export function MetricBarChart({ title, data }: { title: string; data: Array<{ label: string; value: number; note?: string }> }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <div className="mt-4 space-y-3">
        {data.map((item) => {
          const percent = toPercent(item.value);
          return (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between gap-3 text-xs">
                <span className="font-bold text-slate-700">{item.label}</span>
                <span className="font-black text-navy">{item.value}</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-3 rounded-full bg-gradient-to-r from-slateblue to-teal-500" style={{ width: `${percent}%` }} />
              </div>
              {item.note ? <p className="mt-1 text-xs leading-5 text-slate-500">{item.note}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function RadarChart({ title, data }: { title: string; data: Array<{ label: string; value: number }> }) {
  const size = 220;
  const center = size / 2;
  const radius = 78;
  const points = data.map((item, index) => {
    const angle = (Math.PI * 2 * index) / data.length - Math.PI / 2;
    const valueRadius = radius * (toPercent(item.value) / 100);
    return {
      ...item,
      x: center + Math.cos(angle) * valueRadius,
      y: center + Math.sin(angle) * valueRadius,
      labelX: center + Math.cos(angle) * (radius + 24),
      labelY: center + Math.sin(angle) * (radius + 24),
      axisX: center + Math.cos(angle) * radius,
      axisY: center + Math.sin(angle) * radius
    };
  });
  const polygon = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <div className="mt-3 flex justify-center">
        <svg width={size} height={size} role="img" aria-label={title}>
          {[0.25, 0.5, 0.75, 1].map((level) => (
            <circle key={level} cx={center} cy={center} r={radius * level} fill="none" stroke="#e2e8f0" strokeWidth="1" />
          ))}
          {points.map((point) => (
            <line key={point.label} x1={center} y1={center} x2={point.axisX} y2={point.axisY} stroke="#e2e8f0" strokeWidth="1" />
          ))}
          <polygon points={polygon} fill="rgba(60, 94, 180, 0.22)" stroke="#3c5eb4" strokeWidth="2" />
          {points.map((point) => (
            <g key={point.label}>
              <circle cx={point.x} cy={point.y} r="3" fill="#1f3f8b" />
              <text x={point.labelX} y={point.labelY} textAnchor="middle" dominantBaseline="middle" fontSize="10" fontWeight="700" fill="#475569">
                {point.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export function DonutMetric({ label, value, caption }: { label: string; value: number; caption?: string }) {
  const percent = toPercent(value);
  const background = `conic-gradient(#1f3f8b ${percent * 3.6}deg, #e2e8f0 0deg)`;
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 text-center">
      <div className="mx-auto grid h-28 w-28 place-items-center rounded-full" style={{ background }}>
        <div className="grid h-20 w-20 place-items-center rounded-full bg-white">
          <span className="text-2xl font-black text-navy">{value}</span>
        </div>
      </div>
      <h3 className="mt-3 font-black text-navy">{label}</h3>
      {caption ? <p className="mt-1 text-xs leading-5 text-slate-500">{caption}</p> : null}
    </div>
  );
}

export function RiskMatrix({ title, risks }: { title: string; risks: Array<{ name: string; level: RiskLevel }> }) {
  const x = { 낮음: 18, 보통: 40, 높음: 68, "매우 높음": 86 } satisfies Record<RiskLevel, number>;
  const y = { 낮음: 78, 보통: 58, 높음: 34, "매우 높음": 18 } satisfies Record<RiskLevel, number>;

  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <div className="relative mt-4 h-64 rounded-md bg-[linear-gradient(90deg,#f8fafc_49%,#e2e8f0_50%,#f8fafc_51%),linear-gradient(0deg,#f8fafc_49%,#e2e8f0_50%,#f8fafc_51%)]">
        <span className="absolute left-3 top-3 text-xs font-bold text-slate-500">높은 영향</span>
        <span className="absolute bottom-3 right-3 text-xs font-bold text-slate-500">높은 가능성</span>
        {risks.slice(0, 8).map((risk, index) => (
          <div
            key={risk.name}
            className="absolute max-w-28 rounded-md border border-white bg-amber-100 px-2 py-1 text-[11px] font-bold leading-4 text-amber-950 shadow-sm"
            style={{ left: `${Math.min(88, x[risk.level] + (index % 2) * 4)}%`, top: `${Math.min(84, y[risk.level] + Math.floor(index / 2) * 6)}%`, transform: "translate(-50%, -50%)" }}
          >
            {risk.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoadmapGraph({ title, steps }: { title: string; steps: Array<{ label: string; items: string[] }> }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.label} className="relative rounded-md bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-sm font-black text-white">{index + 1}</span>
              <span className="font-black text-navy">{step.label}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-teal-500" style={{ width: `${33 + index * 33}%` }} />
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-600">{step.items.slice(0, 2).join(" · ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComparisonSignalGraph({ items }: { items: string[] }) {
  const metrics = ["학업", "직무", "생활", "시장", "리스크"];
  return (
    <div className="mt-5 grid gap-3 md:grid-cols-3">
      {items.map((item, itemIndex) => (
        <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-black text-navy">{item}</h3>
          <div className="mt-4 space-y-2">
            {metrics.map((metric, metricIndex) => {
              const value = 48 + ((item.length * 9 + itemIndex * 13 + metricIndex * 11) % 42);
              return (
                <div key={metric} className="grid grid-cols-[3.5rem_1fr_2rem] items-center gap-2 text-xs">
                  <span className="font-bold text-slate-600">{metric}</span>
                  <div className="h-2 rounded-full bg-white">
                    <div className="h-2 rounded-full bg-slateblue" style={{ width: `${value}%` }} />
                  </div>
                  <span className="text-right font-black text-navy">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
