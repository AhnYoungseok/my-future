import { MajorCard, JobCard } from "@/components/cards/Cards";
import { majors, jobs } from "@/data/mockData";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { comparisonPresets } from "@/data/mockData";

export default function MedicalPage() {
  const medicalMajors = majors.filter((major) => major.category === "메디컬" || ["biomedical"].includes(major.id));
  const medicalJobs = jobs.filter((job) => job.category === "메디컬" || job.name.includes("의학"));
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="rounded-lg bg-gradient-to-br from-teal-700 to-slate-800 p-6 text-white shadow-soft md:p-8">
        <h1 className="text-4xl font-black">메디컬 특화관</h1>
        <p className="mt-4 max-w-3xl leading-7 text-teal-50">면허, 국가시험, 수련기간, 개원 가능성, 병원 근무, 야간근무, 환자 응대, 윤리적 책임, 정책 리스크, 번아웃을 함께 분석합니다.</p>
      </section>
      <h2 className="mt-8 text-3xl font-black text-navy">메디컬 학과</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{medicalMajors.map((major) => <MajorCard key={major.id} major={major} />)}</div>
      <h2 className="mt-10 text-3xl font-black text-navy">관련 직업</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{medicalJobs.slice(0, 6).map((job) => <JobCard key={job.id} job={job} />)}</div>
      <div className="mt-10"><ComparisonTable preset={comparisonPresets.find((p) => p.id === "medical-three")!} /></div>
    </main>
  );
}
