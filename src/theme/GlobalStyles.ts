import { createGlobalStyle } from "styled-components";
import { Lato } from "./fonts";
import normalize from "./normalize";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
${normalize}
@import url("${Lato}");

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: ${theme.fonts.Lato};
  color: ${theme.colors.darkGrey};
  font-weight: 300;
  background: ${theme.colors.lightGrey3};
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a {
  color: ${theme.colors.turquoise};
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles;
