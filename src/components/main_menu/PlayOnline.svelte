<script lang="ts">
    import type { MainMenuState } from "$lib/enums/MainMenuState";
    import Button from "../general/Button.svelte";
    import Card from "../general/Card.svelte";
    import TextButton from "../general/TextButton.svelte";

    export let changeState: (newState: MainMenuState) => void;
</script>

<Card>
    Play Online
</Card>