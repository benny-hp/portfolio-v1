import { theme } from "../src/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../src/styles/GlobalStyles";
import "normalize.css";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
