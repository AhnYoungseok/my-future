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
