import React, { useState, useContext, createContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import themes from './themes';

const AppContext = createContext();

const Layout = ({children}) => {
  const [ theme, setTheme ] = useState('dark');

  const changeThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <AppContext.Provider value={changeThemeHandler}>
   <ThemeProvider theme={themes[theme]}>
        <LayoutWrapper>
            <GlobalStyle />
            <Header />
            {children}
        </LayoutWrapper>
   </ThemeProvider>
   </AppContext.Provider>
  )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`

const LayoutWrapper = styled.div`
    min-height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
    background-image: ${(props) => props.theme.backgroundImage};
    color: ${(props) => props.theme.color};
`

export default Layout;
export {AppContext};