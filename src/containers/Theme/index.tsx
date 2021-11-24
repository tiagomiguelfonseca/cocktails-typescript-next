import { createGlobalStyle } from "styled-components";

// http://chir.ag/projects/name-that-color/
export const colours = {
  defaultGreen: "#05220b",
  defaultWhite: "white"
};

export const fontFamilies = {
  default: "Open Sans, sans-serif",
};

export const theme = {
  textStyles: {},
  containerWidth: "950px",
  containerPadding: "15px",
  colours: {
    ...colours,
  },
};

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans', sans-serif";
  background-color: ${colours.defaultGreen};
  margin: 0 auto;
  height: 100%;
  color: ${colours.defaultWhite}
}

a:link, a:visited {
  color: ${() => colours.defaultWhite};
  text-decoration: none;
} 

* {
  box-sizing: border-box
}

ul {
 margin: 0; 
padding: 0;
}
`;
export default GlobalStyle;
