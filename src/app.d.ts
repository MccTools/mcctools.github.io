/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface Platform {}

	// interface Session {}

	interface Stuff {
		versions: import("$lib/mcmeta/summary").Version[]
		version: import("$lib/mcmeta/summary").Version,
		versionPath: string,
	}
}

declare const __SITE__: string;