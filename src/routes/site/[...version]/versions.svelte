<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Versions</title>
	<meta name="description" content="List of minecraft versions" />
</svelte:head>

<div class="content">
	<h1>Versions</h1>
	<ul>
	{#each $page.stuff.versions as version (version.id)}
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