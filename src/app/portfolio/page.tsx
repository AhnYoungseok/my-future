import { PortfolioPanel } from "@/components/portfolio/PortfolioClient";

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black text-navy">나의 진로 포트폴리오</h1>
      <p className="mt-3 text-slate-600">관심 학과, 직업, 기업, 진단 결과를 브라우저 localStorage에 저장합니다.</p>
      <div className="mt-6"><PortfolioPanel /></div>
    </main>
  );
}
