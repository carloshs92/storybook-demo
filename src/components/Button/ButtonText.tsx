import * as React from "react";
import styled from "styled-components";
import {ButtonBase, IButtonBaseProps} from "./ButtonBase";

const ButtonStyled = styled(ButtonBase)`
    background: var(--white);
    color: var(--turquoise);
`;

export const ButtonText: React.FC<IButtonBaseProps> = (props) => {
    return (
        <ButtonStyled {...props}>
            <span>{props.children}</span>
        </ButtonStyled>
    )
};

