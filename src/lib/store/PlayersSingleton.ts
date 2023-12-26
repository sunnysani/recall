import { writable, type Writeable } from 'svelte/store';
import { Player } from '../models/Player';
import { PlayerColor } from '../common/Common.Enums';

class Players {
    Player[] players;

    constructor() {
        players = [];
        players.push(new Player('Player 1', PlayerColor.BLUE, 0, 0));
        players.push(new Player('Player 2', PlayerColor.RED, 0, 0));
        players.push(new Player('Player 3', PlayerColor.ORANGE, 0, 0));
        players.push(new Player('Player 4', PlayerColor.PURPLE, 0, 0));
        players.push(new Player('Player 5', PlayerColor.GREEN, 0, 0));
        players.push(new Player('Player 6', PlayerColor.PINK, 0, 0));
    }
}

export const PlayersSingleton: Writeable = writable(Players());
