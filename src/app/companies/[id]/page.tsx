import { notFound } from "next/navigation";
import { companies } from "@/data/mockData";
import { ExternalLinksPanel, ProsConsPanel, RiskAnalysis, SummaryHero } from "@/components/detail/DetailBlocks";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { MetricBarChart, RadarChart } from "@/components/ui/Charts";
import { createYoutubeSearchUrl } from "@/lib/links";

export function generateStaticParams() {
  return companies.map((company) => ({ id: company.id }));
}

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const company = companies.find((item) => item.id === id);
  if (!company) notFound();
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <SummaryHero item={company} type="기업" />
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">기업 개요</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Info title="관련 학과" items={company.relatedMajors} />
          <Info title="관련 직무" items={company.relatedJobs} />
          <Info title="채용 키워드" items={company.jobKeywords} />
          <Info title="연봉·생활 참고" items={[company.salaryNote, company.lifestyleNote]} />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <ExternalLinkButton href={company.homepageUrl}>공식 홈페이지</ExternalLinkButton>
          <ExternalLinkButton href={company.recruitUrl}>채용 홈페이지</ExternalLinkButton>
          <ExternalLinkButton href={company.dartSearchUrl}>OpenDART 확인</ExternalLinkButton>
        </div>
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        <MetricBarChart
          title="채용 키워드 연결도"
          data={company.jobKeywords.slice(0, 6).map((keyword, index) => ({
            label: keyword,
            value: 92 - index * 8
          }))}
        />
        <RadarChart
          title="기업 선택 체크포인트"
          data={[
            { label: "전공", value: company.relatedMajors.length >= 2 ? 5 : 3 },
            { label: "직무", value: company.relatedJobs.length >= 2 ? 5 : 3 },
            { label: "채용", value: company.recruitUrl ? 5 : 2 },
            { label: "공시", value: company.dartSearchUrl ? 5 : 2 },
            { label: "성장", value: company.category === "반도체" || company.category === "AI·소프트웨어" ? 5 : 4 },
            { label: "리스크", value: Math.max(2, 6 - company.risks.length) }
          ]}
        />
      </section>
      <ProsConsPanel pros={company.pros} cons={company.cons} />
      <RiskAnalysis title="기업·직무 리스크" riskItems={company.risks} />
      <ExternalLinksPanel links={{ "관련 유튜브 검색": createYoutubeSearchUrl(`${company.name} 채용 직무 인터뷰`), "채용 홈페이지": company.recruitUrl, "공식 홈페이지": company.homepageUrl }} />
    </main>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md bg-slate-50 p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
    </div>
  );
}
