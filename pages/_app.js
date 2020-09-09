import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import "../styles/global.css";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>tred</title>
          <meta
            name="google-site-verification"
            content="61KvfFnJBI-r-wiMBmp1BgQWD5e7MVNO3vc7ZH1kSqc"
          />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css"
          />

          <link rel="icon" href="/img/tred-fav.png" />
          <meta property="og:site_name" content="tred" />
          <meta property="og:title" content="tred" />
          <meta
            property="og:description"
            content="Join the community saving our planet"
          />
          <meta
            property="og:image"
            itemProp="image"
            content="https://www.tred.earth/img/meta-image.png"
          />
          <meta property="og:url" content="https://www.tred.earth" />
          <meta property="og:type" content="website" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
