import { notFound } from "next/navigation";
import Link from "next/link";
import { companies, jobs } from "@/data/mockData";
import { jobRoles } from "@/data/seed/jobRoles.core";
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
  const relatedRoles = jobRoles.filter((role) => role.category === job.category || role.relatedMajors.some((major) => job.relatedMajors.includes(major))).slice(0, 8);
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
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">관련 세부 직무</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {relatedRoles.map((role) => (
            <Link key={role.id} href={`/job-roles/${role.id}`} className="rounded-md border border-slate-200 p-4 hover:border-slateblue">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-black text-navy">{role.name}</h3>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-black text-amber-900">검증 필요</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{role.summary}</p>
            </Link>
          ))}
        </div>
      </section>
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
