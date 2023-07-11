import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const education = [
  {
    name: "Bachelor of Computer Application       (BCA)  ",
    college:
      " Vidya Bharti Mahvidyalya Amravati, Maharashtra,India.",

    year: "2019 - 2022",
    about: " I completed my first year at Vidyabharti Mahavidyalaya in Amravati, and subsequently transferred to Maherbanu for my second and third year.",

    marks:"81%"
  },
  {
    name: "Higher Secondary Certiificate               (HSC}",
    college:
      " Suffah English Junior College Akola, Maharashtra, India.",
    year: "2018- 2019",
    marks:"58%"

  },
  {
    name: "Secondary School Certificate                (SSC)    ",
    college:
      " Millat High School  Akola, Maharashtra, India.  ",
    year: "2016 - 2017",
    marks:"83%"
  },
];
const Education = () => {
  return (
    <section className="min-h-[100vh] lg:max-h-[98vh] flex items-center"  id="education">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}

           className="flex-1 lg:bg-education lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mt-20 " >Academic Qualifications</h2>
            <h3 className="h4 max-w-[455px] mb-16">
           Having Graduated in 2022, I embarked on a journey to dive deep into the world of web development.Currently, I am proudly serving as a frontend dev trainee at FunctionUp, an environment that has nourished my growth and passion for frontend development. Here, I have delved into the world of modern web development, expanding my skill set to include the powerful React.js framework. Armed with this technology, I have been able to bring web applications to life, leveraging its capabilities to create dynamic and immersive user interfaces.
            </h3>
          <div className="mx-auto max-w-[400px]">  <Link to="skills" ><button className="btn btn-sm ">Areas of Expertise</button></Link></div>
          </motion.div>
        
        {/* servies */}
            <motion.div
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} className="flex-1">
              <div >
                {education.map((service, index) => {
                  const { name, college, year,marks } = service;
                  return (
                    <div
                      className="border-b border-white/20 h-[146px] mb-[38px] flex"
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className="font-secondary leading-tight">
                          {college}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a href="#" className="btn w-14 h-14 mb-[42px] flex justify-center items-center">
                          
                                {marks}
                        </a>
                        <a href="#" className="text-gradient text-sm">{year}</a>
                        </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        
      </div>
    </section>
  );
};

export default Education;
