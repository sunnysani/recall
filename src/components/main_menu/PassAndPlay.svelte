<script lang="ts">
    import { PassAndPlayMode, MainMenuState, PassAndPlayModeEnumToString } from "$lib/common/Common.Enums";
    import { passAndPlayCardPairCountState, passAndPlayModeState, passAndPlayPlayerCountState } from "$lib/store/PassAndPlayStore";
    import Card from "../general/Card.svelte";
    import Button from "../general/Button.svelte";
    import CounterButton from "../general/CounterButton.svelte";
    import SlideVerticalOption from "../general/SlideVerticalOption.svelte";


    let playerCount: number;
    passAndPlayPlayerCountState.subscribe(val => {playerCount = val});
    $:onChangePlayerCount = function (newPlayerCount:number):void {
        passAndPlayPlayerCountState.set(newPlayerCount);
    }

    let cardPairCount: number;
    passAndPlayCardPairCountState.subscribe(val => {cardPairCount = val});
    $:onChangeCardPairCount = function (newCardPairCount: number) {
        if (newCardPairCount < 6 || newCardPairCount > 15) {
            return;
        }
        passAndPlayCardPairCountState.set(newCardPairCount);
    }

    let mode: PassAndPlayMode;
    passAndPlayModeState.subscribe(val => {mode = val});
    $:onChangePassAndPlayMode = function (newPassAndPlayMode: PassAndPlayMode) {
        passAndPlayModeState.set(newPassAndPlayMode);
    }

    export let changeState: (newState: MainMenuState) => void;
</script>

<Card>
    <h1>Pass And Play</h1>
    <div class="player-count-selection">
        <h3>Player Count:</h3>
        <div>
            <span><Button minWidth={50} variant={playerCount===2 ? 'neutral' : 'neutral-secondary'} on:click={() => onChangePlayerCount(2)}>2P</Button></span>
            <span><Button minWidth={50} variant={playerCount===3 ? 'neutral' : 'neutral-secondary'} on:click={() => onChangePlayerCount(3)}>3P</Button></span>
            <span><Button minWidth={50} variant={playerCount===4 ? 'neutral' : 'neutral-secondary'} on:click={() => onChangePlayerCount(4)}>4P</Button></span>
        </div>
        <br />
        <div>
            <span><Button minWidth={50} variant={playerCount===5 ? 'neutral' : 'neutral-secondary'} on:click={() => onChangePlayerCount(5)}>5P</Button></span>
            <span><Button minWidth={50} variant={playerCount===6 ? 'neutral' : 'neutral-secondary'} on:click={() => onChangePlayerCount(6)}>6P</Button><div></span>
        </div>
    </div>
    <div class="card-pair-count-selection">
        <h3 style="margin-right: 10px">Card Pair Count: </h3>
        <CounterButton value={cardPairCount} onChange={onChangeCardPairCount} />
    </div>
    <br />
    <div class="mode-selection">
        <h3 style="margin-right: 10px">Mode: </h3>
        <SlideVerticalOption stringValue={PassAndPlayModeEnumToString(mode)} onChange={onChangePassAndPlayMode} value={mode} valueList={Object.keys(PassAndPlayMode)} />
    </div>
    <br />
    <div class="button-action">
        <Button variant="negative" minWidth={150} on:click={() => changeState(MainMenuState.MainMenu)}>BACK</Button>
        <div style="width: 20px;" />
        <a href="/pass-and-play"><Button variant="neutral" minWidth={250}>PLAY</Button></a>
    </div>
</Card>

<style>
    h1 {
        margin: 0;
    }

    h3 {
        font-weight: 500;
    }

    .player-count-selection {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .player-count-selection div *, .card-pair-count-selection {
        margin: 0px 10px
    }

    .mode-selection, .card-pair-count-selection, .mode-selection {
        display: flex;
    }

    .button-action {
        display: flex;
    }
</style>
