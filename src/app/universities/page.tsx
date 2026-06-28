import { universities, universityMajors } from "@/data/mockData";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";

export default function UniversitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">대학맵</h1>
      <p className="mt-3 text-slate-600">대학과 모집단위는 매년 바뀔 수 있으므로 공식 입학처와 대학알리미를 반드시 확인하세요.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((university) => {
          const depts = universityMajors.filter((item) => item.universityId === university.id).slice(0, 3);
          return (
            <article key={university.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black text-navy">{university.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{university.region} · {university.type}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {depts.map((dept) => <span key={dept.id} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{dept.departmentName}</span>)}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <ExternalLinkButton href={university.homepageUrl}>홈페이지</ExternalLinkButton>
                <ExternalLinkButton href={university.admissionUrl}>입학처</ExternalLinkButton>
                <ExternalLinkButton href={university.academyInfoUrl}>대학알리미</ExternalLinkButton>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
