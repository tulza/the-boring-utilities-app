import cardData from "@data/cards/CardData.json";
import { describe, expect, test } from "@jest/globals";
import { CardSchema } from "@typings/card";

describe("Test Schema", () => {
    test("if card data matches the schema", () => {
        expect(CardSchema.array().safeParse(cardData).success).toBe(true);
    });
});
