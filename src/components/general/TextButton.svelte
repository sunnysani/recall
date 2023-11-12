<button on:click on:focus on:submit>
    <slot />
</button>

<style>
    button {
        font-size: 24px;
        color: var(--color-neutral);
        background: none;
        border: none;
        font-family: 'Playpen Sans', cursive;
        font-weight: 600;
        transition: 0.1s ease-in-out;
    }

    button:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
</style>
