export type McMetaType = "summary" | "registries" | "data" | "assets" | "atlas";
export type VersionID = { latest: true } | { latest?: false, id: string};

function mcmeta(version: VersionID, type: McMetaType) : string {
    let url = "https://raw.githubusercontent.com/misode/mcmeta/";
    
    if (!version.latest) {
        url += `${version.id}-`
    }

    return url + type
}

export async function GetData<T = any>(version: VersionID, type: McMetaType, path: string) : Promise<T>
{
    // TODO: cache results
    var response = await fetch(encodeURI(`${mcmeta(version, type)}/${path}`));
    return await response.json();
}