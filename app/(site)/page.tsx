import { TAGLINE } from "@/lib/content";
import { Wordmark } from "@/app/ui";

export default function HomePage() {
  return (
    <section
      style={{
        position: "relative",
        height: "calc(100vh - 108px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 22 }}>
        <Wordmark style={{ width: "min(560px,72vw)" }} />
      </div>
      <p
        style={{
          fontFamily: "'Pinyon Script', serif",
          fontSize: "clamp(18px,2.2vw,25px)",
          color: "#c8161d",
          letterSpacing: "0.01em",
          margin: 0,
        }}
      >
        {TAGLINE}
      </p>
    </section>
  );
}
