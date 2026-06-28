"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { jobs, majors } from "@/data/mockData";
import { defaultStudentProfile, getCategoryRepresentativeMajors, getTopRecommendedJobs, getTopRecommendedMajors } from "@/lib/scoring";
import type { StudentProfile } from "@/types/career";
import { savePortfolio } from "@/lib/storage";
import { ScoreBar } from "@/components/ui/ScoreBar";

const sections = [
  {
    key: "interests",
    title: "Step 1. 관심 분야",
    items: [
      ["medical", "의료와 생명 분야에 관심이 있다."],
      ["semiconductor", "전자기기, 반도체, 기술 산업에 관심이 있다."],
      ["ai", "컴퓨터, AI, 코딩에 관심이 있다."],
      ["bio", "생명과학, 실험, 연구에 관심이 있다."],
      ["helping", "사람을 돕는 일에 보람을 느낀다."],
      ["stability", "안정적인 전문직을 선호한다."],
      ["growth", "대기업 취업과 높은 성장성을 선호한다."],
      ["research", "연구직이나 실험 중심 직업이 좋다."]
    ]
  },
  {
    key: "subjects",
    title: "Step 2. 과목 적성",
    items: ["국어", "수학", "영어", "물리", "화학", "생명과학", "지구과학", "정보/코딩", "사회/경제", "윤리/철학"].map((s) => [s, `${s} 선호도와 자신감`])
  },
  {
    key: "traits",
    title: "Step 3. 성향",
    items: [
      ["longStudy", "긴 시간 공부를 꾸준히 지속할 수 있다."],
      ["experimentRetry", "실험이 실패해도 원인을 찾아 반복할 수 있다."],
      ["peopleFacing", "사람을 직접 상대하는 일을 잘할 수 있다."],
      ["responsibility", "높은 책임감을 요구하는 일을 감당할 수 있다."],
      ["changeTolerance", "빠르게 변하는 산업 환경이 부담스럽지 않다."],
      ["competition", "경쟁적인 환경에서 성장하는 것을 선호한다."],
      ["predictability", "안정적이고 예측 가능한 직업을 선호한다."],
      ["logic", "수학적 사고와 논리적 문제 해결을 좋아한다."]
    ]
  },
  {
    key: "values",
    title: "Step 4. 직업 가치관",
    items: [
      ["salary", "연봉"],
      ["stability", "직업 안정성"],
      ["prestige", "사회적 명예"],
      ["contribution", "사회적 기여"],
      ["workLife", "워라밸"],
      ["growth", "성장 가능성"],
      ["startup", "창업 가능성"],
      ["expertise", "전문성"],
      ["global", "해외 진출 가능성"],
      ["family", "가족과의 시간"]
    ]
  },
  {
    key: "lifestyle",
    title: "Step 5. 생활 방식 선호",
    items: [
      ["nightWeekend", "야간근무나 주말근무 가능성이 있어도 괜찮다."],
      ["longTraining", "장기간 수련이나 대학원 진학을 감수할 수 있다."],
      ["corporatePressure", "성과 압박이 큰 기업 환경도 괜찮다."],
      ["safetyResponsibility", "사람의 생명이나 안전을 책임지는 부담을 감당할 수 있다."],
      ["regionalMove", "지방 근무나 병원 수련 환경도 고려할 수 있다."],
      ["specialEnvironment", "연구실, 공장, 클린룸, 병원 등 특수 환경에서 일할 수 있다."]
    ]
  }
] as const;

export function DiagnosisClient() {
  const [profile, setProfile] = useState<StudentProfile>(defaultStudentProfile);
  const [step, setStep] = useState(0);
  const majorResults = useMemo(() => getTopRecommendedMajors(profile, majors), [profile]);
  const categoryMajorResults = useMemo(() => getCategoryRepresentativeMajors(profile, majors), [profile]);
  const jobResults = useMemo(() => getTopRecommendedJobs(profile, jobs), [profile]);

  function update(group: keyof StudentProfile, key: string, value: number) {
    setProfile((prev) => ({ ...prev, [group]: { ...prev[group], [key]: value } }));
  }

  const section = sections[step];
  const group = section.key as keyof StudentProfile;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-2xl font-black text-navy">{section.title}</h2>
          <span className="text-sm font-bold text-slate-500">{step + 1}/5</span>
        </div>
        <div className="mt-5 space-y-5">
          {section.items.map(([key, label]) => (
            <label key={key} className="block">
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-slate-700">{label}</span>
                <span className="font-black text-navy">{profile[group][key] || 3}</span>
              </div>
              <input className="w-full" type="range" min={1} max={5} value={profile[group][key] || 3} onChange={(event) => update(group, key, Number(event.target.value))} />
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-between gap-3">
          <button className="rounded-md border border-slate-300 bg-white px-4 py-2 font-bold text-navy disabled:opacity-40" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>이전</button>
          <button className="rounded-md bg-navy px-4 py-2 font-bold text-white" onClick={() => setStep((s) => Math.min(4, s + 1))}>{step === 4 ? "결과 보기" : "다음"}</button>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">진단 결과</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">추천은 단정이 아니라 탐색 우선순위입니다. 입시 가능성, 공식 모집요강, 실제 직무 생활을 함께 확인하세요.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <ResultList title="전체 계열별 추천 학과" items={categoryMajorResults} hrefPrefix="/majors" />
          <ResultList title="추천 직업 TOP 5" items={jobResults.slice(0, 5)} hrefPrefix="/jobs" />
        </div>
        <div className="mt-5 rounded-md border border-blue-100 bg-blue-50 p-4">
          <h3 className="font-black text-navy">개인 점수 기준 TOP 5</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{majorResults.slice(0, 5).map((item) => `${item.name} ${item.fitScore}`).join(" · ")}</p>
        </div>
        <div className="mt-5 rounded-md bg-slate-50 p-4">
          <h3 className="font-black text-navy">주의해야 할 학과 TOP 3</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{majorResults.slice(-3).map((item) => item.name).join(", ")}은 현재 입력 기준에서 과목 또는 생활방식 적합도가 낮게 나타납니다.</p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Advice title="학생의 강점" items={["관심 분야와 과목 적성을 함께 비교할 수 있음", "전문성·성장성·안정성을 균형 있게 검토 가능", "대안 학과를 함께 설계할 여지 있음"]} />
          <Advice title="학생의 리스크" items={["높은 입시 난도와 실제 직무 생활을 혼동할 수 있음", "연봉만 보고 생활강도와 가족시간을 놓칠 수 있음", "학과명보다 세부 직무 검증이 필요함"]} />
        </div>
        <button
          className="mt-5 rounded-md bg-slateblue px-4 py-2 font-bold text-white"
          onClick={() => {
            savePortfolio({
              majors: categoryMajorResults.map((item) => item.id),
              jobs: jobResults.slice(0, 5).map((item) => item.id),
              companies: [],
              diagnosis: profile
            });
          }}
        >
          진단 결과를 포트폴리오에 저장
        </button>
      </section>
    </div>
  );
}

function ResultList({ title, items, hrefPrefix }: { title: string; items: ReturnType<typeof getTopRecommendedMajors>; hrefPrefix: string }) {
  return (
    <div>
      <h3 className="font-black text-navy">{title}</h3>
      <div className="mt-3 space-y-3">
        {items.map((item) => (
          <Link key={item.id} href={`${hrefPrefix}/${item.id}`} className="block rounded-md border border-slate-200 p-3 hover:border-slateblue">
            <div className="flex items-center justify-between gap-3">
              <span className="font-bold text-navy">{item.name}</span>
              <span className="text-sm font-black text-slateblue">{item.fitScore}</span>
            </div>
            <div className="mt-3 space-y-2">
              <ScoreBar label="Academic" score={item.academicScore} />
              <ScoreBar label="Lifestyle" score={item.lifestyleScore} />
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-600">{item.reason}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Advice({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md bg-slate-50 p-4">
      <h3 className="font-black text-navy">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul>
    </div>
  );
}
