import { Layout } from "@/components"
import "@/styles/global.css"
import { createEmotionCache, MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"
import Head from "next/head"
const myCache = createEmotionCache({
  key: "mantine",
  prepend: false,
})

export default function QuantumAssignment(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Quantum Assessment</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Quantum.ai" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://res.cloudinary.com/drhrbob2m/image/upload/v1675303246/favicons/apple-120x120-touch-icon_a8pjpk.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/drhrbob2m/image/upload/v1675303246/favicons/favicon-32x32_jb33nb.png"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/drhrbob2m/image/upload/v1675303246/favicons/apple-120x120-touch-icon_a8pjpk.png"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MantineProvider emotionCache={myCache} withGlobalStyles withNormalizeCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}
