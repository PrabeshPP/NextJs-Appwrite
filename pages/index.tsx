import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useState,useEffect } from 'react';
import { appwriteSDK,accountSDK } from '../helper/util';

const Home: NextPage = () => {
  const [file,setFile]=useState<File>();
  const [name,setName]=useState<String>("");

  const checkSession=async()=>{
    const validSession=accountSDK().get();
    if(!validSession){
     try{
      const response= await accountSDK().createAnonymousSession();
      console.log(response);
     }catch(err){
        console.log(err);
     }
    }
  }


  useEffect(()=>{
      
  },[])


  const handleSubmit=async(event:any)=>{
        event.preventDefault();
        console.log(event.target);
  }

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
            <form className={styles.formBox} onSubmit={handleSubmit}>
              <div className={styles.nameBox}>
              <label>Name</label>
              <input type="text" name='namde'/>
              </div>
              <div className={styles.uploadBox1}>
              <label>Select image:</label>
              <input name="fileName"type="file" className={styles.fileUpload} accept="image/*"/>
              </div>
              <button className={styles.submitButton}>Submit</button>
            </form>
        </div>
      </main>
      
    </div>
  )
}

export default Home
