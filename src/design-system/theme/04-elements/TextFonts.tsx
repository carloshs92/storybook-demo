import React from 'react';
import {FONT_BLACK, FONT_BOLD, FONT_LIGHT} from "../01-settings/familyFonts";
import {styled} from "../01-settings/colors";

interface ITextFontsProps {
  alternative?: boolean;
}

const getWeight = (fontAlternative: string) => {
  return (props: ITextFontsProps) => {
    return  props.alternative ? fontAlternative : FONT_LIGHT;
  }
};

export const Heading1 = styled.h1`
  color: ${props => props.theme.text02}
  font-size: 2.4rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BLACK)};
  line-height: 3.2rem;
`;

export const Heading2 = styled.h2`
  color: ${props => props.theme.text02}
  font-size: 1.8rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BLACK)};
  line-height: 2.8rem;
`;

export const SubHeading1 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.8rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BLACK)};
  line-height: 2.8rem;
`;

export const SubHeading2 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.6rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BLACK)};
  line-height: 2.4rem;
`;

export const Body1 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.4rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BOLD)};
  line-height: 2.0rem;
`;

export const Body2 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.6rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BOLD)};
  line-height: 2.4rem;
`;

export const Small1 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.1rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BOLD)};
  line-height: 1.6rem;
`;

export const Small2 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.2rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BOLD)};
  line-height: 1.6rem;
`;

export const Small3 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 1.0rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BOLD)};
  line-height: 1.4rem;
`;

export const Display01 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 4.8rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BLACK)};
  line-height: 7.2rem;
`;

export const Display02 = styled.span`
  color: ${props => props.theme.text02}
  font-size: 4.0rem;
  font-style: normal;
  font-weight: ${getWeight(FONT_BLACK)};
  line-height: 5.6rem;
`;
