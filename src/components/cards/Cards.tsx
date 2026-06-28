import Link from "next/link";
import type { Company, Job, Major } from "@/types/career";
import { ScoreBar } from "@/components/ui/ScoreBar";

export function CategoryCard({ title, description, href, tone = "blue" }: { title: string; description: string; href: string; tone?: "blue" | "green" | "purple" }) {
  const color = tone === "green" ? "from-teal-600 to-emerald-500" : tone === "purple" ? "from-indigo-600 to-violet-500" : "from-navy to-slateblue";
  return (
    <Link href={href} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-slateblue">
      <div className={`mb-4 h-2 rounded-full bg-gradient-to-r ${color}`} />
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}

export function MajorCard({ major }: { major: Major }) {
  return (
    <Link href={`/majors/${major.id}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slateblue hover:shadow-soft">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slateblue">{major.category}</span>
        <span className="text-xs font-semibold text-slate-500">{major.salaryProfile.salaryLevel}</span>
      </div>
      <h3 className="text-xl font-black text-navy">{major.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{major.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">{major.highSchoolRecommendedSubjects.slice(0, 3).map((s) => <span key={s} className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-800">{s}</span>)}</div>
      <div className="mt-5 space-y-3">
        <ScoreBar label="생활강도" score={major.lifestyleProfile.workIntensity} />
        <ScoreBar label="리스크" score={major.lifestyleProfile.burnoutRisk} />
      </div>
    </Link>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`/jobs/${job.id}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slateblue hover:shadow-soft">
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slateblue">{job.category}</span>
      <h3 className="mt-3 text-xl font-black text-navy">{job.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{job.summary}</p>
      <div className="mt-4 text-sm text-slate-600">관련 학과: {job.relatedMajors.join(", ")}</div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <ScoreBar label="성장성" score={job.salaryProfile.incomeVariability} />
        <ScoreBar label="안정성" score={job.salaryProfile.incomeStability} />
      </div>
    </Link>
  );
}

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Link href={`/companies/${company.id}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slateblue hover:shadow-soft">
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slateblue">{company.industry}</span>
      <h3 className="mt-3 text-xl font-black text-navy">{company.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{company.lifestyleNote}</p>
      <div className="mt-4 flex flex-wrap gap-2">{company.jobKeywords.slice(0, 4).map((s) => <span key={s} className="rounded-full bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-600">{s}</span>)}</div>
    </Link>
  );
}
