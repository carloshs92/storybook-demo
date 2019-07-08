import * as React from "react";
import styled from "styled-components";
import {theme} from "../../theme/theme";
import {ButtonBase, IButtonBaseProps} from "./ButtonBase";

const ButtonStyled = styled(ButtonBase)`
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightGrey1};
    color: ${theme.colors.turquoise};
    span {
        padding: 0 16px;
    }
    &:hover {
        background: ${theme.helpers.white1};
    }
    &:active {
        background: ${theme.helpers.white2};
    }
    &[loading] {
        &:before {
          color: ${theme.colors.turquoise};
        }
    }
`;

export const ButtonSecondary: React.FC<IButtonBaseProps> = (props) => {
    return (
        <ButtonStyled {...props}>
            <span>{props.children}</span>
        </ButtonStyled>
    )
};

