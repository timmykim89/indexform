import type { SchemaTypeDefinition } from "sanity";

import { archive } from "./archive";
import { offer } from "./offer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [offer, archive],
};
