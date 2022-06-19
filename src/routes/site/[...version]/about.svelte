<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>A collection of GUI tools to ease the development of MC datapacks and resource packs.</p>
	<p>These tools are available both as a web app at <a href="https://mcctools.github.io/">mcctools.github.io</a>,
		and as a dedicated desktop app available from the <a href="https://github.com/MccTools/mcctools.github.io/releases">github releases</a>.</p>
	<p>The desktop app is more fully featured than the web app, thanks to <a href="https://tauri.studio/">Tauri</a> making it possible to interface more natively with the desktop environment.</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
