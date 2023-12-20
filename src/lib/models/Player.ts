import type { PlayerColor } from "$lib/common/Common.Enums";

export class Player {
    name: string;
    color: PlayerColor;
    point: number;
    score: number;

    constructor(name: string, color: PlayerColor, point: number, score: number) {
        this.name = name;
        this.color = color;
        this.point = point;
        this.score = score;
    }
}