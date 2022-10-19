import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>File Upload</title>
        <meta name="description" content="A basic file upload web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.box}>
        <div className={styles.uploadBox}>
            <div className={styles.titleBox}>Testing Multiple DBs</div>
            <form className={styles.formBox}>
              <div className={styles.nameBox}>
              <label>Name</label>
              <input type="text"/>
              </div>
              <div className={styles.uploadBox1}>
              <label>Select image:</label>
              <input type="file" className={styles.fileUpload} accept="image/*"/>
              </div>
            </form>
        </div>
      </main>
      
    </div>
  )
}

export default Home
