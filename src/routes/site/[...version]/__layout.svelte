<script lang="ts" context="module">
	import type { Version } from '$lib/mcmeta/summary';
	import type { Load } from './__types/__layout';

	export const load: Load = ({ params: { version: versionID }, stuff }) => {
		if (!stuff.versions || stuff.versions.length === 0) {
			return {
				status: 500,
				error: 'Versioned page loaded without versions list'
			};
		}

		let version: Version | undefined = undefined;
        console.log(versionID);
		if (!versionID || versionID.toLowerCase() === 'latest') {
			version = stuff.versions[0];
		} else {
			const lowerID = versionID.toLowerCase();
			switch (lowerID) {
				case 'latest':
				case 'snapshot':
					version = stuff.versions[0];
					break;
				case 'release':
					version = stuff.versions.find((v) => v.type == 'release');
					if (!version) {
						return {
							status: 404,
							error: 'No releases found (how did you manage this?)'
						};
					}
					break;
				default:
					version = stuff.versions.find((v) => v.id.toLowerCase() === lowerID);
                    if (!version) {
                        return {
                            status: 404,
                            error: "Version not found"
                        };
                    }
					break;
			}
		}

		return {
            stuff: {
                ...stuff,
                version,
				versionPath: versionID ? versionID + '/' : "",
            }
        };
	};
</script>

<slot></slot>