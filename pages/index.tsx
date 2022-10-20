import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useState,useEffect } from 'react';
import { appwriteSDK,accountSDK } from '../helper/util';
import { url } from 'inspector';

const Home: NextPage = () => {
  const [file,setFile]=useState<File>(null!);
  const [name,setName]=useState<String>("");

  const checkSession=async()=>{
    const validSession= accountSDK().get();
    if(!validSession){
      try{
        const promise= await accountSDK().createAnonymousSession();
        console.log(promise);
      }catch(err){
          console.log(err);
      }
      
    }
    

  }


  useEffect(()=>{
      checkSession();
  },[])


  const handleSubmit=async(event:any)=>{
        event.preventDefault();
        const sdk=await appwriteSDK().createFile(
          '634f471be7eeae64119f',
          'unique()',
          file
        )

        const data={name,upload:sdk.$id};
        const response=await  fetch("api/upload",{
          method:"POST",
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify(data)
        });
        alert("File Uploaded Successfully!");

        
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
              <input type="text" name='namde' onChange={(event)=>{
                  setName(event.target.value);
              }}/>
              </div>
              <div className={styles.uploadBox1}>
              <label>Select image:</label>
              <input name="fileName"type="file" className={styles.fileUpload} accept="image/*" onChange={(event)=>{
                  setFile(event.target.files![0]);
              }}/>
              </div>
              <button className={styles.submitButton}>Submit</button>
            </form>
        </div>
      </main>
      
    </div>
  )
}

export default Home
