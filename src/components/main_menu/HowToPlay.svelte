<script lang="ts">
    import { MainMenuState } from "$lib/enums/MainMenuState";
    import Button from "../general/Button.svelte";
    import Card from "../general/Card.svelte";

    export let changeState: (newState: MainMenuState) => void;
</script>

<Card>
    <h1>How to play</h1>
    <p>1. In your turn, try to <span class="bolden">Reveal</span> a card that have the same picture</p>
    <p>2. Wait for other player turn and <span class="bolden">Remember</span> the card's picture</p>
    <p>3. <span class="bolden">Recall</span> which cards have the same picture</p>
    <br />
    <Button variant="negative" on:click={() => changeState(MainMenuState.MainMenu)}>Back</Button>
</Card>

<style>
    .bolden {
        color: var(--color-negative);
        font-weight: bold;
    }
</style>