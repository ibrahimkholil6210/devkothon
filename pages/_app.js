import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "../assets/css/syntaxHighlight.css";

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
  editorColor: {
    bgTop: "#15202b",
    fColor: "#ffffff",
    bgOff: "#123d43",
    borderColor: "#000",
    codeArea: "#11464e",
    fileNamebg: "#0f3237",
    fSize: "14px",
  },
};

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
