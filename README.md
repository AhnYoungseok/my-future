# Career Path Finder

고등학생의 대학·학과·직업 선택을 돕는 진로 설계 웹앱입니다.

## 운영 원칙

- 모바일과 PC에서 모두 볼 수 있는 웹앱으로 만든다.
- 사용자의 MacBook이 꺼져 있어도 접속 가능해야 한다.
- 정적 앱은 GitHub Pages에 배포한다.
- 최신성이 필요한 대학, 학과, 채용, 연봉 정보는 앱 내부 데이터로 단정하지 않고 공식·신뢰 자료 링크로 확인하게 한다.

## 배포

GitHub Pages에서 `main` 브랜치의 루트 경로를 배포 대상으로 설정하면 됩니다.

1. GitHub 저장소를 공개 저장소로 만든다.
2. 이 폴더의 파일을 저장소 루트에 올린다.
3. Settings > Pages에서 Source를 `Deploy from a branch`, Branch를 `main`, Folder를 `/root`로 설정한다.
4. 배포 주소는 보통 `https://사용자명.github.io/저장소명/` 형태입니다.

## 파일

- `index.html`: 앱 화면
- `styles.css`: 반응형 스타일
- `app.js`: 진로 데이터, 점수 계산, 탭/필터 동작
