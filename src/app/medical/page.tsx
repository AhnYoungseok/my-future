import { MajorCard, JobCard } from "@/components/cards/Cards";
import { majors, jobs } from "@/data/mockData";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { comparisonPresets } from "@/data/mockData";
import { MetricBarChart, RadarChart } from "@/components/ui/Charts";

export default function MedicalPage() {
  const medicalMajors = majors.filter((major) => major.category === "메디컬" || ["biomedical"].includes(major.id));
  const medicalJobs = jobs.filter((job) => job.category === "메디컬" || job.name.includes("의학"));
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="rounded-lg bg-gradient-to-br from-teal-700 to-slate-800 p-6 text-white shadow-soft md:p-8">
        <h1 className="text-4xl font-black">메디컬 특화관</h1>
        <p className="mt-4 max-w-3xl leading-7 text-teal-50">면허, 국가시험, 수련기간, 개원 가능성, 병원 근무, 야간근무, 환자 응대, 윤리적 책임, 정책 리스크, 번아웃을 함께 분석합니다.</p>
      </section>
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <RadarChart
          title="메디컬 선택 체크포인트"
          data={[
            { label: "입시", value: 5 },
            { label: "수련", value: 5 },
            { label: "책임", value: 5 },
            { label: "사람", value: 4 },
            { label: "안정", value: 4 },
            { label: "번아웃", value: 5 }
          ]}
        />
        <MetricBarChart
          title="메디컬 계열별 부담 신호"
          data={medicalMajors.slice(0, 6).map((major) => ({
            label: major.name,
            value: major.lifestyleProfile.workIntensity * 18,
            note: major.admissionProfile.competitivenessLevel
          }))}
        />
      </section>
      <h2 className="mt-8 text-3xl font-black text-navy">메디컬 학과</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{medicalMajors.map((major) => <MajorCard key={major.id} major={major} />)}</div>
      <h2 className="mt-10 text-3xl font-black text-navy">관련 직업</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{medicalJobs.slice(0, 6).map((job) => <JobCard key={job.id} job={job} />)}</div>
      <div className="mt-10"><ComparisonTable preset={comparisonPresets.find((p) => p.id === "medical-three")!} /></div>
    </main>
  );
}
