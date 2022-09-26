import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
