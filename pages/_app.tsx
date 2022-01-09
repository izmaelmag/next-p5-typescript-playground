import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #fafafa;
    font-family: 'Courier Prime', monospace;
  }

  a {
    /* color: inherit; */
    text-decoration: none;
    color: #ff8300;

    &:hover {
      color: #ffb200;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin: 0;
  }
`;

// Applies global styles
const MyApp = ({ Component, pageProps }) => (
  <React.Fragment>
    <GlobalStyles />
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link href='https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap' rel='stylesheet' />
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
);

export default MyApp;
