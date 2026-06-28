export type Category =
  | "메디컬"
  | "반도체"
  | "AI·소프트웨어"
  | "바이오·제약"
  | "미래차·배터리"
  | "경영·경제"
  | "교육"
  | "공공·행정";

export type RiskLevel = "낮음" | "보통" | "높음" | "매우 높음";
export type ScoreLevel = 1 | 2 | 3 | 4 | 5;
export type SalaryLevel = "낮음" | "보통" | "높은 편" | "매우 높은 편" | "편차 큼";

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
  region: string;
  type: "국립" | "사립" | "공립" | "특수";
  homepageUrl: string;
  admissionUrl: string;
  academyInfoUrl?: string;
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
