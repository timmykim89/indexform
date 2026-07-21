import { CONTACT } from "@/lib/content";
import { GlobeIcon, InstagramIcon, MailIcon } from "@/app/ui";

const bracket: React.CSSProperties = {
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

const link: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "#c8161d",
  fontFamily: "'Playfair Display', serif",
  fontSize: 16,
};

export default function ContactPage() {
  return (
    <section
      style={{
        minHeight: "calc(100dvh - 108px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        gap: 0,
      }}
    >
      <div style={{ marginBottom: 52 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/contact-lockup.png"
          alt="IndexForm — Curated as Art Piece"
          style={{ width: "min(266px,36vw)", height: "auto", display: "block" }}
        />
      </div>
      <div
        className="if-contact-row"
        style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap", justifyContent: "center" }}
      >
        <span className="if-contact-bracket" style={{ alignSelf: "stretch", display: "flex", flexShrink: 0 }}>
          <svg width="14" viewBox="0 0 20 100" preserveAspectRatio="none" style={{ height: "100%", minHeight: 56, display: "block" }}>
            <path d="M16 2 C10 2 9 8 9 16 L9 38 C9 45 7 48 3 50 C7 52 9 55 9 62 L9 84 C9 92 10 98 16 98" fill="none" stroke="#c8161d" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </span>
        <div
          className="if-contact-list"
          style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap", justifyContent: "center" }}
        >
          <a href={`mailto:${CONTACT.email}`} style={link}>
            <MailIcon />
            {CONTACT.email}
          </a>
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener" style={link}>
            <InstagramIcon />
            {CONTACT.instagram}
          </a>
          <a href={CONTACT.websiteUrl} target="_blank" rel="noopener" style={link}>
            <GlobeIcon />
            {CONTACT.website}
          </a>
        </div>
        <span className="if-contact-bracket" style={{ alignSelf: "stretch", display: "flex", flexShrink: 0 }}>
          <svg width="14" viewBox="0 0 20 100" preserveAspectRatio="none" style={{ height: "100%", minHeight: 56, display: "block", transform: "scaleX(-1)" }}>
            <path d="M16 2 C10 2 9 8 9 16 L9 38 C9 45 7 48 3 50 C7 52 9 55 9 62 L9 84 C9 92 10 98 16 98" fill="none" stroke="#c8161d" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </span>
      </div>
    </section>
  );
}
