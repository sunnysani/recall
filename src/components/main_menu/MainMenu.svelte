<script lang="ts">
    import Button from "../general/Button.svelte";
    import Card from "../general/Card.svelte";
    import TextButton from "../general/TextButton.svelte";

    export let changeState:Function;
</script>

<Card>
    <h1 class="playful">Recall Game</h1>
    <br />
    <!-- TODO: Find how to export this state -->
    <Button variant="neutral" on:click={() => changeState(1)}>Pass and Play</Button>
    <br />
    <Button variant="neutral">Play Online</Button>
    <br />
    <br />
    <TextButton>How to play</TextButton>
</Card>