<script lang="ts" context="module">
    import type { Version } from "$lib/mcmeta/summary";
    import type { Load } from "@sveltejs/kit";

    let versions: Version[];

    export const load: Load = ({ stuff }) => {
        versions = (stuff as any).versions;
        return {};
    }
</script>

<svelte:head>
	<title>Versions</title>
	<meta name="description" content="List of minecraft versions" />
</svelte:head>

<div class="content">
	<h1>Versions</h1>

    <ul>
	{#each versions as version (version.id)}
		<li>{version.name}</li>
	{/each}
    </ul>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
</style>