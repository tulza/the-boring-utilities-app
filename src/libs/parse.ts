import { z, ZodObject, ZodRawShape } from "zod";

export const parseJson = <T extends ZodRawShape>(json: string, schema: ZodObject<T>): z.infer<typeof schema> | null => {
    try {
        const data = JSON.parse(json); // parse the JSON
        return schema.parse(data); // validate the data
    } catch (error) {
        console.error("Invalid JSON or type mismatch:", error);
        return null;
    }
};

export const validateJson = <T extends ZodRawShape>(json: string, schema: ZodObject<T>): boolean => {
    try {
        const data = JSON.parse(json); // parse the JSON
        schema.parse(data); // validate the data
        return true;
    } catch (error) {
        console.error("Invalid JSON or type mismatch:", error);
        return false;
    }
};
