export type ChessMove = {
  from: string;
  to: string;
  promotion?: string;
};

export enum ECurrentPlayer {
  WHITE = "white",
  BLACK = "black",
}
