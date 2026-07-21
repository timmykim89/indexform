import Link from "next/link";
import { Wordmark } from "@/app/ui";

export default function HomePage() {
  return (
    <section
      style={{
        position: "relative",
        height: "calc(100dvh - 108px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 22 }}>
        <Link href="/story" aria-label="Index">
          <Wordmark style={{ width: "min(280px,36vw)" }} />
        </Link>
      </div>
    </section>
  );
}
