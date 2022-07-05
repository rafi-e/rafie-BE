import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <title>Rafi_E Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/slick.min.js"></script>
      </body>
    </Html>
  );
}
