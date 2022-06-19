<script lang="ts">
	import { page } from '$app/stores';
	import { site } from '$lib/globals';
	import logo from './svelte-logo.svg';
	import VersionSelector from './VersionSelector.svelte';
</script>

<header>
	<nav>
		<div class="corner panel-secondary">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>
		<ul class="panel-secondary">
			<li class:active={$page.routeId === '[...version]' || $page.routeId === `${site.slice(1)}/[...version]`}>
				<a sveltekit:prefetch href="{site}/{$page.stuff.versionPath}">Home</a>
			</li>
			<li class:active={$page.routeId === '[...version]/about' || $page.routeId === `${site.slice(1)}/[...version]/about`}>
				<a sveltekit:prefetch href="{site}/{$page.stuff.versionPath}about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<VersionSelector/>
	<div class="corner">
		<a href="https://github.com/MccTools/mcctools.github.io/" target="_blank">
			<!-- srcset="/gh-mark/GitHub-Mark-Light-32px.png,
					/gh-mark/Github-Mark-Light-64px.png 2x" -->
			<img src="/gh-mark/GitHub-Mark-Light-32px.png" alt="repository" />
		</a>
	</div>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto auto;
		justify-items: left;
		align-items: center;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
		justify-items: center;
	}

	.corner img {
		width: 2em;
		height: 2em;
	}

	nav {
		display: grid;
		grid-auto-columns: auto;
		grid-auto-flow: column;
		align-items: center;
	}

	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-auto-flow: column;
		height: 100%;
		align-items: center;
		gap: 1em;
	}

	nav a {
		position: relative;
		letter-spacing: 0.05em;
		text-decoration: none;
		color: var(--secondary-text);
	}

	nav a:hover {
		color: var(--standard-border);
	}
	
	.active a::after {
		content: '';
		position: absolute;
		--extend: 0.2em;
		width: calc(100% + var(--extend) * 2);
		height: 0.2em;
		border-radius: 100vw;
		background-color: var(--standard-border);
		bottom: -0.2em;
		left: calc(var(--extend) * -1);
		transform: translateY(100%);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--secondary-bg);
	}
</style>
