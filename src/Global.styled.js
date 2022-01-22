import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Tahoma, sans-serif;
    letter-spacing: 0.5px;
    // background-color: #F3F6F6;
    background-color: #dc675a;
    color: #333333;
  }
  
  input[type="text"], input[type="number"] {
    border-radius: 4px;
    border: 1px solid #939595;
    outline: transparent;
    padding: 4px 6px;
    font-size: 14px;
  }
  
  input[type="radio"], input[type="checkbox"] {
    accent-color: #bf4c08;
    width: 16px;
    height: 16px;
    line-height: 26px;
    border: 1px solid #939595;
  }
  
  input[type="color"] {
    background-color: #ffffff;
    border-radius: 4px;
    width: 60px;
    border: 1px solid #939595;
  }
  
  // button {
  //   background-color: #bf4c08;
  //   color: white;
  //   border: none;
  //   border-radius: 4px;
  //   padding: 8px 16px;
  //   font-size: 16px;
  //   font-weight: bold;
  //   letter-spacing: 1px;
  //   cursor: pointer;

  //   &:hover {
  //     background-color: #9D3E07;
  //   }
  // }
`;
