import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  CATEGORY_LABELS,
  DEFAULT_ARCHIVE,
  DEFAULT_OFFERS,
  type ArchiveCategory,
  type ArchiveItem,
  type Offer,
} from "./content";

const OFFER_IMAGES_QUERY = `*[_type == "offerImages"][0]{ image1, image2, image3 }`;

const ARCHIVE_QUERY = `*[_type == "archive"] | order(orderIndex asc, _createdAt asc){
  _id, title, category, coverImage, brand, location, result, scope,
  verticalImages, horizontalImage
}`;

function imgUrl(source: unknown, w: number, h: number): string | null {
  const b = urlForImage(source as never);
  return b ? b.width(w).height(h).url() : null;
}

/**
 * The three offers are fixed site content; only their images come from Sanity
 * (offerImages document). Falls back to the built-in placeholder images.
 */
export async function getOffers(): Promise<Offer[]> {
  if (!client) return DEFAULT_OFFERS;
  try {
    const doc = await client.fetch<{
      image1?: unknown;
      image2?: unknown;
      image3?: unknown;
    } | null>(OFFER_IMAGES_QUERY);
    if (!doc) return DEFAULT_OFFERS;
    const imgs = [doc.image1, doc.image2, doc.image3];
    return DEFAULT_OFFERS.map((o, i) => ({
      ...o,
      image: imgUrl(imgs[i], 900, 506) ?? o.image,
    }));
  } catch {
    return DEFAULT_OFFERS;
  }
}

/**
 * Archive items from Sanity, or the design defaults when Sanity is not
 * configured or has no published items.
 */
export async function getArchive(): Promise<ArchiveItem[]> {
  if (!client) return DEFAULT_ARCHIVE;
  try {
    const docs = await client.fetch<
      {
        _id: string;
        title?: string;
        category?: ArchiveCategory;
        coverImage?: unknown;
        brand?: string;
        location?: string;
        result?: string;
        scope?: string[];
        verticalImages?: unknown[];
        horizontalImage?: unknown;
      }[]
    >(ARCHIVE_QUERY);
    if (!docs || docs.length === 0) return DEFAULT_ARCHIVE;
    return docs.map((d) => {
      const category = (d.category ?? "curation") as ArchiveCategory;
      return {
        id: d._id,
        category,
        categoryLabel: CATEGORY_LABELS[category] ?? "",
        title: d.title ?? "",
        coverImage: imgUrl(d.coverImage, 600, 800),
        brand: d.brand ?? "",
        location: d.location ?? "",
        result: d.result ?? "",
        scope: d.scope ?? [],
        verticalImages: [
          imgUrl(d.verticalImages?.[0], 600, 800),
          imgUrl(d.verticalImages?.[1], 600, 800),
        ],
        horizontalImage: imgUrl(d.horizontalImage, 1280, 720),
      };
    });
  } catch {
    return DEFAULT_ARCHIVE;
  }
}
