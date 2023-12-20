import { Game } from "./game";

export const load: PageLoad = (() => {
    const game = new Game();

    return {
        game,
    }
});
