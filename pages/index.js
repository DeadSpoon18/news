import Head from "next/head";
import Image from "next/image";
import Toolbar from "../components/Toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="Great news only for you.!" />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>News App</h1>
          <h3>Your one stop shop for the latest news article.</h3>
        </div>
      </div>
    </>
  );
}
