import React, {useContext} from 'react';
import { GlobalStyles } from './global-styles';
import { ThemeProvider } from "styled-components";
import { Context } from "./context"


const Theme = ({ children }) => {
  const { useTheme } = useContext(Context); // get the current theme ('light' or 'dark')
  return (
    <ThemeProvider theme={useTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
