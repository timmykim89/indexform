import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId, sanityEnabled } from "../env";

const builder = sanityEnabled
  ? imageUrlBuilder({ projectId, dataset })
  : null;

/**
 * Resolve a Sanity image reference to a URL, or return null when Sanity is not
 * configured / the source is empty (callers fall back to a placeholder slot).
 */
export function urlForImage(source: SanityImageSource | undefined | null) {
  if (!builder || !source) return null;
  return builder.image(source).auto("format").fit("max");
}
