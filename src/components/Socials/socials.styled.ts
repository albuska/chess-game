import styled from "styled-components";
import { Icon } from "../Icon";

export const SocialsListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  bottom: 14vh;
  left: 10px;
  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 100;
`;

export const SocialsItem = styled.li`
  &:hover {
    .socials-icon {
      transform: scale(1.7);
      transform-origin: left;
    }
  }
`;

export const SocialsIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  color: var(--accent-light-theme-color);
  transition: transform 0.2s ease-in-out;
`;
