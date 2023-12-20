export class Card {
    id: number;
    item: any;
    revealed: boolean;

    constructor(id: number, item: any, revealed: boolean = false) {
        this.id = id;
        this.item = item;
        this.revelaed = revealed;
    }
}