import type { PassAndPlayMode } from "$lib/common/Common.Enums";
import { Card } from "$lib/models/Card";
import { passAndPlayCardPairCountState, passAndPlayModeState, passAndPlayPlayerCountState } from "$lib/store/PassAndPlayStore";
import { ShuffleArray, Sleep } from '$lib/common/Common.Functions';
import { type Players, PlayersStore } from "$lib/store/Players";

export class Game {
    playerCount: number = 2;
    cardPairCount: number | undefined;
    mode: PassAndPlayMode | undefined;

    // List value of the cards that will be randomed to be served in game's deck
    cardList: number[];
    cardMap: Map<number, Card>;

    playerTurnIndex: number;
    cardIndexGuess1: number | undefined;
    cardIndexGuess2: number | undefined;
    wait: boolean = false;

    players: Players;

    constructor() {
        passAndPlayPlayerCountState.subscribe(val => {this.playerCount = val});
        passAndPlayCardPairCountState.subscribe(val => {this.cardPairCount = val});
        passAndPlayModeState.subscribe(val => {this.mode = val});
        PlayersStore.subscribe(val => {this.players = val});

        this.cardList = [];
        this.cardMap = new Map<number, Card>();
        for (let i = 1; i <= this.cardPairCount!; i++) {
            let newCardObject: Card = new Card(i, i);
            this.cardMap.set(i, newCardObject);
            this.cardList.push(i);
            this.cardList.push(i);
        }
        this.cardList = ShuffleArray(this.cardList);
        console.log(this.cardList);

        this.playerTurnIndex = 0;
    }

    async determineOpenedCard() {
        await Sleep(1000);
        console.log(this.cardMap.get(this.cardList[this.cardIndexGuess1!]));
        console.log(this.cardMap.get(this.cardList[this.cardIndexGuess2!]));
        
        console.log(this.cardMap.get(this.cardList[this.cardIndexGuess1!]) === this.cardMap.get(this.cardList[this.cardIndexGuess2!]));
        if (this.cardMap.get(this.cardList[this.cardIndexGuess1!]) === this.cardMap.get(this.cardList[this.cardIndexGuess2!])) {
            console.log('yes!');
            this.cardMap.get(this.cardList[this.cardIndexGuess1!])!.revealed = true;
            this.players.players[this.playerTurnIndex].point++;
        } else {
            console.log('no!');
            if (this.playerTurnIndex === this.playerCount - 1) {
                this.playerTurnIndex = 0;
            } else {
                this.playerTurnIndex++;
            }
        }

        this.closeCard();
    }

    isCardRevealed(index: num) {
        return this.cardMap.get(this.cardList[index])!.revealed;
    }

    closeCard() {
        this.cardIndexGuess1 = undefined;
        this.cardIndexGuess2 = undefined;
    }

    shuffle() {
        this.cardList = ShuffleArray(this.cardList);
    }
}
