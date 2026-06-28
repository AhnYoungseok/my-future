const enc = (value: string) => encodeURIComponent(value);

export function createYoutubeSearchUrl(keyword: string) {
  return `https://www.youtube.com/results?search_query=${enc(keyword)}`;
}

export function createGoogleSearchUrl(keyword: string) {
  return `https://www.google.com/search?q=${enc(keyword)}`;
}

export function createWork24SearchUrl(keyword: string) {
  return `https://www.work24.go.kr/cm/main.do?keyword=${enc(keyword)}`;
}

export function createSaraminSearchUrl(keyword: string) {
  return `https://www.saramin.co.kr/zf_user/search?searchword=${enc(keyword)}`;
}

export function createJobKoreaSearchUrl(keyword: string) {
  return `https://www.jobkorea.co.kr/Search/?stext=${enc(keyword)}`;
}

export function createDartSearchUrl(companyName: string) {
  return `https://dart.fss.or.kr/dsab007/search.ax?textCrpNm=${enc(companyName)}`;
}

export function createUniversitySearchUrl(universityName: string, majorName: string) {
  return createGoogleSearchUrl(`${universityName} ${majorName} 학과 홈페이지 입학처 교육과정`);
}

export function createAdigaSearchUrl(keyword: string) {
  return `https://www.adiga.kr/PageLinkAll.do?link=/kcue/ast/eip/eis/inf/sjinf/eipSjinfGnrl.do&keyword=${enc(keyword)}`;
}

export function createAcademyInfoSearchUrl(keyword: string) {
  return createGoogleSearchUrl(`site:academyinfo.go.kr ${keyword} 대학알리미 학과`);
}

export function createCareerNetSearchUrl(keyword: string) {
  return createGoogleSearchUrl(`site:career.go.kr ${keyword} 커리어넷`);
}

export function createUniversityAdmissionSearchUrl(universityName: string, keyword = "모집요강 입시결과") {
  return createGoogleSearchUrl(`${universityName} 입학처 ${keyword}`);
}

export function createDepartmentOfficialSearchUrl(universityName: string, departmentName: string) {
  return createGoogleSearchUrl(`${universityName} ${departmentName} 공식 학과 홈페이지 교육과정`);
}
