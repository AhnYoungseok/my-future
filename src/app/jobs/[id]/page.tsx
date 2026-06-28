import { notFound } from "next/navigation";
import { companies, jobs } from "@/data/mockData";
import { ExternalLinksPanel, ProsConsPanel, RiskAnalysis, SalaryLifestyleCard, SummaryHero } from "@/components/detail/DetailBlocks";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id);
  if (!job) notFound();
  const relatedCompanies = companies.filter((company) => job.relatedCompanies.includes(company.name) || company.relatedJobs.includes(job.name));
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <SummaryHero item={job} type="직업" />
      <DisclaimerBox />
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">직업 개요와 진입 경로</h2>
        <p className="mt-3 leading-7 text-slate-700">{job.description}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Info title="하루 업무 예시" items={job.dailyWork} />
          <Info title="필요 성향" items={job.requiredAptitudes} />
          <Info title="고등학생 준비 전략" items={job.highSchoolPreparation.subjects.concat(job.highSchoolPreparation.researchTopics)} />
        </div>
      </section>
      <SalaryLifestyleCard jobName={job.name} salaryProfile={job.salaryProfile} lifestyleProfile={job.lifestyleProfile} />
      <ProsConsPanel pros={job.pros} cons={job.cons} />
      <RiskAnalysis title="직업 리스크" riskItems={job.risks} />
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">관련 기업/기관</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">{relatedCompanies.map((company) => <Info key={company.id} title={company.name} items={[company.industry, company.salaryNote, company.lifestyleNote]} />)}</div>
      </section>
      <ExternalLinksPanel links={{ "직업정보 검색": job.externalLinks.careerInfo, "채용 검색": job.externalLinks.jobSearch, "유튜브 직무 인터뷰": job.externalLinks.youtubeSearch }} />
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
