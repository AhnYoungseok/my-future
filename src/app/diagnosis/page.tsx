import { DiagnosisClient } from "@/components/diagnosis/DiagnosisClient";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";

export default function DiagnosisPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">학생 진로진단</h1>
      <p className="mt-3 max-w-3xl text-slate-600">관심, 과목, 성향, 가치관, 생활 방식 선호를 5단계로 입력해 학과와 직업 추천을 확인합니다.</p>
      <div className="my-6"><DisclaimerBox /></div>
      <DiagnosisClient />
    </main>
  );
}
