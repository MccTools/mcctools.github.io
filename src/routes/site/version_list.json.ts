import type { RequestHandler } from "@sveltejs/kit";
import { FetchRawVersions, type RawVersion } from "$lib/mcmeta/summary";

export const get: RequestHandler<Record<string, string>, RawVersion[]> = async () => {
    const versions = await FetchRawVersions();
    return {
        body: versions
    };
}