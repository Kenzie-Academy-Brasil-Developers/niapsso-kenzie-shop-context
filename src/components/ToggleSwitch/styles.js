import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    &::before {
      content: "";
      position: absolute;
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 2px;
      background-color: #15141a;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
  input:checked + span {
    background-color: #2196f3;
  }
  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + span:before {
    transform: translateX(17px);
  }
`;
