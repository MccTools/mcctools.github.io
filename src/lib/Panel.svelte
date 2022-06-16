<script lang="ts">
	export let border: boolean = true;
    export let type: "primary"|"secondary" = "primary";
</script>

<div class:border class:panel-primary={type === "primary"} class:panel-secondary={type === "secondary"}>
	<slot />
</div>

<style>
	div {
		padding: 1em;
	}

	.border {
        border-color: var(--standard-border);
        border-radius: 0.5em;
        border-width: 0.2em;
        border-style: solid;
		box-shadow: 0px 0px 1em hsl(0, 0%, 10%);
	}
</style>
