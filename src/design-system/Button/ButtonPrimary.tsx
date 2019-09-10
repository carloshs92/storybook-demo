import * as React from "react";
import {styled, Body1} from "../theme";
import {ButtonBase, IButtonProps, IButtonStyledProps} from "./ButtonBase";

const ButtonStyled = styled(ButtonBase)`
  @properties disabled, loading;
  background: ${props => props.theme.interactive01};
  color: ${props => props.theme.text03};
  span {
    padding: 0 16px;
  }
  &:hover {
    background: ${props => props.theme.helpers.interactive01__hover};
  }
  &:active {
    background: ${props => props.theme.helpers.interactive01__active};
  }
  &[loading] {
    &:before {
      color: ${props => props.theme.text03};
    }
  }
  ${Body1} {
    color: ${props => props.theme.text03};
  }
`;

export const ButtonPrimary: React.FC<IButtonProps> = (props) => {
  const {attributes, ...buttonProps} = props;
    return (
        <ButtonStyled {...buttonProps} attributes={attributes}>
            <Body1>{props.children}</Body1>
        </ButtonStyled>
    )
};

