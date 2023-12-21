<script lang="ts">
    import GameCard from "../../components/game/GameCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    console.log('-----');
    $:console.log(data.game.cardList);
    console.log('====');

    function clickTest() {
        console.log('test');
        data.game.shuffle();
        console.log(data.game.cardList);
        cardList = data.game.cardList;
    }

    $: selectCard = (index:number) => {
        data.game.openCard(index);
        cardIndexGuess1 = data.game.cardIndexGuess1;
        cardIndexGuess2 = data.game.cardIndexGuess2;
    }
 
    let game = data.game;
    let cardList = data.game.cardList;
    $: cardIndexGuess1 = data.game.cardIndexGuess1;
    $: cardIndexGuess2 = data.game.cardIndexGuess2;
</script>

<div class="stage">
    <div class="deck">
        {#each cardList as cardId, index}
        <GameCard expose={cardIndexGuess1 === index || cardIndexGuess2 === index} on:click={() =>{selectCard(index)}}>{cardId}</GameCard>
        {/each}
    </div>
    <p>{cardIndexGuess1}</p>
    <p> | </p>
    <p>{game.cardIndexGuess1}</p>
    <button on:click={clickTest}>Shuffle</button>
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
