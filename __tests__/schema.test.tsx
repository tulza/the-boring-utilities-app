import { cardData, CardSchema } from "@shared/data/CardData";

import { describe, expect, test } from "@jest/globals";

describe("Test Schema", () => {
    test("if card data matches the schema", () => {
        expect(CardSchema.array().safeParse(cardData).success).toBe(true);
    });
});
