import * as React from "react";
import {styled, Body1} from "../theme";
import {ButtonBase, IButtonProps, IButtonStyledProps} from "./ButtonBase";

const ButtonStyled = styled(ButtonBase)`
    background: ${props => props.theme.uiBackground03};
    border: 1px solid ${props => props.theme.uiBackground02};
    color: ${props => props.theme.interactive01};
    span {
        padding: 0 16px;
    }
    &:hover {
        background: ${props => props.theme.helpers.uiBackground03__hover};
    }
    &:active {
        background: ${props => props.theme.helpers.uiBackground03__active};
    }
    &[loading] {
        &:before {
          color: ${props => props.theme.interactive01};
        }
    }
`;

export const ButtonSecondary: React.FC<IButtonProps> = (props) => {
  const {attributes, ...buttonProps} = props;
    return (
        <ButtonStyled {...buttonProps} attributes={attributes}>
            <Body1>{props.children}</Body1>
        </ButtonStyled>
    )
};

