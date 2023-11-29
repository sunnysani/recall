import {
  PassAndPlayMode,
  PassAndPlayPlayerCount,
} from "$lib/enums/PassAndPlayEnums";
import { writable, type Writable } from "svelte/store";

export const passAndPlayPlayerCountState: Writable<PassAndPlayPlayerCount> =
  writable(PassAndPlayPlayerCount.TWO);

export const passAndPlayModeCardPairCountState: Writable<number> = writable(6);

export const passAndPlayModeState: Writable<PassAndPlayMode> = writable(
  PassAndPlayMode.Standard
);
