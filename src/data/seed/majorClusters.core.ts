import type { MajorCluster, RiskItem } from "@/types/career";

const baseRisk: RiskItem = {
  name: "공식 데이터 확인 필요",
  level: "보통",
  description: "학과명과 모집단위는 대학별로 다르고 매년 바뀔 수 있습니다.",
  mitigation: "대학알리미, 대입정보포털, 각 대학 입학처 모집요강을 최종 확인합니다."
};

const salaryProfile = {
  salaryLevel: "편차 큼" as const,
  entry: "직무와 기관별 차이 큼",
  midCareer: "전문성 축적에 따라 상승 가능",
  senior: "관리·전문직·창업 여부에 따라 차이",
  topPotential: "상위권은 산업과 성과에 따라 편차 큼",
  incomeStability: 3 as const,
  incomeVariability: 4 as const,
  note: "클러스터 단위 참고값입니다. 실제 소득은 직무, 기업, 지역, 경력, 자격에 따라 달라집니다."
};

const lifestyleProfile = {
  workIntensity: 3 as const,
  workLifeBalance: 3 as const,
  stressLevel: 3 as const,
  physicalFatigue: 3 as const,
  emotionalLabor: 3 as const,
  nightShiftPossibility: 2 as const,
  weekendWorkPossibility: 2 as const,
  familyTime: 3 as const,
  autonomy: 3 as const,
  socialRecognition: 3 as const,
  burnoutRisk: 3 as const,
  description: "클러스터 단위 참고값입니다. 실제 생활은 세부 직무와 조직에 따라 달라집니다."
};

export const majorClusters: MajorCluster[] = [
  {
    id: "medicine-cluster",
    name: "의학계열",
    category: "메디컬",
    aliases: ["의예과", "의학과", "의학부"],
    keywords: ["의예", "의학", "임상", "전문의"],
    description: "의사 면허, 임상진료, 연구, 공공의료로 이어지는 최상위 경쟁 계열입니다.",
    coreSubjects: ["생명과학", "화학", "영어"],
    highSchoolSubjects: ["생명과학", "화학", "확률과통계", "윤리"],
    relatedDepartments: ["의예과", "의학과"],
    relatedJobs: ["의사", "의학연구자", "의료AI 기획자"],
    relatedNcsCodes: [],
    relatedCompanies: ["대학병원", "공공의료기관", "바이오기업"],
    pros: ["면허 기반 전문성", "높은 사회적 기여", "장기 수요"],
    cons: ["긴 수련", "높은 입시 경쟁", "생명 책임과 번아웃"],
    risks: [baseRisk],
    salaryProfile,
    lifestyleProfile: { ...lifestyleProfile, workIntensity: 5, stressLevel: 5, burnoutRisk: 5, nightShiftPossibility: 4 },
    futureOutlook: { growthFactors: ["고령화", "의료기술 발전"], threatFactors: ["정책 변화", "번아웃"], tenYearComment: "전문의, 연구, 공공의료, 의료AI 등으로 갈라질 수 있습니다." },
    roadmaps: { grade10: ["생명·화학 기초", "의료 윤리 독서"], grade11: ["심화 탐구", "모집요강 비교"], grade12: ["수능최저와 면접 대비", "대안 경로 설계"] }
  },
  {
    id: "semiconductor-cluster",
    name: "반도체·전자계열",
    category: "반도체",
    aliases: ["반도체공학과", "시스템반도체공학과", "전자공학부", "지능형반도체공학과"],
    keywords: ["반도체", "전자", "소자", "공정", "회로", "디스플레이"],
    description: "소자, 공정, 회로설계, 장비, 소재, 품질로 확장되는 첨단 제조 계열입니다.",
    coreSubjects: ["수학", "물리", "정보/코딩"],
    highSchoolSubjects: ["미적분", "물리", "화학", "정보"],
    relatedDepartments: ["반도체공학과", "전자공학과", "신소재공학과", "화학공학과"],
    relatedJobs: ["공정 엔지니어", "회로설계 엔지니어", "장비 엔지니어", "수율 엔지니어"],
    relatedNcsCodes: [],
    relatedCompanies: ["삼성전자", "SK하이닉스", "ASML Korea"],
    pros: ["산업 성장성", "대기업 직무 연결", "기술 전문성"],
    cons: ["산업 경기 영향", "성과 압박", "물리·수학 기초 부담"],
    risks: [baseRisk],
    salaryProfile,
    lifestyleProfile: { ...lifestyleProfile, workIntensity: 4, stressLevel: 4, burnoutRisk: 4 },
    futureOutlook: { growthFactors: ["AI 반도체", "전장", "데이터센터"], threatFactors: ["글로벌 경쟁", "경기 사이클"], tenYearComment: "전공 이후 공정, 설계, 장비, 소재 중 어느 직무로 갈지 빨리 좁히는 것이 중요합니다." },
    roadmaps: { grade10: ["수학·물리 기초", "전자기기 탐구"], grade11: ["회로·코딩 프로젝트", "계약학과 확인"], grade12: ["대학별 반도체 트랙과 장학 조건 확인"] }
  },
  {
    id: "ai-software-cluster",
    name: "AI·소프트웨어계열",
    category: "AI·소프트웨어",
    aliases: ["컴퓨터공학과", "소프트웨어학과", "인공지능학과", "데이터사이언스학과", "정보보호학과"],
    keywords: ["소프트웨어", "AI", "데이터", "보안", "플랫폼"],
    description: "개발, AI, 데이터, 보안, 제품 기획으로 확장되는 범용 디지털 계열입니다.",
    coreSubjects: ["수학", "정보/코딩", "영어"],
    highSchoolSubjects: ["수학", "정보", "영어", "확률과통계"],
    relatedDepartments: ["컴퓨터공학과", "인공지능학과", "데이터사이언스학과"],
    relatedJobs: ["개발자", "AI 엔지니어", "데이터 사이언티스트", "보안 엔지니어"],
    relatedNcsCodes: [],
    relatedCompanies: ["NAVER", "Kakao", "토스", "쿠팡"],
    pros: ["직무 확장성", "프로젝트 기반 성장", "글로벌 가능성"],
    cons: ["빠른 기술 변화", "포트폴리오 경쟁", "성과 압박"],
    risks: [baseRisk],
    salaryProfile,
    lifestyleProfile,
    futureOutlook: { growthFactors: ["AI 확산", "전 산업 디지털 전환"], threatFactors: ["도구 자동화", "기술 변화"], tenYearComment: "코딩만이 아니라 문제정의, 도메인 이해, 협업이 중요해집니다." },
    roadmaps: { grade10: ["기초 코딩", "수학 기초"], grade11: ["프로젝트 포트폴리오", "알고리즘"], grade12: ["학과별 교육과정과 졸업작품 확인"] }
  }
];
