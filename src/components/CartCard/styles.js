import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid ${({ theme }) => theme.color};
  padding: 5px;
  border-radius: 4px;
  .item-quantidity {
    font-size: var(--title-2);
    margin-left: 10px;
    filter: brightness(0.8);
  }
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-image: ${({ theme }) => `url(${theme.backgroundImage})`};
    > img {
      width: 80%;
    }
  }
  > span {
    display: none;
  }
  .buy-container {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      font-size: var(--title-2);
      filter: brightness(0.8);
    }
    > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  @media (min-width: 700px) {
    > span {
      display: inline;
    }
  }
`;
