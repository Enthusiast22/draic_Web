import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import font1 from "./F1.woff2"
import font2 from "./F2.woff"

export const GlobalStyle=createGlobalStyle`
${normalize()}
html{
    @font-face {
        font-family: 'ethnocentricregular';
        src: url(${font1}) format('woff2'),
             url(${font2}) format('woff');
        font-weight: normal;
        font-style: normal;
    
    }
}

`
