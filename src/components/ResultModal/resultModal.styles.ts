import styled from "styled-components";
import bg from "../../assets/images/resultModalBg.png";

export const ResultModalMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #161616;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center bottom -88%;
  background-size: contain;
  padding: 50px;
`;

export const ResultModalBtnList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ResultModalBtnItem = styled.li`
  width: 50%;
`;

export const ResultModalTitleStyled = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--accent-dark-theme-color);
`;

export const ResultWinnerTitleStyled = styled.h1`
  font-size: clamp(1vh, 6rem, 4vw);
  color: var(--accent-dark-theme-color);
`;

export const ResultModalTextsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const ResultModalTextItem = styled.li``;
export const ResultModalText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--accent-dark-theme-color);
`;

export const ResultModalBtn = styled.button`
  width: 200px;
  padding: 10px 25px;
  margin-top: 20px;
  font-size: 1rem;
  border: solid 1px var(--accent-dark-theme-color);
  background-color: transparent;
  color: var(--accent-dark-theme-color);
  border-radius: 4px;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(2, 61, 138, 0.2);
    cursor: pointer;
    transform: scale(1.1);
  }
`;
