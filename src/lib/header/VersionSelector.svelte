<script lang="ts">
	import { page } from '$app/stores';
	import { site } from '$lib/globals';
	import type { Version } from '$lib/mcmeta/summary';
	import Panel from '$lib/Panel.svelte';
	import type { Page } from '@sveltejs/kit';

	function filterVersions(versions: Version[], oldSnapshots: boolean, selectedVersion?: Version) : Version[] {
		return versions.reduce(
			(state, version) => {
				if (version.type == 'release') {
					state.versions.push(version);
					state.foundRelease = true;
				} else if (
					oldSnapshots ||
					!state.foundRelease ||
					(selectedVersion && selectedVersion.id === version.id)
				) {
					state.versions.push(version);
				}

				return state;
			},
			{ foundRelease: false, versions: [] as Version[] }
		).versions;
	}

	$: oldSnapshots = false;
	$: displayedVersions = filterVersions($page.stuff.versions, oldSnapshots, $page.stuff.version);

	function versionUrl(version: Version, page: Page) : string {
		let url = page.url.pathname;
        if (url.startsWith(site)) {
            url = url.slice(site.length + 1);
        }

		let slash = url.indexOf('/');
        if (slash === 0) {
            url = url.slice(1);
            slash = url.indexOf('/');
        }

        let prefix: string = "";
		if (slash < 0) {
			prefix = url;
		} else {
            prefix = url.slice(0, slash);
        }

        let lowerPrefix = prefix.toLowerCase();
        if (["latest","snapshot","release"].includes(lowerPrefix) || page.stuff.versions.find(v => v.id.toLowerCase() === lowerPrefix)) {
            url = slash < 0 ? "" : url.slice(slash + 1);
        }

        return url ? `${site}/${version.id}/${url}` : `${site}/${version.id}`;
	}
</script>

<div class="selector">
	<button type="button">Versions</button>
	<div>
		<Panel padding="0.5em">
			<div class="dropdown">
				<ul>
					{#each displayedVersions as version (version.id)}
						<li class="version" class:selected={version.id == $page.stuff.version?.id}><a href={versionUrl(version, $page)}>{version.name}</a></li>
					{/each}
				</ul>
				<div class="options">
					<label>
						<input type="checkbox" bind:checked={oldSnapshots} />
						Old Snapshots
					</label>
				</div>
			</div>
		</Panel>
	</div>
</div>

<style>
	.selector {
		position: relative;
	}

	.options {
		display: flex;
		flex-wrap: wrap;
		gap: 0.1em 0.5em;
		max-width: 80vw;
	}

	.selector > div {
		display: none;
		position: absolute;
		right: 0;
		width: max-content;
	}

	.dropdown {
		display: grid;
		grid-auto-flow: row;
		gap: 0.5em;
	}

	.dropdown > ul {
        display: grid;
        grid-auto-rows: max-content;
        justify-items: stretch;

		max-height: 50vh;
		max-width: 80vw;
		overflow: auto;
		margin: 0;
		padding: 0;
		list-style: none;
	}

    .version {
        display: contents;
    }

    .version a {
        color: inherit;
        text-decoration: none;
    }

	.selector:hover > div,
	.selector:focus-within > div {
		display: inline-block;
	}

	button {
		display: grid;
		grid-auto-flow: column;
		gap: 0.25em;
		align-items: center;
		appearance: none;
		border-color: var(--info-border);
		border-radius: 0.5em;
		border-width: 0.1em;
		border-style: solid;
		background-color: var(--primary-bg);
	}

	button::after {
		content: '';
		width: 0;
		height: 0;
		border-top: 0.4em solid transparent;
		border-bottom: 0.4em solid transparent;
		border-right: 0.5em solid var(--info-border);
		margin-left: 0.1em;
		margin-right: 0.1em;
	}

	.selector:hover button::after,
	.selector:focus-within button::after {
		border-left: 0.35em solid transparent;
		border-right: 0.35em solid transparent;
		border-top: 0.5em solid var(--info-border);
		border-bottom: none;
		margin-left: 0;
		margin-right: 0;
	}
</style>
