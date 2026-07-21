import {
  INDEX_BODY,
  INDEX_HEADLINE,
  INDEX_QUOTE,
  INDEX_STEPS,
} from "@/lib/content";

export default function IndexPage() {
  return (
    <section
      style={{
        minHeight: "calc(100dvh - 108px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'IF-Eulyoo', serif",
            fontWeight: 700,
            fontSize: "clamp(22px,3vw,32px)",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            color: "#c8161d",
            margin: "0 0 14px",
          }}
        >
          {INDEX_HEADLINE}
        </h1>
        <p
          style={{
            fontSize: "clamp(13px,1.2vw,16px)",
            lineHeight: 1.7,
            color: "#3a2a24",
            margin: 0,
          }}
        >
          {INDEX_BODY}
        </p>
      </div>

      <div
        className="if-index-steps"
        style={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          margin: "56px 0 64px",
          background: "#c8161d",
        }}
      >
        {INDEX_STEPS.map((label, i) => (
          <div
            key={label}
            className="if-index-step"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              height: 52,
              color: "#efe8d8",
              padding: "0 28px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "'IF-Eulyoo', serif",
                fontWeight: 700,
                fontSize: "clamp(11px,1vw,13.5px)",
                lineHeight: 1.4,
                letterSpacing: "0.01em",
                color: "#efe8d8",
                textAlign: "center",
              }}
            >
              {label}
            </p>
            {i < INDEX_STEPS.length - 1 && (
              <>
              <div
                className="if-index-step-chevron"
                style={{
                  position: "absolute",
                  right: -14,
                  top: 0,
                  bottom: 0,
                  width: 26,
                  zIndex: 2,
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="26"
                  height="52"
                  viewBox="0 0 26 52"
                  preserveAspectRatio="none"
                  style={{ display: "block", width: "100%", height: "100%" }}
                >
                  <path
                    d="M2 2 L11 26 L2 50"
                    fill="none"
                    stroke="#efe8d8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2 L23 26 L14 50"
                    fill="none"
                    stroke="#efe8d8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="if-index-step-chevron-mo"
                style={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -25,
                  height: 26,
                  zIndex: 2,
                  pointerEvents: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="12"
                  height="24"
                  viewBox="0 0 12 24"
                  style={{ display: "block" }}
                >
                  <line x1="6" y1="0" x2="6" y2="15" stroke="#c8161d" strokeWidth="1" />
                  <path d="M1.5 15.5 L10.5 15.5 L6 22.5 Z" fill="#c8161d" stroke="none" />
                </svg>
              </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <span
          className="if-quote-bracket"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px,3.5vw,42px)",
            lineHeight: 1,
            color: "#c8161d",
            flexShrink: 0,
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
          }}
        >
          {"{"}
        </span>
        <p
          style={{
            fontSize: "clamp(13.5px,1.25vw,16px)",
            lineHeight: 1.9,
            color: "#c8161d",
            fontWeight: 500,
            textAlign: "center",
            margin: 0,
          }}
        >
          {INDEX_QUOTE}
        </p>
        <span
          className="if-quote-bracket"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px,3.5vw,42px)",
            lineHeight: 1,
            color: "#c8161d",
            flexShrink: 0,
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
          }}
        >
          {"}"}
        </span>
      </div>
    </section>
  );
}
