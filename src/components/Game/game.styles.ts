import styled from "styled-components";

export const GameContainer = styled.div`
  padding-bottom: 10px;
  position: relative;

  .board {
    width: 43%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const GameStartedBtn = styled.button`
  margin-top: 50px;
  transition: transform 0.1s ease;
  height: fit-content;
  width: fit-content;
  padding: 10px 25px;
  font-size: 3rem;
  border: solid 1px var(--accent-light-theme-color);
  background-color: #ffffff;
  color: var(--accent-light-theme-color);
  border-radius: 4px;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(2, 61, 138, 0.2);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const TimerBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TimerBoxWhite = styled(TimerBox)`
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
`;

export const TimerBoxBlack = styled(TimerBox)`
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
`;

export const TimerText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--accent-light-theme-color);
`;
