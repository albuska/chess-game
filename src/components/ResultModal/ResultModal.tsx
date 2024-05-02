import { Modal } from "@mui/material";
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
  blackTimer: number;
  whiteTimer: number;
  winner: string;
}

const ResultModal: FC<IResultModal> = ({
  open,
  onClose,
  setGameStarted,
  blackTimer,
  whiteTimer,
  winner,
}) => {
  const { t } = useTranslation();
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
          <ResultModalTitleStyled className="font-konnect dark:text-[var(--accent-dark-theme-color)]">
            {t("resultModal.resultModalTitle")}:{" "}
          </ResultModalTitleStyled>
          <ResultWinnerTitleStyled className="font-gravity dark:text-[var(--accent-dark-theme-color)]">
            {t("resultModal.resultWinnerTitle")}: <span>{winner}</span>
          </ResultWinnerTitleStyled>
          <ResultModalTextsList>
            <ResultModalTextItem>
              <ResultModalText className="font-konnect">
                {t("resultModal.timerWhiteText")}: <span>{whiteTimer}</span>
              </ResultModalText>
            </ResultModalTextItem>
            <ResultModalTextItem>
              <ResultModalText className="font-konnect">
                {t("resultModal.timerBlackText")}: <span>{blackTimer}</span>
              </ResultModalText>
            </ResultModalTextItem>
          </ResultModalTextsList>
        </div>
        <ResultModalBtnList>
          <ResultModalBtnItem>
            <ResultModalBtn className="font-gravity dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]">
              {t("header.home")}
            </ResultModalBtn>
          </ResultModalBtnItem>
          <ResultModalBtnItem>
            <ResultModalBtn
              className="font-gravity dark:bg-[#64FFDB55] dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]"
              onClick={() => {
                setGameStarted(true);
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
