import React from 'react'
import {MYSKILLS} from '../utils/mock'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

import { Link } from 'react-scroll';
const Skills = () => {
  return (
    <div className='lg:min-h-[100vh] mt-[100px]  mb-[5px] flex flex-col justify-center items-center' id='skills'>
      
        <div className='container mx-auto h-fit '>
        <h2 className="h2 text-accent text-center mb-[90px]" >Skillset Highlights</h2>
          
         <div >
        

         </div>
            <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} className='flex flex-col lg:flex-row  gap-x-7 gap-y-7 w-[80wv] justify-around items-center '>
                {MYSKILLS.map((skill)=>( <div key={skill.id} className='sm:flex-col'> <img src={skill.url} alt='skills' className='lg:w-[200px] lg:h-[200px] w-[150px] h-[150px]'/></div> ))

                }
            
            </motion.div>
        </div>
    
        <div className='container mx-auto h-fit flex justify-center '>
        <Link to="work"  smooth={true}
            spy={true}
           
            activeClass="active" >
       <button className="btn btn-lg mt-[100px]">see my work</button>
       </Link>
          
     </div>
    </div>
  )
}

export default Skills