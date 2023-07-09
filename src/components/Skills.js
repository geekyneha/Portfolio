import React from 'react'
import {MYSKILLS} from '../utils/mock'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const Skills = () => {
  return (
    <div className='min-h-[100vh] mb-[500px] flex items-center' id='skills'>
      
        <div className='container mx-auto h-fit '>
        <h2 className="h2 text-accent text-center mb-[90px]" >Skills</h2>
          
         <div>
        

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
        
    </div>
  )
}

export default Skills