import { useState, useMemo, useCallback, FC } from "react";
import { Chessboard } from "react-chessboard";
import { Chess, Square } from "chess.js";
import { CustomDialog } from "../CustomDialog";
import { ChessMove } from "../models";
import { GameContainer } from "./game.styles";

interface IGame {
  players?: string[];
  room?: string;
  orientation?: string;
  cleanup?: () => void;
}

const Game: FC<IGame> = ({ players, room, orientation, cleanup }) => {
  const chess = useMemo(() => new Chess(), []); // <- 1
  const [fen, setFen] = useState(chess.fen()); // <- 2
  const [over, setOver] = useState("");

  console.log(players, room, orientation, cleanup);

  const makeAMove = useCallback(
    (move: ChessMove) => {
      try {
        const result = chess.move(move);
        setFen(chess.fen());

        console.log("over, checkmate", chess.isGameOver(), chess.isCheckmate());

        if (chess.isGameOver()) {
          if (chess.isCheckmate()) {
            setOver(
              `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
            );
          } else if (chess.isDraw()) {
            setOver("Draw");
          } else {
            setOver("Game over");
          }
        }

        return result;
      } catch (e) {
        return null;
      }
    },
    [chess]
  );

  function onDrop(sourceSquare: Square, targetSquare: Square) {
    const moveData = {
      from: sourceSquare,
      to: targetSquare,
      color: chess.turn(),
    };

    const move = makeAMove(moveData);

    if (move === null) return false;

    return true;
  }

  return (
    <GameContainer>
      <div className="board">
        <Chessboard position={fen} onPieceDrop={onDrop} /> {/**  <- 4 */}
      </div>
      <CustomDialog // <- 5
        open={Boolean(over)}
        title={over}
        contentText={over}
        handleContinue={() => {
          setOver("");
        }}
      />
    </GameContainer>
  );
};

export default Game;
