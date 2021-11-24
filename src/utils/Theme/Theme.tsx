import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from '.';

// interface Props {
//     // any other props that come into the component, you don't have to explicitly define children.
// }

const Theme = ({ children }: { children: any }) => {
    return (
        <ThemeProvider theme={ theme }>
            <GlobalStyle />
            { children }
        </ThemeProvider>
    )
}

export default Theme