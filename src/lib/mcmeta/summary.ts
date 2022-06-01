import { GetData } from "$lib/mcmeta/fetch";

export interface RawVersion {
    id: string,
    name: string,
    release_target: string,
    type: "snapshot" | "release",
    stable: boolean,
    data_version: number,
    protocol_version: number,
    data_pack_version: number,
    resource_pack_version: number,
    build_time: string,
    release_time: string,
    sha1: string,
}

export type Version = Omit<RawVersion, "build_time" | "release_time"> & {
    build_time: Date,
    release_time: Date,
}

export function FetchRawVersions() {
    return GetData<RawVersion[]>({ latest: true }, "summary", "versions/data.min.json");
}

export function CompleteVersions(versions: RawVersion[]) : Version[]
{
    return versions.map(v => ({
        ...v,
        build_time: new Date(v.build_time),
        release_time: new Date(v.release_time),
    }));
}

export async function FetchVersions() : Promise<Version[]> {
    const rawVersions = await FetchRawVersions();

    for (let rawVersion of rawVersions) {
        let version: Version = rawVersion as any;
        version.build_time = new Date(rawVersion.build_time);
        version.release_time = new Date(rawVersion.release_time);
    }

    return rawVersions as any[] as Version[];
}
