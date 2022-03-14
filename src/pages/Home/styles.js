import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 100px auto;
  display: flex;
  justify-content: center;
  @media (min-width: 950px) {
    margin: 30px auto;
  }
`;

export const Content = styled.ul`
  display: flex;
  overflow: scroll;
  margin-left: 15px;
  gap: 15px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 950px) {
    flex-flow: row wrap;
    flex: 1;
    max-height: 750px;
    max-width: 1000px;
  }
`;
