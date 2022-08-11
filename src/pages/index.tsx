import Head from "next/head";
import ProductPreviewCard from "../components/ProductPreviewCard";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Product Preview Card Component</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ProductPreviewCard />
    </main>
  );
}
