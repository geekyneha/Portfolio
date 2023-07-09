import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';

import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
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
   
      <Education />
      <Skills/>
      <Work />
      
      
      
     
    
      <Resume />
      <ContactUs />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
