<script lang="ts">
  import GameCard from "../../components/game/GameCard.svelte";
import type { PageData } from "./$types";

    export let data: PageData;
    console.log('-----');
    $:console.log(data.game.cardList);
    console.log('====');
</script>

<div class="stage">
    <div class="deck">
        {#each data.game.cardList as cardId}
        <GameCard></GameCard>
            <p>{cardId}</p>
        {/each}
    </div>
</div>

<style>
    .stage {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
    }

    .deck {
        height: 100%;
        width: 100%;
        display: flex;
    }
</style>
