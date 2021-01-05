import React from 'react'
import GlobalStyles from 'layouts/globalStyles'

const MyApp = ({ Component, pageProps }) => (
  <React.Fragment>
    <GlobalStyles />
    <Component {...pageProps} />
  </React.Fragment>
)

export default MyApp
