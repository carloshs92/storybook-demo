import React, {useRef, useContext, MutableRefObject} from "react";
import { styled } from "../theme" ;
import {ThemeContext} from "styled-components";
import {IColor} from "../theme/01-settings/colors";

interface IInputContainerProps {
  error: boolean;
  hasChildrenLeft: boolean;
  theme: IColor;
}

const basePlaceholder = (props: IInputContainerProps) => {
  return `
    color: ${props.theme.text01};
    transition: color 0.2s ease-in;
    font-size: 1.4rem;
    padding: 10px 0;
    line-height: 0!important;
    margin: 0;
  `;
};

const InputContainer = styled.label`
  @properties disabled, loading, error;
  height: 40px;
  box-sizing: content-box;
  position: relative;
  input {
    border: 1px solid ${(props: IInputContainerProps) => {
      return props.error ? props.theme.supportError : props.theme.text01;
    }};
    border-radius: 4px;
    background-image: url('')!important;
    background: transparent;
    color: ${props => props.theme.text01};
    font-size: 1.4rem;
    line-height: 2rem;
    height: 40px;
    left: 0;
    padding: ${props => props.hasChildrenLeft ? "0 70px 0 40px" : "0 70px 0 16px"};
    position: absolute;
    top: 0;
    transition: border 0.2s ease-in, color 0.2s ease-in;
    width: 100%;
    &::-webkit-input-placeholder { ${props => basePlaceholder(props) };}
    &:-moz-placeholder { ${props => basePlaceholder(props) }; }
    &::-moz-placeholder { ${props => basePlaceholder(props) }; }
    &:-ms-input-placeholder { ${props => basePlaceholder(props) }; }
    &[disabled] {
      border: solid 1px ${props => props.theme.disabledBackground};
      color: ${props => props.theme.disabledText};
      &::-webkit-input-placeholder {color: ${props => props.theme.disabledText};}
      &:-moz-placeholder           {color: ${props => props.theme.disabledText};}
      &::-moz-placeholder          {color: ${props => props.theme.disabledText};}
      &:-ms-input-placeholder      {color: ${props => props.theme.disabledText};}
    }
    &:focus {
      outline: none;
      border: 1px solid ${(props: IInputContainerProps) => {
        return props.error ? props.theme.supportError : props.theme.text02;
      }};    
      color: ${props => props.theme.text02};
      &::-webkit-input-placeholder {color: ${props => props.theme.text02};}
      &:-moz-placeholder           {color: ${props => props.theme.text02};}
      &::-moz-placeholder          {color: ${props => props.theme.text02};}
      &:-ms-input-placeholder      {color: ${props => props.theme.text02};}
    }
  }
`;

export interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{};

interface IInputBaseProps extends IInputProps{
  childrenLeft?: JSX.Element | null;
  error?: boolean;
  renderChildrenRight?(inputRef: MutableRefObject<HTMLInputElement>): JSX.Element | null;
};

export const InputBase: React.FC<IInputBaseProps> = (props) => {
  const {renderChildrenRight, childrenLeft, type, error, ...inputProps} = props;
  const inputRef = useRef({} as HTMLInputElement);
  const theme = useContext(ThemeContext);

  return (
    <InputContainer error={!!error} theme={theme} hasChildrenLeft={!!childrenLeft}>
      <input {...inputProps} type={type || "text"} ref={inputRef}/>
      {childrenLeft}
      {renderChildrenRight && renderChildrenRight(inputRef)}
    </InputContainer>
  );
};
