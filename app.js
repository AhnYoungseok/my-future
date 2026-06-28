const paths = [
  {
    id: "medicine",
    domain: "medical",
    label: "메디컬 핵심",
    title: "의예과·의학과",
    subtitle: "환자 진료, 임상 연구, 전문의, 공공의료까지 이어지는 장기 경로",
    majors: ["의예과", "의학과", "의과학", "의료정보"],
    subjects: ["biology", "chemistry", "math", "english"],
    subjectText: "생명과학, 화학, 수학, 영어",
    years: "의대 6년 + 인턴/전공의 4~5년",
    salary: { low: 7500, mid: 10000, high: 14000, text: "전문의 예시 1.0억 내외~1.4억+", source: "대입정보포털 직업정보 2023" },
    stability: 5,
    study: 5,
    salaryWeight: 5,
    care: 5,
    gradient: "linear-gradient(135deg, #2f8f7b, #e76f51)",
    jobs: ["일반의", "전문의", "의과학자", "병원 경영/정책", "의료 AI 자문"],
    universities: [
      ["서울대 의과대학", "https://medicine.snu.ac.kr/"],
      ["연세대 의과대학", "https://medicine.yonsei.ac.kr/"],
      ["성균관대 의과대학", "https://www.skkumed.ac.kr/"],
      ["가톨릭대 의과대학", "https://medicine.catholic.ac.kr/"]
    ],
    companies: [
      ["서울대병원 채용", "https://www.snuh.org/recruit/"],
      ["세브란스병원", "https://sev.severance.healthcare/"],
      ["삼성서울병원 채용", "https://www.samsunghospital.com/home/recruit/"],
      ["메디잡 의료 채용", "https://www.medijob.cc/"]
    ],
    videos: [
      ["서울대 의과대학 공식 유튜브", "https://www.youtube.com/channel/UCwZlAOvYyswqKD7A9aucOEQ"],
      ["서울대 의과대학 홍보 영상", "https://www.youtube.com/watch?v=J31RidnhAKI"]
    ],
    live: [
      ["대입정보포털 어디가", "https://www.adiga.kr/"],
      ["커리어넷 의사 직업정보", "https://www.career.go.kr/cloud/m/job/view?seq=25"],
      ["대입정보포털 이비인후과의사 임금 예시", "https://www.adiga.kr/jbp/jnf/jobInfoDetail.do?menuId=PCJBPJNF2000&searchCrCd=K000001108&searchCrSeClsfCd=D999"]
    ],
    cautions: "최상위 성적 경쟁, 긴 수련 기간, 환자 안전 책임, 전공별 근무 강도 차이를 함께 봐야 합니다."
  },
  {
    id: "biomed",
    domain: "convergence",
    label: "메디컬 대안",
    title: "의생명·의공학·의료AI",
    subtitle: "의료를 좋아하지만 진료직만 고집하지 않을 때 넓어지는 연구·산업 경로",
    majors: ["의생명과학", "생명공학", "의공학", "의료정보학", "바이오데이터"],
    subjects: ["biology", "chemistry", "math", "coding"],
    subjectText: "생명과학, 화학, 수학, 코딩",
    years: "학부 4년 + 석사/박사 선택",
    salary: { low: 3800, mid: 6200, high: 9500, text: "연구·기업 직무별 편차 큼", source: "기업/직무별 채용공고 확인" },
    stability: 3,
    study: 4,
    salaryWeight: 3,
    care: 4,
    gradient: "linear-gradient(135deg, #4f7cac, #2f8f7b)",
    jobs: ["의과학 연구원", "의료기기 R&D", "임상 데이터 분석가", "바이오 품질/RA", "디지털헬스 PM"],
    universities: [
      ["서울대 대학원 의과학과", "https://biomed.snu.ac.kr/"],
      ["연세대 의생명과학부", "https://sbsi.yuhs.ac/"],
      ["연세대 의료기기산업학과", "https://mra.yonsei.ac.kr/"],
      ["가톨릭대 의과학과", "https://gs-bms.catholic.ac.kr/"]
    ],
    companies: [
      ["삼성바이오로직스 채용", "https://samsungbiologics.com/careers"],
      ["셀트리온 채용", "https://recruit.celltrion.com/"],
      ["루닛 채용", "https://www.lunit.io/en/careers"],
      ["워크넷 바이오 채용", "https://www.work.go.kr/empInfo/empInfoSrch/list/dtlEmpSrchList.do?keyword=%EB%B0%94%EC%9D%B4%EC%98%A4"]
    ],
    videos: [
      ["한국보건산업진흥원 유튜브", "https://www.youtube.com/@KHIDIofficial"],
      ["루닛 공식 유튜브", "https://www.youtube.com/@LunitInc"]
    ],
    live: [
      ["대학알리미 학과/취업률", "https://www.academyinfo.go.kr/"],
      ["임금직업포털", "https://www.wagework.go.kr/"],
      ["사람인 연봉정보", "https://www.saramin.co.kr/zf_user/salaries"]
    ],
    cautions: "학부만으로는 직무가 넓게 갈라집니다. 연구직은 대학원, 산업직은 인턴·프로젝트 포트폴리오가 중요합니다."
  },
  {
    id: "semiconductor-system",
    domain: "semiconductor",
    label: "반도체 핵심",
    title: "반도체시스템공학",
    subtitle: "설계·소자·공정·패키징을 직접 겨냥하는 계약학과/특성화 경로",
    majors: ["반도체시스템공학", "반도체공학", "인공지능반도체", "나노반도체"],
    subjects: ["physics", "math", "coding", "chemistry"],
    subjectText: "물리, 수학, 코딩, 화학",
    years: "학부 4년 + 인턴/석사 선택",
    salary: { low: 6000, mid: 8000, high: 12000, text: "중위 8,000만원 예시", source: "대입정보포털 직업정보 2023" },
    stability: 4,
    study: 4,
    salaryWeight: 5,
    care: 1,
    gradient: "linear-gradient(135deg, #7661a8, #f5bf50)",
    jobs: ["반도체 설계", "공정기술", "소자개발", "품질/수율", "패키징", "장비/FAE"],
    universities: [
      ["성균관대 반도체시스템공학과", "https://semiconductor.skku.edu/"],
      ["연세대 시스템반도체공학과", "https://system.yonsei.ac.kr/"],
      ["한양대 반도체공학과", "https://semi.hanyang.ac.kr/"],
      ["고려대 반도체공학과", "https://se.korea.ac.kr/"]
    ],
    companies: [
      ["삼성전자 DS 채용", "https://www.samsung-dsrecruit.com/"],
      ["SK hynix 채용", "https://recruit.skhynix.com/"],
      ["ASML Careers", "https://www.asml.com/en/careers"],
      ["DB하이텍 채용", "https://www.dbhitek.com/"]
    ],
    videos: [
      ["삼성전자 반도체 유튜브", "https://www.youtube.com/@SamsungSemiconductor"],
      ["SK하이닉스 유튜브", "https://www.youtube.com/@SKhynix"],
      ["워크넷 반도체공학기술자 영상", "https://www.data.go.kr/data/15120091/fileData.do?recommendDataYn=Y"]
    ],
    live: [
      ["대입정보포털 반도체공학기술자", "https://www.adiga.kr/jbp/jnf/jobInfoDetail.do?menuId=PCJBPJNF2000&searchCrCd=K000001184&searchCrSeClsfCd=D999"],
      ["커리어넷 반도체공학기술자", "https://www.career.go.kr/cloud/w/job/view?seq=157"],
      ["교육부 반도체 인재양성", "https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=339&boardSeq=92091&lev=0&m=020402&opType=N&page=1&s=moe"]
    ],
    cautions: "산업 사이클과 기업별 채용 규모 변동이 있습니다. 계약학과 조건, 장학 의무, 졸업 후 진로 제한을 꼭 확인해야 합니다."
  },
  {
    id: "ee-material",
    domain: "semiconductor",
    label: "반도체 확장",
    title: "전기전자·신소재·화공",
    subtitle: "반도체뿐 아니라 배터리, 디스플레이, 로봇, 에너지로도 확장 가능한 공학 기반",
    majors: ["전기전자공학", "전자공학", "신소재공학", "화학공학", "기계공학"],
    subjects: ["physics", "math", "chemistry", "coding"],
    subjectText: "물리, 수학, 화학, 코딩",
    years: "학부 4년 + 직무별 인턴/석사",
    salary: { low: 4200, mid: 6100, high: 9000, text: "공학기술 직무 중상위권", source: "임금직업포털/기업공고 확인" },
    stability: 4,
    study: 3,
    salaryWeight: 4,
    care: 1,
    gradient: "linear-gradient(135deg, #4f7cac, #f5bf50)",
    jobs: ["회로설계", "공정/장비", "소재개발", "품질", "기술영업", "데이터 엔지니어"],
    universities: [
      ["서울대 전기·정보공학부", "https://ece.snu.ac.kr/"],
      ["연세대 반도체시스템공학부", "https://yssemi.yonsei.ac.kr/"],
      ["한양대 나노반도체공학과", "https://nanosemi.hanyang.ac.kr/"],
      ["고려대 반도체시스템공학과", "https://nanosemi.korea.ac.kr/"]
    ],
    companies: [
      ["삼성전자 채용", "https://www.samsungcareers.com/"],
      ["LG Careers", "https://careers.lg.com/"],
      ["현대자동차 채용", "https://talent.hyundai.com/"],
      ["원티드 반도체 채용", "https://www.wanted.co.kr/search?query=%EB%B0%98%EB%8F%84%EC%B2%B4"]
    ],
    videos: [
      ["서울대 ECE 세미나", "https://ece.snu.ac.kr/"],
      ["ASML 공식 유튜브", "https://www.youtube.com/@ASMLcompany"]
    ],
    live: [
      ["임금직업포털", "https://www.wagework.go.kr/"],
      ["워크넷 채용정보", "https://www.work.go.kr/empInfo/empInfoSrch/list/dtlEmpSrchList.do"],
      ["대학알리미", "https://www.academyinfo.go.kr/"]
    ],
    cautions: "전공 이름보다 직무 역량이 중요합니다. 회로, 공정, 소재, 데이터 중 어느 축으로 포트폴리오를 만들지 정해야 합니다."
  },
  {
    id: "nursing-health",
    domain: "medical",
    label: "보건의료",
    title: "간호·보건·임상지원",
    subtitle: "의료 현장과 가까우면서 비교적 빠르게 전문직 면허/취업으로 이어지는 경로",
    majors: ["간호학", "임상병리", "물리치료", "방사선", "보건행정"],
    subjects: ["biology", "chemistry", "english"],
    subjectText: "생명과학, 화학, 영어",
    years: "학부 4년 + 국가시험/면허",
    salary: { low: 3200, mid: 4800, high: 7000, text: "기관·교대·경력별 편차 큼", source: "병원 채용공고 확인" },
    stability: 4,
    study: 3,
    salaryWeight: 3,
    care: 5,
    gradient: "linear-gradient(135deg, #2f8f7b, #4f7cac)",
    jobs: ["간호사", "임상병리사", "물리치료사", "방사선사", "보건행정"],
    universities: [
      ["가톨릭대 간호대학", "https://nursing.catholic.ac.kr/"],
      ["연세대 간호대학", "https://nursing.yonsei.ac.kr/"],
      ["서울대 간호대학", "https://nursing.snu.ac.kr/"],
      ["대학알리미 학과 검색", "https://www.academyinfo.go.kr/"]
    ],
    companies: [
      ["서울대병원 채용", "https://www.snuh.org/recruit/"],
      ["세브란스병원", "https://sev.severance.healthcare/"],
      ["메디잡", "https://www.medijob.cc/"],
      ["워크넷 의료 채용", "https://www.work.go.kr/empInfo/empInfoSrch/list/dtlEmpSrchList.do?keyword=%EC%9D%98%EB%A3%8C"]
    ],
    videos: [
      ["서울대병원 유튜브", "https://www.youtube.com/@snuh"],
      ["세브란스 유튜브", "https://www.youtube.com/@SeveranceHospital"]
    ],
    live: [
      ["커리어넷 직업정보", "https://www.career.go.kr/"],
      ["임금직업포털", "https://www.wagework.go.kr/"],
      ["워크넷 채용정보", "https://www.work.go.kr/"]
    ],
    cautions: "사명감과 현장 적응력이 중요합니다. 교대근무, 감정노동, 병원별 처우 차이를 실제 공고로 확인해야 합니다."
  },
  {
    id: "ai-data",
    domain: "convergence",
    label: "미래 융합",
    title: "AI·데이터 기반 진로",
    subtitle: "메디컬 AI, 반도체 설계 자동화, 바이오 데이터처럼 두 분야를 잇는 확장 경로",
    majors: ["컴퓨터공학", "데이터사이언스", "AI", "산업공학", "통계"],
    subjects: ["math", "coding", "english"],
    subjectText: "수학, 코딩, 영어",
    years: "학부 4년 + 프로젝트/인턴",
    salary: { low: 4000, mid: 7000, high: 11000, text: "역량·기업별 상단 높음", source: "기업공고/연봉정보 확인" },
    stability: 3,
    study: 3,
    salaryWeight: 4,
    care: 2,
    gradient: "linear-gradient(135deg, #7661a8, #2f8f7b)",
    jobs: ["의료 AI 엔지니어", "EDA/설계 자동화", "데이터 분석가", "MLOps", "제품 기획"],
    universities: [
      ["KAIST 전산학부", "https://cs.kaist.ac.kr/"],
      ["서울대 컴퓨터공학부", "https://cse.snu.ac.kr/"],
      ["연세대 인공지능학과", "https://ai.yonsei.ac.kr/"],
      ["고려대 데이터과학과", "https://stat.korea.ac.kr/"]
    ],
    companies: [
      ["네이버 채용", "https://recruit.navercorp.com/"],
      ["카카오 채용", "https://careers.kakao.com/"],
      ["루닛 채용", "https://www.lunit.io/en/careers"],
      ["원티드 AI 채용", "https://www.wanted.co.kr/search?query=AI"]
    ],
    videos: [
      ["AI Korea 유튜브", "https://www.youtube.com/@AIKorea"],
      ["네이버 D2", "https://www.youtube.com/@NAVERD2"]
    ],
    live: [
      ["원티드 채용 검색", "https://www.wanted.co.kr/"],
      ["사람인 연봉정보", "https://www.saramin.co.kr/zf_user/salaries"],
      ["워크넷 채용정보", "https://www.work.go.kr/"]
    ],
    cautions: "학과 간판보다 실제 산출물이 중요합니다. 코딩·수학·데이터 프로젝트를 고등학교 때부터 작게 쌓아보는 것이 좋습니다."
  }
];

const coreSources = [
  ["대입정보포털 어디가", "대학·학과·직업정보와 임금/전망 예시 확인", "https://www.adiga.kr/"],
  ["대학알리미", "대학별 공시정보, 취업률, 등록금, 장학금 비교", "https://www.academyinfo.go.kr/"],
  ["커리어넷", "청소년 진로검사, 직업백과, 학과정보", "https://www.career.go.kr/"],
  ["임금직업포털 워크피디아", "고용노동부·한국고용정보원 직업/임금 정보", "https://www.wagework.go.kr/"],
  ["워크넷 채용정보", "실시간 채용공고와 직무 키워드 확인", "https://www.work.go.kr/"],
  ["KOSIS 국가통계포털", "임금근로자 소득 등 공식 통계 확인", "https://kosis.kr/"],
  ["사람인 연봉정보", "기업별 연봉 체감 자료 보조 확인", "https://www.saramin.co.kr/zf_user/salaries"],
  ["잡코리아 연봉정보", "기업별·직무별 연봉 자료 보조 확인", "https://www.jobkorea.co.kr/Salary/"]
];

const els = {
  domain: document.querySelector("#domainSelect"),
  study: document.querySelector("#studySlider"),
  stability: document.querySelector("#stabilitySlider"),
  salary: document.querySelector("#salarySlider"),
  care: document.querySelector("#careSlider"),
  reset: document.querySelector("#resetButton"),
  grid: document.querySelector("#pathGrid"),
  detail: document.querySelector("#detail"),
  bestTitle: document.querySelector("#bestTitle"),
  bestReason: document.querySelector("#bestReason"),
  canvas: document.querySelector("#scoreCanvas"),
  compareBody: document.querySelector("#compareBody"),
  sourceList: document.querySelector("#sourceList")
};

let selectedId = null;

function selectedSubjects() {
  return [...document.querySelectorAll(".chip-group input:checked")].map((input) => input.value);
}

function scorePath(path) {
  const subjectSet = new Set(selectedSubjects());
  const subjectMatches = path.subjects.filter((subject) => subjectSet.has(subject)).length;
  const subjectScore = (subjectMatches / path.subjects.length) * 35;
  const studyScore = (6 - Math.abs(Number(els.study.value) - path.study)) * 5;
  const stabilityScore = (6 - Math.abs(Number(els.stability.value) - path.stability)) * 5;
  const salaryScore = (6 - Math.abs(Number(els.salary.value) - path.salaryWeight)) * 5;
  const careScore = (6 - Math.abs(Number(els.care.value) - path.care)) * 5;
  const domainBoost = els.domain.value === "all" || els.domain.value === path.domain ? 10 : -6;
  return Math.max(0, Math.round(subjectScore + studyScore + stabilityScore + salaryScore + careScore + domainBoost));
}

function visiblePaths() {
  const domain = els.domain.value;
  const items = domain === "all" ? paths : paths.filter((path) => path.domain === domain);
  return items.map((path) => ({ ...path, score: scorePath(path) })).sort((a, b) => b.score - a.score);
}

function formatMoney(value) {
  return `${value.toLocaleString("ko-KR")}만원`;
}

function durationBadge(path) {
  if (path.years.includes("인턴/전공의")) return "10년+";
  if (path.years.includes("국가시험")) return "4년+";
  if (path.years.includes("석사") || path.years.includes("박사")) return "4~6년";
  return "4년";
}

function renderCards(items) {
  els.grid.innerHTML = items
    .map(
      (path) => `
        <article class="path-card ${path.id === selectedId ? "is-selected" : ""}" data-id="${path.id}">
          <span class="badge">${path.label}</span>
          <h3>${path.title}</h3>
          <p class="muted">${path.subtitle}</p>
          <div class="pill-row">${path.majors.slice(0, 4).map((major) => `<span class="pill">${major}</span>`).join("")}</div>
          <div class="metric-row">
            <div class="metric"><strong>${path.score}</strong><span>현재 적합도</span></div>
            <div class="metric"><strong>${path.salary.mid ? formatMoney(path.salary.mid) : "-"}</strong><span>중간 연봉 예시</span></div>
            <div class="metric"><strong>${durationBadge(path)}</strong><span>진입 기간</span></div>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".path-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      render();
    });
  });
}

function linkRows(title, rows) {
  return `
    <h3>${title}</h3>
    <div class="link-list">
      ${rows
        .map(
          ([label, href]) =>
            `<a class="link-button" href="${href}" target="_blank" rel="noreferrer">${label}<span>열기</span></a>`
        )
        .join("")}
    </div>
  `;
}

function renderDetail(path) {
  els.detail.innerHTML = `
    <div class="detail-visual" style="--detail-gradient: ${path.gradient}"></div>
    <p class="eyebrow">${path.label}</p>
    <h2>${path.title}</h2>
    <p class="muted">${path.subtitle}</p>
    <div class="pill-row">
      ${path.jobs.map((job) => `<span class="pill">${job}</span>`).join("")}
    </div>
    <div class="metric-row">
      <div class="metric"><strong>${formatMoney(path.salary.low)}</strong><span>하위/초기 예시</span></div>
      <div class="metric"><strong>${formatMoney(path.salary.mid)}</strong><span>중위 예시</span></div>
      <div class="metric"><strong>${formatMoney(path.salary.high)}</strong><span>상위 예시</span></div>
    </div>
    <p class="muted"><strong>연봉 메모:</strong> ${path.salary.text}<br /><strong>출처:</strong> ${path.salary.source}</p>
    ${linkRows("대학·학과", path.universities)}
    ${linkRows("회사·채용", path.companies)}
    ${linkRows("영상·직무 이해", path.videos)}
    ${linkRows("직업·연봉 최신 확인", path.live)}
    <p class="warning">${path.cautions}</p>
  `;
}

function renderCompare(items) {
  els.compareBody.innerHTML = items
    .map(
      (path) => `
        <tr>
          <td><strong>${path.title}</strong><br />적합도 ${path.score}</td>
          <td>${path.majors.join(", ")}</td>
          <td>${path.subjectText}</td>
          <td>${path.years}</td>
          <td>${path.salary.text}<br /><span class="muted">${path.salary.source}</span></td>
          <td><a href="${path.live[0][1]}" target="_blank" rel="noreferrer">${path.live[0][0]}</a></td>
        </tr>
      `
    )
    .join("");
}

function renderSources() {
  els.sourceList.innerHTML = coreSources
    .map(
      ([title, desc, href]) => `
        <article class="source-card">
          <h3>${title}</h3>
          <p class="muted">${desc}</p>
          <a class="link-button" href="${href}" target="_blank" rel="noreferrer">자료 열기<span>↗</span></a>
        </article>
      `
    )
    .join("");
}

function drawChart(items) {
  const canvas = els.canvas;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth * dpr;
  const height = canvas.clientHeight * dpr;
  canvas.width = width;
  canvas.height = height;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  const chartItems = items.slice(0, 5);
  const maxScore = Math.max(...chartItems.map((item) => item.score), 100);
  const colors = ["#2f8f7b", "#f5bf50", "#4f7cac", "#e76f51", "#7661a8"];
  const left = 118;
  const top = 18;
  const barHeight = 22;
  const gap = 12;
  const chartWidth = canvas.clientWidth - left - 28;

  ctx.font = "700 12px system-ui";
  ctx.textBaseline = "middle";
  chartItems.forEach((item, index) => {
    const y = top + index * (barHeight + gap);
    const barWidth = Math.max(8, (item.score / maxScore) * chartWidth);
    ctx.fillStyle = "#52615a";
    ctx.fillText(item.title.slice(0, 8), 0, y + barHeight / 2);
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(left, y, barWidth, barHeight);
    ctx.fillStyle = "#202124";
    ctx.fillText(String(item.score), left + barWidth + 8, y + barHeight / 2);
  });
}

function updateBest(items) {
  const best = items[0];
  els.bestTitle.textContent = best.title;
  els.bestReason.textContent = `${best.subjectText} 강점과 현재 선택한 기준이 가장 많이 겹칩니다. 단, 점수는 탐색 우선순위일 뿐 최종 선택은 입시 가능성, 수련 기간, 실제 직무 체험으로 확인해야 합니다.`;
}

function render() {
  const items = visiblePaths();
  if (!selectedId || !items.some((item) => item.id === selectedId)) selectedId = items[0]?.id || paths[0].id;
  const selected = paths.find((path) => path.id === selectedId) || items[0];
  renderCards(items);
  renderDetail(selected);
  renderCompare(items);
  renderSources();
  drawChart(items);
  updateBest(items);
}

document.querySelectorAll("input, select").forEach((input) => input.addEventListener("input", render));
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}View`).classList.add("is-active");
  });
});

els.reset.addEventListener("click", () => {
  els.domain.value = "all";
  els.study.value = 4;
  els.stability.value = 4;
  els.salary.value = 4;
  els.care.value = 4;
  document.querySelectorAll(".chip-group input").forEach((input) => {
    input.checked = ["biology", "chemistry", "math"].includes(input.value);
  });
  selectedId = null;
  render();
});

window.addEventListener("resize", render);
render();
