# Handoff: IndexForm 홈페이지

## Overview
디저트 큐레이션/납품 업체 "IndexForm"의 5-페이지(Home / Index / Offer / Archive / Contact) 반응형 홈페이지 디자인입니다. 배경 이미지, 상단 레드 바, 우측 슬라이드 메뉴, 프로세스 다이어그램 등 IndexForm 고유의 럭셔리 브랜드 톤을 담고 있습니다.

## About the Design Files
이 번들의 HTML/CSS/JS 파일은 **디자인 레퍼런스**입니다 — 의도한 외관과 동작을 보여주는 프로토타입이며, 그대로 복사해 프로덕션에 쓰는 코드가 아닙니다. 실제 구현은 Next.js(Vercel 배포) + Sanity CMS 조합으로 진행될 예정이므로, 이 디자인을 Next.js 컴포넌트로 재구성하고 Archive/Offer 콘텐츠(이미지, 텍스트)는 Sanity 스키마에서 오는 데이터로 바인딩해야 합니다.

## Fidelity
**High-fidelity.** 색상, 폰트, 레이아웃, 인터랙션(메뉴 드로어, 필터, 상세 페이지 전환)이 최종 확정 상태입니다. 픽셀 단위로 재현해 주세요. 단, 카피(브랜드명/위치/결과물/업무범위)는 현재 플레이스홀더이며 Sanity 콘텐츠로 대체됩니다.

## Screens / Views

### 1. Home
- **Purpose**: 랜딩. 로고 워드마크 + 태그라인만 표시.
- **Layout**: `calc(100vh - 108px)` 높이의 flex 중앙 정렬 컬럼. 상단 고정 바(52px) + 하단 고정 푸터(약 56px) 공간 제외.
- **Components**:
  - 워드마크 이미지 (`assets/indexform-wordmark.png`), width `min(560px, 72vw)`
  - 태그라인 "Curated as Art Piece" — Pinyon Script, `clamp(18px,2.2vw,25px)`, color `#c8161d`
  - 상단 바에는 이 페이지에서만 마퀴(무한 스크롤 텍스트) 표시: "Curated for the Taste · Designed for the Moment · Served for the Memory", Pinyon Script 15px, 흰색, 26s linear 무한 애니메이션

### 2. Index
- **Purpose**: 브랜드 철학 소개 + 4단계 프로세스 요약.
- **Layout**: 세로 중앙 정렬, `max-width:1180px` 텍스트 블록 → 4단 프로세스 바 → 인용구 블록.
- **Components**:
  - H1: "디저트는 단순한 음식을 넘어…", IF-Eulyoo bold, `clamp(22px,3vw,32px)`, color `#c8161d`, 가운데 정렬
  - 본문 단락, 14~16px, color `#3a2a24`
  - **4단 프로세스 바**: 배경 `#c8161d` 통짜 바, 4개 flex 항목(시즌 컬렉션 무드 분석 / 디저트 샵 매칭 리스트 / 무드 매칭 필터링 / 커스터마이징 방향 제안), 각 52px 높이, 항목 사이 흰색 쉐브론(≪≫ 형태, SVG 1.5px 선) 구분선. 모바일에서는 세로 스택 + 쉐브론 숨김 + 하단 보더로 대체.
  - 인용구: 좌우에 Playfair Display 48px `{` `}` 브라켓, 가운데 이탤릭 없는 인용문, color `#c8161d`, font-weight 500

### 3. Offer
- **Purpose**: 3가지 서비스(Dessert Supply / VIC Delivery / In-Store Experience) 소개 + 업무 프로세스 다이어그램.
- **Layout**: `max-width:1280px`, 상단 인용구 블록 → 3열 카드 그리드 → Our Process 다이어그램.
- **Components**:
  - 카드: 배경 `#c8161d`, 흰 텍스트, `if-card` 클래스(hover 시 `translateY(-4px)`). 카테고리 라벨(Oswald 700, 11px, letter-spacing 0.14em) + 인덱스 번호 + 타이틀(Oswald 700, clamp(26px,2.4vw,34px), `rgba(0,0,0,0.3)`) + 16:9 이미지 + 서브타이틀 + bullet list(포인트 3~4개, 12.5px)
  - 오퍼 3개 각각 이미지 1장(Unsplash placeholder, 실제는 Sanity 업로드 이미지로 교체)
  - **Our Process 다이어그램**: 좌측 "Dessert" 박스(원 6개, 가로 1열, 각 서칭/컨택/일정 조율/커스터마이징/테이스팅/납품 어레인지) → 얇은 1px 레드 선으로 3개 분기(desktop: SVG 트리 형태 / mobile: 삼각형 분기 형태) → 우측 3개 그룹 박스(Dessert Supply / VIC Delivery / In-Store experience, 각 원 3개). 모든 원은 동일 크기(`clamp(46px,6.2vw,92px)`), 배경 `#c8161d`, 흰 텍스트, IF-Eulyoo bold, `clamp(7.5px,0.85vw,12px)`, word-break:keep-all로 줄바꿈 어색함 방지.

### 4. Archive — List
- **Purpose**: 프로젝트 사례(작업물) 갤러리, Sanity에서 이미지+타이틀 업로드하는 구조.
- **Layout**: 상단 필터(All/Curation/Delivery/Execution) — desktop은 가로 버튼 나열, mobile은 드롭다운. 하단 4열 그리드(모바일 2열), 각 카드 3:4 이미지 + 카테고리 라벨 + 타이틀.
- **Components**: 필터 버튼 — 선택 시 배경 `#c8161d`/흰 글자, 비선택 시 투명 배경/레드 글자+레드 테두리. 카드 클릭 시 상세 페이지로 전환.

### 5. Archive — Detail
- **Purpose**: 개별 프로젝트 상세.
- **Layout**: 2컬럼 grid (`1.3fr 1.4fr`, 좌측 텍스트 / 우측 이미지), 모바일은 1컬럼 스택.
- **Components**:
  - 좌측: 브랜드명(Playfair Display, clamp(24px,2.6vw,34px)), 위치/결과물/업무범위 텍스트(Cormorant Garamond italic, 17px) — 카테고리 라벨 없이 값만 표기
  - 우측: 3:4 세로 이미지 2장(가로 배치, 모바일은 세로 스택) + 16:9 가로 이미지 1장. 모두 Sanity 업로드 이미지 슬롯.
  - 상단 "← Archive" 뒤로가기 링크

### 6. Contact
- **Purpose**: 연락처 안내.
- **Layout**: 세로 중앙 정렬. 로고(레드 박스에 흰 워드마크) → 태그라인 → 연락처 3줄(이메일/인스타/웹사이트) 좌우로 Playfair Display 52px `{` `}` 브라켓이 감싸는 형태.
- **Components**: 연락처 각 줄 아이콘(SVG, 20px, stroke `#c8161d`) + 텍스트(Cormorant Garamond, 16px). 데스크톱은 가로 나열, 모바일은 세로 스택.

## Shared Layout (모든 페이지 공통)

### Top Bar (fixed, height 52px)
- 배경 `#c8161d`, z-index 90
- Home 페이지: 마퀴 텍스트 (좌측 정렬 영역)
- 그 외 페이지: 현재 페이지명 이탤릭 표시 (Cormorant Garamond, 19px, 흰색)
- 우측: 로고 엠블럼 아이콘(30px, `filter:brightness(0) invert(1)`로 흰색 처리) — 클릭 시 우측 메뉴 드로어 오픈

### Menu Drawer (우측 슬라이드, width `min(340px, 82vw)`)
- 배경: `assets/menu-bg.png` 커버 + 다크 오버레이(`linear-gradient(rgba(20,8,10,.28),rgba(20,8,10,.4))`)
- 애니메이션: `translateX(100%)` → `translateX(0)`, 0.5s cubic-bezier(.77,0,.175,1)
- 상단: 로고 엠블럼(34px, 흰색) + 닫기 버튼(× 26px)
- 네비게이션 5개 항목: Home(이탤릭)/Index/Offer/Archive/Contact — Playfair Display 25px, 흰색, 현재 페이지 opacity 1 / 나머지 0.7
- 하단: "Curated as Art Piece" (Pinyon Script 15px) + 저작권 텍스트(10.5px)
- 배경 클릭 시 닫힘 (반투명 스크림 `rgba(20,10,8,0.4)`)

### Footer (fixed, height ~56px, background `#c8161d`)
- 좌측: 워드마크(15px, 흰색) + "/" 구분자 + "Curated as Art Piece"
- 우측: 이메일/인스타그램/컨택 아이콘 3개 (19px SVG, 흰색)

## Interactions & Behavior
- **라우팅**: SPA 방식, 5개 route(`home`/`index`/`offer`/`archive`/`contact`) 상태 전환. 페이지 이동 시 `window.scrollTo(0,0)`.
- **메뉴 드로어**: 토글 오픈/클로즈, 배경 스크림 클릭 시 닫힘, 항목 클릭 시 해당 페이지 이동 + 메뉴 닫힘.
- **Archive 필터**: All/Curation/Delivery/Execution 클릭 시 그리드 즉시 필터링 (클라이언트 사이드).
- **Archive 상세 전환**: 카드 클릭 → 상세 뷰로 전환(같은 섹션 내 상태 변경, 라우트 변경 아님), 상단 "← Archive"로 복귀.
- **Hover**: `.if-card`(오퍼/아카이브 카드) hover 시 `translateY(-4px)`. 링크 hover 시 `opacity:0.7`.
- **Responsive breakpoint**: `768px`. 그 이하에서 Offer 카드 1열, Archive 그리드 2열, 프로세스 다이어그램 세로 스택 등 다수의 모바일 전용 규칙 적용(원본 CSS의 `@media(max-width:768px)` 블록 참조).

## State Management
- `route`: 현재 페이지 (`home`/`index`/`offer`/`archive`/`contact`)
- `menuOpen`: 메뉴 드로어 열림 여부
- `archiveFilter`: 현재 선택된 Archive 카테고리 필터
- `archiveDetail`: 선택된 Archive 항목(null이면 목록, 값이 있으면 상세)
- `archiveFilterMenuOpen`: 모바일 필터 드롭다운 열림 여부

### Sanity 데이터 요구사항 (실제 구현 시)
- **Offer**: 카테고리, 인덱스 번호, 타이틀, 이미지(16:9), 서브타이틀, bullet 포인트 배열 — 항목 3개
- **Archive**: 카테고리(Curation/Delivery/Execution), 커버 이미지(3:4), 리스트용 타이틀, 그리고 상세 페이지용 브랜드명/위치/결과물/업무범위 텍스트 + 이미지 3장(세로 2 + 가로 1)

## Design Tokens

### Colors
- Primary Red: `#c8161d` (로고, 상단바, 푸터, 카드, 다이어그램 — **고정값, 변경 불가**)
- Background Cream: `#efe8d8` (fallback), 실제 배경은 `assets/bg-cream.jpg` 고정 이미지 — **변경 불가**
- Dark text: `#3a2a24`
- White: `#ffffff` / 반투명 흰색(`rgba(255,255,255,0.45~0.88)`) — 보조 텍스트

### Typography
- **IF-Eulyoo** (커스텀 웹폰트, `assets/fonts/Eulyoo1945-Regular.otf` / `-SemiBold.otf`): 본문 헤드라인, 프로세스 다이어그램 원형 라벨
- **Cormorant Garamond** (Google Fonts): 본문, 네비게이션 라벨, 연락처 텍스트
- **Pinyon Script** (Google Fonts): 태그라인 "Curated as Art Piece", 마퀴
- **Playfair Display** (Google Fonts): 브랜드 워드마크 텍스트, 인용구 브라켓, Archive 브랜드명
- **Oswald** (Google Fonts, weight 700): Offer 카드 카테고리/타이틀, "Our Process" 제목

### Spacing / Sizing
- Top bar: 52px / Footer: ~56px (고정)
- Content max-width: 1180~1280px
- 카드 그리드 gap: 22~28px
- Breakpoint: 768px

## Assets
- `indexform-emblem.png` — 상단바/메뉴 로고 아이콘
- `indexform-wordmark.png` — Home/Contact 워드마크
- `indexform-logo.png` — 예비 로고 파일
- `bg-cream.jpg` — 전체 페이지 고정 배경 (변경 불가)
- `menu-bg.png` — 우측 메뉴 드로어 배경
- `fonts/Eulyoo1945-Regular.otf`, `fonts/Eulyoo1945-SemiBold.otf` — 상업적 사용 가능 무료 한글 폰트(을유1945)
- Offer 이미지는 현재 Unsplash placeholder — 실제 서비스 사진으로 교체 필요
- Archive 이미지는 사용자가 Sanity를 통해 업로드하는 구조 (현재 프로토타입엔 빈 슬롯)

## Files
- `IndexForm.dc.html` — 메인 디자인 (전체 5페이지 포함, 최종본)
- `assets/` — 이미지, 폰트 리소스
- 참고용(반영 전 검토 단계): `Index Layout Options.dc.html`, `Offer Layout Options.dc.html`, `IndexForm Luxury Review.dc.html` — 실 구현에는 불필요, 디자인 논의 기록용
