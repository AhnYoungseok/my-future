"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { companies, jobs, majors } from "@/data/mockData";
import { emptyPortfolio, loadPortfolio, PortfolioState, resetPortfolio, toggleSaved } from "@/lib/storage";

export function SaveButton({ type, id }: { type: "majors" | "jobs" | "companies"; id: string }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setSaved(loadPortfolio()[type].includes(id));
  }, [type, id]);
  return (
    <button className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-navy" onClick={() => setSaved(toggleSaved(type, id)[type].includes(id))}>
      {saved ? "저장됨" : "포트폴리오 저장"}
    </button>
  );
}

export function PortfolioPanel() {
  const [state, setState] = useState<PortfolioState>(emptyPortfolio);
  useEffect(() => setState(loadPortfolio()), []);
  const savedMajors = majors.filter((item) => state.majors.includes(item.id));
  const savedJobs = jobs.filter((item) => state.jobs.includes(item.id));
  const savedCompanies = companies.filter((item) => state.companies.includes(item.id));
  const savedAt = state.savedAt ? new Date(state.savedAt).toLocaleString("ko-KR") : "아직 저장 전";

  function handleReset() {
    if (window.confirm("저장된 이름, 진단 결과, 학과·직업·기업 목록을 모두 초기화할까요?")) {
      setState(resetPortfolio());
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold text-slateblue">저장 프로필</p>
            <h2 className="mt-1 text-2xl font-black text-navy">{state.displayName || "이름 또는 예명 미입력"}</h2>
            <p className="mt-2 text-sm text-slate-600">최근 저장: {savedAt}</p>
          </div>
          <button className="rounded-md border border-red-200 bg-red-50 px-4 py-2 font-bold text-red-800" onClick={handleReset} type="button">
            전체 초기화
          </button>
        </div>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">나의 1·2·3순위 진로 후보</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {(savedMajors.length ? savedMajors : majors.slice(0, 3)).slice(0, 3).map((major, index) => (
            <Link key={major.id} href={`/majors/${major.id}`} className="rounded-md bg-slate-50 p-4">
              <div className="text-sm font-bold text-slateblue">{index + 1}순위</div>
              <div className="mt-2 text-lg font-black text-navy">{major.name}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{major.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">학부모·상담교사 질문</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
          <li>• 이 진로를 좋아하는 이유가 과목 흥미인지, 직업 이미지인지 구분했나요?</li>
          <li>• 연봉뿐 아니라 근무시간, 야간근무, 가족시간, 번아웃 위험을 확인했나요?</li>
          <li>• 1순위가 어려울 때 연결 가능한 대안 학과 3개가 있나요?</li>
        </ul>
      </section>
      <SavedList title="저장한 학과" items={savedMajors.map((item) => [item.name, `/majors/${item.id}`])} />
      <SavedList title="저장한 직업" items={savedJobs.map((item) => [item.name, `/jobs/${item.id}`])} />
      <SavedList title="저장한 기업" items={savedCompanies.map((item) => [item.name, `/companies/${item.id}`])} />
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-navy">고등학교 준비 로드맵</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">1학년은 과목 기초와 진로 독서, 2학년은 선택과목과 심화 탐구, 3학년은 지원 대학 비교와 면접·포트폴리오 정리에 집중합니다.</p>
      </section>
    </div>
  );
}

function SavedList({ title, items }: { title: string; items: string[][] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-navy">{title}</h2>
      <div className="mt-4 space-y-2">
        {items.length ? items.map(([name, href]) => <Link className="block rounded-md bg-slate-50 p-3 text-sm font-bold text-navy" key={href} href={href}>{name}</Link>) : <p className="text-sm text-slate-600">아직 저장한 항목이 없습니다.</p>}
      </div>
    </section>
  );
}
