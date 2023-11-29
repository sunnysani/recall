export enum PassAndPlayPlayerCount {
  TWO = 2,
  THREE,
  FOUR,
  FIVE,
  SIX,
}

export enum PassAndPlayMode {
  Standard = "Standard",
  RevealAndSwitch = "RevealAndSwitch",
}

export function PassAndPlayModeEnumToString(passAndPlayMode: PassAndPlayMode) {
  switch (passAndPlayMode) {
    case PassAndPlayMode.Standard: {
      return "Standard";
    }
    case PassAndPlayMode.RevealAndSwitch: {
      return "Reveal & Switch";
    }
    default: {
      return "Standard";
    }
  }
}
