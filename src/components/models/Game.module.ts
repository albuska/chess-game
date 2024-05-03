export type ChessMove = {
  from: string;
  to: string;
  promotion?: string;
};

export enum ECurrentPlayer {
  WHITE = "white",
  BLACK = "black",
}

export enum EChangeTheme {
  DARK = "dark",
  LIGHT = "light",
}

export enum EChangeLanguage {
  UK = "uk",
  EN = "en",
}
