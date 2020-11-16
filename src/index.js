import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';
import { ThemeProvider } from "styled-components";
import { ContextProvider, Context } from "./context"
import Theme from './theme'


ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
          <Theme />
            <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
