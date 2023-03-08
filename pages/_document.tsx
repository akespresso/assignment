/* eslint-disable */

import { createGetInitialProps } from "@mantine/next"
import Document, { Head, Html, Main, NextScript } from "next/document"

export default class _Document extends Document {
  static getInitialProps = createGetInitialProps()

  render() {
    return (
      <Html className="scroll-smooth">
        <Head />
        <body className="bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
