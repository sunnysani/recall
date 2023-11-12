<div class="card">
    <slot />
</div>

<style>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 500px;
        padding: 2em 4em;
        background-color: var(--color-light);
        box-shadow: 0 4px 4px 0px #26001480;
        border-radius: 2rem;
    }
</style>
