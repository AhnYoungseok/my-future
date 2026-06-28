import type { UniversityMajor } from "@/types/career";

export function validateUniversityMajorLinks(items: UniversityMajor[]) {
  return items.map((item) => ({
    ...item,
    verified: item.verified === true,
    verificationStatus: item.verified ? "verified" : "needs_review",
    warning: item.verified ? undefined : item.warning || "공식 대학알리미/입학처 데이터로 검증 필요"
  }));
}
