import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import {
  GameContainer,
  GameStartedBtn,
  TimerBoxBlack,
  TimerBoxWhite,
  TimerText,
} from "./game.styles";
import { ECurrentPlayer } from "../models";
import getRandomThinkTime from "../utils/getRandomThinkTime";
import whiteHorse from "../../assets/images/horseWhite.png";
import blackHorse from "../../assets/images/horse.png";
import { ResultModal } from "../ResultModal";
import { FIXED_TIMER_TIME } from "../../constants/globalConstants";

const Game = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [game, setGame] = useState(new Chess());
  const [whiteTimer, setWhiteTimer] = useState<number>(FIXED_TIMER_TIME);
  const [blackTimer, setBlackTimer] = useState<number>(FIXED_TIMER_TIME);
  const [currentPlayer, setCurrentPlayer] = useState<ECurrentPlayer>(
    ECurrentPlayer.WHITE
  );
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");

  const { t } = useTranslation();

  useEffect(() => {
    if (game && game.turn) {
      if (game.turn() === "w") {
        setCurrentPlayer(ECurrentPlayer.WHITE);
      } else {
        setCurrentPlayer(ECurrentPlayer.BLACK);
      }
    }
    if (game.game_over()) {
      setShowResultModal(true);
    }
  }, [game]);

  useEffect(() => {
    if (whiteTimer === 0) {
      setGameOver(true);
      setGameStarted(false);
      setWinner(ECurrentPlayer.BLACK);
      setShowResultModal(true);
      return;
    }

    if (blackTimer === 0) {
      setGameOver(true);
      setGameStarted(false);
      setWinner(ECurrentPlayer.WHITE);
      setShowResultModal(true);
      return;
    }
  }, [whiteTimer, blackTimer, gameOver]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const decreaseTimer = () => {
    if (!gameStarted || game.game_over() === true) return;
    if (currentPlayer === "white") {
      if (whiteTimer > 0) {
        setWhiteTimer((prevTimer) => prevTimer - 1);
      }
    } else {
      if (blackTimer > 0) {
        setBlackTimer((prevTimer) => prevTimer - 1);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(decreaseTimer, 1000);
    return () => clearInterval(interval);
  }, [whiteTimer, blackTimer, currentPlayer, gameStarted, decreaseTimer]);

  const safeGameMutate = (modify: any) => {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  };
  const makeRandomMove = () => {
    const possibleMove = game.moves();

    if (
      game.game_over() ||
      game.in_draw() ||
      possibleMove.length === 0 ||
      gameOver
    ) {
      setGameOver(true);
      setGameStarted(false);
      setShowResultModal(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * possibleMove.length);
    safeGameMutate((game: any) => {
      game.move(possibleMove[randomIndex]);
    });
  };

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

    if (currentPlayer !== ECurrentPlayer.BLACK) {
      setTimeout(() => {
        makeRandomMove();
      }, getRandomThinkTime() * 1000);
    }

    return true;
  }

  return (
    <GameContainer>
      <div className="board">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
      <TimerBoxWhite>
        <img src={whiteHorse} width={150} height={75} alt="White horse" />
        <TimerText className="font-gravity dark:text-[var(--accent-dark-theme-color)]">
          {t("game.timerWhiteText")}:{" "}
          <span
            style={{
              color: currentPlayer === ECurrentPlayer.WHITE ? "red" : "",
            }}
          >
            {whiteTimer}
          </span>{" "}
          {whiteTimer > 1 ? t("game.secondsText") : t("game.secondText")}
        </TimerText>
      </TimerBoxWhite>
      <TimerBoxBlack>
        <img src={blackHorse} width={150} height={75} alt="Black horse" />
        <TimerText className="font-gravity dark:text-[var(--accent-dark-theme-color)]">
          {t("game.timerBlackText")}:{" "}
          <span
            style={{
              color: currentPlayer === ECurrentPlayer.BLACK ? "red" : "",
              width: "40px",
            }}
          >
            {blackTimer}
          </span>{" "}
          {blackTimer > 1 ? t("game.secondsText") : t("game.secondText")}
        </TimerText>
      </TimerBoxBlack>
      {!gameStarted && (
        <Modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          open={true}
        >
          <GameStartedBtn
            className="font-gravity dark:bg-[#64FFDB55] dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]"
            onClick={() => {
              setGameStarted(true);
              setGameOver(false);
              setGame(new Chess());
              setWhiteTimer(FIXED_TIMER_TIME);
              setBlackTimer(FIXED_TIMER_TIME);
            }}
          >
            {t("game.gameStartedBtn")}
          </GameStartedBtn>
        </Modal>
      )}
      {showResultModal && (
        <ResultModal
          open={showResultModal}
          onClose={() => {
            setShowResultModal(false);
          }}
          setGameStarted={setGameStarted}
          setGameOver={setGameOver}
          blackTimer={blackTimer}
          whiteTimer={whiteTimer}
          setGame={setGame}
          setWhiteTimer={setWhiteTimer}
          setBlackTimer={setBlackTimer}
          setShowResultModal={setShowResultModal}
          winner={
            winner
              ? winner.charAt(0).toUpperCase() + winner.slice(1)
              : game.in_checkmate()
              ? "White"
              : "Black"
          }
        />
      )}
    </GameContainer>
  );
};

export default Game;
