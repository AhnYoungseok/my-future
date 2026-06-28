import { notFound } from "next/navigation";
import { companies, jobs, majors, universityMajors } from "@/data/mockData";
import { AdmissionRequirementCard, ExternalLinksPanel, ProsConsPanel, RiskAnalysis, RoadmapTimeline, SalaryLifestyleCard, SummaryHero } from "@/components/detail/DetailBlocks";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";

export function generateStaticParams() {
  return majors.map((major) => ({ id: major.id }));
}

export default async function MajorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const major = majors.find((item) => item.id === id);
  if (!major) notFound();
  const relatedJobs = jobs.filter((job) => job.relatedMajors.includes(major.name));
  const relatedCompanies = companies.filter((company) => company.relatedMajors.includes(major.name));
  const relatedUniversities = universityMajors.filter((item) => item.majorId === major.id).slice(0, 8);

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <SummaryHero item={major} type="학과" />
      <DisclaimerBox />
      <AdmissionRequirementCard admissionProfile={major.admissionProfile} />
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">학과 개요</h2>
        <p className="mt-3 leading-7 text-slate-700">{major.description}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Info title="이런 학생에게 적합" items={major.suitableTraits.concat(major.requiredAptitudes)} />
          <Info title="주의해야 할 학생" items={major.unsuitableTraits.concat(major.difficultSubjects.map((s) => `${s} 과목 부담 점검`))} />
          <Info title="고등학교 추천 과목" items={major.highSchoolRecommendedSubjects.concat(["세특 탐구", "전공 독서"])} />
        </div>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">관련 대학</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {relatedUniversities.map((item) => (
            <article key={item.id} className="rounded-md border border-slate-200 p-4">
              <h3 className="font-black text-navy">{item.universityName} {item.departmentName}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.region} · {item.isContractMajor ? "계약학과 가능성 확인" : "일반 모집단위"} · {item.notes}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ExternalLinkButton href={item.departmentUrl}>학과/교육과정</ExternalLinkButton>
                <ExternalLinkButton href={item.admissionUrl}>입학처</ExternalLinkButton>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <Info title="관련 직업" items={relatedJobs.map((job) => job.name)} />
        <Info title="관련 기업" items={relatedCompanies.map((company) => company.name)} />
      </section>
      <SalaryLifestyleCard jobName={major.name} salaryProfile={major.salaryProfile} lifestyleProfile={major.lifestyleProfile} />
      <ProsConsPanel pros={major.pros} cons={major.cons} />
      <RiskAnalysis title="리스크 분석" riskItems={major.risks} />
      <RoadmapTimeline roadmap={major.highSchoolRoadmap} />
      <ExternalLinksPanel links={{ "공식 학과 검색": major.externalLinks.officialSearch, "유튜브 검색": major.externalLinks.youtubeSearch, "채용 현황 검색": major.externalLinks.jobSearch, "임금직업포털": major.externalLinks.salaryReference }} />
    </main>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-black text-navy">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">{items.length ? items.map((item) => <li key={item}>• {item}</li>) : <li>공식 자료에서 추가 확인 필요</li>}</ul>
    </div>
  );
}
