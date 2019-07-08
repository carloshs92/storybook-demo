const base = {
    breakPoints: {
        mobileM: `(min-width: 375px)`,
        mobileS: `(min-width: 320px)`
    },
    colors: {
        blue: "#81a8d2",
        blueGrey: "#748e98",
        darkGrey: "#4a4a4a",
        disabled: "#e6edf2",
        disabledText: "#adb7c4",
        error: "#ff8389",
        green: "#82d2ad",
        lightGrey1: "#eef2f6",
        lightGrey2: "#f3f4f6",
        lightGrey3: "#f9fbff",
        mediumGrey: "#696d6e",
        turquoise: "#24a3ab",
        white: "#ffffff",
    },
    fonts: {
        Lato: '"Lato", sans-serif'
    },
    helpers: {
        turquoise1: "#219ba3",
        turquoise2: "#1d9198",
        white1: "#f1f5f6",
        white2: "#edf2f4"
    }
};

export const theme = {
    ...base
};
