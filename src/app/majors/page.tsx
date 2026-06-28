import Link from "next/link";
import { MajorCard } from "@/components/cards/Cards";
import { categories, majors } from "@/data/mockData";

export default function MajorsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const selected = searchParams?.category;
  const filtered = selected ? majors.filter((major) => major.category === selected) : majors;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">학과맵</h1>
      <p className="mt-3 text-slate-600">학과를 직업, 기업, 연봉 레벨, 생활강도, 리스크와 연결해서 비교합니다.</p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        <Link className="whitespace-nowrap rounded-full bg-navy px-4 py-2 text-sm font-bold text-white" href="/majors">전체</Link>
        {categories.map((category) => <Link key={category} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-navy" href={`/majors?category=${encodeURIComponent(category)}`}>{category}</Link>)}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((major) => <MajorCard key={major.id} major={major} />)}
      </div>
    </main>
  );
}
