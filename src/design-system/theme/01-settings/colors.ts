import baseStyled, { ThemedStyledInterface } from 'styled-components';

export interface IColor {
  uiBackground01: string;
  uiBackground02: string;
  uiBackground03: string;
  interactive01: string;
  interactive02: string;
  supportSuccess: string;
  supportError: string;
  supportAlert: string;
  text01: string;
  text02: string;
  text03: string;
  disabledBackground: string;
  disabledText: string;
  helpers: {
    interactive01__hover: string;
    interactive01__active: string;
    interactive02__hover: string;
    interactive02__active: string;
    uiBackground03__hover: string;
    uiBackground03__active: string;
  }
}

const lightTheme: IColor = {
  uiBackground01: "#ebf1f5",
  uiBackground02: "#f9fbff",
  uiBackground03: "#ffffff",
  interactive01: "#6236ff",
  interactive02: "#00d8d5",
  supportSuccess: "#6dd400",
  supportError: "#ff4a6a",
  supportAlert: "#ffc541",
  text01: "#696d6e",
  text02: "#4a4a4a",
  text03: "#ffffff",
  disabledBackground: "#e6edf2",
  disabledText: "#adb7c4",
  helpers: {
    interactive01__hover: "#5327ef",
    interactive01__active: "#5327ef",
    interactive02__hover: "#00c5c3",
    interactive02__active: "#00c5c3",
    uiBackground03__hover: "#f1f5f6",
    uiBackground03__active: "#edf2f4"
  }
};

const darkTheme: IColor = {
  uiBackground01: "#292d3e",
  uiBackground02: "#394d1e",
  uiBackground03: "#796d7e",
  interactive01: "#B276ff",
  interactive02: "#90F8F5",
  supportSuccess: "#6dd400",
  supportError: "#ff4a6a",
  supportAlert: "#ffc541",
  text01: "#ffffff",
  text02: "#F9EdFe",
  text03: "#eeeeee",
  disabledBackground: "#e6edf2",
  disabledText: "#adb7c4",
  helpers: {
    interactive01__hover: "#219ba3",
    interactive01__active: "#1d9198",
    interactive02__hover: "#219ba3",
    interactive02__active: "#1d9198",
    uiBackground03__hover: "#f1f5f6",
    uiBackground03__active: "#edf2f4"
  }
};

export const theme = {
  dark: darkTheme,
  light: lightTheme
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
