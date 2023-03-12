// import { createTheme } from "@mui/system";
import { createTheme } from "@mui/material";
// import { blue, purple } from "@mui/material/colors";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
    // toggleMode: () => {},
    // mode: "light",
});

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            mode,
        }),
        [mode]
    );

    const theme = createTheme({
        palette: {
            mode: mode,

            primary: {
                main: "#2D2D7D",
                light: "#575797",
                dark: "#0A0A14",
                green: "#00FF00",
                white: "#FFFFFF",
                contrastText: "#fff",
                red: "#FF0000",
                blue: "#5502B5",
            },
            secondary: {
                light: "#6fbf73",
                main: "#4caf50",
                dark: "#357a38",
                fade: "#959EAD",
                contrastText: "#000",
            },
            info: {
                light: "#6fbf73",
                main: "#eb4d4b",
                dark: "#357a38",
                contrastText: "#000",
            },
            text: {
                light: "#b3b3b3",
                blue: "#5502B5",
                purple: "#7703FC",
            },

            components: {
                MuiContainer: {
                    defaultProps: {
                        // maxWidth: "1400px", // 1200
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            fontSize: "1rem",
                            padding: "0.6rem 2.5rem",
                        },
                    },
                    defaultProps: {
                        variant: "contained",
                        color: "primary",
                        // disableRipple: true,
                    },
                },
            },
        },
    });

    const themeInfo = {
        theme,
        setMode,
        mode,
        colorMode,
    };
    return <ColorModeContext.Provider value={themeInfo}>{children}</ColorModeContext.Provider>;
};
