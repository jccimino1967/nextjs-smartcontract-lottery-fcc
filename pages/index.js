import Head from "next/head";
import styles from "../styles/Home.module.css"
import Header from "../components/Header";
import EntradaAlaLoteria from "../components/EntradaAlaLoteria"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <tittle>Contrato inteligente de Loteria</tittle>
        <meta name="description" content="Our Smart Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <EntradaAlaLoteria />
    </div>
  )
}