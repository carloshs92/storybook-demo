import * as React from "react";
import {ButtonBase, IButtonProps, IButtonStyledProps} from "./ButtonBase";
import {styled} from "../theme";

const ButtonStyled = styled(ButtonBase)`
  @properties disabled, loading;  
  align-items: center;
  background: ${props => props.theme.interactive01};
  display: flex;
  justify-content: center;
  span {
    padding: 0 8px;
    color: ${props => props.theme.text03};
  }
  svg {
    margin-right: 2px;
    fill: ${props => props.theme.text03};
    height: 24px;
    width: 24px;
  }
  &:hover {
    background: ${props => props.theme.helpers.interactive01__hover};
  }
  &:active {
    background: ${props => props.theme.helpers.interactive01__active};
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

interface IButtonIconProps extends IButtonProps {
  icon?: JSX.Element;
  text?: JSX.Element;
}

export const ButtonIcon: React.FC<IButtonIconProps> = (props) => {
  const {icon, text, attributes, ...buttonProps} = props;
  return (
    <ButtonStyled {...buttonProps} attributes={attributes}>
      <Content>
        {icon}
        {text}
      </Content>
    </ButtonStyled>
  )
};

