import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';

import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs/ContactUs';
import Skills from './components/Skills';
import Resume from './components/Resume/Resume';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden p-5px'>
      <Header />
      <Banner />
      <About />
      
      <NavBar />
   
      <Services />
      <Work />
      
      <Skills/>
      
     
    
      <Resume />
      <ContactUs />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
