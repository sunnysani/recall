import type { PassAndPlayMode } from "$lib/common/Common.Enums";
import { Card } from "$lib/models/Card";
import { passAndPlayCardPairCountState, passAndPlayModeState, passAndPlayPlayerCountState } from "$lib/store/PassAndPlayStore";
import { ShuffleArray } from '$lib/common/Common.Functions';

export class Game {
    playerCount: number | undefined;
    cardPairCount: number | undefined;
    mode: PassAndPlayMode | undefined;

    // List value of the cards that will be randomed to be served in game's deck
    cardList: number[];
    cardMap: Map<number, Card>;

    playerTurnIndex: number;
    cardIndexGuess1: number | undefined;
    cardIndexGuess2: number | undefined;

    constructor() {
        passAndPlayPlayerCountState.subscribe(val => {this.playerCount = val});
        passAndPlayCardPairCountState.subscribe(val => {this.cardPairCount = val});
        passAndPlayModeState.subscribe(val => {this.mode = val});

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

    determineOpenedCard() {
        if (this.cardMap.get(this.cardIndexGuess1!) === this.cardMap.get(this.cardIndexGuess1!)) {
            console.log('yes!');
        } else {
            console.log('no!');
        }
    }

    openCard(index:number) {
        if (this.cardIndexGuess1 === undefined) {
            this.cardIndexGuess1 = index;
        } else if (this.cardIndexGuess2 !== undefined) {
            return;
        }
        else {
            if (this.cardIndexGuess1 === index) {
                return;
            }
            this.cardIndexGuess2 = index;
            
            setTimeout(() => {
                this.determineOpenedCard();
            }, 0); // TODO: Set this to planned UX
        }
    }

    closeCard() {
        this.cardIndexGuess1 = undefined;
        this.cardIndexGuess2 = undefined;
    }

    shuffle() {
        this.cardList = ShuffleArray(this.cardList);
    }
}
