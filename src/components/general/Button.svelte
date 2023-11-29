<script lang="ts">
    export let minWidth:number = 300;
	export let variant: string | 'neutral' | 'neutral-secondary' | 'positive' | 'positive-secondary' | 'negative' | 'negative-secondary';
</script>

<button class="{variant}" on:click on:focus on:submit style="{minWidth != null ? `min-width: ${minWidth}px`: ""}">
    <slot />
</button>

<style>
    button {
        box-shadow: 0 4px 4px 0px rgb(0, 0, 0, 0.25);
        font-size: 24px;
        font-family: 'Playpen Sans', cursive;
        font-weight: 600;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 15px;
        transition: 0.04s ease-in;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.02);
    }

    .neutral {
        background-color: var(--color-neutral);
        color: var(--color-light);
    }

    .neutral-secondary {
        background-color: var(--color-neutral-accent);
        color: var(--color-neutral);
    }
    
    .positive {
        background-color: var(--color-positive);
        color: var(--color-light);
    }
    
    .positive-secondary {
        background-color: var(--color-positive-accent);
        color: var(--color-positive);
    }
    
    .negative {
        background-color: var(--color-negative);
        color: var(--color-light);
    }
    
    .negative-secondary {
        background-color: var(--color-negative-accent);
        color: var(--color-negative);
    }
</style>
