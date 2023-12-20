import { PassAndPlayMode } from "$lib/common/Common.Enums";
import { writable, type Writable } from "svelte/store";

export const passAndPlayPlayerCountState: Writable<number> =
  writable(2);

export const passAndPlayCardPairCountState: Writable<number> = writable(6);

export const passAndPlayModeState: Writable<PassAndPlayMode> = writable(
  PassAndPlayMode.Standard
);
