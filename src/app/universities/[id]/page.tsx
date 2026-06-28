import { notFound } from "next/navigation";
import Link from "next/link";
import { universities, universityMajors } from "@/data/mockData";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { getVerificationLabel, getVerificationTone } from "@/lib/validation";

export function generateStaticParams() {
  return universities.map((university) => ({ id: university.id }));
}

export default async function UniversityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const university = universities.find((item) => item.id === id);
  if (!university) notFound();
  const departments = universityMajors.filter((item) => item.universityId === university.id);

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-10">
      <section className="rounded-lg bg-navy p-6 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-blue-100">대학 상세</p>
            <h1 className="mt-2 text-4xl font-black">{university.name}</h1>
            <p className="mt-3 text-blue-50">{university.region} · {university.type} · {university.schoolType || "학교종류 확인 필요"}</p>
          </div>
          <span className={`rounded-full border px-3 py-2 text-sm font-black ${getVerificationTone(university.verificationStatus, university.verified)}`}>{getVerificationLabel(university.verificationStatus, university.verified)}</span>
        </div>
      </section>

      <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-2xl font-black text-navy">공식 확인 필요</h2>
        <p className="mt-3 text-sm leading-7 text-amber-950">아래 학과 목록은 현재 탐색용 후보입니다. 실제 설치 학과, 모집단위명, 정원, 전형, 계약학과 조건은 반드시 대학 입학처, 대학알리미, 대입정보포털에서 확인해야 합니다.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ExternalLinkButton href={university.homepageUrl}>공식 홈페이지</ExternalLinkButton>
          <ExternalLinkButton href={university.admissionUrl}>입학처</ExternalLinkButton>
          <ExternalLinkButton href={university.academyInfoUrl}>대학알리미</ExternalLinkButton>
          <ExternalLinkButton href={university.adigaUrl}>대입정보포털 어디가</ExternalLinkButton>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">학과 후보</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {departments.map((department) => (
            <article key={department.id} className="rounded-md border border-slate-200 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-black text-navy">{department.departmentName}</h3>
                <span className={`rounded-full border px-2 py-1 text-xs font-black ${getVerificationTone(department.verificationStatus, department.verified)}`}>{getVerificationLabel(department.verificationStatus, department.verified)}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{department.warning || department.notes}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <ExternalLinkButton href={department.departmentUrl}>학과 공식 검색</ExternalLinkButton>
                <ExternalLinkButton href={department.admissionUrl}>입학처</ExternalLinkButton>
                <ExternalLinkButton href={department.curriculumUrl}>교육과정 검색</ExternalLinkButton>
              </div>
            </article>
          ))}
          {!departments.length && <p className="text-sm text-slate-600">아직 연결된 학과 후보가 없습니다. 공식 데이터 연동 후 표시됩니다.</p>}
        </div>
      </section>

      <Link className="inline-flex rounded-md border border-slate-200 bg-white px-4 py-2 font-bold text-navy" href="/universities">대학맵으로 돌아가기</Link>
    </main>
  );
}
