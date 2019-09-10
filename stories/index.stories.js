import React, {Fragment} from 'react';
import { configure } from '@storybook/react';
import {darkTheme, lightTheme} from "./theme";
import {GlobalStyles} from "../src/design-system/theme";
import { ThemeProvider } from 'styled-components';

const req = require.context('./', true, /\.stories\.js$/);

const loadStories = () => {
    console.log(req);
    req.keys().forEach(req)
};

configure(loadStories, module);

export const StoryComponent = (props) => {
    return <ThemeProvider theme={lightTheme}>
        <Fragment>
            <GlobalStyles/>
            {props.children}
        </Fragment>
    </ThemeProvider>
};
