import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import GlobalStyles from "./theme/GlobalStyles";
import { ThemeProvider } from 'styled-components';
import {theme} from "design-system/theme";

ReactDOM.render(
    <React.Fragment>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </React.Fragment>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
