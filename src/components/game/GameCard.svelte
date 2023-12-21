<script lang="ts">
    export let expose:boolean = false;
    console.log(expose);
</script>

<button on:click on:focus on:submit>
    <div class="card-game" class:hide-visibility={!expose}>
        <slot />
    </div>
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
        background-color: inherit;
        width: 100px;
        height: 200px;
    }

    button:hover {
        cursor: pointer;
    }

    .card-game {
        width: 10px;
        height: 10px;
        background-color: red;
    }

    .hide-visibility {
        visibility: hidden;
    }
</style>