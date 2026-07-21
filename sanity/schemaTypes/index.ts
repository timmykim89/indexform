import type { SchemaTypeDefinition } from "sanity";

import { archive } from "./archive";
import { offerImages } from "./offerImages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [archive, offerImages],
};
