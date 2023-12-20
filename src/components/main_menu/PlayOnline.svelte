<script lang="ts">
    import { MainMenuState } from "$lib/common/Common.Enums";
    import Button from "../general/Button.svelte";
    import Card from "../general/Card.svelte";
    import TextButton from "../general/TextButton.svelte";

    export let changeState: (newState: MainMenuState) => void;
</script>

<Card>
    Play Online
</Card>