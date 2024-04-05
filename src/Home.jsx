import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Latest from './components/Latest';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <>
	<Header/>
  <Latest/>
  <Navbar/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default Home