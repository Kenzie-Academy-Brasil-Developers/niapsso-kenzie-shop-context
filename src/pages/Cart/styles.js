import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  gap: 15px;
  max-height: 500px;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 850px) {
    width: 70%;
  }
`;
