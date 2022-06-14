<script lang="ts" context="module">
	import { site } from '$lib/globals';
	import { CompleteVersions } from '$lib/mcmeta/summary';
	import type { Load } from './__types/__layout';

	export const load: Load = async ({ fetch }) => {
		const versionsResponse = await fetch(`${site}/version_list.json`);
		const versions = CompleteVersions(await versionsResponse.json());

		return {
			stuff: {
				versions
			}
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '$root/app.css';
	import { dev, isGhPages } from '$lib/globals';
	import Panel from '$lib/Panel.svelte';
</script>

<div class="site panel-primary">
	<Header />

	<main>
		<slot />
	</main>
	
	{#if dev || isGhPages}
		<Panel border={false} type="secondary">
			<footer>
				{#if isGhPages}
					<p>
						Check out the dedicated
						<a href="https://github.com/MccTools/mcctools.github.io/releases" target="_blank">desktop app</a>!
					</p>
				{/if}
				{#if dev}
					<p class="dev-msg">Running {isGhPages ? 'on Github Pages' : 'in Tauri'}</p>
				{/if}
			</footer>
		</Panel>
	{/if}
</div>

<style>
	.site {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	main {
		padding: 1em;
	}

	footer {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 1em;
	}

	.dev-msg {
		grid-column: -1;
	}
</style>
