/**
 * Shared content types + built-in design defaults.
 *
 * These defaults reproduce the content from the original IndexForm design doc so
 * the site renders fully before any Sanity content exists. Once Sanity is
 * configured and documents are published, live data replaces these.
 */

export type ArchiveCategory = "curation" | "delivery" | "execution";

export type Offer = {
  category: string;
  index: string;
  title: string;
  image: string | null;
  subtitle: string;
  points: string[];
};

export type ArchiveItem = {
  id: string;
  category: ArchiveCategory;
  categoryLabel: string;
  title: string;
  coverImage: string | null;
  brand: string;
  location: string;
  result: string;
  scope: string[];
  verticalImages: (string | null)[];
  horizontalImage: string | null;
};

export const CATEGORY_LABELS: Record<ArchiveCategory, string> = {
  curation: "Curation",
  delivery: "Delivery",
  execution: "Execution",
};

/* ── Index page copy ───────────────────────────────────────────── */

export const INDEX_HEADLINE =
  "디저트는 단순한 음식을 넘어 '취향과 안목'을 드러내는 소비재";

export const INDEX_BODY =
  "디저트를 다과가 아닌, 플래그십 스토어라는 '공간'과 브랜드의 '시즌 컬렉션'을 완성하는 마지막 Object로 정의합니다.";

export const INDEX_STEPS = [
  "시즌 컬렉션 무드 분석",
  "디저트 샵 매칭 리스트",
  "무드 매칭 필터링",
  "커스터마이징 방향 제안",
];

export const INDEX_QUOTE =
  '"우리는 단순한 케이터링이 아닙니다. 브랜드의 인테리어, 가구, 동선, 그리고 이번 시즌 컬렉션의 무드까지 완벽히 분석하여 공간에 겉돌지 않는 \'하나의 예술품\' 같은 F&B를 설계합니다."';

/* ── Offer page ────────────────────────────────────────────────── */

export const OFFER_QUOTE =
  "IndexForm은 디저트의 발굴부터 고객의 손에 닿는 순간까지, 브랜드가 직접 해야 했던 모든 수고를 대행합니다. 납품, 선물 배송, 매장 접객까지 세 가지 서비스는 각각 독립적으로, 혹은 하나의 시즌 프로그램으로 운영될 수 있습니다.";

export const DEFAULT_OFFERS: Offer[] = [
  {
    category: "Offer 1 / Curation",
    index: "01",
    title: "DESSERT SUPPLY",
    image:
      "https://images.unsplash.com/photo-1712948926425-037452977b50?w=900&h=506&q=80&auto=format&fit=crop",
    subtitle: "브랜드 무드에 맞는 디저트 큐레이션 및 납품",
    points: [
      "트렌디한 디저트 샵 발굴, 테이스팅 조율, 커스터마이징 협업, 배송",
      "식품 위생, 시즌 편차, 단가 협의 조율",
      "매장 스태프 교육(F&B 도슨트 가이드)",
    ],
  },
  {
    category: "Offer 2 / Delivery",
    index: "02",
    title: "VIC DELIVERY",
    image:
      "https://images.unsplash.com/photo-1764385827352-78c20131fd47?w=900&h=506&q=80&auto=format&fit=crop",
    subtitle: "VIC 고객 대상 디저트 패키지 제작 및 배송",
    points: [
      "디저트 및 패키지 기획/제작",
      "고객 대면 배송, 택배 배송, 매장 배송",
      "고객 배송 스케줄 관리 및 배송 현황 모니터링",
      "파손, 신선도, 유통기한 관리 및 품질 체크",
    ],
  },
  {
    category: "Offer 3 / Execution",
    index: "03",
    title: "IN-STORE EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1780444115353-7edb7fd89f24?w=900&h=506&q=80&auto=format&fit=crop",
    subtitle: "고객 응대형 디저트 & 음료 서비스",
    points: [
      "디저트 페어링 레이아웃, 접객, 회수, 클리닝",
      "기물 렌탈 서비스 운영",
      "백사이드 기물 세팅부터 고객 대면 호스탈리티까지 턴키 오퍼레이션 서비스",
    ],
  },
];

/* ── Offer → Our Process diagram ───────────────────────────────── */

export const PROCESS_DESSERT_CIRCLES = [
  "서칭",
  "컨택",
  "일정 조율",
  "커스터\u200B마이징",
  "테이스팅",
  "납품 어레인지",
];

export const PROCESS_FLOW_GROUPS = [
  {
    label: "Dessert Supply",
    circles: ["위생 체크", "세팅 가이드", "매장 스태프 소개 가이드"],
  },
  {
    label: "VIC Delivery",
    circles: ["고객 대면 배송", "고객 택배 발송", "매장 택배 발송"],
  },
  {
    label: "In-Store experience",
    circles: ["각종 집기류 세팅", "고객 대면/비대면 접객", "수거 & 클리닝"],
  },
];

/* ── Archive defaults ──────────────────────────────────────────── */

export const DEFAULT_ARCHIVE: ArchiveItem[] = [1, 2, 3, 4].map((n) => {
  const category: ArchiveCategory = (
    ["curation", "delivery", "execution", "curation"] as ArchiveCategory[]
  )[n - 1];
  return {
    id: String(n),
    category,
    categoryLabel: CATEGORY_LABELS[category],
    title: `Archive Piece 0${n}`,
    coverImage: null,
    brand: "Brand Name",
    location: "Store Name, Seoul",
    result: "X Dessert Items · Y Beverages",
    scope: [
      "Dessert Curation · Beverage Pairing",
      "Tasting Sheet · Design & Production",
    ],
    verticalImages: [null, null],
    horizontalImage: null,
  };
});

/* ── Contact ───────────────────────────────────────────────────── */

export const CONTACT = {
  email: "indexform01@gmail.com",
  instagram: "indexform.kr",
  instagramUrl: "https://instagram.com/indexform.kr",
  website: "www.indexform.kr",
  websiteUrl: "https://www.indexform.kr",
};

export const TAGLINE = "Curated as Art Piece";
export const MARQUEE =
  "Curated for the Taste  ·  Designed for the Moment  ·  Served for the Memory";
