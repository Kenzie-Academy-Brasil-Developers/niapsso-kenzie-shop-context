import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s, color 0.4s;
  background-color: ${({ theme }) => theme.button.backgroundColor};
  color: ${({ theme }) => theme.button.color};
  padding: 0.5em;
  border: none;
  border-radius: 4px;
  min-width: 67px;
`;
