import * as React from "react";
import styled from "styled-components";
import {theme} from "../../theme/theme";

export enum HeightButton {
    small = 32,
    medium = 40,
    large = 48
}

export interface IButtonBaseProps {
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    heightButton: HeightButton;
}

const Button: React.FC<{}> = (props) => {
    return <button {...props}>{props.children}</button>;
};

export const ButtonBase = styled(Button)`
    @properties disabled, loading;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    padding: 0 16px;
    height: ${(props: IButtonBaseProps) => {
        return `${props.heightButton || HeightButton.medium}px`;
    }}
    line-height: ${(props: IButtonBaseProps) => {
        return `${props.heightButton || HeightButton.medium}px`;
    }}
    transition-property: background, border, color;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    &[disabled] {
        border: 1px solid ${theme.colors.disabled}!important;
        background: ${theme.colors.disabled}!important;
        cursor: default;
        color: ${theme.colors.white}!important;
    }
    &[loading] {
        text-indent: -9999px;
        white-space: nowrap;
        overflow: hidden;
        &:before {
            color: ${theme.colors.darkGrey};
            display: block;
            filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
            margin: ${(props: IButtonBaseProps) => {
                return `${(props.heightButton || HeightButton.medium) / 8}px auto`;
            }};
            opacity: 1;
        }
    }
    &:before {
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: rotate;
        animation-timing-function: linear;
        border: 4px solid;
        border-left-color: transparent;
        border-radius: 50%;
        content: '';
        display: none;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
        height: ${(props: IButtonBaseProps) => {
            return `${(props.heightButton || HeightButton.medium) / 2}px`;
        }};
        opacity: 0;
        width: ${(props: IButtonBaseProps) => {
            return `${(props.heightButton || HeightButton.medium) / 2}px`;
        }};;        
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
