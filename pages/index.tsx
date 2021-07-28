import Head from "next/head";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Futbar</title>
        <meta
          name="description"
          content="FUTBAR es la app para encontrar bares con fútbol cerca de ti, conocer sus novedades y promociones, y participar en porras para llevarte regalos exclusivos."
        />
        <meta name="og:title" property="og:title" content="Futbar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>Esto es el contenido</h1>
      </main>
      <footer>
        <h3>Esto es el footer</h3>
      </footer>
    </div>
  );
}
