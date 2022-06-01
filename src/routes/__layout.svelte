<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<script lang="ts" context="module">
	import { CompleteVersions } from '$lib/mcmeta/summary';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({fetch, stuff}) => {
		const versionsResponse = await fetch("/version_list.json");
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

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

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

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
