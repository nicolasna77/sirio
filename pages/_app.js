import "../styles/globals.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import AppContextProvider, { AppContext } from "../context/App-Context";
import SnackbarComp from "../components/SnackBar";
import { useContext, useState } from "react";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'roboto, nunito';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
   }
      `,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#5a5a5a",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#8e111b",
    },
    text: {
      secondary: "rgba(20,20,20,0.7)",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
  },
});

function MyApp({ Component, pageProps, currentUser }) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
