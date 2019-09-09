import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import {ButtonPrimary} from "../src/design-system/Button";
import {StoryComponent} from "./index.stories";
/*
storiesOf('WelcomeSa', module)
    .addParameters({
        component: Welcome,
    })
    .addDecorator(withInfo)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
*/

storiesOf('ButtonSa', module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addParameters({ percy: { widths: [375, 1280], rtl: true } })
    .add('Primary', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Demo</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Primary Loader', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Demo</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Primary Disabled', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Demo</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Secondary', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Demo</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Secondary Loader', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Demo</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Secondary Disabled', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Demo</ButtonPrimary>
            </StoryComponent>
        )
    });
