import Link from "next/link";
import { CompanyCard } from "@/components/cards/Cards";
import { companies } from "@/data/mockData";

const filters = ["전체", "병원/의료기관", "제약회사", "바이오기업", "반도체 제조", "반도체 설계", "반도체 장비", "반도체 소재", "IT/AI", "배터리/미래차", "공공기관/연구소"];

export default function CompaniesPage({ searchParams }: { searchParams?: { industry?: string } }) {
  const selected = searchParams?.industry;
  const filtered = selected && selected !== "전체" ? companies.filter((company) => company.industry === selected) : companies;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">기업맵</h1>
      <p className="mt-3 text-slate-600">기업을 산업, 관련 학과, 관련 직무, 채용 키워드, 근무강도 참고, 리스크로 연결합니다.</p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => <Link key={filter} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-navy" href={filter === "전체" ? "/companies" : `/companies?industry=${encodeURIComponent(filter)}`}>{filter}</Link>)}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((company) => <CompanyCard key={company.id} company={company} />)}
      </div>
    </main>
  );
}
