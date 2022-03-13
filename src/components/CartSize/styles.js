import styled from "styled-components";

export const Wrapper = styled.span`
  display: ${({ size }) => (size > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border: 0.1px solid ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  border-radius: 100%;
  width: 18px;
  height: 18px;
  font-size: var(--title-2);
  position: absolute;
  transform: translateX(30px) translateY(48px);
  z-index: 1;
  transition: 0.4s;
`;
