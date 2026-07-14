import type { CSSProperties } from "react";

export const RED = "#c8161d";
export const CREAM = "#efe8d8";
export const DARK = "#3a2a24";

// Turns the red brand PNGs white where they sit on the red bar / red box.
const WHITE_FILTER = "brightness(0) invert(1)";

/**
 * IndexForm wordmark (INDEXForm logotype). Renders the real brand asset at
 * /assets/indexform-wordmark.png. Pass `white` to invert it to white for use on
 * red surfaces; size via `style` (width or height).
 */
export function Wordmark({
  white = false,
  style,
}: {
  white?: boolean;
  style?: CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/indexform-wordmark.png"
      alt="IndexForm"
      style={{
        display: "block",
        height: "auto",
        ...(white ? { filter: WHITE_FILTER } : null),
        ...style,
      }}
    />
  );
}

/**
 * IndexForm oval emblem (top bar / menu icon). Renders the real brand asset at
 * /assets/indexform-emblem.png, inverted to white by default for the red bar.
 */
export function Emblem({
  white = true,
  size = 30,
}: {
  white?: boolean;
  size?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/indexform-emblem.png"
      alt="IndexForm"
      style={{
        height: size,
        width: "auto",
        display: "block",
        ...(white ? { filter: WHITE_FILTER } : null),
      }}
    />
  );
}

export const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
} as const;

export function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7L22 6" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GlobeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
    </svg>
  );
}

/**
 * Placeholder image slot for archive images not yet uploaded to Sanity.
 */
export function ImageSlot({
  src,
  alt = "",
  placeholder = "Image",
  ratio,
}: {
  src?: string | null;
  alt?: string;
  placeholder?: string;
  ratio?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: ratio,
        background: "rgba(200,22,29,0.06)",
        border: "1px solid rgba(200,22,29,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 13,
            letterSpacing: "0.06em",
            color: "rgba(200,22,29,0.5)",
          }}
        >
          {placeholder}
        </span>
      )}
    </div>
  );
}
