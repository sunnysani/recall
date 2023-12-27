<script lang="ts">
    import { Player } from "$lib/models/Player";
import GameCard from "../../components/game/GameCard.svelte";
    import { Game } from "./game";

    let game = new Game();

    function clickTest() {
        game.shuffle();
    }

    async function selectCard(index:number)  {
        if (game.cardIndexGuess1 === undefined) {
            game.cardIndexGuess1 = index;
        } else if (game.cardIndexGuess2 === undefined) {
            game.cardIndexGuess2 = index;

            // Reactive
            await game.determineOpenedCard();
            game = game;
        }
    }
 
    $: cardList = game.cardList;
    $: cardIndexGuess1 = game.cardIndexGuess1;
    $: cardIndexGuess2 = game.cardIndexGuess2;
</script>

<div class="stage">
    <div class="deck">
        {#each cardList as cardId, index}
        <div class:hide={game.isCardRevealed(index)}>
            <GameCard expose={cardIndexGuess1 === index || cardIndexGuess2 === index} on:click={() =>{selectCard(index)}}>{cardId}</GameCard>
        </div>
        {/each}
    </div>
    <p>{cardIndexGuess1}</p>
    <p> | </p>
    <button on:click={clickTest}>Shuffle</button>
    <ul>
        {#each {length: game.playerCount} as _, i}
            <li>{game.players.players[i].name} : {game.players.players[i].point}</li>
        {/each}
    </ul>
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

    .hide {
        visibility: hidden;
    }
</style>
