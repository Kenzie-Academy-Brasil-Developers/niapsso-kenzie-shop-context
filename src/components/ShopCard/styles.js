import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border: 0.5px solid ${({ theme }) => theme.color};
  padding: 5px;
  border-radius: 4px;
  .img-container {
    transition: 0.4s;
    background-image: ${({ theme }) => `url(${theme.backgroundImage})`};
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }
  .buy-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    margin-top: 5px;
    > span {
      filter: brightness(0.8);
    }
  }
`;
