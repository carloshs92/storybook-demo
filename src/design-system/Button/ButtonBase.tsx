import * as React from "react";
import { styled } from "../theme";

export enum HeightButton {
    small = 32,
    medium = 40,
    large = 48
}

export interface IButtonStyledProps {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  heightButton?: HeightButton;
}

export interface IButtonProps {
  heightButton?: HeightButton;
  attributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {heightButton, attributes, ...buttonProps} = props;
  return <button {...attributes} {...buttonProps}>{props.children}</button>;
};

export const ButtonBase = styled(Button)`
  @properties disabled, loading;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  padding: 0 16px;
  height: ${(props: IButtonStyledProps) => {
    return `${props.heightButton || HeightButton.medium}px`;
  }}
  line-height: ${(props: IButtonStyledProps) => {
    return `${props.heightButton || HeightButton.medium}px`;
  }}
  transition-property: background, border, color;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  &[disabled] {
    border: 1px solid ${props => props.theme.disabledBackground}!important;
    background: ${props => props.theme.disabledBackground}!important;
    cursor: default;
    color: ${props => props.theme.text03}!important;
  }
  &[loading] {
    text-indent: -9999px;
    white-space: nowrap;
    overflow: hidden;
    &:before {
      color: ${props => props.theme.text01};
      display: block;
      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
      margin: ${(props: IButtonStyledProps) => {
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
    height: ${(props: IButtonStyledProps) => {
      return `${(props.heightButton || HeightButton.medium) / 2}px`;
    }};
    opacity: 0;
    width: ${(props: IButtonStyledProps) => {
      return `${(props.heightButton || HeightButton.medium) / 2}px`;
    }};      
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
