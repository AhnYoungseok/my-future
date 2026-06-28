import { featuredReports, majors } from "@/data/mockData";
import { ReportSection } from "@/components/report/ReportSection";
import { professionalReportSections } from "@/lib/report";

export default function ReportPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-5 px-4 py-10">
      <h1 className="text-4xl font-black text-navy">학생·학부모 리포트</h1>
      <p className="max-w-3xl text-slate-600">진단 결과를 단순 순위가 아니라 학생, 학부모, 상담교사가 함께 의사결정할 수 있는 컨설팅 문서 구조로 정리합니다.</p>
      <ReportSection title="학생용 리포트">
        내 성향 요약, 추천 학과, 추천 직업, 준비 과목, 탐구활동 추천, 주의할 점을 단정하지 않는 문장으로 정리합니다.
      </ReportSection>
      <ReportSection title="학부모용 리포트">
        아이의 강점과 리스크, 무리해서 밀면 위험한 진로, 현실적 대안 학과, 입시와 직업을 함께 볼 때의 판단 기준, 대화 질문 리스트를 제공합니다.
      </ReportSection>
      <ReportSection title="상담교사용 리포트">
        학생 프로파일, 추천 결과, 진로 후보, 리스크 요약, 비교 필요 학과, 세특/탐구활동 연결 아이디어를 한 화면에 모읍니다.
      </ReportSection>
      <div className="grid gap-4 md:grid-cols-2">
        {professionalReportSections.map((section) => (
          <ReportSection key={section.title} title={section.title}>{section.body}</ReportSection>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {featuredReports.map((report) => (
          <ReportSection key={report.title} title={report.title}>{report.body}</ReportSection>
        ))}
      </div>
      <ReportSection title="대안 경로 예시">
        1순위 의예과가 어려우면 약학과, 간호학과, 의생명공학과, 생명공학+제약바이오, 의료AI를 함께 비교합니다. 1순위 반도체공학과가 어려우면 전자공학과, 신소재공학과, 화학공학과, 물리학과+대학원, 컴퓨터공학+반도체 SW를 함께 봅니다.
      </ReportSection>
      <ReportSection title="샘플 판단 문구">
        이 학생은 생명과학·화학 흥미와 안정적 전문직 선호가 높아 {majors[0].name}와 {majors[3].name} 적합도가 높게 나타납니다. 다만 긴 수련기간, 환자 응대 스트레스, 높은 입시 난도를 감당할 수 있는지 추가 점검이 필요합니다.
      </ReportSection>
    </main>
  );
}
