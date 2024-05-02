import styled from "styled-components";

export const InfoCardOverlay = styled.div`
  position: relative;
  padding-bottom: 100px;
`;

export const InfoCardContainer = styled.div`
  width: 400px;
  height: 422px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const InfoCardTopBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px;
  background-color: #f0f0f0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #dddddd;
`;

export const InfoCardBottomBox = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 100%;
`;

export const InfoCardBottomText = styled.p`
  font-size: 13px;
  /* line-height: 1.2; */
  line-height: 1.4;
  color: #444444;
`;

export const InfoCardContainerTwo = styled(InfoCardContainer)`
  position: absolute;
  top: 120px;
  left: -30px;
  /* border-color: transparent; */
  /* height: 422px; */
`;

export const CircleOne = styled(Circle)`
  background-color: #fd5e59;
`;

export const CircleTwo = styled(Circle)`
  background-color: #ffbb3b;
`;

export const CircleThree = styled(Circle)`
  background-color: #34c748;
`;
