import { createGlobalStyle } from "styled-components";
import * as color from "./colors";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    letter-spacing: .5px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
    color: ${color.text};
  }

  /* base */
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a, a:visited {
    color: ${color.textlink};
    text-decoration: none;
  }

  a:hover {
    color: ${color.textlinkhover}
    text-decoration: underline;
  }

  a:active {
    color: ${color.textlinkactive}
  }

  textarea, input {
    color: ${color.text};
  }

  ::placeholder {
    color: ${color.text};
  }
`;
