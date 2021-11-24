import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from ".";

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;