import { notFound } from "next/navigation";
import Link from "next/link";
import { jobRoles, occupations } from "@/data/seed/jobRoles.core";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { getVerificationLabel, getVerificationTone } from "@/lib/validation";

export function generateStaticParams() {
  return jobRoles.map((role) => ({ id: role.id }));
}

export default async function JobRoleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const role = jobRoles.find((item) => item.id === id);
  if (!role) notFound();
  const occupation = occupations.find((item) => item.id === role.occupationId);

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <section className="rounded-lg bg-navy p-6 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-blue-100">{occupation?.name || "세부 직무"} · {role.category}</p>
            <h1 className="mt-2 text-4xl font-black">{role.name}</h1>
            <p className="mt-3 max-w-3xl text-blue-50">{role.summary}</p>
          </div>
          <span className={`rounded-full border px-3 py-2 text-sm font-black ${getVerificationTone(role.verificationStatus, role.verified)}`}>{getVerificationLabel(role.verificationStatus, role.verified)}</span>
        </div>
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-2xl font-black text-navy">직무 정보 주의</h2>
        <p className="mt-3 text-sm leading-7 text-amber-950">{role.warning} 연봉과 채용상황은 시점, 기업, 직급, 지역, 성과급에 따라 달라지므로 범위와 변동성으로만 참고하세요.</p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Info title="하루 업무" items={role.dailyTasks} />
        <Info title="필요 역량" items={role.requiredSkills} />
        <Info title="관련 학과" items={role.relatedMajors} />
        <Info title="관련 기업/기관" items={role.relatedCompanies} />
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">연봉·생활·전망</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <p className="rounded-md bg-slate-50 p-4 text-sm leading-7 text-slate-700">{role.salaryBand}</p>
          <p className="rounded-md bg-slate-50 p-4 text-sm leading-7 text-slate-700">{role.workStyle}</p>
          <p className="rounded-md bg-slate-50 p-4 text-sm leading-7 text-slate-700">{role.futureOutlook}</p>
        </div>
      </section>

      <Info title="고등학교 준비법" items={role.highSchoolPreparation} />

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">공식 확인 링크</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <ExternalLinkButton href={role.externalLinks.careerInfo}>커리어넷 검색</ExternalLinkButton>
          <ExternalLinkButton href={role.externalLinks.jobSearch}>채용 검색</ExternalLinkButton>
          <ExternalLinkButton href={role.externalLinks.salaryReference}>연봉/채용 참고</ExternalLinkButton>
          <ExternalLinkButton href={role.externalLinks.youtubeSearch}>유튜브 직무 인터뷰</ExternalLinkButton>
        </div>
      </section>

      <Link className="inline-flex rounded-md border border-slate-200 bg-white px-4 py-2 font-bold text-navy" href="/jobs">직업맵으로 돌아가기</Link>
    </main>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
    </section>
  );
}
