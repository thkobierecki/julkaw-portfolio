'use client'
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    --scroll-behavior: smooth!important;
    scroll-behavior: smooth!important;
  }

  body {
    background-color: #F9FAFF;
  }
`;

export default GlobalStyles;
