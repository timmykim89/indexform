import type { Metadata, Viewport } from "next";

import { sanityEnabled } from "@/sanity/env";
import StudioClient from "./StudioClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "IndexForm Studio",
  robots: { index: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioPage() {
  if (!sanityEnabled) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          fontFamily: "system-ui, sans-serif",
          background: "#efe8d8",
          color: "#3a2a24",
        }}
      >
        <div style={{ maxWidth: 520, lineHeight: 1.6 }}>
          <h1 style={{ color: "#c8161d", marginTop: 0 }}>Sanity Studio 미설정</h1>
          <p>
            Studio를 사용하려면 Sanity 프로젝트를 연결해야 합니다. 프로젝트
            루트에 <code>.env.local</code> 파일을 만들고 아래 값을 채워주세요:
          </p>
          <pre
            style={{
              background: "#fff",
              border: "1px solid rgba(200,22,29,0.3)",
              padding: 16,
              overflowX: "auto",
              fontSize: 13,
            }}
          >
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01`}
          </pre>
          <p style={{ fontSize: 14, opacity: 0.8 }}>
            프로젝트 ID는{" "}
            <a href="https://www.sanity.io/manage" style={{ color: "#c8161d" }}>
              sanity.io/manage
            </a>
            에서 확인할 수 있습니다. 설정 후 개발 서버를 재시작하세요. Sanity가
            연결되지 않아도 사이트는 기본 콘텐츠로 정상 동작합니다.
          </p>
        </div>
      </div>
    );
  }

  return <StudioClient />;
}
