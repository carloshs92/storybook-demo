import * as React from "react";
import {ButtonBase, IButtonProps, IButtonStyledProps} from "./ButtonBase";
import {styled} from "../theme";

const ButtonStyled = styled(ButtonBase)`
  @properties disabled, loading;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 2px;
  }
`;

interface IButtonTextProps extends IButtonProps {
  icon?: JSX.Element;
  text?: JSX.Element;
}

export const ButtonText: React.FC<IButtonTextProps> = (props) => {
  const {icon, text, attributes, ...buttonProps} = props;
  return (
    <ButtonStyled {...buttonProps} attributes={attributes}>
      {icon}
      {text}
    </ButtonStyled>
  )
};

