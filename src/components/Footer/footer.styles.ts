import styled from "styled-components";

export const FooterContainer = styled.footer`
  user-select: none;
  padding-bottom: 18px;
  display: grid;
  grid-template-rows: min-content min-content min-content;
  row-gap: 52px;
  height: fit-content;
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const FooterIconWrapper = styled.div`
  animation: pulse 1s infinite;
  width: 24px;
  height: 24px;
`;

export const FooterPulsingHeart = styled.div`
  width: 24px;
  height: 24px;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 12px;
    top: 2px;
    width: 12px;
    height: 19.2px;
    background: ${(props) => props.theme.colors.yellow};
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: pulsecolor 1s infinite;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: pulsecolor 1s infinite;
  }

  @keyframes pulse {
    10% {
      transform: scale(1.1);
    }
  }

  @keyframes pulsecolor {
    10% {
      background: ${(props) => props.theme.colors.blue};
    }
  }
`;
