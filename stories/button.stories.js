import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import {ButtonPrimary, ButtonSecondary, ButtonIcon} from "../src/design-system/Button";
import {Body1} from "../src/design-system/theme";
import {StoryComponent} from "./index.stories";
import Icon from "../src/design-system/Icon";
/*
storiesOf('WelcomeSa', module)
    .addParameters({
        component: Welcome,
    })
    .addDecorator(withInfo)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
*/

storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addParameters({ percy: { widths: [375, 1280], rtl: true } })
    .add('Primary', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')}>Primary Button</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Primary with Loader', () => {
        return (
            <StoryComponent>
                <ButtonPrimary onClick={action('clicked')} attributes={{loading: ""}}>Primary Loading</ButtonPrimary>
            </StoryComponent>
        )
    })
    .add('Secondary', () => {
        return (
            <StoryComponent>
                <ButtonSecondary onClick={action('clicked')}>Secondary Button</ButtonSecondary>
            </StoryComponent>
        )
    })
    .add('Secondary with Loader', () => {
        return (
            <StoryComponent>
                <ButtonSecondary onClick={action('clicked')} attributes={{loading: ""}}>Primary Loading</ButtonSecondary>
            </StoryComponent>
        )
    })
    .add('Icon', () => {
        return (
            <StoryComponent>
                <ButtonIcon onClick={action('clicked')} icon={<Icon name={"Notification"}/>}>Demo</ButtonIcon>
            </StoryComponent>
        )
    })
    .add('Icon with Text', () => {
        return (
            <StoryComponent>
                <ButtonIcon onClick={action('clicked')} icon={<Icon name={"Edit"}/>} text={<Body1>Editar</Body1>}>Demo</ButtonIcon>
            </StoryComponent>
        )
    })
