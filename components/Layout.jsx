import React from 'react';
import Head from 'next/head';
import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Technology Store</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <header>
        <NavBar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout;