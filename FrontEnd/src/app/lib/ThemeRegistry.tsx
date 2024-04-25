"use client";
import { Lalezar, Roboto } from "next/font/google";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { colors, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";

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
    caption: {
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: roboto.style.fontFamily,
      fontSize: 24,
    },
    h3: {
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: roboto.style.fontFamily,
      fontSize: 32,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: roboto.style.fontFamily,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontFamily: roboto.style.fontFamily,
      fontSize: 16,
      color: "#B3B3B3",
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
            margin: 0,
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
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
          marginTop: "8px",
          minWidth: 180,
          color: "rgb(55, 65, 81)",
          boxShadow:
            "0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.05), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "& .MuiMenu-list": {
            padding: "4px 0",
          },
          "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
              fontSize: 18,
              marginRight: "12px",
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#fff",
          padding: "6px 10px",
          backgroundColor: "#282828",
          "&:hover": {
            backgroundColor: "#383838",
          },
        },
      },
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
