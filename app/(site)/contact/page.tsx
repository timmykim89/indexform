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
          style={{ width: "min(380px,74vw)", height: "auto", display: "block" }}
        />
      </div>
      <div
        className="if-contact-row"
        style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap", justifyContent: "center" }}
      >
        <span className="if-contact-bracket" style={bracket}>
          {"{"}
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
        <span className="if-contact-bracket" style={bracket}>
          {"}"}
        </span>
      </div>
    </section>
  );
}
