import { companies, jobs, majors, universities, universityMajors } from "@/data/mockData";

export default function AdminPreviewPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">관리자 미리보기</h1>
      <p className="mt-3 text-slate-600">실제 저장은 하지 않지만 향후 관리자 기능 확장을 위한 데이터 구조와 입력 UI입니다.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {[["학과", majors.length], ["직업", jobs.length], ["기업", companies.length], ["대학", universities.length], ["대학-학과", universityMajors.length]].map(([label, count]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-bold text-slate-500">{label}</div>
            <div className="mt-2 text-3xl font-black text-navy">{count}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <MockForm title="학과 추가 폼" fields={["학과명", "카테고리", "추천 과목", "리스크 메모"]} />
        <MockForm title="직업 추가 폼" fields={["직업명", "관련 학과", "연봉 범위", "생활수준 메모"]} />
        <MockForm title="기업 추가 폼" fields={["기업명", "산업", "채용 URL", "OpenDART 메모"]} />
      </div>
    </main>
  );
}

function MockForm({ title, fields }: { title: string; fields: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-black text-navy">{title}</h2>
      <div className="mt-4 space-y-3">
        {fields.map((field) => <input key={field} className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" placeholder={field} />)}
        <textarea className="min-h-24 w-full rounded-md border border-slate-200 px-3 py-2 text-sm" placeholder="데이터 출처 메모" />
        <button className="rounded-md bg-slate-200 px-4 py-2 text-sm font-bold text-slate-600" type="button">미리보기 전용</button>
      </div>
    </section>
  );
}
