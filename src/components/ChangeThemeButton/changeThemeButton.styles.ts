import styled from "styled-components";

interface IProps {
  theme: string;
}

export const ChangeThemeButtonContainer = styled.div<IProps>`
  display: flex;
  align-items: center;
  gap: 6px;

  .icon-theme {
    width: 20px;
    height: 20px;
  }
`;

export const ChangeThemeButtonOverlay = styled.button<IProps>`
  width: 40px;
  height: 22px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "#ddd"};
  border-radius: 32px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) =>
    theme === "dark" ? "flex-end" : "flex-start"};
`;

export const ChangeThemeInsideCircle = styled.div<IProps>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #ffffff;
`;
