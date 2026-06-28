import { MajorCard, JobCard } from "@/components/cards/Cards";
import { comparisonPresets, jobs, majors } from "@/data/mockData";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { MetricBarChart, RadarChart } from "@/components/ui/Charts";

const roles = ["공정기술", "공정개발", "회로설계", "시스템반도체 설계", "장비기술", "소재개발", "패키징", "품질/수율", "데이터분석", "생산관리", "기술영업", "연구개발"];

export default function SemiconductorPage() {
  const semiMajors = majors.filter((major) => major.category === "반도체" || ["computer-science", "mechanical", "electrical"].includes(major.id));
  const semiJobs = jobs.filter((job) => job.category === "반도체");
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="rounded-lg bg-gradient-to-br from-blue-800 to-slate-900 p-6 text-white shadow-soft md:p-8">
        <h1 className="text-4xl font-black">반도체 특화관</h1>
        <p className="mt-4 max-w-3xl leading-7 text-blue-50">수학, 물리, 화학, 코딩, 클린룸, 교대근무, 대기업 취업, 산업 경기, 기술 변화, 성과급 변동성을 직무별로 나눠 봅니다.</p>
      </section>
      <div className="mt-6 flex flex-wrap gap-2">{roles.map((role) => <span key={role} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-800">{role}</span>)}</div>
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <RadarChart
          title="반도체 선택 체크포인트"
          data={[
            { label: "수학", value: 5 },
            { label: "물리", value: 5 },
            { label: "코딩", value: 4 },
            { label: "현장", value: 4 },
            { label: "성장", value: 5 },
            { label: "변동", value: 4 }
          ]}
        />
        <MetricBarChart
          title="직무별 탐색 우선순위"
          data={roles.slice(0, 8).map((role, index) => ({
            label: role,
            value: 94 - index * 6
          }))}
        />
      </section>
      <h2 className="mt-8 text-3xl font-black text-navy">반도체 연결 학과</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{semiMajors.map((major) => <MajorCard key={major.id} major={major} />)}</div>
      <h2 className="mt-10 text-3xl font-black text-navy">반도체 직무</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{semiJobs.map((job) => <JobCard key={job.id} job={job} />)}</div>
      <div className="mt-10"><ComparisonTable preset={comparisonPresets.find((p) => p.id === "semi-jobs")!} /></div>
    </main>
  );
}
