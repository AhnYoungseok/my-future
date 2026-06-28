export function buildMajorCareerGraph() {
  return {
    status: "planned",
    rule: "MajorCluster -> JobRole -> Company 순서로 연결하고 검증되지 않은 연결은 후보로 표시"
  };
}
