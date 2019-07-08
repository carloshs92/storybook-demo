import * as React from "react";
import styled from "styled-components";
import {theme} from "../../theme/theme";
import {ButtonBase, IButtonBaseProps} from "./ButtonBase";

const ButtonStyled = styled(ButtonBase)`
    @properties disabled, loading;
    background: ${theme.colors.turquoise};
    color: ${theme.colors.white};
    span {
        padding: 0 16px;
    }
    &:hover {
        background: ${theme.helpers.turquoise1};
    }
    &:active {
        background: ${theme.helpers.turquoise2};
    }
    &[loading] {
        &:before {
          color: ${theme.colors.white};
        }
    }
`;

export const ButtonPrimary: React.FC<IButtonBaseProps> = (props) => {
    return (
        <ButtonStyled {...props}>
            <span>{props.children}</span>
        </ButtonStyled>
    )
};

