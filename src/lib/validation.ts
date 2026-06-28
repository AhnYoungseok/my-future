import type { UniversityMajor, VerificationStatus } from "@/types/career";

export function getVerificationLabel(status?: VerificationStatus, verified?: boolean) {
  if (verified || status === "verified") return "공식 확인";
  if (status === "candidate") return "후보";
  return "검증 필요";
}

export function getVerificationTone(status?: VerificationStatus, verified?: boolean) {
  if (verified || status === "verified") return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (status === "candidate") return "bg-blue-50 text-blue-800 border-blue-200";
  return "bg-amber-50 text-amber-900 border-amber-200";
}

export function asNeedsReview(item: UniversityMajor): UniversityMajor {
  return {
    ...item,
    verified: false,
    verificationStatus: "needs_review",
    warning: item.warning || "현재 표시는 탐색용 후보입니다. 실제 설치 학과 여부는 대학알리미와 입학처에서 확인해야 합니다."
  };
}
