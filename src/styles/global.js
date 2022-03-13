import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
  }
  
  body, input, button {
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    transition: background-color 0.4s, color 0.4s;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }

  button {
    cursor: pointer;
  }
  
  :root {
    --title-1: 1rem;
    --title-2: 0.75rem;
    --title-3: 0.5rem;
    --dark-color: "#fbfbfe";
    --light-color: "#15141a";
  }
`;
