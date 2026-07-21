import { CONTACT, TAGLINE } from "@/lib/content";
import { GlobeIcon, InstagramIcon, MailIcon, Wordmark } from "@/app/ui";

const bracket: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
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
  fontFamily: "'Cormorant Garamond', serif",
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
      <div style={{ background: "#c8161d", padding: "16px 32px", marginBottom: 14 }}>
        <Wordmark white style={{ width: "min(300px,60vw)" }} />
      </div>
      <p
        style={{
          fontFamily: "'Pinyon Script', serif",
          fontSize: 17,
          color: "#c8161d",
          marginBottom: 52,
        }}
      >
        {TAGLINE}
      </p>
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
