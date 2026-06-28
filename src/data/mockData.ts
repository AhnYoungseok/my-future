import type {
  Category,
  Company,
  ComparisonPreset,
  Job,
  LifestyleProfile,
  Major,
  RiskItem,
  SalaryLevel,
  SalaryProfile,
  University,
  UniversityMajor
} from "@/types/career";
import {
  createDartSearchUrl,
  createGoogleSearchUrl,
  createJobKoreaSearchUrl,
  createSaraminSearchUrl,
  createUniversitySearchUrl,
  createWork24SearchUrl,
  createYoutubeSearchUrl
} from "@/lib/links";

const salary = (
  salaryLevel: SalaryLevel,
  entry: string,
  midCareer: string,
  senior: string,
  topPotential: string,
  incomeStability: 1 | 2 | 3 | 4 | 5,
  incomeVariability: 1 | 2 | 3 | 4 | 5
): SalaryProfile => ({
  salaryLevel,
  entry,
  midCareer,
  senior,
  topPotential,
  incomeStability,
  incomeVariability,
  note:
    "참고용 추정 범위입니다. 실제 연봉은 기업, 지역, 경력, 성과급, 근무형태, 개원·창업 여부에 따라 크게 달라질 수 있습니다."
});

const life = (
  workIntensity: 1 | 2 | 3 | 4 | 5,
  workLifeBalance: 1 | 2 | 3 | 4 | 5,
  stressLevel: 1 | 2 | 3 | 4 | 5,
  nightShiftPossibility: 1 | 2 | 3 | 4 | 5,
  familyTime: 1 | 2 | 3 | 4 | 5,
  burnoutRisk: 1 | 2 | 3 | 4 | 5,
  description: string
): LifestyleProfile => ({
  workIntensity,
  workLifeBalance,
  stressLevel,
  physicalFatigue: workIntensity,
  emotionalLabor: stressLevel,
  nightShiftPossibility,
  weekendWorkPossibility: Math.max(1, nightShiftPossibility - 1) as 1 | 2 | 3 | 4 | 5,
  familyTime,
  autonomy: workLifeBalance,
  socialRecognition: 4,
  burnoutRisk,
  description
});

const risks = (category: Category, high: string[] = []): RiskItem[] => {
  const common: RiskItem[] = [
    {
      name: "입시 리스크",
      level: high.includes("입시") ? "매우 높음" : "높음",
      description: "선호도가 높은 학과일수록 경쟁률과 합격선 변동성이 큽니다.",
      mitigation: "유사 학과와 지역·전형 대안을 3개 이상 함께 준비합니다."
    },
    {
      name: "학업 리스크",
      level: high.includes("학업") ? "매우 높음" : "높음",
      description: "전공 기초과목이 맞지 않으면 대학 이후 만족도가 크게 낮아질 수 있습니다.",
      mitigation: "고1~고2 때 핵심 과목 선호도와 성취도를 반복 점검합니다."
    },
    {
      name: "진로 착각 리스크",
      level: "보통",
      description: "학과 이미지와 실제 직무 생활이 다를 수 있습니다.",
      mitigation: "공식 교육과정, 직무 인터뷰, 채용공고의 요구역량을 함께 봅니다."
    },
    {
      name: "번아웃 리스크",
      level: high.includes("번아웃") ? "높음" : "보통",
      description: "업무 강도와 책임감이 장기 지속 가능성에 영향을 줍니다.",
      mitigation: "생활 패턴, 야간근무, 가족시간, 건강 부담을 진로 선택 기준에 포함합니다."
    },
    {
      name: "소득 편차 리스크",
      level: high.includes("소득") ? "높음" : "보통",
      description: "평균 연봉보다 직무·기관·성과급·개원 여부에 따른 분포 차이가 중요합니다.",
      mitigation: "평균값 하나가 아니라 경력별 범위와 채용공고 조건을 확인합니다."
    }
  ];
  if (category === "반도체" || category === "AI·소프트웨어") {
    common.push({
      name: "산업 경기 리스크",
      level: "높음",
      description: "채용 규모와 성과급이 산업 사이클과 글로벌 수요에 영향을 받습니다.",
      mitigation: "전공 기초와 데이터·코딩 등 범용 역량을 같이 확보합니다."
    });
  } else {
    common.push({
      name: "정책 변화 리스크",
      level: category === "메디컬" ? "높음" : "보통",
      description: "면허, 수가, 공공정책, 정원 변화가 진로 구조에 영향을 줄 수 있습니다.",
      mitigation: "공식 정책 자료와 현직자 의견을 함께 확인합니다."
    });
  }
  return common;
};

const roadmap = {
  grade10: ["공통과목 기초를 다지고 진로 독서 3권 이상 기록", "관심 직업 인터뷰 영상과 공식 직업정보 비교", "동아리에서 작은 탐구 주제 1개 수행"],
  grade11: ["선택과목을 전공과 연결하고 심화 탐구 주제 확정", "세특에 남길 질문-실험-분석 흐름 설계", "대학 학과 교육과정과 입시 전형 비교"],
  grade12: ["지원 대학 모집요강 최종 확인", "면접 예상 질문과 진로 포트폴리오 정리", "1순위와 대안 학과의 리스크 비교"]
};

const commonPros = ["전문성을 축적할 수 있다.", "관련 산업과 직업으로 확장 가능하다.", "고등학교 활동을 전공 탐구와 연결하기 좋다.", "경력 이후 선택지가 넓어질 수 있다.", "사회 변화와 기술 변화 속에서 수요가 유지될 가능성이 있다."];
const commonCons = ["초기 경쟁이 치열하다.", "기초과목이 맞지 않으면 부담이 커진다.", "실제 직무 생활은 학과 이미지와 다를 수 있다.", "상위권 진입을 위해 지속 학습이 필요하다.", "기관·기업·지역에 따라 삶의 질 차이가 크다."];

const majorSeeds: Array<[string, string, Category, string, string[], string[], SalaryProfile, LifestyleProfile]> = [
  ["medicine", "의예과", "메디컬", "의사 면허와 임상·연구·공공의료로 이어지는 대표 전문직 경로", ["면허", "수련", "환자", "책임"], ["생명과학", "화학", "영어"], salary("매우 높은 편", "수련·기관별 차이 큼", "전문의 진입 후 참고용 상향 가능", "상위권은 편차 매우 큼", "개원·전문과·지역에 따라 매우 큼", 4, 5), life(5, 2, 5, 4, 2, 5, "소득 잠재력은 높지만 긴 수련기간, 야간근무, 생명 책임, 보호자 응대 부담을 함께 봐야 합니다.")],
  ["dentistry", "치의예과", "메디컬", "치과의사 면허 기반 진료와 개원 가능성이 있는 전문직 경로", ["면허", "개원", "구강건강", "정밀"], ["생명과학", "화학"], salary("매우 높은 편", "수련·근무형태별 차이", "개원·봉직 여부에 따라 차이 큼", "상위권 편차 큼", "개원 입지와 경영역량 영향 큼", 4, 5), life(4, 3, 4, 2, 3, 4, "임상 책임과 경영 부담이 있지만 근무형태에 따라 생활 조정 여지가 있습니다.")],
  ["korean-medicine", "한의예과", "메디컬", "한의사 면허를 기반으로 진료, 연구, 개원으로 확장되는 경로", ["면허", "진료", "개원", "전통의학"], ["생명과학", "화학", "윤리/철학"], salary("높은 편", "근무형태별 차이 큼", "개원 여부에 따라 차이", "상위권 편차 큼", "지역·진료모델 영향 큼", 4, 5), life(4, 3, 4, 2, 3, 4, "전문직 안정성이 있으나 제도·수요·개원 경쟁을 함께 확인해야 합니다.")],
  ["pharmacy", "약학과", "메디컬", "약사 면허와 제약바이오 산업을 함께 볼 수 있는 경로", ["면허", "약물", "제약", "임상"], ["화학", "생명과학"], salary("높은 편", "참고용 중상 수준", "근무형태별 상승 가능", "약국·제약 직무에 따라 편차", "개국·산업직에 따라 다름", 4, 4), life(3, 3, 3, 2, 3, 3, "의대보다 수련 부담은 낮지만 약국 경쟁, 반복 업무, 제도 변화를 봐야 합니다.")],
  ["veterinary", "수의예과", "메디컬", "동물 진료, 공중보건, 바이오 연구로 연결되는 면허 경로", ["면허", "동물", "공중보건", "바이오"], ["생명과학", "화학"], salary("높은 편", "기관·개원별 차이", "경력 이후 상승 가능", "개원 시 편차 큼", "진료 분야에 따라 다름", 3, 5), life(4, 3, 4, 3, 3, 4, "동물과 보호자 모두를 상대하며 감정노동과 개원 리스크가 존재합니다.")],
  ["nursing", "간호학과", "메디컬", "간호사 면허와 병원·공공보건·해외진출로 이어지는 보건의료 경로", ["면허", "병원", "돌봄", "해외"], ["생명과학", "영어"], salary("보통", "참고용 중간 수준", "기관·교대·경력별 상승", "전문간호·관리직 가능", "해외·전문분야에 따라 다름", 4, 3), life(5, 2, 5, 5, 2, 5, "취업 기회는 많지만 교대근무와 신체·정신 피로, 조직문화 적응을 확인해야 합니다.")],
  ["semiconductor", "반도체공학과", "반도체", "공정·소자·회로·패키징을 직접 겨냥하는 첨단산업 특화 경로", ["공정", "회로", "소자", "대기업"], ["수학", "물리", "정보/코딩"], salary("높은 편", "대기업·직무별 참고용 중상", "성과급 포함 시 변동", "상위권 기술직 상승 가능", "산업 사이클 영향 큼", 3, 5), life(4, 3, 4, 3, 3, 4, "성장성과 보상 가능성이 크지만 산업 사이클, 성과 압박, 직무별 근무강도 차이가 큽니다.")],
  ["electronics", "전자공학과", "반도체", "회로, 통신, 임베디드, 반도체 설계까지 폭넓은 공학 기반", ["회로", "통신", "임베디드", "설계"], ["수학", "물리", "정보/코딩"], salary("높은 편", "기업·직무별 차이", "경력 이후 상승", "전문 설계직 상위 가능", "성과급 영향 있음", 3, 4), life(4, 3, 4, 2, 3, 4, "전공 폭이 넓어 선택지는 크지만 수학·물리·회로 기초가 중요합니다.")],
  ["materials", "신소재공학과", "반도체", "반도체·배터리·디스플레이 소재 연구와 제조로 연결되는 경로", ["소재", "재료", "실험", "공정"], ["화학", "물리"], salary("높은 편", "기업·연구직별 차이", "석사 이상에서 상승 가능", "소재 전문성 상위 가능", "산업별 차이 큼", 3, 4), life(3, 3, 3, 2, 3, 3, "실험과 분석을 꾸준히 수행하는 성향이 중요하고 대학원 선택 가능성이 있습니다.")],
  ["computer-science", "컴퓨터공학과", "AI·소프트웨어", "소프트웨어 개발, AI, 데이터, 플랫폼 기업으로 확장되는 범용 경로", ["코딩", "알고리즘", "AI", "플랫폼"], ["정보/코딩", "수학"], salary("높은 편", "역량·기업별 차이 큼", "경력·성과에 따라 상승", "상위권 편차 큼", "창업·글로벌 가능성", 3, 5), life(3, 3, 4, 1, 3, 4, "성과 압박과 지속 학습 부담이 있으나 원격·글로벌·창업 확장성이 있습니다.")],
  ["ai", "인공지능학과", "AI·소프트웨어", "머신러닝, 데이터, 모델링을 중심으로 산업 문제를 푸는 경로", ["AI", "데이터", "수학", "모델"], ["수학", "정보/코딩", "영어"], salary("높은 편", "역량별 편차 큼", "석사·프로젝트에 따라 상승", "상위권 매우 높음 가능", "기술 변화 영향 큼", 3, 5), life(4, 3, 4, 1, 3, 4, "빠른 기술 변화에 적응해야 하며 수학과 구현 역량을 모두 요구합니다.")],
  ["biotech", "생명공학과", "바이오·제약", "생명현상을 산업과 연구로 연결하는 바이오 기본 경로", ["실험", "바이오", "제약", "연구"], ["생명과학", "화학"], salary("보통", "학위·기업별 차이", "연구·품질·RA별 차이", "상위 연구직 상승 가능", "대학원 영향 큼", 3, 4), life(3, 3, 3, 1, 3, 3, "연구직은 대학원 가능성을, 산업직은 품질·RA·임상 등 직무 선택을 함께 봐야 합니다.")],
  ["biomedical", "의생명공학과", "바이오·제약", "의료와 생명공학, 데이터, 기기를 잇는 융합 경로", ["의료", "바이오", "데이터", "기기"], ["생명과학", "화학", "정보/코딩"], salary("보통", "직무별 차이", "석사·산업직에 따라 상승", "의료AI·기기 상위 가능", "기업 규모 영향 큼", 3, 4), life(3, 3, 3, 1, 3, 3, "진료직 대안으로 좋지만 전공 이후 어떤 직무로 갈지 빨리 좁혀야 합니다.")],
  ["chemical", "화학공학과", "반도체", "화학공정, 소재, 배터리, 반도체 공정까지 연결되는 공학 경로", ["공정", "화학", "소재", "배터리"], ["화학", "수학", "물리"], salary("높은 편", "산업별 차이", "제조·소재 기업 상승", "상위권 가능", "산업 경기 영향", 3, 4), life(4, 3, 3, 2, 3, 3, "공정·소재·배터리로 확장되며 현장 기반 직무 가능성이 있습니다.")],
  ["physics", "물리학과", "반도체", "기초과학 기반으로 반도체, 광학, 데이터, 연구직까지 가는 경로", ["기초과학", "양자", "소자", "연구"], ["물리", "수학"], salary("보통", "진로별 편차 큼", "대학원·산업 전환에 따라 상승", "연구/금융/데이터 전환 가능", "전문화 필요", 2, 4), life(3, 3, 3, 1, 3, 3, "순수학문 흥미와 장기 연구 적성이 중요하며 응용 진로 설계를 병행해야 합니다.")],
  ["mechanical", "기계공학과", "미래차·배터리", "제조, 로봇, 미래차, 장비, 에너지로 확장되는 전통 공학 기반", ["설계", "제조", "로봇", "장비"], ["수학", "물리"], salary("보통", "기업·직무별 차이", "제조·장비 경력 상승", "상위 기술직 가능", "산업별 차이", 3, 3), life(4, 3, 3, 2, 3, 3, "직무 폭이 넓고 현장 기반 역량이 중요합니다.")],
  ["electrical", "전기공학과", "미래차·배터리", "전력, 모터, 배터리, 반도체 장비, 에너지로 연결되는 경로", ["전력", "전기", "배터리", "장비"], ["수학", "물리"], salary("높은 편", "기업별 차이", "에너지·배터리·장비 상승", "전문직무 상위 가능", "산업 수요 영향", 3, 3), life(3, 3, 3, 2, 3, 3, "전기 기반 인프라 수요가 꾸준하고 미래차·배터리와 연결됩니다.")],
  ["data-science", "데이터사이언스학과", "AI·소프트웨어", "통계, 코딩, 도메인 지식을 활용해 의사결정을 돕는 경로", ["데이터", "통계", "AI", "분석"], ["수학", "정보/코딩", "사회/경제"], salary("높은 편", "역량·산업별 차이", "경력 이후 상승 가능", "상위권 편차 큼", "도메인 전문성 영향", 3, 4), life(3, 3, 4, 1, 3, 3, "수학·통계와 비즈니스 문제 이해를 함께 요구합니다.")]
];

export const majors: Major[] = majorSeeds.map(([id, name, category, summary, keywords, subjects, salaryProfile, lifestyleProfile]) => ({
  id,
  name,
  category,
  summary,
  description: `${name}는 ${summary}입니다. 대학 교육과정, 실제 직무, 채용시장, 생활수준을 함께 비교해야 만족도 높은 선택이 가능합니다.`,
  keywords,
  coreSubjects: subjects.concat(category === "반도체" ? ["전자회로", "공정기초"] : category === "메디컬" ? ["해부·생리 기초", "윤리"] : ["데이터 분석"]),
  highSchoolRecommendedSubjects: subjects,
  difficultSubjects: category === "반도체" ? ["물리", "수학"] : category === "메디컬" ? ["화학", "생명과학"] : ["수학", "정보/코딩"],
  requiredAptitudes: category === "메디컬" ? ["책임감", "꾸준함", "사람 응대"] : category === "반도체" ? ["논리적 사고", "문제 해결", "정밀함"] : ["탐구심", "분석력", "지속 학습"],
  suitableTraits: category === "메디컬" ? ["긴 공부를 감당한다", "사람을 돕는 일에 보람을 느낀다", "높은 책임감을 수용한다"] : ["수학적 문제 해결을 좋아한다", "기술 변화가 부담스럽지 않다", "실패 원인을 반복 분석한다"],
  unsuitableTraits: category === "메디컬" ? ["환자 응대가 매우 부담스럽다", "야간근무 가능성을 전혀 수용하지 못한다"] : ["물리·수학을 극도로 싫어한다", "빠른 기술 변화가 큰 스트레스다"],
  relatedUniversityMajors: [],
  relatedJobs: [],
  relatedCompanies: [],
  salaryProfile,
  lifestyleProfile,
  pros: commonPros,
  cons: commonCons,
  risks: risks(category, id === "medicine" ? ["입시", "학업", "번아웃"] : id === "semiconductor" ? ["산업", "소득"] : []),
  futureOutlook: {
    growthFactors: category === "메디컬" ? ["고령화", "의료 수요 증가", "의료AI와 바이오 융합"] : ["첨단산업 투자", "AI·전장·데이터센터 수요", "글로벌 공급망 재편"],
    threatFactors: category === "메디컬" ? ["정책 변화", "수가·정원 변화", "번아웃"] : ["경기 사이클", "기술 변화", "글로벌 경쟁"],
    tenYearComment: "10년 관점에서는 전공 이름보다 기초역량, 실제 직무 경험, 변화 적응력이 진로 안정성을 좌우할 가능성이 큽니다."
  },
  highSchoolRoadmap: roadmap,
  parentAdvice: "아이의 선호와 성취를 분리해서 보고, 명성보다 생활 방식과 장기 지속 가능성을 함께 대화하세요.",
  counselorAdvice: "세특은 과목 지식, 질문, 검증 과정, 진로 연결이 보이도록 설계하는 것이 좋습니다.",
  externalLinks: {
    officialSearch: createGoogleSearchUrl(`${name} 학과 공식 홈페이지 교육과정`),
    youtubeSearch: createYoutubeSearchUrl(`${name} 현실 직무 인터뷰`),
    jobSearch: createWork24SearchUrl(name),
    salaryReference: "https://www.wagework.go.kr/"
  }
}));

const jobSeeds: Array<[string, string, Category, string, string[], string[]]> = [
  ["doctor", "의사", "메디컬", "진료, 수술, 검사, 환자 설명, 임상 판단을 수행합니다.", ["의예과"], ["서울대병원", "세브란스병원"]],
  ["dentist", "치과의사", "메디컬", "구강 진료, 보철, 교정, 예방치료를 수행합니다.", ["치의예과"], ["치과병원", "개원"]],
  ["korean-doctor", "한의사", "메디컬", "한방 진료와 상담, 치료 계획을 수행합니다.", ["한의예과"], ["한방병원", "개원"]],
  ["pharmacist", "약사", "메디컬", "조제, 복약지도, 의약품 관리와 제약 업무를 수행합니다.", ["약학과"], ["병원", "제약회사"]],
  ["veterinarian", "수의사", "메디컬", "동물 진료, 공중보건, 연구와 검역 업무를 수행합니다.", ["수의예과"], ["동물병원", "검역본부"]],
  ["nurse", "간호사", "메디컬", "환자 간호, 투약, 모니터링, 의료진 협업을 수행합니다.", ["간호학과"], ["서울아산병원", "삼성서울병원"]],
  ["medical-researcher", "의학연구자", "바이오·제약", "질병 기전, 임상 연구, 의료기술 연구를 수행합니다.", ["의예과", "의생명공학과"], ["대학병원", "연구소"]],
  ["pharma-researcher", "제약회사 연구원", "바이오·제약", "신약 후보물질, 제형, 품질, 분석 연구를 수행합니다.", ["약학과", "화학공학과"], ["셀트리온", "한미약품"]],
  ["clinical-development", "임상개발 전문가", "바이오·제약", "임상시험 설계, 운영, 규제 대응을 수행합니다.", ["약학과", "생명공학과"], ["삼성바이오로직스", "유한양행"]],
  ["process-engineer", "반도체 공정 엔지니어", "반도체", "웨이퍼 공정 조건을 관리하고 수율 문제를 해결합니다.", ["반도체공학과", "화학공학과"], ["삼성전자", "SK하이닉스"]],
  ["circuit-designer", "반도체 회로설계 엔지니어", "반도체", "디지털·아날로그 회로를 설계하고 검증합니다.", ["전자공학과", "반도체공학과"], ["삼성전자", "LX세미콘"]],
  ["equipment-engineer", "반도체 장비 엔지니어", "반도체", "장비 설치, 유지보수, 트러블슈팅을 수행합니다.", ["기계공학과", "전기공학과"], ["ASML Korea", "Applied Materials Korea"]],
  ["materials-researcher", "반도체 소재 연구원", "반도체", "포토레지스트, 가스, 박막 소재를 연구합니다.", ["신소재공학과", "화학공학과"], ["솔브레인", "동진쎄미켐"]],
  ["yield-engineer", "반도체 품질/수율 엔지니어", "반도체", "불량 원인을 데이터로 분석하고 생산성을 개선합니다.", ["반도체공학과", "데이터사이언스학과"], ["DB하이텍", "삼성전자"]],
  ["ai-engineer", "AI 엔지니어", "AI·소프트웨어", "모델 학습, 서비스 적용, 평가와 운영을 수행합니다.", ["인공지능학과", "컴퓨터공학과"], ["NAVER", "Kakao"]],
  ["data-scientist", "데이터 사이언티스트", "AI·소프트웨어", "데이터를 분석해 예측 모델과 의사결정 근거를 만듭니다.", ["데이터사이언스학과"], ["토스", "쿠팡"]],
  ["software-developer", "소프트웨어 개발자", "AI·소프트웨어", "웹, 앱, 서버, 플랫폼 기능을 설계하고 구현합니다.", ["컴퓨터공학과"], ["우아한형제들", "삼성SDS"]],
  ["bio-researcher", "바이오 연구원", "바이오·제약", "세포·유전자·단백질 기반 연구와 분석을 수행합니다.", ["생명공학과"], ["GC녹십자", "셀트리온"]],
  ["battery-researcher", "배터리 연구원", "미래차·배터리", "전극, 전해질, 셀 성능 개선 연구를 수행합니다.", ["화학공학과", "신소재공학과"], ["LG에너지솔루션", "삼성SDI"]],
  ["electrical-engineer", "전기전자 엔지니어", "미래차·배터리", "전력, 회로, 제어, 장비 시스템을 설계하고 관리합니다.", ["전기공학과", "전자공학과"], ["현대오토에버", "LG CNS"]]
];

export const jobs: Job[] = jobSeeds.map(([id, name, category, summary, relatedMajors, relatedCompanies]) => ({
  id,
  name,
  category,
  summary,
  description: `${summary} 관련 학과 선택부터 자격·대학원·기업 채용까지 연결해서 봐야 하는 직업입니다.`,
  dailyWork: ["업무 우선순위 확인", "문제 진단과 기록", "팀 협업 및 의사결정", "결과 보고와 개선"],
  requiredAptitudes: category === "메디컬" ? ["책임감", "공감", "집중력"] : category === "반도체" ? ["논리", "정밀함", "데이터 해석"] : ["분석력", "학습력", "커뮤니케이션"],
  relatedMajors,
  relatedCompanies,
  requiredLicense: category === "메디컬" ? ["국가면허 또는 관련 자격 확인 필요"] : undefined,
  graduateSchoolRecommended: category === "반도체" || category === "바이오·제약",
  salaryProfile: category === "메디컬" ? salary("매우 높은 편", "수련·기관별 차이 큼", "경력 후 상승 가능", "상위권 편차 큼", "개원·전문분야 영향 큼", 4, 5) : category === "반도체" ? salary("높은 편", "대기업·직무별 참고용 중상", "성과급 포함 변동", "상위 기술직 가능", "산업 사이클 영향 큼", 3, 5) : salary("높은 편", "기업·역량별 차이", "경력 이후 상승", "상위권 편차 큼", "창업·글로벌 가능", 3, 4),
  lifestyleProfile: category === "메디컬" ? life(5, 2, 5, 4, 2, 5, "사람의 생명과 안전을 다루는 만큼 책임과 감정노동을 확인해야 합니다.") : category === "반도체" ? life(4, 3, 4, 3, 3, 4, "기술 문제 해결과 생산 일정 압박이 있을 수 있으며 직무별 생활 차이가 큽니다.") : life(3, 3, 4, 1, 3, 3, "성과와 기술 변화 압박은 있지만 자율성과 확장성이 있습니다."),
  pros: commonPros,
  cons: commonCons,
  risks: risks(category, category === "메디컬" ? ["번아웃"] : category === "반도체" ? ["소득"] : []),
  futureOutlook: {
    growthFactors: ["전문 인력 수요", "기술·산업 변화", "고령화 또는 디지털 전환"],
    threatFactors: ["정책·산업 경기 변화", "자동화와 직무 재편", "조직문화와 번아웃"],
    tenYearComment: "직업명보다 세부 직무, 기관, 역량 조합에 따라 10년 뒤 삶의 모습이 달라집니다."
  },
  highSchoolPreparation: {
    subjects: relatedMajors.flatMap((m) => majors.find((major) => major.name === m)?.highSchoolRecommendedSubjects || []),
    readings: ["직업 인터뷰 도서", "전공 입문서", "산업 리포트"],
    activities: ["진로 탐구 보고서", "동아리 프로젝트", "공식 직업정보 비교"],
    researchTopics: [`${name}의 10년 전망`, `${name}의 장단점과 생활수준`, `${name} 관련 채용공고 요구역량 분석`]
  },
  externalLinks: {
    careerInfo: createGoogleSearchUrl(`${name} 직업정보 커리어넷 워크넷`),
    jobSearch: createWork24SearchUrl(name),
    youtubeSearch: createYoutubeSearchUrl(`${name} 직무 인터뷰 현실`)
  }
}));

export const universities: University[] = [
  ["snu", "서울대학교", "서울", "국립", "https://www.snu.ac.kr/", "https://admission.snu.ac.kr/"],
  ["yonsei", "연세대학교", "서울", "사립", "https://www.yonsei.ac.kr/", "https://admission.yonsei.ac.kr/"],
  ["korea", "고려대학교", "서울", "사립", "https://www.korea.ac.kr/", "https://oku.korea.ac.kr/"],
  ["skku", "성균관대학교", "서울/수원", "사립", "https://www.skku.edu/", "https://admission.skku.edu/"],
  ["hanyang", "한양대학교", "서울", "사립", "https://www.hanyang.ac.kr/", "https://go.hanyang.ac.kr/"],
  ["kaist", "KAIST", "대전", "특수", "https://www.kaist.ac.kr/", "https://admission.kaist.ac.kr/"],
  ["postech", "POSTECH", "포항", "사립", "https://www.postech.ac.kr/", "https://adm-g.postech.ac.kr/"],
  ["catholic", "가톨릭대학교", "서울/부천", "사립", "https://www.catholic.ac.kr/", "https://ipsi.catholic.ac.kr/"],
  ["ulsan", "울산대학교", "울산", "사립", "https://www.ulsan.ac.kr/", "https://admission.ulsan.ac.kr/"],
  ["ajou", "아주대학교", "수원", "사립", "https://www.ajou.ac.kr/", "https://www.iajou.ac.kr/"],
  ["ewha", "이화여자대학교", "서울", "사립", "https://www.ewha.ac.kr/", "https://admission.ewha.ac.kr/"],
  ["cau", "중앙대학교", "서울", "사립", "https://www.cau.ac.kr/", "https://admission.cau.ac.kr/"],
  ["kyunghee", "경희대학교", "서울/용인", "사립", "https://www.khu.ac.kr/", "https://iphak.khu.ac.kr/"],
  ["inha", "인하대학교", "인천", "사립", "https://www.inha.ac.kr/", "https://admission.inha.ac.kr/"],
  ["pusan", "부산대학교", "부산", "국립", "https://www.pusan.ac.kr/", "https://go.pusan.ac.kr/"],
  ["knu", "경북대학교", "대구", "국립", "https://www.knu.ac.kr/", "https://ipsi1.knu.ac.kr/"],
  ["chonnam", "전남대학교", "광주", "국립", "https://www.jnu.ac.kr/", "https://admission.jnu.ac.kr/"],
  ["chungnam", "충남대학교", "대전", "국립", "https://www.cnu.ac.kr/", "https://ipsi.cnu.ac.kr/"],
  ["gist", "GIST", "광주", "특수", "https://www.gist.ac.kr/", "https://admission.gist.ac.kr/"],
  ["dgist", "DGIST", "대구", "특수", "https://www.dgist.ac.kr/", "https://www.dgist.ac.kr/adm/"]
].map(([id, name, region, type, homepageUrl, admissionUrl]) => ({
  id,
  name,
  region,
  type: type as University["type"],
  homepageUrl,
  admissionUrl,
  academyInfoUrl: "https://www.academyinfo.go.kr/"
}));

const companySeeds: Array<[string, string, string, Category, string, string | undefined, string[], string[]]> = [
  ["snuh", "서울대병원", "병원/의료기관", "메디컬", "https://www.snuh.org/", "https://www.snuh.org/recruit/", ["의예과", "간호학과"], ["의사", "간호사"]],
  ["severance", "세브란스병원", "병원/의료기관", "메디컬", "https://sev.severance.healthcare/", "https://yuhs.recruiter.co.kr/", ["의예과", "간호학과"], ["의사", "간호사"]],
  ["asan", "서울아산병원", "병원/의료기관", "메디컬", "https://www.amc.seoul.kr/", "https://recruit.amc.seoul.kr/", ["의예과", "간호학과"], ["의사", "간호사"]],
  ["samsung-medical", "삼성서울병원", "병원/의료기관", "메디컬", "https://www.samsunghospital.com/", "https://www.samsunghospital.com/home/recruit/", ["의예과", "간호학과"], ["의사", "간호사"]],
  ["cmc", "가톨릭중앙의료원", "병원/의료기관", "메디컬", "https://www.cmc.or.kr/", "https://recruit.cmcnu.or.kr/", ["의예과", "간호학과"], ["의사", "간호사"]],
  ["celltrion", "셀트리온", "제약회사", "바이오·제약", "https://www.celltrion.com/", "https://recruit.celltrion.com/", ["생명공학과", "약학과"], ["제약회사 연구원", "바이오 연구원"]],
  ["samsungbio", "삼성바이오로직스", "바이오기업", "바이오·제약", "https://samsungbiologics.com/", "https://samsungbiologics.com/careers", ["생명공학과", "화학공학과"], ["임상개발 전문가", "바이오 연구원"]],
  ["yuhan", "유한양행", "제약회사", "바이오·제약", "https://www.yuhan.co.kr/", "https://www.yuhan.co.kr/Careers", ["약학과", "생명공학과"], ["제약회사 연구원"]],
  ["hanmi", "한미약품", "제약회사", "바이오·제약", "https://www.hanmi.co.kr/", "https://hanmi.recruiter.co.kr/", ["약학과", "화학공학과"], ["제약회사 연구원"]],
  ["ckd", "종근당", "제약회사", "바이오·제약", "https://www.ckdpharm.com/", undefined, ["약학과", "생명공학과"], ["제약회사 연구원"]],
  ["gc", "GC녹십자", "제약회사", "바이오·제약", "https://www.greencross.com/", undefined, ["생명공학과"], ["바이오 연구원"]],
  ["samsung-electronics", "삼성전자", "반도체 제조", "반도체", "https://www.samsung.com/sec/", "https://www.samsung-dsrecruit.com/", ["반도체공학과", "전자공학과"], ["반도체 공정 엔지니어", "반도체 회로설계 엔지니어"]],
  ["skhynix", "SK하이닉스", "반도체 제조", "반도체", "https://www.skhynix.com/", "https://recruit.skhynix.com/", ["반도체공학과", "신소재공학과"], ["반도체 공정 엔지니어", "반도체 품질/수율 엔지니어"]],
  ["dbhitek", "DB하이텍", "반도체 제조", "반도체", "https://www.dbhitek.com/", undefined, ["반도체공학과"], ["반도체 공정 엔지니어"]],
  ["lxsemicon", "LX세미콘", "반도체 설계", "반도체", "https://www.lxsemicon.com/", undefined, ["전자공학과"], ["반도체 회로설계 엔지니어"]],
  ["hanmi-semi", "한미반도체", "반도체 장비", "반도체", "https://www.hanmisemi.com/", undefined, ["기계공학과"], ["반도체 장비 엔지니어"]],
  ["wonik", "원익IPS", "반도체 장비", "반도체", "https://www.ips.co.kr/", undefined, ["기계공학과", "전기공학과"], ["반도체 장비 엔지니어"]],
  ["soulbrain", "솔브레인", "반도체 소재", "반도체", "https://www.soulbrain.co.kr/", undefined, ["신소재공학과", "화학공학과"], ["반도체 소재 연구원"]],
  ["dongjin", "동진쎄미켐", "반도체 소재", "반도체", "https://www.dongjin.com/", undefined, ["화학공학과"], ["반도체 소재 연구원"]],
  ["asml", "ASML Korea", "반도체 장비", "반도체", "https://www.asml.com/", "https://www.asml.com/en/careers", ["기계공학과", "전기공학과"], ["반도체 장비 엔지니어"]],
  ["amat", "Applied Materials Korea", "반도체 장비", "반도체", "https://www.appliedmaterials.com/", "https://www.appliedmaterials.com/careers", ["기계공학과"], ["반도체 장비 엔지니어"]],
  ["lam", "Lam Research Korea", "반도체 장비", "반도체", "https://www.lamresearch.com/", "https://careers.lamresearch.com/", ["전기공학과", "화학공학과"], ["반도체 장비 엔지니어"]],
  ["tel", "Tokyo Electron Korea", "반도체 장비", "반도체", "https://www.tel.co.jp/", undefined, ["기계공학과"], ["반도체 장비 엔지니어"]],
  ["naver", "NAVER", "IT/AI", "AI·소프트웨어", "https://www.navercorp.com/", "https://recruit.navercorp.com/", ["컴퓨터공학과", "인공지능학과"], ["AI 엔지니어", "소프트웨어 개발자"]],
  ["kakao", "Kakao", "IT/AI", "AI·소프트웨어", "https://www.kakaocorp.com/", "https://careers.kakao.com/", ["컴퓨터공학과"], ["소프트웨어 개발자"]],
  ["sds", "삼성SDS", "IT/AI", "AI·소프트웨어", "https://www.samsungsds.com/", "https://www.samsungsds.com/kr/careers/careers.html", ["컴퓨터공학과"], ["소프트웨어 개발자"]],
  ["lgcns", "LG CNS", "IT/AI", "AI·소프트웨어", "https://www.lgcns.com/", "https://www.lgcns.com/careers/", ["데이터사이언스학과"], ["데이터 사이언티스트"]],
  ["hyundai-autoever", "현대오토에버", "IT/AI", "미래차·배터리", "https://www.hyundai-autoever.com/", "https://talent.hyundai.com/", ["전기공학과", "컴퓨터공학과"], ["전기전자 엔지니어"]],
  ["coupang", "쿠팡", "IT/AI", "AI·소프트웨어", "https://www.coupang.com/", "https://www.coupang.jobs/", ["컴퓨터공학과", "데이터사이언스학과"], ["데이터 사이언티스트"]],
  ["toss", "토스", "IT/AI", "AI·소프트웨어", "https://toss.im/", "https://toss.im/career", ["컴퓨터공학과"], ["소프트웨어 개발자"]],
  ["woowa", "우아한형제들", "IT/AI", "AI·소프트웨어", "https://www.woowahan.com/", "https://career.woowahan.com/", ["컴퓨터공학과"], ["소프트웨어 개발자"]]
];

export const companies: Company[] = companySeeds.map(([id, name, industry, category, homepageUrl, recruitUrl, relatedMajors, relatedJobs]) => ({
  id,
  name,
  industry,
  category,
  homepageUrl,
  recruitUrl,
  dartSearchUrl: createDartSearchUrl(name),
  relatedMajors,
  relatedJobs,
  jobKeywords: relatedJobs.concat(relatedMajors),
  salaryNote: "연봉은 직무, 경력, 성과급, 근무지, 조직에 따라 달라지므로 채용공고와 공시자료를 함께 확인해야 합니다.",
  lifestyleNote: category === "메디컬" ? "교대·야간·응급 대응 가능성을 확인하세요." : category === "반도체" ? "직무별 현장 대응, 성과급 변동, 근무지 이동 가능성을 확인하세요." : "성과 압박과 빠른 기술 변화, 팀 문화가 생활 만족도에 영향을 줍니다.",
  pros: commonPros,
  cons: commonCons,
  risks: risks(category)
}));

export const universityMajors: UniversityMajor[] = Array.from({ length: 36 }, (_, index) => {
  const university = universities[index % universities.length];
  const major = majors[index % majors.length];
  return {
    id: `${university.id}-${major.id}`,
    universityId: university.id,
    majorId: major.id,
    universityName: university.name,
    departmentName: major.name,
    region: university.region,
    departmentUrl: createUniversitySearchUrl(university.name, major.name),
    admissionUrl: university.admissionUrl,
    curriculumUrl: createUniversitySearchUrl(university.name, `${major.name} 교육과정`),
    isContractMajor: ["semiconductor", "ai"].includes(major.id) && index % 3 === 0,
    contractCompany: major.id === "semiconductor" ? "삼성전자/SK하이닉스 계열 확인 필요" : undefined,
    scholarshipInfo: index % 4 === 0 ? "장학·산학연계 조건은 공식 모집요강 확인 필요" : "공식 홈페이지 확인 필요",
    employmentLinked: ["semiconductor", "electronics"].includes(major.id) && index % 2 === 0,
    notes: "모집단위명과 전형은 매년 바뀔 수 있으므로 입학처 모집요강을 확인하세요."
  };
});

export const comparisonPresets: ComparisonPreset[] = [
  ["medical-vs-semi", "메디컬 vs 반도체", ["메디컬", "반도체"], ["면허 기반 전문직, 높은 사회적 기여, 장기 안정성", "첨단산업, 대기업·글로벌 기업, 기술 전문성"], ["생명과학·화학, 사람 응대, 긴 공부 감당", "수학·물리·전자·코딩, 변화 적응, 문제 해결"]],
  ["medicine-pharmacy-biotech", "의예과 vs 약학과 vs 생명공학과", ["의예과", "약학과", "생명공학과"], ["가장 긴 수련과 높은 책임", "면허 기반 안정성과 산업 연결", "연구·산업 확장성"], ["환자 진료 중심", "약물·제약 중심", "실험·연구 중심"]],
  ["medical-three", "의예과 vs 치의예과 vs 한의예과", ["의예과", "치의예과", "한의예과"], ["전문의 수련 폭 넓음", "구강진료·개원 가능성", "한방진료·개원 가능성"], ["긴 수련", "정밀 손기술", "제도·수요 확인"]],
  ["pharmacy-vs-pharma", "약학과 vs 제약바이오 연구직", ["약학과", "제약바이오 연구직"], ["약사 면허", "연구·개발 직무"], ["안정 전문직", "대학원·프로젝트 중요"]],
  ["semi-electronics-materials", "반도체공학과 vs 전자공학과 vs 신소재공학과", ["반도체공학과", "전자공학과", "신소재공학과"], ["직접 특화", "범용 회로·통신", "소재·공정"], ["계약학과 확인", "전공 폭 넓음", "실험·대학원 가능성"]],
  ["semi-jobs", "공정 vs 회로설계 vs 장비", ["공정 엔지니어", "회로설계 엔지니어", "장비 엔지니어"], ["제조 현장 문제 해결", "논리·회로 집중 설계", "장비 트러블슈팅"], ["근무강도 확인", "심화전공 유리", "현장 대응 많음"]],
  ["cs-ai-data", "컴퓨터공학 vs 인공지능 vs 데이터사이언스", ["컴퓨터공학과", "인공지능학과", "데이터사이언스학과"], ["범용 개발", "모델 중심", "분석·의사결정"], ["코딩 중심", "수학+코딩", "통계+도메인"]],
  ["bio-biomed-chemical", "생명공학 vs 의생명공학 vs 화학공학", ["생명공학과", "의생명공학과", "화학공학과"], ["생명 실험", "의료 융합", "공정·소재"], ["연구직", "의료AI·기기", "배터리·반도체 확장"]]
].map(([id, title, items, appeal, fit]) => ({
  id: id as string,
  title: title as string,
  items: items as string[],
  columns: [
    { label: "핵심 매력", values: appeal as string[] },
    { label: "맞는 학생", values: fit as string[] },
    { label: "필요한 과목", values: (items as string[]).map((item) => (item.includes("반도체") || item.includes("전자") || item.includes("공정") ? "수학·물리·정보" : item.includes("AI") || item.includes("컴퓨터") ? "수학·정보" : "생명과학·화학")) },
    { label: "리스크", values: (items as string[]).map((item) => (item.includes("메디컬") || item.includes("의예") ? "긴 수련, 높은 입시 난도, 생명 책임" : item.includes("반도체") || item.includes("공정") ? "산업 경기, 기술 변화, 성과급 변동" : "직무 구체화와 역량 검증 필요")) },
    { label: "부모가 확인할 점", values: (items as string[]).map(() => "명성보다 생활수준, 지속 가능성, 대안 경로를 함께 확인") }
  ],
  finalComment: "안정적 전문직을 가장 중시하면 메디컬, 수학·물리 기반 기술산업과 성장성을 선호하면 반도체/AI, 연구 중심이면 바이오·공학 경로를 함께 비교하세요."
}));

export const categories: Category[] = ["메디컬", "반도체", "AI·소프트웨어", "바이오·제약", "미래차·배터리", "경영·경제", "교육", "공공·행정"];

export const featuredReports = [
  {
    title: "메디컬 성향 학생 리포트",
    body: "생명과학·화학 흥미와 안정적 전문직 선호가 높아 의예과, 약학과, 간호학과 적합도가 높게 나타납니다. 다만 긴 수련기간, 환자 응대 스트레스, 높은 입시 난도를 감당할 수 있는지 추가 점검이 필요합니다."
  },
  {
    title: "반도체 성향 학생 리포트",
    body: "수학·물리·정보 과목 선호와 기술산업 관심이 높아 반도체공학과, 전자공학과, 신소재공학과를 우선 비교할 수 있습니다. 산업 경기 변동과 직무별 근무강도를 실제 채용공고로 확인하세요."
  },
  {
    title: "AI/SW 성향 학생 리포트",
    body: "코딩과 논리적 문제 해결을 좋아한다면 컴퓨터공학, 인공지능, 데이터사이언스를 비교하세요. 포트폴리오와 프로젝트 경험이 학과명만큼 중요합니다."
  },
  {
    title: "바이오 연구 성향 학생 리포트",
    body: "생명과학 실험과 연구를 좋아한다면 생명공학, 의생명공학, 약학, 화학공학을 함께 검토하세요. 연구직은 대학원 가능성과 산업직 대안을 동시에 설계하는 것이 좋습니다."
  }
];
