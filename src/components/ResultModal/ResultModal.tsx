import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  ResultModalBtn,
  ResultModalBtnItem,
  ResultModalBtnList,
  ResultModalMainContainer,
  ResultModalText,
  ResultModalTextItem,
  ResultModalTextsList,
  ResultModalTitleStyled,
  ResultWinnerTitleStyled,
} from "./resultModal.styles";

interface IResultModal {
  open: boolean;
  onClose: () => void;
  setGameStarted: (value: boolean) => void;
  setGameOver: (value: boolean) => void;
  blackTimer: number;
  whiteTimer: number;
  winner: string;
}

const ResultModal: FC<IResultModal> = ({
  open,
  onClose,
  setGameStarted,
  setGameOver,
  blackTimer,
  whiteTimer,
  winner,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      open={open}
      onClose={onClose}
    >
      <ResultModalMainContainer>
        <div>
          <ResultModalTitleStyled className="font-konnect">
            {t("resultModal.resultModalTitle")}{" "}
          </ResultModalTitleStyled>
          <ResultWinnerTitleStyled className="font-gravity">
            {t("resultModal.resultWinnerTitle")}:{" "}
            <span className="text-[#ffd82c]">{winner}</span>
          </ResultWinnerTitleStyled>
          <ResultModalTextsList>
            <ResultModalTextItem>
              <ResultModalText className="font-konnect">
                {t("resultModal.timerWhiteText")}:{" "}
                <span className="text-[blue]">{whiteTimer}</span>
              </ResultModalText>
            </ResultModalTextItem>
            <ResultModalTextItem>
              <ResultModalText className="font-konnect">
                {t("resultModal.timerBlackText")}:{" "}
                <span className="text-[#ffd82c]">{blackTimer}</span>
              </ResultModalText>
            </ResultModalTextItem>
          </ResultModalTextsList>
        </div>
        <ResultModalBtnList>
          <ResultModalBtnItem>
            <ResultModalBtn
              onClick={() => {
                navigate("/");
              }}
              className="font-gravity dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]"
            >
              {t("header.home")}
            </ResultModalBtn>
          </ResultModalBtnItem>
          <ResultModalBtnItem>
            <ResultModalBtn
              className="font-gravity dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]"
              onClick={() => {
                setGameStarted(true);
                setGameOver(false);
              }}
            >
              {t("game.gameStartedBtn")}
            </ResultModalBtn>
          </ResultModalBtnItem>
        </ResultModalBtnList>
      </ResultModalMainContainer>
    </Modal>
  );
};

export default ResultModal;
