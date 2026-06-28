import type { AdmissionProfile, Company, Job, Major, RiskItem, SalaryProfile, LifestyleProfile } from "@/types/career";
import { riskTone } from "@/lib/utils";
import { ExternalLinkButton } from "@/components/ui/ExternalLinkButton";
import { ScoreBar } from "@/components/ui/ScoreBar";

export function SummaryHero({ item, type }: { item: Major | Job | Company; type: "학과" | "직업" | "기업" }) {
  const keywords = "keywords" in item ? item.keywords : "jobKeywords" in item ? item.jobKeywords : item.requiredAptitudes;
  return (
    <section className="rounded-lg bg-gradient-to-br from-navy via-slateblue to-slate-700 p-6 text-white shadow-soft md:p-8">
      <p className="text-sm font-bold text-blue-100">{type} 상세 분석</p>
      <h1 className="mt-3 text-3xl font-black md:text-5xl">{item.name}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50">{"summary" in item ? item.summary : item.lifestyleNote}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {keywords.slice(0, 6).map((keyword) => (
          <span key={keyword} className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white">
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
}

export function SalaryLifestyleCard({ salaryProfile, lifestyleProfile, jobName }: { salaryProfile: SalaryProfile; lifestyleProfile: LifestyleProfile; jobName: string }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">연봉·생활수준 분석</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{jobName}의 소득은 금액 하나보다 범위, 변동성, 시간, 건강, 가족시간을 함께 봐야 합니다.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["연봉 레벨", salaryProfile.salaryLevel],
          ["신입/초기", salaryProfile.entry],
          ["3~5년차", salaryProfile.midCareer],
          ["10년차 이상", salaryProfile.senior],
          ["상위권 가능성", salaryProfile.topPotential],
          ["근무시간/생활", lifestyleProfile.description],
          ["야간근무", `${lifestyleProfile.nightShiftPossibility}/5`],
          ["가족시간", `${lifestyleProfile.familyTime}/5`]
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-slate-50 p-4">
            <div className="text-xs font-bold text-slate-500">{label}</div>
            <div className="mt-2 text-sm font-semibold leading-6 text-navy">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <ScoreBar label="Work Intensity" score={lifestyleProfile.workIntensity} />
        <ScoreBar label="Income Stability" score={salaryProfile.incomeStability} />
        <ScoreBar label="Work-Life Balance" score={lifestyleProfile.workLifeBalance} />
        <ScoreBar label="Burnout Risk" score={lifestyleProfile.burnoutRisk} />
      </div>
      <p className="mt-5 rounded-md bg-amber-50 p-3 text-sm leading-6 text-amber-900">{salaryProfile.note}</p>
    </section>
  );
}

export function AdmissionRequirementCard({ admissionProfile }: { admissionProfile: AdmissionProfile }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold text-slateblue">입학 성적 수준</p>
          <h2 className="mt-1 text-2xl font-black text-navy">{admissionProfile.competitivenessLevel}</h2>
        </div>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-900">탐색용 범위</span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-md bg-slate-50 p-4">
          <div className="text-xs font-bold text-slate-500">학생부/내신 관점</div>
          <p className="mt-2 text-sm leading-6 text-navy">{admissionProfile.schoolRecordRange}</p>
        </div>
        <div className="rounded-md bg-slate-50 p-4">
          <div className="text-xs font-bold text-slate-500">수능/정시 관점</div>
          <p className="mt-2 text-sm leading-6 text-navy">{admissionProfile.csatRange}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <InfoList title="핵심 관리 과목" items={admissionProfile.keySubjects} />
        <InfoList title="준비 전략" items={admissionProfile.recommendedPreparation} />
        <InfoList title="대안 경로" items={admissionProfile.alternativePaths} />
      </div>
      <div className="mt-5 rounded-md bg-amber-50 p-4 text-sm leading-6 text-amber-950">
        {admissionProfile.note}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <ExternalLinkButton href={admissionProfile.officialCheckLinks.adiga}>대입정보포털 어디가</ExternalLinkButton>
        <ExternalLinkButton href={admissionProfile.officialCheckLinks.universityAdmissions}>입학처/입결 검색</ExternalLinkButton>
        <ExternalLinkButton href={admissionProfile.officialCheckLinks.academyInfo}>대학알리미</ExternalLinkButton>
      </div>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md bg-slate-50 p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </div>
  );
}

export function ProsConsPanel({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-xl font-black text-emerald-950">장점</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
          {pros.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </div>
      <div className="rounded-lg border border-orange-200 bg-orange-50 p-5">
        <h2 className="text-xl font-black text-orange-950">단점</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-orange-950">
          {cons.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function RiskAnalysis({ title, riskItems, mitigationStrategies }: { title: string; riskItems: RiskItem[]; mitigationStrategies?: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">{title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {riskItems.map((risk) => (
          <article key={risk.name} className="rounded-md border border-slate-200 p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-black text-navy">{risk.name}</h3>
              <span className={`rounded-full border px-2 py-1 text-xs font-bold ${riskTone(risk.level)}`}>{risk.level}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{risk.description}</p>
            <p className="mt-3 rounded-md bg-slate-50 p-3 text-sm leading-6 text-slate-700">완화 전략: {risk.mitigation}</p>
          </article>
        ))}
      </div>
      {mitigationStrategies ? <ul className="mt-5 space-y-2 text-sm text-slate-600">{mitigationStrategies.map((item) => <li key={item}>• {item}</li>)}</ul> : null}
    </section>
  );
}

export function RoadmapTimeline({ roadmap }: { roadmap: { grade10: string[]; grade11: string[]; grade12: string[] } }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">고등학교 준비 로드맵</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          ["1학년", roadmap.grade10],
          ["2학년", roadmap.grade11],
          ["3학년", roadmap.grade12]
        ].map(([grade, items]) => (
          <article key={grade as string} className="rounded-md bg-slate-50 p-4">
            <h3 className="font-black text-navy">{grade as string}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">{(items as string[]).map((item) => <li key={item}>• {item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExternalLinksPanel({ links }: { links: Record<string, string | undefined> }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">외부 자료 연결</h2>
      <p className="mt-2 text-sm text-slate-600">영상은 개인 경험이므로 공식 정보와 함께 참고하세요.</p>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        {Object.entries(links).map(([label, href]) => (
          <ExternalLinkButton key={label} href={href}>{label}</ExternalLinkButton>
        ))}
      </div>
    </section>
  );
}
