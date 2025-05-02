import React from 'react';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Hero from './Components/Hero/Hero';

import MyService from './Components/MyServices/MyService';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contactform/ContactForm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <MyService/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App