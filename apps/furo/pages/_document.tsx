// pages/_document.js

import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&&display=swap" rel="stylesheet" />
        </Head>
        <body className="!bg-input">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
