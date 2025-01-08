import { getPayload as getPayloadInstance } from "payload";

import configPromise from "@payload-config";

export async function getPayload(): ReturnType<typeof getPayloadInstance> {
    return getPayloadInstance({ config: await configPromise });
}
