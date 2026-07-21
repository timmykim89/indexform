"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../sanity.config";
import { sanityEnabled } from "../../../sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!sanityEnabled) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          background: "#efe8d8",
          color: "#3a2a24",
          fontFamily: "'Cormorant Garamond', serif",
          padding: 32,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 22, color: "#c8161d", margin: 0 }}>
          Sanity Studio is not configured
        </p>
        <p style={{ fontSize: 15, margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
          Vercel 환경변수에 NEXT_PUBLIC_SANITY_PROJECT_ID,
          NEXT_PUBLIC_SANITY_DATASET 를 설정한 뒤 재배포하면 이 주소(/studio)에서
          Archive/Offer 콘텐츠를 업로드할 수 있습니다.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
