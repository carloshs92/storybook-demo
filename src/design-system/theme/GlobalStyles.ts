import { createGlobalStyle } from "styled-components";
import { Lato } from "./01-settings/familyFonts";

const GlobalStyle = createGlobalStyle`
@import url("${Lato.src}");

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: ${Lato.family};
}

input {
  font-family: ${Lato.family};
}

*,
*::before,
*::after {
  box-sizing: border-box;
  outline: none;
  transition: background 0.2s ease-in-out;
}

a {
  text-decoration: none;
}

span, a, div, label, h1, h2, h3, h4, h5, h6, *::before,
*::after  {
  word-break: break-word;
}
img {
  max-width: 100%;
  height: auto;
}
div[id^=__lpform_] {
  display: none!important;
}
`;

export default GlobalStyle;
