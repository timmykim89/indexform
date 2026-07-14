import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, sanityEnabled } from "../env";

/**
 * Sanity read client. Only instantiated when a project id is configured;
 * otherwise `null`, and the data layer serves design defaults instead.
 */
export const client = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
