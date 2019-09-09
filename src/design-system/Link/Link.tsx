import React, {useRef} from "react";
import { styled, Small1 } from "../theme" ;

const LinkBase = styled.a`
  ${Small1} {
    color: ${props => props.theme.interactive01}
  }
`;

export interface ILinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{};

export const Link: React.FC<ILinkProps> = (props) => {
  const {children, ref, ...linkProps} = props;
  return <LinkBase {...linkProps}><Small1 alternative={true}>{children}</Small1></LinkBase>;
};
