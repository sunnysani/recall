<script lang="ts">
    import { MainMenuState } from "$lib/enums/MainMenuState";
    import Button from "../general/Button.svelte";
    import Card from "../general/Card.svelte";
    import TextButton from "../general/TextButton.svelte";

    export let changeState: (newState: MainMenuState) => void;
</script>

<Card>
    <h1 class="playful">Recall Game</h1>
    <br />
    <!-- TODO: Find how to export this state -->
    <Button variant="neutral" on:click={() => changeState(MainMenuState.PassAndPlay)}>Pass and Play</Button>
    <br />
    <Button variant="neutral" on:click={() => changeState(MainMenuState.PlayOnline)}>Play Online</Button>
    <br />
    <br />
    <TextButton on:click={() => changeState(MainMenuState.HowToPlay)}>How to play</TextButton>
</Card>