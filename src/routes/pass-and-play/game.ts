
import { PassAndPlayMode } from "$lib/common/Common.Enums";
import { Card } from "$lib/models/Card";
import { passAndPlayCardPairCountState, passAndPlayModeState, passAndPlayPlayerCountState } from "$lib/store/PassAndPlayStore";
import { ShuffleArray } from '$lib/common/Common.Functions';

export class Game {
    playerCount: number;
    cardPairCount: number;
    mode: PassAndPlayMode;

    // List value of the cards that will be randomed to be served in game's deck
    cardList: number[];
    cardMap: Map<number, Card>;
    
    constructor() {
        passAndPlayPlayerCountState.subscribe(val => {this.playerCount = val});
        passAndPlayCardPairCountState.subscribe(val => {this.cardPairCount = val});
        passAndPlayModeState.subscribe(val => {this.mode = val});

        this.cardList = [];
        this.cardMap = new Map<number, Card>();
        for (let i = 1; i <= this.cardPairCount; i++) {
            let newCardObject: Card = new Card(i, i);
            this.cardMap.set(i, newCardObject);
            this.cardList.push(i);
            this.cardList.push(i);
        }
        this.cardList = ShuffleArray(this.cardList);
        console.log(this.cardList);
    }
}
