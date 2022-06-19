<script lang="ts">
	import { isGhPages } from '$lib/globals';
	import NotifyPanel from '$lib/NotifyPanel.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Welcome to MCC Tools</h1>

<NotifyPanel type="info">
	<p>
		This {isGhPages ? 'site' : 'app'} is still in development. This home page will eventually have actual
		content.
	</p>
	<p>Watch the <a href="https://github.com/MccTools/mcctools.github.io/" target="_blank">repository</a> for updates or to contribute!</p>
</NotifyPanel>

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
</style>
