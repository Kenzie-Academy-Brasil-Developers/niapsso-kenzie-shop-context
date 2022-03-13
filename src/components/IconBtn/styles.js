import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  background-color: ${({ mode }) => (mode === "add" ? "green" : "red")};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: 0.4s;
  :hover {
    filter: brightness(0.5);
  }
`;
