import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Hind Siliguri', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: "#000000",
    offColor: "#40a9ff",
    invert: "#ffffff",
  },
  bgColors: {
    primary: "#ffffff",
    invert: "#000000",
    offColor: "#f9f9f9",
  },
  linkSize: {
    lg: {
      fSize: "18px",
      fWeight: 600,
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
