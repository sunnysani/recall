import { writable, type Writeable } from 'svelte/store';
import { Player } from '../models/Player';
import { PlayerColor } from '../common/Common.Enums';

class Players {
    players: Player[];

    constructor() {
        this.players = [];
        this.players.push(new Player('Player 1', PlayerColor.BLUE, 0, 0));
        this.players.push(new Player('Player 2', PlayerColor.RED, 0, 0));
        this.players.push(new Player('Player 3', PlayerColor.ORANGE, 0, 0));
        this.players.push(new Player('Player 4', PlayerColor.PURPLE, 0, 0));
        this.players.push(new Player('Player 5', PlayerColor.GREEN, 0, 0));
        this.players.push(new Player('Player 6', PlayerColor.PINK, 0, 0));
    }

    ChangeColor(index: number, newColor: PlayerColor) {
        players[index] = newColor;
        // TODO: Decide Req: Different player can have same color?
    }
}

export const PlayersStore: Writeable<Players> = writable(new Players());
