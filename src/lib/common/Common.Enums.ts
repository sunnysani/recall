export enum MainMenuState {
    MainMenu,
    PassAndPlay,
    PlayOnline,
    HowToPlay,
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

export enum PlayerColor {
  BLUE,
  RED,
  ORANGE,
  PURPLE,
  GREEN,
  PINK,
}
