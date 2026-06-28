import type { CareerField, JobRole, Occupation, RiskItem } from "@/types/career";
import { createCareerNetSearchUrl, createGoogleSearchUrl, createSaraminSearchUrl, createWork24SearchUrl, createYoutubeSearchUrl } from "@/lib/links";

const roleRisk = (name: string, description: string): RiskItem => ({
  name,
  level: "보통",
  description,
  mitigation: "채용공고, 현직자 인터뷰, 공식 직업정보를 함께 확인합니다."
});

export const careerFields: CareerField[] = [
  { id: "medical-health", name: "의료·보건", category: "메디컬", description: "면허, 병원, 공공보건, 환자 돌봄으로 연결되는 분야", occupationIds: ["clinical-care", "healthcare-support"] },
  { id: "semiconductor-electronics", name: "반도체·전자", category: "반도체", description: "소자, 공정, 회로, 장비, 품질을 중심으로 움직이는 첨단 제조 분야", occupationIds: ["semiconductor-engineering", "electronics-design"] },
  { id: "ai-software", name: "AI·소프트웨어", category: "AI·소프트웨어", description: "개발, 데이터, AI 모델, 보안, 플랫폼 운영으로 확장되는 분야", occupationIds: ["software-engineering", "data-ai"] },
  { id: "bio-pharma", name: "바이오·제약", category: "바이오·제약", description: "연구, 임상, 품질, 인허가, 생산이 연결되는 생명산업 분야", occupationIds: ["pharma-rd", "bio-manufacturing"] },
  { id: "business-finance", name: "경영·금융", category: "경영·경제", description: "회계, 금융, 기획, 마케팅, 사업개발 직무 분야", occupationIds: ["business-strategy", "finance-accounting"] },
  { id: "public-law-education", name: "법·공공·교육", category: "법·공공", description: "공공정책, 법률, 교육, 상담 직무 분야", occupationIds: ["public-policy", "education-counseling"] },
  { id: "design-content", name: "디자인·콘텐츠", category: "디자인·콘텐츠", description: "디지털 제품, 영상, 브랜드, 콘텐츠 제작 분야", occupationIds: ["product-design", "media-content"] },
  { id: "green-energy", name: "환경·에너지", category: "환경·농생명", description: "기후, 에너지, 식품, 환경 안전으로 연결되는 분야", occupationIds: ["environment-energy", "food-agriculture"] }
];

export const occupations: Occupation[] = [
  { id: "clinical-care", fieldId: "medical-health", name: "임상 진료·간호", description: "환자 평가, 처치, 치료 계획, 돌봄을 수행합니다.", jobRoleIds: ["resident-doctor", "clinical-nurse", "pharmacist-hospital", "physical-therapist"] },
  { id: "healthcare-support", fieldId: "medical-health", name: "보건의료 지원", description: "검사, 영상, 보건행정, 디지털헬스 운영을 담당합니다.", jobRoleIds: ["clinical-lab-tech", "radiologic-tech", "digital-health-pm"] },
  { id: "semiconductor-engineering", fieldId: "semiconductor-electronics", name: "반도체 엔지니어링", description: "공정, 장비, 수율, 품질을 개선합니다.", jobRoleIds: ["semiconductor-process", "semiconductor-equipment", "yield-quality", "semiconductor-materials"] },
  { id: "electronics-design", fieldId: "semiconductor-electronics", name: "전자·회로 설계", description: "칩, 회로, 임베디드 시스템을 설계합니다.", jobRoleIds: ["digital-circuit-design", "analog-circuit-design", "embedded-engineer"] },
  { id: "software-engineering", fieldId: "ai-software", name: "소프트웨어 개발", description: "웹, 앱, 서버, 클라우드 시스템을 만듭니다.", jobRoleIds: ["backend-developer", "frontend-developer", "cloud-devops", "security-engineer"] },
  { id: "data-ai", fieldId: "ai-software", name: "데이터·AI", description: "데이터 분석, 모델 개발, AI 제품화를 수행합니다.", jobRoleIds: ["ml-engineer", "data-scientist", "data-analyst", "ai-product-manager"] },
  { id: "pharma-rd", fieldId: "bio-pharma", name: "제약 연구·임상", description: "신약 연구, 임상시험, 인허가 전략을 수행합니다.", jobRoleIds: ["drug-discovery-researcher", "clinical-research-associate", "regulatory-affairs"] },
  { id: "bio-manufacturing", fieldId: "bio-pharma", name: "바이오 생산·품질", description: "GMP 생산, 품질관리, 밸리데이션을 담당합니다.", jobRoleIds: ["bio-process-engineer", "quality-control", "quality-assurance"] },
  { id: "business-strategy", fieldId: "business-finance", name: "경영기획·마케팅", description: "사업전략, 성장, 시장분석, 브랜드 운영을 맡습니다.", jobRoleIds: ["business-planner", "growth-marketer", "product-manager"] },
  { id: "finance-accounting", fieldId: "business-finance", name: "금융·회계", description: "투자, 리스크, 회계, 세무를 다룹니다.", jobRoleIds: ["financial-analyst", "accountant", "risk-manager"] },
  { id: "public-policy", fieldId: "public-law-education", name: "정책·법률", description: "정책 분석, 행정, 법률 지원을 수행합니다.", jobRoleIds: ["policy-analyst", "public-officer", "legal-specialist"] },
  { id: "education-counseling", fieldId: "public-law-education", name: "교육·상담", description: "교수학습, 상담, 교육 콘텐츠를 설계합니다.", jobRoleIds: ["teacher", "school-counselor", "edtech-designer"] },
  { id: "product-design", fieldId: "design-content", name: "디지털 디자인", description: "UX, UI, 브랜드 경험을 설계합니다.", jobRoleIds: ["ux-designer", "ui-designer", "brand-designer"] },
  { id: "media-content", fieldId: "design-content", name: "미디어·콘텐츠", description: "영상, 게임, 콘텐츠 기획과 제작을 수행합니다.", jobRoleIds: ["content-producer", "game-planner", "video-editor"] },
  { id: "environment-energy", fieldId: "green-energy", name: "환경·에너지", description: "환경 안전, 전력, 기후 대응을 다룹니다.", jobRoleIds: ["environment-consultant", "energy-engineer", "climate-data-analyst"] },
  { id: "food-agriculture", fieldId: "green-energy", name: "식품·농생명", description: "식품 품질, 스마트팜, 농생명 연구를 수행합니다.", jobRoleIds: ["food-quality-manager", "smart-farm-engineer", "agri-bio-researcher"] }
];

const role = (
  id: string,
  occupationId: string,
  name: string,
  category: JobRole["category"],
  summary: string,
  relatedMajors: string[],
  relatedCompanies: string[],
  skills: string[],
  workStyle: string
): JobRole => ({
  id,
  occupationId,
  name,
  category,
  summary,
  roleLevel: "실무",
  dailyTasks: ["문제 정의", "자료 확인", "실행 또는 실험", "결과 기록", "팀 협업"],
  requiredSkills: skills,
  relatedMajors,
  relatedCompanies,
  salaryBand: "직무, 기업 규모, 경력, 성과급에 따라 차이가 큽니다. 채용공고와 공시자료 확인이 필요합니다.",
  workStyle,
  risks: [roleRisk("직무 착각 리스크", `${name}은 직업명보다 실제 조직과 담당 업무에 따라 생활이 달라집니다.`)],
  futureOutlook: "자동화와 AI 도입으로 반복 업무는 줄고, 문제 정의·협업·도메인 이해 역량의 비중이 커질 가능성이 있습니다.",
  highSchoolPreparation: ["관련 과목 기초 다지기", "작은 탐구 프로젝트 수행", "직무 인터뷰 영상과 채용공고 비교", "공식 직업정보 확인"],
  externalLinks: {
    careerInfo: createCareerNetSearchUrl(name),
    jobSearch: createWork24SearchUrl(name),
    salaryReference: createSaraminSearchUrl(name),
    youtubeSearch: createYoutubeSearchUrl(`${name} 직무 인터뷰`),
    officialSearch: createGoogleSearchUrl(`${name} 직무 설명 공식`)
  },
  dataSource: "seed/manual: official-link-ready",
  sourceYear: 2026,
  verified: false,
  verificationStatus: "needs_review",
  warning: "직무 예시는 탐색용입니다. 실제 채용명과 역할은 기업 공고로 확인해야 합니다."
});

export const jobRoles: JobRole[] = [
  role("resident-doctor", "clinical-care", "전공의/임상의", "메디컬", "환자 진료와 수련을 병행하며 전문과 역량을 쌓습니다.", ["의예과"], ["대학병원"], ["의학 지식", "책임감", "소통"], "야간·응급 대응 가능성이 있고 수련 강도가 높습니다."),
  role("clinical-nurse", "clinical-care", "병동/중환자실 간호사", "보건의료", "환자 상태 관찰, 투약, 처치 보조, 보호자 소통을 수행합니다.", ["간호학과"], ["대학병원", "종합병원"], ["간호술", "팀워크", "스트레스 회복력"], "교대근무와 감정노동 가능성이 큽니다."),
  role("pharmacist-hospital", "clinical-care", "병원/약국 약사", "보건의료", "조제, 복약지도, 의약품 안전관리를 수행합니다.", ["약학과"], ["병원", "약국", "제약회사"], ["약물 이해", "정확성", "상담"], "반복 업무와 제도 변화 영향을 함께 봐야 합니다."),
  role("physical-therapist", "clinical-care", "물리치료사", "보건의료", "재활 치료와 운동 기능 회복을 돕습니다.", ["물리치료학과"], ["재활병원", "스포츠센터"], ["인체 이해", "현장 실행", "공감"], "신체 피로와 환자 응대가 있습니다."),
  role("clinical-lab-tech", "healthcare-support", "임상병리사", "보건의료", "검체 검사와 결과 품질을 관리합니다.", ["임상병리학과"], ["병원", "검사기관"], ["검사 이해", "정확성", "품질관리"], "교대근무와 검사 자동화 변화를 확인해야 합니다."),
  role("radiologic-tech", "healthcare-support", "방사선사", "보건의료", "영상 검사 장비를 운용하고 환자 검사를 지원합니다.", ["방사선학과"], ["병원", "영상센터"], ["장비 이해", "환자 응대", "안전"], "장비 환경과 안전관리 책임이 있습니다."),
  role("digital-health-pm", "healthcare-support", "디지털헬스케어 기획자", "AI·소프트웨어", "의료 데이터와 앱 서비스를 연결합니다.", ["의생명공학과", "컴퓨터공학과"], ["헬스케어 스타트업", "병원"], ["의료 이해", "데이터", "제품기획"], "의료 규제와 개인정보 보호 이해가 필요합니다."),
  role("semiconductor-process", "semiconductor-engineering", "반도체 공정 엔지니어", "반도체", "공정 조건과 수율 문제를 개선합니다.", ["반도체공학과", "화학공학과"], ["삼성전자", "SK하이닉스"], ["물리", "화학", "데이터 분석"], "라인 대응과 생산 일정 압박이 있을 수 있습니다."),
  role("semiconductor-equipment", "semiconductor-engineering", "반도체 장비 엔지니어", "반도체", "장비 설치, 유지보수, 이상 대응을 수행합니다.", ["기계공학과", "전기공학과"], ["ASML Korea", "Applied Materials Korea"], ["장비 이해", "문제 해결", "현장 대응"], "출장, 현장근무, 긴급 대응 가능성을 봐야 합니다."),
  role("yield-quality", "semiconductor-engineering", "수율/품질 엔지니어", "반도체", "불량 원인을 데이터로 분석하고 개선합니다.", ["반도체공학과", "데이터사이언스학과"], ["삼성전자", "DB하이텍"], ["통계", "공정 이해", "원인분석"], "성과 압박과 반복 분석 업무가 있습니다."),
  role("semiconductor-materials", "semiconductor-engineering", "반도체 소재 연구원", "화학·소재", "박막, 포토레지스트, 가스 소재를 연구합니다.", ["신소재공학과", "화학공학과"], ["솔브레인", "동진쎄미켐"], ["화학", "재료", "실험"], "대학원과 실험실 적응 가능성을 봐야 합니다."),
  role("digital-circuit-design", "electronics-design", "디지털 회로설계 엔지니어", "반도체", "디지털 회로와 SoC 블록을 설계·검증합니다.", ["전자공학과", "반도체공학과"], ["삼성전자", "LX세미콘"], ["논리회로", "HDL", "검증"], "심화 전공과 긴 디버깅 시간이 필요합니다."),
  role("analog-circuit-design", "electronics-design", "아날로그 회로설계 엔지니어", "반도체", "센서, 전원, RF 등 아날로그 회로를 설계합니다.", ["전자공학과"], ["LX세미콘", "삼성전자"], ["회로", "물리", "정밀 분석"], "진입장벽이 높고 숙련 기간이 깁니다."),
  role("embedded-engineer", "electronics-design", "임베디드 엔지니어", "전기·에너지", "하드웨어 가까운 소프트웨어를 개발합니다.", ["전자공학과", "컴퓨터공학과"], ["현대오토에버", "삼성전자"], ["C/C++", "회로 이해", "디버깅"], "제품·장비 환경 이해가 필요합니다."),
  role("backend-developer", "software-engineering", "백엔드 개발자", "AI·소프트웨어", "서버, API, 데이터베이스를 설계합니다.", ["컴퓨터공학과"], ["NAVER", "Kakao", "토스"], ["프로그래밍", "DB", "시스템 설계"], "장애 대응과 지속 학습 부담이 있습니다."),
  role("frontend-developer", "software-engineering", "프론트엔드 개발자", "AI·소프트웨어", "웹·앱 화면과 사용자 경험을 구현합니다.", ["컴퓨터공학과", "디자인학과"], ["우아한형제들", "쿠팡"], ["React", "UI 이해", "접근성"], "기술 변화와 협업 요구가 큽니다."),
  role("cloud-devops", "software-engineering", "클라우드/DevOps 엔지니어", "AI·소프트웨어", "배포, 인프라, 모니터링을 운영합니다.", ["컴퓨터공학과"], ["삼성SDS", "LG CNS"], ["클라우드", "자동화", "운영"], "장애 대응과 야간 대응 가능성이 있습니다."),
  role("security-engineer", "software-engineering", "보안 엔지니어", "AI·소프트웨어", "시스템 취약점과 보안 사고를 예방합니다.", ["컴퓨터공학과", "정보보호학과"], ["보안기업", "금융회사"], ["네트워크", "분석", "윤리"], "긴급 대응과 높은 책임이 있습니다."),
  role("ml-engineer", "data-ai", "머신러닝 엔지니어", "AI·소프트웨어", "AI 모델을 서비스에 적용하고 운영합니다.", ["인공지능학과", "컴퓨터공학과"], ["NAVER", "Kakao"], ["수학", "코딩", "모델링"], "논문과 제품 사이의 간극을 이해해야 합니다."),
  role("data-scientist", "data-ai", "데이터 사이언티스트", "AI·소프트웨어", "데이터로 예측과 의사결정 근거를 만듭니다.", ["데이터사이언스학과"], ["토스", "쿠팡"], ["통계", "SQL", "비즈니스 이해"], "도메인 지식과 소통 역량이 중요합니다."),
  role("data-analyst", "data-ai", "데이터 분석가", "경영·경제", "지표를 설계하고 조직의 의사결정을 돕습니다.", ["데이터사이언스학과", "경영학과"], ["플랫폼 기업", "금융회사"], ["SQL", "통계", "시각화"], "단순 리포팅에 머물지 않도록 문제정의 역량이 필요합니다."),
  role("ai-product-manager", "data-ai", "AI 서비스 기획자", "경영·경제", "AI 기능을 제품과 비즈니스로 연결합니다.", ["컴퓨터공학과", "경영학과"], ["AI 스타트업", "플랫폼 기업"], ["기획", "데이터 이해", "커뮤니케이션"], "기술과 사용자 요구 사이의 조율이 많습니다."),
  role("drug-discovery-researcher", "pharma-rd", "신약개발 연구원", "바이오·제약", "질병 표적과 후보물질을 연구합니다.", ["약학과", "생명공학과"], ["한미약품", "유한양행"], ["생명과학", "화학", "실험"], "대학원과 장기 연구 적성이 중요합니다."),
  role("clinical-research-associate", "pharma-rd", "임상시험 CRA", "바이오·제약", "임상시험 기관과 문서를 관리합니다.", ["간호학과", "생명공학과", "약학과"], ["제약회사", "CRO"], ["문서", "규정", "소통"], "출장과 일정 압박이 있을 수 있습니다."),
  role("regulatory-affairs", "pharma-rd", "RA 인허가 전문가", "바이오·제약", "의약품 허가 자료와 규제 대응을 담당합니다.", ["약학과", "생명공학과"], ["제약회사"], ["규정 이해", "문서", "영어"], "정확성과 규정 변화 대응이 필요합니다."),
  role("bio-process-engineer", "bio-manufacturing", "바이오 공정 엔지니어", "바이오·제약", "세포배양, 정제, 생산 공정을 관리합니다.", ["생명공학과", "화학공학과"], ["삼성바이오로직스", "셀트리온"], ["공정", "GMP", "문제해결"], "교대·현장근무 가능성을 확인해야 합니다."),
  role("quality-control", "bio-manufacturing", "QC 품질관리", "바이오·제약", "원료와 제품의 시험·분석을 수행합니다.", ["화학과", "생명공학과"], ["제약회사", "바이오기업"], ["분석", "정확성", "규정"], "반복 시험과 문서 업무가 많습니다."),
  role("quality-assurance", "bio-manufacturing", "QA 품질보증", "바이오·제약", "품질 시스템과 문서, 감사 대응을 관리합니다.", ["약학과", "생명공학과"], ["제약회사"], ["GMP", "문서", "커뮤니케이션"], "규정 책임과 문서 압박이 있습니다."),
  role("business-planner", "business-strategy", "경영기획자", "경영·경제", "사업계획, 예산, 전략 과제를 관리합니다.", ["경영학과", "경제학과"], ["대기업", "스타트업"], ["분석", "문서", "재무 이해"], "성과와 조직 조율 압박이 있습니다."),
  role("growth-marketer", "business-strategy", "그로스 마케터", "경영·경제", "데이터로 고객 획득과 매출 성장을 실험합니다.", ["경영학과", "데이터사이언스학과"], ["플랫폼 기업", "커머스"], ["데이터", "콘텐츠", "실험"], "성과 지표 압박과 빠른 실험 주기가 있습니다."),
  role("product-manager", "business-strategy", "서비스/제품 기획자", "경영·경제", "사용자 문제와 비즈니스 목표를 제품으로 연결합니다.", ["경영학과", "컴퓨터공학과"], ["IT기업", "스타트업"], ["문제정의", "협업", "데이터"], "결정 책임과 이해관계 조율이 많습니다."),
  role("financial-analyst", "finance-accounting", "금융 애널리스트", "경영·경제", "기업과 시장을 분석해 투자 판단 근거를 만듭니다.", ["경제학과", "경영학과"], ["증권사", "자산운용사"], ["회계", "재무", "자료분석"], "시장 변동과 장시간 업무 가능성이 있습니다."),
  role("accountant", "finance-accounting", "회계사/세무 전문가", "경영·경제", "회계감사, 세무, 재무 자문을 수행합니다.", ["경영학과", "회계학과"], ["회계법인", "기업 재무팀"], ["회계", "세법", "정확성"], "시험 기간과 시즌별 업무 강도가 높습니다."),
  role("risk-manager", "finance-accounting", "리스크 매니저", "경영·경제", "금융·기업 위험을 계량화하고 관리합니다.", ["경제학과", "통계학과"], ["금융회사", "보험회사"], ["통계", "재무", "규제"], "규제 변화와 책임 부담이 있습니다."),
  role("policy-analyst", "public-policy", "정책 분석가", "사회과학·정책", "사회 문제와 제도를 분석해 정책 대안을 만듭니다.", ["행정학과", "정치외교학과"], ["연구기관", "공공기관"], ["자료분석", "글쓰기", "법제 이해"], "성과가 장기적으로 나타나는 분야입니다."),
  role("public-officer", "public-policy", "공무원/공공기관 사무직", "법·공공", "행정서비스, 정책 집행, 기관 운영을 담당합니다.", ["행정학과", "법학과"], ["중앙부처", "공공기관"], ["문서", "법규", "민원 대응"], "시험 준비와 민원 스트레스를 봐야 합니다."),
  role("legal-specialist", "public-policy", "법무/컴플라이언스 담당자", "법·공공", "계약, 규제, 내부통제, 준법 업무를 담당합니다.", ["법학과", "경영학과"], ["기업 법무팀", "금융회사"], ["법 이해", "문서", "윤리"], "정확성과 책임 부담이 큽니다."),
  role("teacher", "education-counseling", "교사", "교육·심리", "수업, 평가, 생활지도, 학부모 소통을 수행합니다.", ["교육학과", "사범대학"], ["학교"], ["전공 지식", "수업 설계", "관계"], "임용 구조와 상담·생활지도 부담을 봐야 합니다."),
  role("school-counselor", "education-counseling", "상담교사/청소년상담사", "교육·심리", "학생의 정서, 진로, 학교생활을 상담합니다.", ["심리학과", "상담학과"], ["학교", "상담센터"], ["상담", "공감", "윤리"], "감정노동과 자격 경로를 확인해야 합니다."),
  role("edtech-designer", "education-counseling", "에듀테크 콘텐츠 기획자", "교육·심리", "디지털 학습 콘텐츠와 서비스를 설계합니다.", ["교육공학과", "컴퓨터공학과"], ["에듀테크 기업"], ["교육 설계", "콘텐츠", "데이터"], "교육성과와 사업성을 함께 봐야 합니다."),
  role("ux-designer", "product-design", "UX 디자이너", "디자인·콘텐츠", "사용자 리서치와 화면 흐름을 설계합니다.", ["디자인학과", "심리학과"], ["IT기업", "스타트업"], ["리서치", "프로토타입", "논리"], "포트폴리오와 협업 경험이 중요합니다."),
  role("ui-designer", "product-design", "UI 디자이너", "디자인·콘텐츠", "디지털 제품의 시각 인터페이스를 설계합니다.", ["시각디자인학과"], ["IT기업", "디자인 에이전시"], ["시각화", "디자인 시스템", "툴 활용"], "트렌드 변화와 피드백 수용이 중요합니다."),
  role("brand-designer", "product-design", "브랜드 디자이너", "디자인·콘텐츠", "브랜드 정체성과 시각물을 만듭니다.", ["시각디자인학과", "경영학과"], ["브랜드팀", "에이전시"], ["콘셉트", "시각표현", "기획"], "프로젝트 단위 성과 압박이 있습니다."),
  role("content-producer", "media-content", "콘텐츠 PD/프로듀서", "디자인·콘텐츠", "영상·채널·콘텐츠 프로젝트를 기획합니다.", ["미디어학과", "신문방송학과"], ["방송사", "콘텐츠 기업"], ["기획", "현장 실행", "커뮤니케이션"], "일정 변동과 주말·야간 촬영 가능성이 있습니다."),
  role("game-planner", "media-content", "게임 기획자", "디자인·콘텐츠", "게임 시스템과 콘텐츠 구조를 설계합니다.", ["게임학과", "컴퓨터공학과"], ["게임회사"], ["문서", "수치 설계", "사용자 이해"], "출시 일정과 라이브 운영 압박이 있습니다."),
  role("video-editor", "media-content", "영상 편집자", "디자인·콘텐츠", "영상 구조, 리듬, 후반작업을 담당합니다.", ["영상학과", "미디어학과"], ["콘텐츠 스튜디오"], ["편집툴", "스토리", "디테일"], "마감 압박과 프리랜서 소득 편차가 있습니다."),
  role("environment-consultant", "environment-energy", "환경 컨설턴트", "환경·농생명", "환경 영향, 규제, ESG 자료를 분석합니다.", ["환경공학과"], ["컨설팅사", "공공기관"], ["환경 규정", "자료분석", "보고서"], "현장조사와 문서 업무가 함께 있습니다."),
  role("energy-engineer", "environment-energy", "에너지 엔지니어", "전기·에너지", "전력, 신재생, 설비 효율을 관리합니다.", ["전기공학과", "에너지공학과"], ["에너지 기업", "공기업"], ["전기", "설비", "안전"], "현장 안전과 자격증 경로를 확인해야 합니다."),
  role("climate-data-analyst", "environment-energy", "기후 데이터 분석가", "환경·농생명", "기후·에너지 데이터를 분석해 의사결정을 돕습니다.", ["환경공학과", "데이터사이언스학과"], ["연구기관", "기후테크 기업"], ["데이터", "기후 이해", "통계"], "도메인과 데이터 역량을 함께 갖춰야 합니다."),
  role("food-quality-manager", "food-agriculture", "식품 품질관리자", "환경·농생명", "식품 안전, 품질 시험, 위생 기준을 관리합니다.", ["식품공학과"], ["식품회사"], ["미생물", "품질", "규정"], "공장·현장 근무 가능성을 확인해야 합니다."),
  role("smart-farm-engineer", "food-agriculture", "스마트팜 엔지니어", "환경·농생명", "농업 환경제어와 자동화 시스템을 운영합니다.", ["농생명공학과", "전기공학과"], ["스마트팜 기업"], ["센서", "제어", "농업 이해"], "현장성과 기술 융합 역량이 필요합니다."),
  role("agri-bio-researcher", "food-agriculture", "농생명 연구원", "환경·농생명", "작물, 종자, 미생물, 식품 원료를 연구합니다.", ["농생명공학과", "생명공학과"], ["연구소", "식품기업"], ["생명과학", "실험", "데이터"], "대학원과 장기 연구 적성을 봐야 합니다.")
];
