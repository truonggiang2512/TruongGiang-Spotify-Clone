"use client";
import { Lalezar, Roboto } from "next/font/google";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { colors, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { PaletteOptions } from "@mui/material/styles";
import React from "react";

// Define the custom palette options type
interface CustomPaletteOptions extends PaletteOptions {
  black?: {
    main: string;
  };
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const laleraz = Lalezar({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    allVariants: {
      color: "#FFFFFF",
    },
    h4: {
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: laleraz.style.fontFamily,
      fontSize: 42,
    },
    h5: {
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: laleraz.style.fontFamily,
      fontSize: 38,
    },
    h6: {
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: laleraz.style.fontFamily,
      fontSize: 18,
      textAlign: "center",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#FFFFFF",
            margin: "2rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "1px solid #FFFFFF",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#FFFFFF",
          "&.Mui-checked": {
            color: "#1ED760",
          },
          padding: "9px 14px 10px 0px",
        },
        track: {
          marginLeft: "-10px",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          "&.MuiDivider-root": {
            backgroundColor: "#FFFFFF",
          },
        },
      },
      variants: [
        {
          props: { variant: "fullWidth" },
          style: {
            ":before": {
              borderTop: "thin solid #ffffff",
            },
            ":after": {
              borderTop: "thin solid #ffffff",
            },
          },
        },
      ],
    },
  },

  palette: {
    primary: {
      main: "#1ED760",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
    action: {
      active: colors.blue[500],
    },
    error: {
      main: colors.red[500],
    },
    warning: {
      main: colors.orange[500],
    },
    info: {
      main: colors.blue[500],
    },
    success: {
      main: colors.green[500],
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
