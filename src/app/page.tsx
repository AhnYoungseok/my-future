import Link from "next/link";
import { CategoryCard, MajorCard } from "@/components/cards/Cards";
import { DisclaimerBox } from "@/components/ui/DisclaimerBox";
import { majors } from "@/data/mockData";

const homeCards = [
  ["메디컬 계열", "의예과, 치의예과, 한의예과, 약학과, 수의예과, 간호학과. 전문직, 면허, 안정성, 긴 수련기간, 높은 책임감을 함께 봅니다.", "/medical", "green"],
  ["반도체 계열", "반도체공학과, 전자공학과, 신소재공학과, 화학공학과. 첨단산업, 대기업, 공정, 설계, 장비, 소재 직무를 연결합니다.", "/semiconductor", "blue"],
  ["AI·소프트웨어", "컴퓨터공학과, 인공지능학과, 데이터사이언스. 개발자, AI 엔지니어, 데이터 분석가 경로를 봅니다.", "/majors?category=AI·소프트웨어", "purple"],
  ["바이오·제약", "생명공학과, 의생명공학과, 약학과, 화학과. 연구직, 제약회사, 임상개발, 바이오기업으로 연결합니다.", "/majors?category=바이오·제약", "green"],
  ["미래차·배터리", "기계공학, 전기전자, 배터리, 화학공학. 전기차, 에너지, 모빌리티 산업을 함께 봅니다.", "/majors?category=미래차·배터리", "blue"]
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-white via-blue-50 to-slate-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20">
          <div>
            <p className="text-sm font-black uppercase text-slateblue">Career Compass Pro</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-6xl">대학과 학과 선택, 10년 뒤 직업과 삶까지 연결해서 보세요.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">성향, 과목, 입시 현실성, 직업시장, 연봉, 생활수준, 리스크까지 분석하는 고등학생 맞춤 진로 설계 플랫폼</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-md bg-navy px-5 py-3 font-bold text-white" href="/diagnosis">진로진단 시작하기</Link>
              <Link className="rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-navy" href="/medical">메디컬 집중 분석</Link>
              <Link className="rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-navy" href="/semiconductor">반도체 집중 분석</Link>
              <Link className="rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-navy" href="/compare">학과 비교하기</Link>
              <Link className="rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-navy" href="/portfolio">내 진로 포트폴리오</Link>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-black text-navy">전문 컨설팅 관점</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
              <p>돈만 보지 않고 시간, 건강, 가족시간, 스트레스, 번아웃, 정책·산업 리스크를 함께 봅니다.</p>
              <p>메디컬은 면허·수련·윤리적 책임을, 반도체는 산업 사이클·기술 변화·직무 강도를 분리해 분석합니다.</p>
              <p>첫 버전은 mock data 기반이며 대학알리미, 어디가, 커리어넷, 워크넷, OpenDART, YouTube API 연동을 전제로 설계했습니다.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <DisclaimerBox />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {homeCards.map(([title, desc, href, tone]) => <CategoryCard key={title} title={title} description={desc} href={href} tone={tone} />)}
        </div>
        <h2 className="mt-12 text-3xl font-black text-navy">우선 탐색 학과</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {majors.slice(0, 6).map((major) => <MajorCard key={major.id} major={major} />)}
        </div>
      </section>
    </main>
  );
}
