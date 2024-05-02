import styled from "styled-components";

export const AsideEmailPartContainer = styled.aside`
  writing-mode: vertical-lr;
  right: 10px;
  position: fixed;
  bottom: 14vh;
  user-select: text;
  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 100;
`;

export const AsideEmailPartText = styled.p`
  font-weight: 300;
  line-height: 1.2;
  font-size: 1.2rem;
  color: rgba(4, 4, 4, 0.4);
`;
