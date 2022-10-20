import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import UsersHeader from '../components/UsersHeader'
import UsersItem from '../components/UsersItem'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next</title>
        <meta name="description" content="Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}></header>
      <div className={styles.wrapper}>
        <main>
          <Intro />
          <UsersHeader />
          <UsersItem />
          <UsersItem />
          <UsersItem />
          <UsersItem />
        </main>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
