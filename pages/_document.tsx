// import { ThemeContextProvider } from '@/src/ThemeProvider'
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Walaa Ibrahim Portfolio</title>
        <meta
          name="description"
          content="portfolio-front end-frontend-front-end-react-reactjs-react.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/header.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"/>
      </Head>
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
