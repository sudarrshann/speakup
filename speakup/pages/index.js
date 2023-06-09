import Head from 'next/head'
import { useState } from 'react';
import Studentregister  from './components/Studentregister';
import Login from './components/Login';



export default function Home() {
  
  return (
    <>
      <Head>

        <title>SPEAK-UP : LOGIN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    
      </Head>
      <div className='w-full h-full from-slate-600 bg-gradient-to-t'>
      <Login/>
      </div>
      
  </>
  )
}
