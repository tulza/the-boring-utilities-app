import type { CollectionConfig } from "payload";

import { SLUG } from "@libs/consts/slug";

export const Catalogue: CollectionConfig = {
    slug: SLUG.CATALOGUE,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "Title",
            type: "text",
            required: true,
        },
    ],
    upload: true,
};
