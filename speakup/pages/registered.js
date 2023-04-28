import React from 'react'
import Studentregister from './components/Studentregister'
import Head from "next/head";

const registered = () => {

  return (
    <>
    <Head>
    <title>SPEAK-UP : REGISTER</title>
    <meta
      name="description"
      content="Generated by developer for the who needs to be thier doubts and want to learn from the expert"
    />
    <link rel="icon" href="/neev.png" />
  </Head>
  
    <div className='w-full h-full from-slate-600 bg-gradient-to-t'><Studentregister/></div>
    </>
  )
}

export default registered