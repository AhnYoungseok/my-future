import type { Job, Major, RecommendationScore, StudentProfile } from "@/types/career";

export const defaultStudentProfile: StudentProfile = {
  interests: {
    medical: 4,
    semiconductor: 4,
    ai: 3,
    bio: 4,
    helping: 4,
    stability: 4,
    growth: 4,
    research: 3
  },
  subjects: {
    국어: 3,
    수학: 4,
    영어: 4,
    물리: 3,
    화학: 4,
    생명과학: 4,
    지구과학: 3,
    "정보/코딩": 3,
    "사회/경제": 3,
    "윤리/철학": 3
  },
  traits: {
    longStudy: 4,
    experimentRetry: 4,
    peopleFacing: 4,
    responsibility: 4,
    changeTolerance: 3,
    competition: 3,
    predictability: 4,
    logic: 4
  },
  values: {
    salary: 4,
    stability: 4,
    prestige: 4,
    contribution: 4,
    workLife: 3,
    growth: 4,
    startup: 2,
    expertise: 5,
    global: 3,
    family: 3
  },
  lifestyle: {
    nightWeekend: 3,
    longTraining: 4,
    corporatePressure: 3,
    safetyResponsibility: 4,
    regionalMove: 3,
    specialEnvironment: 4
  }
};

const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));
const avg = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);
const scale = (value: number) => (value / 5) * 100;

function categoryInterest(profile: StudentProfile, category: string) {
  if (category === "메디컬") return avg([profile.interests.medical, profile.interests.helping, profile.interests.stability, profile.interests.bio]);
  if (category === "반도체") return avg([profile.interests.semiconductor, profile.interests.growth, profile.traits.logic, profile.traits.changeTolerance]);
  if (category === "AI·소프트웨어") return avg([profile.interests.ai, profile.traits.logic, profile.values.growth]);
  if (category === "바이오·제약") return avg([profile.interests.bio, profile.interests.research, profile.subjects.생명과학, profile.subjects.화학]);
  return avg([profile.values.growth, profile.values.expertise]);
}

function subjectScore(profile: StudentProfile, subjects: string[]) {
  return scale(avg(subjects.map((subject) => profile.subjects[subject] || 3)));
}

function lifestyleMatch(profile: StudentProfile, item: Major | Job) {
  let score = 78;
  if (item.category === "메디컬") {
    score += (profile.lifestyle.longTraining - 3) * 7;
    score += (profile.lifestyle.safetyResponsibility - 3) * 7;
    score += (profile.traits.peopleFacing - 3) * 6;
    score -= (5 - profile.lifestyle.nightWeekend) * item.lifestyleProfile.nightShiftPossibility * 2;
  }
  if (item.category === "반도체") {
    score += (profile.lifestyle.specialEnvironment - 3) * 7;
    score += (profile.lifestyle.corporatePressure - 3) * 6;
    score += (profile.traits.changeTolerance - 3) * 6;
  }
  if (item.category === "AI·소프트웨어") {
    score += (profile.traits.logic - 3) * 7;
    score += (profile.values.growth - 3) * 6;
  }
  score -= item.lifestyleProfile.burnoutRisk * (5 - profile.values.workLife);
  return clamp(score);
}

export function calculateRiskAdjustment(profile: StudentProfile, item: Major | Job) {
  let penalty = 0;
  if (item.category === "메디컬" && profile.lifestyle.longTraining <= 2) penalty += 18;
  if (item.category === "메디컬" && profile.traits.peopleFacing <= 2) penalty += 15;
  if (item.category === "반도체" && profile.subjects.물리 <= 2) penalty += 16;
  if (item.category === "반도체" && profile.traits.changeTolerance <= 2) penalty += 12;
  if (item.category === "AI·소프트웨어" && profile.subjects["정보/코딩"] <= 2) penalty += 14;
  if (item.lifestyleProfile.burnoutRisk >= 4 && profile.values.workLife >= 4) penalty += 10;
  return clamp(100 - penalty);
}

export function calculateMajorFit(profile: StudentProfile, major: Major): RecommendationScore {
  const interest = scale(categoryInterest(profile, major.category));
  const academicScore = subjectScore(profile, major.highSchoolRecommendedSubjects);
  const traitScore = scale(avg([profile.traits.longStudy, profile.traits.responsibility, profile.traits.logic, profile.traits.experimentRetry]));
  const valueScore = scale(avg([profile.values.salary, profile.values.stability, profile.values.expertise, profile.values.growth]));
  const marketScore = major.category === "메디컬" || major.category === "반도체" || major.category === "AI·소프트웨어" ? 84 : 74;
  const lifestyleScore = lifestyleMatch(profile, major);
  const riskScore = calculateRiskAdjustment(profile, major);
  const fitScore = clamp(interest * 0.2 + academicScore * 0.2 + traitScore * 0.15 + valueScore * 0.15 + 75 * 0.1 + marketScore * 0.1 + lifestyleScore * 0.05 + riskScore * 0.05);
  return {
    id: major.id,
    name: major.name,
    fitScore,
    academicScore: clamp(academicScore),
    careerScore: clamp((interest + valueScore) / 2),
    marketScore,
    lifestyleScore,
    riskScore,
    reason: `${major.category} 관심, 추천 과목 적합도, 가치관을 종합해 ${major.name} 탐색 우선순위를 계산했습니다.`,
    caution: major.unsuitableTraits[0] || "전공 이미지와 실제 직무 차이를 확인하세요.",
    alternatives: major.category === "메디컬" ? ["약학과", "의생명공학과", "간호학과"] : major.category === "반도체" ? ["전자공학과", "신소재공학과", "데이터사이언스학과"] : ["컴퓨터공학과", "생명공학과", "화학공학과"]
  };
}

export function calculateJobFit(profile: StudentProfile, job: Job): RecommendationScore {
  const interest = scale(categoryInterest(profile, job.category));
  const academicScore = subjectScore(profile, job.highSchoolPreparation.subjects.length ? job.highSchoolPreparation.subjects : ["수학", "영어"]);
  const careerScore = scale(avg([profile.values.expertise, profile.values.growth, profile.values.stability]));
  const marketScore = job.category === "반도체" || job.category === "AI·소프트웨어" ? 86 : job.category === "메디컬" ? 83 : 74;
  const lifestyleScore = lifestyleMatch(profile, job);
  const riskScore = calculateRiskAdjustment(profile, job);
  const fitScore = clamp(interest * 0.2 + academicScore * 0.2 + careerScore * 0.25 + marketScore * 0.15 + lifestyleScore * 0.1 + riskScore * 0.1);
  return {
    id: job.id,
    name: job.name,
    fitScore,
    academicScore: clamp(academicScore),
    careerScore: clamp(careerScore),
    marketScore,
    lifestyleScore,
    riskScore,
    reason: `${job.name}은 관심 분야, 과목, 생활방식 허용도를 함께 반영해 산출했습니다.`,
    caution: job.cons[0],
    alternatives: job.relatedMajors
  };
}

export function getTopRecommendedMajors(profile: StudentProfile, majors: Major[]) {
  return majors.map((major) => calculateMajorFit(profile, major)).sort((a, b) => b.fitScore - a.fitScore);
}

export function getTopRecommendedJobs(profile: StudentProfile, jobs: Job[]) {
  return jobs.map((job) => calculateJobFit(profile, job)).sort((a, b) => b.fitScore - a.fitScore);
}
