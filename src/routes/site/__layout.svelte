<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '$root/app.css';
	import { dev, mode } from '$app/env';
</script>

<script lang="ts" context="module">
	import { site } from '$lib/globals';
	import { CompleteVersions } from '$lib/mcmeta/summary';
	import type { Load } from './__types/__layout';

	export const load: Load = async ({fetch}) => {
		const versionsResponse = await fetch(`${site}/version_list.json`);
		const versions = CompleteVersions(await versionsResponse.json());

		return {
			stuff: {
				versions
			}
		};
	}
</script>

<Header />

<main>
	<slot />
</main>

{#if dev}
	<footer>
		<p>Running {mode === "tauri" ? "in Tauri" : "on Github Pages"}</p>
	</footer>
{/if}

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
