export function ReportSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-700">{children}</div>
    </section>
  );
}
