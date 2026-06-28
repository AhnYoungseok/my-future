export type Category =
  | "메디컬"
  | "보건의료"
  | "반도체"
  | "AI·소프트웨어"
  | "바이오·제약"
  | "기계·로봇"
  | "전기·에너지"
  | "화학·소재"
  | "미래차·배터리"
  | "경영·경제"
  | "교육·심리"
  | "교육"
  | "법·공공"
  | "공공·행정"
  | "디자인·콘텐츠"
  | "환경·농생명"
  | "사회과학·정책"
  | "국제·외교";

export type RiskLevel = "낮음" | "보통" | "높음" | "매우 높음";
export type ScoreLevel = 1 | 2 | 3 | 4 | 5;
export type SalaryLevel = "낮음" | "보통" | "높은 편" | "매우 높은 편" | "편차 큼";
export type VerificationStatus = "verified" | "candidate" | "needs_review";
export type DiagnosisMode = "quick" | "standard" | "deep";

export type DataSourceMeta = {
  dataSource: string;
  sourceYear?: number;
  verified: boolean;
  verificationStatus: VerificationStatus;
  lastCheckedAt?: string;
  warning?: string;
};

export type SalaryProfile = {
  salaryLevel: SalaryLevel;
  entry: string;
  midCareer: string;
  senior: string;
  topPotential: string;
  incomeStability: ScoreLevel;
  incomeVariability: ScoreLevel;
  note: string;
};

export type AdmissionProfile = {
  competitivenessLevel: "최상위권" | "상위권" | "중상위권" | "중위권" | "변동 큼";
  schoolRecordRange: string;
  csatRange: string;
  keySubjects: string[];
  recommendedPreparation: string[];
  alternativePaths: string[];
  checkPoints: string[];
  officialCheckLinks: {
    adiga: string;
    universityAdmissions: string;
    academyInfo: string;
  };
  note: string;
};

export type LifestyleProfile = {
  workIntensity: ScoreLevel;
  workLifeBalance: ScoreLevel;
  stressLevel: ScoreLevel;
  physicalFatigue: ScoreLevel;
  emotionalLabor: ScoreLevel;
  nightShiftPossibility: ScoreLevel;
  weekendWorkPossibility: ScoreLevel;
  familyTime: ScoreLevel;
  autonomy: ScoreLevel;
  socialRecognition: ScoreLevel;
  burnoutRisk: ScoreLevel;
  description: string;
};

export type RiskItem = {
  name: string;
  level: RiskLevel;
  description: string;
  mitigation: string;
};

export type ExternalLinks = {
  officialSearch?: string;
  careerInfo?: string;
  jobSearch?: string;
  salaryReference?: string;
  youtubeSearch?: string;
};

export type Major = {
  id: string;
  name: string;
  category: Category;
  summary: string;
  description: string;
  keywords: string[];
  coreSubjects: string[];
  highSchoolRecommendedSubjects: string[];
  difficultSubjects: string[];
  requiredAptitudes: string[];
  suitableTraits: string[];
  unsuitableTraits: string[];
  relatedUniversityMajors: string[];
  relatedJobs: string[];
  relatedCompanies: string[];
  admissionProfile: AdmissionProfile;
  salaryProfile: SalaryProfile;
  lifestyleProfile: LifestyleProfile;
  pros: string[];
  cons: string[];
  risks: RiskItem[];
  futureOutlook: {
    growthFactors: string[];
    threatFactors: string[];
    tenYearComment: string;
  };
  highSchoolRoadmap: {
    grade10: string[];
    grade11: string[];
    grade12: string[];
  };
  parentAdvice: string;
  counselorAdvice: string;
  externalLinks: ExternalLinks;
};

export type Job = {
  id: string;
  name: string;
  category: Category;
  summary: string;
  description: string;
  dailyWork: string[];
  requiredAptitudes: string[];
  relatedMajors: string[];
  relatedCompanies: string[];
  requiredLicense?: string[];
  graduateSchoolRecommended?: boolean;
  salaryProfile: SalaryProfile;
  lifestyleProfile: LifestyleProfile;
  pros: string[];
  cons: string[];
  risks: RiskItem[];
  futureOutlook: {
    growthFactors: string[];
    threatFactors: string[];
    tenYearComment: string;
  };
  highSchoolPreparation: {
    subjects: string[];
    readings: string[];
    activities: string[];
    researchTopics: string[];
  };
  externalLinks: ExternalLinks;
};

export type University = {
  id: string;
  name: string;
  aliases?: string[];
  region: string;
  city?: string;
  campus?: string;
  type: "국립" | "공립" | "사립" | "특별법법인" | "특수" | "기타";
  schoolType?: "일반대학" | "전문대학" | "교육대학" | "산업대학" | "사이버대학" | "기술대학" | "각종학교" | "대학원대학" | "기타";
  homepageUrl: string;
  admissionUrl: string;
  academyInfoUrl?: string;
  adigaUrl?: string;
  dataSource?: string;
  sourceYear?: number;
  verified?: boolean;
  verificationStatus?: VerificationStatus;
  lastCheckedAt?: string;
};

export type UniversityMajor = {
  id: string;
  universityId: string;
  majorId: string;
  universityName: string;
  departmentName: string;
  region: string;
  departmentUrl?: string;
  admissionUrl?: string;
  curriculumUrl?: string;
  isContractMajor?: boolean;
  contractCompany?: string;
  scholarshipInfo?: string;
  employmentLinked?: boolean;
  notes?: string;
  dataSource?: string;
  sourceYear?: number;
  verified?: boolean;
  verificationStatus?: VerificationStatus;
  warning?: string;
};

export type Department = DataSourceMeta & {
  id: string;
  universityId: string;
  universityName: string;
  departmentName: string;
  normalizedMajorName: string;
  majorClusterId?: string;
  region: string;
  campus?: string;
  schoolType: string;
  dayNight?: "주간" | "야간" | "주야간" | "기타";
  departmentStatus?: "재학" | "폐과" | "모집중지" | "명칭변경" | "확인필요";
  standardCategoryLarge?: string;
  standardCategoryMedium?: string;
  standardCategorySmall?: string;
  departmentFeature?: string;
  departmentUrl?: string;
  curriculumUrl?: string;
  admissionUrl?: string;
  officialRecruitmentUrl?: string;
  admissionQuota?: number;
  tuitionNote?: string;
  employmentRateNote?: string;
  competitionRateNote?: string;
  isMedical?: boolean;
  isSemiconductor?: boolean;
  isContractMajor?: boolean;
  contractCompany?: string;
  scholarshipInfo?: string;
  employmentLinked?: boolean;
};

export type MajorCluster = {
  id: string;
  name: string;
  category: Category;
  aliases: string[];
  keywords: string[];
  description: string;
  coreSubjects: string[];
  highSchoolSubjects: string[];
  relatedDepartments: string[];
  relatedJobs: string[];
  relatedNcsCodes: string[];
  relatedCompanies: string[];
  pros: string[];
  cons: string[];
  risks: RiskItem[];
  salaryProfile: SalaryProfile;
  lifestyleProfile: LifestyleProfile;
  futureOutlook: {
    growthFactors: string[];
    threatFactors: string[];
    tenYearComment: string;
  };
  roadmaps: {
    grade10: string[];
    grade11: string[];
    grade12: string[];
  };
};

export type CareerField = {
  id: string;
  name: string;
  category: Category;
  description: string;
  occupationIds: string[];
};

export type Occupation = {
  id: string;
  fieldId: string;
  name: string;
  description: string;
  jobRoleIds: string[];
};

export type JobRole = DataSourceMeta & {
  id: string;
  occupationId: string;
  name: string;
  category: Category;
  summary: string;
  roleLevel: "입문" | "실무" | "전문" | "관리" | "연구";
  dailyTasks: string[];
  requiredSkills: string[];
  relatedMajors: string[];
  relatedCompanies: string[];
  salaryBand: string;
  workStyle: string;
  risks: RiskItem[];
  futureOutlook: string;
  highSchoolPreparation: string[];
  externalLinks: ExternalLinks;
};

export type FitScore = {
  total: number;
  interestFit: number;
  academicFit: number;
  aptitudeFit: number;
  valueFit: number;
  lifestyleFit: number;
  marketOutlook: number;
  admissionReality: number;
  riskToleranceFit: number;
  alternativePathStrength: number;
  confidence: "High Confidence" | "Medium Confidence" | "Low Confidence";
};

export type Company = {
  id: string;
  name: string;
  industry: string;
  category: Category;
  homepageUrl: string;
  recruitUrl?: string;
  dartSearchUrl?: string;
  relatedMajors: string[];
  relatedJobs: string[];
  jobKeywords: string[];
  salaryNote: string;
  lifestyleNote: string;
  pros: string[];
  cons: string[];
  risks: RiskItem[];
};

export type ComparisonPreset = {
  id: string;
  title: string;
  items: string[];
  columns: {
    label: string;
    values: string[];
  }[];
  finalComment: string;
};

export type StudentProfile = {
  interests: Record<string, number>;
  subjects: Record<string, number>;
  traits: Record<string, number>;
  values: Record<string, number>;
  lifestyle: Record<string, number>;
};

export type RecommendationScore = {
  id: string;
  name: string;
  fitScore: number;
  academicScore: number;
  careerScore: number;
  marketScore: number;
  lifestyleScore: number;
  riskScore: number;
  reason: string;
  caution: string;
  alternatives: string[];
};
