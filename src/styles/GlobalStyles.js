import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset}
  
    @font-face {
      font-family: 'NanumSquareRound';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    
    
    * {
        font-family: "NanumSquareRound"; 
        box-sizing: border-box;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
      outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s;
      -webkit-text-fill-color: #fff !important;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    select {
      padding: 0;
    }
`;

export default GlobalStyles;
