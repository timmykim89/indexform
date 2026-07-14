import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "IndexForm — Curated as Art Piece",
  description:
    "IndexForm — 디저트 큐레이션/납품. 공간과 시즌 컬렉션을 완성하는 마지막 Object.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Oswald:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
