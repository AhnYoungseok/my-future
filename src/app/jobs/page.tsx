import Link from "next/link";
import { JobCard } from "@/components/cards/Cards";
import { jobs } from "@/data/mockData";

const filters = ["전체", "메디컬", "보건의료", "반도체", "AI·소프트웨어", "바이오·제약", "연구직", "대기업 직무", "공공/정책"];

export default function JobsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const selected = searchParams?.category;
  const filtered = selected && selected !== "전체" ? jobs.filter((job) => job.category === selected || job.summary.includes(selected)) : jobs;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">직업맵</h1>
      <p className="mt-3 text-slate-600">직업을 관련 학과, 기업, 연봉 레벨, 워라밸, 성장성, 리스크로 비교합니다.</p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => <Link key={filter} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-navy" href={filter === "전체" ? "/jobs" : `/jobs?category=${encodeURIComponent(filter)}`}>{filter}</Link>)}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </main>
  );
}
