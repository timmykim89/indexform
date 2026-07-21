import {
  OFFER_QUOTE,
  PROCESS_DESSERT_CIRCLES,
  PROCESS_FLOW_GROUPS,
} from "@/lib/content";
import { getOffers } from "@/lib/data";

export const revalidate = 60;

const circleStyle: React.CSSProperties = {
  width: "clamp(46px,6.2vw,92px)",
  height: "clamp(46px,6.2vw,92px)",
  flexShrink: 0,
  borderRadius: "50%",
  background: "#c8161d",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontFamily: "'SUIT', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(7.5px,0.85vw,12px)",
  lineHeight: 1.15,
  padding: "5%",
  wordBreak: "keep-all",
};

export default async function OfferPage() {
  const offers = await getOffers();

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "76px 32px 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          maxWidth: 1040,
          margin: "0 auto 52px",
        }}
      >
        <span className="if-quote-bracket" style={{ alignSelf: "stretch", display: "flex", flexShrink: 0 }}>
          <svg width="14" viewBox="0 0 20 100" preserveAspectRatio="none" style={{ height: "100%", minHeight: 56, display: "block" }}>
            <path d="M16 2 C10 2 9 8 9 16 L9 38 C9 45 7 48 3 50 C7 52 9 55 9 62 L9 84 C9 92 10 98 16 98" fill="none" stroke="#c8161d" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </span>
        <p
          style={{
            fontSize: "clamp(13px,1.25vw,15px)",
            lineHeight: 1.8,
            color: "#c8161d",
            fontWeight: 500,
            textAlign: "center",
            margin: 0,
          }}
        >
          {OFFER_QUOTE}
        </p>
        <span className="if-quote-bracket" style={{ alignSelf: "stretch", display: "flex", flexShrink: 0 }}>
          <svg width="14" viewBox="0 0 20 100" preserveAspectRatio="none" style={{ height: "100%", minHeight: 56, display: "block", transform: "scaleX(-1)" }}>
            <path d="M16 2 C10 2 9 8 9 16 L9 38 C9 45 7 48 3 50 C7 52 9 55 9 62 L9 84 C9 92 10 98 16 98" fill="none" stroke="#c8161d" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </span>
      </div>

      <div
        className="if-offer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 22,
          marginBottom: 64,
        }}
      >
        {offers.map((offer) => (
          <div
            key={offer.title + offer.index}
            className="if-card"
            style={{
              background: "#c8161d",
              color: "#fff",
              padding: "24px 24px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {offer.category}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px,2.4vw,34px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.3)",
                  margin: "8px 0 0",
                  minHeight: "2.05em",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {offer.title}
              </h3>
            </div>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                overflow: "hidden",
                background: "rgba(255,255,255,0.12)",
              }}
            >
              {offer.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={offer.image}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              ) : null}
            </div>
            <div>
              <p style={{ fontSize: 14.5, fontWeight: 800, color: "#fff", margin: "0 0 10px" }}>{offer.subtitle}</p>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {offer.points.map((pt, i) => (
                  <li
                    key={i}
                    style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.55, color: "#ffffff" }}
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* OUR PROCESS */}
      <div style={{ width: "100%" }}>
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(26px,2.4vw,34px)",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#c8161d",
            textAlign: "left",
            margin: "0 0 28px",
          }}
        >
          Our Process
        </p>
        <div
          className="if-process-row"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            className="if-process-desk"
            style={{
              flex: "0 1 auto",
              minWidth: 0,
              border: "1px solid #c8161d",
              padding: "clamp(12px,2vw,26px) clamp(10px,1.6vw,22px)",
            }}
          >
            <p className="if-process-label" style={processLabel}>
              Dessert
            </p>
            <div className="if-process-circles" style={{ display: "flex", gap: "clamp(4px,1vw,14px)" }}>
              {PROCESS_DESSERT_CIRCLES.map((c) => (
                <div key={c} style={circleStyle}>
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div
            className="if-process-arrows"
            style={{
              flex: 1,
              alignSelf: "stretch",
              position: "relative",
              minHeight: 280,
              margin: "0 8px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: 4,
                height: 4,
                transform: "translate(-50%,-50%)",
                borderRadius: "50%",
                background: "#c8161d",
              }}
            />
            {["16%", "50%", "84%"].map((top) => (
              <div
                key={top}
                style={{
                  position: "absolute",
                  top,
                  right: 0,
                  width: 4,
                  height: 4,
                  transform: "translate(50%,-50%)",
                  borderRadius: "50%",
                  background: "#c8161d",
                }}
              />
            ))}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="50" x2="40" y2="50" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="40" y1="16" x2="40" y2="84" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="40" y1="16" x2="100" y2="16" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="40" y1="50" x2="100" y2="50" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="40" y1="84" x2="100" y2="84" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <div
            className="if-process-arrow-mobile"
            style={{ flexDirection: "column", alignItems: "center", width: "100%", position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                width: 4,
                height: 4,
                transform: "translate(-50%,-50%)",
                borderRadius: "50%",
                background: "#c8161d",
              }}
            />
            <svg
              width="100%"
              height="40"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              style={{ display: "block", overflow: "visible" }}
            >
              <line x1="50" y1="0" x2="50" y2="14" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="16.6667" y1="14" x2="83.3333" y2="14" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="16.6667" y1="14" x2="16.6667" y2="40" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="50" y1="14" x2="50" y2="40" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="83.3333" y1="14" x2="83.3333" y2="40" stroke="#c8161d" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>

          <div
            className="if-process-flow-groups"
            style={{
              flex: "0 1 auto",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(10px,1.6vw,20px)",
            }}
          >
            {PROCESS_FLOW_GROUPS.map((grp) => (
              <div key={grp.label} style={{ border: "1px solid #c8161d", padding: "clamp(10px,1.4vw,18px) clamp(10px,1.6vw,22px)" }}>
                <p className="if-process-label" style={{ ...processLabel, fontSize: 15, margin: "0 0 12px" }}>
                  {grp.label}
                </p>
                <div className="if-process-circles" style={{ display: "flex", gap: "clamp(4px,1vw,14px)" }}>
                  {grp.circles.map((gc) => (
                    <div key={gc} style={circleStyle}>
                      {gc}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function bracket(size: number): React.CSSProperties {
  return {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300,
    fontSize: "clamp(30px,3.5vw,42px)",
    lineHeight: 1,
    color: "#c8161d",
    flexShrink: 0,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
  };
}

const processLabel: React.CSSProperties = {
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 700,
  fontSize: 16,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "#c8161d",
  textAlign: "left",
  margin: "0 0 14px",
};
