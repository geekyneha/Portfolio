import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8 '>
    <div className='container mx-auto'>
    
     <div className='flex justify-between items-center'>
      <img src={logo} alt="Neha" width={100} />

<Link to="contact"  smooth={true}
            spy={true}
        
            activeClass="active" >
<button className='btn btn-sm cursor-pointer' >let's connect!</button>
</Link>
      

     </div>
    </div>
  </header>;
};

export default Header;
