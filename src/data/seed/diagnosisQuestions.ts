import type { Category, DiagnosisMode } from "@/types/career";

export const diagnosisModes: Array<{
  id: DiagnosisMode;
  name: string;
  duration: string;
  questionCount: number;
  purpose: string;
}> = [
  {
    id: "quick",
    name: "빠른 진단",
    duration: "약 5분",
    questionCount: 25,
    purpose: "고1 또는 처음 진로를 탐색하는 학생에게 적합합니다."
  },
  {
    id: "standard",
    name: "표준 진단",
    duration: "약 15분",
    questionCount: 70,
    purpose: "학과, 직업, 생활방식, 리스크를 함께 보는 학부모 상담용입니다."
  },
  {
    id: "deep",
    name: "심층 진단",
    duration: "약 30분",
    questionCount: 120,
    purpose: "대학, 학과, 직무, 입시 리스크, 대안 경로까지 보는 고2~고3용입니다."
  }
];

export const careerFitCategories: Array<{
  category: Category;
  keywords: string[];
  caution: string;
  alternatives: Category[];
}> = [
  { category: "메디컬", keywords: ["의예", "치의예", "한의예", "약학", "수의예"], caution: "긴 수련, 국가시험, 환자 응대, 생명 책임을 함께 봐야 합니다.", alternatives: ["보건의료", "바이오·제약", "AI·소프트웨어"] },
  { category: "보건의료", keywords: ["간호", "물리치료", "임상병리", "방사선", "보건행정"], caution: "교대근무, 병원 조직문화, 감정노동 가능성을 확인해야 합니다.", alternatives: ["메디컬", "바이오·제약", "교육·심리"] },
  { category: "반도체", keywords: ["반도체", "전자", "소자", "공정", "디스플레이"], caution: "산업 사이클, 성과급 변동, 직무별 근무지와 생활강도 차이가 큽니다.", alternatives: ["전기·에너지", "AI·소프트웨어", "화학·소재"] },
  { category: "AI·소프트웨어", keywords: ["컴퓨터", "인공지능", "데이터", "보안", "소프트웨어"], caution: "기술 변화가 빠르므로 프로젝트 경험과 지속 학습력이 중요합니다.", alternatives: ["반도체", "경영·경제", "디자인·콘텐츠"] },
  { category: "바이오·제약", keywords: ["생명", "의생명", "제약", "임상", "바이오"], caution: "연구직은 대학원 가능성, 산업직은 규제·품질·임상 직무 이해가 필요합니다.", alternatives: ["메디컬", "화학·소재", "환경·농생명"] },
  { category: "기계·로봇", keywords: ["기계", "로봇", "자동화", "항공", "제조"], caution: "현장·장비·제조 환경에 대한 적응도를 확인해야 합니다.", alternatives: ["미래차·배터리", "전기·에너지", "반도체"] },
  { category: "전기·에너지", keywords: ["전기", "전력", "에너지", "배터리", "전력망"], caution: "수학·물리 기반과 현장 안전 책임이 중요합니다.", alternatives: ["미래차·배터리", "기계·로봇", "반도체"] },
  { category: "화학·소재", keywords: ["화학", "소재", "재료", "공정", "나노"], caution: "실험 안전, 공정 이해, 대학원 선택 가능성을 함께 봐야 합니다.", alternatives: ["반도체", "바이오·제약", "환경·농생명"] },
  { category: "경영·경제", keywords: ["경영", "경제", "회계", "금융", "마케팅"], caution: "전공명보다 데이터, 회계, 영어, 실무 경험의 조합이 중요합니다.", alternatives: ["사회과학·정책", "AI·소프트웨어", "국제·외교"] },
  { category: "교육·심리", keywords: ["교육", "심리", "상담", "특수교육", "교육공학"], caution: "교원 선발 구조와 상담·사람 응대 적성을 현실적으로 봐야 합니다.", alternatives: ["보건의료", "법·공공", "디자인·콘텐츠"] },
  { category: "법·공공", keywords: ["법", "행정", "경찰", "공공", "정책"], caution: "시험 준비 기간, 공공조직 적응, 제도 변화 리스크를 확인해야 합니다.", alternatives: ["사회과학·정책", "교육·심리", "경영·경제"] },
  { category: "디자인·콘텐츠", keywords: ["디자인", "영상", "미디어", "게임", "콘텐츠"], caution: "포트폴리오, 실무 경험, 소득 편차와 프리랜서 가능성을 함께 봐야 합니다.", alternatives: ["AI·소프트웨어", "경영·경제", "교육·심리"] },
  { category: "환경·농생명", keywords: ["환경", "식품", "농생명", "기후", "에너지"], caution: "공공·연구·기업 직무가 다르므로 희망 직무를 빨리 구체화해야 합니다.", alternatives: ["바이오·제약", "화학·소재", "전기·에너지"] }
];

export const subjectInterpretation = [
  "좋아하고 잘함: 핵심 강점으로 전공 선택의 중심에 둡니다.",
  "좋아하지만 약함: 성장 가능 영역으로 고1~고2 보완 계획을 세웁니다.",
  "싫지만 잘함: 입시 전략 과목으로 활용하되 대학 이후 지속 가능성을 점검합니다.",
  "싫고 약함: 해당 과목 의존도가 높은 전공은 리스크로 표시합니다."
];
