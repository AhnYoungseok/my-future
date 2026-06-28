import type { RecommendationScore, StudentProfile } from "@/types/career";

const average = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);

export function buildCareerProfileSummary(profile: StudentProfile) {
  const strongSubjects = Object.entries(profile.subjects)
    .filter(([, value]) => value >= 4)
    .map(([subject]) => subject)
    .slice(0, 5);
  const riskSubjects = Object.entries(profile.subjects)
    .filter(([, value]) => value <= 2)
    .map(([subject]) => subject)
    .slice(0, 5);
  const peopleFit = average([profile.traits.peopleFacing, profile.values.contribution, profile.traits.responsibility]);
  const techFit = average([profile.interests.ai, profile.interests.semiconductor, profile.traits.logic]);
  const researchFit = average([profile.interests.research, profile.traits.experimentRetry, profile.subjects.화학, profile.subjects.생명과학]);

  return {
    headline: techFit >= peopleFit && techFit >= researchFit ? "기술·문제해결 중심형" : researchFit >= peopleFit ? "탐구·연구 중심형" : "사람·전문직 중심형",
    strongSubjects: strongSubjects.length ? strongSubjects : ["아직 뚜렷한 강점 과목이 없습니다."],
    riskSubjects: riskSubjects.length ? riskSubjects : ["치명적인 위험 과목은 아직 뚜렷하지 않습니다."],
    preferredLifestyle: profile.values.workLife >= 4 ? "워라밸과 가족시간을 중시합니다." : "성장성과 전문성 확보를 위해 일정 수준의 강도를 감수할 수 있습니다.",
    avoidEnvironment: profile.lifestyle.nightWeekend <= 2 ? "야간·주말근무가 잦은 환경은 신중히 봐야 합니다." : "특수 근무환경도 조건에 따라 검토할 수 있습니다.",
    parentMisread: "성적 가능성과 진로 적합성은 다릅니다. 합격 가능성만으로 학과를 고르면 대학 이후 만족도가 낮아질 수 있습니다.",
    counselorCheck: "과목 세특, 탐구활동, 실제 직무 이해가 추천 계열과 이어지는지 확인해야 합니다."
  };
}

export function buildTenYearScenario(topMajor?: RecommendationScore, topJob?: RecommendationScore) {
  const majorName = topMajor?.name || "관심 학과";
  const jobName = topJob?.name || "관련 직업";
  return [
    `고1~고3: ${majorName}의 핵심 과목을 정하고 독서, 탐구, 동아리 활동을 연결합니다.`,
    "대학 1~2학년: 전공 기초와 실제 직무를 비교하며 맞지 않는 지점을 빨리 확인합니다.",
    "대학 3~4학년: 인턴, 연구실, 프로젝트, 자격증 중 하나를 선택해 증거를 만듭니다.",
    `졸업 직후: ${jobName} 진입 경로와 대안 직무를 동시에 준비합니다.`,
    "3년차: 직무 전문성, 조직문화, 생활 리듬이 맞는지 재평가합니다.",
    "10년차: 전문직, 연구직, 관리직, 창업, 공공기관 등 확장 경로를 선택합니다."
  ];
}

export function getConfidenceLabel(results: RecommendationScore[]) {
  const spread = (results[0]?.fitScore || 0) - (results[4]?.fitScore || 0);
  if (spread >= 18) return "High Confidence";
  if (spread >= 9) return "Medium Confidence";
  return "Low Confidence";
}
