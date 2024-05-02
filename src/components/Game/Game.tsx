import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { GameContainer } from "./game.styles";

const Game = () => {
  const [game, setGame] = useState(new Chess());

  function safeGameMutate(modify: any) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }
  function makeRandomMove() {
    const possibleMove = game.moves();

    if (game.game_over() || game.in_draw() || possibleMove.length === 0) return;

    const randomIndex = Math.floor(Math.random() * possibleMove.length);
    safeGameMutate((game: any) => {
      game.move(possibleMove[randomIndex]);
    });
  }

  function onDrop(source: string, target: string) {
    let move = null;
    safeGameMutate((game: any) => {
      move = game.move({
        from: source,
        to: target,
        promotion: "q",
      });
    });
    if (move == null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }
  return (
    <GameContainer>
      <div className="board">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </GameContainer>
  );
};

export default Game;
