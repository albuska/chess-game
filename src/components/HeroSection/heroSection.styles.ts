import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  /* padding-top: 150px; */
  display: flex;
  justify-content: center;
  gap: 200px;
  align-items: center;
  padding-bottom: 100px;
`;

export const AboutMyselfContainer = styled.article`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: 100%;
  gap: 14px;
`;

export const AboutMyselfTopText = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--accent-light-theme-color);
`;

export const AboutMyselfTitle = styled.h1`
  font-size: clamp(1vh, 6rem, 4vw);
  color: var(--accent-light-theme-color);
`;

export const AboutMyselfBottomText = styled.p`
  font-weight: 300;
  line-height: 1.2;
  font-size: 1.2rem;
`;

export const AboutMyselfConnectBtn = styled(Link)`
  margin-top: 50px;
  transition: transform 0.1s ease;
  height: fit-content;
  width: fit-content;
  padding: 10px 25px;
  font-size: 3rem;
  border: solid 1px var(--accent-light-theme-color);
  background-color: transparent;
  color: var(--accent-light-theme-color);
  border-radius: 4px;
  transition: all 0.12s ease;

  &:hover {
    background-color: rgba(2, 61, 138, 0.2);
    cursor: pointer;
    transform: scale(1.1);
  }
`;
