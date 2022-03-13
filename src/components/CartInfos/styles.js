import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 275px;
  height: 300px;
  padding: 20px;
  transition: 0.4s;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      filter: brightness(0.8);
    }
  }
`;
