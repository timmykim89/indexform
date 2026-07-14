export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/**
 * True when a Sanity project id is configured. When false the site renders with
 * built-in design defaults and the /studio route shows a setup notice instead of
 * crashing.
 */
export const sanityEnabled = projectId.length > 0;
