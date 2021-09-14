import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head />
        <body className="loading p-4 box-border">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument