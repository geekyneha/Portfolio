import React from 'react'
import {MYSKILLS} from '../utils/mock'

const Skills = () => {
  return (
    <div className='min-h-[85vh] lg:min-h-[90vh] mb-[500px] flex items-center' id='skills'>
        <div className='container mx-auto h-fit '>
         <div>

         </div>
            <div className='flex flex-col lg:flex-row  gap-x-7 w-[80wv] justify-around items-center '>
                {MYSKILLS.map((skill)=>( <div key={skill.id} className='sm:flex-col'> <img src={skill.url} alt='skills' className='w-[200px] h-[200px] '/></div> ))

                }

            </div>
        </div>
        
    </div>
  )
}

export default Skills