"use client";

import { useMemo, useState } from "react";

import type { ArchiveCategory, ArchiveItem } from "@/lib/content";
import { ImageSlot } from "@/app/ui";

const FILTERS: { key: "all" | ArchiveCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "curation", label: "Curation" },
  { key: "delivery", label: "Delivery" },
  { key: "execution", label: "Execution" },
];

export default function ArchiveView({ items }: { items: ArchiveItem[] }) {
  const [filter, setFilter] = useState<"all" | ArchiveCategory>("all");
  const [detail, setDetail] = useState<ArchiveItem | null>(null);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((d) => d.category === filter)),
    [items, filter],
  );

  const activeLabel = FILTERS.find((f) => f.key === filter)?.label ?? "All";

  if (detail) {
    return (
      <div>
        <button
          onClick={() => {
            setDetail(null);
            window.scrollTo(0, 0);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 13,
            letterSpacing: "0.06em",
            color: "#c8161d",
            padding: 0,
            marginBottom: 40,
          }}
        >
          ← Archive
        </button>
        <div
          className="if-archive-detail-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1.4fr)",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 26, minWidth: 0 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px,2.6vw,34px)",
                color: "#c8161d",
                lineHeight: 1.25,
              }}
            >
              {detail.brand}
            </p>
            <p style={infoText}>{detail.location}</p>
            <p style={infoText}>{detail.result}</p>
            <div style={infoText}>
              {detail.scope.map((line, i) => (
                <p key={i} style={{ margin: 0 }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%" }}>
            <div className="if-archive-detail-images-row" style={{ display: "flex", gap: 20 }}>
              <div style={{ flex: 1, minWidth: 0, aspectRatio: "3/4" }}>
                <ImageSlot src={detail.verticalImages[0]} placeholder="Vertical image" />
              </div>
              <div style={{ flex: 1, minWidth: 0, aspectRatio: "3/4" }}>
                <ImageSlot src={detail.verticalImages[1]} placeholder="Vertical image" />
              </div>
            </div>
            <div style={{ width: "100%", aspectRatio: "16/9" }}>
              <ImageSlot src={detail.horizontalImage} placeholder="Horizontal image" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Desktop filters */}
      <div
        className="if-archive-filter-desktop"
        style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 52, flexWrap: "wrap" }}
      >
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="if-filterbtn"
              style={{
                background: active ? "#c8161d" : "transparent",
                color: active ? "#fff" : "#c8161d",
                border: "1px solid #c8161d",
                padding: "9px 20px",
                cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                letterSpacing: "0.02em",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Mobile filter dropdown */}
      <div className="if-archive-filter-mobile" style={{ display: "none", position: "relative", marginBottom: 32 }}>
        <button
          onClick={() => setFilterMenuOpen((v) => !v)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "transparent",
            color: "#c8161d",
            border: "1px solid #c8161d",
            padding: "13px 18px",
            cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 14,
            letterSpacing: "0.02em",
          }}
        >
          <span>{activeLabel}</span>
          <span style={{ fontSize: 11, transform: filterMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
        </button>
        {filterMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              background: "#faf6ee",
              border: "1px solid #c8161d",
              zIndex: 10,
            }}
          >
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => {
                    setFilter(f.key);
                    setFilterMenuOpen(false);
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: active ? "#c8161d" : "transparent",
                    color: active ? "#fff" : "#c8161d",
                    border: "none",
                    borderBottom: "1px solid #c8161d",
                    padding: "12px 18px",
                    cursor: "pointer",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    letterSpacing: "0.02em",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Grid */}
      <div
        className="if-archive-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}
      >
        {filtered.map((it) => (
          <div
            key={it.id}
            onClick={() => {
              setDetail(it);
              window.scrollTo(0, 0);
            }}
            className="if-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
              cursor: "pointer",
            }}
          >
            <div style={{ width: "100%", aspectRatio: "3/4", padding: 6 }}>
              <ImageSlot src={it.coverImage} placeholder="Drop image" />
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17,
                color: "#c8161d",
                textAlign: "center",
                margin: "14px 0 0",
              }}
            >
              {it.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const infoText: React.CSSProperties = {
  margin: 0,
  fontFamily: "'Cormorant Garamond', serif",
  fontStyle: "italic",
  fontSize: 17,
  lineHeight: 1.6,
  color: "#c8161d",
};
