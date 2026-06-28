import Link from "next/link";
import { universities, universityMajors } from "@/data/mockData";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { getVerificationLabel, getVerificationTone } from "@/lib/validation";

export default function UniversitiesPage() {
  const regions = Array.from(new Set(universities.map((university) => university.region)));
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">대학맵</h1>
      <p className="mt-3 max-w-3xl text-slate-600">대학과 모집단위는 매년 바뀔 수 있으므로 공식 입학처와 대학알리미를 반드시 확인하세요. 현재 대학-학과 연결은 전국 공식 데이터 연동 전의 탐색 후보이며, 실제 설치 학과로 단정하지 않습니다.</p>
      <section className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-black text-navy">검증 원칙</h2>
        <div className="mt-3 grid gap-3 text-sm leading-6 text-amber-950 md:grid-cols-3">
          <p>대학-학과 조합은 공식 데이터로 확인되기 전까지 “검증 필요”로 표시합니다.</p>
          <p>입학 성적과 모집단위는 합격 가능성 판단이 아니라 공식 확인을 위한 안내입니다.</p>
          <p>전국 데이터는 대학알리미, 대입정보포털, 대학 입학처 기준으로 확장할 구조입니다.</p>
        </div>
      </section>
      <div className="mt-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-4">
        <Filter title="지역" items={["전체", ...regions]} />
        <Filter title="학교종류" items={["전체", "일반대학", "전문대학", "교육대학", "사이버대학"]} />
        <Filter title="계열" items={["전체", "메디컬", "반도체", "AI·소프트웨어", "경영·경제", "디자인·콘텐츠"]} />
        <Filter title="검증상태" items={["검증 필요", "공식 확인", "후보"]} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {universities.map((university) => {
          const depts = universityMajors.filter((item) => item.universityId === university.id).slice(0, 3);
          return (
            <article key={university.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <Link href={`/universities/${university.id}`} className="text-xl font-black text-navy hover:text-slateblue">{university.name}</Link>
                <span className={`rounded-full border px-2 py-1 text-xs font-black ${getVerificationTone(university.verificationStatus, university.verified)}`}>{getVerificationLabel(university.verificationStatus, university.verified)}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{university.region} · {university.type}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {depts.map((dept) => <span key={dept.id} className={`rounded-full border px-2 py-1 text-xs font-semibold ${getVerificationTone(dept.verificationStatus, dept.verified)}`}>{dept.departmentName} · {getVerificationLabel(dept.verificationStatus, dept.verified)}</span>)}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={`/universities/${university.id}`} className="rounded-md bg-navy px-3 py-2 text-xs font-bold text-white">상세 보기</Link>
                <ExternalLinkButton href={university.homepageUrl}>홈페이지</ExternalLinkButton>
                <ExternalLinkButton href={university.admissionUrl}>입학처</ExternalLinkButton>
                <ExternalLinkButton href={university.academyInfoUrl}>대학알리미</ExternalLinkButton>
                <ExternalLinkButton href={university.adigaUrl}>어디가</ExternalLinkButton>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

function Filter({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-black uppercase text-slate-500">{title}</h3>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
        {items.map((item) => <span key={item} className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>)}
      </div>
    </div>
  );
}
