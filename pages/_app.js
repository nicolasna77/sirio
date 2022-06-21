import "../styles/globals.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import AppContextProvider, { AppContext } from "../context/App-Context";

import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
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

const progress = new ProgressBar({
  size: 2,
  color: "#8e111b",
  className: "bar-of-progress",
  delay: 200,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
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
