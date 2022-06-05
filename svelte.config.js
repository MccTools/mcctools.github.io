import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isGhPages = process.env.MY_MODE == "ghpages";
console.log(process.env.MY_MODE);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: isGhPages ? "404.html" : "index.html",
		}),

		alias: {
			$root: "src"
		},

		files: {
			routes: isGhPages ? "src/routes/site" : "src/routes",
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE'],
		},
		
		prerender: {
			default: true,
			entries: ["*"]
		},

		trailingSlash: "always",

		vite: {
			mode: process.env.MY_MODE,
		},
	},
};

export default config;
