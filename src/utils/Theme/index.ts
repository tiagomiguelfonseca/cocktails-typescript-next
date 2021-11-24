import { createGlobalStyle } from "styled-components";


// http://chir.ag/projects/name-that-color/
export const colours = {
  bostonBlue: "#428bca",
  stTropaz: "#2a6496",
  maroonFlush: "#C52D2F",
  softPeach: "#f9f2f4",
  mantis: "#a78d9b",
  defaultWhite: "#ffffff",
  mainBrown: "#230312",
  defaultGreen: "rgb(4, 27, 9)",
};

export const fontFamilies = {
  heading: "Open Sans, sans-serif",
  body: "Open Sans, sans-serif",
  code: "Verdana",
  navBar: "Open Sans, sans-serif",
};

export const theme = {
  textStyles: {
    canon: {
      tag: "h1",
      fontSize: [2, 3, 4],
      fontWeight: 600,
      lineHeight: ["32px", "36px", "56px"],
      fontFamily: fontFamilies.heading,
    },
    navy: {
      tag: "h2",
      fontSize: [0, 1, 2],
      fontWeight: 700,
      lineHeight: ["18px", "20px", "24px"],
      fontFamily: fontFamilies.navBar,
    },
    trafalgar: {
      tag: "p",
      fontWeight: "bold",
      fontSize: [0, 1, 2],
      fontFamily: fontFamilies.body,
      lineHeight: ["18px", "20px", "22px"],
    },
    paragon: {
      tag: "h2",
      fontSize: [1, 2, 3],
      fontWeight: 600,
      fontFamily: fontFamilies.heading,
      lineHeight: ["20px", "26px", "1.1"],
    },
    doublePica: {
      fontSize: [6, 6, 10],
      fontWeight: 400,
      fontFamily: fontFamilies.heading,
      lineHeight: ["24px", "24px", "30px"],
    },
    greatPrimer: {
      tag: "h3",
      fontWeight: 400,
      fontSize: [1, 2, 3],
      fontFamily: fontFamilies.heading,
      lineHeight: ["20px", "22px", "24px"],
    },
    bodyCopy: {
      tag: "p",
      fontWeight: 900,
      fontSize: [0, 1],
      fontFamily: fontFamilies.body,
      lineHeight: ["18px", "20px", "22px"],
    },
    code: {
      tag: "span",
      px: "4px",
      py: "2px",
      lineHeight: "22px",
      color: colours.maroonFlush,
      bg: colours.softPeach,
      borderRadius: 4,
      fontFamily: fontFamilies.code,
    },
    underline: {
      textDecoration: "underline",
    },
  },
  containerWidth: "1170px",
  containerPadding: "15px",
  fontSizes: [12, 14, 16, 20, 36, 52],
  breakpoints: ["319px", "599px"],
  colours: {
    ...colours,
  },
  fontFamilies: {
    ...fontFamilies,
  }
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
  color: ${() => colours.mantis};
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
