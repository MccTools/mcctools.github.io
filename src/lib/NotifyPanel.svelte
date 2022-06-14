<script lang="ts">
    export let type: "info"|"warning" = "info";

    $: info = type === "info";
    $: warning = type === "warning";
</script>

<div class:info class:warning class="panel-primary">
	<slot />
</div>

<style>
	div {
		padding: 1em;
        border-color: var(--standard-border);
        border-radius: 0.5em;
        border-width: 0.4em;
        border-style: solid;
	}

    div::before {
        width: 2rem;
        height: 2rem;
        font-size: 1.3rem;
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 50%;
        float: left;
        margin-right: 0.5em;
        color: var(--secondary-text);
    }

    .info {
        border-color: var(--info-border);
    }

    .info::before {
        content: "i";
        background-color: var(--info-border);
    }

    .warning {
        border-color: var(--warning-border);
    }

    .warning::before {
        content: "!";
        background-color: var(--warning-border);
    }
</style>
