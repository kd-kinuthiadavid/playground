import styled, { keyframes } from "styled-components";

export const ProgressLoader = styled.div`
  display: flex;
  transition: opacity 0.3s ease-in;
  justify-content: center;
  align-items: center;
  margin: 10px 50px;
`;

export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export const LoaderCircle = styled.div`
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  background-color: palevioletred;
  height: 10px;
  width: 10px;
  margin: 5px;
  border-radius: 50%;
  animation: ${bounce} 0.5s ease-in infinite;
`;
