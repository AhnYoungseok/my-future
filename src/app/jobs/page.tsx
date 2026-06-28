import Link from "next/link";
import { JobCard } from "@/components/cards/Cards";
import { jobs } from "@/data/mockData";
import { careerFields, jobRoles } from "@/data/seed/jobRoles.core";

const filters = ["전체", "메디컬", "보건의료", "반도체", "AI·소프트웨어", "바이오·제약", "기계·로봇", "전기·에너지", "경영·경제", "교육·심리", "법·공공", "디자인·콘텐츠", "환경·농생명"];

export default function JobsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const selected = searchParams?.category;
  const filtered = selected && selected !== "전체" ? jobs.filter((job) => job.category === selected || job.summary.includes(selected)) : jobs;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">직업맵</h1>
      <p className="mt-3 max-w-3xl text-slate-600">직업을 관련 학과, 기업, 연봉 레벨, 워라밸, 성장성, 리스크로 비교합니다. 직업명만 보지 않고 CareerField → Occupation → JobRole 구조로 실제 직무까지 나눠 봅니다.</p>
      <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-black text-navy">직무 그래프</h2>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-slateblue">{careerFields.length}개 분야 · {jobRoles.length}개 세부 직무</span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {careerFields.map((field) => (
            <div key={field.id} className="rounded-md bg-slate-50 p-3">
              <p className="font-black text-navy">{field.name}</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">{field.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {jobRoles.slice(0, 18).map((role) => <Link key={role.id} className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-navy hover:border-slateblue" href={`/job-roles/${role.id}`}>{role.name}</Link>)}
        </div>
      </section>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => <Link key={filter} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-navy" href={filter === "전체" ? "/jobs" : `/jobs?category=${encodeURIComponent(filter)}`}>{filter}</Link>)}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </main>
  );
}
