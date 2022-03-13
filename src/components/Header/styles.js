import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.color};
  h1 {
    max-width: 100px;
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }
  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;
