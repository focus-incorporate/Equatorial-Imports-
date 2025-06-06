import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
