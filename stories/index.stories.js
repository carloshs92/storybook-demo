import React, {Fragment} from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';

import { Button, Welcome } from '@storybook/react/demo';
import {ButtonPrimary, ButtonSecondary, HeightButton} from "../src/components/Button";

storiesOf('Welcome', module)
    .addDecorator(withInfo)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(centered)
    .addParameters({ percy: { widths: [375, 1280], rtl: true } })
    .add('Primary', () => {
        return (
            <ButtonPrimary onClick={action('clicked')} heightButton={HeightButton.small} >Botón Principal</ButtonPrimary>
        )
    })
    .add('Primary Loader', () => {
        return (
            <ButtonPrimary onClick={action('clicked')} heightButton={HeightButton.small} loading={''}>Botón Principal</ButtonPrimary>
        )
    })
    .add('Primary Disabled', () => {
        return (
            <ButtonPrimary onClick={action('clicked')} heightButton={HeightButton.small} disabled={true}>Botón Principal</ButtonPrimary>
        )
    })
    .add('Secondary', () => {
        return (
            <ButtonSecondary onClick={action('clicked')}  heightButton={HeightButton.small}>Botón Secundario</ButtonSecondary>
        )
    })
    .add('Secondary Loader', () => {
        return (
            <ButtonSecondary onClick={action('clicked')}  heightButton={HeightButton.small} loading={''}>Botón Secundario</ButtonSecondary>
        )
    })
    .add('Secondary Disabled', () => {
        return (
            <ButtonSecondary onClick={action('clicked')}  heightButton={HeightButton.small} disabled={true}>Botón Secundario</ButtonSecondary>
        )
    });

storiesOf('Welcome', module)
    .addDecorator(withInfo)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
