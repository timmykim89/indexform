"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MARQUEE, TAGLINE } from "@/lib/content";
import {
  Emblem,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  Wordmark,
} from "./ui";

const NAV = [
  { href: "/", label: "Home", italic: true },
  { href: "/story", label: "Index", italic: false },
  { href: "/offer", label: "Offer", italic: false },
  { href: "/archive", label: "Archive", italic: false },
  { href: "/contact", label: "Contact", italic: false },
];

function labelFor(pathname: string): string {
  const match = NAV.find(
    (n) => n.href === pathname || (n.href !== "/" && pathname.startsWith(n.href)),
  );
  return match ? match.label : "Home";
}

export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    // Keep the address bar showing the bare domain (indexform.kr/) on every page.
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }
  }, [pathname]);

  const currentLabel = labelFor(pathname);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(/assets/bg-cream.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#efe8d8",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          height: 52,
          background: "#c8161d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        }}
      >
        {isHome ? (
          <div style={{ flex: 1, overflow: "hidden", whiteSpace: "nowrap", margin: "0 18px" }}>
            <div
              className="if-marquee-track"
              style={{
                fontFamily: "'Pinyon Script', serif",
                fontSize: 15,
                letterSpacing: "0.01em",
                color: "#fff",
              }}
            >
              <span>{MARQUEE}&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{MARQUEE}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        ) : (
          <span
            style={{
              flex: 1,
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: 19,
              letterSpacing: "0.01em",
              color: "#fff",
              textAlign: "left",
            }}
          >
            {currentLabel}
          </span>
        )}

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
            height: 30,
          }}
        >
          <Emblem white size={30} />
        </button>
      </div>

      {/* MENU SCRIM */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 95,
          background: "rgba(20,10,8,0.4)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity .35s ease",
        }}
      />

      {/* MENU DRAWER */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(340px,82vw)",
          zIndex: 96,
          overflow: "hidden",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform .5s cubic-bezier(.77,0,.175,1)",
          background:
            "linear-gradient(rgba(20,8,10,0.72),rgba(20,8,10,0.82)), url(/assets/menu-bg.png) center/cover, #7d1013",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "26px 30px 28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 48,
            }}
          >
            <Emblem white size={34} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontSize: 26,
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="if-navlink"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: item.italic ? "italic" : "normal",
                    fontSize: 25,
                    letterSpacing: "-0.01em",
                    color: "#fff",
                    opacity: active ? 1 : 0.7,
                    padding: "11px 0",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div
            style={{
              marginTop: "auto",
              borderTop: "1px solid rgba(255,255,255,0.2)",
              paddingTop: 18,
            }}
          >
            <p
              style={{
                fontFamily: "'Pinyon Script', serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.75)",
                margin: 0,
              }}
            >
              {TAGLINE}
            </p>
            <p
              style={{
                fontSize: 10.5,
                letterSpacing: "0.03em",
                color: "rgba(255,255,255,0.55)",
                marginTop: 8,
              }}
            >
              Copyright © 2026 IndexForm. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main style={{ paddingTop: 52, paddingBottom: 56, minHeight: "100vh" }}>
        {children}
      </main>

      {/* FOOTER */}
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 85,
          background: "#c8161d",
          color: "#fff",
        }}
      >
        <div
          className="if-footer-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
            padding: "9px 24px",
          }}
        >
          <div className="if-footer-left" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Wordmark white style={{ height: 15, width: "auto" }} />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
            <span
              className="if-footer-tagline"
              style={{
                fontFamily: "'Pinyon Script', serif",
                fontSize: 12,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              {TAGLINE}
            </span>
          </div>
          <div className="if-footer-icons" style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a href="mailto:hello@indexform.kr" aria-label="Email" style={{ color: "#fff", display: "flex" }}>
              <MailIcon size={19} />
            </a>
            <a
              href="https://instagram.com/indexform.kr"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              style={{ color: "#fff", display: "flex" }}
            >
              <InstagramIcon size={19} />
            </a>
            <a
              href="https://www.indexform.kr"
              target="_blank"
              rel="noopener"
              aria-label="Website"
              style={{ color: "#fff", display: "flex" }}
            >
              <GlobeIcon size={19} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
